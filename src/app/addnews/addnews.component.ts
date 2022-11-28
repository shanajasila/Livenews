import { Component } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent {
  TitleId=""
  Title=""
  Image=""
  Author=""
  Description=""
  readValue=()=>{
    let data={"Description":this.Description,"Image":this.Image,"Title":this.Title,"TitleId":this.TitleId,"Author":this.Author}
    console.log(data)
  }
}
