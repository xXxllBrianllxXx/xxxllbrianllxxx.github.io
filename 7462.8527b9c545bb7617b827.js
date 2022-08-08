"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[7462],{12178:(B,b,i)=>{i.d(b,{pW:()=>M,Cv:()=>w});var a=i(37716),g=i(38583),p=i(72458),_=i(39490),Z=i(46237),v=i(75319),f=i(22759),c=i(45435);const T=["primaryValueBar"],q=(0,p.pj)(class{constructor(m){this._elementRef=m}},"primary"),y=new a.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){const m=(0,a.f3M)(g.K0),d=m?m.location:null;return{getPathname:()=>d?d.pathname+d.search:""}}});let t=0,M=(()=>{class m extends q{constructor(s,l,u,h){super(s),this._ngZone=l,this._animationMode=u,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new a.vpe,this._animationEndSubscription=v.w.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+t++;const D=h?h.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${D}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===u}get value(){return this._value}set value(s){this._value=A((0,_.su)(s)||0)}get bufferValue(){return this._bufferValue}set bufferValue(s){this._bufferValue=A(s||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const s=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,f.R)(s,"transitionend").pipe((0,c.h)(l=>l.target===s)).subscribe(()=>{("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return m.\u0275fac=function(s){return new(s||m)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(Z.Qb,8),a.Y36(y,8))},m.\u0275cmp=a.Xpm({type:m,selectors:[["mat-progress-bar"]],viewQuery:function(s,l){if(1&s&&a.Gf(T,5),2&s){let u;a.iGM(u=a.CRH())&&(l._primaryValueBar=u.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(s,l){2&s&&(a.uIk("aria-valuenow","indeterminate"===l.mode||"query"===l.mode?null:l.value)("mode",l.mode),a.ekj("_mat-animation-noopable",l._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[a.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(s,l){1&s&&(a.TgZ(0,"div",0),a.O4$(),a.TgZ(1,"svg",1),a.TgZ(2,"defs"),a.TgZ(3,"pattern",2),a._UZ(4,"circle",3),a.qZA(),a.qZA(),a._UZ(5,"rect",4),a.qZA(),a.kcU(),a._UZ(6,"div",5),a._UZ(7,"div",6,7),a._UZ(9,"div",8),a.qZA()),2&s&&(a.xp6(3),a.Q6J("id",l.progressbarId),a.xp6(2),a.uIk("fill",l._rectangleFillValue),a.xp6(1),a.Q6J("ngStyle",l._bufferTransform()),a.xp6(1),a.Q6J("ngStyle",l._primaryTransform()))},directives:[g.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),m})();function A(m,d=0,s=100){return Math.max(d,Math.min(s,m))}let w=(()=>{class m{}return m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=a.oAB({type:m}),m.\u0275inj=a.cJS({imports:[[g.ez,p.BQ],p.BQ]}),m})()},57462:(B,b,i)=>{i.r(b),i.d(b,{FinanceModule:()=>j});var a=i(63423),g=i(51095),p=i(1769),_=i(76627),Z=i(33935),v=i(12178),f=i(11494),c=i(32091),T=i(34256),q=i(44466),y=i(79765),U=i(46782),t=i(37716),M=i(26215),A=i(93342),w=i(91841);let m=(()=>{class e{constructor(n){this._httpClient=n,this._data=new M.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/finance").pipe((0,A.b)(n=>{this._data.next(n)}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(w.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=i(38583);const s=["recentTransactionsTable"];function l(e,o){1&e&&(t.TgZ(0,"th",89),t._uU(1," Transaction ID "),t.qZA())}function u(e,o){if(1&e&&(t.TgZ(0,"td",90),t.TgZ(1,"span",91),t._uU(2),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",n.transactionId," ")}}function h(e,o){1&e&&(t.TgZ(0,"th",89),t._uU(1," Date "),t.qZA())}function D(e,o){if(1&e&&(t.TgZ(0,"td",90),t.TgZ(1,"span",92),t._uU(2),t.ALo(3,"date"),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,n.date,"MMM dd, y")," ")}}function k(e,o){1&e&&(t.TgZ(0,"th",89),t._uU(1," Name "),t.qZA())}function C(e,o){if(1&e&&(t.TgZ(0,"td",90),t.TgZ(1,"span",92),t._uU(2),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",n.name," ")}}function S(e,o){1&e&&(t.TgZ(0,"th",89),t._uU(1," Amount "),t.qZA())}function I(e,o){if(1&e&&(t.TgZ(0,"td",90),t.TgZ(1,"span",93),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,n.amount,"USD")," ")}}function O(e,o){1&e&&(t.TgZ(0,"th",89),t._uU(1," Status "),t.qZA())}const Q=function(e,o){return{"bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50":e,"bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50":o}};function F(e,o){if(1&e&&(t.TgZ(0,"td",90),t.TgZ(1,"span",94),t.TgZ(2,"span",95),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,Q,"pending"===n.status,"completed"===n.status)),t.xp6(2),t.Oqu(n.status)}}function E(e,o){1&e&&(t.TgZ(0,"td",96),t.TgZ(1,"button",97),t._uU(2,"See all transactions"),t.qZA(),t.qZA())}function P(e,o){1&e&&t._UZ(0,"tr",98)}function J(e,o){1&e&&t._UZ(0,"tr",99)}function R(e,o){1&e&&t._UZ(0,"tr",100)}const L=function(){return["recentOrdersTableFooter"]},Y=[{path:"",component:(()=>{class e{constructor(n){this._financeService=n,this.recentTransactionsDataSource=new c.by,this.recentTransactionsTableColumns=["transactionId","date","name","amount","status"],this._unsubscribeAll=new y.xQ}ngOnInit(){this._financeService.data$.pipe((0,U.R)(this._unsubscribeAll)).subscribe(n=>{this.data=n,this.recentTransactionsDataSource.data=n.recentTransactions,this._prepareChartData()})}ngAfterViewInit(){this.recentTransactionsDataSource.sort=this.recentTransactionsTableMatSort}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}trackByFn(n,r){return r.id||n}_prepareChartData(){this.accountBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.data.accountBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:n=>n+"%"}},xaxis:{type:"datetime"}}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["finance"]],viewQuery:function(n,r){if(1&n&&t.Gf(s,5,f.YE),2&n){let x;t.iGM(x=t.CRH())&&(r.recentTransactionsTableMatSort=x.first)}},decls:309,vars:96,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-stroked-button","",1,"hidden","sm:inline-flex","ml-3"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"grid","gap-8","sm:grid-flow-col","xl:grid-flow-row"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-green-500","dark:text-green-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-green-600","font-medium","text-sm"],[1,"ml-auto","-mt-2"],["previousStatementMenu","matMenu"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"my-2"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"mt-2","font-medium","text-3xl","leading-none"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"text-red-600","font-medium","text-sm"],["currentStatementMenu","matMenu"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-secondary","font-medium"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["accountBalanceMenu","matMenu"],[1,"flex","items-start","mt-6","mr-2"],[1,"font-semibold","text-3xl","md:text-5xl","tracking-tighter"],[1,"font-medium","text-sm","text-secondary","leading-none"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","grid-cols-1","xl:grid-cols-3","gap-8","w-full","mt-8"],[1,"xl:col-span-2","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"p-6"],[1,"overflow-x-auto","mx-6"],["mat-table","","matSort","",1,"w-full","bg-transparent",3,"dataSource","trackBy"],["recentTransactionsTable",""],["matColumnDef","transactionId"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","name"],["matColumnDef","amount"],["matColumnDef","status"],["matColumnDef","recentOrdersTableFooter"],["class","py-6 px-0 border-0","mat-footer-cell","","colspan","6",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","order-row h-16","mat-row","",4,"matRowDef","matRowDefColumns"],["class","h-16 border-0","mat-footer-row","",4,"matFooterRowDef"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"ml-auto","-mt-2","-mr-2"],["budgetMenu","matMenu"],[1,"mt-6"],[1,"my-8","space-y-8"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-red-100","text-red-800","dark:bg-red-600","dark:text-red-50"],[1,"text-current",3,"svgIcon"],[1,"flex-auto","ml-4","leading-none"],[1,"text-sm","font-medium","text-secondary"],[1,"mt-2","font-medium","text-2xl"],[1,"mt-3","rounded-full",3,"color","mode","value"],[1,"flex","items-end","justify-end","min-w-18","mt-auto","ml-6"],[1,"text-lg","leading-none"],[1,"text-green-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-indigo-100","text-indigo-800","dark:bg-indigo-600","dark:text-indigo-50"],[1,"mt-3","rounded-full",3,"mode","value"],[1,"text-red-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-teal-100","text-teal-800","dark:bg-teal-600","dark:text-teal-50"],[1,"mt-3","text-md","text-secondary"],[1,"flex","items-center","mt-auto"],["mat-stroked-button","",1,"mt-2"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"pr-6","font-medium","text-sm","text-secondary","whitespace-nowrap"],[1,"pr-6","whitespace-nowrap"],[1,"pr-6","font-medium","whitespace-nowrap"],[1,"inline-flex","items-center","font-bold","text-xs","px-2.5","py-0.5","rounded-full","tracking-wide","uppercase",3,"ngClass"],[1,"leading-relaxed","whitespace-nowrap"],["mat-footer-cell","","colspan","6",1,"py-6","px-0","border-0"],["mat-stroked-button",""],["mat-header-row",""],["mat-row","",1,"order-row","h-16"],["mat-footer-row","",1,"h-16","border-0"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"h2",3),t._uU(5,"Finance dashboard"),t.qZA(),t.TgZ(6,"div",4),t._uU(7,"Keep track of your financial status"),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"button",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Reports"),t.qZA(),t.qZA(),t.TgZ(13,"button",9),t._UZ(14,"mat-icon",7),t.TgZ(15,"span",8),t._uU(16,"Settings"),t.qZA(),t.qZA(),t.TgZ(17,"button",10),t._UZ(18,"mat-icon",7),t.TgZ(19,"span",8),t._uU(20,"Export"),t.qZA(),t.qZA(),t.TgZ(21,"div",11),t.TgZ(22,"button",12),t._UZ(23,"mat-icon",13),t.qZA(),t.TgZ(24,"mat-menu",null,14),t.TgZ(26,"button",15),t._uU(27,"Export"),t.qZA(),t.TgZ(28,"button",15),t._uU(29,"Reports"),t.qZA(),t.TgZ(30,"button",15),t._uU(31,"Settings"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",16),t.TgZ(33,"div",17),t.TgZ(34,"div",18),t.TgZ(35,"div",19),t._UZ(36,"mat-icon",20),t.qZA(),t.TgZ(37,"div",21),t.TgZ(38,"div",22),t.TgZ(39,"div",23),t._uU(40,"Previous Statement"),t.qZA(),t.TgZ(41,"div",24),t._uU(42),t.qZA(),t.qZA(),t.TgZ(43,"div",25),t.TgZ(44,"button",12),t._UZ(45,"mat-icon",7),t.qZA(),t.TgZ(46,"mat-menu",null,26),t.TgZ(48,"button",15),t.TgZ(49,"span",21),t._UZ(50,"mat-icon",27),t.TgZ(51,"span"),t._uU(52,"View statement"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"button",15),t.TgZ(54,"span",21),t._UZ(55,"mat-icon",27),t.TgZ(56,"span"),t._uU(57,"Spending breakdown"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"button",15),t.TgZ(59,"span",21),t._UZ(60,"mat-icon",27),t.TgZ(61,"span"),t._uU(62,"Tax breakdown"),t.qZA(),t.qZA(),t.qZA(),t._UZ(63,"mat-divider",28),t.TgZ(64,"button",15),t.TgZ(65,"span",21),t._UZ(66,"mat-icon",27),t.TgZ(67,"span"),t._uU(68,"Print statement"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"button",15),t.TgZ(70,"span",21),t._UZ(71,"mat-icon",27),t.TgZ(72,"span"),t._uU(73,"Email statement"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"div",29),t.TgZ(75,"div",30),t.TgZ(76,"div",31),t._uU(77,"Card Limit"),t.qZA(),t.TgZ(78,"div",32),t._uU(79),t.ALo(80,"currency"),t.qZA(),t.qZA(),t.TgZ(81,"div",30),t.TgZ(82,"div",31),t._uU(83,"Spent"),t.qZA(),t.TgZ(84,"div",32),t._uU(85),t.ALo(86,"currency"),t.qZA(),t.qZA(),t.TgZ(87,"div",30),t.TgZ(88,"div",31),t._uU(89,"Minimum"),t.qZA(),t.TgZ(90,"div",32),t._uU(91),t.ALo(92,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(93,"div",18),t.TgZ(94,"div",19),t._UZ(95,"mat-icon",33),t.qZA(),t.TgZ(96,"div",21),t.TgZ(97,"div",22),t.TgZ(98,"div",23),t._uU(99,"Current Statement"),t.qZA(),t.TgZ(100,"div",34),t._uU(101),t.qZA(),t.qZA(),t.TgZ(102,"div",25),t.TgZ(103,"button",12),t._UZ(104,"mat-icon",7),t.qZA(),t.TgZ(105,"mat-menu",null,35),t.TgZ(107,"button",15),t.TgZ(108,"span",21),t._UZ(109,"mat-icon",27),t.TgZ(110,"span"),t._uU(111,"View statement"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(112,"button",15),t.TgZ(113,"span",21),t._UZ(114,"mat-icon",27),t.TgZ(115,"span"),t._uU(116,"Spending breakdown"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(117,"button",15),t.TgZ(118,"span",21),t._UZ(119,"mat-icon",27),t.TgZ(120,"span"),t._uU(121,"Tax breakdown"),t.qZA(),t.qZA(),t.qZA(),t._UZ(122,"mat-divider",28),t.TgZ(123,"button",15),t.TgZ(124,"span",21),t._UZ(125,"mat-icon",27),t.TgZ(126,"span"),t._uU(127,"Print statement"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(128,"button",15),t.TgZ(129,"span",21),t._UZ(130,"mat-icon",27),t.TgZ(131,"span"),t._uU(132,"Email statement"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(133,"div",29),t.TgZ(134,"div",30),t.TgZ(135,"div",31),t._uU(136,"Card Limit"),t.qZA(),t.TgZ(137,"div",32),t._uU(138),t.ALo(139,"currency"),t.qZA(),t.qZA(),t.TgZ(140,"div",30),t.TgZ(141,"div",31),t._uU(142,"Spent"),t.qZA(),t.TgZ(143,"div",32),t._uU(144),t.ALo(145,"currency"),t.qZA(),t.qZA(),t.TgZ(146,"div",30),t.TgZ(147,"div",31),t._uU(148,"Minimum"),t.qZA(),t.TgZ(149,"div",32),t._uU(150),t.ALo(151,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(152,"div",36),t.TgZ(153,"div",37),t.TgZ(154,"div",38),t.TgZ(155,"div",22),t.TgZ(156,"div",39),t._uU(157,"Account Balance"),t.qZA(),t.TgZ(158,"div",40),t._uU(159,"Monthly balance growth and avg. monthly income"),t.qZA(),t.qZA(),t.TgZ(160,"div",8),t.TgZ(161,"button",41),t.TgZ(162,"span",42),t._uU(163,"12 months"),t.qZA(),t.qZA(),t.TgZ(164,"mat-menu",null,43),t.TgZ(166,"button",15),t._uU(167,"3 months"),t.qZA(),t.TgZ(168,"button",15),t._uU(169,"6 months"),t.qZA(),t.TgZ(170,"button",15),t._uU(171,"9 months"),t.qZA(),t.TgZ(172,"button",15),t._uU(173,"12 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(174,"div",44),t.TgZ(175,"div",22),t.TgZ(176,"div",45),t._uU(177),t.qZA(),t.TgZ(178,"div",46),t._uU(179,"Average Monthly Growth"),t.qZA(),t.qZA(),t.TgZ(180,"div",47),t.TgZ(181,"div",45),t._uU(182),t.ALo(183,"currency"),t.qZA(),t.TgZ(184,"div",46),t._uU(185,"Average Monthly Income"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(186,"div",48),t._UZ(187,"apx-chart",49),t.qZA(),t.qZA(),t.qZA(),t.TgZ(188,"div",50),t.TgZ(189,"div",51),t.TgZ(190,"div",52),t.TgZ(191,"div",39),t._uU(192,"Recent transactions"),t.qZA(),t.TgZ(193,"div",40),t._uU(194,"1 pending, 4 completed"),t.qZA(),t.qZA(),t.TgZ(195,"div",53),t.TgZ(196,"table",54,55),t.ynx(198,56),t.YNc(199,l,2,0,"th",57),t.YNc(200,u,3,1,"td",58),t.BQk(),t.ynx(201,59),t.YNc(202,h,2,0,"th",57),t.YNc(203,D,4,4,"td",58),t.BQk(),t.ynx(204,60),t.YNc(205,k,2,0,"th",57),t.YNc(206,C,3,1,"td",58),t.BQk(),t.ynx(207,61),t.YNc(208,S,2,0,"th",57),t.YNc(209,I,4,4,"td",58),t.BQk(),t.ynx(210,62),t.YNc(211,O,2,0,"th",57),t.YNc(212,F,4,5,"td",58),t.BQk(),t.ynx(213,63),t.YNc(214,E,3,0,"td",64),t.BQk(),t.YNc(215,P,1,0,"tr",65),t.YNc(216,J,1,0,"tr",66),t.YNc(217,R,1,0,"tr",67),t.qZA(),t.qZA(),t.qZA(),t.TgZ(218,"div",68),t.TgZ(219,"div",21),t.TgZ(220,"div",22),t.TgZ(221,"div",39),t._uU(222,"Budget"),t.qZA(),t.TgZ(223,"div",40),t._uU(224,"Monthly budget summary"),t.qZA(),t.qZA(),t.TgZ(225,"div",69),t.TgZ(226,"button",12),t._UZ(227,"mat-icon",7),t.qZA(),t.TgZ(228,"mat-menu",null,70),t.TgZ(230,"button",15),t._uU(231,"Expenses breakdown"),t.qZA(),t.TgZ(232,"button",15),t._uU(233,"Savings breakdown"),t.qZA(),t.TgZ(234,"button",15),t._uU(235,"Bills breakdown"),t.qZA(),t._UZ(236,"mat-divider",28),t.TgZ(237,"button",15),t.TgZ(238,"span",21),t._UZ(239,"mat-icon",27),t.TgZ(240,"span"),t._uU(241,"Print budget summary"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(242,"button",15),t.TgZ(243,"span",21),t._UZ(244,"mat-icon",27),t.TgZ(245,"span"),t._uU(246,"Email budget summary"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(247,"div",71),t._uU(248," Last month; you had "),t.TgZ(249,"strong"),t._uU(250,"223"),t.qZA(),t._uU(251," expense transactions, "),t.TgZ(252,"strong"),t._uU(253,"12"),t.qZA(),t._uU(254," savings entries and "),t.TgZ(255,"strong"),t._uU(256,"4"),t.qZA(),t._uU(257," bills. "),t.qZA(),t.TgZ(258,"div",72),t.TgZ(259,"div",22),t.TgZ(260,"div",21),t.TgZ(261,"div",73),t._UZ(262,"mat-icon",74),t.qZA(),t.TgZ(263,"div",75),t.TgZ(264,"div",76),t._uU(265,"Expenses"),t.qZA(),t.TgZ(266,"div",77),t._uU(267),t.ALo(268,"currency"),t.qZA(),t._UZ(269,"mat-progress-bar",78),t.qZA(),t.TgZ(270,"div",79),t.TgZ(271,"div",80),t._uU(272,"2.6%"),t.qZA(),t._UZ(273,"mat-icon",81),t.qZA(),t.qZA(),t.qZA(),t.TgZ(274,"div",22),t.TgZ(275,"div",21),t.TgZ(276,"div",82),t._UZ(277,"mat-icon",74),t.qZA(),t.TgZ(278,"div",75),t.TgZ(279,"div",76),t._uU(280,"Savings"),t.qZA(),t.TgZ(281,"div",77),t._uU(282),t.ALo(283,"currency"),t.qZA(),t._UZ(284,"mat-progress-bar",83),t.qZA(),t.TgZ(285,"div",79),t.TgZ(286,"div",80),t._uU(287,"12.7%"),t.qZA(),t._UZ(288,"mat-icon",84),t.qZA(),t.qZA(),t.qZA(),t.TgZ(289,"div",22),t.TgZ(290,"div",21),t.TgZ(291,"div",85),t._UZ(292,"mat-icon",74),t.qZA(),t.TgZ(293,"div",75),t.TgZ(294,"div",76),t._uU(295,"Bills"),t.qZA(),t.TgZ(296,"div",77),t._uU(297),t.ALo(298,"currency"),t.qZA(),t._UZ(299,"mat-progress-bar",83),t.qZA(),t.TgZ(300,"div",79),t.TgZ(301,"div",80),t._uU(302,"105.7%"),t.qZA(),t._UZ(303,"mat-icon",84),t.qZA(),t.qZA(),t.TgZ(304,"div",86),t._uU(305,"Exceeded your personal limit! Be careful next month."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(306,"div",87),t.TgZ(307,"button",88),t._uU(308," Download Summary "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const x=t.MAs(25),X=t.MAs(47),z=t.MAs(106),N=t.MAs(165),V=t.MAs(229);t.xp6(10),t.Q6J("svgIcon","heroicons_solid:document-report"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:cog"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:save"),t.xp6(4),t.Q6J("matMenuTriggerFor",x),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(13),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(6),t.hij(" Paid on ",r.data.previousStatement.date," "),t.xp6(2),t.Q6J("matMenuTriggerFor",X),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:credit-card"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:cash"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:receipt-tax"),t.xp6(6),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(8),t.Oqu(t.xi3(80,65,r.data.previousStatement.limit,"USD")),t.xp6(6),t.Oqu(t.xi3(86,68,r.data.previousStatement.spent,"USD")),t.xp6(6),t.Oqu(t.xi3(92,71,r.data.previousStatement.minimum,"USD")),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:exclamation-circle"),t.xp6(6),t.hij(" Must be paid before ",r.data.currentStatement.date," "),t.xp6(2),t.Q6J("matMenuTriggerFor",z),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:credit-card"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:cash"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:receipt-tax"),t.xp6(6),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(8),t.Oqu(t.xi3(139,74,r.data.currentStatement.limit,"USD")),t.xp6(6),t.Oqu(t.xi3(145,77,r.data.currentStatement.spent,"USD")),t.xp6(6),t.Oqu(t.xi3(151,80,r.data.currentStatement.minimum,"USD")),t.xp6(11),t.Q6J("matMenuTriggerFor",N),t.xp6(16),t.hij("",r.data.accountBalance.growRate,"%"),t.xp6(5),t.Oqu(t.xi3(183,83,r.data.accountBalance.ami,"USD")),t.xp6(5),t.Q6J("chart",r.accountBalanceOptions.chart)("colors",r.accountBalanceOptions.colors)("fill",r.accountBalanceOptions.fill)("series",r.accountBalanceOptions.series)("stroke",r.accountBalanceOptions.stroke)("tooltip",r.accountBalanceOptions.tooltip)("xaxis",r.accountBalanceOptions.xaxis),t.xp6(9),t.Q6J("dataSource",r.recentTransactionsDataSource)("trackBy",r.trackByFn),t.xp6(19),t.Q6J("matHeaderRowDef",r.recentTransactionsTableColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.recentTransactionsTableColumns),t.xp6(1),t.Q6J("matFooterRowDef",t.DdM(95,L)),t.xp6(9),t.Q6J("matMenuTriggerFor",V),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(12),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(18),t.Q6J("svgIcon","heroicons_outline:credit-card"),t.xp6(5),t.Oqu(t.xi3(268,86,r.data.budget.expenses,"USD")),t.xp6(2),t.Q6J("color","warn")("mode","determinate")("value",100*r.data.budget.expenses/r.data.budget.expensesLimit),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:cash"),t.xp6(5),t.Oqu(t.xi3(283,89,r.data.budget.savings,"USD")),t.xp6(2),t.Q6J("mode","determinate")("value",100*r.data.budget.savings/r.data.budget.savingsGoal),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:light-bulb"),t.xp6(5),t.Oqu(t.xi3(298,92,r.data.budget.bills,"USD")),t.xp6(2),t.Q6J("mode","determinate")("value",100*r.data.budget.bills/r.data.budget.billsLimit),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up")}},directives:[g.lW,_.Hw,Z.p6,Z.VK,Z.OP,p.d,T.x,c.BZ,f.YE,c.w1,c.fO,c.Dz,c.mD,c.as,c.nj,c.Ke,v.pW,c.ge,f.nU,c.ev,d.mk,c.yh,c.XQ,c.Gk,c.Q2],pipes:[d.H9,d.uU],encapsulation:2,changeDetection:0}),e})(),resolve:{data:(()=>{class e{constructor(n){this._financeService=n}resolve(n,r){return this._financeService.getData()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(Y),g.ot,p.t,_.Ps,Z.Tx,v.Cv,f.JX,c.p0,T.X,q.m]]}),e})()}}]);