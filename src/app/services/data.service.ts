import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {GlobalDataSummary} from 'src/app/models/globldta'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19/1.0.0";
  //token: string = "Bearer c98f811d-36ac-32e8-8049-34ecedc9ac72"
  token: string = "Bearer a4b719ae-494a-33bd-9b8f-c8de41a3cf9f"
  
  constructor(private http : HttpClient) { }

  getData(){
    
   //return this.http.get(this.globalDataUrl,{ headers: {Authorization: this.token}}).pipe(map((result=>{
    return this.http.get(`${this.url}/country`, { headers: { Authorization: this.token } }).toPromise();

  }



  
}
//     return this.http.get(`${this.globalDataUrl}`, { headers: { Authorization: this.token } }).pipe(map(result=>{
//      let data: GlobalDataSummary[] = [];
//      let ind = result
//      data.push({
//       totalDeaths:ind[0],
//         totalRecovered : ind[1],
//         totalActiveCases : ind[4],
//         totalNewCases : ind[5],
//         totalNewDeaths : ind[6],
//         totalConfirmed : ind[7],

//      }) 
//     }))
//     console.log(data);
//     return [];
//   }
// }
    
   

 //  let rows = result.split('\n');
    //   rows.forEach(row => {
    //     let cols = row.split(\\{\s*title.*\\})
    //    console.log(col);
       
    //  })
     
   //})))
   
  //}
 //}
  //getData(){
  //  return this.http.get(`${this.url}/country`, { headers: { Authorization: this.token } }).toPromise();
 // }
/**@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}


getAllWeather() {
  
  return this.http.get('/weather/').pipe(map((weather) => {

    return weather;
  }));
  }
 
} */
