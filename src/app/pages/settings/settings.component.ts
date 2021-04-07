import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/service/blockchain.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public blockchain;

  constructor(private blockchaineService: BlockchainService) {
    this.blockchain = blockchaineService.blockchainInstance;
   }

  ngOnInit(): void {
  }

}
