import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],

})
export class NavigationComponent implements OnInit {

isDarkTheme=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoPageGallery () {
    this.router.navigate(['/gallery']);
  }
  gotoPageGame(){
    this.router.navigate(['/cardgame']);
  }

}
