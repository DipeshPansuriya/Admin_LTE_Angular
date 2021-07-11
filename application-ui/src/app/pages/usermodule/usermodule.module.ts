import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { UseraddupdateComponent } from './users/useraddupdate/useraddupdate.component';
import { UserlistComponent } from './users/userlist/userlist.component';

@NgModule({
  declarations: [UseraddupdateComponent, UserlistComponent],
  imports: [CommonModule, UsermoduleRoutingModule],
})
export class UsermoduleModule {}
