import{d,g as x,p as f,o as _,c as p,e,m as s,b as n,w as a,B as c,I as b,x as w,R as h}from"./index-AcH1-M5x.js";const g={class:"w-full h-full p-8 flex flex-col justify-center items-center"},v={class:"border border-resolution-blue rounded-2xl overflow-x-hidden flex flex-col items-center justify-center gap-4 p-4"},L=e("legend",{class:"text-3xl text-resolution-blue"},"Configuración",-1),C={class:"flex flex-col gap-1 w-full"},y=e("label",{class:"text-xl text-resolution-blue"},"Tiempo de previsualización",-1),D=["value"],G={class:"flex flex-col gap-1 w-full"},N=e("label",{class:"text-xl text-resolution-blue"},"Tiempo limite de juego",-1),k=["value"],B={class:"flex flex-col gap-1 w-full"},V=e("label",{class:"text-xl text-resolution-blue"},"Limite de intentos",-1),j=["value"],S={class:"flex flex-col gap-1 w-full"},T={class:"flex flex-col gap-1 w-full"},M=e("span",{class:"text-nowrap"},"Volver",-1),R=e("span",{class:"hidden sm:inline"}," al inicio",-1),F=d({__name:"ConfigView",setup(z){const t=x(),m=i=>{const l=new FormData(i.target),o=Number(l.get("startGameCountDown")),u=Number(l.get("timeLimit")),r=Number(l.get("attemptsLimit"));console.log(o,u,r),t.startGameCountDown=o,t.timeLimit=u,t.attemptsLimit=r};return f(()=>{}),(i,l)=>(_(),p("div",g,[e("form",{onSubmit:b(m,["prevent"]),class:"w-full max-w-xl"},[e("fieldset",v,[L,e("div",C,[y,e("input",{class:"min-w-0 w-full rounded-2xl border border-resolution-blue py-4 px-10 text-xl max-w-full",type:"number",name:"startGameCountDown",value:s(t).startGameCountDown},null,8,D)]),e("div",G,[N,e("input",{class:"min-w-0 w-full rounded-2xl border border-resolution-blue py-4 px-10 text-xl max-w-full",type:"number",name:"timeLimit",value:s(t).timeLimit},null,8,k)]),e("div",B,[V,e("input",{class:"min-w-0 w-full rounded-2xl border border-resolution-blue py-4 px-10 text-xl max-w-full",type:"number",name:"attemptsLimit",value:s(t).attemptsLimit},null,8,j)]),e("div",S,[n(c,{type:"submit"},{default:a(()=>[w(" Guardar ")]),_:1})]),e("div",T,[n(s(h),{to:{name:"home"},custom:""},{default:a(({navigate:o})=>[n(c,{type:"button",onClick:o},{default:a(()=>[M,R]),_:2},1032,["onClick"])]),_:1})])])],32)]))}});export{F as default};
