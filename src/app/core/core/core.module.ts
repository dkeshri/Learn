import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
@NgModule({
  declarations: [],
  imports: [
    
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
