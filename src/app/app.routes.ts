import { Routes } from '@angular/router';
import { SavedJobsComponent } from './features/job-details/components/saved-jobs/saved-jobs.component';
import { JobListComponent } from './features/job-listings/components/job-list/job-list.component';

export const routes: Routes = [
    {path: "", component: JobListComponent}
];
