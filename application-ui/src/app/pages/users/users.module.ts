import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './users/user/user.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { RoleComponent } from './roles/role/role.component';
import { RolelistComponent } from './roles/rolelist/rolelist.component';
import { RolerightsComponent } from './rolesrights/rolerights/rolerights.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserlistComponent,
    RoleComponent,
    RolelistComponent,
    RolerightsComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
