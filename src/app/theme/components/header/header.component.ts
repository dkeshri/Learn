
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }
  shopName: string = "One Stop Kirana Store";
  languageSubscription: any;
  initMenuSubsctiption: any;
  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.initMenuSubsctiption) {
      this.initMenuSubsctiption.unsubscribe();
    }
  }
  onLogout() {
    
  }
 
}
