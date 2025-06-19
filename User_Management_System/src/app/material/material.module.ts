import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Layout
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';

// Table & Pagination
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// Feedback
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNavList } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,

    // Layout
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatNavList,

    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,

    // Forms
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,

    // Table & Pagination
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    // Feedback
    MatSnackBarModule,
    MatDialogModule,

    ReactiveFormsModule,
  ],
  exports: [
    MatNavList,
    // same list as imports
     MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,

    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,

    // Forms
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,

    // Table & Pagination
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    // Feedback
    MatSnackBarModule,
    MatDialogModule,

    ReactiveFormsModule,
  ]
})
export class MaterialModule {}
