import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response } from '@angular/http';
import swal from 'sweetalert';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Yugal\'s Gif';
  // Initiating the link from giphy developer website
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";

  // Using HTTP module of angular for making the GET call.
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  form;
  // Initiating the searchString with empty string
  ngOnInit(){
    this.form = new FormGroup({
      searchString : new FormControl(""),
    });
  }
  // This function will be invoked after search button clicked
  onSubmit = function(result){
    // if searchString is empty then no need to make the expensive GET call
    if (result.searchString==="") {
      console.log("Empty");
      swal("Oops!", "Please provide some input!", "warning");
    }
    else{
      var apiLink = this.link + result.searchString;
      // GET Method, response has been used as res
      try{
        this.http.request(apiLink).subscribe((res: Response) => {
          // Storing all the results into a variable
          // As discussed with Kevin
          // If we collect all results first then do the paint at HTML
          // It will cause lesser reflow and more efficient
          this.giphies = res.json().data;
  
          // If no result found then acknowledge the user.
          if (this.giphies.length==0){
            swal("Oops!", "No gif's found for given input : " + result.searchString, "error");
          }
        });
      }
      catch(err){
        console.log("Unexpected Error occured: "+err);
        swal("Oops!", "Unexpected error Occured, Please try later.", "error");
      }
    }
  }
}
