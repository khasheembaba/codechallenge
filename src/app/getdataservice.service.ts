import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class GetdataserviceService {

  constructor(private httpSer:Http) {}
  
  getData(reqUrl){
  console.log('calling data--0',reqUrl);
      
       //this.httpSer.get(reqUrl).map((res) => res.json()).subscribe((data) => console.log('---d-',data));
        return this.httpSer.get(reqUrl).map((res) => res.json());
  }
  
  
}
