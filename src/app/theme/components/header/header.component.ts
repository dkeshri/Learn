
import { Component, OnInit } from '@angular/core';
import { Option } from '../../../shared/models/option.model';
import { HeaderService } from '../../../services/header.service';
import { StackService } from '../../../services/stack.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private headerService : HeaderService,
    private stackService:StackService
  ) { }
  shopName: string = "Technology";
  selectedTech:string = '';
  searchTopic:string = '';
  techOptions: Option[] = [];
  ngOnInit(): void {
    this.stackService.getStackOption().subscribe((options)=>{
      this.techOptions = options;
    })
  }
  ngOnDestroy() {

  }

  onTechnologyChange() {
    this.headerService.setSelectedStack(this.selectedTech);
  }
  onEnterPress(event:any){
    this.headerService.setSearchedTopic(this.searchTopic);
  }

}
