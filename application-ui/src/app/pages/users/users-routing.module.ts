import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './roles/role/role.component';
import { RolelistComponent } from './roles/rolelist/rolelist.component';
import { RolerightsComponent } from './rolesrights/rolerights/rolerights.component';
import { UserComponent } from './users/user/user.component';
import { UserlistComponent } from './users/userlist/userlist.component';

const routes: Routes = [
  { path: 'admin/users', component: UserlistComponent },
  { path: 'admin/user', component: UserComponent },
  { path: 'admin/rolelist', component: RolelistComponent },
  { path: 'admin/role', component: RoleComponent },
  { path: 'admin/right', component: RolerightsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
