import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/service/blockchain.service';
import { Transaction } from 'savjeecoin/src/blockchain';
@Component({
  selector: 'app-create-transactions',
  templateUrl: './create-transactions.component.html',
  styleUrls: ['./create-transactions.component.css']
})
export class CreateTransactionsComponent implements OnInit {

  public newTx ;
  public walletkey;

  constructor(private blockchainService: BlockchainService) {

      this.walletkey = blockchainService.walletKeys[0];
   }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletkey.publicKey;
    this.newTx.signTransaction(this.walletkey.keyObj);

    this.blockchainService.addTransaction(this.newTx);


    this.newTx = new Transaction();
  
  }

}
