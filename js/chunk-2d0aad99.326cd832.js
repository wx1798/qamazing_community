(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad99"],{1389:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.ajax}},[a("d2-icon",{attrs:{name:"paper-plane"}}),t._v(" 发送请求 ")],1)],1),a("el-table",t._b({staticStyle:{width:"100%"}},"el-table",t.table,!1),t._l(t.table.columns,(function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})})),1)],1)},l=[],r=(a("d81d"),a("b64b"),a("9bd2d"));function o(){return Object(r["a"])({url:"/demo/plugins/mock/ajax",method:"get"})}var i={name:"demo-plugins-mock-ajax",data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{ajax:function(){var t=this;o().then((function(e){t.table.columns=Object.keys(e.list[0]).map((function(t){return{label:t,prop:t}})),t.table.data=e.list})).catch((function(){}))}}},c=i,u=a("2877"),s=Object(u["a"])(c,n,l,!1,null,null,null);e["default"]=s.exports}}]);