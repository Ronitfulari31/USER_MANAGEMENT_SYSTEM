
//user conta
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  department: string;
  position: string;
  skills: string[];
  bio: string;
  salary: number;
  country: string;
  address: string;
  zipCode: string;
  status: 'Active' | 'Inactive';
  startDate: Date;
}
