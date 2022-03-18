import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('drawer') private materialDrawer: MatDrawer | null = null;
  title: string = 'barcode-scanner';
  

  changeTitle(activeComponentTitle: string){
    this.title = activeComponentTitle;
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      if (this.materialDrawer !== null)
        this.materialDrawer.close();
    }, 1000);
  }
}
