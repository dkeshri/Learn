import{A as n,T as h,X as y,aa as c,ca as v,da as a,ea as w,fa as M,ga as g,ha as f,ia as j,ja as C,ka as m,la as b,ra as I,u as l,v as i,x as s,z as d}from"./chunk-5QO4FPO5.js";var S=[{path:"",component:j,children:[{path:"views",loadChildren:()=>import("./chunk-MGCISEZS.js").then(o=>o.ViewsModule)},{path:"",redirectTo:"views",pathMatch:"full"}]},{path:"**",component:C}],N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n({type:t}),t.\u0275inj=i({imports:[f.forRoot(S,{useHash:!0}),f]});let o=t;return o})();var x=(()=>{let t=class t{constructor(){this.title="web-app"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,A){e&1&&h(0,"router-outlet")},dependencies:[g]});let o=t;return o})();var u=(()=>{let t=class t extends m{constructor(r){super(),this.apiService=r}load(){let r="assets/contents/contents.json";return this.apiService.get(r).subscribe(e=>{this.subjects=e?.subjects})}};t.\u0275fac=function(e){return new(e||t)(s(b))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();function B(o){return()=>o.load()}var F=(()=>{let t=class t{constructor(r){if(r)throw new Error("Core module is already loaded. Import core module only once in root module.")}static forRoot(){return{ngModule:t}}};t.\u0275fac=function(e){return new(e||t)(s(t,12))},t.\u0275mod=n({type:t}),t.\u0275inj=i({providers:[{provide:m,deps:[v],useExisting:u},{provide:y,multi:!0,deps:[u],useFactory:B}],imports:[c,a,c,a]});let o=t;return o})();var R=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n({type:t,bootstrap:[x]}),t.\u0275inj=i({imports:[M,N,I,F.forRoot()]});let o=t;return o})();w().bootstrapModule(R).catch(o=>console.error(o));