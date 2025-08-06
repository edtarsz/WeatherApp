import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Header } from "../app/shared/header/header";
import { InterfaceService } from '../app/core/services/interface.service';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../app/core/services/weater.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { WeatherDTO } from '../app/core/models/weather';
import { Observable } from 'rxjs';
import { Search } from "./search/search";
import { Hourly } from "./hourly/hourly";
import { Daily } from "./daily/daily";

@Component({
  selector: 'app-main',
  imports: [Header, RouterLink, AsyncPipe, CommonModule, Search, Hourly, Daily],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnDestroy {
  private weatherService = inject(WeatherService);
  private interfaceService = inject(InterfaceService);

  public showSearchBar = this.interfaceService.showSearchBar;
  public showUserMenu = this.interfaceService.showUserMenu;
  public selectedTemperatureUnit = this.interfaceService.getSelectedTemperatureUnit;

  weatherData = this.weatherService.weatherData;
  loading = this.weatherService.loading;
  error = this.weatherService.error;

  public onSearchBarToggle(): void {
    this.interfaceService.toggleSearchBar();
  }

  public onUserMenuToggle(): void {
    this.interfaceService.toggleUserMenu();
  }

  public onTemperatureUnitChange(unit: 'C' | 'F'): void {
    this.interfaceService.setSelectedTemperatureUnit(unit);
  }

  ngOnDestroy(): void {
    if (this.showSearchBar()) {
      this.interfaceService.toggleSearchBar();
    }
    if (this.showUserMenu()) {
      this.interfaceService.toggleUserMenu();
    }
  }
}
