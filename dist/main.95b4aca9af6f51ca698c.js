!function(r){function e(e){for(var a,n,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(r[a]=l[a]);for(d&&d(e);f.length;)f.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var r,e=0;e<s.length;e++){for(var t=s[e],a=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),r=n(n.s=t[0]))}return r}var a={},o={0:0},s=[];function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=r,n.c=a,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)n.d(t,a,function(e){return r[e]}.bind(null,a));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;s.push([121,1]),t()}({121:function(r,e,t){t(122),r.exports=t(309)},308:function(r,e,t){},309:function(r,e,t){"use strict";t.r(e);t(308);var a=function(){var r,e=document.querySelectorAll(".js-cell"),t=document.querySelectorAll(".js-card");function a(){var e=this;r=this,setTimeout((function(){e.classList.add("hide")}),0)}function o(){this.classList.remove("hide"),r=0}function s(r){r.preventDefault(),this.style="min-height: 200px"}function n(r){r.preventDefault()}function i(){"favoriteC"!==this.id&&(this.style="height: auto")}function l(){if("progressC"===this.id){r.classList.remove("green"),r.classList.add("red");var e=r.id;c.findCardInArr(e,"progress"),this.style="height: auto",console.log("task:",c.arrTask),console.log("progress:",c.arrProgress),console.log("complete:",c.arrComplete),console.log("favorite:",JSON.parse(localStorage.getItem("arrCard"))),console.log(" ")}if("completeC"===this.id){r.classList.remove("red"),r.classList.add("green");var t=r.id;c.findCardInArr(t,"complete"),this.style="height: auto",console.log("task:",c.arrTask),console.log("progress:",c.arrProgress),console.log("complete:",c.arrComplete),console.log("favorite:",JSON.parse(localStorage.getItem("arrCard"))),console.log(" ")}if("taskC"===this.id){r.classList.remove("green"),r.classList.remove("red");var a=r.id;c.findCardInArr(a,"task"),this.style="height: auto",console.log("task:",c.arrTask),console.log("progress:",c.arrProgress),console.log("complete:",c.arrComplete),console.log("favorite:",JSON.parse(localStorage.getItem("arrCard"))),console.log(" ")}if("favoriteC"===this.id){var o=r.id;c.findCardInArr(o,"favorite"),console.log("task:",c.arrTask),console.log("progress:",c.arrProgress),console.log("complete:",c.arrComplete),console.log("favorite:",JSON.parse(localStorage.getItem("arrCard"))),console.log(" ")}this.appendChild(r)}e.forEach((function(r){r.addEventListener("dragover",s),r.addEventListener("dragenter",n),r.addEventListener("dragleave",i),r.addEventListener("drop",l)})),t.forEach((function(r){r.addEventListener("dragstart",a),r.addEventListener("dragend",o)}))};function o(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}var s=new(function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.title=null,this.body=null,this.container=document.querySelector(".favorites"),this.btn=null,this.card=null,this.id=null,this._arrFavorites=[],this._counter=null,this.counterEl=document.querySelector(".header-favorites__counter")}var e,t,n;return e=r,n=[{key:"templateOfTask",value:function(r,e,t){var a=t.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-");return'\n    <div class="favorites-card js-card" draggable="true" id="'.concat(a[1],'">\n            <div class="favorites-card__title">').concat(r,'</div>\n            <div class="favorites-card__info">').concat(e,'</div>\n            <button class="favorites-card__button" >Отложить</button>\n          </div>\n    ')}}],(t=[{key:"checkArrFavorites",value:function(r){var e=!0;return this._arrFavorites.map((function(t){console.log(t.id,r),parseFloat(t.id)===parseFloat(r)&&(e=!1)})),e}},{key:"deleteCard",value:function(r){this.arrFavorites.splice(r,1)}},{key:"checkArrinCardStore",value:function(r){this._arrFavorites=JSON.parse(localStorage.getItem("arrCard"))||[];var e=r._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-");parseFloat(e[1])===parseFloat(this.id)&&(this._arrFavorites.push({title:r.title,body:r.body,id:r._id}),localStorage.setItem("arrCard",JSON.stringify(this._arrFavorites)),s.plusCounter(),this.counterEl.textContent=this._counter)}},{key:"plusCounter",value:function(){JSON.parse(localStorage.getItem("arrCard"))?this._counter=JSON.parse(localStorage.getItem("arrCard")).length:this._counter=0}},{key:"init",value:function(r){this.id=r,c.arrTask.forEach((function(r){s.checkArrinCardStore(r)})),c.arrProgress.forEach((function(r){s.checkArrinCardStore(r)})),c.arrComplete.forEach((function(r){s.checkArrinCardStore(r)}))}},{key:"renderTask",value:function(){this.clearFavoriteContainer();var e='<h3 class="favorites-title">Отложенные</h3>';return JSON.parse(localStorage.getItem("arrCard")).forEach((function(t){e+=r.templateOfTask(t.title,t.body,t.id)})),e}},{key:"showTaskInFavorites",value:function(){if(this._counter){var r=s.renderTask();this.container.insertAdjacentHTML("afterbegin",r)}a()}},{key:"clearFavoriteContainer",value:function(){this.container.innerHTML=""}},{key:"arrFavorites",get:function(){return this._arrFavorites}},{key:"counter",get:function(){return this._counter}}])&&o(e.prototype,t),n&&o(e,n),r}()),n=s;function i(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}var l=new(function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this._arrTask=[],this._arrProgress=[],this._arrComplete=[],this.taskContainer=document.getElementById("taskC"),this.progressContainer=document.getElementById("progressC"),this.completeContainer=document.getElementById("completeC"),this.counter=document.querySelector(".header-favorites__counter"),this._arrFavorite=JSON.parse(localStorage.getItem("cardArr"))||[]}var e,t,a;return e=r,(t=[{key:"addArrTask",value:function(r){this._arrTask.push(r)}},{key:"addArrProgress",value:function(r){this._arrProgress.push(r)}},{key:"addArrComplete",value:function(r){this._arrComplete.push(r)}},{key:"addArrFavorite",value:function(r){this._arrFavorite.push(r)}},{key:"findCardInArr",value:function(r,e){var t=this;this.arrTask.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]!==r);else switch(e){case"task":var s=l.transformCardInObj(a.title,a.body,"task-",r);l.addArrTask(s),t.arrTask.splice(o,1);break;case"progress":var n=l.transformCardInObj(a.title,a.body,"progress-",r);l.addArrProgress(n),t.arrTask.splice(o,1);break;case"complete":var i=l.transformCardInObj(a.title,a.body,"complete-",r);l.addArrComplete(i),t.arrTask.splice(o,1);break;case"favorite":var c=l.transformCardInObj(a.title,a.body,"favorite-",r);l.addArrFavorite(c),localStorage.setItem("arrCard",JSON.stringify(t._arrFavorite)),t.arrTask.splice(o,1)}})),this.arrProgress.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]!==r);else switch(e){case"task":var s=l.transformCardInObj(a.title,a.body,"task-",r);l.addArrTask(s),t.arrProgress.splice(o,1);break;case"progress":var n=l.transformCardInObj(a.title,a.body,"progress-",r);l.addArrProgress(n),t.arrProgress.splice(o,1);break;case"complete":var i=l.transformCardInObj(a.title,a.body,"complete-",r);l.addArrComplete(i),t.arrProgress.splice(o,1);break;case"favorite":var c=l.transformCardInObj(a.title,a.body,"favorite-",r);l.addArrFavorite(c),t.arrProgress.splice(o,1)}})),this.arrComplete.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]===r)switch(e){case"task":var s=l.transformCardInObj(a.title,a.body,"task-",r);l.addArrTask(s),t.arrComplete.splice(o,1);break;case"progress":var n=l.transformCardInObj(a.title,a.body,"progress-",r);l.addArrProgress(n),t.arrComplete.splice(o,1);break;case"complete":var i=l.transformCardInObj(a.title,a.body,"complete-",r);l.addArrComplete(i),t.arrComplete.splice(o,1);break;case"favorite":var c=l.transformCardInObj(a.title,a.body,"favorite-",r);l.addArrFavorite(c),t.arrComplete.splice(o,1)}})),JSON.parse(localStorage.getItem("arrCard")).forEach((function(a,o){if(a.id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]===r)switch(e){case"task":var s=l.transformCardInObj(a.title,a.body,"task-",r);console.log("cardTask",s),l.addArrTask(s),t._arrFavorite.splice(o,1),localStorage.setItem("arrCard",JSON.stringify(t._arrFavorite)),n.plusCounter(),t.counter.textContent=n._counter;break;case"progress":var i=l.transformCardInObj(a.title,a.body,"progress-",r);l.addArrProgress(i),t._arrFavorite.splice(o,1),localStorage.setItem("arrCard",JSON.stringify(t._arrFavorite)),n.plusCounter(),t.counter.textContent=n._counter;break;case"complete":var c=l.transformCardInObj(a.title,a.body,"complete-",r);l.addArrComplete(c),t._arrFavorite.splice(o,1),localStorage.setItem("arrCard",JSON.stringify(t._arrFavorite)),n.plusCounter(),t.counter.textContent=n._counter;break;case"favorite":var d=l.transformCardInObj(a.title,a.body,"favorite-",r);l.addArrFavorite(d),t._arrFavorite.splice(o,1),localStorage.setItem("arrCard",JSON.stringify(t._arrFavorite)),n.plusCounter(),t.counter.textContent=n._counter}}))}},{key:"deleteCardinArr",value:function(r,e){var t=this;this.arrTask.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]===r){t.arrTask.splice(o,1);var s=e.target.parentElement;t.taskContainer.removeChild(s)}})),this.arrProgress.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]===r){t.arrProgress.splice(o,1);var s=e.target.parentElement;t.progressContainer.removeChild(s)}})),this.arrComplete.forEach((function(a,o){if(a._id.replace(/([0-9])\s+([^0-9])/g,"$1,$2").split("-")[1]===r){t.arrComplete.splice(o,1);var s=e.target.parentElement;t.completeContainer.removeChild(s)}}))}},{key:"transformCardInObj",value:function(r,e,t,a){return{_id:t+a,title:r,body:e}}},{key:"arrTask",get:function(){return this._arrTask}},{key:"arrProgress",get:function(){return this._arrProgress}},{key:"arrComplete",get:function(){return this._arrComplete}}])&&i(e.prototype,t),a&&i(e,a),r}()),c=l;function d(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}var u=new(function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.form=null,this.title=null,this.body=null,this.container=null,this.card=null,this.btn=null,this.id=null}var e,t,o;return e=r,(t=[{key:"init",value:function(r){this.form=document.forms["".concat(r)],this.container=this.form.parentElement,this.title=this.form.elements.inputTitle,this.body=this.form.elements.inputBody,this.form.classList.toggle("active")}},{key:"pushCardInArr",value:function(){"taskC"!==this.container.id?"progressC"!==this.container.id?"completeC"!==this.container.id||c.addArrComplete(u.transformCardInObj(this.title.value,this.body.value,"complete-")):c.addArrProgress(u.transformCardInObj(this.title.value,this.body.value,"progress-")):c.addArrTask(u.transformCardInObj(this.title.value,this.body.value,"task-"))}},{key:"transformCardInObj",value:function(r,e,t){return{_id:t+this.id,title:r,body:e}}},{key:"showForm",value:function(r){this.form=document.forms["".concat(r)],this.form.classList.toggle("active")}},{key:"renderTask",value:function(){var r=this.title.value,e=this.body.value;if(!r)return alert("Введите название задачи!"),void this.form.classList.toggle("active");if(!e)return alert("Введите описание задачи!"),void this.form.classList.toggle("active");var t=u.templateTask(r,e);this.container.insertAdjacentHTML("beforeend",t),u.pushCardInArr(),a(),this.btn=document.querySelector(".list-card__button"),this.form.reset(),console.log("task:",c.arrTask),console.log("progress:",c.arrProgress),console.log("complete:",c.arrComplete),console.log("favorite:",JSON.parse(localStorage.getItem("arrCard"))),console.log(" ")}},{key:"getBtn",value:function(){return this.btn}},{key:"templateTask",value:function(r,e){var t=Math.random();return this.id=t,'\n    <div class="list-card js-card" draggable="true" id="'.concat(this.id,'" >\n    <div class="list-card__title">').concat(r,'</div>\n    <div class="list-card__info">').concat(e,'</div>\n    <button class="list-card__button btnF" data-card-id="').concat(this.id,'">Отложить</button>\n  </div>\n    ')}}])&&d(e.prototype,t),o&&d(e,o),r}()),f=u,v=document.querySelectorAll(".js-cell"),p=document.querySelector(".js-task"),g=document.querySelector(".js-progress"),h=document.querySelector(".js-complete"),m=document.querySelector(".header-favorites__counter"),b=document.querySelector(".header-favorites"),k=document.querySelector(".favorites"),y=document.querySelector(".wrapper");document.getElementById("taskC");function C(r,e){r.preventDefault(),"taskForm"===e&&p.classList.toggle("active-btn"),"progressForm"===e&&g.classList.toggle("active-btn"),"activeForm"===e&&h.classList.toggle("active-btn"),f.showForm("".concat(e))}n.plusCounter(),m.textContent=n._counter,b.addEventListener("click",(function(r){b.classList.toggle("margin-r"),k.classList.toggle("active-favorites"),document.body.classList.toggle("width-hero"),y.classList.toggle("right-wrapper"),n.showTaskInFavorites()})),p.addEventListener("click",(function(r){C(r,"taskForm")})),g.addEventListener("click",(function(r){C(r,"progressForm")})),h.addEventListener("click",(function(r){C(r,"activeForm")})),v.forEach((function(r){r.addEventListener("click",(function(r){!function(r){if(r.target.classList.contains("btnF")){var e=r.target.getAttribute("data-card-id");if(!n.checkArrFavorites(e))return void console.log("Вы уже добавили этот билет");n.init(e),n.showTaskInFavorites(),c.deleteCardinArr(e,r)}}(r)}))})),v.forEach((function(r){r.addEventListener("submit",(function(r){!function(r){r.preventDefault();var e=r.target.name;f.init(e),f.renderTask(),"taskForm"===e?p.classList.remove("active-btn"):"progressForm"===e?g.classList.remove("active-btn"):h.classList.remove("active-btn")}(r)}))}))}});