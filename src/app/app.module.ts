import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { JsonContent } from './core/models/content.model';
import { JsonContentService } from './core/services/json-content.service';
import { HttpClient } from '@angular/common/http';

export function initializerFn(jsonAppConfigService: JsonContentService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot()
  ],
  providers: [
    {
      provide: JsonContent,
      deps: [HttpClient],
      useExisting: JsonContentService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonContentService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
