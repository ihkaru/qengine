import{r as o,o as t,u as i}from"./index.78336c92.js";function a(){const e=o(navigator.onLine),n=()=>{e.value=navigator.onLine};return t(()=>{window.addEventListener("online",n),window.addEventListener("offline",n)}),i(()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}),{isOnline:e}}export{a as u};
