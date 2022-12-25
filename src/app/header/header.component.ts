import { Component, EventEmitter, Output } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  navToggle = false;
  headericon = faPizzaSlice;
  
  @Output() featureSelector = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelector.emit(feature);
  }

  toggleNav(){
    this.navToggle = !this.navToggle
  }
}
