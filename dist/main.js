!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.time="0.00",this.draw()}var e,i,a;return e=t,(i=[{key:"draw",value:function(){var t=document.getElementsByClassName("stopwatch");t[0].innerHTML="",t[0].innerHTML+="".concat(this.time)}},{key:"animate",value:function(t){this.time=t,this.draw(this.ctx)}},{key:"stop",value:function(){var t=this.time;this.time=t}}])&&n(e.prototype,i),a&&n(e,a),t}();function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=[["#000000","#08fb7b"],["#000000","#ef8708"],["#ffffff","#c31e9e"],["#ffffff","#6b4aca"],["#ffffff","#2b6aea"]],o=50,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.x=e.width/2,this.y=e.height/2,this.angle=0,this.draw(this.ctx)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t,e){e=e||1,t.beginPath(),t.moveTo(this.x,this.y),t.translate(this.x,this.y),t.rotate(this.angle*Math.PI/180),t.translate(-this.x,-this.y);for(var i=0;i<=6;i++)t.lineTo(this.x+o*e*Math.cos(2*i*Math.PI/6),this.y+o*e*Math.sin(2*i*Math.PI/6));t.fillStyle=s[2][1],t.fill(),t.beginPath(),t.moveTo(this.x,this.y);for(var n=0;n<=6;n++)t.lineTo(this.x+44*e*Math.cos(2*n*Math.PI/6),this.y+44*e*Math.sin(2*n*Math.PI/6));t.fillStyle=s[2][0],t.fill()}},{key:"animate",value:function(t,e,i){this.angle=20/t*i,this.draw(this.ctx,e)}},{key:"stop",value:function(){this.angle=0}}])&&r(e.prototype,i),n&&r(e,n),t}();function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=["#08fb7b","#ef8708","#c31e9e","#6b4aca","#2b6aea"],u=60,f=5,y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.angle=330,this.rotateAngle=0,this.x=e.width/2,this.y=e.height/2,this.draw(this.ctx)}var e,i,n;return e=t,(i=[{key:"tip",value:function(t){return[this.canvas.width/2+Math.cos(this.angle*Math.PI/180)*(u*t+f),this.canvas.height/2+Math.sin(this.angle*Math.PI/180)*(u*t+f)]}},{key:"draw",value:function(t,e){e=e||1,this.cursorX=this.canvas.width/2+Math.cos(this.angle*Math.PI/180)*(u*e),this.cursorY=this.canvas.height/2+Math.sin(this.angle*Math.PI/180)*(u*e),t.translate(this.cursorX,this.cursorY),t.rotate(this.angle*Math.PI/180),t.translate(-this.cursorX,-this.cursorY),t.beginPath(),t.moveTo(this.cursorX-f,this.cursorY-f),t.lineTo(this.cursorX+f,this.cursorY),t.lineTo(this.cursorX-f,this.cursorY+f),t.fillStyle=c[2],t.fill(),t.translate(this.cursorX,this.cursorY),t.rotate(-this.angle*Math.PI/180),t.translate(-this.cursorX,-this.cursorY)}},{key:"animate",value:function(t,e){this.draw(t,e)}},{key:"pivotClockwise",value:function(t,e,i){this.angle+=150/t,this.draw(e,i)}},{key:"pivotCounterClockwise",value:function(t,e,i){this.angle-=150/t,this.draw(e,i)}}])&&h(e.prototype,i),n&&h(e,n),t}();function m(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d={COLORS:[["#000000","#022713"],["#000000","#261501"],["#ffffff","#f5dcf0"],["#ffffff","#e7e3f7"],["#ffffff","#dde8fc"]]},b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.angle=-60,this.x=e.width/2,this.y=e.height/2,this.draw(this.ctx)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){for(var e,i=0;i<=6;i++){var n,a;0!==i&&(this.angle=this.angle+60),n=this.x+1500*Math.cos(Math.PI*this.angle/180),a=this.y+1500*Math.sin(Math.PI*this.angle/180),t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(n,a),void 0!==e&&t.lineTo.apply(t,m(e)),t.strokeStyle=d.COLORS[2][i%2],t.fillStyle=d.COLORS[2][i%2],t.fill(),t.stroke(),e=[n,a]}}},{key:"animate",value:function(t){this.draw(this.ctx)}}])&&g(e.prototype,i),n&&g(e,n),t}();function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){a=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return i}(t,e)||M(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){if(t){if("string"==typeof t)return x(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function k(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var T=[["#08fb7b","rgba(0,0,0,0)"],["#ef8708","rgba(0,0,0,0)"],["#c31e9e","rgba(0,0,0,0)"],["#6b4aca","rgba(0,0,0,0)"],["#2b6aea","rgba(0,0,0,0)"]],C=40,P=1e3,S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.angle=-60,this.animateWallAngle=-60,this.x=e.width/2,this.y=e.height/2,this.combos=[[!0,!0,!0,!0,!0,!1],[!0,!0,!0,!0,!1,!0],[!0,!0,!0,!1,!0,!0],[!0,!0,!1,!0,!0,!0],[!0,!1,!0,!0,!0,!0],[!1,!0,!0,!0,!0,!0],[!0,!1,!0,!1,!0,!1],[!1,!0,!1,!0,!1,!0],[!0,!0,!1,!0,!0,!1]],this.wallCombos=[]}var e,i,n;return e=t,(i=[{key:"draw",value:function(t,e){for(var i,n=[],a=-1;a<=5;a++){-1!==a&&(this.angle=this.angle+60),this.angle>=360&&(this.angle=this.angle%360);var r,s,o,l,h=void 0,c=void 0;r=this.x+Math.cos(Math.PI*this.angle/180)*P,s=this.y+Math.sin(Math.PI*this.angle/180)*P,o=this.x+Math.cos(Math.PI*this.angle/180)*(P-C),l=this.y+Math.sin(Math.PI*this.angle/180)*(P-C),t.beginPath(),t.moveTo(o,l),t.lineTo(r,s),void 0!==i&&(t.lineTo.apply(t,w(i)),h=i[0]+Math.cos(Math.PI*(this.angle+120)/180)*C,c=i[1]+Math.sin(Math.PI*(this.angle+120)/180)*C,t.lineTo(h,c),t.lineTo(o,l)),-1===a||!1===e[a]?(t.strokeStyle=T[2][1],t.fillStyle=T[2][1]):e[a]&&(t.strokeStyle=T[2][0],t.fillStyle=T[2][0]),t.closePath(),t.fill(),t.stroke(),i=[r,s];var u={length:1e3,isWall:""};u.isWall=-1===a?"line":e[a],n.push(u)}this.wallCombos.push(n)}},{key:"collidesWith",value:function(t,e){if(0!==this.wallCombos.length){for(var i=0;i<this.wallCombos.length;i++)for(var n=this.wallCombos[i],a=1;a<n.length;a++){var r=n[a];if(r.isWall){var s=p(t,2),o=s[0],l=s[1],h=p(r.point1,2),c=h[0],u=h[1],f=p(r.point2,2),y=f[0],m=f[1];if(this.getDistance(o,l,c,u)+this.getDistance(o,l,y,m)<=r.length*e-39)return!0}}return!1}}},{key:"getDistance",value:function(t,e,i,n){var a=t-i,r=e-n;return Math.sqrt(a*a+r*r)}},{key:"populateWalls",value:function(){var t=Math.floor(Math.random()*this.combos.length),e=this.combos[t];this.draw(this.ctx,e)}},{key:"animate",value:function(t,e){if(0!==this.wallCombos.length&&this.wallCombos[this.wallCombos.length-1].length%7==0)for(var i=0;i<this.wallCombos.length;i++){var n=this.wallCombos[i];if(70!==n[0].length)for(var a=void 0,r=0;r<n.length;r++){var s=n[r];"line"!==s.isWall&&(this.animateWallAngle=this.animateWallAngle+60),this.animateWallAngle>=360&&(this.animateWallAngle=this.animateWallAngle%360);var o,l,h,c,u,f=void 0,y=void 0;u=s.length-5,o=this.x+Math.cos(Math.PI*this.animateWallAngle/180)*(u*e),l=this.y+Math.sin(Math.PI*this.animateWallAngle/180)*(u*e),h=this.x+Math.cos(Math.PI*this.animateWallAngle/180)*(u*e-C),c=this.y+Math.sin(Math.PI*this.animateWallAngle/180)*(u*e-C),t.beginPath(),t.moveTo(h,c),t.lineTo(o,l),void 0!==a&&(t.lineTo.apply(t,w(a)),f=a[0]+Math.cos(Math.PI*(this.animateWallAngle+120)/180)*C,y=a[1]+Math.sin(Math.PI*(this.animateWallAngle+120)/180)*C,t.lineTo(f,y),t.lineTo(h,c)),!0===s.isWall?(t.strokeStyle=T[2][0],t.fillStyle=T[2][0]):!1===s.isWall&&(t.strokeStyle=T[2][1],t.fillStyle=T[2][1]),t.fill(),t.stroke(),a=[o,l],this.wallCombos[i][r]={length:u,isWall:s.isWall,angle:this.animateWallAngle,point1:[f,y],point2:[h,c]}}else this.wallCombos.unshift()}}}])&&k(e.prototype,i),n&&k(e,n),t}();function A(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.dimensions={width:e.width,height:e.height},this.running=!1,this.x=e.width,this.y=e.height,this.scale=1,this.scaleDir="",this.rotationDir=1,this.registerEvents(),this.sections=new b(e),this.ctx.globalCompositeOperation="source-over",this.stopwatch=new a(e),this.hexagon=new l(e),this.cursor=new y(e),this.cursorDir="",this.music=new Audio("assets/sounds/Cusp.mp3"),this.beginAudio=new Audio("assets/sounds/begin.mp3"),this.gameOverAudio=new Audio("assets/sounds/game_over.mp3"),this.beforeGame(this.ctx)}var e,i,n;return e=t,(i=[{key:"beforeGame",value:function(t){var e=this;new FontFace("Squada One","url(https://fonts.gstatic.com/s/squadaone/v8/BCasqZ8XsOrx4mcOk6Mtaac2WRJnDgo.woff2)").load().then((function(){t.beginPath(),t.rect(e.x/2-120,e.y/2-200,240,120),t.strokeStyle="#c31e9e",t.stroke(),t.fill(),t.font="30px Squada One",t.fillStyle="#ffffff",t.fillText("SPACE TO PLAY",e.x/2-80,e.y/2-160),t.fillText("LEFT/RIGHT OR A/D",e.x/2-96,e.y/2-120),t.fillText("TO AVOID WALLS",e.x/2-86,e.y/2-90)}))}},{key:"play",value:function(){var t=this;this.running=!0;var e=new Date;this.lastTime=0,setTimeout((function(){return t.animate(e)}),300),this.walls=new S(this.canvas),this.beginAudio.play(),this.populateWalls=setInterval((function(){return t.walls.populateWalls()}),800),setTimeout((function(){t.startTime=new Date}),400);var i=Math.floor(10*Math.random())+1;setTimeout((function(){setInterval((function(){return t.updateRotation()}),500*i)}),1e4),this.music.load(),this.music.play()}},{key:"updateRotation",value:function(){1===this.rotationDir?this.rotationDir=-1:this.rotationDir=1}},{key:"updateScale",value:function(){this.scale<=1?this.scaleDir="increasing":this.scale>=1.5&&(this.scaleDir="decreasing"),"increasing"===this.scaleDir?this.scale+=.04:"decreasing"===this.scaleDir&&(this.scale-=.04)}},{key:"countDecimals",value:function(t){return Math.floor(t)!==t&&t.toString().split(".")[1].length||0}},{key:"animate",value:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var e=t-this.lastTime;if(this.deltaTime=e,this.lastTime=t,this.startTime){var i=new Date;this.time=Math.round((i-this.startTime)/1e3*100)/100,0===this.countDecimals(this.time)?this.time="".concat(this.time,".00"):1===this.countDecimals(this.time)&&(this.time="".concat(this.time,"0")),this.stopwatch.animate(this.time)}this.sections.animate(e),this.hexagon.animate(e,this.scale,this.rotationDir),this.cursor.animate(this.ctx,this.scale),this.walls.animate(this.ctx,this.scale),!0===this.gameOver()&&(this.running=!1,this.gameOverAudio.play(),this.music.pause(),this.stopwatch.stop(),this.hexagon.stop(),clearInterval(this.populateWalls)),"clockwise"===this.cursorDir?this.cursor.pivotClockwise(e,this.ctx,this.scale):"counterClockwise"===this.cursorDir&&this.cursor.pivotCounterClockwise(e,this.ctx,this.scale),this.time&&this.time>41&&this.updateScale(),!0===this.running&&requestAnimationFrame(this.animate.bind(this))}},{key:"registerEvents",value:function(){var t=this;document.addEventListener("keydown",(function(e){37===e.keyCode||65===e.keyCode?t.running&&(t.cursorDir="counterClockwise"):39===e.keyCode||68===e.keyCode?t.running&&(t.cursorDir="clockwise"):32===e.keyCode&&t.play()})),document.addEventListener("keyup",(function(){return t.cursorDir=""}))}},{key:"gameOver",value:function(){return this.walls.collidesWith(this.cursor.tip(this.scale),this.scale)}}])&&A(e.prototype,i),n&&A(e,n),t}();i(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementsByTagName("canvas")[0];t.height=window.innerHeight,t.width=window.innerWidth,new O(t)}))}]);
//# sourceMappingURL=main.js.map