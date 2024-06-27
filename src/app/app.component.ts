import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LightService } from './services/light-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.use('en');
  }
}
