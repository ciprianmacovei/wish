import{b as d,T as n,_ as i,a as e,A as a,H as l}from"./q-26d69490.js";const h=()=>{const t=d({wishList:[]}),s=n(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_QRdQt1bwyLU",[t]);return e("section",{children:[e("article",{children:e("p",{class:"text-gray-800 text-[10px] min-w-[200px] md:w-[300px] lg:w-[400px] text-center",children:["Write the ",e("span",{class:"font-extrabold",children:"object/s name"})," or add a"," ",e("span",{class:"font-extrabold",children:"link"})," after each object click the start to add ur wish"]})}),e("div",{class:"relative min-w-[200px] md:w-[300px] lg:w-[400px] h-10",children:[e("div",{}),e("div",{onKeyPress$:n(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_TqUj0jbO6KA",[s]),class:"combobox min-w-[200px] md:w-[300px] lg:w-[400px] h-10 px-4 py-[6px] border-2 border-solid border-secondary rounded-md focus:border-secondary focus:outline-none flex",contentEditable:"true"}),e("div",{class:"absolute right-0 top-0 w-8 h-10 flex justify-center items-center hover:text-alternate hover:scale-150 duration-500 cursor-pointer",onClick$:n(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_WcueZpSDrVo",[s]),children:e("i",{class:"fa fa-star fa-regular","aria-hidden":"true"})})]}),e("section",{children:t.wishList.map((o,r)=>e("div",{class:"bg-pink-200",children:e("div",{class:"wish-name",children:o})},r+"wishItem"))})]})},_=t=>{const[s]=a();return s(t)},x=t=>{const[s]=a();return s(t)},b=t=>{const[s]=a();if(t instanceof KeyboardEvent&&t.key==="Enter"||t instanceof PointerEvent){const o=document.querySelector(".combobox");if(o){const r=o.textContent;r&&(s.wishList=[...s.wishList,r]),o.innerText=""}}},c=Object.freeze(Object.defineProperty({__proto__:null,s_IxESFjnfYDA:h,s_WcueZpSDrVo:_,s_TqUj0jbO6KA:x,s_QRdQt1bwyLU:b,_hW:l},Symbol.toStringTag,{value:"Module"}));export{l as _hW,h as s_IxESFjnfYDA,b as s_QRdQt1bwyLU,x as s_TqUj0jbO6KA,_ as s_WcueZpSDrVo};
