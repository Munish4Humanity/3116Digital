import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
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
  hidden: boolean;
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
  dataSource = [];
  constructor() {}

  ngOnInit() {}
  onAddData() {
    this.dataSource.push(this.dataSource.length);
  }

  runQuery() {}
  removeObject(event) {
    console.log(event);
    console.log(event.target);
    this.hidden = !this.hidden;
  }
}
