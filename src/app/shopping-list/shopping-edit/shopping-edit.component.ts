import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('qtyInput') qtyInputRef: ElementRef;
}
