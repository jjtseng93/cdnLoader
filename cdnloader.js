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

cdnjs.common=()=>{

objls=function(obj)
      {
          let objO=obj;
          let listK={};
          while(obj!=null)
            {
                Object.getOwnPropertyNames(obj).forEach(i=>{
                    listK[i]=1;
                });
                obj=obj.__proto__;
            }
          let ret=Object.keys(listK);
          let oname=objO.constructor.name;
          if(oname=="Number")
            ret.unshift(objO);
          else if(oname=="String")
            ret.unshift(objO.substr(0,1000));
          else if(oname=="Array")
            ret.unshift(objO.slice(0,10).join(","));

          ret.unshift(objO.constructor.name);
          return ret;
      };

alert2=(pgText,cvtBR,asText)=>{
  if(pgText && typeof(pgText)=="object")
    pgText=JSON.stringify(pgText,null,1);

  pgText+="";
  if(cvtBR && !asText)
    pgText=pgText.split("\n").join("");

  var dlg=$(`<div>`)
          .css("position","fixed")
          .css("width","80vw")
          .css("height","80vh")
          .css("left","10vw")
          .css("top","5vh")
          .css("background-color","#38383c")
          .css("color","white")
          .css("overflow-wrap","break-word")
          .css("border-radius","20px")
          .css("font-size","20px")
          .css("padding","10px")
          .css("overflow","auto")
          .attr("onclick","$(this).remove()");
  if(asText)
    dlg.text(pgText);
  else
    dlg.html(pgText);
  $("body").append(dlg);
};  //  alert2

showlist=async (title,list,multi)=>{
  if(typeof(list)=="string")
    {
      list=list.split(",");
    }

  if(!list) return "";

  return (await new Promise(resolve=>{

  showlist_resolve=resolve;

  alert2(`<h3 class="alert alert-success text-center">
${title}</h3>
\n`+
  `<ul class="list-group">\n`+
  `
<li class="list-group-item list-group-item-danger text-center">取消Cancel</li>
`+
  list.map(i=>(`
<li class="list-group-item list-group-item-info" onclick="showlist_resolve(this.innerHTML);">${i}</li>
`)).join("\n")+
  `</ul>
`);
  })); //new Promise

};  //  showlist

};
