(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"33a98db1"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("Template")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"50%"}},[a("v-navigation-drawer",{attrs:{absolute:"",permanent:"",right:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Option")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.options,(function(e){return a("v-list-item",{key:e.label},[a("v-list-item-content",[a("td",{staticClass:"d-flex align-center"},[a("v-simple-checkbox",{attrs:{color:"#4FC3F7"},on:{click:t.test},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}}),t._v(" "+t._s(e.label)+" ")],1)])],1)})),1)],1),a("v-textarea",{attrs:{solo:"",name:"input-7-4",label:"옵션을 클릭 시 코드가 제공됩니다.","auto-grow":"",rows:"14","row-height":"14",value:t.text}})],1)},i=[],l={name:"Template",data:function(){return{options:[{label:"테스트 케이스",color:"info",value:!1},{label:"N개 입력",color:"info",value:!1},{label:"스페이스가 포함된 숫자",color:"info",value:!1}],text:""}},methods:{test:function(){var t=this;this.$store.dispatch("REQUEST_TEMPATE",{testCase:this.options[0].value,multiCaseQuantity:this.options[1].value,spaceIncludeNumber:this.options[2].value}).then((function(){t.text=t.$store.state.template.text}))}}},c=l,u=a("2877"),f=a("6544"),p=a.n(f),m=a("b0af"),v=a("ce7e"),h=a("8860"),d=a("da13"),b=a("5d23"),g=a("f774"),y=a("9e88"),x=a("a844"),w=Object(u["a"])(c,s,i,!1,null,null,null),_=w.exports;p()(w,{VCard:m["a"],VDivider:v["a"],VList:h["a"],VListItem:d["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VNavigationDrawer:g["a"],VSimpleCheckbox:y["a"],VTextarea:x["a"]});var j={name:"App",components:{Template:_},data:function(){return{}}},C=j,k=a("7496"),V=a("40dc"),T=a("8336"),E=a("132d"),O=a("adda"),A=a("f6c4"),S=a("2fa4"),L=Object(u["a"])(C,r,o,!1,null,null,null),P=L.exports;p()(L,{VApp:k["a"],VAppBar:V["a"],VBtn:T["a"],VIcon:E["a"],VImg:O["a"],VMain:A["a"],VSpacer:S["a"]});a("d3b7");var M=a("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},$=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},R=[],W={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},H=W,q=a("62ad"),D=a("a523"),F=a("0fd9"),Q=Object(u["a"])(H,N,R,!1,null,null,null),B=Q.exports;p()(Q,{VCol:q["a"],VContainer:D["a"],VImg:O["a"],VRow:F["a"]});var J={name:"Home",components:{HelloWorld:B}},U=J,Y=Object(u["a"])(U,I,$,!1,null,null,null),z=Y.exports;n["a"].use(M["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new M["a"]({mode:"history",base:"/",routes:G}),X=K,Z=a("2f62"),tt=(a("96cf"),a("1da1")),et=a("bc3a"),at=a.n(et),nt=at.a.create({headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset = utf-8"},timeout:1e3});function rt(t){return nt.post("".concat("https://backjoonframeautomaticgenerat.herokuapp.com","/frame"),t)}var ot={text:""},st={SET_TEMPLATE:function(t,e){t.text=e}},it={REQUEST_TEMPATE:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,rt(e);case 3:return n=a.sent,t.commit("SET_TEMPLATE",n.data),a.abrupt("return",n.data);case 8:a.prev=8,a.t0=a["catch"](0),alert(a.t0,a.t0.response);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}},lt={state:ot,mutations:st,actions:it};n["a"].use(Z["a"]);var ct=new Z["a"].Store({modules:{template:lt}}),ut=a("f309");n["a"].use(ut["a"]);var ft=new ut["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:X,store:ct,vuetify:ft,render:function(t){return t(P)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f2cb1cec.js.map