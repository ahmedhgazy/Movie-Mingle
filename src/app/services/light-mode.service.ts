import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LightService {
  lMSignal = signal<string>('null');

  updateMode() {
    this.lMSignal.update((mode) => {
      console.log(this.lMSignal());

      return mode === 'dark' ? 'null' : 'dark';
    });
  }
}
