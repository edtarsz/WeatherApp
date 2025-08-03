import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InterfaceService {
    private _showSearchBar = signal(false);
    public showSearchBar = this._showSearchBar.asReadonly();

    private _showUserMenu = signal(false);
    public showUserMenu = this._showUserMenu.asReadonly();

    private _showMenuIndex = signal(false);
    public showMenuIndex = this._showMenuIndex.asReadonly();

    private selectedTemperatureUnit = signal<'C' | 'F'>('C');
    public getSelectedTemperatureUnit = this.selectedTemperatureUnit.asReadonly();

    constructor() { }

    public toggleSearchBar(): void {
        this._showSearchBar.update((value: boolean) => !value);
    }

    public toggleUserMenu(): void {
        this._showUserMenu.update((value: boolean) => !value);
    }

    public toggleMenuIndex(): void {
        this._showMenuIndex.update((value: boolean) => !value);
    }

    public setSelectedTemperatureUnit(unit: 'C' | 'F'): void {
        this.selectedTemperatureUnit.set(unit);
    }
}