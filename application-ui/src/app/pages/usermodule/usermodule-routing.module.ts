import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseraddupdateComponent } from './users/useraddupdate/useraddupdate.component';
import { UserlistComponent } from './users/userlist/userlist.component';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'user', component: UseraddupdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermoduleRoutingModule {}
