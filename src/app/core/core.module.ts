import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { LoadAppConfigJsonService } from './services/load-app-config-Json.service';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { AppConfig } from './models/app-config.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
export function initializerFn(loadAppConfigJsonService: LoadAppConfigJsonService) {
  return () => {
    return loadAppConfigJsonService.load();
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
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: LoadAppConfigJsonService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LoadAppConfigJsonService],
      useFactory: initializerFn
    },
    MessageService,ConfirmationService
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
