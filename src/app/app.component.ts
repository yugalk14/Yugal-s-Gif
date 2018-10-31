import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yugal\'s Gif';
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  form;
  ngOnInit(){
    this.form = new FormGroup({
      searchString : new FormControl(""),
    });
  }
  onSubmit = function(result){
    var apiLink = this.link + result.searchString;
    this.http.request(apiLink).subscribe((res: Response) => {
      this.giphies = res.json().data;
    });
  }
  
}
