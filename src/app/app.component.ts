import { Component, Renderer2, ɵrenderComponent, Injector, ElementRef } from '@angular/core';
import { TestComponent } from './test/test.component';

const selector = 'app-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-hoc';
  comp;
  constructor(
    private injector: Injector,
    private el: ElementRef,
    private render: Renderer2,
  ) {}

  async loadComponent() {
    this.comp = (await import('./popover/popover.component')).PopoverComponent;
  }

  ngOnInit() {
    const div = document.createElement(selector);
    div.innerHTML = 'Highlight Test';
    this.render.appendChild(this.el.nativeElement, div);
    ɵrenderComponent(TestComponent, {
      host: selector,
      injector: this.injector
    });
  }
}
