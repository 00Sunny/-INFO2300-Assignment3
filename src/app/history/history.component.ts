import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  pageTitle: string = "Spending History";
  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }
  
  clearHistory(){
    this.datastore.clear();
  }

}
