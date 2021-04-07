import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ApiUser } from './service/apiuser';
import { DragComponent } from './pages/drag/drag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { FormsModule } from '@angular/forms';
import { BlockchainService } from './service/blockchain.service';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateTransactionsComponent } from './pages/create-transactions/create-transactions.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DragComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    BlockchainComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    SettingsComponent,
    CreateTransactionsComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
