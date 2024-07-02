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
  @Input() showDelete: boolean = false;
  @Output() apply = new EventEmitter<void>();
  @Output() delete = new EventEmitter<string>();

  isNewJob(postDate: string): boolean {
    const postDateObj = new Date(postDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }

  formatDate(postdate: string): string {
    return formatDate(new Date(parseInt(postdate) * 1000), 'MMM d, y', 'en-US');
  }

  applyfn() {
    this.apply.emit();
  }

  deleteSavedJob(jobId: any) {
    this.delete.emit(jobId);
  }
}
