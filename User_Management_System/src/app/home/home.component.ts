import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-home',
  imports: [ MatCardModule, MatButtonModule, MatIconModule, RouterModule,MaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSidebarOpen = false;

  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
