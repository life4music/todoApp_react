(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(8),c=n.n(i),s=(n(13),n(6)),r=n(2),l=n(3),o=n(5),d=n(4),h=(n(14),n(0)),j=function(t){var e=t.task,n=e.id,a=e.title,i=e.date,c=e.important,s=e.active,r=e.finishDate;if(s)return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{style:c?{color:"red"}:{color:"black"},children:a}),"- do ",Object(h.jsxs)("span",{children:[i," "]}),Object(h.jsx)("button",{onClick:function(){return t.change(n)},children:"Zosta\u0142o zrobione"}),Object(h.jsx)("button",{onClick:function(){return t.delete(n)},children:"X"})]})});var l=new Date(r).toLocaleString();return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:a})," ",Object(h.jsxs)("em",{children:["(do ",i,")"]}),Object(h.jsx)("br",{}),"- zrealizowane: ",Object(h.jsxs)("span",{children:[l," "]}),Object(h.jsx)("button",{onClick:function(){return t.delete(n)},children:"X"})]})})},u=function(t){var e=t.tasks.filter((function(t){return t.active})),n=t.tasks.filter((function(t){return!t.active}));n.length>=2&&n.sort((function(t,e){return e.finishDate-t.finishDate})),e.length>=2&&e.sort((function(t,e){return(t=t.title.toLowerCase())<(e=e.title.toLowerCase())?-1:t>e?1:0}));var a=e.map((function(e){return Object(h.jsx)(j,{task:e,delete:t.delete,change:t.change},e.id)})),i=n.map((function(e){return Object(h.jsx)(j,{task:e,delete:t.delete,change:t.change},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"active",children:[Object(h.jsx)("h2",{children:"Zadania do zrobienia"}),a.length>0?a:"Brak zada\u0144 do zrobienia"]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"done",children:[Object(h.jsxs)("h2",{children:["Zadania zrobione ",Object(h.jsxs)("em",{children:["(",n.length,")"]})]}),n.length>3&&Object(h.jsx)("span",{style:{fontSize:11},children:"Wy\u015bwietlone jedynie 3 ostatnie elementy"}),i.slice(0,3)]})]})},b=(n(16),function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).minDate=(new Date).toISOString().slice(0,10),t.state={text:"",checked:!1,date:t.minDate},t.handleDate=function(e){t.setState({date:e.target.value})},t.handleText=function(e){t.setState({text:e.target.value})},t.handleCheckbox=function(e){t.setState({checked:e.target.checked})},t.handleClick=function(){var e=t.state,n=e.text,a=e.checked,i=e.date;n.length>2?t.props.add(n,i,a)&&t.setState({text:"",checked:!1,date:t.minDate}):alert("Za kr\xf3tka nazwa zadania")},t}return Object(l.a)(n,[{key:"render",value:function(){var t="".concat(1*this.minDate.slice(0,4)+1,"-12-31");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("input",{type:"text",name:"title",value:this.state.text,placeholder:"dodaj zadanie",onChange:this.handleText}),Object(h.jsx)("input",{type:"checkbox",id:"important",checked:this.state.checked,onChange:this.handleCheckbox}),Object(h.jsx)("label",{htmlFor:"important",children:"Priorytet"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"date",children:"Do kiedy zrobi\u0107"}),Object(h.jsx)("input",{type:"date",value:this.state.date,min:this.minDate,max:t,onChange:this.handleDate}),Object(h.jsx)("button",{onClick:this.handleClick,children:"DODAJ"})]}),Object(h.jsx)("hr",{})]})}}]),n}(a.Component)),x=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).counter=4,t.state={tasks:[{id:0,title:"Zacz\u0105\u0107 \u0107wiczy\u0107",date:"2021-06-12",important:!0,active:!0,finishDate:null},{id:1,title:"Wyleczy\u0107 z\u0119ba",date:"2021-03-05",important:!0,active:!0,finishDate:null},{id:2,title:"Urz\u0105dzi\u0107 kuchni\u0119",date:"2021-10-30",important:!1,active:!0,finishDate:null},{id:3,title:"Doko\u0144czy\u0107 tatua\u017c",date:"2021-04-01",important:!1,active:!0,finishDate:null}]},t.deleteTask=function(e){var n=Object(s.a)(t.state.tasks),a=n.findIndex((function(t){return t.id===e}));n.splice(a,1),t.setState({tasks:n}),console.log(n)},t.changeStatus=function(e){var n=Object(s.a)(t.state.tasks);n.forEach((function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())})),t.setState({tasks:n})},t.addTask=function(e,n,a){var i={id:t.counter,title:e,date:n,important:a,active:!0,finishDate:null};return t.setState((function(t){return{tasks:[].concat(Object(s.a)(t.tasks),[i])}})),t.counter++,!0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{add:this.addTask}),Object(h.jsx)(u,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeStatus})]})}}]),n}(a.Component);c.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8bcf75e6.chunk.js.map