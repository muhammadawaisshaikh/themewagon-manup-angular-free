import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LocationComponent } from './location/location.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [BannerComponent, CountdownComponent, AboutComponent, TeamComponent, ScheduleComponent, PricingComponent, BlogsComponent, NewsletterComponent, LocationComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
