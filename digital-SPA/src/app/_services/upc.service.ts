import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Product, ProductList, QuerySearch } from "./../_models/products";
import { Observable } from "rxjs";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
@Injectable({
  providedIn: "root",
})
export class UpcService {
  private rooturl: string;
  private uacurl: string;
  private asinurl: string;
  constructor(private http: HttpClient) {}

  public GetsearchResultsUAC<T>(model: any): Observable<any> {
    this.uacurl =
      "https://api.rainforestapi.com/request?api_key=046F5347606D460B84C1095936D7BA15&type=product&amazon_domain=amazon.com&gtin=" +
      model;
    return this.http.get(this.uacurl);
  }
  public GetsearchResultsASIN<T>(asin: any): Observable<any> {
    this.asinurl =
      "https://api.rainforestapi.com/request?api_key=046F5347606D460B84C1095936D7BA15&type=product&amazon_domain=amazon.com&asin=" +
      asin;
    return this.http.get(this.asinurl);
  }
}
