import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NewuserComponent } from './newuser/newuser.component';
import { AuthGuard } from './app.auth-guard'
export const route: Routes = [
    { path: '', component: UserComponent },
    { path: 'login', component: UserComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: [{ loginStatus: '1' }] },
    { path: 'newuser', component: NewuserComponent, canActivate: [AuthGuard], data: [{ loginStatus: '2' }] }
]; 
