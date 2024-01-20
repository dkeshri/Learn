
import { Component, OnInit } from '@angular/core';
import { Option } from '../../../shared/models/option.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private headerService : HeaderService
  ) { }
  shopName: string = "Technology";
  selectedTech:string = '';
  techOptions: Option[] = [
    { label: "Javascript", value: "JAVASCRIPT" },
    { label: "CSS", value: "CSS" },
    { label: "DotNet", value: "DOTNET" },
    { label: "Others", value: "OTHERS" }
  ];
  ngOnInit(): void {

  }
  ngOnDestroy() {

  }

  onTechnologyChange() {
    this.headerService.setSelectedStack(this.selectedTech);
  }

}
