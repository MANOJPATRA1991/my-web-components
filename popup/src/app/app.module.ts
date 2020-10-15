import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { TestComponent } from './test/test.component';
import { PopupService } from './popup/popup.service';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [PopupService],
})
export class AppModule {
  constructor(injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(AppComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
  ngDoBootstrap() { }
}
