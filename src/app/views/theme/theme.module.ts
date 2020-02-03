// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { sdComponent } from './servicedesk.component';
import { RDSComponent } from './rds.component';
import { UsersComponent } from './users.component';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule
  ],
  declarations: [
    sdComponent,
    RDSComponent,
    UsersComponent
  ]
})
export class ThemeModule { }
