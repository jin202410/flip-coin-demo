"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{70672:function(e,t,s){s.d(t,{AV:function(){return a},ConfigCtrl:function(){return g},ExplorerCtrl:function(){return T},OptionsCtrl:function(){return u},ThemeCtrl:function(){return K},ToastCtrl:function(){return z},jb:function(){return S},uA:function(){return c},zv:function(){return r}});var n=s(17832),i=s(48764).Buffer;let o=(0,n.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),a={state:o,subscribe:e=>(0,n.Ld)(o,()=>e(o)),push(e,t){e!==o.view&&(o.view=e,t&&(o.data=t),o.history.push(e))},reset(e){o.view=e,o.history=[e]},replace(e){o.history.length>1&&(o.history[o.history.length-1]=e,o.view=e)},goBack(){if(o.history.length>1){o.history.pop();let[e]=o.history.slice(-1);o.view=e}},setData(e){o.data=e}},r={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>r.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return r.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,isTelegram:()=>"undefined"!=typeof window&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto),formatNativeUrl(e,t,s){if(r.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);let i=encodeURIComponent(t);return`${n}wc?uri=${i}`},formatUniversalUrl(e,t,s){if(!r.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){let e=i.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);let o=new URL(n);return o.searchParams.set("startapp",e),o.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);let o=encodeURIComponent(t);return`${n}wc?uri=${o}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){let s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(e){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch(e){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(r.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"undefined"!=typeof localStorage&&localStorage.setItem(r.WCM_VERSION,"2.7.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=a.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},l="undefined"!=typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),d=(0,n.sj)({enabled:l,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:d,subscribe:e=>(0,n.Ld)(d.events,()=>e((0,n.CO)(d.events[d.events.length-1]))),initialize(){d.enabled&&void 0!==(null==crypto?void 0:crypto.randomUUID)&&(d.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){d.connectedWalletId=e},click(e){if(d.enabled){let t={type:"CLICK",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}},track(e){if(d.enabled){let t={type:"TRACK",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}},view(e){if(d.enabled){let t={type:"VIEW",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}}},p=(0,n.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),u={state:p,subscribe:e=>(0,n.Ld)(p,()=>e(p)),setChains(e){p.chains=e},setWalletConnectUri(e){p.walletConnectUri=e},setIsCustomDesktop(e){p.isCustomDesktop=e},setIsCustomMobile(e){p.isCustomMobile=e},setIsDataLoaded(e){p.isDataLoaded=e},setIsUiLoaded(e){p.isUiLoaded=e},setIsAuth(e){p.isAuth=e}},m=(0,n.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),g={state:m,subscribe:e=>(0,n.Ld)(m,()=>e(m)),setConfig(e){var t,s;c.initialize(),u.setChains(e.chains),u.setIsAuth(!!e.enableAuthMode),u.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),u.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),r.setModalVersionInStorage(),Object.assign(m,e)}};var h=Object.defineProperty,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,C=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))f.call(t,s)&&C(e,s,t[s]);if(b)for(var s of b(t))v.call(t,s)&&C(e,s,t[s]);return e};let I="https://explorer-api.walletconnect.com",y="js-2.7.0";async function L(e,t){let s=w({sdkType:"wcm",sdkVersion:y},t),n=new URL(e,I);return n.searchParams.append("projectId",g.state.projectId),Object.entries(s).forEach(([e,t])=>{t&&n.searchParams.append(e,String(t))}),(await fetch(n)).json()}let W={getDesktopListings:async e=>L("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>L("/w3m/v1/getMobileListings",e),getAllListings:async e=>L("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${I}/w3m/v1/getWalletImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${y}`,getAssetImageUrl:e=>`${I}/w3m/v1/getAssetImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${y}`};var O=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,k=(e,t)=>{for(var s in t||(t={}))j.call(t,s)&&U(e,s,t[s]);if(E)for(var s of E(t))A.call(t,s)&&U(e,s,t[s]);return e};let M=r.isMobile(),D=(0,n.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),T={state:D,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=g.state;if("NONE"===e||"ALL"===t&&!e)return D.recomendedWallets;if(r.isArray(e)){let t=e.join(","),{listings:s}=await W.getAllListings({recommendedIds:t}),n=Object.values(s);n.sort((t,s)=>e.indexOf(t.id)-e.indexOf(s.id)),D.recomendedWallets=n}else{let{chains:e,isAuth:s}=u.state,n=null==e?void 0:e.join(","),i=r.isArray(t),o={page:1,sdks:s?"auth_v1":void 0,entries:r.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:i?t.join(","):void 0},{listings:a}=M?await W.getMobileListings(o):await W.getDesktopListings(o);D.recomendedWallets=Object.values(a)}return D.recomendedWallets},async getWallets(e){let t=k({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=g.state,{recomendedWallets:i}=D;if("ALL"===n)return D.wallets;i.length?t.excludedIds=i.map(e=>e.id).join(","):r.isArray(s)&&(t.excludedIds=s.join(",")),r.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),u.state.isAuth&&(t.sdks="auth_v1");let{page:o,search:a}=e,{listings:l,total:d}=M?await W.getMobileListings(t):await W.getDesktopListings(t),c=Object.values(l),p=a?"search":"wallets";return D[p]={listings:[...D[p].listings,...c],total:d,page:null!=o?o:1},{listings:c,total:d}},getWalletImageUrl:e=>W.getWalletImageUrl(e),getAssetImageUrl:e=>W.getAssetImageUrl(e),resetSearch(){D.search={listings:[],total:0,page:1}}},N=(0,n.sj)({open:!1}),S={state:N,subscribe:e=>(0,n.Ld)(N,()=>e(N)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:n}=u.state;if(r.removeWalletConnectDeepLink(),u.setWalletConnectUri(null==e?void 0:e.uri),u.setChains(null==e?void 0:e.chains),a.reset("ConnectWallet"),s&&n)N.open=!0,t();else{let e=setInterval(()=>{let s=u.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),N.open=!0,t())},200)}}),close(){N.open=!1}};var P=Object.defineProperty,_=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,V=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&R(e,s,t[s]);if(_)for(var s of _(t))$.call(t,s)&&R(e,s,t[s]);return e};let H=(0,n.sj)({themeMode:"undefined"!=typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),K={state:H,subscribe:e=>(0,n.Ld)(H,()=>e(H)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(H.themeMode=t),s&&(H.themeVariables=V({},s))}},B=(0,n.sj)({open:!1,message:"",variant:"success"}),z={state:B,subscribe:e=>(0,n.Ld)(B,()=>e(B)),openToast(e,t){B.open=!0,B.message=e,B.variant=t},closeToast(){B.open=!1}}},59343:function(e,t,s){s.d(t,{WalletConnectModal:function(){return i}});var n=s(70672);class i{constructor(e){this.openModal=n.jb.open,this.closeModal=n.jb.close,this.subscribeModal=n.jb.subscribe,this.setTheme=n.ThemeCtrl.setThemeConfig,n.ThemeCtrl.setThemeConfig(e),n.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("undefined"!=typeof window){await s.e(391).then(s.bind(s,41391));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),n.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);