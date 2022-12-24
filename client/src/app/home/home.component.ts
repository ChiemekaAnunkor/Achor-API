import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @ViewChildren('secs') secs: QueryList<ElementRef> | any;
  public getJsonValue: any;
  public singleapi: any;
  public apiList: any;
  public test: any;

  constructor(private http: HttpClient, private selectedapi: UserAuthService) {}

  ngOnInit(): void {
    this.getMethod();
    this.getAPIs();
    this.data;
  }

  public getMethod() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.getJsonValue = data;
      });
  }

  data: {
    name: string;
    creator: string;
    imgurl: string;
    desc: string;
    popularity: string;
    endpoint: any;
    discussion: any;
    dateupdated: string;
  }[] = [
    {
      name: 'Pinterest API',
      creator: 'achorapi',
      imgurl: '',
      desc: 'Search pintrest photos and get back up to date and most recent data',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: ['hello', 'hello', 'apikey'],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'Weather API',
      creator: 'weatherbit',
      imgurl:
        'https://rapidapi.com/cdn/images?url=https://s3.amazonaws.com/mashape-production-logos/apis/593335f1e4b08ab68dbc3785_medium',
      desc: 'Current weather data API, and Weather forecast API - Basic access to the Weatherbit.io Weather API.',
      popularity: '10/10',
      endpoint: {
        apiurl: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
        qureyparamters: ['hello', 'hello', 'apikey'],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'Currency API',
      creator: 'fyhao',
      imgurl: 'https://currency-exchange.p.rapidapi.com/listquotes',
      desc: 'Live currency and foreign exchange rates by specifying source and destination quotes and optionally amount to calculate.',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: ['hello', 'hello', 'apikey'],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
  ];
  getAPIs() {
    return (this.apiList = this.data);
  }
  pinFun() {
    const pinterest = document.querySelector('.pinterest');
    console.log(pinterest);
    this.selectedapi.changeMessage(this.data[0]);
  }
  weatFun() {
    const weather = document.querySelector('.weather');
    console.log(weather);
    this.selectedapi.changeMessage(this.data[1]);
  }
  curFun() {
    const currency = document.querySelector('.currency');
    console.log(currency);
    this.selectedapi.changeMessage(this.data[2]);
  }
}
