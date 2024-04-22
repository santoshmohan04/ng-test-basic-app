/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("App: CompleteGuideFinalWebpack", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
  });

  it("should create the app", waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'angular-unit-test'`, waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-unit-test");
  }));

  it("should render title in a h1 tag", waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "angular-unit-test"
    );
  }));
});
