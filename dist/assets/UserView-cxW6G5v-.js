import{w,d as V,u as S,r as p,o as I,g as h,a as i,c as l,b as r,F as k,e as y,p as P,f as $,h as v,_ as b,i as N,j as C,k as x,t as g,l as f}from"./index-CxkpxSSt.js";import{C as F,R as B,_ as R,a as U}from"./OriginalList.vue_vue_type_script_setup_true_lang-D-FYRVre.js";import"./index-7KchTkva.js";const E=w(F),K=w(B),D=s=>(P("data-v-f7cf03fb"),s=s(),$(),s),O=D(()=>v("h3",null,"POSTS",-1)),W={key:0},j=["id"],z={key:1},L=V({__name:"VKPostView",setup(s){const u=S(),t=p([]),o=p(1),d=p(0);I(async()=>{const e=await h(Number(u.params.id),{count:5,offset:0});t.value=e.items,d.value=e.count,n()});const a=async(e,_)=>{const m=await h(Number(u.params.id),{count:5,offset:(e-1)*_});t.value=m.items,n()},n=()=>{t.value.forEach(e=>{VK.Widgets.Post(`vk_post_${e.owner_id}_${e.id}`,e.owner_id,e.id,e.hash)})};return(e,_)=>{const m=R;return i(),l("div",null,[O,r(m,{class:"pagination",modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=c=>o.value=c),"page-size":5,total:d.value,onChange:a},null,8,["modelValue","total"]),t.value.length?(i(),l("div",W,[(i(!0),l(k,null,y(t.value,c=>(i(),l("div",{key:c.id,id:`vk_post_${c.owner_id}_${c.id}`},null,8,j))),128))])):(i(),l("div",z,"No posts"))])}}}),M=b(L,[["__scopeId","data-v-f7cf03fb"]]),T=s=>(P("data-v-47903b16"),s=s(),$(),s),q=T(()=>v("h3",null,"FRIENDS",-1)),A=V({__name:"UserView",setup(s){const u=N(),t=S(),o=p({});I(async()=>{const a=await C(t.params.id);o.value=a[0]});const d=x(()=>u.friends.filter(a=>{var n;return(n=a.friend_list)==null?void 0:n.includes(Number(t.params.id))}));return(a,n)=>{const e=E,_=K;return i(),l("main",null,[v("div",null,g(o.value.first_name)+" "+g(o.value.last_name),1),r(_,null,{default:f(()=>[r(e,{span:8},{default:f(()=>[q,r(U,{list:d.value},null,8,["list"])]),_:1}),r(e,{span:16},{default:f(()=>[r(M)]),_:1})]),_:1})])}}}),Q=b(A,[["__scopeId","data-v-47903b16"]]);export{Q as default};