import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

export class Product {
  title: string;
  asin: string;
  link: string;
  description: string;
  model_number: string;
  brand: boolean;
  rating: number;
  rationalTotal: number;
}

export class Category {
  name: string;
}
export class Prices {
  symbol: string;
  value: string;
  currency: string;
  raw: string;
}

export class request_info {
  success: boolean;
  credits_used: number;
  credits_remaining: number;
}

export class request_metadata {
  created_at: Date;
  processed_at: Date;
  total_time_taken: number;
  amazon_url: string;
}

export class timing {
  global_init: string;
  auth_apikey: string;
  auth_retrieve_plan: string;
  auth_retrieve_credit_usage: string;
  processing_invoking_worker: string;
  processing_execution_complete: string;
  auth_credit_usage_reconcile: string;
  global_end: string;
}
export class request_parameters {
  type: string;
  amazon_domain: string;
  search_term: string;
  gtin: string;
  sort_by: string;
}
export class ProductList {
  request_info: request_info;
  request_metadata: request_metadata;
  timing: timing;
  request_parameters: request_parameters[];
  search_results: Product[];
  pagination: Pagination;
}

export class Pagination {
  current_page: number;
  total_pages: number;
}

export class Search {
  searchTerm: string;
  pageNo: Number;
}

export class QuerySearch {
  upcorAsin: string;
  UAC: string;
  asin: string;
  location: string;
  SKU: string;
  price: string;
  qty: string;
  qtyAvail: string;
  lastModified: string;
  brand: string;
  searchProduct: string;
}
