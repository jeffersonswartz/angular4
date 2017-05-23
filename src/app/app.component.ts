import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  id;
  isError = new PageNotFoundComponent;

  
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
          this.id = event.url;
        }
      });
  }
  ngOnInit(){
      console.log(this.isError);
  }
}
