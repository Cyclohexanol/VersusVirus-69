(this.webpackJsonpTakeEatEasy=this.webpackJsonpTakeEatEasy||[]).push([[0],{65:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),l=(a(70),a(50)),c=a(6),o=a(7),m=a(16),u=a(8),d=a(9),h=a(11),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"top-bar"},r.a.createElement("figure",{class:"image"},r.a.createElement("img",{class:"is-bar-logo",src:"TakeEatEasy_logo_blackwhite_horiz@2x.png"})),r.a.createElement(h.b,{className:"button",to:"login"},"Sign In")),r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"What is Project 69"),r.a.createElement("h2",{className:"subtitle"},"Swag text")))),r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"How does it work?"),r.a.createElement("h2",{className:"subtitle"},"More swag text")))))}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.submit=n.submit.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"submit",value:function(){"help"==this.state.password&&("buy"==this.state.username?this.props.login(1):"owner"==this.state.username?this.props.login(2):"volunteer"==this.state.username&&this.props.login(3))}},{key:"handleChange",value:function(e,t){this.setState((function(a){return a[e]=t,a}))}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"hero is-light is-fullheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container h-centered has-text-centered"},r.a.createElement("figure",{class:"image is-column-item"},r.a.createElement("img",{className:"is-login-logo",src:"TakeEatEasy_logo_colored@2x.png"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content h-centered"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Username",onChange:function(t){return e.handleChange("username",t.target.value)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"password",placeholder:"Password",onChange:function(t){return e.handleChange("password",t.target.value)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-medium",onClick:function(){return e.submit()}},"CONNECT")))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement(h.b,{className:"card-footer-item",to:"signup"},r.a.createElement("p",null,"Register"))))))))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"top-bar"},r.a.createElement(h.b,{to:"/"},r.a.createElement("figure",{class:"image"},r.a.createElement("img",{class:"is-bar-logo",src:"TakeEatEasy_logo_blackwhite_horiz@2x.png"}))),r.a.createElement(h.b,{className:"button",to:"login"},"Sign In")),r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("p",null,"This is a demo app. Account creation is deactivated."),r.a.createElement("p",null,"Please use the following dummy accounts to view the demo."),r.a.createElement("br",null),r.a.createElement("div",{className:"card is-fullwidth is-primary-background"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",{className:"is-size-4"},"Login as a consumer"),r.a.createElement("p",null,"Username: buy"),r.a.createElement("p",null,"Password: help"))),r.a.createElement("div",{className:"card is-fullwidth"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",{className:"is-size-4"},"Login as a volunteer"),r.a.createElement("p",null,"Username: volunteer"),r.a.createElement("p",null,"Password: help"))))))}}]),a}(n.Component),v=a(49),b=a(43),f=a(29),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.shopping_list.some((function(t){return t.name===e.props.title}));return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle"},this.props.title),r.a.createElement("div",null,"Quantity"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",key:"quantity",type:"number",onChange:function(t){return e.props.changeTempInfo("article_quantity",t.target.value)},defaultValue:this.props.item_quantity?this.props.item_quantity:1,disabled:!this.props.modifiable})),!this.props.modifiable&&r.a.createElement("p",{class:"control"},r.a.createElement("a",{class:"button is-static"},this.props.item_type?this.props.item_type:"units")),this.props.modifiable&&r.a.createElement("p",{class:"control"},r.a.createElement("span",{class:"select",onChange:function(t){return e.props.changeTempInfo("type",t.target.value)}},r.a.createElement("select",null,r.a.createElement("option",null,"units"),r.a.createElement("option",null,"grams"),r.a.createElement("option",null,"litters"))))),r.a.createElement("div",null,"Special request"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",key:"special_request",type:"textbox",onChange:function(t){return e.props.changeTempInfo("special_request",t.target.value)},defaultValue:this.props.item_special_request?this.props.item_special_request:"",disabled:!this.props.modifiable}))),r.a.createElement("div",{className:"card-footer"},!t&&r.a.createElement("div",{className:"card-footer-item is-primary-background",onClick:function(){return e.props.add(e.props.title)}},"Add to chart"),t&&r.a.createElement("button",{onClick:function(){return e.props.remove(e.props.title)},className:"card-footer-item is-theme-red-background"},"Remove"))))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.order_status),r.a.createElement(n.Fragment,null,"pending"!==this.props.order_status&&r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{className:"button is-medium is-primary is-column-item",to:"/app/shoppinglist"},"Back"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"subtitle"},"Delivery information"),r.a.createElement("div",null,"Name"),r.a.createElement("div",{class:"field"},r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",type:"text",placeholder:"John Inneed",onChange:function(t){return e.props.changeTempInfo("contact",t.target.value)}}))),r.a.createElement("div",null,"Address"),r.a.createElement("div",{class:"field"},r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",type:"text",placeholder:"Heart Street, 8000 Zurich",onChange:function(t){return e.props.changeTempInfo("delivery_address",t.target.value)}}))),r.a.createElement("div",null,"Contact phone number"),r.a.createElement("div",{class:"field"},r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",type:"text",placeholder:"+41 78 777 55 66",onChange:function(t){return e.props.changeTempInfo("contact_phone",t.target.value)}}))))),r.a.createElement("button",{className:"button is-medium is-primary is-column-item",onClick:function(t){return e.props.changeTempInfo("order_status","pending")}},"Confirm")),"pending"===this.props.order_status&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card is-column-item is-light"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,"Your order has been processed. We are looking for a volunteer !"))),r.a.createElement(h.b,{className:"button is-medium is-primary is-column-item",to:"/app"},"Close")))}}]),a}(n.Component),C=a(113),O=a(114),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={key_autocomplete:"Init"},n.addChart=n.addChart.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"addChart",value:function(e){this.setState({key_autocomplete:e.name}),this.props.addToChart(e)}},{key:"render",value:function(){var e=this;return this.props.match.isExact?r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{className:"button is-medium is-primary is-column-item",to:"/app"},"Back"),r.a.createElement("div",{className:"is-flex-column is-fullheight h-centered is-column-item"},r.a.createElement("div",{className:"subtitle is-size-3"},"Create Shopping List"),r.a.createElement("div",{className:"is-column-item",style:{minWidth:300}},r.a.createElement(O.a,{freeSolo:!0,key:this.state.key_autocomplete,options:[{name:"Chocolate",type:"g"},{name:"Beans",type:"g"},{name:"Milk",type:"L"},{name:"Orange Juice",type:"L"}].map((function(e){return e.name})),onChange:this.props.handleAutoCompleteChange,renderInput:function(e){return r.a.createElement(C.a,Object.assign({},e,{label:"Search",margin:"normal",variant:"outlined"}))}}),r.a.createElement("div",null,this.props.show_card&&r.a.createElement(y,Object.assign({key:this.props.search,title:this.props.search,add:this.addChart,remove:this.props.remove,onChange:this.props.handleChange,changeTempInfo:this.changeTempInfo},this.props,this.state,{modifiable:!0})))),r.a.createElement("div",{className:"subtitle is-size-4"},"My List"),0===this.props.shopping_list.length&&r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},"Your list is currently empty type a product name in the search bar to add an item.")),this.props.shopping_list.map((function(t){return r.a.createElement(y,Object.assign({key:t.name,title:t.name,item_quantity:t.quantity,item_special_request:t.special_request,item_type:t.type,add:e.addChart,remove:e.props.remove},e.state,e.props))}))),0!==this.props.shopping_list.length&&r.a.createElement(h.b,{className:"button is-medium is-primary",to:"/app/shoppinglist/confirm"},"Request delivery")):r.a.createElement(f.b,{path:"/app/shoppinglist/confirm",render:function(t){return r.a.createElement(N,Object.assign({},t,{order_status:e.props.order_status,changeTempInfo:e.props.changeTempInfo}))}})}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={order_status:"",shopping_list:[],shopping_lists_history:[],contact:"",contact_phone:"",delivery_address:"",search:"",show_card:!1,special_request:"",article_quantity:1,type:""},n.addToChart=n.addToChart.bind(Object(m.a)(n)),n.removeChart=n.removeChart.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleAutoCompleteChange=n.handleAutoCompleteChange.bind(Object(m.a)(n)),n.changeTempInfo=n.changeTempInfo.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"changeTempInfo",value:function(e,t){this.setState((function(a){return a[e]=t,a}))}},{key:"addToChart",value:function(e){var t=this;this.setState((function(a){var n,r=a.shopping_list.some((function(t){return t.name===e}))||null===e,s={name:e,quantity:t.state.article_quantity,special_request:t.state.special_request,type:t.state.type};return r||(a.shopping_list=[].concat(Object(b.a)(a.shopping_list),[s])),t.setState((n={special_request:"",article_quantity:1},Object(v.a)(n,"special_request",""),Object(v.a)(n,"type",""),n)),a.show_card=!1,a.search="",a}))}},{key:"removeChart",value:function(e){this.setState((function(t){return t.shopping_list=t.shopping_list.filter((function(t){return t.name!==e})),t.show_card=!1,t}))}},{key:"handleChange",value:function(e,t){this.setState((function(a){return a[e]=t,a}))}},{key:"handleAutoCompleteChange",value:function(e,t){this.setState((function(e){return e.search=t,e.show_card=""!==t&&null!==t,e}))}},{key:"render",value:function(){var e=this;return this.props.match.isExact?r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},"pending"===this.state.order_status&&r.a.createElement("div",{className:"container h-centered has-text-centered"},r.a.createElement("div",{className:"card is-max-350"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle"},"Current order"),r.a.createElement("p",{className:"has-text-weight-semibold"},"Deliver to:"),r.a.createElement("p",null,this.state.contact),r.a.createElement("p",null,this.state.delivery_address),r.a.createElement("br",null),r.a.createElement("div",{className:"tag is-primary"},"Looking for a volunteer")))),"pending"!==this.state.order_status&&r.a.createElement("p",null,"You currently have no pending deliveries. Click on the button below to create one."))),!this.state.order_status&&r.a.createElement(h.b,{to:"/app/shoppinglist",className:"button is-primary"},"Create Shopping List"),this.state.order_status&&r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Please wait while we process your order."),r.a.createElement("p",null,"You will get notified of an estimated delivery time soon ..."))))):r.a.createElement(n.Fragment,null,r.a.createElement(f.b,{path:"/app/shoppinglist",render:function(t){return r.a.createElement(k,Object.assign({},t,e.state,{order_status:e.state.order_status,handleChange:e.handleChange,remove:e.removeChart,changeTempInfo:e.changeTempInfo,handleAutoCompleteChange:e.handleAutoCompleteChange,removeChart:e.removeChart,addToChart:e.addToChart}))}}))}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ready:!1},n}return Object(o.a)(a,[{key:"toggleReady",value:function(){var e=!this.state.ready;this.setState({ready:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card is-fullwidth"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"is-flex space-between"},r.a.createElement("p",{className:"subtitle has-text-weight-bold"},this.props.title),"active"===this.props.orderStatus&&!this.state.ready&&r.a.createElement("button",{className:"button is-small is-primary is-outlined",onClick:function(){return e.toggleReady()}},"Tick"),"active"===this.props.orderStatus&&this.state.ready&&r.a.createElement("button",{className:"button is-small is-primary",onClick:function(){return e.toggleReady()}},"Picked up")),this.props.item_special_request&&r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"has-text-weight-semibold"},"Special Request"),r.a.createElement("p",null,this.props.item_special_request),r.a.createElement("br",null)),r.a.createElement("p",{className:"has-text-weight-semibold"},"Quantity"),r.a.createElement("p",null,this.props.item_quantity," ",this.props.item_type)))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{className:"button is-medium is-primary",to:"/app"},"Back"),r.a.createElement("div",{className:"is-flex-column h-centered"},this.props.currentOrder.items.map((function(t){return r.a.createElement(_,{key:t.name,title:t.name,item_quantity:t.quantity,item_special_request:t.note,item_type:t.type,item_read:t.ready,orderStatus:e.props.orderStatus})}))))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),console.log(e),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"is-flex-column is-fullheight"},r.a.createElement(h.b,{className:"button is-medium is-primary is-column-item",to:"/app"},"Back"),r.a.createElement("div",{className:"is-flex-column h-centered"},this.props.ordersDelivered.length<1&&r.a.createElement("div",{className:"card is-max-350 is-column-item"},r.a.createElement("div",{className:"card-content h-centered"},r.a.createElement("p",null,"You did not deliver any orders yet."))),this.props.ordersDelivered.length>0&&this.props.ordersDelivered.map((function(e){return r.a.createElement("div",{key:e.number,className:"card is-max-350 is-column-item"},r.a.createElement("div",{className:"card-content h-centered"},r.a.createElement("p",{className:"subtitle"},"Order ",e.number),r.a.createElement("p",{className:"has-text-weight-semibold"},"Deliver to:"),r.a.createElement("p",null,e.address),r.a.createElement("p",null,e.deliveredOn),r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-weight-semibold"},"Contact number:"),r.a.createElement("p",null,e.phone)))}))))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ordersDelivered:[],rangeKm:10,maxLoad:15,orderStatus:"",orderLists:[{status:"",contact:"John Inneed",address:"Heart Road 36, 8000 Zurich",number:"221-148",deliveredOn:"",items:[{name:"Pasta",quantity:1e3,type:"grams",note:"Penne or spaghetti",weight:1,ready:!1},{name:"Toast",quantity:500,type:"grams",weight:.5,ready:!1},{name:"Milk",quantity:3,note:"Skinny",type:"liters",weight:3,ready:!1},{name:"Orange Juice",quantity:2,note:"Skinny",type:"liters",weight:2,ready:!1}],weight:6.5,phone:"078 777 66 55"}],activeList:null},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"findOrder",value:function(){this.state.ordersDelivered.length<this.state.orderLists.length?(this.handleChange("activeList",this.state.orderLists[this.state.ordersDelivered.length]),this.handleChange("orderStatus","pending")):this.handleChange("orderStatus","not found")}},{key:"acceptOrder",value:function(){this.handleChange("orderStatus","active")}},{key:"deliverOrder",value:function(){var e=this;this.handleChange("orderStatus",""),this.setState((function(e){var t=new Date,a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();return e.activeList.deliveredOn=a,e})),this.setState((function(t){return t.ordersDelivered=[].concat(Object(b.a)(e.state.ordersDelivered),[e.state.activeList]),t})),this.handleChange("activeList",null)}},{key:"handleChange",value:function(e,t){this.setState((function(a){return a[e]=t,a}))}},{key:"render",value:function(){var e=this;return this.props.match.isExact?r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container h-centered has-text-centered"},!this.state.activeList&&r.a.createElement("div",null,"You currently have no pending deliveries."),this.state.activeList&&r.a.createElement("div",{className:"card is-max-350"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle"},"Current order"),r.a.createElement("p",{className:"has-text-weight-semibold"},"Deliver to:"),r.a.createElement("p",null,this.state.activeList.contact),r.a.createElement("p",null,this.state.activeList.address),r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-weight-semibold"},"Estimated weight:"),r.a.createElement("p",null,this.state.activeList.weight," kg"),r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-weight-semibold"},"Contact number:"),r.a.createElement("p",null,this.state.activeList.phone)),r.a.createElement("footer",{className:"card-footer"},r.a.createElement(h.b,{className:"card-footer-item",to:"".concat(this.props.match.url,"/view-list")},r.a.createElement("span",null,"View shopping list"))),r.a.createElement("footer",{className:"card-footer"},"pending"===this.state.orderStatus&&r.a.createElement("button",{className:"card-footer-item",onClick:function(){return e.acceptOrder()}},r.a.createElement("span",{className:"is-size-6"},"Accept order")),"active"===this.state.orderStatus&&r.a.createElement("button",{className:"card-footer-item",onClick:function(){return e.deliverOrder()}},r.a.createElement("span",{className:"is-size-6"},"Mark as delivered")))),r.a.createElement("br",null),r.a.createElement(h.b,{className:"button is-medium",to:"".concat(this.props.match.url,"/view-history")},"Deliveries History")))),!this.state.activeList&&r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},"not found"===this.state.orderStatus&&r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"tag is-warning is-column-item is-size-6"},"No match found for these settings.")),"waiting"!==this.state.orderStatus&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"title is-size-4"},"Find a person in need !"),r.a.createElement("div",{className:"subtitle is-size-5"},"Enter your settings"),r.a.createElement("div",{className:"card is-max-350"},r.a.createElement("div",{className:"card-content h-centered"},r.a.createElement("div",{className:"is-flex-column"},r.a.createElement("div",{className:"is-column-item"},r.a.createElement("p",null,"Max delivery distance"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"number",onChange:function(t){return e.handleChange("rangeKm",t.target.value)},value:this.state.rangeKm})),r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-static"},"km")))),r.a.createElement("div",{className:"is-column-item"},r.a.createElement("p",null,"Max load weight"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"number",onChange:function(t){return e.handleChange("maxLoad",t.target.value)},value:this.state.maxLoad})),r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-static"},"kg")))),r.a.createElement("button",{onClick:function(){return e.findOrder()},className:"button is-large"},"GO"))))),"waiting"===this.state.orderStatus&&r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Looking for a someone that needs help !"),r.a.createElement("p",null,"Thank you for your time !")))))):r.a.createElement(n.Fragment,null,r.a.createElement(f.b,{path:"/app/view-history",render:function(t){return r.a.createElement(x,Object.assign({},t,{ordersDelivered:e.state.ordersDelivered}))}}),r.a.createElement(f.b,{path:"/app/view-list",render:function(t){return r.a.createElement(w,Object.assign({},t,{orderStatus:e.state.orderStatus,currentOrder:e.state.activeList}))}}))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={added:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"top-bar no-shrink"},r.a.createElement("figure",{class:"image"},r.a.createElement("img",{class:"is-bar-logo",src:"TakeEatEasy_logo_blackwhite_horiz@2x.png"})),r.a.createElement("button",{className:"button",onClick:function(){e.props.logout()}},"Log Out"))}}]),a}(n.Component),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(I,this.props),1===this.props.userId&&r.a.createElement(j,this.props),3===this.props.userId&&r.a.createElement(S,this.props),3!==this.props.userId&&1!==this.props.userId&&"Can't resolve User Type")}}]),a}(n.Component),A=a(45),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isAuthenticated:!1,userId:0},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.login=n.login.bind(Object(m.a)(n)),n.logout=n.logout.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=new A.a,t=e.get("userId"),a=e.get("isAuthenticated");t&&a&&(this.handleChange("userId",parseInt(t)),this.handleChange("isAuthenticated",!0))}},{key:"login",value:function(e){var t=new A.a;this.handleChange("userId",parseInt(e)),this.handleChange("isAuthenticated",!0),t.set("userId",e,{path:"/"}),t.set("isAuthenticated",!0,{path:"/"})}},{key:"logout",value:function(){var e=new A.a;this.handleChange("isAuthenticated",!1),this.handleChange("userId",0),e.remove("userId",{path:"/"}),e.remove("isAuthenticated",{path:"/"})}},{key:"handleChange",value:function(e,t){this.setState((function(a){return a[e]=t,a}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return e.state.isAuthenticated?r.a.createElement(f.a,{to:"/app"}):r.a.createElement(f.a,{to:"/home"})}}),r.a.createElement(z,{path:"/home",component:p,isAuthenticated:this.state.isAuthenticated}),r.a.createElement(z,{path:"/login",component:E,isAuthenticated:this.state.isAuthenticated,login:this.login}),r.a.createElement(z,{path:"/signup",component:g,isAuthenticated:this.state.isAuthenticated}),r.a.createElement(F,{path:"/app",component:q,isAuthenticated:this.state.isAuthenticated,logout:this.logout,userId:this.state.userId})))}}]),a}(n.Component),L=function(e){return e.isAuthenticated?r.a.createElement(e.component,e):r.a.createElement(f.a,{to:{pathname:"/login",state:{from:e.location}}})},F=function(e){var t=e.component,a=e.isAuthenticated,n=Object(l.a)(e,["component","isAuthenticated"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return r.a.createElement(L,Object.assign({},e,n,{component:t,isAuthenticated:a}))}}))},D=function(e){return e.isAuthenticated?r.a.createElement(f.a,{to:{pathname:"/app"}}):r.a.createElement(e.component,e)},z=function(e){var t=e.component,a=e.isAuthenticated,n=Object(l.a)(e,["component","isAuthenticated"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return r.a.createElement(D,Object.assign({},n,e,{component:t,isAuthenticated:a}))}}))},M=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.75478884.chunk.js.map