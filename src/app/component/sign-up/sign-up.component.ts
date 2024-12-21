import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from "@angular/router";
import {FormBuilder,Validators, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule, RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{
  formbuilder = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.formbuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.register(rawForm.email,rawForm.username,rawForm.password).subscribe({
      next : ()=>{
        this.router.navigateByUrl('/login');
      },
      error : (err)=> {
        this.errorMessage = err.code;
      }

    })
  }


}
