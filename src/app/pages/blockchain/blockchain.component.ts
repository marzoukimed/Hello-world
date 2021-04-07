import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/service/blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public blocks = [];
  public selectedBlock = null;
  constructor( private blockchainService: BlockchainService ) {
      this.blocks = blockchainService.getBlocks();
      this.selectedBlock = this.blocks[0];
   }

  ngOnInit(): void {
  }

  showTransactions(block) {
    this.selectedBlock = block
  }
}
