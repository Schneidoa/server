(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{326:function(e,a,s){"use strict";s.r(a);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-settings",class:{"with-app-sidebar":t.currentApp},attrs:{id:"content"}},[a("app-navigation",{attrs:{menu:t.menu}}),t._v(" "),a("div",{staticClass:"app-settings-content",class:{"icon-loading":t.loadingList},attrs:{id:"app-content"}},[a("app-list",{attrs:{category:t.category,app:t.currentApp,search:t.searchQuery}})],1),t._v(" "),t.id&&t.currentApp?a("div",{attrs:{id:"app-sidebar"}},[a("app-details",{attrs:{category:t.category,app:t.currentApp}})],1):t._e()],1)};i._withStripped=!0;var n=s(116),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-content-inner"}},[a("div",{staticClass:"apps-list",class:{installed:t.useBundleView||t.useListView,store:t.useAppStoreView},attrs:{id:"apps-list"}},[t.useListView?[a("transition-group",{staticClass:"apps-list-container",attrs:{name:"app-list",tag:"div"}},t._l(t.apps,function(e){return a("app-item",{key:e.id,attrs:{app:e,category:t.category}})}))]:t._e(),t._v(" "),t._l(t.bundles,function(e){return t.useBundleView&&t.bundleApps(e.id).length>0?[a("transition-group",{staticClass:"apps-list-container",attrs:{name:"app-list",tag:"div"}},[a("div",{key:e.id,staticClass:"apps-header"},[a("div",{staticClass:"app-image"}),t._v(" "),a("h2",[t._v(t._s(e.name)+" "),a("input",{attrs:{type:"button",value:t.bundleToggleText(e.id)},on:{click:function(a){t.toggleBundle(e.id)}}})]),t._v(" "),a("div",{staticClass:"app-version"}),t._v(" "),a("div",{staticClass:"app-level"}),t._v(" "),a("div",{staticClass:"app-groups"}),t._v(" "),a("div",{staticClass:"actions"},[t._v(" ")])]),t._v(" "),t._l(t.bundleApps(e.id),function(s){return a("app-item",{key:e.id+s.id,attrs:{app:s,category:t.category}})})],2)]:t._e()}),t._v(" "),t.useAppStoreView?t._l(t.apps,function(e){return a("app-item",{key:e.id,attrs:{app:e,category:t.category,"list-view":!1}})}):t._e()],2),t._v(" "),a("div",{staticClass:"apps-list installed",attrs:{id:"apps-list-search"}},[a("div",{staticClass:"apps-list-container"},[""!==t.search&&t.searchApps.length>0?[a("div",{staticClass:"section"},[a("div"),t._v(" "),a("td",{attrs:{colspan:"5"}},[a("h2",[t._v(t._s(t.t("settings","Results from other categories")))])])]),t._v(" "),t._l(t.searchApps,function(e){return a("app-item",{key:e.id,attrs:{app:e,category:t.category,"list-view":!0}})})]:t._e()],2)]),t._v(" "),t.loading||0!==t.searchApps.length||0!==t.apps.length?t._e():a("div",{staticClass:"emptycontent emptycontent-search",attrs:{id:"apps-list-empty"}},[a("div",{staticClass:"icon-settings-dark",attrs:{id:"app-list-empty-icon"}}),t._v(" "),a("h2",[t._v(t._s(t.t("settings","No apps found for your version")))])]),t._v(" "),a("div",{attrs:{id:"searchresults"}})])};p._withStripped=!0;var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section",class:{selected:t.isSelected},on:{click:t.showAppDetails}},[a("div",{staticClass:"app-image app-image-icon",on:{click:t.showAppDetails}},[t.listView&&!t.app.preview||!t.listView&&!t.app.screenshot?a("div",{staticClass:"icon-settings-dark"}):t._e(),t._v(" "),t.listView&&t.app.preview?a("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"}},[a("defs",[a("filter",{attrs:{id:t.filterId}},[a("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}})],1)]),t._v(" "),a("image",{staticClass:"app-icon",attrs:{x:"0",y:"0",width:"32",height:"32",preserveAspectRatio:"xMinYMin meet",filter:t.filterUrl,"xlink:href":t.app.preview}})]):t._e(),t._v(" "),!t.listView&&t.app.screenshot?a("img",{attrs:{src:t.app.screenshot,width:"100%"}}):t._e()]),t._v(" "),a("div",{staticClass:"app-name",on:{click:t.showAppDetails}},[t._v("\n\t\t"+t._s(t.app.name)+"\n\t")]),t._v(" "),t.listView?t._e():a("div",{staticClass:"app-summary"},[t._v(t._s(t.app.summary))]),t._v(" "),t.listView?a("div",{staticClass:"app-version"},[t.app.version?a("span",[t._v(t._s(t.app.version))]):t.app.appstoreData.releases[0].version?a("span",[t._v(t._s(t.app.appstoreData.releases[0].version))]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"app-level"},[200===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","Official apps are developed by and within the community. They offer central functionality and are ready for production use."),expression:"t('settings', 'Official apps are developed by and within the community. They offer central functionality and are ready for production use.')",modifiers:{auto:!0}}],staticClass:"official icon-checkmark"},[t._v("\n\t\t\t"+t._s(t.t("settings","Official")))]):t._e(),t._v(" "),t.listView?t._e():a("app-score",{attrs:{score:t.app.score}})],1),t._v(" "),a("div",{staticClass:"actions"},[t.app.error?a("div",{staticClass:"warning"},[t._v(t._s(t.app.error))]):t._e(),t._v(" "),t.loading(t.app.id)?a("div",{staticClass:"icon icon-loading-small"}):t._e(),t._v(" "),t.app.update?a("input",{staticClass:"update primary",attrs:{type:"button",value:t.t("settings","Update to {update}",{update:t.app.update}),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){e.stopPropagation(),t.update(t.app.id)}}}):t._e(),t._v(" "),t.app.canUnInstall?a("input",{staticClass:"uninstall",attrs:{type:"button",value:t.t("settings","Remove"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){e.stopPropagation(),t.remove(t.app.id)}}}):t._e(),t._v(" "),t.app.active?a("input",{staticClass:"enable",attrs:{type:"button",value:t.t("settings","Disable"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){e.stopPropagation(),t.disable(t.app.id)}}}):t._e(),t._v(" "),t.app.active?t._e():a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.enableButtonTooltip,expression:"enableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable",attrs:{type:"button",value:t.enableButtonText,disabled:!t.app.canInstall||t.installing||t.loading(t.app.id)},on:{click:function(e){e.stopPropagation(),t.enable(t.app.id)}}})])])};r._withStripped=!0;var o=s(321),l=s.n(o),c=function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"app-score-image",attrs:{src:this.scoreImage}})};c._withStripped=!0;var u={name:"appScore",props:["score"],computed:{scoreImage:function(){var t="rating/s"+Math.round(10*this.score)+".svg";return OC.imagePath("core",t)}}},d=s(49),g=Object(d.a)(u,c,[],!1,null,null,null);g.options.__file="src/components/appList/appScore.vue";var h=g.exports,v={mounted:function(){this.app.groups.length>0&&(this.groupCheckedAppsData=!0)},computed:{appGroups:function(){return this.app.groups.map(function(t){return{id:t,name:t}})},loading:function(){var t=this;return function(e){return t.$store.getters.loading(e)}},installing:function(){return this.$store.getters.loading("install")},enableButtonText:function(){return this.app.needsDownload?t("settings","Download and enable"):t("settings","Enable")},enableButtonTooltip:function(){return!!this.app.needsDownload&&t("settings","The app will be downloaded from the app store")}},methods:{asyncFindGroup:function(t){return this.$store.dispatch("getGroups",{search:t,limit:5,offset:0})},isLimitedToGroups:function(t){return!(!this.app.groups.length&&!this.groupCheckedAppsData)},setGroupLimit:function(){this.groupCheckedAppsData||this.$store.dispatch("enableApp",{appId:this.app.id,groups:[]})},canLimitToGroups:function(t){return!(t.types&&t.types.includes("filesystem")||t.types.includes("prelogin")||t.types.includes("authentication")||t.types.includes("logging")||t.types.includes("prevent_group_restriction"))},addGroupLimitation:function(t){var e=this.app.groups.concat([]).concat([t.id]);this.$store.dispatch("enableApp",{appId:this.app.id,groups:e})},removeGroupLimitation:function(t){var e=this.app.groups.concat([]),a=e.indexOf(t.id);a>-1&&e.splice(a,1),this.$store.dispatch("enableApp",{appId:this.app.id,groups:e})},enable:function(t){this.$store.dispatch("enableApp",{appId:t,groups:[]}).then(function(t){OC.Settings.Apps.rebuildNavigation()}).catch(function(t){OC.Notification.show(t)})},disable:function(t){this.$store.dispatch("disableApp",{appId:t}).then(function(t){OC.Settings.Apps.rebuildNavigation()}).catch(function(t){OC.Notification.show(t)})},remove:function(t){this.$store.dispatch("uninstallApp",{appId:t}).then(function(t){OC.Settings.Apps.rebuildNavigation()}).catch(function(t){OC.Notification.show(t)})},install:function(t){this.$store.dispatch("enableApp",{appId:t}).then(function(t){OC.Settings.Apps.rebuildNavigation()}).catch(function(t){OC.Notification.show(t)})},update:function(t){this.$store.dispatch("updateApp",{appId:t}).then(function(t){OC.Settings.Apps.rebuildNavigation()}).catch(function(t){OC.Notification.show(t)})}}},f=Object(d.a)(v,void 0,void 0,!1,null,null,null);f.options.__file="src/components/appManagement.vue";var m=f.exports,_={name:"svgFilterMixin",mounted:function(){this.filterId="invertIconApps"+Math.floor(100*Math.random())+(new Date).getSeconds()+(new Date).getMilliseconds()},computed:{filterUrl:function(){return"url(#".concat(this.filterId,")")}},data:function(){return{filterId:""}}},b=Object(d.a)(_,void 0,void 0,!1,null,null,null);b.options.__file="src/components/svgFilterMixin.vue";var y=b.exports,C={name:"appItem",mixins:[m,y],props:{app:{},category:{},listView:{type:Boolean,default:!0}},watch:{"$route.params.id":function(t){this.isSelected=this.app.id===t}},components:{Multiselect:l.a,AppScore:h},data:function(){return{isSelected:!1,scrolled:!1}},mounted:function(){this.isSelected=this.app.id===this.$route.params.id},computed:{},watchers:{},methods:{showAppDetails:function(t){"INPUT"!==t.currentTarget.tagName&&"A"!==t.currentTarget.tagName&&this.$router.push({name:"apps-details",params:{category:this.category,id:this.app.id}})},prefix:function(t,e){return t+"_"+e}}},w=Object(d.a)(C,r,[],!1,null,null,null);w.options.__file="src/components/appList/appItem.vue";var A=w.exports,k={name:"prefixMixin",methods:{prefix:function(t,e){return t+"_"+e}}},x=Object(d.a)(k,void 0,void 0,!1,null,null,null);x.options.__file="src/components/prefixMixin.vue";var D=x.exports,$={name:"appList",mixins:[D],props:["category","app","search"],components:{Multiselect:l.a,appItem:A},computed:{loading:function(){return this.$store.getters.loading("list")},apps:function(){var t=this,e=this.$store.getters.getAllApps.filter(function(e){return-1!==e.name.toLowerCase().search(t.search.toLowerCase())}).sort(function(t,e){var a=""+(t.active?0:1)+(t.update?0:1)+t.name,s=""+(e.active?0:1)+(e.update?0:1)+e.name;return OC.Util.naturalSortCompare(a,s)});return"installed"===this.category?e.filter(function(t){return t.installed}):"enabled"===this.category?e.filter(function(t){return t.active&&t.installed}):"disabled"===this.category?e.filter(function(t){return!t.active&&t.installed}):"app-bundles"===this.category?e.filter(function(t){return t.bundles}):"updates"===this.category?e.filter(function(t){return t.update}):e.filter(function(e){return e.appstore&&void 0!==e.category&&(e.category===t.category||e.category.indexOf(t.category)>-1)})},bundles:function(){return this.$store.getters.getServerData.bundles},bundleApps:function(){return function(t){return this.$store.getters.getAllApps.filter(function(e){return e.bundleId===t})}},searchApps:function(){var t=this;return""===this.search?[]:this.$store.getters.getAllApps.filter(function(e){return-1!==e.name.toLowerCase().search(t.search.toLowerCase())&&!t.apps.find(function(t){return t.id===e.id})})},useAppStoreView:function(){return!this.useListView&&!this.useBundleView},useListView:function(){return"installed"===this.category||"enabled"===this.category||"disabled"===this.category||"updates"===this.category},useBundleView:function(){return"app-bundles"===this.category},allBundlesEnabled:function(){var t=this;return function(e){return 0===t.bundleApps(e).filter(function(t){return!t.active}).length}},bundleToggleText:function(){var e=this;return function(a){return e.allBundlesEnabled(a)?t("settings","Disable all"):t("settings","Enable all")}}},methods:{toggleBundle:function(t){return this.allBundlesEnabled(t)?this.disableBundle(t):this.enableBundle(t)},enableBundle:function(t){var e=this.bundleApps(t).map(function(t){return t.id});this.$store.dispatch("enableApp",{appId:e,groups:[]}).catch(function(t){console.log(t),OC.Notification.show(t)})},disableBundle:function(t){var e=this.bundleApps(t).map(function(t){return t.id});this.$store.dispatch("disableApp",{appId:e,groups:[]}).catch(function(t){OC.Notification.show(t)})}}},S=Object(d.a)($,p,[],!1,null,null,null);S.options.__file="src/components/appList.vue";var O=S.exports,L=s(8),I=s(322),T=s.n(I),N=(s(1),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px"},attrs:{id:"app-details-view"}},[a("a",{staticClass:"close icon-close",attrs:{href:"#"},on:{click:t.hideAppDetails}},[a("span",{staticClass:"hidden-visually"},[t._v("Close")])]),t._v(" "),a("h2",[t.app.preview?t._e():a("div",{staticClass:"icon-settings-dark"}),t._v(" "),t.app.previewAsIcon&&t.app.preview?a("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"}},[a("defs",[a("filter",{attrs:{id:t.filterId}},[a("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}})],1)]),t._v(" "),a("image",{staticClass:"app-icon",attrs:{x:"0",y:"0",width:"32",height:"32",preserveAspectRatio:"xMinYMin meet",filter:t.filterUrl,"xlink:href":t.app.preview}})]):t._e(),t._v("\n\t\t"+t._s(t.app.name))]),t._v(" "),t.app.screenshot?a("img",{attrs:{src:t.app.screenshot,width:"100%"}}):t._e(),t._v(" "),200===t.app.level||t.hasRating?a("div",{staticClass:"app-level"},[200===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","Official apps are developed by and within the community. They offer central functionality and are ready for production use."),expression:"t('settings', 'Official apps are developed by and within the community. They offer central functionality and are ready for production use.')",modifiers:{auto:!0}}],staticClass:"official icon-checkmark"},[t._v("\n\t\t\t"+t._s(t.t("settings","Official")))]):t._e(),t._v(" "),t.hasRating?a("app-score",{attrs:{score:t.app.appstoreData.ratingOverall}}):t._e()],1):t._e(),t._v(" "),t.author?a("div",{staticClass:"app-author"},[t._v("\n\t\t"+t._s(t.t("settings","by"))+"\n\t\t"),t._l(t.author,function(e,s){return a("span",[e["@attributes"]&&e["@attributes"].homepage?a("a",{attrs:{href:e["@attributes"].homepage}},[t._v(t._s(e["@value"]))]):e["@value"]?a("span",[t._v(t._s(e["@value"]))]):a("span",[t._v(t._s(e))]),s+1<t.author.length?a("span",[t._v(", ")]):t._e()])})],2):t._e(),t._v(" "),t.licence?a("div",{staticClass:"app-licence"},[t._v(t._s(t.licence))]):t._e(),t._v(" "),a("div",{staticClass:"actions"},[a("div",{staticClass:"actions-buttons"},[t.app.update?a("input",{staticClass:"update primary",attrs:{type:"button",value:t.t("settings","Update to {version}",{version:t.app.update}),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){t.update(t.app.id)}}}):t._e(),t._v(" "),t.app.canUnInstall?a("input",{staticClass:"uninstall",attrs:{type:"button",value:t.t("settings","Remove"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){t.remove(t.app.id)}}}):t._e(),t._v(" "),t.app.active?a("input",{staticClass:"enable",attrs:{type:"button",value:t.t("settings","Disable"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){t.disable(t.app.id)}}}):t._e(),t._v(" "),t.app.active?t._e():a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.enableButtonTooltip,expression:"enableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable primary",attrs:{type:"button",value:t.enableButtonText,disabled:!t.app.canInstall||t.installing||t.loading(t.app.id)},on:{click:function(e){t.enable(t.app.id)}}})]),t._v(" "),a("div",{staticClass:"app-groups"},[t.app.active&&t.canLimitToGroups(t.app)?a("div",{staticClass:"groups-enable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.groupCheckedAppsData,expression:"groupCheckedAppsData"}],staticClass:"groups-enable__checkbox checkbox",attrs:{type:"checkbox",id:t.prefix("groups_enable",t.app.id)},domProps:{value:t.app.id,checked:Array.isArray(t.groupCheckedAppsData)?t._i(t.groupCheckedAppsData,t.app.id)>-1:t.groupCheckedAppsData},on:{change:[function(e){var a=t.groupCheckedAppsData,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=t.app.id,p=t._i(a,n);s.checked?p<0&&(t.groupCheckedAppsData=a.concat([n])):p>-1&&(t.groupCheckedAppsData=a.slice(0,p).concat(a.slice(p+1)))}else t.groupCheckedAppsData=i},t.setGroupLimit]}}),t._v(" "),a("label",{attrs:{for:t.prefix("groups_enable",t.app.id)}},[t._v(t._s(t.t("settings","Limit to groups")))]),t._v(" "),a("input",{staticClass:"group_select",attrs:{type:"hidden",title:t.t("settings","All"),value:""}}),t._v(" "),t.isLimitedToGroups(t.app)?a("multiselect",{staticClass:"multiselect-vue",attrs:{options:t.groups,value:t.appGroups,"options-limit":5,placeholder:t.t("settings","Limit app usage to groups"),label:"name","track-by":"id",multiple:!0,"close-on-select":!1},on:{select:t.addGroupLimitation,remove:t.removeGroupLimitation,"search-change":t.asyncFindGroup}},[a("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v(t._s(t.t("settings","No results")))])]):t._e()],1):t._e()])]),t._v(" "),a("p",{staticClass:"documentation"},[t.app.internal?t._e():a("a",{staticClass:"appslink",attrs:{href:t.appstoreUrl,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","View in store"))+" ↗")]),t._v(" "),t.app.website?a("a",{staticClass:"appslink",attrs:{href:t.app.website,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Visit website"))+" ↗")]):t._e(),t._v(" "),t.app.bugs?a("a",{staticClass:"appslink",attrs:{href:t.app.bugs,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Report a bug"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.user?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.user,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","User documentation"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.admin?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.admin,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Admin documentation"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.developer?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.developer,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Developer documentation"))+" ↗")]):t._e()]),t._v(" "),a("ul",{staticClass:"app-dependencies"},[t.app.missingMinOwnCloudVersion?a("li",[t._v(t._s(t.t("settings","This app has no minimum Nextcloud version assigned. This will be an error in the future.")))]):t._e(),t._v(" "),t.app.missingMaxOwnCloudVersion?a("li",[t._v(t._s(t.t("settings","This app has no maximum Nextcloud version assigned. This will be an error in the future.")))]):t._e(),t._v(" "),t.app.canInstall?t._e():a("li",[t._v("\n\t\t\t"+t._s(t.t("settings","This app cannot be installed because the following dependencies are not fulfilled:"))+"\n\t\t\t"),a("ul",{staticClass:"missing-dependencies"},t._l(t.app.missingDependencies,function(e){return a("li",[t._v(t._s(e))])}))])]),t._v(" "),a("div",{staticClass:"app-description",domProps:{innerHTML:t._s(t.renderMarkdown)}})])});N._withStripped=!0;var M={mixins:[m,D,y],name:"appDetails",props:["category","app"],components:{Multiselect:l.a,AppScore:h},data:function(){return{groupCheckedAppsData:!1}},mounted:function(){this.app.groups.length>0&&(this.groupCheckedAppsData=!0)},methods:{hideAppDetails:function(){this.$router.push({name:"apps-category",params:{category:this.category}})}},computed:{appstoreUrl:function(){return"https://apps.nextcloud.com/apps/".concat(this.app.id)},licence:function(){return this.app.licence?t("settings","{license}-licensed",{license:(""+this.app.licence).toUpperCase()}):null},hasRating:function(){return this.app.appstoreData&&this.app.appstoreData.ratingNumOverall>5},author:function(){return"string"==typeof this.app.author?[{"@value":this.app.author}]:this.app.author["@value"]?[this.app.author]:this.app.author},appGroups:function(){return this.app.groups.map(function(t){return{id:t,name:t}})},groups:function(){return this.$store.getters.getGroups.filter(function(t){return"disabled"!==t.id}).sort(function(t,e){return t.name.localeCompare(e.name)})},renderMarkdown:function(){var t=new window.marked.Renderer;return t.link=function(t,e,a){try{var s=decodeURIComponent(unescape(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return""}if(0!==s.indexOf("http:")&&0!==s.indexOf("https:"))return"";var i='<a href="'+t+'" rel="noreferrer noopener"';return e&&(i+=' title="'+e+'"'),i+=">"+a+"</a>"},t.image=function(t,e,a){return a||e},t.blockquote=function(t){return t},DOMPurify.sanitize(window.marked(this.app.description.trim(),{renderer:t,gfm:!1,highlight:!1,tables:!1,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),{SAFE_FOR_JQUERY:!0,ALLOWED_TAGS:["strong","p","a","ul","ol","li","em","del","blockquote"]})}}},B=Object(d.a)(M,N,[],!1,null,null,null);B.options.__file="src/components/appDetails.vue";var V=B.exports;L.default.use(T.a);var G={name:"Apps",props:{category:{type:String,default:"installed"},id:{type:String,default:""}},components:{AppDetails:V,AppNavigation:n.AppNavigation,appList:O},methods:{setSearch:function(t){this.searchQuery=t},resetSearch:function(){this.setSearch("")}},beforeMount:function(){this.$store.dispatch("getCategories"),this.$store.dispatch("getAllApps"),this.$store.dispatch("getGroups",{offset:0,limit:5}),this.$store.commit("setUpdateCount",this.$store.getters.getServerData.updateCount)},mounted:function(){this.appSearch=new OCA.Search(this.setSearch,this.resetSearch)},data:function(){return{searchQuery:""}},watch:{category:function(t,e){this.setSearch("")}},computed:{loading:function(){return this.$store.getters.loading("categories")},loadingList:function(){return this.$store.getters.loading("list")},currentApp:function(){var t=this;return this.apps.find(function(e){return e.id===t.id})},categories:function(){return this.$store.getters.getCategories},apps:function(){return this.$store.getters.getAllApps},updateCount:function(){return this.$store.getters.getUpdateCount},settings:function(){return this.$store.getters.getServerData},menu:function(){var e=this,a=this.$store.getters.getCategories;a=(a=Array.isArray(a)?a:[]).map(function(t){var e={};return e.id="app-category-"+t.ident,e.icon="icon-category-"+t.ident,e.classes=[],e.router={name:"apps-category",params:{category:t.ident}},e.text=t.displayName,e});var s=[{id:"app-category-your-apps",classes:[],router:{name:"apps"},icon:"icon-category-installed",text:t("settings","Your apps")},{id:"app-category-enabled",classes:[],icon:"icon-category-enabled",router:{name:"apps-category",params:{category:"enabled"}},text:t("settings","Active apps")},{id:"app-category-disabled",classes:[],icon:"icon-category-disabled",router:{name:"apps-category",params:{category:"disabled"}},text:t("settings","Disabled apps")}];if(!this.settings.appstoreEnabled)return{id:"appscategories",items:s};this.$store.getters.getUpdateCount>0&&s.push({id:"app-category-updates",classes:[],icon:"icon-download",router:{name:"apps-category",params:{category:"updates"}},text:t("settings","Updates"),utils:{counter:this.$store.getters.getUpdateCount}}),s.push({id:"app-category-app-bundles",classes:[],icon:"icon-category-app-bundles",router:{name:"apps-category",params:{category:"app-bundles"}},text:t("settings","App bundles")});var i=(a=s.concat(a)).findIndex(function(t){return t.id==="app-category-"+e.category});return i>=0?a[i].classes.push("active"):a[0].classes.push("active"),a.push({id:"app-developer-docs",classes:[],href:this.settings.developerDocumentation,text:t("settings","Developer documentation")+" ↗"}),{id:"appscategories",items:a,loading:this.loading}}}},U=Object(d.a)(G,i,[],!1,null,null,null);U.options.__file="src/views/Apps.vue";a.default=U.exports}}]);
//# sourceMappingURL=4.js.map