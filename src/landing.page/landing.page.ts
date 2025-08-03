import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InterfaceService } from '../app/core/services/interface.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css'
})
export class LandingPage {
  private interfaceService = inject(InterfaceService);
  public showMenuIndex = this.interfaceService.showMenuIndex;

  public onMenuIndexToggle(): void {
    this.interfaceService.toggleMenuIndex();
  }
}
