import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService, Movie } from '../services/movie.service';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchQuery: string = '';
  resValue: string = "Search Results";
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(response => {
        this.searchResults = response.results;
      });
      console.log(this.resValue);
    }
  }

  viewMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}
