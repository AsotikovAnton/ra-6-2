(this["webpackJsonpra-6-2"]=this["webpackJsonpra-6-2"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(15),n(16),n(4)),i=n(5),s=n(7),u=n(9),m=n(1),f=n(6),h=n(8);function d(e){var t=Object(a.useState)({text:""}),n=Object(h.a)(t,2),c=n[0],o=n[1];return r.a.createElement("form",null,r.a.createElement("label",null,"New Note"),r.a.createElement("textarea",{name:"text",onChange:function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(f.a)({},e,Object(m.a)({},n,a))}))},value:c.text}),r.a.createElement("div",{className:"material-icons send",onClick:function(t){if(t.preventDefault(),""!==c.text){var n={text:c.text};e.onFormSubmit(n),o({text:""})}}},"near_me"))}function v(e){var t=e.note;return r.a.createElement("div",{className:"block-item-note"},r.a.createElement("p",null,t.text),r.a.createElement("div",{className:"material-icons delete",onClick:function(){var n;n=t.id,e.onDelete(n)}},"clear"))}var E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){fetch("".concat(a.URL,"/").concat(e),{method:"DELETE"}).then((function(){return a.getNotes()}))},a.handleSbmit=function(e){fetch(a.URL,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(){return a.getNotes()}))},a.getNotes=function(){fetch(a.URL).then((function(e){return e.json()})).then((function(e){a.setState({notes:e})}))},a.state={notes:[]},a.URL="https://ra-6-2-serv.herokuapp.com/notes",a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Notes ",r.a.createElement("span",{className:"material-icons refresh",onClick:this.getNotes()},"refresh")),r.a.createElement("div",{className:"list-notes"},this.state.notes.map((function(t){return r.a.createElement(v,{key:t.id,note:t,onDelete:e.handleDelete})}))),r.a.createElement(d,{onFormSubmit:this.handleSbmit}))}},{key:"componentDidMount",value:function(){this.getNotes()}}]),n}(a.Component);var p=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e3966760.chunk.js.map