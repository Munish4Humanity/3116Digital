import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Product, ProductList, QuerySearch } from "./../_models/products";
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

  constructor(private http: HttpClient) {}
  getProducts(query: QuerySearch) {
    //this.rooturl="https://api.rainforestapi.com/request?api_key=046F5347606D460B84C1095936D7BA15&type=product&amazon_domain=amazon.com&gtin="+query.upcorAsin+""
    this.rooturl =
      "https://api.rainforestapi.com/request?api_key=046F5347606D460B84C1095936D7BA15&type=search&amazon_domain=amazon.com&search_term=" +
      query.searchProduct +
      "&sort_by=price_high_to_low";
    console.log(this.rooturl);
    return this.http.get<ProductList>(this.rooturl);
  }
}
