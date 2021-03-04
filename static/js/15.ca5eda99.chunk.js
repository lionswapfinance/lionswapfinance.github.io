(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{904:function(e,t,n){"use strict";var r=n(32),c=n(48),a=n(2),s=n.n(a),i=n(5),o=n(17),l=n(16),u=n(53),d=n(0),b=n(140),j=n(139),f=Object(b.c)(),p={isLoading:!0,nfts:{},lastUpdated:Date.now()},O=function(e,t){switch(t.type){case"set_nfts":return Object(l.a)(Object(l.a)({},p),{},{isLoading:!1,nfts:t.data});case"refresh":return Object(l.a)(Object(l.a)({},p),{},{lastUpdated:t.timestamp});case"reset":return Object(l.a)(Object(l.a)({},p),{},{isLoading:!1});default:return e}};t.a=function(){var e=Object(d.useReducer)(O,p),t=Object(o.a)(e,2),n=t[0],a=t[1],b=Object(u.j)().account,h=n.lastUpdated;Object(d.useEffect)((function(){b&&function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,u,d,p,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.methods.balanceOf(b).call();case 3:if(!((t=e.sent)>0)){e.next=16;break}for(n={},u=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c,a,i,l,u,d,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.methods,r=n.tokenOfOwnerByIndex,c=n.getBunnyId,a=n.tokenURI,e.next=4,r(b,t).call();case 4:return i=e.sent,e.next=7,Object(j.a)([c(i).call,a(i).call]);case 7:return l=e.sent,u=Object(o.a)(l,2),d=u[0],p=u[1],e.abrupt("return",[Number(d),Number(i),p]);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),d=[],p=0;p<t;p++)d.push(u(p));return e.next=11,Promise.all(d);case 11:O=e.sent,n=O.reduce((function(e,t){if(!t)return e;var n=Object(o.a)(t,3),a=n[0],s=n[1],i=n[2];return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},a,{tokenUri:i,tokenIds:e[a]?[].concat(Object(c.a)(e[a].tokenIds),[s]):[s]}))}),{}),a({type:"set_nfts",data:n}),e.next=17;break;case 16:a({type:"reset"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"reset"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[b,h,a]);return Object(l.a)(Object(l.a)({},n),{},{refresh:function(){return a({type:"refresh",timestamp:Date.now()})}})}},944:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,l,u,d,b,j,f,p,O,h,x=n(14),m=n(0),v=n(3),g=n(10),y=n(38),k=n(137),w=n(2),C=n.n(w),I=n(32),S=n(16),T=n(5),F=n(17),N=n(159),U=n.n(N),W=n(122),D=n(53),A=n(140),P=n(904),E=n(139),V=n(58),J=v.e.div(r||(r=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),_=n(96),L=n.n(_),R=n(39),z=n(1),B=Object(v.e)(g.V)(c||(c=Object(x.a)(["\n  font-weight: 600;\n"]))),Q=v.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Y=v.e.div(s||(s=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),q=v.e.label(i||(i=Object(x.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),G=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),s=Object(F.a)(a,2),i=s[0],o=s[1],l=Object(m.useState)(""),u=Object(F.a)(l,2),d=u[0],b=u[1],j=Object(m.useState)(null),f=Object(F.a)(j,2),p=f[0],O=f[1],h=Object(y.a)(),x=Object(D.j)().account,v=Object(R.j)(),k=Object(V.p)().toastSuccess,w=function(){var e=Object(T.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(d)){e.next=6;break}O(h(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,v.methods.transferFrom(x,d,n[0]).send({from:x}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r(),k("NFT successfully transferred!")})).on("error",(function(){console.error(p),O("Unable to transfer NFT"),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.J,{title:h(999,"Transfer NFT"),onDismiss:c,children:[Object(z.jsxs)(Q,{children:[p&&Object(z.jsx)(g.V,{color:"failure",mb:"8px",children:p}),Object(z.jsxs)(J,{children:[Object(z.jsxs)(g.V,{children:[h(999,"Transferring"),":"]}),Object(z.jsx)(B,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(z.jsxs)(q,{htmlFor:"transferAddress",children:[h(999,"Receiving address"),":"]}),Object(z.jsx)(g.D,{id:"transferAddress",name:"address",type:"text",placeholder:h(999,"Paste address"),value:d,onChange:function(e){var t=e.target.value;b(t)},isWarning:p,disabled:i})]}),Object(z.jsxs)(Y,{children:[Object(z.jsx)(g.i,{fullWidth:!0,variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(z.jsx)(g.i,{fullWidth:!0,onClick:w,disabled:!x||i||!d,children:h(464,"Confirm")})]})]})},H=v.e.div(o||(o=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),K=v.e.div(l||(l=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),M=function(e){var t=e.nft,n=e.onSuccess,r=e.onDismiss,c=Object(m.useState)(!1),a=Object(F.a)(c,2),s=a[0],i=a[1],o=Object(y.a)(),l=Object(D.j)().account,u=Object(V.p)(),d=u.toastError,b=u.toastSuccess,j=Object(R.c)(),f=function(){var e=Object(T.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.methods.mintNFT(t.bunnyId).send({from:l}).on("sending",(function(){i(!0)})).on("receipt",(function(){b("Successfully claimed!"),r(),n()})).on("error",(function(e){console.error("Unable to claim NFT",e),d("Error","Unable to claim NFT, please try again."),i(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.J,{title:o(999,"Claim Collectible"),onDismiss:r,children:[Object(z.jsx)(H,{children:Object(z.jsxs)(g.z,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(z.jsxs)(g.V,{children:[o(626,"You will receive"),":"]}),Object(z.jsx)(g.V,{bold:!0,children:'1x "'.concat(t.name,'" Collectible')})]})}),Object(z.jsxs)(K,{children:[Object(z.jsx)(g.i,{fullWidth:!0,variant:"secondary",onClick:r,children:o(462,"Cancel")}),Object(z.jsx)(g.i,{fullWidth:!0,onClick:f,disabled:!l||s,children:o(464,"Confirm")})]})]})},X=v.e.div(u||(u=Object(x.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Z=v.e.img(d||(d=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),$=v.e.video(b||(b=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ee=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,s=t.video,i="/images/nfts/".concat(c.lg);if(s){var o=Object(z.jsxs)($,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:i,children:[Object(z.jsx)("source",{src:s.webm,type:"video/webm"}),Object(z.jsx)("source",{src:s.mp4,type:"video/mp4"})]});return r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(z.jsx)(Z,{src:i,alt:a});return Object(z.jsx)(X,{children:r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},te=Object(v.e)(J)(j||(j=Object(x.a)(["\n  min-height: 28px;\n"]))),ne=Object(v.e)(g.i).attrs({variant:"text",fullWidth:!0})(f||(f=Object(x.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),re=v.e.div(p||(p=Object(x.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,r=e.onSuccess,c=e.canClaim,a=void 0!==c&&c,s=e.tokenIds,i=void 0===s?[]:s,o=Object(m.useState)(!1),l=Object(F.a)(o,2),u=l[0],d=l[1],b=Object(y.a)(),j=Object(V.m)().profile,f=n.bunnyId,p=n.name,O=n.description,h=i.length>0,x=u?g.x:g.u,v=function(){var e=Object(T.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!u);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(g.gb)(Object(z.jsx)(G,{nft:n,tokenIds:i,onSuccess:r})),w=Object(F.a)(k,1)[0],I=Object(g.gb)(Object(z.jsx)(M,{nft:n,onSuccess:r})),S=Object(F.a)(I,1)[0];return Object(z.jsxs)(g.m,{isActive:h||a,children:[Object(z.jsx)(ee,{nft:n,isOwned:h}),Object(z.jsxs)(g.n,{children:[Object(z.jsxs)(te,{children:[Object(z.jsx)(g.A,{children:p}),h&&Object(z.jsx)(g.U,{outline:!0,variant:"secondary",children:b(999,"In Wallet")}),(null===j||void 0===j||null===(t=j.nft)||void 0===t?void 0:t.bunnyId)===f&&Object(z.jsx)(g.U,{outline:!0,variant:"success",children:b(999,"Profile Pic")})]}),a&&Object(z.jsx)(g.i,{fullWidth:!0,mt:"24px",onClick:S,children:b(999,"Claim this NFT")}),h&&Object(z.jsx)(g.i,{fullWidth:!0,variant:"secondary",mt:"24px",onClick:w,children:b(999,"Transfer")})]}),Object(z.jsxs)(g.o,{p:"0",children:[Object(z.jsx)(ne,{endIcon:Object(z.jsx)(x,{width:"24px",color:"primary"}),onClick:v,children:b(658,"Details")}),u&&Object(z.jsx)(re,{children:Object(z.jsx)(g.V,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:O})})]})]})},ae=v.e.div(O||(O=Object(x.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),se=Object(A.b)(),ie=function(){var e=Object(m.useState)({}),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(P.a)(),a=c.nfts,s=c.refresh,i=Object(D.j)().account,o=Object(V.p)().toastError,l=Object(m.useCallback)(function(){var e=Object(T.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.a)(W.a.map((function(e){return se.methods.canClaimSingle(t,e.bunnyId).call})));case 3:n=e.sent,r(n.reduce((function(e,t,n){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},W.a[n].bunnyId,t))}),{})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o("Error checking NFT claimable status");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[r,o]),u=function(){s(),l(i)};return Object(m.useEffect)((function(){i&&l(i)}),[i,l]),Object(z.jsx)(ae,{children:U()(W.a,"sortOrder").map((function(e){var t=a[e.bunnyId]?a[e.bunnyId].tokenIds:[];return Object(z.jsx)("div",{children:Object(z.jsx)(ce,{nft:e,canClaim:n[e.bunnyId],tokenIds:t,onSuccess:u})},e.name)}))})},oe=v.e.div(h||(h=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(y.a)();return Object(z.jsxs)(k.a,{children:[Object(z.jsx)(oe,{children:Object(z.jsx)(g.A,{as:"h1",size:"xxl",color:"secondary",children:e(999,"Pancake Collectibles")})}),Object(z.jsx)(ie,{})]})}}}]);
//# sourceMappingURL=15.ca5eda99.chunk.js.map