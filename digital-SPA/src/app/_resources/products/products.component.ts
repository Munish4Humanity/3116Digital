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
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private upcService: UpcService,
    private formBuilder: FormBuilder
  ) {}
  public productList: ProductList;
  public displayColumn: Product;
  public queryForm: FormGroup;
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
    this.searchProduct(this.queryForm);
  }

  searchProduct(formQuery: any) {
    this.upcService.getProducts(this.queryForm.value).subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    }),
      (err) => {
        console.log(err);
      };
    console.log(this.queryForm.value);
  }
}
