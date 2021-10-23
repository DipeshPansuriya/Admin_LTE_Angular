import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './roles/role/role.component';
import { RolelistComponent } from './roles/rolelist/rolelist.component';
import { RolerightsComponent } from './rolesrights/rolerights/rolerights.component';
import { UserComponent } from './users/user/user.component';
import { UserlistComponent } from './users/userlist/userlist.component';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'user', component: UserComponent },
  { path: 'rolelist', component: RolelistComponent },
  { path: 'role', component: RoleComponent },
  { path: 'right', component: RolerightsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
