function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/e(require("mitt")),t=[{name:"Stage",component:Promise.resolve().then(function(){return require("./stage-afb112dd.js")})},{name:"Layer",component:Promise.resolve().then(function(){return require("./layer-1b284e14.js")})}],o=n.default(),r=function(e){this.event=void 0,this.event=o};module.exports={install:function(e,n){var o,i,u,a=new r(n);i=e,void 0===(u=null!=(o=null==n?void 0:n.prefix)?o:"v")&&(u="v"),t.forEach(function(e){i.component(""+u+e.name,e.component)}),e.config.globalProperties.$canvue=a,e.provide("canvue",a)}};
//# sourceMappingURL=canvue.js.map
