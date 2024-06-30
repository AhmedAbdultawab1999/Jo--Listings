import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { Job } from '../../../../core/models/jobs';

@Component({
  selector: 'app-job-cart',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    BadgeModule
  ],
  templateUrl: './job-cart.component.html',
  styleUrls: ['./job-cart.component.scss'] // Note the plural 'styleUrls'
})
export class JobCartComponent {
  @Input() job!: Job;
  @Output() apply = new EventEmitter<void>();

  isNewJob(postDate: string): boolean {
    // Convert postDate string to a Date object
    const postDateObj = new Date(postDate);
    const today = new Date();

    // Calculate the difference in days
    const diffTime = Math.abs(today.getTime() - postDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Return true if the job was posted within the last 7 days
    return diffDays <= 7;
  }

  formatDate(postdate: string): string {
    return formatDate(new Date(parseInt(postdate) * 1000), 'MMM d, y', 'en-US');
  }

  applyfn() {
    this.apply.emit();
  }
}
