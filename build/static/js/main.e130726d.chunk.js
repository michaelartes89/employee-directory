(this["webpackJsonpemp-directory"]=this["webpackJsonpemp-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),c=a.n(i),r=a(4),l=a(5),s=a(7),m=a(6),p=a(8);a(14);var u=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.firstname,src:e.image})),o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Occupation:")," ",e.occupation),o.a.createElement("li",null,o.a.createElement("strong",null,"Location:")," ",e.location))),o.a.createElement("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"},"\ud835\ude05"))};a(15);var g=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};a(16);var d=function(e){var t=Object(n.useRef)();return o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},e.children),o.a.createElement("div",{className:"search"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"employee"},"Find Employee by ID:"),o.a.createElement("input",{ref:t,name:"id",type:"text",className:"form-control",placeholder:"Type in an employee ID",id:"searchInput"}),o.a.createElement("button",{className:"btn btn-success",onClick:function(){e.handleInputChange(t.current.value)}},"Search"),o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.resetEmployee()}},"Reset"))))},h=a(1),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={employees:h,search:""},a.removeEmployee=function(e){var t=a.state.employees.filter((function(t){return t.id!==e}));a.setState({employees:t})},a.handleInputChange=function(e){a.setState({search:e})},a.searchEmployee=function(){return""!==a.state.search?a.state.employees.filter((function(e){return e.id==a.state.search})):a.state.employees},a.resetEmployee=function(){a.setState({employees:h}),console.log(a.state.employees)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.searchEmployee()),o.a.createElement(g,null,o.a.createElement(d,{handleInputChange:this.handleInputChange,resetEmployee:this.resetEmployee},"Employee List"),this.searchEmployee().map((function(t){return o.a.createElement(u,{removeEmployee:e.removeEmployee,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})))}}]),t}(n.Component);a(17);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e130726d.chunk.js.map