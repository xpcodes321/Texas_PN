import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cities } from './city';


import { CityService } from './city.service';

@Component({
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityComponent implements OnInit, OnDestroy {
  pageTitle = 'City List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCity = this.performFilter(value);
  }

  filteredCity: Cities[] = [];
  Cities: Cities[] = [];

  constructor(private CityService: CityService) { }

  performFilter(filterBy: string): Cities[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Cities.filter((city: Cities) =>
      city.City.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.CityService.getCities().subscribe({
      next: Cities => {
        this.Cities = Cities;
        this.filteredCity = this.Cities;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'My Rating: ' + message;
  }
}
