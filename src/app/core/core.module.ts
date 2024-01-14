import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { JsonContentService } from './services/json-content.service';
import { JsonContent } from './models/content.model';

export function initializerFn(jsonAppConfigService: JsonContentService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    HttpClientModule
  ],
  providers:[
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
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if(parentModule){
      throw new Error(`Core module is already loaded. Import core module only once in root module.`);
    }
  }
  static forRoot(): ModuleWithProviders<CoreModule>{
    return{
      ngModule: CoreModule
    }
  }
}
