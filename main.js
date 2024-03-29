// var header = '\
// <div id="head">\
//   <a href="/"><span id="name-first">James</span><span id="name-last">Karsten</span></a>\
// </div>\
// <div id="navigation">\
//   <div class="dropdown">\
//     <a href="/photography" class="nav-level-1">Photography</a>\
//     <div class="nav-level-2">\
//       <a href="/photography/portrait">Portrait</a>\
//       <a href="/photography/landscape-urban">Landscape & Urban</a>\
//       <a href="/photography/surrealism">Surrealism</a>\
//       <a href="/photography/film">Black & White Film</a>\
//     </div>\
//   </div>\
//   <div class="dropdown">\
//     <a href="/design" class="nav-level-1">Design</a>\
//     <div class="nav-level-2">\
//       <a href="/design/print">Print Media</a>\
//       <a href="/design/logos">Logos</a>\
//     </div>\
//   </div>\
//   <a href="/coding" class="nav-level-1">Coding</a>\
//   <a href="/about" class="nav-level-1">About</a>\
// </div>';

var header = '\
<div id="head">\
  <a href="/"><span id="name-first">James</span><span id="name-last">Karsten</span></a>\
</div>\
<div id="navigation">\
  <a href="/coding" class="nav-level-1">Coding</a>\
  <a href="/about" class="nav-level-1">About</a>\
</div>';

var footer = '\
<div id="copyright">\
  Copyright &copy; 2023 James Karsten. All rights reserved.\
</div>';


var fav = document.createElement("link");
fav.setAttribute("rel", "icon");
fav.setAttribute("href", "/icons/favicon.svg");
fav.setAttribute("type", "image/svg");


document.head.appendChild(fav);
document.getElementsByTagName("header")[0].innerHTML = header;
document.getElementsByTagName("footer")[0].innerHTML = footer;
