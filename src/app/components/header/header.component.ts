import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    {
      name: 'Speakers',
      children: [
        { name: 'Jayden', route: '/speakers/jayden' },
        { name: 'Sara', route: '/speakers/sara' },
        { name: 'Emma', route: '/speakers/emma' },
        { name: 'Harriet', route: '/speakers/harriet' }
      ]
    },
    { name: 'Schedule', route: '/schedule' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contacts', route: '/contact' }
  ];
}
