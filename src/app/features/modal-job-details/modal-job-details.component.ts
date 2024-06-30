import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Job } from '../../core/models/jobs';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-job-details',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    NgbModule
  ],
  templateUrl: './modal-job-details.component.html',
  styleUrl: './modal-job-details.component.scss'
})
export class ModalJobDetailsComponent implements OnInit {
  @ViewChild('content', { static: false }) content!: ElementRef;
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    console.log(this.job);
  }
  @Input() job: any;
  display: boolean = false;

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
  
    // Parse the savedJobs and add the new job
    const savedJobsArray: Job[] = JSON.parse(savedJobs);
    savedJobsArray.push(newJob);
  
    // Save the updated array back to localStorage
    localStorage.setItem('savedJobs', JSON.stringify(savedJobsArray));
    this.modalService.dismissAll()
  }  

}
