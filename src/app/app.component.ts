import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, RouterOutlet } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  standalone: true,
  imports: [RouterOutlet, MovieDetailsComponent, MovieListComponent, NavbarComponent],
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);
      }
      if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });
  }
}