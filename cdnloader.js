function cdnjsList(keyword)
{
fetch("https://api.cdnjs.com/libraries").then(r=>r.text())
.then(r=>{
var obj=JSON.parse(r);
obj=obj.results;
var fil=obj.filter(i=>i.name.includes(keyword))
.map(i=>([i.name,i.latest]));
alert(
JSON.stringify(
Object.fromEntries(fil)
,null," ")
);  // alert
});  // fetch cdnjs
}

function cdnjs(keyword)
{
return new Promise( (res)=>{
fetch("https://api.cdnjs.com/libraries").then(r=>r.text())
.then(r=>{
var obj=JSON.parse(r);
obj=obj.results;
var fil=obj
.filter(  i=>(i.name==keyword)  )[0];

var ns=document.createElement("script");
ns.src=fil.latest;
ns.onload=res;
document.body.appendChild(ns);

});  // fetch cdnjs
});  // return new Promise
}

