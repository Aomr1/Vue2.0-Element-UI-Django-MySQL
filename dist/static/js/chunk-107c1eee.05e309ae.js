(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-107c1eee"],{"013f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-body"},[r("div",{staticClass:"login-box"},[r("div",{staticStyle:{"margin-right":"35px"},attrs:{id:"root"}},[r("h1",[e._v("用户登录")]),r("div",{staticClass:"login-input-box"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{name:"fileForm",model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{staticClass:"login-rewrite-label",attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{name:"username",clearable:"",placeholder:"请输入用户名"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{staticClass:"login-rewrite-label",attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",clearable:"",name:"password",autocomplete:"off",placeholder:"请输入密码","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",[r("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),r("el-button",{staticStyle:{"margin-left":"85px"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),r("div",{staticClass:"sign-up"},[e._v(" 还没账户？"),r("a",{staticStyle:{"margin-right":"40px"},on:{click:e.toReg}},[e._v("立即注册")]),e._v(" 忘记密码？"),r("a",{on:{click:e.toChangepwd}},[e._v("修改密码")])])])])])},a=[],o={name:"Login",data(){var e=(e,t,r)=>{if(!t)return r(new Error("用户名不能为空"));setTimeout(()=>{r()},1e3)},t=(e,t,r)=>{""===t&&r(new Error("请输入密码")),setTimeout(()=>{r()},1e3)};return{ruleForm:{username:"",password:""},rules:{username:[{validator:e,trigger:"blur"}],password:[{validator:t,trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;this.toBackstage()})},resetForm(e){this.$refs[e].resetFields()},toChangepwd(){this.timer=setInterval(()=>{this.$router.push({name:"changepwd"})},500)},toReg(){this.timer=setInterval(()=>{this.$router.push({name:"reg"})},500)},toBackstage(){this.$axios.post("http://127.0.0.1:8000/sims_app/check_login/",{username:this.ruleForm.username,password:this.ruleForm.password}).then(e=>{200==e.data.code?(this.$message({message:"登录成功！",center:!0,type:"success"}),this.timer=setInterval(()=>{this.$router.push({name:"home"}),localStorage.setItem("current_username",e.data.current_username),localStorage.setItem("current_created_time",e.data.current_created_time)},1e3)):(this.$message({message:"您输入的用户名或密码有误，请重新尝试！",center:!0,type:"error"}),this.ruleForm={username:"",password:""})})}},beforeDestroy(){clearInterval(this.timer)},destroyed(){clearInterval(this.timer)}},l=o,i=(r("da41"),r("2877")),n=Object(i["a"])(l,s,a,!1,null,null,null);t["default"]=n.exports},"266e":function(e,t,r){},da41:function(e,t,r){"use strict";r("266e")}}]);
//# sourceMappingURL=chunk-107c1eee.05e309ae.js.map