import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';

// Material class/directive/service imports (needed even with MaterialModule)
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { StorageService } from '../../shared/storage.service';
import { User } from '../../shared/user.model';
import { MaterialModule } from '../../material/material.module';

import { ConfirmDialogComponent } from '../../shared/confirm-dailog/confirm-dailog.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [

    CommonModule,
    RouterModule,
    RouterLink,
    MaterialModule,// Material modules used via central file
  ]
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'fullName',
    'email',
    'phone',
    'department',
    'status',
    'startDate',
    'actions'
  ];
  
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const users = this.storageService.getUsers();
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewUser(id: string): void {
    this.router.navigate(['/user', id]);
  }

  deleteUser(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storageService.deleteUser(id);
        this.dataSource.data = this.storageService.getUsers(); // refresh list
      }
    });
  }
}
