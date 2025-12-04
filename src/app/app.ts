
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InboxScreenComponent } from './components/inbox-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InboxScreenComponent],
  template: `<app-inbox-screen></app-inbox-screen>`,
})

export class App {
  protected readonly title = signal('taskbox');
}