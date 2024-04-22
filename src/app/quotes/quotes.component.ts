import { Component, OnInit } from "@angular/core";
import { QuoteModel } from "./model/QuoteModel";
import { QuoteService } from "./service/quoteservice.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrl: "./quotes.component.css",
})
export class QuotesComponent implements OnInit {
  public quoteList: QuoteModel[] = [];
  public fetchedList: QuoteModel[] = [];
  public quoteText: string = "";

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = "";
  }

  removeQuote(index: number) {
    this.service.removeQuote(index);
  }
}
