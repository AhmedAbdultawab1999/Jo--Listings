import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalJobDetailsComponent } from '../../../modal-job-details/modal-job-details.component';
import { Job } from '../../../../core/models/jobs';
import { JobCartComponent } from "../../../job-listings/components/job-cart/job-cart.component";
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.scss'],
  imports: [JobCartComponent, ModalJobDetailsComponent, CommonModule, NgbToastModule]
})
export class SavedJobsComponent implements OnInit {
  displayedJobs: Job[] = [];
  jobsHasLoaded = false;
  toastMessage: string | null = null;
  @ViewChild('jobModal') jobModal!: ModalJobDetailsComponent;

  ngOnInit(): void {
    this.loadSavedJobs();
  }

  loadSavedJobs(): void {
    const savedJobs = localStorage.getItem('savedJobs');
    if (savedJobs) {
      this.displayedJobs = JSON.parse(savedJobs) as Job[];
    } else {
      this.displayedJobs = [];
    }
    this.jobsHasLoaded = true;
  }

  openModal(job: Job) {
    this.jobModal.job = job;
    this.jobModal.showDialog();
  }

  deleteJob(jobId: string) {
    let savedJobs = localStorage.getItem('savedJobs');
    if (savedJobs) {
      let jobsArray = JSON.parse(savedJobs);
      jobsArray = jobsArray.filter((job: Job) => job.id !== jobId);
      localStorage.setItem('savedJobs', JSON.stringify(jobsArray));
      this.displayedJobs = jobsArray; // Update the displayedJobs array to reflect changes
      this.showToast('Job deleted successfully');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => this.toastMessage = null, 3000); // Hide toast after 3 seconds
  }
}
