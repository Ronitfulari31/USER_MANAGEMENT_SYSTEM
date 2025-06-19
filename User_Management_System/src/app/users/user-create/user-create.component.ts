import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../shared/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userForm!: FormGroup;
  departments = ['HR', 'Engineering', 'Sales', 'Marketing'];
  countries = ['India', 'USA', 'UK', 'Germany'];

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      personalInfo: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required]
      }),
      jobInfo: this.fb.group({
        department: ['', Validators.required],
        position: ['', Validators.required],
        skills: this.fb.array([], Validators.required),
        salary: [0, Validators.required],
        status: ['Active', Validators.required],
        jobstartDate: ['', Validators.required]
      }),
      additionalInfo: this.fb.group({
        country: ['', Validators.required],
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        bio: ['']

      })
    });
  }

  // Getters for nested FormGroups (Option 2)
  get personalInfo(): FormGroup {
    return this.userForm.get('personalInfo') as FormGroup;
  }

  get jobInfo(): FormGroup {
    return this.userForm.get('jobInfo') as FormGroup;
  }

  get additionalInfo(): FormGroup {
    return this.userForm.get('additionalInfo') as FormGroup;
  }

  // Access the skills FormArray inside the jobInfo group
  get skills(): FormArray {
    return this.jobInfo.get('skills') as FormArray;
  }

  addSkill(skillInput: HTMLInputElement): void {
    const value = skillInput.value.trim();
    if (value) {
      this.skills.push(this.fb.control(value));
      skillInput.value = '';
    }
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = {
        id: uuidv4(),
        ...this.personalInfo.value,
        ...this.jobInfo.value,
        ...this.additionalInfo.value
      };

      this.storageService.saveUser(user);
      this.snackBar.open('User created successfully!', 'Close', {
        duration: 3000
      });

      this.router.navigate(['/user/list']);
    }
  }
}
