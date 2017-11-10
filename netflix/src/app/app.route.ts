import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
// import { AuthGuard} from './app.auth-guard'
export const route: Routes = [
    { path: '', component: UserComponent } ,
    { path: 'login', component: UserComponent } ,
// {path:'admin',component:UserComponent, canActivate: [AuthGuard], data: [{ loginStatus: '1' }]},
// {path:'user',component:UserComponent, canActivate: [AuthGuard], data: [{ loginStatus: '2' }]}
  ]  
