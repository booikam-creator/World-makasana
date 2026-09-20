import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  userOverride = false; // Prevents scroll event from overriding click action

  // Click handler: Toggles visibility AND marks that user made a manual choice
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