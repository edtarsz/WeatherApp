import { Component, inject, OnDestroy } from '@angular/core';
import { Header } from "../app/shared/header/header";
import { InterfaceService } from '../app/core/services/interface.service';

@Component({
  selector: 'app-main',
  imports: [Header],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnDestroy {
  private interfaceService = inject(InterfaceService);
  public showSearchBar = this.interfaceService.showSearchBar;
  public showUserMenu = this.interfaceService.showUserMenu;

  public selectedTemperatureUnit = this.interfaceService.getSelectedTemperatureUnit;

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
