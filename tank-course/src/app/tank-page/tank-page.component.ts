import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Tank } from '../info/models/Tank';
import { TankService } from '../services/tank/tank.service';

@Component({
  selector: 'app-tank-page',
  templateUrl: './tank-page.component.html',
  styleUrls: ['./tank-page.component.css']
})
export class TankPageComponent {

  tank!: Tank;

  constructor(private activatedRoute:ActivatedRoute, private tankService: TankService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.tank = tankService.getTankById(params['id']);
      }
    })
  }

}
