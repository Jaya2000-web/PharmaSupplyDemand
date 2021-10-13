import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineDemandModel } from './Models/pharmacymedsuppli.model';
import { MedicineDemand } from './Models/medicinedemand.model';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl="https://localhost:44388/api/PharmaMedicineSupply";
  constructor(private http:HttpClient) { }
  GetSupplyList():Observable<any>{
    return this.http.get(this.APIurl);
  }

  AddDemand(Demand:MedicineDemand):Observable<MedicineDemandModel>{
    debugger;
    //console.log(Demand);
    //console.log("Servicelayer");
    return this.http.post<MedicineDemandModel>("https://localhost:44388/api/PharmaMedicineSupply/MedicineDemand/",Demand);

    /*Demand,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }*/
}

}
