import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LupRequestModel} from "./models/lup-request.model";

@Injectable({
  providedIn: 'root'
})
export class LupService {

  constructor(private httpClient: HttpClient) { }

  consultAvailability(lupParams: LupRequestModel): Promise<any> {
    const serviceURL = 'https://q3n07s9r8f.execute-api.sa-east-1.amazonaws.com/dev/ppa-auto';
    // const serviceURL = 'https://run.mocky.io/v3/2c8c1e75-4101-44ea-a4a8-5d6d627cd1f1';
    return this.httpClient.post(serviceURL, lupParams).toPromise()
  }
}
