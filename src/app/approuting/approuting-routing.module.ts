import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuotesComponent } from "../quotes/quotes.component";
import { UserComponent } from "../user/user.component";

const routes: Routes = [
  {
    path: "",
    component: QuotesComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingRoutingModule {}
