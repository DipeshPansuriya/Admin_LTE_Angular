import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './pagelayout/fullpage/fullpage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: FullpageComponent,
    // canActivate: [AuthGuardGuard],
    children: [{
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    }],
  },
  {
    path: '',
    component: FullpageComponent,
    // canActivate: [AuthGuardGuard],
    children: [{
      path: '',
      loadChildren: () =>
        import('./pages/users/users.module').then((m) => m.UsersModule),
    }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
