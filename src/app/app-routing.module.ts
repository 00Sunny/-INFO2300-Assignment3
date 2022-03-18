import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWalletComponent } from './myWallet/myWallet.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
  {
    path: 'myWallet',
    component: MyWalletComponent
  },
  {
    path: '',
    redirectTo: 'myWallet',
    pathMatch: 'full'
  },
  {
    path: 'history',
    component: HistoryComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
