(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(a,e){var A="https://strider-server.herokuapp.com/tasks/";a.exports=function(){this.getAllTasksFromDatabase=function(a){fetch(A,{method:"GET"}).then(function(a){return a.json()}).then(function(e){a(e)})},this.getTaskById=function(a,e){fetch(A+a,{method:"GET"}).then(function(a){return a.json()}).then(function(a){e(a)})},this.deleteTaskById=function(a){fetch(A+a,{method:"DELETE"}).then(function(a){console.log(a)})},this.addTask=function(a,e){fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(a){return a.json()}).then(function(a){e(a)})},this.updateTask=function(a){fetch(A,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(a){console.log(a)})}}},,,,,,,,function(a,e,A){a.exports=A.p+"static/media/logo.19740d60.svg"},function(a,e){a.exports="data:image/png;base64,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"},function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAAAMRCwOQysPRCwORCwORCsORCsORCsORCsORCsNQyoORCsaTTMUOycORCsPRCsORCsORSsPRSwAVSsPRCsORCsORCsMQysPRi0ORCsORCsAQEAPRCwORCsORCsLQywPRSsORCsORSkORCsNQysOQywNRCwORCsORCsORCsPRCsORCsNQykPRSwNRCsORCsNQy0QRCoORCsRQywORCsNQS4ORysORCsSRiwOQysJQi8ORCsMRi4ORCsQQDAORCsRRDMORCsXRi4AOTkNRCsORCwAMzMOQysAVVUORSsAgAAOQyoAAAANRSwPQywPRCsPRCsPQiwOQysKRykORCsORSwORCsMRCwMRikNRCoNRCsPSy0PRSoNQiwORCsQRSsPQywNQygORCsKRScORCsMSTEORCsORCwORCwMRS0RRCsORCsPQysNRCsPRSsPRCoNRCsORCsORCsORSsVQCsORCsNRCoNRCsORysORSwORCsORCsOQysORCsQSCgPRCkORCsPRC0NRSsORCkORCsORCsMRikLRC0ORCsORCsQRCwQQikORCsOQioSQC4NRisORCsPQywORSsORSwPQyoSSSQORCsNRSoNQysOQysORSsORCwORSoORCsPRCoORCsORCsNRCsORCsORSsAQCAORSsORCsORSsORCsNRSsNQygORCsLQCsNRSwORCsORCsORCsORioORCsPQikQRysOQysNQyoPRCsQQysORCwNRSsOQysNQCYNRSsORCsPRSwORSsNRCwPRCsPQyoORCsORCsORCsORCoORCsOQysASSQORCsORCwORCsORCsNQywNQysPQysNRSsPRi4PRSoNRi0MQSoORCsOQisNQywPRCoORCsPRCwPRCsNQysPRSwORSsOQysORCsPRSsORCwNRCsNRSsPRCwORCsNQysPQywORSkORCsNRCwOQyoNRCsORCoNRCsORCoNRSwORCoPQysPRisORSsORCsPRCsOQysORCsAAAA0M6ApAAAA+3RSTlMAKWqex93p4NaxhUcKDXHS86A0BnjtuCoz+oME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"},function(a,e,A){a.exports=A.p+"static/media/reset-icon.6859dc74.png"},,,,,function(a,e,A){a.exports=A(45)},,,,,function(a,e,A){},function(a,e,A){},function(a,e,A){},function(a,e,A){},function(a,e,A){},function(a,e,A){},,,,,function(a,e,A){"use strict";A.r(e);var t=A(0),s=A.n(t),n=A(21),w=A.n(n),R=(A(35),A(5)),c=A(6),r=A(8),o=A(7),C=A(9),i=(A(36),A(22)),O=A.n(i),f=function(a){function e(a){var A;return Object(R.a)(this,e),(A=Object(r.a)(this,Object(o.a)(e).call(this,a))).state={},A}return Object(C.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"navbar"},s.a.createElement("a",{href:"https://strider.ag/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"logo",alt:"strider-logo",src:O.a})))}}]),e}(t.Component),g=A(29),l=A(11),u=A(23),D=A.n(u),P=A(24),d=A.n(P),L=A(25),T=A.n(L),v=(A(37),A(14)),j=A.n(v),B=new j.a,E=function(a){function e(a){var A;return Object(R.a)(this,e),(A=Object(r.a)(this,Object(o.a)(e).call(this,a))).state={id:"",name:A.props.name,description:A.props.description},A}return Object(C.a)(e,a),Object(c.a)(e,[{key:"deleteTask",value:function(a){B.deleteTaskById(a),this.setState({id:a})}},{key:"resetTask",value:function(a){var e={id:a.id,name:a.name,description:"false"};B.updateTask(e),this.setState({description:"false"})}},{key:"completeTask",value:function(a){var e={id:a.id,name:a.name,description:"true"};B.updateTask(e),this.setState({description:"true"})}},{key:"render",value:function(){var a=this;return s.a.createElement("div",{className:"container"},""===this.state.id?s.a.createElement("div",{className:"task-card"},"true"===this.state.description?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"task-title",style:{textDecoration:"line-through"}},this.state.name),s.a.createElement("img",{className:"complete-button",onClick:function(){a.resetTask(a.props)},src:T.a,alt:"complete-button"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"task-title"},this.state.name),s.a.createElement("img",{className:"complete-button",onClick:function(){a.completeTask(a.props)},src:d.a,alt:"complete-button"})),s.a.createElement("img",{className:"delete-button",onClick:function(){a.deleteTask(a.props.id)},src:D.a,alt:"delete-button"})):s.a.createElement("div",null))}}]),e}(t.Component),y=(A(38),A(39),function(a){function e(a){var A;return Object(R.a)(this,e),(A=Object(r.a)(this,Object(o.a)(e).call(this,a))).state={tasks:A.props.tasks},A}return Object(C.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"selector"},s.a.createElement("div",{className:"left"},s.a.createElement("h1",{className:"selector-title"},"Todos")),s.a.createElement("div",{className:"center"},s.a.createElement("h1",{className:"selector-title"},"Pendentes")),s.a.createElement("div",{className:"right"},s.a.createElement("h1",{className:"selector-title"},"Feitos")))),s.a.createElement("div",null,this.props.tasks.reverse().map(function(a){return s.a.createElement(E,a)})))}}]),e}(t.Component)),N=(A(40),new j.a),m=function(a){function e(a){var A;return Object(R.a)(this,e),(A=Object(r.a)(this,Object(o.a)(e).call(this,a))).state={newTask:"",isActive:{},tasks:[]},A.handleNewTask=A.handleNewTask.bind(Object(l.a)(A)),A.handleKeyPress=A.handleKeyPress.bind(Object(l.a)(A)),A.addNewTask=A.addNewTask.bind(Object(l.a)(A)),A}return Object(C.a)(e,a),Object(c.a)(e,[{key:"componentDidMount",value:function(){var a=this;new Promise(function(a){N.getAllTasksFromDatabase(a)}).then(function(e){a.setState({tasks:e})})}},{key:"addNewTask",value:function(){var a=this,e={name:this.state.newTask,description:"false"};this.setState({isActive:{animation:"loading 1s infinite",pointerEvents:"none"}}),new Promise(function(a){N.addTask(e,a)}).then(function(e){a.setState({tasks:[e].concat(Object(g.a)(a.state.tasks)),newTask:"",isActive:{}})})}},{key:"handleNewTask",value:function(a){this.setState({newTask:a.target.value})}},{key:"handleKeyPress",value:function(a){"Enter"===a.key&&this.addNewTask()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"search-bar"},s.a.createElement("div",{className:"search-bar-container"},s.a.createElement("input",{style:this.state.isActive,value:this.state.newTask,placeholder:"O que precisa ser feito?",onChange:this.handleNewTask,onKeyPress:this.handleKeyPress}),s.a.createElement("div",{className:"button",onClick:this.addNewTask},s.a.createElement("h1",null,"Adicionar")))),s.a.createElement(y,{tasks:this.state.tasks}))}}]),e}(t.Component),M=function(a){function e(a){var A;return Object(R.a)(this,e),(A=Object(r.a)(this,Object(o.a)(e).call(this,a))).state={},A}return Object(C.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement(m,null))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=A(26),h=A(10);w.a.render(s.a.createElement(X.a,{basename:"/Strider-Challenge2"},s.a.createElement(h.a,{exact:!0,path:"",component:M})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}],[[30,1,2]]]);
//# sourceMappingURL=main.d297b204.chunk.js.map