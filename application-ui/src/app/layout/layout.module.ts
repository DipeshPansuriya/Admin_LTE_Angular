import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SettingComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SettingComponent,
  ],
})
export class LayoutModule {}
