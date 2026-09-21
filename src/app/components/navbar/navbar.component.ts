import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  curUrl: any
  userLocation: string = ''
  isScrolled = false;
  userOverride = false; // Prevents scroll event from overriding click action
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.curUrl = this.router.url.split('/')[1]
    this.getCurrentLocation()
  }


  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        this.authService.getCityName(lat, lng).subscribe((data: any) => {
          this.userLocation= `${data.address.house_number} ${data.address.road}, ${data.address.city} `
          
        });

      }, (error) => {
        console.error('Error getting location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  isShow(): void {
    this.isScrolled = !this.isScrolled;
    this.userOverride = true; // Stop scroll listener from overriding this click
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

    // Reset override when user scrolls back to the top (< 50px)
    if (scrollPosition <= 50) {
      this.userOverride = false;
      this.isScrolled = false;
      return;
    }

    // Only update state on scroll IF the user hasn't manually clicked
    if (!this.userOverride) {
      this.isScrolled = true;
    }
  }
}