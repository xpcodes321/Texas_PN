import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cities } from './city';
import { CityService } from './city.service';

@Component({
  templateUrl: './city-detail-component.html',
  styleUrls: ['./city-detail-component.css']
})
export class CityDetailComponent implements OnInit {
  pageTitle = 'Cities in Texas';
  errorMessage = '';
  city: Cities | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private CityService: CityService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getCity(id);
    }
  }

  getCity(id: number): void {
    this.CityService.getCity(id).subscribe({
      next: city => this.city = city,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/cities']);
  }
}
