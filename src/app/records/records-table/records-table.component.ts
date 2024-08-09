import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Task } from '../../types/task.type';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-records-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButton,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './records-table.component.html',
  styleUrl: './records-table.component.css',
})
export class RecordsTableComponent implements OnInit {
  taskData: MatTableDataSource<Task> = new MatTableDataSource();

  displayedColumns: string[] = [
    'id',
    'description',
    'status',
    'assignedBy',
    'assignedTo',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router, private service: TaskService) {}

  ngOnInit(): void {
    this.service
      .getTasks()
      .subscribe((res: any) => (this.taskData = res.value));
  }

  reroute() {
    this.router.navigate(['task-form']);
  }

  deleteTask(task: Task) {
    this.service.deleteTask(task.id).subscribe((res: any) => {
      if (res.result) {
        alert('Delete Success');
        this.router.navigate(['task-table']);
      }
    });
  }

  viewTask(task: Task) {
    console.log('task beforer pased', task);
    this.router.navigate(['task/task-form'], { state: { taskData: task } });
  }
}
