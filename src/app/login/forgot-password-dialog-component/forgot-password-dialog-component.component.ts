import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from '../../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-dialog-component',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './forgot-password-dialog-component.component.html',
  styleUrl: './forgot-password-dialog-component.component.css'
})
export class ForgotPasswordDialogComponentComponent {
  passObj: ForgotPassword = new ForgotPassword();

  private _appService = inject(AppserviceService);
  private _router = inject(Router);
  public dialogRef = inject(MatDialogRef<ForgotPasswordDialogComponentComponent>);

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(email: string, phonenumber: string, newpassword: string): void {
    this.passObj.Email = email;
    this.passObj.PhoneNumber = phonenumber;
    this.passObj.NewPassword = newpassword;
debugger
    this._appService.UpdatePassword(this.passObj).subscribe({
      next: (res: any) => {
        alert('Password updated successfully!');
        this._router.navigate(['/login']);
        this.dialogRef.close();
      },
      error: (err: any) => {
        console.error('Password reset error:', err);
        alert('Reset failed. Please check your inputs or try again later.');
      }
    });
  }
}

export class ForgotPassword {
  Email: string = '';
  PhoneNumber: string = '';
  NewPassword: string = '';
}
