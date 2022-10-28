import { Component, OnInit } from '@angular/core';
import { GetApiService } from "../get-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title!: string;
  buttonText!: string;
  query!: string;
  api_key: string = "e7866def8221cef3b02a77b331a56471";
  searchData: any;
  lis=[];

  constructor(
    private api:GetApiService
  ) { }

  ngOnInit(): void {
    this.title = "What to Watch";
    this.buttonText = "Rechercher";
  }

  onSearch() {
    this.query = (document.getElementById("movie") as HTMLInputElement).value;

    this.api.getData(this.api_key, this.query).subscribe(res=>{
      this.searchData=res;
    });
  }
}
