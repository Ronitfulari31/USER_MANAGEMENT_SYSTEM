// This service is used to manage user data in localStorage (browser storage).
// It allows saving, retrieving, deleting, and finding users by ID.

import { Injectable } from '@angular/core';
import { User } from './user.model';

// Marks this class as injectable and available application-wide
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Key used to store/retrieve data from localStorage
  private storageKey = 'users';

  // Get all users from localStorage
  getUsers(): User[] {
    const users = localStorage.getItem(this.storageKey); // get string from storage
    return users ? JSON.parse(users) : []; // convert string to object array, or return empty array
  }

  // Save a new user to localStorage
  saveUser(user: User): void {
    const users = this.getUsers();  // get existing users
    users.push(user);               // add new user
    localStorage.setItem(this.storageKey, JSON.stringify(users)); // save updated list
  }

  //  Delete a user by ID
  deleteUser(id: string): void {
    // Filter out the user with the given ID
    const users = this.getUsers().filter(user => user.id !== id);
    // Save the updated user list
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Find a user by their ID
  getUserById(id: string): User | undefined {
  const users = this.getUsers();
  return users.find(u => u.id === id);
}


}
