import { UpcService } from "./../../_services/upc.service";
import { Product, ProductList, QuerySearch } from "./../../_models/products";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";

interface UPC {
  value: string;
  viewValue: string;
}
interface Operator {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  options: string[] = ["One", "Two", "Three"];
  public productList: ProductList;
  public displayColumn: Product;
  public queryForm: FormGroup;
  dataSource1 = [];
  hidden: boolean;
  ShowLoader: boolean;
  upc: UPC[] = [
    { value: "1", viewValue: "UAC" },
    { value: "2", viewValue: "Asin" },
    { value: "3", viewValue: "Location" },
    { value: "3", viewValue: "Sku" },
    { value: "3", viewValue: "Price" },
    { value: "3", viewValue: "Qty(On Hand)" },
    { value: "3", viewValue: "Qty(Avail to list)" },
    { value: "3", viewValue: "Last Modified " },
  ];
  operator: Operator[] = [
    { value: "1", viewValue: "Equal" },
    { value: "1", viewValue: "Not Equal" },
    { value: "1", viewValue: "Contains" },
    { value: "1", viewValue: "Not Contains" },
  ];
  query: QuerySearch;

  constructor(
    private upcService: UpcService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      upcorAsin: [""],
      UAC: [""],
      asin: [""],
      location: [""],
      SKU: [""],
      price: [""],
      qty: [""],
      qtyAvail: [""],
      lastModified: [""],
      brand: [""],
      searchProduct: [""],
    });
    // this.query.searchProduct = "";
    // this.searchProduct(this.queryForm);
  }
  Getproducts() {
    this.upcService.getProducts(this.query).subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    }),
      (err) => {
        console.log(err);
      };
  }
  searchProduct(formQuery: any) {
    this.ShowLoader = true;
    this.upcService.getProducts(this.queryForm.value).subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
      this.ShowLoader = false;
    }),
      (err) => {
        console.log(err);
        this.ShowLoader = false;
      };
    console.log(this.queryForm.value);
  }
  onAddData() {
    this.dataSource1.push(this.dataSource1.length);
  }

  runQuery() {}
  removeObject(event) {
    console.log(event);
    console.log(event.target);
    this.hidden = !this.hidden;
  }
}
