import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { JobListComponent } from "./features/job-listings/components/job-list/job-list.component";
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './features/job-listings/components/job-list/interceptors/http.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SavedJobsComponent } from "./features/job-details/components/saved-jobs/saved-jobs.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        HttpClient,
    ],
    imports: [
        RouterOutlet,
        NavbarComponent,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
        CommonModule,
        JobListComponent,
        HttpClientModule,
        SavedJobsComponent
    ]
})
export class AppComponent {
  title = 'jobs';
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Jobs',
              icon: 'pi pi-home'
          },
          {
              label: 'Explore',
              icon: 'pi pi-star'
          },
          {
              label: 'Saved',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Core',
                      icon: 'pi pi-bolt',
                      shortcut: '⌘+S'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server',
                      shortcut: '⌘+B'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil',
                      shortcut: '⌘+U'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette',
                              badge: '2'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette',
                              badge: '3'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Application',
              icon: 'pi pi-envelope',
              badge: '3'
          }
      ];
  }
}
