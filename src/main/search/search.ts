import { Component, inject, OnDestroy, Output } from '@angular/core';
import { InterfaceService } from '../../app/core/services/interface.service';
import { WeatherService } from '../../app/core/services/weater.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchControl = new FormControl('', { nonNullable: true });

  private weatherService = inject(WeatherService);
  private interfaceService = inject(InterfaceService);

  public onSearchBarToggle(): void {
    this.interfaceService.toggleSearchBar();
  }

  public onSearchResultClick(city: string): void {
    this.weatherService.changeCity(city);
    this.interfaceService.toggleSearchBar();
  }
}
