import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './pages/employees/employees.component';

import { EmployeesResolverService } from '@tuxedo-utils/employee-lib';
import { LoggedInGuardService, AllowedRolesGuardService } from '@tuxedo-utils/user-lib';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    resolve: {
      employees: EmployeesResolverService,
    },
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Employees Page',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeToolRoutingModule {}
