(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67feed89"],{"028b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{class:["admin-layout","beauty-scroll"]},[a("a-layout",{staticClass:"admin-layout-main beauty-scroll"},[a("project-header",{class:[{"fixed-tabs":t.fixedTabs,"fixed-header":t.fixedHeader,"multi-page":t.multiPage}],style:t.headerStyle,attrs:{menuData:t.headMenuData}}),a("a-layout-content",{staticClass:"admin-layout-content",staticStyle:{"min-height":"100vh",margin:"10px 0px 20px 15px"}},[a("div",{staticStyle:{position:"relative"}},[t._t("default")],2)]),a("a-layout-footer",{staticStyle:{padding:"0px"}},[a("page-footer",{attrs:{"link-list":t.footerLinks,copyright:t.copyright,version:t.systemVersion}})],1)],1)],1)},n=[],s=a("b85c"),o=a("5530"),l=(a("99af"),a("fb6a"),a("c740"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout-header",{class:[t.headerTheme,"admin-header"]},[i("div",{class:["admin-header-wide",t.layout,t.pageWidth]},[i("router-link",{class:["logo",t.isMobile?null:"pc",t.headerTheme],attrs:{to:"/"}},[i("img",{attrs:{width:"32",src:a("9d64")}}),i("h1",[t._v(t._s(t.systemName))])]),t.isMobile?i("a-divider",{attrs:{type:"vertical"}}):t._e(),"side"===t.layout||t.isMobile?t._e():i("div",{staticClass:"admin-header-menu",style:"width: "+t.menuWidth+";"},[i("i-menu",{staticClass:"head-menu",attrs:{theme:t.headerTheme,mode:"horizontal",options:t.menuData},on:{select:t.onSelect}})],1),i("div",{class:["admin-header-right",t.headerTheme]},[i("header-avatar",{staticClass:"header-item"}),i("a-dropdown",{staticClass:"lang header-item"},[i("div",[i("a-icon",{attrs:{type:"global"}}),t._v(" "+t._s(t.langAlias)+" ")],1),i("a-menu",{attrs:{slot:"overlay","selected-keys":[t.lang]},on:{click:function(e){return t.setLang(e.key)}},slot:"overlay"},t._l(t.langList,(function(e){return i("a-menu-item",{key:e.key},[t._v(" "+t._s(e.name))])})),1)],1)],1)],1)])}),r=[],c=(a("7db0"),a("d3b7"),a("2b49")),d=a("301a"),u=a("2f62"),h=a("cf45"),m={name:"ProjectHeader",components:{IMenu:d["a"],HeaderAvatar:c["a"]},props:["collapsed","menuData"],i18n:a("89fe"),data:function(){return{searchActive:!1}},created:function(){var t=this,e=this.$createElement,a=this;this.$EventBus.$off("RealAlarm"),this.$EventBus.$on("RealAlarm",(function(i){var n=i,s="",o="",l="",r="#0099FF",c="",d=a.formatDateTime(n.HappenTime);"1"==n.Value?(s=a.$t("monitor.Notification.MessageAlarmTitle"),o=t.$t(n.AlarmMessage),c=a.$t("alarm.Speech.tips")):(s=a.$t("monitor.Notification.MessageClearAlarmTitle"),o=t.$t(n.AlarmClearMessage)),"videoConnectStatusAlarm"==n.DataUuid&&(n.AlarmLevel=3,n.DataName=a.$t("monitor.Notification.public.videoDataName"),o="1"==n.Value?a.$t("monitor.Notification.public.videoOffline"):a.$t("monitor.Notification.public.videoOnline")),0==n.AlarmLevel?(r="#0099FF",l=a.$t("dataModel.alarm.Tips")):1==n.AlarmLevel?(r="#0066FF",l=a.$t("dataModel.alarm.Minor")):2==n.AlarmLevel?(r="yellow",l=a.$t("dataModel.alarm.Importance")):3==n.AlarmLevel?(r="orange",l=a.$t("dataModel.alarm.Urgency")):4==n.AlarmLevel&&(r="red",l=a.$t("dataModel.alarm.Deadly")),c+=a.$t("monitor.Notification.DeviceTitle"),c+=a.$t(n.DeviceName),c+=a.$t("monitor.Notification.DataTitle"),c+=a.$t(n.DataName),c+=a.$t("dataModel.AlarmLevel"),c+=l,c+=a.$t("monitor.Notification.HappenTime"),c+=d,c+=a.$t("monitor.Notification.Message"),c+=o,a.$notification.warning({message:e("a-tag",{style:{backgroundColor:r}},[s]),description:e("div",[e("span",{style:"font-size: 14px;font-weight: bold;"},[a.$t("monitor.Notification.DeviceTitle"),":"]),e("span",[a.$t(n.DeviceName)]),e("br"),e("span",{style:"font-size: 14px;font-weight: bold;"},[a.$t("monitor.Notification.DataTitle"),":"]),e("span",[a.$t(n.DataName)]),e("br"),e("span",{style:"font-size: 14px;font-weight: bold;"},[a.$t("dataModel.AlarmLevel"),":"]),e("span",[e("a-tag",{style:{backgroundColor:r}},[l])]),e("br"),e("span",{style:"font-size: 14px;font-weight: bold;"},[a.$t("monitor.Notification.HappenTime"),":"]),e("span",[d]),e("br"),e("span",{style:"font-size: 14px;font-weight: bold;"},[a.$t("monitor.Notification.Message"),":"]),e("span",[o]),e("br")]),placement:"bottomRight",duration:30,icon:e("a-icon",{attrs:{type:"alert",theme:"filled"},style:{position:"absolute","margin-left":"4px","font-size":"24px","line-height":"24px",color:"red"}}),style:{padding:"10px 5px"}}),a.alarmSoundSpeech().start({container:"#sppekContent",Lang:a.$i18n.locale,rate:1},c)}))},computed:Object(o["a"])(Object(o["a"])({},Object(u["e"])("setting",["langList","theme","isMobile","layout","systemName","lang","pageWidth"])),{},{headerTheme:function(){return"side"!=this.layout||"dark"!=this.theme.mode||this.isMobile?this.theme.mode:"light"},langAlias:function(){var t=this,e=this.langList.find((function(e){return e.key==t.lang}));return e.alias},menuWidth:function(){var t=this.layout,e=this.searchActive,a="head"===t?"100% - 188px":"100%",i=e?"600px":"400px";return"calc(".concat(a," - ").concat(i,")")}}),methods:Object(o["a"])({formatDateTime:function(t){var e=new Date(t);return Object(h["a"])(e,"yyyy-MM-dd hh:mm:ss")},toggleCollapse:function(){this.$emit("toggleCollapse")},onSelect:function(t){this.$emit("menuSelect",t)}},Object(u["d"])("setting",["setLang"]))},f=m,p=(a("a2eb"),a("2877")),g=Object(p["a"])(f,l,r,!1,null,"66a0c5d4",null),v=g.exports,y=a("613e"),b=(a("a41c"),a("e5f9"),a("060e"),{name:"ProjectLayout",components:{PageFooter:y["a"],ProjectHeader:v},data:function(){return{minHeight:window.innerHeight-64-122,collapsed:!1,showSetting:!1,drawerOpen:!1}},provide:function(){return{adminLayout:this}},watch:{$route:function(t){this.setActivated(t)},layout:function(){this.setActivated(this.$route)},isMobile:function(t){t||(this.drawerOpen=!1)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(u["e"])("setting",["isMobile","theme","layout","footerLinks","copyright","fixedHeader","fixedSideBar","fixedTabs","hideSetting","multiPage","systemVersion"])),Object(u["c"])("setting",["firstMenu","subMenu","menuData"])),{},{sideMenuWidth:function(){return this.collapsed?"80px":"256px"},headerStyle:function(){var t=this.fixedHeader&&"head"!==this.layout&&!this.isMobile?"calc(100% - ".concat(this.sideMenuWidth,")"):"100%",e=this.fixedHeader?"fixed":"static";return"width: ".concat(t,"; position: ").concat(e,";")},headMenuData:function(){var t=this.layout,e=this.menuData,a=this.firstMenu;return"mix"===t?a:e},sideMenuData:function(){var t=this.layout,e=this.menuData,a=this.subMenu;return"mix"===t?a:e}}),methods:Object(o["a"])(Object(o["a"])({},Object(u["d"])("setting",["correctPageMinHeight","setActivatedFirst"])),{},{toggleCollapse:function(){this.collapsed=!this.collapsed},onMenuSelect:function(){this.toggleCollapse()},setActivated:function(t){var e=this;if("mix"===this.layout){var a=t.matched;a=a.slice(0,a.length-1);var i,n=this.firstMenu,o=Object(s["a"])(n);try{var l=function(){var t=i.value;if(-1!==a.findIndex((function(e){return e.path===t.fullPath})))return e.setActivatedFirst(t.fullPath),"break"};for(o.s();!(i=o.n()).done;){var r=l();if("break"===r)break}}catch(c){o.e(c)}finally{o.f()}}}}),created:function(){this.correctPageMinHeight(this.minHeight-24),this.setActivated(this.$route)},beforeDestroy:function(){this.correctPageMinHeight(24-this.minHeight)}}),$=b,x=(a("6959"),Object(p["a"])($,i,n,!1,null,"17a11d2e",null));e["a"]=x.exports},"0579":function(t,e,a){"use strict";a("6e36")},6959:function(t,e,a){"use strict";a("d1f9")},"6e36":function(t,e,a){},"95c5":function(t,e,a){"use strict";a("aefa")},a164:function(t,e,a){},a2eb:function(t,e,a){"use strict";a("a164")},aefa:function(t,e,a){},b388:function(t,e,a){},c2f7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-hover-mask"},[t._t("default"),a("span",{staticClass:"vue-hover-mask_action",on:{click:t.handleClick}},[t._t("action")],2)],2)},n=[],s={name:"VueHoverMask",methods:{handleClick:function(){this.$emit("click")}}},o=s,l=(a("0579"),a("2877")),r=Object(l["a"])(o,i,n,!1,null,null,null);e["a"]=r.exports},d1f9:function(t,e,a){},daf8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-wrapper"},[a("a-textarea",t._b({staticClass:"m-textarea",on:{change:t.onChange},model:{value:t.$attrs.value,callback:function(e){t.$set(t.$attrs,"value",e)},expression:"$attrs.value"}},"a-textarea",t.$attrs,!1)),t.showWordLimit?a("span",{staticClass:"m-count"},[t._v(t._s(t.textLength)+"/"),t.$attrs.maxLength?[t._v(t._s(t.$attrs.maxLength))]:t._e()],2):t._e()],1)},n=[],s={props:{showWordLimit:{type:Boolean,default:!1}},model:{prop:"value",event:"change"},computed:{textLength:function(){return(this.$attrs.value||"").length}},methods:{onChange:function(t){this.$emit("change",t.target.value)}}},o=s,l=(a("95c5"),a("2877")),r=Object(l["a"])(o,i,n,!1,null,"b9c09c60",null);e["a"]=r.exports},ef6a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("project-layout",[a("div",{staticClass:"card-list"},[a("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.modelList,pagination:t.pagination},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{on:{click:function(a){return t.GoToRun(e.uuid)}}},[a("a-card",{staticStyle:{width:"300px","border-radius":"2px 2px 0 0"},attrs:{id:"displayCard",hoverable:""},scopedSlots:t._u([{key:"cover",fn:function(){return[a("img",{staticStyle:{width:"298px",height:"220px",cursor:"pointer"},attrs:{src:""==e.DisplayImage?"/static/images/pcDefaultCover.jpg":e.DisplayImage}})]},proxy:!0}],null,!0)},[a("a-card-meta",{attrs:{title:e.name,description:e.description}})],1)],1)}}])})],1)])},n=[],s=(a("b0c0"),a("a4d3"),a("e01a"),a("456a")),o=a("028b"),l=(a("c2f7"),a("7424")),r=(a("daf8"),a("b775")),c={name:"UserDisplayModelList",i18n:a("89fe"),data:function(){return{editIndex:0,isEditStatus:0,loading:!1,uploadDisPlayUrl:l["DISPLAYIMAGEUPLOAD"],visible:!1,listIndex:-1,pagination:{hideOnSinglePage:!0,showQuickJumper:!0,pageSize:4},modelList:[]}},components:{ProjectLayout:o["a"]},mounted:function(){},activated:function(){},created:function(){this.getModelList()},watch:{$route:function(){this.modelList=[],this.getModelList()}},methods:{GoToRun:function(t){this.$router.push("/AppRun/"+t)},getModelList:function(){this.modelList=[];var t=this,e={uuid:this.$route.params.uuid};this.loading=!0,Object(s["e"])(e).then((function(e){if(null!=e.data.list)if(e.data.list.length>1)for(var a=0;a<e.data.list.length;a++){var i={};i.name=e.data.list[a].name,i.description=e.data.list[a].description,i.uuid=e.data.list[a].displayUid,""==e.data.list[a].DisplayImage?i.DisplayImage="":i.DisplayImage=e.data.list[a].DisplayImage,t.modelList.push(i),i={}}else 1==e.data.list.length&&(Object(r["h"])({token:e.data.list[0].project_uuid},r["a"].AUTH1),t.$router.push("/AppRun/"+e.data.list[0].displayUid));t.loading=!1}))}}},d=c,u=(a("fc7d"),a("2877")),h=Object(u["a"])(d,i,n,!1,null,"3bd1151b",null);e["default"]=h.exports},fc7d:function(t,e,a){"use strict";a("b388")}}]);