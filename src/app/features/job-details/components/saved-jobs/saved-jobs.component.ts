import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalJobDetailsComponent } from '../../../modal-job-details/modal-job-details.component';
import { Job } from '../../../../core/models/jobs';
import { JobCartComponent } from "../../../job-listings/components/job-cart/job-cart.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-saved-jobs',
    standalone: true,
    templateUrl: './saved-jobs.component.html',
    styleUrl: './saved-jobs.component.scss',
    imports: [JobCartComponent, ModalJobDetailsComponent, CommonModule]
})
export class SavedJobsComponent implements OnInit{
  displayedJobs: Job[] = [];
  private jobsToShow = 5;
  private currentIndex = 0;
  loading = false;
  jobsHasLoaded = false;
  @ViewChild('jobModal')
  jobModal!: ModalJobDetailsComponent;


  constructor() {
  }
  ngOnInit(): void {
    const savedJobs = localStorage.getItem('savedJobs');
      
      // If savedJobs is null, initialize displayedJobs as an empty array
      if (savedJobs) {
        this.displayedJobs = JSON.parse(savedJobs) as Job[];
      } else {
        this.displayedJobs = [];
      }
      console.log(this.displayedJobs);
      
  }

  openModal(job: Job) {
    this.jobModal.job = job;
    this.jobModal.showDialog();
  }

}
