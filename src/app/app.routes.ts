import { Routes } from '@angular/router';
import { SavedJobsComponent } from './features/job-details/components/saved-jobs/saved-jobs.component';
import { JobListComponent } from './features/job-listings/components/job-list/job-list.component';
import { AppliedJobsComponent } from './features/job-details/components/applied-jobs/applied-jobs.component';

export const routes: Routes = [
    {path: "", component: JobListComponent},
    {path: "jobs", component: JobListComponent},
    {path: "saved", component: SavedJobsComponent},
    {path: "applied", component: AppliedJobsComponent}
];
