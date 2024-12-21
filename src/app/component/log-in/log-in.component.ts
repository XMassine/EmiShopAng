import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  errorMessage: string | null = null ;


  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  onSubmit(): void {

    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email,rawForm.password).subscribe({
      next : ()=>{
        this.router.navigateByUrl('');
      },
      error : (err)=> {
        this.errorMessage = err.code;
      }

    })
  }
}
