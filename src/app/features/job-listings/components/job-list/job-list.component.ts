import { Component, ViewChild } from '@angular/core';
import { JobCartComponent } from "../job-cart/job-cart.component";
import { JOBS } from '../../../../shared/models/jops';
import { CommonModule } from '@angular/common';
import { JobService } from './job.service';
import { Job } from '../../../../core/models/jobs';
import { ModalJobDetailsComponent } from '../../../modal-job-details/modal-job-details.component';

@Component({
    selector: 'app-job-list',
    standalone: true,
    templateUrl: './job-list.component.html',
    styleUrl: './job-list.component.scss',
    providers: [JobService],
    imports: [JobCartComponent, CommonModule, ModalJobDetailsComponent]
})
export class JobListComponent {
  displayedJobs: Job[] = [];
  private jobsToShow = 5;
  private currentIndex = 0;
  loading = false;
  jobsHasLoaded = false;
  @ViewChild('jobModal')
  jobModal!: ModalJobDetailsComponent;


  constructor(private jobService: JobService) {
    this.loadMore();
  }

  loadMore() {
    this.loading = true;
    this.currentIndex += this.jobsToShow;
    this.jobService.getJobs(this.currentIndex).subscribe((result) => {
      this.displayedJobs = [...this.displayedJobs, ...result.jobs];
      this.loading = false;
      this.jobsHasLoaded = true;

      setTimeout(() => {
        const lastJobElement = document.getElementById(`job-${this.currentIndex - this.jobsToShow}`);
        lastJobElement?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    });
  }
  openModal(job: Job) {
    this.jobModal.job = job;
    this.jobModal.showDialog();
  }
}

