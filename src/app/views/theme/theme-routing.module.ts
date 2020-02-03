import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { sdComponent } from './servicedesk.component';
import { RDSComponent } from './rds.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tracks'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'servicedesk',
        component: sdComponent,
        data: {
          title: 'Service Desk Track'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'User Management'
        }
      },
      {
        path: 'rds',
        component: RDSComponent,
        data: {
          title: 'RDS Track'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
