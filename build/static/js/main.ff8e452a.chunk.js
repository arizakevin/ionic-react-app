(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{35:function(e,n,t){e.exports=t(56)},42:function(e,n,t){var r={"./ion-action-sheet.entry.js":[58,5],"./ion-alert.entry.js":[59,6],"./ion-app_8.entry.js":[60,7],"./ion-avatar_3.entry.js":[61,17],"./ion-back-button.entry.js":[62,18],"./ion-backdrop.entry.js":[63,44],"./ion-button_2.entry.js":[64,19],"./ion-card_5.entry.js":[65,20],"./ion-checkbox.entry.js":[66,21],"./ion-chip.entry.js":[67,22],"./ion-col_3.entry.js":[68,45],"./ion-datetime_3.entry.js":[69,10],"./ion-fab_3.entry.js":[70,23],"./ion-img.entry.js":[71,46],"./ion-infinite-scroll_2.entry.js":[72,47],"./ion-input.entry.js":[73,24],"./ion-item-option_3.entry.js":[74,25],"./ion-item_8.entry.js":[75,26],"./ion-loading.entry.js":[76,27],"./ion-menu_3.entry.js":[77,28],"./ion-modal.entry.js":[78,8],"./ion-nav_2.entry.js":[79,14],"./ion-popover.entry.js":[80,9],"./ion-progress-bar.entry.js":[81,29],"./ion-radio_2.entry.js":[82,30],"./ion-range.entry.js":[83,31],"./ion-refresher_2.entry.js":[84,11],"./ion-reorder_2.entry.js":[85,16],"./ion-ripple-effect.entry.js":[86,48],"./ion-route_4.entry.js":[87,32],"./ion-searchbar.entry.js":[88,33],"./ion-segment_2.entry.js":[89,34],"./ion-select_3.entry.js":[90,35],"./ion-slide_2.entry.js":[91,49],"./ion-spinner.entry.js":[92,13],"./ion-split-pane.entry.js":[93,50],"./ion-tab-bar_2.entry.js":[94,36],"./ion-tab_2.entry.js":[95,15],"./ion-text.entry.js":[96,37],"./ion-textarea.entry.js":[97,38],"./ion-toast.entry.js":[98,39],"./ion-toggle.entry.js":[99,12],"./ion-virtual-scroll.entry.js":[100,51]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=42,e.exports=a},44:function(e,n,t){var r={"./ion-icon.entry.js":[101,57]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=44,e.exports=a},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(19),o=t.n(l),i=t(20),c=t(3),s=t(14),u=function(e){return a.a.createElement(c.n,null,a.a.createElement(c.f,{className:"ion-text-left"},a.a.createElement(c.c,{onClick:e.onCalculate},a.a.createElement(c.j,{slot:"end",icon:s.b}),"Calculate")),a.a.createElement(c.f,{className:"ion-text-right"},a.a.createElement(c.c,{onClick:e.onReset},a.a.createElement(c.j,{slot:"start",icon:s.k}),"Reset")))},m=function(e){return a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.d,null,a.a.createElement(c.e,{className:"ion-text-center"},a.a.createElement("h2",null,"Your Body-Mass-Index"),a.a.createElement("h3",null,e.result.toFixed(2))))))},j=function(e){return a.a.createElement(c.o,{value:e.selectedValue,onIonChange:function(n){e.onSelectValue(n.detail.value)}},a.a.createElement(c.p,{value:"mkg"},a.a.createElement(c.m,null,"m/kg")),a.a.createElement(c.p,{value:"ftlbs"},a.a.createElement(c.m,null,"ft/lbs")))},y=(t(45),t(46),t(47),t(48),t(49),t(50),t(51),t(52),t(53),t(54),t(55),function(){var e=Object(r.useState)(),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(r.useState)(),s=Object(i.a)(o,2),y=s[0],f=s[1],E=Object(r.useState)("mkg"),b=Object(i.a)(E,2),p=b[0],d=b[1],v=Object(r.useRef)(null),g=Object(r.useRef)(null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{isOpen:!!y,message:y,buttons:[{text:"Okay",handler:function(){f("")}}]}),a.a.createElement(c.b,null,a.a.createElement(c.i,null,a.a.createElement(c.r,{color:"primary"},a.a.createElement(c.q,null,"BMI Calculator"))),a.a.createElement(c.g,{className:"ion-padding"},a.a.createElement(c.h,null,a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(j,{selectedValue:p,onSelectValue:function(e){d(e)}}))),a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Your Height (","mkg"===p?"meters":"feet",")"),a.a.createElement(c.k,{type:"number",ref:g})))),a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Your Weight (","mkg"===p?"kg":"lbs",")"),a.a.createElement(c.k,{type:"number",ref:v})))),a.a.createElement(u,{onCalculate:function(){var e=v.current.value,n=g.current.value;if(!n||!e||+e<=0||+n<=0)f("Please enter a valid (non-negative) input number.");else{var t=+n/("ftlbs"===p?3.28:1);l(+e/("ftlbs"===p?2.2:1)/(t*t))}},onReset:function(){v.current.value="",g.current.value=""}}),t&&a.a.createElement(m,{result:t})))))});o.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[35,3,4]]]);
//# sourceMappingURL=main.ff8e452a.chunk.js.map