import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from '../getdataservice.service';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-moviegallery',
  templateUrl: './moviegallery.component.html',
  styleUrls: ['./moviegallery.component.css'],
   providers: [ GetdataserviceService ]
})
export class MoviegalleryComponent implements OnInit {
tileColor='lightblue';

 imgPth : String = "https://image.tmdb.org/t/p/w132_and_h132_bestv2";
 test= [
    {name: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {name: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {name: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {name: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
     {name: 'five', cols: 1, rows: 2, color: 'lightblue'},
    {name: 'six', cols: 1, rows: 2, color: 'lightgreen'},
    {name: 'seven', cols: 1, rows: 2, color: 'lightpink'},
    {name: 'eight', cols: 1, rows: 2, color: '#DDBDF1'},
  ];
  
  tiles:any[] = this.test;
  itemsInfo=[];
  constructor(private getDataSer:GetdataserviceService) { }
//this.tiles=data.cast
  ngOnInit() {
 console.log('--',this.tiles);
    this.getDataSer.getData("https://api.themoviedb.org/3/movie/259316/credits?api_key=bd306dba3c86667615fd657874e5df67").subscribe(
    (data) => this.itemsInfo=data.cast
  
    );
  }
  pageUrl(reqId,reqName){
    return "https://www.themoviedb.org/person/"+reqId+(reqName.split(" ")).join('-');
   
  }

}
