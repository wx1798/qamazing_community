(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2213d9"],{ca05:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("d2-container",[s("el-tabs",[s("el-tab-pane",{attrs:{label:"顶栏菜单"}},[s("el-button-group",{staticClass:"d2-mb"},[s("el-button",{on:{click:e.handleHeaderSet}},[e._v("设置顶栏空菜单")]),s("el-button",{on:{click:e.headerReset}},[e._v("恢复顶栏菜单")])],1),s("d2-highlight",{attrs:{code:JSON.stringify(e.header,null,2)}})],1),s("el-tab-pane",{attrs:{label:"侧栏菜单"}},[s("el-button-group",{staticClass:"d2-mb"},[s("el-button",{on:{click:e.handleAsideSet}},[e._v("设置侧栏空菜单")]),s("el-button",{on:{click:e.asideReset}},[e._v("恢复侧栏菜单")])],1),s("d2-highlight",{attrs:{code:JSON.stringify(e.aside,null,2)}})],1)],1)],1)},a=[],n=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),r=s("60bb"),d=s("5880");function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var o={data:function(){return{menuEmpty:[{title:"空菜单演示",icon:"folder-o",children:[{title:"空菜单 1",children:[{title:"空菜单 1-1"},{title:"空菜单 1-2"}]},{title:"空菜单 2"},{title:"空菜单 3"}]}],headerChanged:!1,asideChanged:!1,headerBak:[],asideBak:[]}},computed:c({},Object(d["mapState"])("d2admin/menu",["header","aside"])),created:function(){this.headerBak=Object(r["cloneDeep"])(this.header),this.asideBak=Object(r["cloneDeep"])(this.aside)},beforeDestroy:function(){return this.headerChanged&&this.asideChanged?(this.headerSet(this.headerBak),this.asideSet(this.asideBak),void this.$notify({title:"菜单恢复",message:"对侧边栏和顶栏菜单的修改已经复原",type:"success"})):this.headerChanged?(this.headerSet(this.headerBak),void this.$notify({title:"菜单恢复",message:"对顶栏菜单的修改已经复原",type:"success"})):void(this.asideChanged&&(this.asideSet(this.asideBak),this.$notify({title:"菜单恢复",message:"对侧边栏菜单的修改已经复原",type:"success"})))},methods:c({},Object(d["mapMutations"])("d2admin/menu",["headerSet","asideSet"]),{handleHeaderSet:function(){this.headerChanged=!0,this.headerSet(this.menuEmpty),this.$notify({title:"菜单修改",message:"对顶栏菜单的修改已经生效",type:"success"})},handleAsideSet:function(){this.asideChanged=!0,this.asideSet(this.menuEmpty),this.$notify({title:"菜单修改",message:"对侧边栏菜单的修改已经生效",type:"success"})},headerReset:function(){this.headerSet(this.headerBak),this.$notify({title:"菜单恢复",message:"对顶栏菜单的修改已经复原",type:"success"})},asideReset:function(){this.asideSet(this.asideBak),this.$notify({title:"菜单恢复",message:"对侧边栏菜单的修改已经复原",type:"success"})}})},l=o,u=s("2877"),b=Object(u["a"])(l,i,a,!1,null,null,null);t["default"]=b.exports}}]);