import { Component, Input } from '@angular/core';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { Movie } from '../../types/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  @Input() showItem: Movie | null = null;
  @Input() showType: 'tv' | 'movie' = 'movie';

  imageBaseUrl = imagesBaseUrl;
}
