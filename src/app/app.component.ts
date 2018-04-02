import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  values$: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.values$ = this.dataService.getData<string[]>();
  }
}
