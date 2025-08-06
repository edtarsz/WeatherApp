import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Header } from "../app/shared/header/header";
import { InterfaceService } from '../app/core/services/interface.service';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../app/core/services/weater.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { WeatherDTO } from '../app/core/models/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [Header, RouterLink, JsonPipe, AsyncPipe, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnDestroy, OnInit {
  private weatherService = inject(WeatherService);
  private interfaceService = inject(InterfaceService);

  public showSearchBar = this.interfaceService.showSearchBar;
  public showUserMenu = this.interfaceService.showUserMenu;
  public selectedTemperatureUnit = this.interfaceService.getSelectedTemperatureUnit;

  data$: Observable<WeatherDTO> | undefined;

  ngOnInit(): void {
    this.data$ = this.weatherService.getWeatherCity('california');
  }

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
