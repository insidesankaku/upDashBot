import{a as m,o as n,b as r,e as t,t as l,F as f,r as p,f as _,h as u,i as S,p as g,j as b,c as $,k as I}from"./entry.f9e5b94e.js";function k(e){if(typeof e!="string")return;let a=new Date(e).getTime(),d=Math.floor((new Date-a)/1e3),o=d/31536e3;return o>1?Math.floor(o)+" years":(o=d/2592e3,o>1?Math.floor(o)+" months":(o=d/86400,o>1?Math.floor(o)+" days":(o=d/3600,o>1?Math.floor(o)+" hours":(o=d/60,o>1?Math.floor(o)+" minutes":Math.floor(d)+" seconds"))))}const C={props:{chatId:{type:String,default:null}},data(){return{room:null}},computed:{messages(){return this.room.stories.edges},shortSenderName(){const e=this.room.roomName;return`${e.split(" ")[0]} ${e.split(" ")[1][0]}.`}},methods:{goBack(){this.$emit("goBack",!0)},getTimeSince(e){return k(e)}},mounted(){fetch("https://8d0e-78-162-150-126.ngrok-free.app/rooms/"+this.chatId+"/stories?"+new URLSearchParams({token:"Bearer oauth2v2_4ebae8c9336ae72076a77e30788c4be4"}),{method:"GET",headers:{"ngrok-skip-browser-warning":!0}}).then(e=>e.json()).then(e=>{var a;return this.room=(a=e==null?void 0:e.data)==null?void 0:a.room}).catch(e=>console.error(e))}},v=e=>(g("data-v-2ef39f0f"),e=e(),b(),e),N={key:0,class:"col-md-6 col-lg-7 col-xl-8"},B={class:"list-unstyled"},T={class:"font-weight-bold mb-3 text-center text-lg-start"},M=["src"],L={key:1,class:"card"},U={class:"card-header d-flex justify-content-between p-3"},j={class:"fw-bold mb-0 margin-right-5"},D={class:"text-muted small mb-0"},E=v(()=>t("i",{class:"far fa-clock"},null,-1)),G={class:"card-body"},V={class:"mb-0"},A={key:2,class:"card w-100"},R={class:"card-header d-flex justify-content-between p-3"},F={class:"fw-bold mb-0"},P={class:"text-muted small mb-0 margin-right-5"},q=v(()=>t("i",{class:"far fa-clock"},null,-1)),z={class:"card-body"},H={class:"mb-0"},J=["src"],K=S('<li class="bg-white mb-3" data-v-2ef39f0f><div class="form-outline" data-v-2ef39f0f><textarea class="form-control" id="textAreaExample2" rows="4" data-v-2ef39f0f></textarea><label class="form-label" for="textAreaExample2" data-v-2ef39f0f>Message</label></div></li><button type="button" class="btn btn-primary btn-rounded float-end" data-v-2ef39f0f> Send </button>',2),Q={key:1,id:"loading"};function W(e,a,d,o,i,c){return i.room?(n(),r("div",N,[t("button",{class:"btn btn-info back-btn",onClick:a[0]||(a[0]=s=>c.goBack())},"Back"),t("ul",B,[t("h5",T,l(i.room.roomName),1),(n(!0),r(f,null,p(c.messages,s=>(n(),r("li",{class:"d-flex justify-content-between mb-4",key:s.node.id},[c.shortSenderName===s.node.user.name?(n(),r("img",{key:0,src:s.node.user.photoUrl,alt:"avatar",class:"rounded-circle d-flex align-self-start me-3 shadow-1-strong",width:"60"},null,8,M)):_("",!0),c.shortSenderName===s.node.user.name?(n(),r("div",L,[t("div",U,[t("p",j,l(s.node.user.name),1),t("p",D,[E,u(" "+l(c.getTimeSince(s.node.createdDateTime))+" ago ",1)])]),t("div",G,[t("p",V,l(s.node.message),1)])])):_("",!0),c.shortSenderName!==s.node.user.name?(n(),r("div",A,[t("div",R,[t("p",F,l(s.node.user.name),1),t("p",P,[q,u(" "+l(c.getTimeSince(s.node.createdDateTime))+" ago ",1)])]),t("div",z,[t("p",H,l(s.node.message),1)])])):_("",!0),c.shortSenderName!==s.node.user.name?(n(),r("img",{key:3,src:s.node.user.photoUrl,alt:"avatar",class:"rounded-circle d-flex align-self-start ms-3 shadow-1-strong",width:"60"},null,8,J)):_("",!0)]))),128)),K])])):(n(),r("div",Q))}const w=m(C,[["render",W],["__scopeId","data-v-2ef39f0f"]]);const X={components:{chat:w},data(){return{selectedChatId:null,list:null}},mounted(){fetch("https://8d0e-78-162-150-126.ngrok-free.app/rooms?"+new URLSearchParams({token:"Bearer oauth2v2_4ebae8c9336ae72076a77e30788c4be4"}),{method:"GET",headers:{"ngrok-skip-browser-warning":!0}}).then(e=>e.json()).then(e=>{var a,d;return this.list=(d=(a=e==null?void 0:e.data)==null?void 0:a.roomList)==null?void 0:d.edges}).catch(e=>console.error(e))},methods:{getTimeSince(e){return k(e)},openChat(e){this.selectedChatId=e},clearSelectedChatId(){this.selectedChatId=null},truncateMessage(e="",a=50){return e.length>a?`${e.substring(0,a)}…`:e}}},x=e=>(g("data-v-6478528f"),e=e(),b(),e),Z={class:"container py-5"},Y={key:0,id:"loading"},O={key:1,class:"row"},ee={class:"col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0"},te=x(()=>t("h5",{class:"font-weight-bold mb-3 text-center text-lg-start"},[t("img",{class:"up-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png",alt:"upwork-logo"})],-1)),se={class:"list-unstyled mb-0"},oe=["onClick"],ae={href:"#!",class:"d-flex justify-content-between"},ne={class:"d-flex flex-row"},ce=x(()=>t("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WKLL_EXzfrLt6V_ZHhmge50SCp_4MGRUgeyJyt0&s",alt:"avatar",class:"rounded-circle d-flex align-self-center me-3 shadow-1-strong",width:"60"},null,-1)),re={class:"pt-1"},de={class:"fw-bold mb-0"},le={class:"small text-muted"},ie={class:"pt-1"},_e={class:"small text-muted mb-1 width-50"};function he(e,a,d,o,i,c){const s=w;return n(),r("div",Z,[i.list?_("",!0):(n(),r("div",Y)),i.selectedChatId?_("",!0):(n(),r("div",O,[t("div",ee,[te,t("ul",se,[(n(!0),r(f,null,p(i.list,h=>(n(),r("li",{key:h.id,class:"p-2 border-bottom up-chat-item",onClick:fe=>c.openChat(h.node.id)},[t("a",ae,[t("div",ne,[ce,t("div",re,[t("p",de,l(h.node.roomName),1),t("p",le,l(c.truncateMessage(h.node.latestStory.message)),1)])]),t("div",ie,[t("p",_e,l(c.getTimeSince(h.node.latestStory.createdDateTime)),1)])])],8,oe))),128))])])])),i.selectedChatId?(n(),$(s,{key:2,chatId:i.selectedChatId,onGoBack:c.clearSelectedChatId},null,8,["chatId","onGoBack"])):_("",!0)])}const y=m(X,[["render",he],["__scopeId","data-v-6478528f"]]),me={components:{chatList:y}};function ue(e,a,d,o,i,c){const s=y;return n(),r("main",null,[I(s)])}const ge=m(me,[["render",ue]]);export{ge as default};