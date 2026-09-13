import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.css'
})
export class BottombarComponent {
  currentUrl: string = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.currentUrl = segments.join('/');
    });

  }

}
