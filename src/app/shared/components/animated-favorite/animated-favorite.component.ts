import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-animated-favorite',
  templateUrl: './animated-favorite.component.html',
  styleUrls: ['./animated-favorite.component.css'],
  animations: [
    trigger('heart', [
      state('unliked', style({
        color: '#FF5A5F',
        opacity: '0.5',
        transform: 'scale(1)'
      })),
      state('liked', style({
        color: '#e74c3c',
        opacity: '1',
        transform: 'scale(1.1)'
      })),
      transition('unliked <=> liked', animate('100ms ease-out'))
    ])
  ]
})
export class AnimatedFavoriteComponent implements OnInit {

  @Input() public likeState: string = 'unliked';
  @Input() public iconName: string = 'heart-empty';
  @Input() public place:any;
 
  constructor(private favoriteService:FavoriteService) { }

  ngOnInit() {
  }

  toggleLikeState() {
    if (this.likeState == 'unliked') {
      this.likeState = 'liked';
      this.iconName = 'heart';
      this.favoriteService.createFavorite(this.place)
    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-empty';
    }

  }

}
