(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("d3b7");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("router-view")],1),r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("strong",[e._v("Transferencia de archivos")]),r("br"),r("b-icon",{attrs:{icon:"code-tags"}}),e._v(" con "),r("b-icon",{attrs:{icon:"heart",type:"is-danger"}}),e._v(" por "),r("a",{attrs:{href:"https://parzibyte.me/blog"}},[e._v("Parzibyte")]),r("br"),e._m(0)],1)])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("small",[r("a",{attrs:{href:"https://www.flaticon.com/free-icons/exchange",title:"exchange icons"}},[e._v("Exchange icons created by Good Ware - Flaticon")])])}],o={name:"app"},c=o,i=r("2877"),u=Object(i["a"])(c,n,s,!1,null,null,null),l=u.exports,d=r("289d"),p=(r("5abe"),r("5363"),r("b0c0"),r("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("b-loading",{attrs:{active:e.cargando}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.archivo.nombre,expression:"archivo.nombre"}],staticClass:"column has-text-centered"},[r("p",{staticClass:"title"},[e._v("Listos para descargar")]),r("p",{staticClass:"subtitle"},[e._v(e._s(e.archivo.nombre))]),r("b-button",{attrs:{type:"is-success","icon-right":"download"},on:{click:function(t){return e.descargar()}}},[e._v("Descargar ")]),r("br"),r("br"),r("b-notification",{attrs:{type:"is-info",closable:!1,"has-icon":""}},[r("p",{staticClass:"is-size-5"},[e._v(" No olvide respaldar el archivo, ya que el enlace tiene una fecha de expiración. Además, la mayoría de veces el reenvío del archivo tiene un costo ")])])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.archivo.nombre&&!e.cargando,expression:"!archivo.nombre && !cargando"}],staticClass:"column has-text-centered"},[r("p",{staticClass:"title"},[e._v("Enlace inválido")]),r("p",{staticClass:"subtitle"},[e._v(" Parece que el enlace que has seguido ha expirado, es inválido o el archivo al que apuntaba ha sido eliminado ")])])],1)},f=[],v=r("1da1"),h=(r("96cf"),r("0829")),m=r("260b"),g=r("e71f"),w=r("588e"),x={obtenerApp:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={apiKey:"AIzaSyDjWoO4VqmiNCSLfhNaGGBNbj6ZVhMGEQ4",authDomain:"compartir-archivos.firebaseapp.com",databaseURL:"",projectId:"compartir-archivos",storageBucket:"compartir-archivos.appspot.com",messagingSenderId:"780696618716",appId:"1:780696618716:web:ccc8bc4720249a89149619"},e.abrupt("return",Object(m["a"])(t));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),obtenerFirestore:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=g["b"],e.next=3,x.obtenerApp();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()},obtenerStorage:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=w["a"],e.next=3,x.obtenerApp();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()},obtenerColeccionArchivos:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=g["a"],e.next=3,x.obtenerFirestore();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"archivos"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),obtenerColeccionDescargasArchivos:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=g["a"],e.next=3,x.obtenerFirestore();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1,"descargasArchivos"));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},y=x,_=r("e0fc"),j={data:function(){return{archivo:{},referenciaDescargas:{},descargas:{descargas:{}},cargando:!1}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,r=e.$route.params.id,t.t0=h["d"],t.next=5,y.obtenerFirestore();case 5:return t.t1=t.sent,t.t2=r,a=(0,t.t0)(t.t1,"archivos",t.t2),t.t3=h["d"],t.next=11,y.obtenerFirestore();case 11:return t.t4=t.sent,t.t5=r,n=(0,t.t3)(t.t4,"descargasArchivos",t.t5),e.referenciaDescargas=n,t.next=17,Object(h["e"])(a);case 17:return s=t.sent,t.next=20,Object(h["e"])(n);case 20:o=t.sent,e.cargando=!1,s.exists()&&(e.archivo=s.data()),o.exists()&&(e.descargas=o.data());case 24:case"end":return t.stop()}}),t)})))()},methods:{descargar:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,e.descargas.descargas.push((new Date).getTime()),t.next=4,Object(h["j"])(e.referenciaDescargas,{descargas:e.descargas.descargas});case 4:return t.prev=4,t.t0=_["b"],t.t1=_["d"],t.next=9,y.obtenerStorage();case 9:return t.t2=t.sent,t.t3=e.archivo.uuid+"/"+e.archivo.nombre,t.t4=(0,t.t1)(t.t2,t.t3),t.next=14,(0,t.t0)(t.t4);case 14:r=t.sent,window.location.href=r,t.next=21;break;case 18:t.prev=18,t.t5=t["catch"](4),e.$buefy.toast.open({message:"Error descargando archivo. Tal vez no tiene los permisos suficientes. Error: "+t.t5.message,type:"is-danger"});case 21:return t.prev=21,e.cargando=!1,t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[4,18,21,24]])})))()}}},O=j,C=Object(i["a"])(O,b,f,!1,null,null,null),S=C.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-button",{attrs:{type:"is-success","icon-right":"format-list-numbered",disabled:e.estaSubiendo},on:{click:function(t){return e.verArchivos()}}},[e._v("Ver archivos")])],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",[r("b-upload",{attrs:{disabled:e.estaSubiendo,"drag-drop":"",expanded:""},nativeOn:{change:function(t){return e.onArchivosSeleccionados.apply(null,arguments)}},model:{value:e.archivo,callback:function(t){e.archivo=t},expression:"archivo"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),r("p",[e._v("Clic aquí para buscar el archivo")])])])])],1),e.archivo?r("span",{staticClass:"tag is-primary"},[e._v(" "+e._s(e.archivo.name)+" ")]):e._e(),r("br"),r("b-notification",{directives:[{name:"show",rawName:"v-show",value:e.estaPausado,expression:"estaPausado"}],attrs:{type:"is-danger",closable:!1}},[e._v("Pausado")]),r("br"),r("b-progress",{directives:[{name:"show",rawName:"v-show",value:e.estaSubiendo,expression:"estaSubiendo"}],attrs:{value:e.progreso,type:"is-success","show-value":"",format:"percent"}}),r("b-button",{attrs:{disabled:e.estaSubiendo,loading:e.estaSubiendo,type:"is-success"},on:{click:e.subir}},[e._v("Subir")])],1)])])},k=[],D=r("ec26"),R={data:function(){return{archivo:null,estaSubiendo:!1,estaPausado:!1,progreso:0}},mounted:function(){var e=this;window.addEventListener("beforeunload",(function(t){if(e.estaSubiendo)return t.preventDefault(),t.returnValue="",""}))},methods:{onArchivosSeleccionados:function(){this.subir()},verArchivos:function(){this.$router.push({name:"VerArchivos"})},subir:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.archivo){t.next=2;break}return t.abrupt("return");case 2:return r=e.archivo.name,a=Object(D["a"])(),t.next=6,y.obtenerStorage();case 6:n=t.sent,s=Object(w["c"])(Object(w["b"])(n,a+"/"+r),e.archivo),e.estaSubiendo=!0,e.estaPausado=!1,s.on("state_changed",(function(t){e.progreso=t.bytesTransferred/t.totalBytes*100,"paused"===t.state?e.estaPausado=!0:"running"===t.state&&(e.estaPausado=!1)}),(function(t){e.$buefy.toast.open({message:"Error subiendo archivo: "+t.message,type:"is-danger"})}),Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$buefy.toast.open({message:"Archivo subido. Guardando detalles...",type:"is-info"}),t.t0=h["a"],t.next=4,y.obtenerColeccionArchivos();case 4:return t.t1=t.sent,t.t2={uuid:a,nombre:r,fecha:(new Date).getTime()},t.next=8,(0,t.t0)(t.t1,t.t2);case 8:return n=t.sent,t.t3=h["i"],t.t4=h["d"],t.next=13,y.obtenerFirestore();case 13:return t.t5=t.sent,t.t6=n.id,t.t7=(0,t.t4)(t.t5,"descargasArchivos",t.t6),t.t8={descargas:[]},t.next=19,(0,t.t3)(t.t7,t.t8);case 19:e.$buefy.toast.open({message:"Subida terminada correctamente",type:"is-success"}),e.estaSubiendo=!1,e.estaPausado=!1,e.archivo=null,e.progreso=0;case 24:case"end":return t.stop()}}),t)}))));case 11:case"end":return t.stop()}}),t)})))()}}},E=R,$=Object(i["a"])(E,A,k,!1,null,null,null),P=$.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-button",{attrs:{type:"is-success","icon-right":"plus"},on:{click:function(t){return e.subirArchivo()}}},[e._v("Nuevo")])],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-table",{attrs:{data:e.archivos,loading:e.cargando,"mobile-cards":!0,hoverable:""},scopedSlots:e._u([{key:"empty",fn:function(){return[r("div",{staticClass:"has-text-centered"},[e._v("No hay registros")])]},proxy:!0}])},[r("b-table-column",{attrs:{sortable:"",searchable:"",field:"nombre",label:"Nombre"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.nombre)+" ")]}}])}),r("b-table-column",{attrs:{field:"fecha",label:"Fecha de carga",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("timestampAFecha")(t.row.fecha))+" ")]}}])}),r("b-table-column",{attrs:{field:"id",label:"Descargas"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("strong",[e._v(e._s(e.descargasDeArchivo(t.row.id).length)+" descargas")]),r("ul",e._l(e.descargasDeArchivo(t.row.id),(function(t,a){return r("li",{key:a},[e._v(" "+e._s(e._f("timestampAFecha")(t))+" ")])})),0)]}}])}),r("b-table-column",{attrs:{field:"uuid",label:"Enlace"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-button",{attrs:{type:"is-info",tag:"a",href:e.enlaceParaDescargar(t.row),target:"_blank"}},[r("b-icon",{attrs:{icon:"open-in-new"}})],1),e._v("   "),r("b-button",{attrs:{type:"is-success"},on:{click:function(r){return e.copiarAlPortapapeles(t.row)}}},[r("b-icon",{attrs:{icon:"content-copy"}})],1)]}}])}),r("b-table-column",{attrs:{field:"id",label:"Eliminar"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-button",{attrs:{type:"is-danger"},on:{click:function(r){return e.eliminar(t.row)}}},[r("b-icon",{attrs:{icon:"delete"}})],1)]}}])})],1)],1)])])},T=[],N=(r("7db0"),r("99af"),r("c740"),r("159b"),r("a434"),{data:function(){return{archivos:[],descargas:[],cargando:!1}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.obtenerArchivosYEscucharCambios();case 2:case"end":return t.stop()}}),t)})))()},methods:{descargasDeArchivo:function(e){var t=this.descargas.find((function(t){return t.id===e}));return t?t.descargas:[]},eliminar:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$buefy.dialog.confirm({message:"¿Eliminar <code>".concat(e.nombre,"</code>? Esto no se puede deshacer"),cancelText:"Cancelar",confirmText:"Sí, eliminar",onConfirm:function(){var r=Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.cargando=!0,r.t0=_["a"],r.t1=_["d"],r.next=5,y.obtenerStorage();case 5:return r.t2=r.sent,r.t3=e.uuid+"/"+e.nombre,r.t4=(0,r.t1)(r.t2,r.t3),r.next=10,(0,r.t0)(r.t4);case 10:return r.t5=h["c"],r.t6=h["d"],r.next=14,y.obtenerFirestore();case 14:return r.t7=r.sent,r.t8=e.id,r.t9=(0,r.t6)(r.t7,"archivos",r.t8),r.next=19,(0,r.t5)(r.t9);case 19:return r.t10=h["c"],r.t11=h["d"],r.next=23,y.obtenerFirestore();case 23:return r.t12=r.sent,r.t13=e.id,r.t14=(0,r.t11)(r.t12,"descargasArchivos",r.t13),r.next=28,(0,r.t10)(r.t14);case 28:t.cargando=!1,t.$buefy.toast.open("Eliminado");case 30:case"end":return r.stop()}}),r)})));function a(){return r.apply(this,arguments)}return a}()});case 1:case"end":return r.stop()}}),r)})))()},subirArchivo:function(){this.$router.push({name:"Subir"})},copiarAlPortapapeles:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.cargando=!0,r.next=4,navigator.clipboard.writeText("".concat(window.location.origin).concat(window.location.pathname)+t.enlaceParaDescargar(e));case 4:t.$buefy.toast.open({message:"Copiado",type:"is-success"}),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),t.$buefy.toast.open({message:"Error copiando enlace. Tal vez no estás en un entorno seguro. Error: "+r.t0.message,type:"is-danger"});case 10:return r.prev=10,t.cargando=!1,r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})))()},enlaceParaDescargar:function(e){return this.$router.resolve({name:"DescargarArchivo",params:{id:e.id}}).href},indiceDeArchivo:function(e){return this.archivos.findIndex((function(t){return t.id===e}))},indiceDeDescarga:function(e){return this.descargas.findIndex((function(t){return t.id===e}))},obtenerArchivosYEscucharCambios:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.archivos=[],e.cargando=!0,t.next=4,y.obtenerColeccionArchivos();case 4:return r=t.sent,Object(h["g"])(Object(h["h"])(r),(function(t){t.docChanges().forEach((function(t){e.cargando=!0;var r=t.doc.data(),a=t.doc.id;if("added"===t.type&&(r.id=a,e.archivos.push(r)),"modified"===t.type){var n=e.indiceDeArchivo(a);-1!==n&&e.$set(e.archivos,n,r)}if("removed"===t.type){var s=e.indiceDeArchivo(a);-1!==s&&e.archivos.splice(s,1)}})),e.cargando=!1})),t.next=8,y.obtenerColeccionDescargasArchivos();case 8:a=t.sent,Object(h["g"])(Object(h["h"])(a),(function(t){t.docChanges().forEach((function(t){e.cargando=!0;var r=t.doc.data(),a=t.doc.id;if(r.id=a,"added"===t.type&&(r.id=a,e.descargas.push(r)),"modified"===t.type){var n=e.indiceDeDescarga(a);-1!==n&&e.$set(e.descargas,n,r)}if("removed"===t.type){var s=e.indiceDeDescarga(a);-1!==s&&e.descargas.splice(s,1)}})),e.cargando=!1}));case 10:case"end":return t.stop()}}),t)})))()}}}),I=N,L=Object(i["a"])(I,F,T,!1,null,null,null),V=L.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{label:"Correo"}},[r("b-input",{attrs:{type:"email",placeholder:"tu@correo.aquí",loading:e.cargando},model:{value:e.correo,callback:function(t){e.correo=t},expression:"correo"}})],1),r("b-field",{attrs:{label:"Contraseña"}},[r("b-input",{attrs:{type:"password",placeholder:"Tu contraseña",loading:e.cargando},model:{value:e.palabraSecreta,callback:function(t){e.palabraSecreta=t},expression:"palabraSecreta"}})],1),r("b-button",{staticClass:"is-success",attrs:{loading:e.cargando},on:{click:function(t){return e.iniciarSesion()}}},[e._v("Iniciar sesión")])],1)])])},z=[],M=(r("caad"),r("2532"),r("ea7b")),G={data:function(){return{correo:"",palabraSecreta:"",cargando:!1}},methods:{iniciarSesion:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.correo&&e.palabraSecreta){t.next=3;break}return e.$buefy.toast.open("Completa los campos"),t.abrupt("return");case 3:if(e.correo.includes("@")){t.next=6;break}return e.$buefy.toast.open("Escribe un correo válido"),t.abrupt("return");case 6:return e.cargando=!0,y.obtenerApp(),r=Object(M["a"])(),t.prev=9,t.next=12,Object(M["c"])(r,e.correo,e.palabraSecreta);case 12:e.$buefy.toast.open("Bienvenido"),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](9),e.$buefy.dialog.alert({title:"Error",message:"Error iniciando sesión. Verifica tu correo y contraseña. El error es: "+t.t0.message,type:"is-danger",hasIcon:!0,icon:"alert"});case 18:return t.prev=18,e.cargando=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[9,15,18,21]])})))()}}},B=G,J=Object(i["a"])(B,q,z,!1,null,null,null),U=J.exports;a["a"].use(p["a"]);var W=new p["a"]({routes:[{path:"/descargar/:id",name:"DescargarArchivo",component:S},{path:"/",name:"VerArchivos",component:V},{path:"/subir",name:"Subir",component:P},{path:"/login",name:"Login",component:U}]});y.obtenerApp(),Object(M["b"])(Object(M["a"])(),(function(e){e?"DescargarArchivo"!==W.currentRoute.name&&W.push({name:"VerArchivos"}):"Login"!==W.currentRoute.name&&"DescargarArchivo"!==W.currentRoute.name&&W.push({name:"Login"})})),W.beforeEach((function(e,t,r){if("DescargarArchivo"!==e.name){var a=Object(M["a"])().currentUser;a||"Login"===e.name?r():r({name:"Login"})}else r()}));var Y=W;a["a"].use(d["a"]),a["a"].config.productionTip=!1;var K=new Intl.DateTimeFormat("es-MX",{dateStyle:"medium",timeStyle:"medium"});a["a"].filter("timestampAFecha",(function(e){return e?K.format(new Date(e)):""})),new a["a"]({render:function(e){return e(l)},router:Y}).$mount("#app")}});