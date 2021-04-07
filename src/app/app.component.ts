import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './classes/user';
import { ApiUser } from './service/apiuser';
import { Subscription } from 'rxjs';
import { TasksService } from './service/tasks.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import 'lodash';
import { BlockchainService } from './service/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   public blockchain;
   
  isDisplay=true;
  
  constructor() { 
//   this.blockchain = blockchainService.blockchainInstance;
  }



  ngOnInit() {
   
     }
     thereArePendingTransactions() {
      return this.blockchain.pendingTransactions.length > 0;
    }
  
     AddPage()
     {
        this.isDisplay = !this.isDisplay;
     }
     title = 'Google Pay Demo';
  
     paymentRequest: google.payments.api.PaymentDataRequest = {
       apiVersion: 2,
       apiVersionMinor: 0,
       allowedPaymentMethods: [
         {
           type: 'CARD',
           parameters: {
             allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
             allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
           },
           tokenizationSpecification: {
             type: 'PAYMENT_GATEWAY',
             parameters: {
               gateway: 'example',
               gatewayMerchantId: 'exampleGatewayMerchantId'
             }
           }
         }
       ],
       merchantInfo: {
         merchantId: '12345678901234567890',
         merchantName: 'Demo Merchant'
       },
       transactionInfo: {
         totalPriceStatus: 'FINAL',
         totalPriceLabel: 'Total',
         totalPrice: '0.10',
         currencyCode: 'EUR',
         countryCode: 'BE'
       },
       callbackIntents: ['PAYMENT_AUTHORIZATION']
     };
   
     onLoadPaymentData = (
       event: Event
     ): void => {
       const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
       console.log('load payment data', eventDetail.detail);
     }
   
     onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
       paymentData
       ) => {
         console.log('payment authorized', paymentData);
         return {
           transactionState: 'SUCCESS'
         };
       }
   
     onError = (event: ErrorEvent): void => {
       console.error('error', event.error);
     }
   
  }

  

  

