import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../types/task.type';
import { TaskService } from '../../service/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-records-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './records-form.component.html',
  styleUrl: './records-form.component.css',
})
export class RecordsFormComponent implements OnInit {
  constructor(private router: Router, private service: TaskService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras) {
      const state = navigation.extras.state as { taskData: Task };
      console.log('taskObj state', state);

      if (state) {
        this.taskObj = state.taskData;
        console.log('taskObj', this.taskObj);
        this.isEditForm = true;
      }
    }
  }
  taskForm!: FormGroup;
  taskObj: Task = {
    id: 0,
    description: '',
    status: '',
    assignedBy: '',
    assignedTo: '',
    startDate: '',
    endDate: '',
    updatedAt: '',
    updatedBy: '',
    createdAt: '',
    createdBy: '',
  };
  isEditForm = false;
  titleLable = '';

  get buttonLabel() {
    if (this.isEditForm) {
      return 'Update Task';
    } else {
      return 'Add Task';
    }
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      assignedBy: new FormControl('', [Validators.required]),
      assignedTo: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      updatedAt: new FormControl('', [Validators.required]),
      updatedBy: new FormControl('', [Validators.required]),
      createdAt: new FormControl('', [Validators.required]),
      createdBy: new FormControl('', [Validators.required]),
    });

    if (this.isEditForm) {
      this.populateForm();
    }
  }

  populateForm() {
    this.taskForm.setValue({
      id: this.taskObj.id,
      description: this.taskObj.description,
      status: this.taskObj.status,
      assignedBy: this.taskObj.assignedBy,
      assignedTo: this.taskObj.assignedTo,
      startDate: this.taskObj.startDate,
      endDate: this.taskObj.endDate,
      updatedAt: this.taskObj.updatedAt,
      updatedBy: this.taskObj.updatedBy,
      createdAt: this.taskObj.createdAt,
      createdBy: this.taskObj.createdBy,
    });
  }

  onSubmit() {
    if (this.isEditForm) {
      this.service.updateTask(this.taskForm.value).subscribe((res: any) => {
        if (res.result) {
          alert('Update Success');
          this.router.navigate(['task-table']);
        }
      });
    } else {
      this.service.addTasks(this.taskForm.value).subscribe((res: any) => {
        if (res.result) {
          alert('Add Success');
          this.router.navigate(['task-table']);
        }
      });
    }
  }
}
