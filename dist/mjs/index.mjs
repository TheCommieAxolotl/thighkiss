const e=new Array(3e4).fill(0);let a=0,r=0,s=[],l="",c="",t="";const o=()=>{let e=0;return c&&(e=c.charCodeAt(0),c=c.slice(1)),e};var f=(f,i)=>(e.fill(0),l="",c="",t="",a=0,r=0,s=[],l=f,c=i,console.log((()=>{let c=!1;for(;!c;){switch(l[a]){case"[":if(e[r])s.push(a);else{let e=0;for(;a++,l[a];)if("["===l[a])e++;else if("]"===l[a]){if(!e)break;e--}}break;case"]":s.length&&(a=s.pop()-1);break;case">":r==e.length-1&&e.push(0),r++;break;case"<":r>0&&r--;break;case"+":255==e[r]&&(e[r]=0),e[r]++;break;case"-":0==e[r]&&(e[r]=255),e[r]--;break;case".":f=e[r],t+=String.fromCharCode(f);break;case",":e[r]=o();break;case void 0:c=!0}a++}var f;return t})()));export{f as default};