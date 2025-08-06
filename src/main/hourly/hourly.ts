import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDTO } from '../../app/core/models/weather';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-hourly',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './hourly.html',
  styleUrl: './hourly.css'
})
export class Hourly {
  @Input() data: any;

  data$: Observable<WeatherDTO> | undefined;
}
