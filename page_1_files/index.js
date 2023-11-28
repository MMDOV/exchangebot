import { a as ae } from '../../../index.js';
import { n } from '../../../create.js';
import { n as n$1 } from '../../../util.js';
import '../../../transframe-provider.js';

var o=class{},a=new class extends o{getPageInfo(){return {title:document.title,url:window.location.href,contentPageId:"",contentPageOwnerRef:"",site:"genericSite",contentPageType:"url",data:{}}}},i=/[a-zA-Z0-9]+/,r=new class extends o{getPageInfo(){let e,t,n;if("player.twitch.tv"===window.location.hostname.replace(/^www\./,"")){e="twitchEmbed";let o=new URLSearchParams(window.location.search),a=Object.fromEntries(o.entries());n=a.channel,t=a.channel;}else {e="twitch";let o=window.location.pathname.match(i)?.[0];t=o||"",n=o||"";}return {title:document.title,url:window.location.href,contentPageType:e,contentPageId:n,contentPageOwnerRef:t,site:"twitch",data:{}}}},c={genericSite:a,twitch:r,youtube:new class extends o{getPageInfo(){let e,t=document.querySelector("ytd-app")?.data?.playerResponse?.videoDetails??document.querySelector("ytd-page-manager")?.data?.playerResponse?.videoDetails??document.querySelector("ytm-app")?.data?.playerResponse?.videoDetails;return e=t?.isLiveContent?t.isLive?"youtubeLiveNow":t.isUpcoming?"youtubeLiveUpcoming":"youtubeLiveVod":"youtubeVideo",{title:t?.title||document.title,url:window.location.href,contentPageType:e,contentPageId:t?.videoId||"",contentPageOwnerRef:t?.channelId||"",site:"youtube",data:{}}}}};function s(){let e=function(e=window.location.href){switch(new URL(e).hostname.replace(/^www\./,"")){case"twitch.tv":case"player.twitch.tv":return "twitch";case"youtube.com":case"m.youtube.com":return "youtube";default:return "genericSite"}}();return c[e].getPageInfo()}var l=ae(),u=()=>{l.set(s());},d=()=>{let e=document.querySelector("body");if(!e)return console.error("body not found");let t=function(e,t=200){let n;return (...o)=>{clearTimeout(n),n=setTimeout((()=>e(...o)),t);}}(u,100);new MutationObserver(t).observe(e,{childList:!0,subtree:!0});};["interactive","complete"].includes(document.readyState)?d():window.addEventListener("DOMContentLoaded",d),setInterval(u,3e3);const w=[];l.onChange((({value:e})=>{w.forEach((t=>t(e)));}));n({namespace:"truffle-injected-api-v1",api:{pageInfoGet:(e,t)=>(t&&w.push(t),l.get())},strictMode:!0}).registerFrame(n$1(window));