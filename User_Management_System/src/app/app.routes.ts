import { Routes } from '@angular/router';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},


    {
        path:'user/list',
        component:UserListComponent
    },
    
    {
        path:'user/create',
        component: UserCreateComponent
    },

    {path:'user/:id',
        component:UserDetailComponent
    },
]