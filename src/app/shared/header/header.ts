import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InterfaceService } from '../../core/services/interface.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private interfaceService = inject(InterfaceService);
  public showSearchBar = this.interfaceService.showSearchBar;
  public showMenu = this.interfaceService.showMenu;

  public onSearchBarToggle(): void {
    this.interfaceService.toggleSearchBar();
  }

  public onMenuToggle(): void {
    this.interfaceService.toggleMenu();
  }
}
