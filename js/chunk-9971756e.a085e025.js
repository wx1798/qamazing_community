(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9971756e","chunk-2d208fb9"],{3547:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-login"},[a("div",{staticClass:"page-login--layer page-login--layer-area"},[a("ul",{staticClass:"circles"},e._l(10,(function(e){return a("li",{key:e})})),0)]),a("div",{staticClass:"page-login--layer page-login--layer-time",attrs:{flex:"main:center cross:center"}},[e._v(" "+e._s(e.time)+" ")]),a("div",{staticClass:"page-login--layer"},[a("div",{staticClass:"page-login--content",attrs:{flex:"dir:top main:justify cross:stretch box:justify"}},[e._m(0),a("div",{staticClass:"page-login--content-main",attrs:{flex:"dir:top main:center cross:center"}},[a("img",{staticClass:"page-login--logo",attrs:{src:s("a6b0")}}),a("div",{staticClass:"page-login--form"},[a("el-card",{attrs:{shadow:"never"}},[a("el-form",{ref:"loginForm",attrs:{"label-position":"top",model:e.formLogin,size:"default"}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.formLogin.username,callback:function(t){e.$set(e.formLogin,"username",t)},expression:"formLogin.username"}},[a("i",{staticClass:"fa fa-user-circle-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}},[a("i",{staticClass:"fa fa-keyboard-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"text",placeholder:"地址"},model:{value:e.formLogin.address,callback:function(t){e.$set(e.formLogin,"address",t)},expression:"formLogin.address"}},[a("i",{staticClass:"fa fa-map-marker fa-lg",attrs:{slot:"prepend"},slot:"prepend"})])],1),a("el-button",{staticClass:"button-login",attrs:{size:"default",type:"primary"},on:{click:e.submit}},[e._v(" 登录 ")])],1)],1),a("p",{staticClass:"page-login--options",attrs:{flex:"main:justify cross:center"}},[a("span",[a("d2-icon",{attrs:{name:""}})],1),a("span")])],1)]),a("div",{staticClass:"page-login--content-footer"})])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-login--content-header"},[s("p",{staticClass:"page-login--content-header-motto"})])}],r=(s("0bd5"),s("9b42"),s("6e85")),i=s.n(r),n=s("c276"),l={data:function(){return{timeInterval:null,time:i()().format("HH:mm:ss"),formLogin:{username:"admin",password:"admin",address:"http://127.0.0.1:8010"}}},mounted:function(){var e=this;this.timeInterval=setInterval((function(){e.refreshTime()}),1e3)},beforeDestroy:function(){clearInterval(this.timeInterval)},methods:{refreshTime:function(){this.time=i()().format("HH:mm:ss")},submit:function(){var e=this;this.$api.login(this.formLogin.address,{username:this.formLogin.username,password:this.formLogin.password,model:"password"}).then((function(t){var s=t.result,a=JSON.parse(localStorage.getItem("URL"))||{};a.backtestURL=e.formLogin.address,localStorage.setItem("URL",JSON.stringify(a)),n["a"].cookies.set("uuid",s.user_cookie),n["a"].cookies.set("token",s.user_cookie),n["a"].cookies.set("userInfo",e.formLogin),e.$store.dispatch("d2admin/page/closeAll"),e.$store.dispatch("d2admin/user/set",{name:s.username},{root:!0}),e.$store.dispatch("d2admin/account/load"),e.$router.replace(e.$route.query.redirect||"/")}))}}},c=l,p=(s("60d0"),s("5d22")),d=Object(p["a"])(c,a,o,!1,null,null,null);t["default"]=d.exports},"60d0":function(e,t,s){"use strict";s("852d")},"852d":function(e,t,s){},a6b0:function(e,t,s){e.exports=s.p+"img/logo@2x.286f12ac.png"}}]);