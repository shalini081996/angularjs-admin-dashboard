import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatSelectModule, MatDialogModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private matDialog: MatDialogRef<AddUserComponent>
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.matDialog.close(this.userForm.value)
  }

  public close(): void {
    this.matDialog.close();
  }

}
