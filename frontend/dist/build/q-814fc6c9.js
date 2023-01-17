import{a as Rt}from"./q-4c03ca81.js";import{c as zt,T as Ct,_ as St,o as Vt,a as C,p as Gt,H as Jt}from"./q-26d69490.js";var j={},Qt={get exports(){return j},set exports(Y){j=Y}};/*! name: @uvarov.frontend/vanilla-calendar | url: https://github.com/uvarov-frontend/vanilla-calendar */(function(Y,ls){typeof window<"u"&&function($,_){Y.exports=_()}(self,()=>(()=>{var $={d:(e,s)=>{for(var t in s)$.o(s,t)&&!$.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},o:(e,s)=>Object.prototype.hasOwnProperty.call(e,s),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},_={};$.r(_),$.d(_,{default:()=>Wt});const H=e=>{if(!["default","year"].includes(e.currentType))return;const s=e.HTMLElement.querySelector(`.${e.CSSClasses.arrowPrev}`),t=e.HTMLElement.querySelector(`.${e.CSSClasses.arrowNext}`);(()=>{if(!e.dateMin||!e.dateMax||e.currentType!=="default")return;const l=e.selectedMonth===e.dateMin.getUTCMonth(),n=e.selectedMonth===e.dateMax.getUTCMonth(),a=!e.settings.selection.year||e.selectedYear===e.dateMin.getUTCFullYear(),i=!e.settings.selection.year||e.selectedYear===e.dateMax.getUTCFullYear();l&&a||!e.settings.selection.month?s.style.visibility="hidden":s.style.visibility="",n&&i||!e.settings.selection.month?t.style.visibility="hidden":t.style.visibility=""})(),e.dateMin&&e.dateMax&&e.currentType==="year"&&e.viewYear!==void 0&&(e.dateMin.getUTCFullYear()&&e.viewYear-7<=e.dateMin.getUTCFullYear()?s.style.visibility="hidden":s.style.visibility="",e.dateMax.getUTCFullYear()&&e.viewYear+7>=e.dateMax.getUTCFullYear()?t.style.visibility="hidden":t.style.visibility="")},pt=(e,s)=>{e.popups&&Object.keys(e.popups).forEach(t=>{var l;const n=s.querySelector(`[data-calendar-day="${t}"]`);if(n){const a=(l=e.popups)==null?void 0:l[t];a!=null&&a.modifier&&a.modifier.trim().split(" ").forEach(i=>{n.classList.add(i)}),a!=null&&a.html&&(n.parentNode.innerHTML+=`<div class="${e.CSSClasses.dayPopup}">${a.html}</div>`)}})},q=(e,s)=>{if(!e)return null;const t=new Date(e).getUTCDate(),l=new Date(e).getUTCMonth(),n=new Date(e).getUTCFullYear(),a=new Date(Date.UTC(n,l,t)),i=s?a.getUTCDay()||7:a.getUTCDay();a.setUTCDate(a.getUTCDate()+4-i);const S=new Date(Date.UTC(a.getUTCFullYear(),0,1));return{year:n,week:Math.ceil(((+a-+S)/864e5+1)/7)}},bt=(e,s,t)=>{if(!e.settings.visibility.weekNumbers)return;const l=e.HTMLElement.querySelector(`.${e.CSSClasses.weekNumbers}`),n=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.dayBtn}`);if(!l||!n[0])return;l.innerHTML="";const a=Math.ceil((s+t)/7),i=document.createElement("b");i.className=e.CSSClasses.weekNumbersTitle,i.innerText="#",l.append(i);const S=document.createElement("div");S.className=e.CSSClasses.weekNumbersContent,l.append(S);const y=document.createElement("span");y.className=e.CSSClasses.weekNumber;for(let m=0;m<a;m++){const g=q(n[7*m].dataset.calendarDay,e.settings.iso8601);if(!g)return;const h=y.cloneNode(!0);h.innerText=`${g.week}`,h.dataset.calendarYearWeek=`${g.year}`,S.append(h)}},W=e=>{const s=e.getUTCFullYear();let t=e.getUTCMonth()+1,l=e.getUTCDate();return t=t<10?`0${t}`:t,l=l<10?`0${l}`:l,`${s}-${t}-${l}`},E=e=>{if(e.selectedMonth===void 0||e.selectedYear===void 0)return;const s=new Date(Date.UTC(e.selectedYear,e.selectedMonth,1)),t=new Date(Date.UTC(e.selectedYear,e.selectedMonth+1,0)).getUTCDate();let l=Number(s.getUTCDay());e.settings.iso8601&&(l=Number((s.getUTCDay()!==0?s.getUTCDay():7)-1));const n=e.HTMLElement.querySelector(`.${e.CSSClasses.days}`);if(!n)return;const a=document.createElement("div"),i=document.createElement("button");a.className=e.CSSClasses.day,i.className=e.CSSClasses.dayBtn,i.type="button",e.settings.selection.day&&["single","multiple","multiple-ranged"].includes(e.settings.selection.day)&&n.classList.add(e.CSSClasses.daysSelecting),n.innerHTML="";const S=(y,m,g,h,v)=>{const o=a.cloneNode(!0),u=i.cloneNode(!0);if(v&&u.classList.add(v),u.innerText=y,u.dataset.calendarDay=g,e.settings.visibility.weekNumbers){const r=q(g,e.settings.iso8601);if(!r)return;u.dataset.calendarWeekNumber=`${r.week}`}((r,c,d,p)=>{!e.settings.visibility.weekend||c!==0&&c!==6||r.classList.add(e.CSSClasses.dayBtnWeekend),Array.isArray(e.settings.selected.holidays)&&e.settings.selected.holidays.forEach(w=>{w===d&&r.classList.add(e.CSSClasses.dayBtnHoliday)});let T=e.date.today.getDate(),D=e.date.today.getMonth()+1;T=T<10?`0${T}`:T,D=D<10?`0${D}`:D;const U=`${e.date.today.getFullYear()}-${D}-${T}`;e.settings.visibility.today&&r.dataset.calendarDay===U&&r.classList.add(e.CSSClasses.dayBtnToday),e.selectedDates&&e.selectedDates.indexOf(d)===0||e.selectedDates&&e.selectedDates[0]&&e.selectedDates.indexOf(d)===e.selectedDates.length-1?r.classList.add(e.CSSClasses.dayBtnSelected):e.selectedDates&&e.selectedDates.indexOf(d)>0&&e.settings.selection.day==="multiple-ranged"?(r.classList.add(e.CSSClasses.dayBtnSelected),r.classList.add(e.CSSClasses.dayBtnIntermediate)):e.selectedDates&&e.selectedDates.indexOf(d)>0&&r.classList.add(e.CSSClasses.dayBtnSelected),(e.settings.range.min>d||e.settings.range.max<d)&&(r.classList.add(e.CSSClasses.dayBtnDisabled),r.tabIndex=-1),e.settings.selection.month||p||(r.classList.add(e.CSSClasses.dayBtnDisabled),r.tabIndex=-1),e.settings.selection.year||new Date(d).getFullYear()===e.selectedYear||(r.classList.add(e.CSSClasses.dayBtnDisabled),r.tabIndex=-1),Array.isArray(e.settings.range.disabled)?e.settings.range.disabled.forEach(w=>{w===d&&(r.classList.add(e.CSSClasses.dayBtnDisabled),r.tabIndex=-1)}):Array.isArray(e.settings.range.enabled)&&(r.classList.add(e.CSSClasses.dayBtnDisabled),r.tabIndex=-1,e.settings.range.enabled.forEach(w=>{w===d&&(r.classList.remove(e.CSSClasses.dayBtnDisabled),r.tabIndex=0)}))})(u,m,g,h),o.append(u),n.append(o)};(()=>{if(e.selectedMonth===void 0||e.selectedYear===void 0)return;let y=new Date(Date.UTC(e.selectedYear,e.selectedMonth,0)).getUTCDate()-l,m=e.selectedYear,g=e.selectedMonth;e.selectedMonth===0?(g=e.locale.months.length,m=e.selectedYear-1):e.selectedMonth<10&&(g=`0${e.selectedMonth}`);for(let h=0;h<l;h++){y+=1;const v=`${m}-${g}-${y}`,o=new Date(Date.UTC(e.selectedYear,e.selectedMonth,y-1)).getUTCMonth()-1,u=new Date(Date.UTC(e.selectedYear,o,y)).getUTCDay();S(String(y),u,v,!1,e.CSSClasses.dayBtnPrev)}})(),(()=>{if(e.selectedMonth!==void 0&&e.selectedYear!==void 0)for(let y=1;y<=t;y++){const m=new Date(Date.UTC(e.selectedYear,e.selectedMonth,y)),g=W(m),h=m.getUTCDay();S(String(y),h,g,!0,null)}})(),(()=>{if(e.selectedMonth===void 0||e.selectedYear===void 0)return;const y=l+t,m=Math.ceil(y/e.locale.weekday.length),g=e.locale.weekday.length*m-y;let h=e.selectedYear,v=String(e.selectedMonth+2);e.selectedMonth+1===e.locale.months.length?(v="01",h=e.selectedYear+1):e.selectedMonth+2<10&&(v=`0${e.selectedMonth+2}`);for(let o=1;o<=g;o++){const u=`${h}-${v}-${o<10?`0${o}`:String(o)}`,r=new Date(Date.UTC(e.selectedYear,e.selectedMonth,o)).getUTCMonth()+1,c=new Date(Date.UTC(e.selectedYear,r,o)).getUTCDay();S(String(o),c,u,!1,e.CSSClasses.dayBtnNext)}})(),pt(e,n),bt(e,l,t)},Mt=e=>`
	<button type="button"
		class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"
		data-calendar-arrow="prev"
		title="Prev">
	</button>
`,Tt=e=>`
	<button type="button"
	class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"
	data-calendar-arrow="next"
	title="Next">
	</button>
`,Dt=e=>`
	<button type="button"
		class="${e.CSSClasses.month}"
		data-calendar-selected-month>
	</button>
`,wt=e=>`
	<button type="button"
		class="${e.CSSClasses.year}"
		data-calendar-selected-year>
	</button>
`,ft=e=>`
	<div class="${e.CSSClasses.week}"></div>
`,xt=e=>`
	<div class="${e.CSSClasses.days}"></div>
`,$t=e=>`
	<div class="${e.CSSClasses.months}"></div>
`,_t=e=>`
	<div class="${e.CSSClasses.years}"></div>
`,kt=e=>e.settings.visibility.weekNumbers?`
	<div class="${e.CSSClasses.weekNumbers}"></div>
`:"",Yt=e=>e.settings.selection.time?`
	<div class="${e.CSSClasses.time}"></div>
`:"",Lt=e=>{let s=null;switch(e){case"ArrowPrev":s=Mt;break;case"ArrowNext":s=Tt;break;case"Month":s=Dt;break;case"Year":s=wt;break;case"Week":s=ft;break;case"Days":s=xt;break;case"Months":s=$t;break;case"Years":s=_t;break;case"WeekNumbers":s=kt;break;case"ControlTime":s=Yt}return s},A=(e,s)=>s.replace(/<#(.*?)\/>/g,(t,l)=>{const n=Lt(l.replace(/[\s\n\t]/g,""));return n?n(e):""}).replace(/[\n\t]/g,""),P=e=>{const s=e.HTMLElement;switch(s.classList.add(e.CSSClasses.calendar),e.currentType){case"default":s.classList.add(e.CSSClasses.calendarDefault),s.classList.remove(e.CSSClasses.calendarMonth),s.classList.remove(e.CSSClasses.calendarYear),s.innerHTML=A(e,e.DOMTemplates.default);break;case"month":s.classList.remove(e.CSSClasses.calendarDefault),s.classList.add(e.CSSClasses.calendarMonth),s.classList.remove(e.CSSClasses.calendarYear),s.innerHTML=A(e,e.DOMTemplates.month);break;case"year":s.classList.remove(e.CSSClasses.calendarDefault),s.classList.remove(e.CSSClasses.calendarMonth),s.classList.add(e.CSSClasses.calendarYear),s.innerHTML=A(e,e.DOMTemplates.year)}},L=e=>{if(e.selectedMonth===void 0)return;const s=e.HTMLElement.querySelector("[data-calendar-selected-month]");s&&(s.dataset.calendarSelectedMonth=String(e.selectedMonth),s.innerText=e.locale.months[e.selectedMonth],e.settings.selection.month?(s.tabIndex=0,s.classList.remove(e.CSSClasses.monthDisabled)):(s.tabIndex=-1,s.classList.add(e.CSSClasses.monthDisabled)))},N=e=>{if(e.selectedYear===void 0)return;const s=e.HTMLElement.querySelector("[data-calendar-selected-year]");s&&(s.dataset.calendarSelectedYear=String(e.selectedYear),s.innerText=String(e.selectedYear),e.settings.selection.year?(s.tabIndex=0,s.classList.remove(e.CSSClasses.yearDisabled)):(s.tabIndex=-1,s.classList.add(e.CSSClasses.yearDisabled)))},R=e=>{e.currentType="month",P(e),L(e),N(e);const s=e.HTMLElement.querySelector(`.${e.CSSClasses.months}`);if(e.selectedMonth===void 0||e.selectedYear===void 0||!e.dateMin||!e.dateMax||!s)return;e.settings.selection.month&&s.classList.add(e.CSSClasses.monthsSelecting);const t=document.createElement("button");t.type="button",t.className=e.CSSClasses.monthsMonth;for(let l=0;l<e.locale.months.length;l++){const n=e.locale.months[l],a=t.cloneNode(!0);l===e.selectedMonth&&a.classList.add(e.CSSClasses.monthsMonthSelected),l<e.dateMin.getUTCMonth()&&e.selectedYear===e.dateMin.getUTCFullYear()&&(a.classList.add(e.CSSClasses.monthsMonthDisabled),a.tabIndex=-1),l>e.dateMax.getUTCMonth()&&e.selectedYear===e.dateMax.getUTCFullYear()&&(a.classList.add(e.CSSClasses.monthsMonthDisabled),a.tabIndex=-1),a.dataset.calendarMonth=String(l),a.title=`${n}`,a.innerText=`${e.settings.visibility.monthShort?n.substring(0,3):n}`,s.append(a)}},k=e=>{const s=Number(e);let t=String(s);return s===0?t="12":s===13?t="01":s===14?t="02":s===15?t="03":s===16?t="04":s===17?t="05":s===18?t="06":s===19?t="07":s===20?t="08":s===21?t="09":s===22?t="10":s===23&&(t="11"),t},B=(e,s)=>{const t=Number(e);let l=String(t);return s==="AM"?t===12&&(l="00"):s==="PM"&&(t===1?l="13":t===2?l="14":t===3?l="15":t===4?l="16":t===5?l="17":t===6?l="18":t===7?l="19":t===8?l="20":t===9?l="21":t===10?l="22":t===11&&(l="23")),l},Nt=(e,s)=>{const t=e.HTMLElement.querySelector(`.${e.CSSClasses.timeRange} input[name="hours"]`),l=e.HTMLElement.querySelector(`.${e.CSSClasses.timeRange} input[name="minutes"]`),n=e.HTMLElement.querySelector(`.${e.CSSClasses.timeHours} input[name="hours"]`),a=e.HTMLElement.querySelector(`.${e.CSSClasses.timeMinutes} input[name="minutes"]`),i=e.HTMLElement.querySelector(`.${e.CSSClasses.timeKeeping}`),S=(v,o)=>{v.addEventListener("mouseover",()=>o.classList.add(e.CSSClasses.isFocus))},y=(v,o)=>{v.addEventListener("mouseout",()=>o.classList.remove(e.CSSClasses.isFocus))},m=(v,o,u)=>{u==="hours"?e.selectedHours=`${o}`:u==="minutes"&&(e.selectedMinutes=`${o}`),e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`,e.settings.selected.time=e.selectedTime,e.actions.changeTime&&e.actions.changeTime(v,e.selectedTime,e.selectedHours,e.selectedMinutes,e.selectedKeeping)},g=(v,o,u,r)=>{v.addEventListener("input",c=>{let d=Number(c.target.value);d=d<10?`0${d}`:`${d}`,u==="hours"&&r===12?Number(c.target.value)<r&&Number(c.target.value)>0?(o.value=d,e.selectedKeeping="AM",i.innerText=e.selectedKeeping,m(c,d,u)):(Number(c.target.value)===0?(e.selectedKeeping="AM",i.innerText="AM"):(e.selectedKeeping="PM",i.innerText="PM"),o.value=k(c.target.value),m(c,k(c.target.value),u)):(o.value=d,m(c,d,u))})},h=(v,o,u,r)=>{o.addEventListener("change",c=>{const d=c.target;let p=Number(d.value);p=p<10?`0${p}`:`${p}`,u==="hours"&&r===12?d.value&&Number(d.value)<=r&&Number(d.value)>0?(d.value=p,v.value=B(p,e.selectedKeeping),m(c,p,u)):d.value&&Number(d.value)<24&&(Number(d.value)>r||Number(d.value)===0)?(Number(d.value)===0?(e.selectedKeeping="AM",i.innerText="AM"):(e.selectedKeeping="PM",i.innerText="PM"),d.value=k(d.value),v.value=p,m(c,k(d.value),u)):d.value=e.selectedHours:d.value&&Number(d.value)<=r&&Number(d.value)>=0?(d.value=p,v.value=p,m(c,p,u)):u==="hours"?d.value=e.selectedHours:u==="minutes"&&(d.value=e.selectedMinutes)})};S(t,n),S(l,a),y(t,n),y(l,a),g(t,n,"hours",s===24?23:12),g(l,a,"minutes",0),h(t,n,"hours",s===24?23:12),h(l,a,"minutes",59),i&&i.addEventListener("click",v=>{i.innerText.includes("AM")?e.selectedKeeping="PM":e.selectedKeeping="AM",t.value=B(e.selectedHours,e.selectedKeeping),m(v,e.selectedHours,"hours"),i.innerText=e.selectedKeeping})},Ut=e=>{const s=e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);if(!s)return;const t=e.settings.selection.time===!0?12:e.settings.selection.time,l=e.settings.selection.controlTime==="range";s.innerHTML=`
	<div class="${e.CSSClasses.timeContent}">
		<label class="${e.CSSClasses.timeHours}">
			<input type="text"
				name="hours"
				maxlength="2"
				value="${e.selectedHours}"
				${l?"disabled":""}>
		</label>
		<label class="${e.CSSClasses.timeMinutes}">
			<input type="text"
				name="minutes"
				maxlength="2"
				value="${e.selectedMinutes}"
				${l?"disabled":""}>
		</label>
		${t===12?`
		<button type="button"
			class="${e.CSSClasses.timeKeeping}"
			${l?"disabled":""}>${e.selectedKeeping}</button>
		`:""}
	</div>
	<div class="${e.CSSClasses.timeRanges}">
		<label class="${e.CSSClasses.timeRange}">
			<input type="range"
				name="hours"
				min="0"
				max="23"
				step="${e.settings.selection.stepHours}"
				value="${e.selectedKeeping?B(e.selectedHours,e.selectedKeeping):e.selectedHours}">
		</label>
		<label class="${e.CSSClasses.timeRange}">
			<input type="range"
				name="minutes"
				min="0"
				max="59"
				step="${e.settings.selection.stepMinutes}"
				value="${e.selectedMinutes}">
		</label>
	</div>`,Nt(e,t)},Ht=e=>{const s=[...e.locale.weekday];if(!s[0])return;const t=e.HTMLElement.querySelector(`.${e.CSSClasses.week}`),l=document.createElement("b");l.className=e.CSSClasses.weekDay,e.settings.iso8601&&s.push(s.shift()),t.innerHTML="";for(let n=0;n<s.length;n++){const a=s[n],i=l.cloneNode(!0);e.settings.visibility.weekend&&e.settings.iso8601?n!==5&&n!==6||i.classList.add(e.CSSClasses.weekDayWeekend):e.settings.visibility.weekend&&!e.settings.iso8601&&(n!==0&&n!==6||i.classList.add(e.CSSClasses.weekDayWeekend)),i.innerText=`${a}`,t.append(i)}},O=e=>{if(e.viewYear===void 0||!e.dateMin||!e.dateMax)return;e.currentType="year",P(e),L(e),N(e),H(e);const s=e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);if(!s)return;e.settings.selection.year&&s.classList.add(e.CSSClasses.yearsSelecting);const t=document.createElement("button");t.type="button",t.className=e.CSSClasses.yearsYear;for(let l=e.viewYear-7;l<e.viewYear+8;l++){const n=l,a=t.cloneNode(!0);n===e.selectedYear&&a.classList.add(e.CSSClasses.yearsYearSelected),n<e.dateMin.getUTCFullYear()&&(a.classList.add(e.CSSClasses.yearsYearDisabled),a.tabIndex=-1),n>e.dateMax.getUTCFullYear()&&(a.classList.add(e.CSSClasses.yearsYearDisabled),a.tabIndex=-1),a.dataset.calendarYear=String(n),a.innerText=`${n}`,s.append(a)}},Et=e=>{if(e.settings.lang!=="define"){e.locale.weekday=[];for(let s=0;s<7;s++){let t=new Date(0,0,s).toLocaleString(e.settings.lang,{weekday:"short"});t=`${t.charAt(0).toUpperCase()}${t.substring(1,t.length)}`,t=t.replace(/\./,""),e.locale.weekday.push(t)}e.locale.months=[];for(let s=0;s<12;s++){let t=new Date(0,s).toLocaleString(e.settings.lang,{month:"long"});t=`${t.charAt(0).toUpperCase()}${t.substring(1,t.length)}`,t=t.replace(/\./,""),e.locale.months.push(t)}}},At=e=>{e.settings.selected.dates!==null?e.selectedDates=e.settings.selected.dates:e.selectedDates=[],e.settings.selected.month!==null&&e.settings.selected.month>=0&&e.settings.selected.month<12?e.selectedMonth=e.settings.selected.month:e.selectedMonth=e.date.today.getMonth(),e.settings.selected.year!==null&&e.settings.selected.year>=0&&e.settings.selected.year<=9999?e.selectedYear=e.settings.selected.year:e.selectedYear=e.date.today.getFullYear(),e.viewYear=e.selectedYear,e.dateMin=e.settings.visibility.disabled?new Date(e.date.min):new Date(e.settings.range.min),e.dateMax=e.settings.visibility.disabled?new Date(e.date.max):new Date(e.settings.range.max);const s=e.settings.selection.time===!0||e.settings.selection.time===12;if(s||e.settings.selection.time===24){if(typeof e.settings.selected.time=="string"){const t=s?/^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g:/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;e.settings.selected.time.replace(t,(l,n,a,i)=>(n&&a&&(e.userTime=!0,e.selectedHours=n,e.selectedMinutes=a),i&&s?e.selectedKeeping=i:s&&(e.selectedKeeping="AM"),""))}!e.userTime&&s?(e.selectedHours=k(String(e.date.today.getHours())),e.selectedMinutes=String(e.date.today.getMinutes()),e.selectedKeeping=Number(e.date.today.getHours())>12?"PM":"AM"):e.userTime||(e.selectedHours=String(e.date.today.getHours()),e.selectedMinutes=String(e.date.today.getMinutes())),e.selectedHours=Number(e.selectedHours)<10?`0${Number(e.selectedHours)}`:`${e.selectedHours}`,e.selectedMinutes=Number(e.selectedMinutes)<10?`0${Number(e.selectedMinutes)}`:`${e.selectedMinutes}`,e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`}else e.settings.selection.time&&(e.settings.selection.time=!1,console.error("The value of the time property can be: false, true, 12 or 24."))},x=e=>{At(e),Et(e),P(e),L(e),N(e),H(e),Ut(e),e.currentType==="default"?(Ht(e),E(e)):e.currentType==="month"?R(e):e.currentType==="year"&&O(e)},K=(e,s)=>{if(e.selectedMonth===void 0||e.selectedYear===void 0)return;const t=e.locale.months.length-1;switch(s){case"prev":e.selectedMonth!==0?e.selectedMonth-=1:e.settings.selection.year&&(e.selectedYear-=1,e.selectedMonth=t);break;case"next":e.selectedMonth!==t?e.selectedMonth+=1:e.settings.selection.year&&(e.selectedYear+=1,e.selectedMonth=0)}e.settings.selected.month=e.selectedMonth,e.settings.selected.year=e.selectedYear,L(e),N(e),H(e),E(e)},Pt=e=>{e.HTMLElement.addEventListener("click",s=>{const t=s.target,l=t.closest(`.${e.CSSClasses.arrow}`),n=t.closest(`.${e.CSSClasses.arrowPrev}`),a=t.closest(`.${e.CSSClasses.arrowNext}`),i=t.closest(`.${e.CSSClasses.dayBtn}`),S=t.closest(`.${e.CSSClasses.dayBtnPrev}`),y=t.closest(`.${e.CSSClasses.dayBtnNext}`),m=t.closest(`.${e.CSSClasses.year}`),g=t.closest(`.${e.CSSClasses.yearsYear}`),h=t.closest(`.${e.CSSClasses.month}`),v=t.closest(`.${e.CSSClasses.monthsMonth}`);l&&e.currentType!=="year"&&e.currentType!=="month"&&K(e,t.dataset.calendarArrow),l&&e.actions.clickArrow&&e.actions.clickArrow(s,Number(e.selectedYear),Number(e.selectedMonth)),(()=>{if(e.settings.selection.day&&["single","multiple","multiple-ranged"].includes(e.settings.selection.day)&&i){switch(e.settings.selection.day){case"single":e.selectedDates&&i&&i.dataset.calendarDay&&(i.classList.contains(e.CSSClasses.dayBtnSelected)?e.selectedDates.splice(e.selectedDates.indexOf(i.dataset.calendarDay),1):(e.selectedDates=[],e.selectedDates.push(i.dataset.calendarDay)));break;case"multiple":e.selectedDates&&i&&i.dataset.calendarDay&&(i.classList.contains(e.CSSClasses.dayBtnSelected)?e.selectedDates.splice(e.selectedDates.indexOf(i.dataset.calendarDay),1):e.selectedDates.push(i.dataset.calendarDay));break;case"multiple-ranged":(()=>{if(!e.selectedDates||!i||!i.dataset.calendarDay||(e.selectedDates.length>1&&(e.selectedDates=[]),e.selectedDates.push(i.dataset.calendarDay),!e.selectedDates[1]))return;const o=new Date(Date.UTC(new Date(e.selectedDates[0]).getUTCFullYear(),new Date(e.selectedDates[0]).getUTCMonth(),new Date(e.selectedDates[0]).getUTCDate())),u=new Date(Date.UTC(new Date(e.selectedDates[1]).getUTCFullYear(),new Date(e.selectedDates[1]).getUTCMonth(),new Date(e.selectedDates[1]).getUTCDate())),r=c=>{if(!e.selectedDates)return;const d=W(c);e.settings.range.disabled&&e.settings.range.disabled.includes(d)||e.selectedDates.push(d)};if(e.selectedDates=[],u>o)for(let c=o;c<=u;c.setUTCDate(c.getUTCDate()+1))r(c);else for(let c=o;c>=u;c.setUTCDate(c.getUTCDate()-1))r(c)})()}e.actions.clickDay&&e.actions.clickDay(s,e.selectedDates),e.settings.selected.dates=e.selectedDates,S?K(e,"prev"):y?K(e,"next"):E(e)}})(),(()=>{if(e.settings.selection.year){if(l&&e.currentType==="year"){if(e.viewYear===void 0)return;a?e.viewYear+=15:n&&(e.viewYear-=15),O(e)}else if(e.currentType!=="year"&&m)O(e);else if(e.currentType==="year"&&m)e.currentType=e.type,x(e);else if(g){if(e.selectedMonth===void 0||!e.dateMin||!e.dateMax)return;e.selectedYear=Number(g.dataset.calendarYear),e.currentType=e.type,e.selectedMonth<e.dateMin.getUTCMonth()&&e.selectedYear===e.dateMin.getUTCFullYear()&&(e.settings.selected.month=e.dateMin.getUTCMonth()),e.selectedMonth>e.dateMax.getUTCMonth()&&e.selectedYear===e.dateMax.getUTCFullYear()&&(e.settings.selected.month=e.dateMax.getUTCMonth()),e.actions.clickYear&&e.actions.clickYear(s,e.selectedYear),e.settings.selected.year=e.selectedYear,x(e)}}})(),e.settings.selection.month&&(e.currentType!=="month"&&h?R(e):e.currentType==="month"&&h?(e.currentType=e.type,x(e)):v&&(e.selectedMonth=Number(v.dataset.calendarMonth),e.currentType=e.type,e.actions.clickMonth&&e.actions.clickMonth(s,e.selectedMonth),e.settings.selected.month=e.selectedMonth,x(e)))})},Bt=e=>{e.HTMLElement&&(x(e),Pt(e))},Ot=e=>`
	<div class="${e.header}">
		<#ArrowPrev />
		<div class="${e.headerContent}">
			<#Month />
			<#Year />
		</div>
		<#ArrowNext />
	</div>
	<div class="${e.wrapper}">
		<#WeekNumbers />
		<div class="${e.content}">
			<#Week />
			<#Days />
		</div>
	</div>
	<#ControlTime />
`,Kt=e=>`
	<div class="${e.header}">
		<div class="${e.headerContent}">
			<#Month />
			<#Year />
		</div>
	</div>
	<div class="${e.wrapper}">
		<div class="${e.content}">
			<#Months />
		</div>
	</div>
`,Ft=e=>`
	<div class="${e.header}">
		<#ArrowPrev />
		<div class="${e.headerContent}">
			<#Month />
			<#Year />
		</div>
		<#ArrowNext />
	</div>
	<div class="${e.wrapper}">
		<div class="${e.content}">
			<#Years />
		</div>
	</div>
`,F={calendar:"vanilla-calendar",calendarDefault:"vanilla-calendar_default",calendarMonth:"vanilla-calendar_month",calendarYear:"vanilla-calendar_year",header:"vanilla-calendar-header",headerContent:"vanilla-calendar-header__content",month:"vanilla-calendar-month",monthDisabled:"vanilla-calendar-month_disabled",year:"vanilla-calendar-year",yearDisabled:"vanilla-calendar-year_disabled",arrow:"vanilla-calendar-arrow",arrowPrev:"vanilla-calendar-arrow_prev",arrowNext:"vanilla-calendar-arrow_next",wrapper:"vanilla-calendar-wrapper",content:"vanilla-calendar-content",week:"vanilla-calendar-week",weekDay:"vanilla-calendar-week__day",weekDayWeekend:"vanilla-calendar-week__day_weekend",days:"vanilla-calendar-days",daysSelecting:"vanilla-calendar-days_selecting",months:"vanilla-calendar-months",monthsSelecting:"vanilla-calendar-months_selecting",monthsMonth:"vanilla-calendar-months__month",monthsMonthSelected:"vanilla-calendar-months__month_selected",monthsMonthDisabled:"vanilla-calendar-months__month_disabled",years:"vanilla-calendar-years",yearsSelecting:"vanilla-calendar-years_selecting",yearsYear:"vanilla-calendar-years__year",yearsYearSelected:"vanilla-calendar-years__year_selected",yearsYearDisabled:"vanilla-calendar-years__year_disabled",time:"vanilla-calendar-time",timeContent:"vanilla-calendar-time__content",timeHours:"vanilla-calendar-time__hours",timeMinutes:"vanilla-calendar-time__minutes",timeKeeping:"vanilla-calendar-time__keeping",timeRanges:"vanilla-calendar-time__ranges",timeRange:"vanilla-calendar-time__range",day:"vanilla-calendar-day",dayPopup:"vanilla-calendar-day__popup",dayBtn:"vanilla-calendar-day__btn",dayBtnPrev:"vanilla-calendar-day__btn_prev",dayBtnNext:"vanilla-calendar-day__btn_next",dayBtnToday:"vanilla-calendar-day__btn_today",dayBtnSelected:"vanilla-calendar-day__btn_selected",dayBtnDisabled:"vanilla-calendar-day__btn_disabled",dayBtnIntermediate:"vanilla-calendar-day__btn_intermediate",dayBtnWeekend:"vanilla-calendar-day__btn_weekend",dayBtnHoliday:"vanilla-calendar-day__btn_holiday",weekNumbers:"vanilla-calendar-week-numbers",weekNumbersTitle:"vanilla-calendar-week-numbers__title",weekNumbersContent:"vanilla-calendar-week-numbers__content",weekNumber:"vanilla-calendar-week-number",isFocus:"vanilla-calendar-is-focus"};var It=Object.defineProperty,z=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,V=(e,s,t)=>s in e?It(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;class G{constructor(s,t){var l,n,a,i,S,y,m,g,h,v,o,u,r,c,d,p,T,D,U,w,J,Q,X,Z,ee,te,se,le,ae,ne,ie,de,re,ce,oe,ue,ve,me,ye,ge,he,Ce,Se,pe,be,Me,Te,De,we,fe,xe,$e,_e,ke,Ye,Le,Ne,Ue,He,Ee,Ae,Pe,Be,Oe,Ke,Fe,Ie,je,qe,We,Re,ze,Ve,Ge,Je,Qe,Xe,Ze,et,tt,st,lt,at,nt,it,dt,rt,ct,ot,ut,vt,mt,yt,gt,ht;this.update=()=>x(this),this.init=()=>Bt(this),this.HTMLElement=typeof s=="string"?document.querySelector(s):s,this.HTMLElement&&(this.type=(l=t==null?void 0:t.type)!=null?l:"default",this.date={min:(a=(n=t==null?void 0:t.date)==null?void 0:n.min)!=null?a:"1970-01-01",max:(S=(i=t==null?void 0:t.date)==null?void 0:i.max)!=null?S:"2470-12-31",today:(m=(y=t==null?void 0:t.date)==null?void 0:y.today)!=null?m:new Date},this.settings={lang:(h=(g=t==null?void 0:t.settings)==null?void 0:g.lang)!=null?h:"en",iso8601:(o=(v=t==null?void 0:t.settings)==null?void 0:v.iso8601)==null||o,range:{min:(c=(r=(u=t==null?void 0:t.settings)==null?void 0:u.range)==null?void 0:r.min)!=null?c:"1970-01-01",max:(T=(p=(d=t==null?void 0:t.settings)==null?void 0:d.range)==null?void 0:p.max)!=null?T:"2470-12-31",disabled:(w=(U=(D=t==null?void 0:t.settings)==null?void 0:D.range)==null?void 0:U.disabled)!=null?w:null,enabled:(X=(Q=(J=t==null?void 0:t.settings)==null?void 0:J.range)==null?void 0:Q.enabled)!=null?X:null},selection:{day:(te=(ee=(Z=t==null?void 0:t.settings)==null?void 0:Z.selection)==null?void 0:ee.day)!=null?te:"single",month:(ae=(le=(se=t==null?void 0:t.settings)==null?void 0:se.selection)==null?void 0:le.month)==null||ae,year:(de=(ie=(ne=t==null?void 0:t.settings)==null?void 0:ne.selection)==null?void 0:ie.year)==null||de,time:(oe=(ce=(re=t==null?void 0:t.settings)==null?void 0:re.selection)==null?void 0:ce.time)!=null&&oe,controlTime:(me=(ve=(ue=t==null?void 0:t.settings)==null?void 0:ue.selection)==null?void 0:ve.controlTime)!=null?me:"all",stepHours:(he=(ge=(ye=t==null?void 0:t.settings)==null?void 0:ye.selection)==null?void 0:ge.stepHours)!=null?he:1,stepMinutes:(pe=(Se=(Ce=t==null?void 0:t.settings)==null?void 0:Ce.selection)==null?void 0:Se.stepMinutes)!=null?pe:1},selected:{dates:(Te=(Me=(be=t==null?void 0:t.settings)==null?void 0:be.selected)==null?void 0:Me.dates)!=null?Te:null,month:(fe=(we=(De=t==null?void 0:t.settings)==null?void 0:De.selected)==null?void 0:we.month)!=null?fe:null,year:(_e=($e=(xe=t==null?void 0:t.settings)==null?void 0:xe.selected)==null?void 0:$e.year)!=null?_e:null,holidays:(Le=(Ye=(ke=t==null?void 0:t.settings)==null?void 0:ke.selected)==null?void 0:Ye.holidays)!=null?Le:null,time:(He=(Ue=(Ne=t==null?void 0:t.settings)==null?void 0:Ne.selected)==null?void 0:Ue.time)!=null?He:null},visibility:{monthShort:(Pe=(Ae=(Ee=t==null?void 0:t.settings)==null?void 0:Ee.visibility)==null?void 0:Ae.monthShort)==null||Pe,weekNumbers:(Ke=(Oe=(Be=t==null?void 0:t.settings)==null?void 0:Be.visibility)==null?void 0:Oe.weekNumbers)!=null&&Ke,weekend:(je=(Ie=(Fe=t==null?void 0:t.settings)==null?void 0:Fe.visibility)==null?void 0:Ie.weekend)==null||je,today:(Re=(We=(qe=t==null?void 0:t.settings)==null?void 0:qe.visibility)==null?void 0:We.today)==null||Re,disabled:(Ge=(Ve=(ze=t==null?void 0:t.settings)==null?void 0:ze.visibility)==null?void 0:Ve.disabled)!=null&&Ge}},this.locale={months:(Qe=(Je=t==null?void 0:t.locale)==null?void 0:Je.months)!=null?Qe:[],weekday:(Ze=(Xe=t==null?void 0:t.locale)==null?void 0:Xe.weekday)!=null?Ze:[]},this.actions={clickDay:(tt=(et=t==null?void 0:t.actions)==null?void 0:et.clickDay)!=null?tt:null,clickMonth:(lt=(st=t==null?void 0:t.actions)==null?void 0:st.clickMonth)!=null?lt:null,clickYear:(nt=(at=t==null?void 0:t.actions)==null?void 0:at.clickYear)!=null?nt:null,clickArrow:(dt=(it=t==null?void 0:t.actions)==null?void 0:it.clickArrow)!=null?dt:null,changeTime:(ct=(rt=t==null?void 0:t.actions)==null?void 0:rt.changeTime)!=null?ct:null},this.popups=(ot=t==null?void 0:t.popups)!=null?ot:null,this.CSSClasses=(()=>{const I=((M,b)=>{for(var f in b||(b={}))jt.call(b,f)&&V(M,f,b[f]);if(z)for(var f of z(b))qt.call(b,f)&&V(M,f,b[f]);return M})({},F);return Object.keys(F).forEach(M=>{var b;(b=t==null?void 0:t.CSSClasses)!=null&&b[M]?I[M]=t.CSSClasses[M]:I[M]=F[M]}),I})(),this.DOMTemplates={default:(vt=(ut=t==null?void 0:t.DOMTemplates)==null?void 0:ut.default)!=null?vt:Ot(this.CSSClasses),month:(yt=(mt=t==null?void 0:t.DOMTemplates)==null?void 0:mt.month)!=null?yt:Kt(this.CSSClasses),year:(ht=(gt=t==null?void 0:t.DOMTemplates)==null?void 0:gt.year)!=null?ht:Ft(this.CSSClasses)},this.currentType=this.type,this.selectedKeeping=null,this.userTime=!1)}}window.VanillaCalendar=G;const Wt=G;return _})())})(Qt);const Xt=Rt(j),Zt=()=>{new Xt("#calendar").init()},es=zt(Ct(()=>St(()=>import("./q-3c972181.js"),["build/q-3c972181.js","build/q-26d69490.js"]),"s_IxESFjnfYDA")),ts=()=>(Vt(Ct(()=>St(()=>Promise.resolve().then(()=>ss),void 0),"s_zWdTUz8SrnE"),{eagerness:"visible"}),C(Gt,{children:C("section",{class:"flex flex-col gap-4",children:[C("section",{class:"flex max-sm:flex-col max-sm:justify-center max-sm:items-center",children:[C("section",{class:"flex flex-col w-2/3 items-center gap-4",children:[C("article",{class:"w-[70%]",children:[C("p",{children:" Description: "}),C("p",{children:"Here u can add your wishes set a date when the wish will end and share it with ur friend, they will be able to check ur bucket list or add other things in the basket that u could like, every time they make a change you will recive a message via email"})]}),C("article",{children:[C("p",{class:"text-center",children:"Wish name"}),C("input",{class:"min-w-[200px] md:w-[300px] lg:w-[400px] h-10 px-4 py-[6px] border-2 border-solid border-secondary rounded-md focus:border-secondary focus:outline-none flex",type:"text"})]}),C("article",{class:"flex flex-col justify-center items-center",children:C(es,{},"wm_0")})]}),C("section",{class:"flex flex-col w-1/3 max-sm:justify-center max-sm:items-center",children:C("article",{children:[C("p",{children:"Time till wishes end"}),C("div",{id:"calendar",class:"bg-pink-200"})]})})]}),C("section",{class:"w-full flex justify-center items-center",children:C("button",{class:"rounded-[50px] w-[150px] h-[40px] bg-orange-200 hover:scale-110 hover:border-solid hover:border-2 hover:border-pink-500 duration-300 font-bold text-red-600",children:"Create a wish"})})]})},"wm_1")),ss=Object.freeze(Object.defineProperty({__proto__:null,s_zWdTUz8SrnE:Zt,s_0M1tb00urf4:ts,_hW:Jt},Symbol.toStringTag,{value:"Module"}));export{Jt as _hW,ts as s_0M1tb00urf4,Zt as s_zWdTUz8SrnE};