import { Component, inject } from '@angular/core';
import { Header } from "../app/shared/header/header";
import { InterfaceService } from '../app/core/services/interface.service';

@Component({
  selector: 'app-main',
  imports: [Header],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  private interfaceService = inject(InterfaceService);
  public showSearchBar = this.interfaceService.showSearchBar;
  public showUserMenu = this.interfaceService.showUserMenu;

  public onSearchBarToggle(): void {
    this.interfaceService.toggleSearchBar();
  }

  public onUserMenuToggle(): void {
    this.interfaceService.toggleUserMenu();
  }
}
