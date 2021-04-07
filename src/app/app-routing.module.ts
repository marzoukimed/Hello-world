import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { CreateTransactionsComponent } from './pages/create-transactions/create-transactions.component';
import { DragComponent } from './pages/drag/drag.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'drag', component: DragComponent },
  { path: 'thirdpage', component: ThirdPageComponent },
  { path: 'fourthpage', component: FourthPageComponent },
  { path: 'blockchain', component: BlockchainComponent},
  { path: 'Settings' , component: SettingsComponent},
  { path: 'new/transactions' , component: CreateTransactionsComponent},
  { path: 'new/transactions/pending' , component: PendingTransactionsComponent },
  {path: 'wallet/:address', component: WalletBalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
