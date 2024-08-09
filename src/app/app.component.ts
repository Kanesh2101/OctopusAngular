import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordsTableComponent } from './records/records-table/records-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecordsTableComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interviewTest';
}
