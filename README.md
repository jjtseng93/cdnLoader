# cdnLoader
Conveniently load js from cdnjs without the need to memorize js URLs
# Usage
- Add this script tag to your html
  * &lt;script src="<https://jjtseng93.github.io/cdnloader/cdnloader.js>"&gt;&lt;/script&gt;
- Or use these command in the console
  * var ns=document.createElement("script");
ns.src="https://jjtseng93.github.io/cdnloader/cdnloader.js";
document.body.appendChild(ns);
- cdnjs("vue") to load vue.js asynchronously from cdnjs
  * Since it's async, you should use this syntax for immediate use
  * cdnjs("vue").then(()=>{Vue.....});
- cdnjsList("vue") to list available libraries on cdnjs
