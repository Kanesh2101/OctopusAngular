import { RouterModule, Routes } from '@angular/router';
import { RecordsTableComponent } from './records/records-table/records-table.component';
import { RecordsFormComponent } from './records/records-form/records-form.component';
import { NgModule } from '@angular/core';
import { RecordsComponent } from './records/records.component';

export const routes: Routes = [
  {
    path: 'task',
    component: RecordsComponent,
    children: [
      {
        path: 'task-table',
        component: RecordsTableComponent,
      },
      {
        path: 'task-form',
        component: RecordsFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
