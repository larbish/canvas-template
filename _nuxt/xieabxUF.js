import{M as q,u as v,a8 as d,r as _,a9 as O,aa as x,ab as M,b as R,U as T,ac as D,B,D as b,R as I,ad as E}from"./CeObpGmG.js";const H=a=>a==="defer"||a===!1;function z(...a){var p;const r=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(r);let[t,f,e={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=v(),P=f,w=()=>d.value,C=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];e.server=e.server??!0,e.default=e.default??w,e.getCachedData=e.getCachedData??C,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??d.deep,e.dedupe=e.dedupe??"cancel";const g=e.getCachedData(t,s),m=g!=null;if(!s._asyncData[t]||!e.immediate){(p=s.payload._errors)[t]??(p[t]=d.errorValue);const o=e.deep?_:O;s._asyncData[t]={data:o(m?g:e.default()),pending:_(!m),error:x(s.payload._errors,t),status:_("idle"),_default:e.default}}const n={...s._asyncData[t]};delete n._default,n.refresh=n.execute=(o={})=>{if(s._asyncDataPromises[t]){if(H(o.dedupe??e.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(o._initial||s.isHydrating&&o._initial!==!1){const c=o._initial?g:e.getCachedData(t,s);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(P(s))}catch(u){i(u)}}).then(async c=>{if(l.cancelled)return s._asyncDataPromises[t];let i=c;e.transform&&(i=await e.transform(c)),e.pick&&(i=V(i,e.pick)),s.payload.data[t]=i,n.data.value=i,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return s._asyncDataPromises[t];n.error.value=B(c),n.data.value=b(e.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=l,s._asyncDataPromises[t]},n.clear=()=>N(s,t);const j=()=>n.refresh({_initial:!0}),y=e.server!==!1&&s.payload.serverRendered;{const o=I();if(o&&y&&e.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;M(()=>{i.forEach(u=>{u()}),i.splice(0,i.length)}),R(()=>i.splice(0,i.length))}y&&s.isHydrating&&(n.error.value||g!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(j):e.immediate&&j();const l=E();if(e.watch){const i=T(e.watch,()=>n.refresh());l&&D(i)}const c=s.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await n.refresh()});l&&D(c)}const h=Promise.resolve(s._asyncDataPromises[t]).then(()=>n);return Object.assign(h,n),h}async function S(a){await new Promise(t=>q(t)),await v().hooks.callHookParallel("app:data:refresh",void 0)}function N(a,r){r in a.payload.data&&(a.payload.data[r]=void 0),r in a.payload._errors&&(a.payload._errors[r]=d.errorValue),a._asyncData[r]&&(a._asyncData[r].data.value=b(a._asyncData[r]._default()),a._asyncData[r].error.value=d.errorValue,a._asyncData[r].pending.value=!1,a._asyncData[r].status.value="idle"),r in a._asyncDataPromises&&(a._asyncDataPromises[r]&&(a._asyncDataPromises[r].cancelled=!0),a._asyncDataPromises[r]=void 0)}function V(a,r){const t={};for(const f of r)t[f]=a[f];return t}const Q={content_en:"eFmz5HectB",content_fr:"TuxjlsC1nl",articles_en:"ZGoVpqtfyT",articles_fr:"WuTEnWTMVN",projects_en:"L266sP6Ro0",projects_fr:"QJmvEMWfIo",stack:"NITkdAf1ca",faq_en:"qek0YuRaRL",faq_fr:"5ljZw085zU"},U={content_en:"_content_content_en",content_fr:"_content_content_fr",articles_en:"_content_articles_en",articles_fr:"_content_articles_fr",projects_en:"_content_projects_en",projects_fr:"_content_projects_fr",stack:"_content_stack",faq_en:"_content_faq_en",faq_fr:"_content_faq_fr",info:"_content_info"},W={content_en:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},content_fr:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},articles_en:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},articles_fr:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},projects_en:{fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},projects_fr:{fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},stack:{fields:{id:"string",stem:"string",extension:"string",meta:"json",items:"json"}},faq_en:{fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},faq_fr:{fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},info:{fields:{}}};export{W as a,Q as c,S as r,U as t,z as u};
