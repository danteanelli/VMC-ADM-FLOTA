import { Injectable } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchMediaService {
  activeMediaQuery: string;
  onMediaChange: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  constructor(
    private media: ObservableMedia
  ) {
    this.activeMediaQuery = '';
    this.init();
  }


  private init(): void
  {
      this.media
          .subscribe((change: MediaChange) => {
              if ( this.activeMediaQuery !== change.mqAlias )
              {
                  this.activeMediaQuery = change.mqAlias;
                  this.onMediaChange.next(change.mqAlias);
              }
          });
  }
}
