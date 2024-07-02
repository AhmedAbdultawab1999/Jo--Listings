import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsResponse } from '../../../../core/models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'https://remotive.io/api/remote-jobs'; // ?search=developer&category=software-dev

  constructor(private http: HttpClient) { }
  getJobs(limit: number, search?: string, category?: string): Observable<JobsResponse> {
    let url = `${this.apiUrl}?limit=${limit}`;
  
    if (search?.trim()) {
      url += `&search=${encodeURIComponent(search.trim())}`;
    }
    
    if (category?.trim()) {
      url += `&category=${encodeURIComponent(category.trim())}`;
    }
  
    return this.http.get<JobsResponse>(url);
  }
  
}
