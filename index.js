import{i as c,S as b,a as w}from"./assets/vendor-D9tHNiur.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23FAFAFB'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.06%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062l-3.97-3.97-3.968%203.97a.753.753%200%200%201-1.225-.244.751.751%200%200%201%20.163-.818L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector(".gallery"),u=document.querySelector(".load"),m=document.querySelector(".to-add"),M={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:l,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};function g(t){t.insertAdjacentHTML("beforeend",'<p class="loading-text">Loading images, please wait... </p><span class="loader"></span>'),m.classList.add("hide")}function h(t){const o=t.querySelector(".loading-text"),n=t.querySelector(".loader");o&&o.remove(),n&&n.remove(),m.classList.remove("hide"),t.innerHTML=""}function q(t){const{hits:o}=t;if(o.length===0){d.innerHTML="",u.innerHTML="",loadTextElements.forEach(e=>e.remove()),c.show({...M,message:"Sorry, no images were found for your request."});return}const n=o.map(e=>`<li class='gallery__item'>
        <a class='gallery__link' href="${e.largeImageURL}">
        <img class='gallery__img' src="${e.webformatURL}" alt="${e.tags}" />
          <div class="grid">
            <p>Likes</p>
            <p>Views</p>
            <p>Comment</p>
            <p>Downloads</p>
            <span>${e.likes}</span>
            <span>${e.views}</span>
            <span>${e.comments}</span>
            <span>${e.downloads}</span>
          </div>
        </a>
      </li>`).join(" ");h(u),d.insertAdjacentHTML("beforeend",n),new b(".gallery a",{captionsData:"alt",captionDelay:200}).refresh()}const x=document.querySelector(".gallery"),p=document.querySelector(".load"),F=document.querySelector(".to-add"),$={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:l,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};let s=1,f=15;function A(){s=1}function P(){s+=1}async function y(t){const o="48917543-f1c12d43491f3df9d7e0ece6c",n=encodeURIComponent(t),e=`https://pixabay.com/api/?${new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:f})}`;try{const{data:r}=await w.get(e);if(q(r),r.totalHits<s*f){O(p);return}if(s>=2){const S=document.querySelector(".gallery__item").getBoundingClientRect();window.scrollBy({top:S.height*2,behavior:"smooth"})}}catch(r){console.error(r),x.innerHTML="",p.innerHTML="",c.show({...$,message:"Sorry, an error occurred. Please try again!"});return}}function O(t){h(t),t.insertAdjacentHTML("beforeend",'<p class="loading-text">We are sorry, but you have reached the end of search results.</p>'),F.classList.add("hide")}const C=document.querySelector(".gallery"),L=document.querySelector(".load"),H=document.querySelector(".to-add"),I=document.querySelector(".form"),v=document.querySelector(".user-input"),T={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:l,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};I.addEventListener("submit",t=>{t.preventDefault();let o=v.value.trim();if(!o){c.show({...T,message:"Please enter a search query."});return}C.innerHTML="",A(),g(L),y(o)});H.addEventListener("click",t=>{let o=v.value.trim();P(),g(L),y(o)});
//# sourceMappingURL=index.js.map
