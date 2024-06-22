import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre, Movie } from 'src/app/types/movie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null;
  shows$: Observable<Movie[]> | null = null;
  genreId = '';
  constructor(
    private mService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.shows$ = this.mService.getMoviesByGenre(this.genreId);
    });
    this.genres$ = this.mService.getMoviesGenres();
 
  }

  isMegaMenueShown = false;
  showMM() {
    this.isMegaMenueShown = !this.isMegaMenueShown;
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
      if (this.isMegaMenueShown) {
        megaMenu.classList.add('mega-menu-show');
      } else {
        megaMenu.classList.remove('mega-menu-show');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest(
      '.mega-menu, .mega'
    );
    if (!clickedInside && this.isMegaMenueShown) {
      this.hideMegaMenue();
    }
  }

  hideMegaMenue() {
    this.isMegaMenueShown = false;
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
      megaMenu.classList.remove('mega-menu-show');
    }
  }
}
