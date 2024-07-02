import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Job } from '../../core/models/jobs';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-job-details',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    NgbModule,
    ToastModule
  ],
  templateUrl: './modal-job-details.component.html',
  styleUrls: ['./modal-job-details.component.scss'],
  providers: [MessageService]  // Add MessageService here
})
export class ModalJobDetailsComponent implements OnInit {
  @ViewChild('content', { static: false }) content!: ElementRef;
  @Input() job!: Job;
  display: boolean = false;

  constructor(private modalService: NgbModal, private messageService: MessageService) {}

  ngOnInit(): void {
    console.log(this.job);
  }

  showDialog() {
    this.open();
  }

  open() {
    this.modalService.open(this.content, { size: 'lg' });
  }

  saveJob(newJob: Job) {
    let savedJobs = localStorage.getItem('savedJobs');

    // If savedJobs doesn't exist, create an empty array
    if (!savedJobs) {
      savedJobs = '[]';
    }

    // Parse the savedJobs and check if the job already exists
    const savedJobsArray: Job[] = JSON.parse(savedJobs);
    const jobExists = savedJobsArray.some(job => job.id === newJob.id);

    if (jobExists) {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Job already saved' });
    } else {
      savedJobsArray.push(newJob);
      localStorage.setItem('savedJobs', JSON.stringify(savedJobsArray));
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Job saved successfully' });
    }
    this.modalService.dismissAll();
  }
}
