import { TestBed } from "@angular/core/testing";

import { UpcService } from "./upc.service";

describe("UpcService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UpcService = TestBed.get(UpcService);
    expect(service).toBeTruthy();
  });
});
