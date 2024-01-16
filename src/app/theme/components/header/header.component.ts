
import { Component, OnInit } from '@angular/core';
import { Option } from '../../../shared/models/option.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }
  shopName: string = "One Stop Kirana Store";
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
    console.log(this.selectedTech);
  }

}
