import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Partner logos
  partnerLogos = [
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-1.png', alt: 'Logo 1' },
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-2.png', alt: 'Logo 2' },
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-3.png', alt: 'Logo 3' },
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-4.png', alt: 'Logo 4' },
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-5.png', alt: 'Logo 5' },
    { src: 'https://themewagon.github.io/manup/img/partner-logo/logo-6.png', alt: 'Logo 6' }
  ];

  // Footer navigation links
  navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Speakers', route: '/speakers' },
    { name: 'Schedule', route: '/schedule' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' }
  ];

  // Social media icons
  socialIcons = [
    { platform: 'facebook', icon: 'fab fa-facebook', link: 'https://facebook.com' },
    { platform: 'twitter', icon: 'fab fa-twitter', link: 'https://twitter.com' },
    { platform: 'linkedin', icon: 'fab fa-linkedin', link: 'https://linkedin.com' },
    { platform: 'instagram', icon: 'fab fa-instagram', link: 'https://instagram.com' },
    { platform: 'youtube', icon: 'fab fa-youtube', link: 'https://youtube.com' }
  ];
}
