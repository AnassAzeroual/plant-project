import{A as tt,B as nt,C as it,D as ot,E as rt,F as at,G as lt,H as ee,c as $e,d as Fe,e as A,f as Le,g as Be,h as He,i as Ye,j as Je,k as Xe,l as Ue,m as Ze,n as j,o as Qe,p as qe,q as Q,r as R,s as Ge,v as Ke,w as q,x as G,y as K,z as et}from"./chunk-Q3B3ZQF3.js";import{$a as de,A as W,Aa as E,Ab as Ve,Bb as Ae,C as Ce,Db as Ie,Ea as n,Eb as je,Fa as o,G as _e,Ga as s,H as V,Hb as We,Ja as le,Jb as Z,Ka as w,Kb as I,Ma as v,N as z,Oa as _,Pa as ze,Qa as xe,R as T,S as x,Sa as be,T as oe,Ta as Oe,Ua as we,Va as O,Wa as l,Xa as se,Y as ye,Z as f,Za as pe,_ as h,_a as ce,ab as Pe,ba as H,bb as J,ca as re,db as Se,eb as X,g as F,h as L,hb as D,ja as c,k as ge,ka as g,l as N,lb as ke,ma as Me,o as ie,p as fe,pa as Y,ra as ae,rb as Te,sb as U,t as B,tb as Ee,ua as y,ub as De,v as S,vb as Re,w as k,wa as d,x as he,xb as Ne,ya as ve}from"./chunk-RGGOFIKS.js";function yt(e){let t=e,a=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return a===1&&r===0?1:5}var st=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",yt];var Mt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"welcome",loadChildren:()=>import("./chunk-VM32OH34.js").then(e=>e.WelcomeModule)},{path:"home",loadChildren:()=>import("./chunk-VPBFFFIR.js").then(e=>e.HomeModule)},{path:"explore",loadChildren:()=>import("./chunk-KBQ7WWM7.js").then(e=>e.ExploreModule)},{path:"blog",loadChildren:()=>import("./chunk-EH3M46LK.js").then(e=>e.BlogModule)},{path:"about",loadChildren:()=>import("./chunk-EAFP6BJA.js").then(e=>e.AboutModule)},{path:"terms-and-conditions",loadChildren:()=>import("./chunk-OENU2GOG.js").then(e=>e.TermsAndConditionsModule)},{path:"privacy-policy",loadChildren:()=>import("./chunk-ROFGNNSF.js").then(e=>e.PrivacyPolicyModule)},{path:"help",loadChildren:()=>import("./chunk-4EFWIS2D.js").then(e=>e.HelpAndFAQModule)},{path:"contact-us",loadChildren:()=>import("./chunk-7JL6UDJH.js").then(e=>e.ContactUsModule)}],pt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=z({imports:[I.forRoot(Mt),I]});let e=t;return e})();var xt=["*"];function bt(e,t){if(e&1){let a=w();n(0,"div",0),v("@slideMotion.done",function(i){f(a);let p=_();return h(p.onAnimationEvent(i))})("mouseenter",function(){f(a);let i=_();return h(i.setMouseState(!0))})("mouseleave",function(){f(a);let i=_();return h(i.setMouseState(!1))}),xe(1),o()}if(e&2){let a=_();ve("ant-dropdown-rtl",a.dir==="rtl"),d("ngClass",a.nzOverlayClassName)("ngStyle",a.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",!!(a.noAnimation!=null&&a.noAnimation.nzNoAnimation))("nzNoAnimation",a.noAnimation==null?null:a.noAnimation.nzNoAnimation)}}var Ot="dropDown",wt=[R.bottomLeft,R.bottomRight,R.topRight,R.topLeft],ct=(()=>{let t=class t{setDropdownMenuValue(r,i){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(r,i)}constructor(r,i,p,m,C,u){this.nzConfigService=r,this.elementRef=i,this.overlay=p,this.renderer=m,this.viewContainerRef=C,this.platform=u,this._nzModuleName=Ot,this.overlayRef=null,this.destroy$=new F,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new L(!1),this.nzTrigger$=new L("hover"),this.overlayClose$=new F,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new re}ngAfterViewInit(){if(this.nzDropdownMenu){let r=this.elementRef.nativeElement,i=S(B(r,"mouseenter").pipe(W(!0)),B(r,"mouseleave").pipe(W(!1))),p=this.nzDropdownMenu.mouseState$,m=S(p,i),C=B(r,"click").pipe(ie(()=>!this.nzVisible)),u=this.nzTrigger$.pipe(_e(M=>M==="hover"?m:M==="click"?C:ge)),b=this.nzDropdownMenu.descendantMenuItemClick$.pipe(k(()=>this.nzClickHide),W(!1)),ne=S(u,b,this.overlayClose$).pipe(k(()=>!this.nzDisabled)),_t=S(this.inputVisible$,ne);fe([_t,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(ie(([M,me])=>M||me),he(150),Ce(),k(()=>this.platform.isBrowser),V(this.destroy$)).subscribe(M=>{let ue=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:r).getBoundingClientRect().width;if(this.nzVisible!==M&&this.nzVisibleChange.emit(M),this.nzVisible=M,M){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:ue,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),S(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(k(P=>!this.elementRef.nativeElement.contains(P.target))),this.overlayRef.keydownEvents().pipe(k(P=>P.keyCode===27&&!He(P)))).pipe(V(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let P=this.overlayRef.getConfig();P.minWidth=ue}this.positionStrategy.withPositions([R[this.nzPlacement],...wt]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new Ze(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(V(this.destroy$)).subscribe(M=>{M.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(r){let{nzVisible:i,nzDisabled:p,nzOverlayClassName:m,nzOverlayStyle:C,nzTrigger:u}=r;if(u&&this.nzTrigger$.next(this.nzTrigger),i&&this.inputVisible$.next(this.nzVisible),p){let b=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(b,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(b,"disabled")}m&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),C&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}};t.\u0275fac=function(i){return new(i||t)(g(Ye),g(H),g(Qe),g(Y),g(ae),g(Xe))},t.\u0275dir=oe({type:t,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],standalone:!0,features:[ye]});let e=t;return N([Je(),A()],e.prototype,"nzBackdrop",void 0),N([A()],e.prototype,"nzClickHide",void 0),N([A()],e.prototype,"nzDisabled",void 0),N([A()],e.prototype,"nzVisible",void 0),e})(),Pt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=z({});let e=t;return e})();var dt=(()=>{let t=class t{constructor(r,i,p){this.renderer=r,this.nzButtonGroupComponent=i,this.elementRef=p}ngAfterViewInit(){let r=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&r&&this.renderer.addClass(r,"ant-dropdown-button")}};t.\u0275fac=function(i){return new(i||t)(g(Y),g(at,9),g(H))},t.\u0275dir=oe({type:t,selectors:[["","nz-button","","nz-dropdown",""]],standalone:!0});let e=t;return e})(),mt=(()=>{let t=class t{onAnimationEvent(r){this.animationStateChange$.emit(r)}setMouseState(r){this.mouseState$.next(r)}setValue(r,i){this[r]=i,this.cdr.markForCheck()}constructor(r,i,p,m,C,u,b){this.cdr=r,this.elementRef=i,this.renderer=p,this.viewContainerRef=m,this.nzMenuService=C,this.directionality=u,this.noAnimation=b,this.mouseState$=new L(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new re,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new F}ngOnInit(){this.directionality.change?.pipe(V(this.destroy$)).subscribe(r=>{this.dir=r,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(i){return new(i||t)(g(ke),g(H),g(Y),g(ae),g(q),g(Ue,8),g(Q,9))},t.\u0275cmp=T({type:t,selectors:[["nz-dropdown-menu"]],viewQuery:function(i,p){if(i&1&&be(Me,7),i&2){let m;Oe(m=we())&&(p.templateRef=m.first)}},exportAs:["nzDropdownMenu"],standalone:!0,features:[Pe([q,{provide:Ke,useValue:!0}]),J],ngContentSelectors:xt,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","ngClass","ngStyle","nzNoAnimation"]],template:function(i,p){i&1&&(ze(),y(0,bt,2,7,"ng-template"))},dependencies:[U,Ee,Q],encapsulation:2,data:{animation:[qe]},changeDetection:0});let e=t;return e})(),ut=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=z({imports:[Pt,et]});let e=t;return e})(),Tn=[new j({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new j({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new j({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new j({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})];var te=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=T({type:t,selectors:[["app-footer"]],standalone:!0,features:[J],decls:31,vars:1,consts:[["menu","nzDropdownMenu"],[1,"container-footer"],[1,"left"],[1,"right"],[1,"mobile-question-menu"],["src","../../../assets/icons/question-signe-en-cercles.png","alt","Menu","nz-button","","nz-dropdown","","nzPlacement","topLeft",3,"nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","routerLink","/about",1,"nz-menu-item"],["nz-menu-item","","routerLink","/terms-and-conditions",1,"nz-menu-item"],["nz-menu-item","","routerLink","/privacy-policy",1,"nz-menu-item"],[1,"divider"],["nz-menu-item","","routerLink","/help",1,"nz-menu-item"],["nz-menu-item","","routerLink","/contact-us",1,"nz-menu-item"]],template:function(i,p){if(i&1&&(n(0,"div",1)(1,"div",2)(2,"p"),l(3,"About"),o(),n(4,"p"),l(5,"Terms & Conditions"),o(),n(6,"p"),l(7,"Privacy Policy"),o(),n(8,"p"),l(9,"Cookies"),o(),n(10,"p"),l(11,"Help & FAQ"),o()(),n(12,"div",3)(13,"p"),l(14,"Contact US"),o()()(),n(15,"div",4),s(16,"img",5),n(17,"nz-dropdown-menu",null,0)(19,"ul",6)(20,"li",7),l(21,"About"),o(),n(22,"li",8),l(23,"Terms & Conditions"),o(),n(24,"li",9),l(25,"Privacy Policy"),o(),s(26,"hr",10),n(27,"li",11),l(28,"Help & FAQ"),o(),n(29,"li",12),l(30,"Contact"),o()()()()),i&2){let m=O(18);c(16),d("nzDropdownMenu",m)}},dependencies:[dt,ct,mt,K,G,Z],styles:[".container-footer[_ngcontent-%COMP%]{padding:5px 20px;display:flex;flex-wrap:nowrap;justify-content:space-between}.container-footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;font-size:14px}.container-footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.container-footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{margin-left:15px}.container-footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex}.container-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{color:#1890ff;cursor:pointer}.nz-menu-item[_ngcontent-%COMP%]{padding:2px 10px!important}.mobile-question-menu[_ngcontent-%COMP%]{display:none;cursor:pointer;padding:0 10px 9px 0;position:relative}.mobile-question-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:translateY(5px);width:20px}.divider[_ngcontent-%COMP%]{width:120px}@media (max-width: 768px){.container-footer[_ngcontent-%COMP%]{display:none}.mobile-question-menu[_ngcontent-%COMP%]{padding:1px 20px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center}}"]});let e=t;return e})();var gt=(e,t)=>({"justify-content-center":e,"justify-content-between":t}),kt=e=>({"icon-collapsed":e}),Tt=(e,t)=>({animate__slideInLeft:e,animate__slideOutLeft:t});function Et(e,t){e&1&&le(0)}function Dt(e,t){e&1&&le(0)}function Rt(e,t){e&1&&l(0,"Location and languages")}function Nt(e,t){e&1&&(n(0,"div",20)(1,"p"),l(2,"Modal Content"),o(),n(3,"p"),l(4,"Modal Content"),o(),n(5,"p"),l(6,"Modal Content"),o(),n(7,"p"),l(8,"Modal Content"),o(),n(9,"p"),l(10,"Modal Content"),o(),n(11,"div",21),l(12," this work not completed yet "),o()())}function Vt(e,t){if(e&1){let a=w();n(0,"button",22),v("click",function(){f(a);let i=_();return h(i.handleOk())}),l(1,"Custom Submit"),o()}}function At(e,t){e&1&&s(0,"span",27)}function It(e,t){e&1&&s(0,"span",28)}function jt(e,t){e&1&&(n(0,"span"),l(1," Home"),o())}function $t(e,t){e&1&&(n(0,"span"),l(1,"Explore"),o())}function Ft(e,t){e&1&&(n(0,"span"),l(1," Blog"),o())}function Lt(e,t){e&1&&(s(0,"hr"),n(1,"div",42)(2,"a",43),s(3,"img",44),o(),n(4,"a",45),s(5,"img",46),o(),n(6,"a",47),s(7,"img",48),o()())}function Bt(e,t){if(e&1){let a=w();n(0,"div",23)(1,"div",24)(2,"div",13),s(3,"img",25),n(4,"h1",26),l(5),o()(),n(6,"div",10),v("click",function(){f(a);let i=_();return h(i.headerTriggerClick())}),y(7,At,1,0,"span",27)(8,It,1,0,"span",28),o()(),n(9,"ul",29)(10,"li",30),s(11,"span",31),y(12,jt,2,0,"span"),o(),n(13,"li",32),s(14,"span",33),y(15,$t,2,0,"span"),o(),n(16,"li",34),s(17,"span",35),y(18,Ft,2,0,"span"),o()(),n(19,"div",36)(20,"div",37)(21,"div",38),v("click",function(){f(a);let i=_();return h(i.showModal())}),n(22,"span"),s(23,"img",39),o(),n(24,"span",40),l(25,"Morocco - FR"),o()(),n(26,"div"),s(27,"span",41),n(28,"span",40),l(29,"Contrast"),o()()(),y(30,Lt,8,0),o()()}if(e&2){let a=_();c(),d("ngClass",X(12,gt,a.isCollapsed,!a.isCollapsed)),c(3),d("hidden",a.isCollapsed),c(),se(a.appName),c(2),E(a.isCollapsed?8:7),c(2),d("nzInlineCollapsed",a.isCollapsed),c(3),E(a.isCollapsed?-1:12),c(3),E(a.isCollapsed?-1:15),c(3),E(a.isCollapsed?-1:18),c(),d("ngClass",Se(15,kt,a.isCollapsed)),c(5),d("hidden",a.isCollapsed),c(4),d("hidden",a.isCollapsed),c(2),E(a.isCollapsed?-1:30)}}function Wt(e,t){if(e&1){let a=w();n(0,"div",49)(1,"div",24)(2,"div",10),v("click",function(){f(a);let i=_();return h(i.headerTriggerClick())}),s(3,"span",50)(4,"span",51),o()(),n(5,"div",23)(6,"ul",52)(7,"li",30),s(8,"span",31),n(9,"span"),l(10," Home "),o()(),n(11,"li",32),s(12,"span",33),n(13,"span"),l(14," Explore "),o()(),n(15,"li",34),s(16,"span",35),n(17,"span"),l(18," Blog "),o()()(),n(19,"div",53)(20,"div",37)(21,"div",38),v("click",function(){f(a);let i=_();return h(i.showModal())}),n(22,"span"),s(23,"img",39),o(),n(24,"span",40),l(25,"Morocco - FR"),o()(),n(26,"div"),s(27,"span",41),n(28,"span"),l(29,"Contrast"),o()()(),s(30,"hr"),n(31,"div",42)(32,"a",43),s(33,"img",44),o(),n(34,"a",45),s(35,"img",46),o(),n(36,"a",47),s(37,"img",48),o()()()()()}if(e&2){let a=_();d("ngClass",X(5,Tt,!a.isCollapsed,a.isCollapsed)),c(),d("ngClass",X(8,gt,a.isCollapsed,!a.isCollapsed)),c(2),d("hidden",a.isCollapsed),c(),d("hidden",!a.isCollapsed),c(20),d("hidden",a.isCollapsed)}}var ft=(()=>{let t=class t{constructor(){this.appName="Search Product",this.isCollapsed=!1,this.isVisible=!1}change(r){this.isCollapsed=r}headerTriggerClick(){this.isCollapsed=!this.isCollapsed}showModal(){this.isVisible=!0}handleOk(){console.log("Button ok clicked!"),this.isVisible=!1}handleCancel(){console.log("Button cancel clicked!"),this.isVisible=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=T({type:t,selectors:[["app-root"]],decls:33,vars:9,consts:[["modalTitle",""],["modalContent",""],["modalFooter",""],["menuPC",""],["menuMobile",""],[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","lg","nzTheme","light",1,"menu-sidebar","pc",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[4,"ngTemplateOutlet"],[1,"app-header"],[1,"pc"],[1,"header-trigger",3,"click"],[1,"app-name"],[1,"mobile"],["routerLink","/"],["ngSrc","../assets/free-plant-icon.png","alt","logo","height","512","width","512",1,"logo"],[1,"header-icons"],["nz-icon","","nzType","user","nzTheme","outline",1,"nz-icon"],["nz-icon","","nzType","star","nzTheme","outline",1,"nz-icon"],[1,"inner-content"],[3,"nzVisibleChange","nzOnCancel","nzVisible","nzTitle","nzContent","nzFooter"],[1,"modal-languages"],[1,"not-completed"],["nz-button","","nzType","primary",3,"click"],[1,"ant-layout-sider-children"],[1,"sidebar-logo",3,"ngClass"],["src","../assets/free-plant-icon.png","alt","logo",1,"logo"],[1,"animate__animated","animate__flipInX",3,"hidden"],["nz-icon","","nzType","left","nzTheme","outline",1,"nz-icon","trigger"],["nz-icon","","nzType","right","nzTheme","outline",1,"nz-icon","trigger-open"],["nz-menu","","nzMode","inline",1,"navigation-links-menu",3,"nzInlineCollapsed"],["nz-menu-item","","nzMatchRouter","","routerLink","/home"],["nz-icon","","nzType","search","nzTheme","outline",1,"nz-icon"],["nz-menu-item","","nzMatchRouter","","routerLink","/explore"],["nz-icon","","nzType","dashboard","nzTheme","outline",1,"nz-icon"],["nz-menu-item","","nzMatchRouter","","routerLink","/blog"],["nz-icon","","nzType","file-text","nzTheme","outline",1,"nz-icon"],[1,"sider-footer",3,"ngClass"],[1,"navigation-links-menu"],[3,"click"],["src","../assets/icons/world.png","alt","translation icon",1,"icon"],[3,"hidden"],["nz-icon","","nzType","bg-colors","nzTheme","outline",1,"nz-icon"],[1,"icons-zone"],["href","https://www.facebook.com/","target","_blank","title","facebook"],["src","./../assets/icons/facebook.png","alt","facebook"],["href","https://www.instagram.com/","target","_blank","title","instagram"],["src","./../assets/icons/instagram.png","alt","instagram"],["href","https://www.youtube.com/","target","_blank","title","youtube"],["src","./../assets/icons/youtube.png","alt","youtube"],[1,"menu-mobile","mobile","animate__animated",3,"ngClass"],["nz-icon","","nzType","left","nzTheme","outline",1,"nz-icon","trigger",3,"hidden"],["nz-icon","","nzType","right","nzTheme","outline",1,"nz-icon","trigger-open",3,"hidden"],["nz-menu","","nzMode","inline",1,"navigation-links-menu"],[1,"sider-footer"]],template:function(i,p){if(i&1){let m=w();n(0,"nz-layout",5)(1,"nz-sider",6),de("nzCollapsedChange",function(u){return f(m),ce(p.isCollapsed,u)||(p.isCollapsed=u),h(u)}),y(2,Et,1,0,"ng-container",7),o(),y(3,Dt,1,0,"ng-container",7),n(4,"nz-layout")(5,"nz-header")(6,"div",8)(7,"div",9)(8,"span",10),v("click",function(){return f(m),h(p.headerTriggerClick())}),n(9,"h1",11),l(10),o()()(),n(11,"div",12)(12,"div",13),s(13,"img",14),o()(),n(14,"div",15),s(15,"span",16)(16,"span",17),o()()(),n(17,"nz-content")(18,"div",18),s(19,"router-outlet"),o()(),n(20,"nz-footer"),s(21,"app-footer"),o()()(),n(22,"nz-modal",19),de("nzVisibleChange",function(u){return f(m),ce(p.isVisible,u)||(p.isVisible=u),h(u)}),v("nzOnCancel",function(){return f(m),h(p.handleCancel())}),y(23,Rt,1,0,"ng-template",null,0,D)(25,Nt,13,0,"ng-template",20,1,D)(27,Vt,2,0,"ng-template",null,2,D),o(),y(29,Bt,31,17,"ng-template",null,3,D)(31,Wt,38,11,"ng-template",null,4,D)}if(i&2){let m=O(24),C=O(26),u=O(28),b=O(30),ne=O(32);c(),pe("nzCollapsed",p.isCollapsed),d("nzTrigger",null),c(),d("ngTemplateOutlet",b),c(),d("ngTemplateOutlet",ne),c(7),se(p.appName),c(12),pe("nzVisible",p.isVisible),d("nzTitle",m)("nzContent",C)("nzFooter",u)}},dependencies:[U,De,We,Z,Ge,rt,it,tt,nt,ot,K,G,lt,te,Ne],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{overflow:auto;background-color:#fff}.app-layout[_ngcontent-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]{display:flex;font-size:20px;cursor:pointer;transition:all .3s,padding 0s;flex-direction:row;flex-wrap:nowrap;align-items:baseline}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%]{display:none;font-size:18px;margin:0 0 0 10px}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger[_ngcontent-%COMP%]{color:#607d8b;padding:5px}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger[_ngcontent-%COMP%]:hover{background-color:silver}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger-open[_ngcontent-%COMP%]{color:#607d8b;background-color:#fff;padding:5px;border:1px solid silver;border-radius:50%;transform:translate(7px);position:fixed}.app-layout[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger-open[_ngcontent-%COMP%]:hover{background-color:silver}.app-layout[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}.app-layout[_ngcontent-%COMP%]   .justify-content-center[_ngcontent-%COMP%]{justify-content:center}.app-layout[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]{display:flex;position:relative;height:64px;padding:10px;overflow:hidden;background:#fff;color:#1890ff;transition:all .3s;flex-direction:row;flex-wrap:nowrap;align-items:center;cursor:pointer}.app-layout[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:flex-end;flex-direction:row}.app-layout[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:middle}.app-layout[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 5px;color:#000;font-weight:600;font-size:17px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}.app-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-layout[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{padding:10px 0 0 20px;background:#fff;height:calc(100vh - 75px)}.app-layout[_ngcontent-%COMP%]   .app-header[_ngcontent-%COMP%]{padding:0 20px;display:flex;background:#fff;flex-wrap:nowrap;align-items:center;justify-content:space-between}.app-layout[_ngcontent-%COMP%]   .header-icons[_ngcontent-%COMP%]{font-size:20px}.app-layout[_ngcontent-%COMP%]   .header-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:17px}.app-layout[_ngcontent-%COMP%]   .header-icons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#1890ff;cursor:pointer}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .navigation-links-menu[_ngcontent-%COMP%]{font-size:18px}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .navigation-links-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#1890ff}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .sider-footer[_ngcontent-%COMP%]{padding:0 25px;cursor:pointer;position:absolute;bottom:0;width:100%}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .sider-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-bottom:5px}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .sider-footer[_ngcontent-%COMP%]   .icons-zone[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;padding:5px}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   .sider-footer[_ngcontent-%COMP%]   .icons-zone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px}.app-layout[_ngcontent-%COMP%]   .ant-layout-sider-children[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:12px}.icon-collapsed[_ngcontent-%COMP%]{text-align:center!important;cursor:pointer!important;margin-bottom:8px}.nz-icon[_ngcontent-%COMP%]{font-size:22px}.icon[_ngcontent-%COMP%]{width:20px}nz-sider[_ngcontent-%COMP%]{overflow:hidden;border-radius:0 30px 30px 0}@media only screen and (min-width: 769px){.menu-mobile[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.inner-content[_ngcontent-%COMP%]{padding:10px 0 0 33px}.ant-layout-sider-children[_ngcontent-%COMP%]{height:unset}.mobile[_ngcontent-%COMP%]{display:block!important}.pc[_ngcontent-%COMP%]{display:none!important}.menu-mobile[_ngcontent-%COMP%]{display:block;position:absolute;left:0;top:0;width:246px;border-radius:0 30px 30px 0;background-color:#fff;height:100vh;z-index:3;box-shadow:#43475545 0 0 .25em,#5a7dbc0d 0 .25em 1em}.menu-mobile[_ngcontent-%COMP%]:hover   .header-trigger[_ngcontent-%COMP%]   .trigger-open[_ngcontent-%COMP%]{background-color:silver}.menu-mobile[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]{width:100%;display:unset;text-align:end}.menu-mobile[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger-open[_ngcontent-%COMP%]{color:#607d8b;background-color:#fff;padding:5px;border:1px solid silver;border-radius:50%;transform:translate(-5px);position:fixed}.menu-mobile[_ngcontent-%COMP%]   .header-trigger[_ngcontent-%COMP%]   .trigger-open[_ngcontent-%COMP%]:hover{background-color:silver}}.pc[_ngcontent-%COMP%]{display:block}.mobile[_ngcontent-%COMP%]{display:none}@keyframes _ngcontent-%COMP%_slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:visible;-webkit-transform:translate3d(-95%,0,0);transform:translate3d(-95%,0,0)}}.animate__slideOutLeft[_ngcontent-%COMP%]{-webkit-animation-name:_ngcontent-%COMP%_slideOutLeft;animation-name:_ngcontent-%COMP%_slideOutLeft}.modal-languages[_ngcontent-%COMP%]{height:100%;display:flex;flex-wrap:nowrap;flex-direction:row;align-items:center;gap:20px;margin:0;border:2px dashed #9C27B0;padding:20px;overflow:auto;background-color:#fce4ec4d}.modal-languages[_ngcontent-%COMP%]   .not-completed[_ngcontent-%COMP%]{color:#795548;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;font-size:14px;font-weight:600;text-transform:uppercase}"]});let e=t;return e})();var ht=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=z({imports:[Re,ut,I,ee,te]});let e=t;return e})();Te(st);var Ct=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t,bootstrap:[ft]}),t.\u0275inj=z({providers:[{provide:Be,useValue:Le},Ve(Ae())],imports:[je,pt,$e,Fe,ee,ht]});let e=t;return e})();Ie().bootstrapModule(Ct).catch(e=>console.error(e));
