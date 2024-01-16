
import { Component, OnInit } from '@angular/core';
import { Option } from '../../../shared/models/option.model';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { AppConstant } from '../../../core/models/app-constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private localStorageService: LocalStorageService
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
    this.localStorageService.set(AppConstant.TECH,this.selectedTech);
  }

}
