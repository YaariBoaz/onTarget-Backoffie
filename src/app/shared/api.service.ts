import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {


  }

  getUserTrainnies():Observable<any> {
    return this.http.get(' https://adlbackoffice20200309103113.azurewebsites.net/DeviceData/getUserTrainnies?userID=alon@email')
  }
}
