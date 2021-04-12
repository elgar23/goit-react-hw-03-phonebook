(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={wrapper:"Filter_wrapper__2SZHH",label:"Filter_label__3GYWo",input:"Filter_input__2oyXK"}},13:function(e,t,n){e.exports={section:"Container_section__2Ayey",heading:"Container_heading__3FHVR"}},2:function(e,t,n){e.exports={form:"InputForm_form__1xibC",label:"InputForm_label__1ExW_",input:"InputForm_input__2CG2o",btn:"InputForm_btn__2YlCC"}},3:function(e,t,n){e.exports={list:"Phonebook_list__1075V",item:"Phonebook_item__1C9y_",close:"Phonebook_close__39jfM"}},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),s=n(16),i=n(5),l=n(6),u=n(9),b=n(8),m=n(15),h=n.n(m),j=n(7),d=n(2),p=n.n(d),f=n(0),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(j.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{className:p.a.label,htmlFor:"name",children:"Name"}),Object(f.jsx)("input",{id:"name",type:"text",onChange:this.handleChange,className:p.a.input,name:"name",value:t,placeholder:"Name",autoComplete:"off"}),Object(f.jsx)("label",{className:p.a.label,htmlFor:"number",children:"Number"}),Object(f.jsx)("input",{id:"number",type:"text",onChange:this.handleChange,className:p.a.input,name:"number",value:n,placeholder:"Phone number",autoComplete:"off"}),Object(f.jsx)("button",{type:"submit",className:p.a.btn,children:"Add contact"})]})}}]),n}(a.Component),_=n(10),x=n.n(_),v=function(e){var t=e.value,n=e.onChange;return Object(f.jsx)("div",{className:x.a.wrapper,children:Object(f.jsxs)("label",{className:x.a.label,children:["Find by Name",Object(f.jsx)("input",{className:x.a.input,type:"text",value:t,onChange:n})]})})},C=n(12),g=n(3),y=n.n(g),N=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDelete;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("span",{children:[t," : ",n]}),Object(f.jsx)("button",{type:"button",className:y.a.close,onClick:function(){return c(a)},children:"+"})]})},F=function(e){var t=e.contacts,n=e.onDelete;return Object(f.jsx)("ul",{className:y.a.list,children:t.map((function(e){return Object(f.jsx)("li",{className:y.a.item,children:Object(f.jsx)(N,Object(C.a)(Object(C.a)({},e),{},{onDelete:n}))},e.id)}))})};F.defaultProps={contacts:[]};var S=F,k=n(13),w=n.n(k),D=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("section",{className:w.a.section,children:[t&&Object(f.jsx)("h2",{className:w.a.heading,children:t}),n]})};D.defaultProps={title:""};var I=D,P=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],name:"",number:"",filter:""},e.addContact=function(t){var n=t.name,a=t.number,c={id:h.a.generate(),name:n,number:a};e.state.contacts.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already exists!")):e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(s.a)(t))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n=t.contacts,a=this.state.contacts;a!==n&&localStorage.setItem("contacts",JSON.stringify(a))}},{key:"render",value:function(){var e=this.getFilteredContacts(),t=this.state.filter;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I,{title:"Phonebook",children:Object(f.jsx)(O,{onSubmit:this.addContact})}),Object(f.jsxs)(I,{title:"Contacts",children:[Object(f.jsx)(v,{value:t,onChange:this.changeFilter}),Object(f.jsx)(S,{contacts:e,onDelete:this.deleteContact})]})]})}}]),n}(a.Component);n(30);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4ade1037.chunk.js.map