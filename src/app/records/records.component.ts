import { Component } from '@angular/core';
import { RecordsTableComponent } from './records-table/records-table.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [RecordsTableComponent, HttpClientModule, RouterModule],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css',
})
export class RecordsComponent {}
