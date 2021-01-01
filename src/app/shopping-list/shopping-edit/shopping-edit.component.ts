import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { bookSell } from 'src/app/shared/booksSell.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef;
@ViewChild('amountInput') amountInputRef:ElementRef;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
const IngName=this.nameInputRef.nativeElement.value;
const IngAmount=this.amountInputRef.nativeElement.value;
const newBookSell=new bookSell(IngName,"IngAmount","price");
this.slService.addBookSell(newBookSell);
  }


}
