(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,n){e.exports=n(596)},169:function(e,t,n){},171:function(e,t,n){},596:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),i=n(163),o=n.n(i),r=(n(169),n(81)),l=n(82),s=n(84),u=n(83),d=n(85),m=n(12),h=(n(171),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={scale:1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.scale,t=this.node,n=t.parentNode.offsetWidth/t.offsetWidth;e!==n&&(n<1?this.setState({scale:n}):e<1&&this.setState({scale:1}))}},{key:"render",value:function(){var e=this,t=this.state.scale;return c.a.createElement("div",{className:"display-screen"},c.a.createElement("div",{className:"display",style:{transform:"scale(".concat(t,", ").concat(t,")")},ref:function(t){return e.node=t}},this.props.children))}}]),t}(c.a.Component)),v=n(105),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={input:0},n.buttonClicked=n.buttonClicked.bind(Object(m.a)(Object(m.a)(n))),n.reset=n.reset.bind(Object(m.a)(Object(m.a)(n))),n.toggle=n.toggle.bind(Object(m.a)(Object(m.a)(n))),n.zero=n.zero.bind(Object(m.a)(Object(m.a)(n))),n.dot=n.dot.bind(Object(m.a)(Object(m.a)(n))),n.percentage=n.percentage.bind(Object(m.a)(Object(m.a)(n))),n.chooseOperand=n.chooseOperand.bind(Object(m.a)(Object(m.a)(n))),n.evaluate=n.evaluate.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"buttonClicked",value:function(e){0===this.state.input?this.setState({input:e}):this.setState({input:this.state.input+e})}},{key:"dot",value:function(e){this.setState({input:this.state.input+e})}},{key:"zero",value:function(e){0===this.state.input?this.setState({input:0}):this.setState({input:this.state.input+e})}},{key:"percentage",value:function(e){this.setState({input:this.state.input/100})}},{key:"chooseOperand",value:function(e){this.setState({input:this.state.input+e})}},{key:"evaluate",value:function(){try{v.eval(this.state.input)}catch(e){if(e)return this.setState({input:"Error"}),0}this.setState({input:v.eval(this.state.input)})}},{key:"reset",value:function(e){this.setState({input:0})}},{key:"toggle",value:function(){/[+%\/*.]/.test(this.state.input)?this.setState({input:0}):this.setState({input:-1*this.state.input})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(h,null,this.state.input),c.a.createElement("div",{className:"row"},c.a.createElement("div",{onClick:function(){return e.reset("C")},className:"col dark-grey"},"C"),c.a.createElement("div",{onClick:function(){return e.toggle("+/-")},className:"col dark-grey"},"+/-"),c.a.createElement("div",{onClick:function(){return e.percentage("%")},className:"col dark-grey"},"%"),c.a.createElement("div",{onClick:function(){return e.chooseOperand("/")},className:"col orange"},"/")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{onClick:function(){return e.buttonClicked("7")},className:"col light-grey"},"7"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("8")},className:"col light-grey"},"8"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("9")},className:"col light-grey"},"9"),c.a.createElement("div",{onClick:function(){return e.chooseOperand("*")},className:"col orange"},"*")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{onClick:function(){return e.buttonClicked("4")},className:"col light-grey"},"4"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("5")},className:"col light-grey"},"5"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("6")},className:"col light-grey"},"6"),c.a.createElement("div",{onClick:function(){return e.chooseOperand("-")},className:"col orange"},"-")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{onClick:function(){return e.buttonClicked("1")},className:"col light-grey"},"1"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("2")},className:"col light-grey"},"2"),c.a.createElement("div",{onClick:function(){return e.buttonClicked("3")},className:"col light-grey"},"3"),c.a.createElement("div",{onClick:function(){return e.chooseOperand("+")},className:"col orange"},"+")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{onClick:function(){return e.zero("0")},className:"col-6 light-grey"},"0"),c.a.createElement("div",{onClick:function(){return e.dot(".")},className:"col-3 light-grey"},"."),c.a.createElement("div",{onClick:function(){return e.evaluate("=")},className:"col-3 orange"},"="))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,2,1]]]);
//# sourceMappingURL=main.d7d2198e.chunk.js.map