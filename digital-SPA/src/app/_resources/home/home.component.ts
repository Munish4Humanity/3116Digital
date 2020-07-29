import { ProductsComponent } from "./../products/products.component";
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

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  selected = "1";
  public productList: ProductList;
  public Product: Product;
  public displayColumn: Product;
  public queryForm: FormGroup;
  dataSource1 = [];
  hidden: boolean;
  ShowLoader: boolean;

  upc: UPC[] = [
    { value: "1", viewValue: "UPC" },
    { value: "2", viewValue: "Asin" },
    // { value: "3", viewValue: "Location" },
    // { value: "3", viewValue: "Sku" },
    // { value: "3", viewValue: "Price" },
    // { value: "3", viewValue: "Qty(On Hand)" },
    // { value: "3", viewValue: "Qty(Avail to list)" },
    // { value: "3", viewValue: "Last Modified " },
  ];

  query: QuerySearch;

  constructor(
    private upcService: UpcService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      UPC: [""],
      asin: [""],
      searchValue: [""],
      sel: [""],
      // upcorAsin: [""],
      // asin: [""],
      // location: [""],
      // SKU: [""],
      // price: [""],
      // qty: [""],
      // qtyAvail: [""],
      // lastModified: [""],
      // brand: [""],
      // searchProduct: [""],
    });
    // this.query.searchProduct = "";
    // this.searchProduct(this.queryForm);
  }

  searchProduct(formQuery: any) {
    this.ShowLoader = true;
    this.upcService
      .GetsearchResultsUAC(this.queryForm.value.searchValue)
      .subscribe((data) => {
        this.productList = data;
        // this.dataSource = data;
        console.log(this.productList);
        this.ShowLoader = false;
      }),
      (err) => {
        console.log(err);
        this.ShowLoader = false;
      };
    console.log(this.queryForm.value);
  }
  Asinproduct(formQuery: any) {
    this.ShowLoader = true;
    this.upcService
      .GetsearchResultsASIN(this.queryForm.value.searchValue)
      .subscribe((data) => {
        this.Product = data;
        // this.dataSource = data;
        console.log(this.Product);
        this.ShowLoader = false;
      }),
      (err) => {
        console.log(err);
        this.ShowLoader = false;
      };
    console.log(this.queryForm.value);
  }

  runQuery() {
    if (this.queryForm.value.sel == "1") {
      this.searchProduct(this.queryForm.value.searchValue);
    } else {
      this.Asinproduct(this.queryForm.value.searchValue);
    }
  }
}
