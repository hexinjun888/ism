(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bb9ba1"],{"116b":function(e,t,a){"use strict";a("cb97")},bba4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:e.$t("reporting.AlarmHistory.DateType"),labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-radio-group",{model:{value:e.SelectDateType,callback:function(t){e.SelectDateType=t},expression:"SelectDateType"}},[a("a-radio-button",{attrs:{value:"Day"}},[e._v(" "+e._s(e.$t("reporting.AlarmHistory.DateDayType"))+" ")]),a("a-radio-button",{attrs:{value:"Weekly"}},[e._v(" "+e._s(e.$t("reporting.AlarmHistory.DateWeeklyType"))+" ")]),a("a-radio-button",{attrs:{value:"Month"}},[e._v(" "+e._s(e.$t("reporting.AlarmHistory.DateMonthType"))+" ")]),a("a-radio-button",{attrs:{value:"Diy"}},[e._v(" "+e._s(e.$t("reporting.AlarmHistory.DateDiyType"))+" ")])],1)],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:e.$t("reporting.AlarmHistory.SelectDate"),labelCol:{span:5},wrapperCol:{span:18,offset:1}}},["Day"==e.SelectDateType?a("a-date-picker",{staticStyle:{width:"100%"},attrs:{size:"default",placeholder:e.$t("reporting.AlarmHistory.DateDayType")},on:{change:e.onDateChange}}):e._e(),"Month"==e.SelectDateType?a("a-month-picker",{staticStyle:{width:"100%"},attrs:{size:"default",placeholder:e.$t("reporting.AlarmHistory.DateMonthType")},on:{change:e.onDateChange}}):e._e(),"Weekly"==e.SelectDateType?a("a-week-picker",{staticStyle:{width:"100%"},attrs:{size:"default",placeholder:e.$t("reporting.AlarmHistory.DateWeeklyType")},on:{change:e.onWeeklyDateChange}}):e._e(),"Diy"==e.SelectDateType?a("a-range-picker",{attrs:{showTime:!0,size:"default"},on:{change:e.onDateChange}}):e._e()],1)],1),"Diy"==e.SelectDateType?a("a-col",{attrs:{md:4,sm:24}},[a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{disabled:e.messageShowLoad,type:"primary"},on:{click:e.QueryJournal}},[e._v(e._s(e.$t("reporting.AlarmHistory.Query")))])],1)]):a("a-col",{attrs:{md:2,sm:24}},[a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{disabled:e.messageShowLoad,type:"primary"},on:{click:e.QueryJournal}},[e._v(e._s(e.$t("reporting.AlarmHistory.Query")))])],1)]),a("a-col",{attrs:{md:2,sm:24}},[a("span",{staticStyle:{float:"left","margin-top":"3px"}},[a("download-excel",{staticClass:"export-excel-wrapper",attrs:{data:e.dataSource,fields:e.json_fields,name:e.exportName,"before-generate":e.startDownload,"before-finish":e.finishDownload}},[a("a-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:e.isLoadExecl,type:"default"}},[e._v(e._s(e.$t("reporting.AlarmHistory.Export")))])],1)],1)])],1)],1)])],1),a("a-spin",{staticStyle:{padding:"1px"},attrs:{spinning:e.messageShowLoad,tip:"Loading..."}},[a("a-table",{attrs:{pagination:e.pagination,columns:e.columns,"data-source":e.dataSource,rowKey:"Time"},scopedSlots:e._u([{key:"Content",fn:function(t){return a("span",{},[e._v(" "+e._s(e._f("ContentSplit")(t,e.that))+" ")])}},{key:"Time",fn:function(t){return a("span",{},[e._v(" "+e._s(e._f("formatDate")(t))+" ")])}},{key:"JournalLevel",fn:function(t){return a("span",{},[1001==t?a("span",{staticStyle:{color:"#44aaff"}},[e._v(" "+e._s(e.$t("journal.JournalLevelInfo"))+" ")]):1003==t?a("span",{staticStyle:{color:"#ed1329"}},[e._v(" "+e._s(e.$t("journal.JournalLevelError"))+" ")]):1002==t?a("span",{staticStyle:{color:"yellow"}},[e._v(" "+e._s(e.$t("journal.JournalLevelWarning"))+" ")]):e._e()])}}])},[e._l(e.columns,(function(t,n){return a("template",{slot:t.slotName},[a("span",{key:n},[e._v(e._s(e.$t(t.slotName)))])])}))],2)],1)],1)},o=[],r=(a("ac1f"),a("1276"),a("1da1")),i=(a("96cf"),a("7424")),s=a("b775");function l(e){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s["g"])(i["JOURNALGET"],s["b"].POST,t));case 1:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}var d=a("c1df"),u=a.n(d),p=a("cf45"),f=a("f2d9"),h={name:"AlarmHistory",i18n:a("89fe"),components:{DownloadExcel:f["a"]},data:function(){var e=this;return{pagination:{pageSize:15,showSizeChanger:!0},loadExecl:null,isLoadExecl:!1,exportName:"",json_fields_cn:{"名称":{field:"AlarmName",callback:function(t){return e.$t(t)}},"设备":"DeviceName","告警时间":{field:"HappenTime",callback:function(e){var t=new Date(e);return Object(p["a"])(t,"yyyy-MM-dd hh:mm:ss")}},"清除时间":{field:"ClearTime",callback:function(e){var t=new Date(e);return Object(p["a"])(t,"yyyy-MM-dd hh:mm:ss")}},"告警等级":{field:"AlarmLevel",callback:function(t){switch(t){case 0:return e.$t("dataModel.alarm.Tips");case 1:return e.$t("dataModel.alarm.Minor");case 2:return e.$t("dataModel.alarm.Importance");case 3:return e.$t("dataModel.alarm.Urgency");case 4:return e.$t("dataModel.alarm.Deadly")}}},"保持时间":"KeepTime"},json_fields_en:{AlarmName:{field:"AlarmName",callback:function(t){return e.$t(t)}},DeviceName:"DeviceName",HappenTime:{field:"HappenTime",callback:function(e){var t=new Date(e);return Object(p["a"])(t,"yyyy-MM-dd hh:mm:ss")}},ClearTime:{field:"ClearTime",callback:function(e){var t=new Date(e);return Object(p["a"])(t,"yyyy-MM-dd hh:mm:ss")}},AlarmLevel:{field:"AlarmLevel",callback:function(t){switch(t){case 0:return e.$t("dataModel.alarm.Tips");case 1:return e.$t("dataModel.alarm.Minor");case 2:return e.$t("dataModel.alarm.Importance");case 3:return e.$t("dataModel.alarm.Urgency");case 4:return e.$t("dataModel.alarm.Deadly")}}},KeepTime:"KeepTime"},json_fields:{},json_meta:[[{" key ":" charset "," value ":" utf- 8 "}]],SelectDateType:"Month",SelectDevice:[],SelectDateRange:"",SelectAlarmData:[],messageShowLoad:!1,advanced:!0,that:this,refIconLoading:!1,columns:[{slotName:"journal.OperationLog.content",width:"30%",scopedSlots:{customRender:"Content",title:"journal.OperationLog.content"},dataIndex:"Content"},{width:"10%",slotName:"journal.OperationLog.time",scopedSlots:{customRender:"Time",title:"journal.OperationLog.time"},dataIndex:"Time"},{width:"10%",slotName:"journal.OperationLog.JournalLevel",scopedSlots:{customRender:"JournalLevel",title:"journal.OperationLog.JournalLevel"},dataIndex:"JournalLevel"},{width:"10%",slotName:"journal.OperationLog.operator",scopedSlots:{customRender:"operator",title:"journal.OperationLog.operator"},dataIndex:"Operator"}],dataSource:[],conditionExpress:"",selectedRows:[]}},authorize:{},mounted:function(){"CN"==this.$i18n.locale?this.json_fields=this.json_fields_cn:this.json_fields=this.json_fields_en,this.exportName=this.$t("reporting.AlarmHistory.exportName")+"."+Object(p["a"])(new Date,"yyyy-MM-dd hh:mm:ss")+".xls"},activated:function(){},filters:{formatDate:function(e){var t=new Date(e);return Object(p["a"])(t,"yyyy-MM-dd hh:mm:ss")},ContentSplit:function(e,t){for(var a=e.split("&"),n="",o=0;o<a.length;o++)n+=o%2==0?t.$t(a[o]):a[o];return n}},created:function(){},watch:{},methods:{startDownload:function(){this.isLoadExecl=!0,this.loadExecl=this.$message.loading(this.$t("reporting.DataHistory.LoadingExecl"),0)},finishDownload:function(){this.$message.destroy(this.loadExecl),this.isLoadExecl=!1},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},onDateChange:function(e,t){this.SelectDateRange=t},onWeeklyDateChange:function(e,t){var a=u()(e).day(1).format("YYYY-MM-DD"),n=u()(e).day(7).format("YYYY-MM-DD");this.SelectDateRange=[a,n]},QueryJournal:function(){var e=this;e.dataSource=[];var t={dateType:this.SelectDateType,dateRange:this.SelectDateRange};""!=t.dateRange&&""!=t.dateRange[0]?(this.messageShowLoad=!0,l(t).then((function(t){0==t.data.code&&(e.dataSource=t.data.list),e.messageShowLoad=!1}))):this.$message.error(this.$t("reporting.AlarmHistory.SelectDateError"))}}},m=h,y=(a("116b"),a("2877")),g=Object(y["a"])(m,n,o,!1,null,null,null);t["default"]=g.exports},cb97:function(e,t,a){},f2d9:function(e,t,a){"use strict";(function(e){"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e||"undefined"!==typeof self&&self;function a(e,t){return t={exports:{}},e(t,t.exports),t.exports}var n=a((function(e,t){(function(t,a){e.exports=a()})(0,(function(){return function e(t,a,n){var o,r,i=window,s="application/octet-stream",l=n||s,c=t,d=!a&&!n&&c,u=document.createElement("a"),p=function(e){return String(e)},f=i.Blob||i.MozBlob||i.WebKitBlob||p,h=a||"download";if(f=f.call?f.bind(i):Blob,"true"===String(this)&&(c=[c,l],l=c[0],c=c[1]),d&&d.length<2048&&(h=d.split("/").pop().split("?")[0],u.href=d,-1!==u.href.indexOf(d))){var m=new XMLHttpRequest;return m.open("GET",d,!0),m.responseType="blob",m.onload=function(t){e(t.target.response,h,s)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)){if(!(c.length>2096103.424&&f!==p))return navigator.msSaveBlob?navigator.msSaveBlob(v(c),h):w(c);c=v(c),l=c.type||s}else if(/([\x80-\xff])/.test(c)){var y=0,g=new Uint8Array(c.length),b=g.length;for(y;y<b;++y)g[y]=c.charCodeAt(y);c=new f([g],{type:l})}function v(e){var t=e.split(/[:;,]/),a=t[1],n="base64"==t[2]?atob:decodeURIComponent,o=n(t.pop()),r=o.length,i=0,s=new Uint8Array(r);for(i;i<r;++i)s[i]=o.charCodeAt(i);return new f([s],{type:a})}function w(e,t){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){i.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var a=document.createElement("iframe");document.body.appendChild(a),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),a.src=e,setTimeout((function(){document.body.removeChild(a)}),333)}if(o=c instanceof f?c:new f([c],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(o,h);if(i.URL)w(i.URL.createObjectURL(o),!0);else{if("string"===typeof o||o.constructor===p)try{return w("data:"+l+";base64,"+i.btoa(o))}catch(x){return w("data:"+l+","+encodeURIComponent(o))}r=new FileReader,r.onload=function(e){w(this.result)},r.readAsDataURL(o)}return!0}}))})),o={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName(){var e=(new Date).getTime();return"export_"+e},downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"===typeof this.beforeGenerate&&await this.beforeGenerate();let e=this.data;if("function"!==typeof this.fetch&&e||(e=await this.fetch()),!e||!e.length)return;let t=this.getProcessedJson(e,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(e,t,a){let o=this.base64ToBlob(e,a);"function"===typeof this.beforeFinish&&await this.beforeFinish(),n(o,t,a)},jsonToXLS(e){let t='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',a="<thead>";const n=Object.keys(e[0]).length;let o=this;const r=this.header||this.$attrs.title;r&&(a+=this.parseExtraData(r,'<tr><th colspan="'+n+'">${data}</th></tr>')),a+="<tr>";for(let i in e[0])a+="<th>"+i+"</th>";return a+="</tr>",a+="</thead>",a+="<tbody>",e.map((function(e,t){a+="<tr>";for(let n in e)a+="<td>"+o.preprocessLongNum(o.valueReformattedForMultilines(e[n]))+"</td>";a+="</tr>"})),a+="</tbody>",null!=this.footer&&(a+="<tfoot>",a+=this.parseExtraData(this.footer,'<tr><td colspan="'+n+'">${data}</td></tr>'),a+="</tfoot>"),t.replace("${table}",a).replace("${worksheet}",this.worksheet)},jsonToCSV(e){let t=this;var a=[];const n=this.header||this.$attrs.title;n&&a.push(this.parseExtraData(n,"${data}\r\n"));for(let o in e[0])a.push(o),a.push(",");return a.pop(),a.push("\r\n"),e.map((function(e){for(let n in e){let o=e[n]+"";t.escapeCsv&&(o='="'+o+'"',o.match(/[,"\n]/)&&(o='"'+o.replace(/\"/g,'""')+'"')),a.push(o),a.push(",")}a.pop(),a.push("\r\n")})),null!=this.footer&&a.push(this.parseExtraData(this.footer,"${data}\r\n")),a.join("")},getProcessedJson(e,t){let a=this.getKeys(e,t),n=[],o=this;return e.map((function(e,t){let r={};for(let n in a){let t=a[n];r[n]=o.getValue(t,e)}n.push(r)})),n},getKeys(e,t){if(t)return t;let a={};for(let n in e[0])a[n]=n;return a},parseExtraData(e,t){let a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]&&(a+=t.replace("${data}",e[n]));else a+=t.replace("${data}",e);return a},getValue(e,t){const a="object"!==typeof e?e:e.field;let n="string"!==typeof a?[]:a.split("."),o=this.defaultValue;return o=a?n.length>1?this.getValueFromNestedItem(t,n):this.parseValue(t[a]):t,e.hasOwnProperty("callback")&&(o=this.getValueFromCallback(o,e.callback)),o},valueReformattedForMultilines(e){return"string"==typeof e?e.replace(/\n/gi,"<br/>"):e},preprocessLongNum(e){if(this.stringifyLongNum){if(String(e).startsWith("0x"))return e;if(!isNaN(e)&&""!=e&&(e>99999999999||e<1e-13))return'="'+e+'"'}return e},getValueFromNestedItem(e,t){let a=e;for(let n of t)a&&(a=a[n]);return this.parseValue(a)},getValueFromCallback(e,t){if("function"!==typeof t)return this.defaultValue;const a=t(e);return this.parseValue(a)},parseValue(e){return e||0===e||"boolean"===typeof e?e:this.defaultValue},base64ToBlob(e,t){let a=window.btoa(window.unescape(encodeURIComponent(e))),n=atob(a),o=n.length,r=new Uint8ClampedArray(o);while(o--)r[o]=n.charCodeAt(o);return new Blob([r],{type:t})}}};function r(e,t,a,n,o,r,i,s,l,c){"boolean"!==typeof i&&(l=s,s=i,i=!1);var d,u="function"===typeof a?a.options:a;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),n&&(u._scopeId=n),r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=d):t&&(d=i?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){var p=u.render;u.render=function(e,t){return d.call(t),p(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,d):[d]}return a}var i=r;const s=o;var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:e.idName},on:{click:e.generate}},[e._t("default",[e._v(" Download "+e._s(e.name)+" ")])],2)},c=[];l._withStripped=!0;const d=void 0,u=void 0,p=void 0,f=!1;var h=i({render:l,staticRenderFns:c},d,s,u,f,p,void 0,void 0);t["a"]=h}).call(this,a("c8ba"))}}]);