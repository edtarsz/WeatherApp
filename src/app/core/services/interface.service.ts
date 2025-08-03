import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InterfaceService {
    private _showSearchBar = signal(false);
    public showSearchBar = this._showSearchBar.asReadonly();

    private _showMenu = signal(false);
    public showMenu = this._showMenu.asReadonly();

    constructor() { }

    public toggleSearchBar(): void {
        this._showSearchBar.update((value: boolean) => !value);
    }

    public toggleMenu(): void {
        this._showMenu.update((value: boolean) => !value);
    }
}