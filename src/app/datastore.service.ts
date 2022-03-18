import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private scans: string[] = [];
  

  constructor() { 
    const savedData = window.localStorage.getItem('scanArray');
    
    if(savedData !== null)
      this.scans = JSON.parse(savedData);
  }

  addScan(message: string){
    this.scans.push(message);
    this.saveChanges();
  }

  splitDate() {
    return (this.splitData(1))
  }
  splitCategory() {
    return (this.splitData(2))
  }

  splitPaymentMethod() {
    return (this.splitData(3))
  }

  splitNote() {
    return (this.splitData(5))
  }

  splitAmount() {
    return (this.splitData(4))
  }
      
  displayMonthlyLivingExpenses() {
    return (this.splitData(0))
  }

  splitData(input: number) {
    var record = "";
    var value = "";
    var valueTwo = "";
    var splitArray: String[] = [];
    for (var i = 0; i < this.scans.length; i++) {
      record = this.scans[i];
      var splitLetter = record.split(",");
      value = splitLetter[input];
      if (input === 0) {
        splitArray[0] = value;
        break;
      }
      else if (value == "null") {
        splitArray[i] = "";
      }
      else if (value.includes('_')) {

        var splitValue = value.split("_");

        for (var j = 0; j < splitValue.length; j++) {
          valueTwo += splitValue[j] + " ";

        }
        splitArray[i] = valueTwo;
        valueTwo = "";
      }
      else {
        splitArray[i] = value;
      }

    }
    return (splitArray)
  }

  calculateTotalSpendingExpense() {
    var record = "";
    var value = 0;
    var result = "";

    for (var i = 0; i < this.scans.length; i++) {
      record = this.scans[i];
      var splitLetter = record.split(",");
      value += Number(splitLetter[4]);
    }
    result = value.toFixed(2).toString();
    return (result)
  }

  calculateRemainingExpense() {
    var valueForTotalSE = this.calculateTotalSpendingExpense();
    var valueForMonthlyLE = this.displayMonthlyLivingExpenses();
    var valueForRemainingExpense = 0;
    var result = "";

    for (var i = 0; i < valueForMonthlyLE.length; i++) {
      if (i === 0) {
        valueForRemainingExpense = Number(valueForMonthlyLE[i]) - Number(valueForTotalSE);
        valueForRemainingExpense = Math.fround(valueForRemainingExpense);
        break;
      }
    }
    result = valueForRemainingExpense.toFixed(2).toString();
    return (result)
  }

  checkMonthlyLE(){
    var check: boolean = true;
    for(var i = 0; i<this.scans.length; i++){
      if(this.scans[0].substring(0,1).includes("n") === false){
        check = false;
      }
      else{
        check = true;
      }
    }
      return (check)
    }  

  getScans(){
    return(this.scans)
  } 

  clear(){
    this.scans = [];
    this.saveChanges();
  }

  private saveChanges(){
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans));
  }

  
}
