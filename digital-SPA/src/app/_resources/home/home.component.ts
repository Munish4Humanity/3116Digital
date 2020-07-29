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
interface Operator {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  options: string[] = ["One", "Two", "Three"];
  public productList: ProductList;
  public Product: Product;
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
  searchResultsObj = {
    title: "",
    color: "",
    asin: "",
    weight: "",
    model_number: "",
    link: "",
  };
  // displayedColumns: string[] = ["position", "title", "asin", "link"];
  displayedColumns: string[] = ["name", "weight", "symbol"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  get e() {
    return this.queryForm.controls;
  }
  searchProduct(formQuery: any) {
    this.ShowLoader = true;
    this.upcService
      .GetsearchResultsUAC(this.queryForm.value.UAC)
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
      .GetsearchResultsASIN(this.queryForm.value.asin)
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
