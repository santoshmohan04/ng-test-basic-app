import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { CommonModule } from "@angular/common";
import { ApproutingModule } from "./approuting/approuting.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, UserComponent, QuotesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ApproutingModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
