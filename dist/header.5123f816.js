!function(){var e={};var t=function(t){var n=e[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n};(function(t){for(var n=Object.keys(t),r=0;r<n.length;r++)e[n[r]]=t[n[r]]})(JSON.parse('{"05eb71f85b8973cc":"header.5123f816.js","b32688ecfe32f5df":"3dbar.264cb951.svg"}'));var n,r=null;var a,f=function(){return r||(r=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),r},l=t;function c(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,n=t.lastIndexOf("/");return-1===n?".":t.slice(0,n)}function i(e,t){if(e===t)return"";var n=e.split("/");"."===n[0]&&n.shift();var r,a,f=t.split("/");for("."===f[0]&&f.shift(),r=0;(r<f.length||r<n.length)&&null==a;r++)n[r]!==f[r]&&(a=r);var l=[];for(r=0;r<n.length-a;r++)l.push("..");return f.length>a&&l.push.apply(l,f.slice(a)),l.join("/")}(a=function(e,t){return i(c(l(e)),l(t))})._dirname=c,a._relative=i,n=f()+a("05eb71f85b8973cc","b32688ecfe32f5df");var o,u=document.getElementById("backgroundElements"),d=(o=n)&&o.__esModule?o.default:o;document.onload=function(e){for(var t=0;t<e;t++){var n=document.createElement("img");n.setAttribute("src",d),n.style.animationDelay=(-60*Math.random()).toFixed(1)+"s",n.style.opacity=Math.random(),u.appendChild(n)}}(12)}();
//# sourceMappingURL=header.5123f816.js.map