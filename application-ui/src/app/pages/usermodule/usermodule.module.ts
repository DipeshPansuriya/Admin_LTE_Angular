import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { UseraddupdateComponent } from './users/useraddupdate/useraddupdate.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { RoleaddupdateComponent } from './roles/roleaddupdate/roleaddupdate.component';
import { RolelistComponent } from './roles/rolelist/rolelist.component';
import { RolerightsComponent } from './rolesrights/rolerights/rolerights.component';

@NgModule({
  declarations: [
    UseraddupdateComponent,
    UserlistComponent,
    RoleaddupdateComponent,
    RolelistComponent,
    RolerightsComponent,
  ],
  imports: [CommonModule, UsermoduleRoutingModule],
})
export class UsermoduleModule {}
