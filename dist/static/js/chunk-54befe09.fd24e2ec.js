(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54befe09"],{"006d":function(e,r,s){},"05c8":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"reg-body"},[s("div",{staticClass:"reg-box"},[s("div",{staticStyle:{"margin-right":"35px"},attrs:{id:"root"}},[s("h1",[e._v("开始注册")]),s("div",{staticClass:"reg-input-box"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{name:"fileForm",model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[s("el-form-item",{staticClass:"reg-rewrite-label",attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{name:"username",placeholder:"请输入用户名"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),s("el-form-item",{staticClass:"reg-rewrite-label",attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password",name:"password",autocomplete:"off",placeholder:"请输入密码","show-password":""},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),s("el-form-item",{staticClass:"reg-rewrite-label",attrs:{label:"确认密码",prop:"check_password"}},[s("el-input",{attrs:{type:"password",name:"check_password",autocomplete:"off",placeholder:"请再次输入密码","show-password":""},model:{value:e.ruleForm.check_password,callback:function(r){e.$set(e.ruleForm,"check_password",r)},expression:"ruleForm.check_password"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm"),e.toBackstage()}}},[e._v("提交")]),s("el-button",{staticStyle:{"margin-left":"30px"},on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")]),s("el-button",{staticStyle:{"margin-left":"30px"},on:{click:e.toReturn}},[e._v("返回")])],1)],1)],1)])])])},a=[],o={name:"Reg",data(){var e=(e,r,s)=>{if(!r)return s(new Error("用户名不能为空"));setTimeout(()=>{s()},1e3)},r=(e,r,s)=>{""===r?s(new Error("请输入密码")):(""!==this.ruleForm.check_password&&this.$refs.ruleForm.validateField("check_password"),s())},s=(e,r,s)=>{""===r?s(new Error("请再次输入密码")):s()};return{ruleForm:{username:"",password:"",check_password:""},rules:{username:[{validator:e,trigger:"blur"}],password:[{validator:r,trigger:"blur"}],check_password:[{validator:s,trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate(e=>!!e)},resetForm(e){this.$refs[e].resetFields()},toBackstage(){this.$axios.post("http://127.0.0.1:8000/sims_app/insert_user/",{username:this.ruleForm.username,password:this.ruleForm.password,check_password:this.ruleForm.check_password}).then(e=>{200==e.data.code?(this.$message({message:"注册成功！",center:!0,type:"success"}),this.timer=setInterval(()=>{this.$router.push({name:"login"})},1e3)):405==e.data.code?(this.$message({message:"用户名已存在，注册失败，请重新尝试！",center:!0,type:"error"}),this.ruleForm={username:"",password:"",check_password:""}):406==e.data.code?(this.$message({message:"两次输入的密码不一致，注册失败，请重新尝试！",center:!0,type:"error"}),this.ruleForm={password:"",check_password:""}):this.$message({message:"存在字段未输入，请重新尝试！",center:!0,type:"error"})})},toReturn(){this.$router.push({name:"login"})}},beforeDestroy(){clearInterval(this.timer)},destroyed(){clearInterval(this.timer)}},l=o,i=(s("361b"),s("2877")),c=Object(i["a"])(l,t,a,!1,null,null,null);r["default"]=c.exports},"361b":function(e,r,s){"use strict";s("006d")}}]);
//# sourceMappingURL=chunk-54befe09.fd24e2ec.js.map