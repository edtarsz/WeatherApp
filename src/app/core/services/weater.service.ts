import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { WeatherDTO } from '../models/weather';
import { key } from './key';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly key = key;
    private readonly baseUrl = 'http://api.weatherapi.com/v1/forecast.json';
    private readonly defaultDays = 7;
    private readonly defaultLang = 'es';

    private citySignal = signal<string>('Madrid');

    public weatherData = signal<WeatherDTO | null>(null);
    public loading = signal<boolean>(false);
    public error = signal<string | null>(null);

    constructor(private http: HttpClient) {
        this.setupWeatherSubscription();
    }

    // La suscripción vive durante la vida del servicio
    private setupWeatherSubscription(): void {
        toObservable(this.citySignal)
            .pipe(switchMap(city => this.fetchWeather(city)))
            .subscribe();
    }

    // Número de días y tipo de lenguaje son opcionales
    private buildUrl(city: string, days: number = this.defaultDays, lang: string = this.defaultLang): string {
        return `${this.baseUrl}?key=${this.key}&q=${city}&days=${days}&lang=${lang}`;
    }

    // public searchCity(city: string): Observable<WeatherDTO | null> {
    //     return this.http.get<WeatherDTO>(`${this.baseUrl}?key=${this.key}&q=${city}&days=${this.days}&lang=${this.lang}`);
    // }

    private fetchWeather(city: string): Observable<WeatherDTO | null> {
        this.loading.set(true);
        this.error.set(null);

        const url = this.buildUrl(city);

        return this.http.get<WeatherDTO>(url).pipe(
            tap({
                next: (data) => {
                    this.weatherData.set(data);
                    this.loading.set(false);
                },
                error: (err) => {
                    this.error.set('Error al cargar datos');
                    this.loading.set(false);
                    console.error('API Error:', err);
                }
            }),
            catchError(err => of(null))
        );
    }

    changeCity(city: string): void {
        this.citySignal.set(city);
    }
}