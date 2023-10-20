import { TankService } from './../services/tank/tank.service';
import { Component } from '@angular/core';
import { Tag } from '../info/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags:Tag[] = [];
  constructor(private TankService:TankService){

  }
  ngOnInit(): void{
    this.tags = this.TankService.getAllTags();
  }

}
