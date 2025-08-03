import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InterfaceService {
    private _showSearchBar = signal(false);
    public showSearchBar = this._showSearchBar.asReadonly();

    constructor() { }

    public toggleSearchBar(): void {
        this._showSearchBar.update((value: boolean) => !value);
    }
}