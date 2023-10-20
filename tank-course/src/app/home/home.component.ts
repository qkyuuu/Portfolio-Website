import { Component, OnInit } from '@angular/core';
import { TankService } from '../services/tank/tank.service';
import { Tank } from '../info/models/Tank';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tanks:Tank[] = [];
  constructor (private tankService:TankService, private route:ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.tanks = this.tankService.getAllTanksBySearchTerm(params['searchTerm']);
      else if(params['tag']){
        this.tanks = this.tankService.getAllTanksByTag(params['tag']);
      }
      else{
        this.tanks = this.tankService.getAll();
      }
    })
  }

}
