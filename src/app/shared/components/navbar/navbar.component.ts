import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
     NavbarComponent,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    CardModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    items: MenuItem[]=[];

    ngOnInit() {
      this.items = [
        {
          label: 'Jobs',
          icon: 'pi pi-fw pi-briefcase',
          items: [
            { label: 'All Jobs', icon: 'pi pi-fw pi-list', routerLink: ['/jobs'] },
            { label: 'New Job', icon: 'pi pi-fw pi-plus', routerLink: ['/jobs/new'] }
          ]
        },
        {
          label: 'Saved',
          icon: 'pi pi-fw pi-save',
          items: [
            { label: 'All Candidates', icon: 'pi pi-fw pi-list', routerLink: ['/saved'] },
            { label: 'New Candidate', icon: 'pi pi-fw pi-plus', routerLink: ['/saved'] }
          ]
        },
        {
          label: 'Applied',
          icon: 'pi pi-fw pi-paperclip',
          routerLink: ['/applied']
        }
      ];
    }

}
