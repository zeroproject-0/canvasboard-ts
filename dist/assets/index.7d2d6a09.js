var P=Object.defineProperty;var K=(r,e,n)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var o=(r,e,n)=>(K(r,typeof e!="symbol"?e+"":e,n),n);const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};O();class Z{constructor(){o(this,"throttleTime",10)}onResizeEvent(e){window.addEventListener("resize",e)}onKeydownEvent(e){window.addEventListener("keydown",e)}onKeyupEvent(e){window.addEventListener("keyup",e)}onKeypressEvent(e){window.addEventListener("keypress",e)}onMouseDownEvent(e){s.canvas.addEventListener("mousedown",e)}onMouseMoveEvent(e){s.canvas.addEventListener("mousemove",this.throttle(e,this.throttleTime))}onMouseUpEvent(e){s.canvas.addEventListener("mouseup",e)}onMouseLeaveEvent(e){s.canvas.addEventListener("mouseleave",e)}onWheelEvent(e){s.canvas.addEventListener("wheel",e)}onTouchStartEvent(e){s.canvas.addEventListener("touchstart",e)}onTouchMoveEvent(e){s.canvas.addEventListener("touchmove",this.throttle(e,this.throttleTime))}onTouchEndEvent(e){s.canvas.addEventListener("touchend",e)}onContextMenuEvent(e){s.canvas.addEventListener("contextmenu",e)}throttle(e,n){let i=!1;return function(a){i||(e.apply(null,[a]),i=!0,setTimeout(function(){i=!1},n))}}}class b{constructor(e){o(this,"line");o(this,"prevX",0);o(this,"prevY",0);o(this,"properties");this.line=[],this.properties=e}cancelDraw(){this.line=[]}startDraw(){s.ctx.strokeStyle=this.properties.strokeColor,s.ctx.lineWidth=this.properties.lineWidth*s.canvasConfig.scale,s.ctx.lineCap="round",s.ctx.lineJoin="round",s.ctx.beginPath(),this.properties.initialX=s.canvasConfig.cursorX,this.properties.initialY=s.canvasConfig.cursorY}draw(e){let n=[0,0];if(e instanceof MouseEvent)n=[s.canvasConfig.toWorldX(e.pageX),s.canvasConfig.toWorldY(e.pageY)],s.ctx.lineTo(s.canvasConfig.cursorX,s.canvasConfig.cursorY);else if(e instanceof TouchEvent){if(s.canvasConfig.prevTouches[0]===null||s.canvasConfig.prevTouches[1]===null)return;n=[s.canvasConfig.toWorldX(e.touches[0].pageX),s.canvasConfig.toWorldY(e.touches[0].pageY)],s.ctx.lineTo(e.touches[0].pageX,e.touches[0].pageY)}this.line.push(n),s.ctx.stroke()}reDraw(){for(let e=0;e<this.line.length;e++)s.ctx.lineTo(s.canvasConfig.toScreenX(this.line[e][0]),s.canvasConfig.toScreenY(this.line[e][1]));s.ctx.stroke()}endDraw(){s.ctx.closePath()}}class q{constructor(e){o(this,"properties");o(this,"initialRealX");o(this,"initialRealY");o(this,"width");o(this,"height");o(this,"displayWidth");o(this,"displayHeight");this.properties=e,this.initialRealX=0,this.initialRealY=0,this.displayHeight=0,this.displayWidth=0,this.width=0,this.height=0}startDraw(e){s.ctx.strokeStyle=this.properties.strokeColor,s.ctx.lineWidth=this.properties.lineWidth*s.canvasConfig.scale,e instanceof MouseEvent?(this.properties.initialX=e.pageX,this.properties.initialY=e.pageY,this.initialRealX=s.canvasConfig.toWorldX(e.pageX),this.initialRealY=s.canvasConfig.toWorldY(e.pageY)):e instanceof TouchEvent&&(this.properties.initialX=e.touches[0].pageX,this.properties.initialY=e.touches[0].pageY,this.initialRealX=s.canvasConfig.toWorldX(e.touches[0].pageX),this.initialRealY=s.canvasConfig.toWorldY(e.touches[0].pageY))}draw(e){s.clearCanvas(),s.reDraw(),s.ctx.beginPath(),e instanceof MouseEvent?(this.displayWidth=e.pageX-this.properties.initialX,this.displayHeight=e.pageY-this.properties.initialY):e instanceof TouchEvent&&(this.displayWidth=e.touches[0].pageX-this.properties.initialX,this.displayHeight=e.touches[0].pageY-this.properties.initialY),this.width=this.displayWidth/s.canvasConfig.scale,this.height=this.displayHeight/s.canvasConfig.scale,s.ctx.rect(s.canvasConfig.toScreenX(this.initialRealX),s.canvasConfig.toScreenY(this.initialRealY),this.displayWidth,this.displayHeight),s.ctx.stroke(),s.ctx.closePath()}reDraw(){s.ctx.strokeStyle=this.properties.strokeColor,s.ctx.lineWidth=this.properties.lineWidth*s.canvasConfig.scale,s.ctx.rect(s.canvasConfig.toScreenX(this.initialRealX),s.canvasConfig.toScreenY(this.initialRealY),this.width*s.canvasConfig.scale,this.height*s.canvasConfig.scale),s.ctx.stroke()}cancelDraw(){s.clearCanvas(),s.reDraw()}endDraw(){s.ctx.closePath()}}class F{static create(e,n){switch(e){case l.HandDrawing:return new b(n);case l.Rectangle:return new q(n);default:return new b(n)}}}var l=(r=>(r[r.HandDrawing=0]="HandDrawing",r[r.Rectangle=1]="Rectangle",r))(l||{});const J={pen:l.HandDrawing,rectangle:l.Rectangle},j=(r,e)=>{let n=r.parentElement;for(;n!==null;){if(n.tagName===e)return n;n=n.parentElement}return r};let w="#000000",D=10,W=l.HandDrawing;const G=()=>{document.getElementById("size").addEventListener("change",n=>{const i=n.target,a=i.nextElementSibling;a.textContent=i.value,D=Number(i.value)}),document.getElementById("color").addEventListener("change",({target:n})=>{w=n.value}),document.getElementById("clear").addEventListener("click",()=>{s.clearBoard()}),document.getElementById("undo").addEventListener("click",()=>{s.undo()});const r=document.getElementById("download");r.addEventListener("click",()=>{r.setAttribute("download","image.png"),r.setAttribute("href",s.canvas.toDataURL("image/png"))}),document.getElementById("drawables").addEventListener("click",n=>{let i=n.target;i.tagName!=="BUTTON"&&(i=j(i,"BUTTON"));const a=i.dataset.type;a!==void 0&&(W=J[a])})};class L{constructor(){o(this,"offsetX");o(this,"offsetY");o(this,"cursorX");o(this,"cursorY");o(this,"prevCursorX");o(this,"prevCursorY");o(this,"scale");o(this,"prevTouches",[null,null]);this.offsetX=0,this.offsetY=0,this.cursorX=0,this.cursorY=0,this.prevCursorX=0,this.prevCursorY=0,this.scale=1}static get getInstance(){return this._instance||(this._instance=new this)}toScreenX(e){return(e+this.offsetX)*this.scale}toScreenY(e){return(e+this.offsetY)*this.scale}toWorldX(e){return e/this.scale-this.offsetX}toWorldY(e){return e/this.scale-this.offsetY}getWidth(){return s.canvas.clientWidth/this.scale}getHeight(){return s.canvas.clientHeight/this.scale}}o(L,"_instance");const t=class extends Z{constructor(){super();o(this,"isDrawing");o(this,"isDragging");o(this,"currentDraw",null);t.canvas=document.getElementById("canvas"),t.ctx=t.canvas.getContext("2d"),t.canvas.width=document.body.clientWidth,t.canvas.height=document.body.clientHeight,this.isDrawing=!1,this.isDragging=!1,G(),t.canvasConfig=L.getInstance,this.createDrawable()}initilizeEvents(){this.onResizeEvent(this.onResize.bind(this)),this.onMouseDownEvent(this.onMouseDown.bind(this)),this.onMouseMoveEvent(this.onMouseMove.bind(this)),this.onMouseUpEvent(this.onMouseUp.bind(this)),this.onMouseLeaveEvent(this.onMouseUp.bind(this)),this.onContextMenuEvent(this.onContextMenu.bind(this)),this.onWheelEvent(this.onMouseWheel.bind(this)),this.onTouchStartEvent(this.onTouchStart.bind(this)),this.onTouchMoveEvent(this.onTouchMove.bind(this)),this.onTouchEndEvent(this.onTouchEnd.bind(this)),this.onKeydownEvent(this.onKeyDown.bind(this))}onContextMenu(n){n.preventDefault()}onResize(){t.canvas.width=document.body.clientWidth,t.canvas.height=document.body.clientHeight,t.reDraw()}static reDraw(){t.history.length!=0&&(t.clearCanvas(),t.history.forEach(n=>{t.ctx.strokeStyle=n.properties.strokeColor,t.ctx.lineWidth=n.properties.lineWidth*t.canvasConfig.scale,t.ctx.moveTo(n.properties.initialX,n.properties.initialY),t.ctx.beginPath(),n.reDraw(),t.ctx.closePath()}),t.ctx.strokeStyle=w,t.ctx.lineWidth=D*t.canvasConfig.scale)}onMouseDown(n){var i;n.preventDefault(),this.isDrawing=n.button==0,this.isDragging=n.button==1,t.canvasConfig.cursorX=n.pageX,t.canvasConfig.cursorY=n.pageY,t.canvasConfig.prevCursorX=n.pageX,t.canvasConfig.prevCursorY=n.pageY,this.isDrawing&&(this.createDrawable(),(i=this.currentDraw)==null||i.startDraw(n))}onMouseMove(n){var i;t.canvasConfig.cursorX=n.pageX,t.canvasConfig.cursorY=n.pageY,this.isDrawing&&((i=this.currentDraw)==null||i.draw(n)),this.isDragging&&(t.canvasConfig.offsetX+=(t.canvasConfig.cursorX-t.canvasConfig.prevCursorX)/t.canvasConfig.scale,t.canvasConfig.offsetY+=(t.canvasConfig.cursorY-t.canvasConfig.prevCursorY)/t.canvasConfig.scale,t.reDraw()),t.canvasConfig.prevCursorX=t.canvasConfig.cursorX,t.canvasConfig.prevCursorY=t.canvasConfig.cursorY}onMouseUp(n){var i;this.isDrawing&&((i=this.currentDraw)==null||i.endDraw(n),t.history.push(this.currentDraw)),this.isDrawing=!1,this.isDragging=!1}onMouseWheel(n){var u;if(this.isDrawing){(u=this.currentDraw)==null||u.cancelDraw(),this.createDrawable(),this.isDrawing=!1,this.isDragging=!1;return}const a=-n.deltaY/500,c=t.canvasConfig.scale*(1+a);if(c<.1||c>10)return;t.canvasConfig.scale=c;var h=n.pageX/t.canvas.clientWidth,g=n.pageY/t.canvas.clientHeight;const v=t.canvasConfig.getWidth()*a,p=t.canvasConfig.getHeight()*a,d=v*h,f=p*g;t.canvasConfig.offsetX-=d,t.canvasConfig.offsetY-=f,t.reDraw()}onTouchStart(n){var i;this.isDrawing=n.touches.length==1,this.isDragging=n.touches.length>=2,t.canvasConfig.prevTouches[0]=n.touches[0],t.canvasConfig.prevTouches[1]=n.touches[1],this.createDrawable(),(i=this.currentDraw)==null||i.startDraw(n)}onTouchMove(n){var d,f,u,Y;if(t.canvasConfig.prevTouches[0]===null||t.canvasConfig.prevTouches[1]===null)return;const i=n.touches[0].pageX,a=n.touches[0].pageY,c=t.canvasConfig.prevTouches[0].pageX,h=t.canvasConfig.prevTouches[0].pageY;if(this.isDrawing&&((d=this.currentDraw)==null||d.draw(n)),this.isDragging){if(this.isDrawing){(f=this.currentDraw)==null||f.cancelDraw(),this.createDrawable(),this.isDrawing=!1,this.isDragging=!1;return}n.preventDefault();const X=n.touches[1].pageX,E=n.touches[1].pageY,y=(u=t.canvasConfig.prevTouches[1])==null?void 0:u.pageX,m=(Y=t.canvasConfig.prevTouches[1])==null?void 0:Y.pageY,T=(i+X)/2,x=(a+E)/2,R=(c+y)/2,k=(h+m)/2,H=Math.sqrt(Math.pow(i-X,2)+Math.pow(a-E,2)),S=Math.sqrt(Math.pow(c-y,2)+Math.pow(h-m,2));var g=H/S;const C=t.canvasConfig.scale*g;if(C<.1||C>10)return;t.canvasConfig.scale=C;const M=1-g,I=T-R,U=x-k;t.canvasConfig.offsetX+=I/t.canvasConfig.scale,t.canvasConfig.offsetY+=U/t.canvasConfig.scale;var v=T/t.canvas.clientWidth,p=x/t.canvas.clientHeight;const z=t.canvasConfig.getWidth()*M,A=t.canvasConfig.getHeight()*M,B=z*v,N=A*p;t.canvasConfig.offsetX+=B,t.canvasConfig.offsetY+=N,t.reDraw()}t.canvasConfig.prevTouches[0]=n.touches[0],t.canvasConfig.prevTouches[1]=n.touches[1]}onTouchEnd(){t.canvasConfig.prevTouches[0]=null,t.canvasConfig.prevTouches[1]=null,this.onMouseUp(null)}onKeyDown(n){n.ctrlKey&&(n.key===""||n.key==="z")&&t.undo()}static undo(){t.history.length!==0&&(t.clearCanvas(),t.history.pop(),t.reDraw())}static clearBoard(){t.clearCanvas(),t.history=[]}createDrawable(){this.currentDraw=F.create(W,{strokeColor:w,lineWidth:D})}static clearCanvas(n=null){n===null?t.ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight):t.ctx.clearRect(n.prevX,n.prevY,n.x,n.y)}};let s=t;o(s,"canvas"),o(s,"ctx"),o(s,"history",[]),o(s,"canvasConfig");const Q=new s;Q.initilizeEvents();
