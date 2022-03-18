import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';


@Component({
  selector: 'app-myWallet', 
  templateUrl: './myWallet.component.html',
  styleUrls: ['./myWallet.component.scss']
})
export class MyWalletComponent implements OnInit {

  pageTitle: string ="My Wallet's Manager";
 
  monthlyLivingExpensesCtrl: FormControl = new FormControl(null,[
     Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")
   ]);
  selectDateListCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.max(Number(Date.now()))
  ]);
  selectCategoryListCtrl: FormControl = new FormControl(null, Validators.required)
  selectPaymentMethodListCtrl: FormControl = new FormControl(null, Validators.required)
  amountCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")
  ]);
  noteCtrl: FormControl = new FormControl()
  entryGroup: FormGroup = new FormGroup({  
    monthlyLivingExpenses: this.monthlyLivingExpensesCtrl,
    selectDateList: this.selectDateListCtrl,
    selectCategoryList: this.selectCategoryListCtrl,
    selectPaymentMethodList: this.selectPaymentMethodListCtrl,
    amount: this.amountCtrl,
    note: this.noteCtrl
  });

  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {   
  }
  

   onSubmit(event: Event){
     if(this.entryGroup.valid){
       this.datastore.addScan(`${this.monthlyLivingExpensesCtrl.value},${this.selectDateListCtrl.value},${this.selectCategoryListCtrl.value},${this.selectPaymentMethodListCtrl.value},${this.amountCtrl.value},${this.noteCtrl.value}`);

       (event.currentTarget as HTMLFormElement).reset();
     }
   }
   
  }
