# cdnLoader
Conveniently load js from cdnjs without the need to memorize js URLs
# Usage
- Add the script tag to your html
&lt;script src="<https://jjtseng93.github.io/cdnloader/cdnloader.js>"&gt;&lt;/script&gt;
- cdnjs("vue") to load vue.js asynchronously from cdnjs
  * Since it's async, you should use this syntax for immediate use
  * cdnjs("vue").then(()=>{Vue.....});
- cdnjsList("vue") to list available libraries on cdnjs
