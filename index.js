import{a as S,S as q,i as s}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const R="55034455-5b3cbae51e7a3fca079c2f233",E="https://pixabay.com/api/";async function m(a,t=1){const r={key:R,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await S.get(E,{params:r})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader-wrapper"),g=document.querySelector(".load-more-btn"),I=new q(".gallery a",{captionsData:"alt",captionDelay:250});function B(a){const{webformatURL:t,largeImageURL:r,tags:n,likes:e,views:o,comments:l,downloads:P}=a;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${n}" />
      </a>
      <div class="image-info">
        <div class="image-info-item">
          <span>Likes</span>
          <small>${e}</small>
        </div>
        <div class="image-info-item">
          <span>Views</span>
          <small>${o}</small>
        </div>
        <div class="image-info-item">
          <span>Comments</span>
          <small>${l}</small>
        </div>
        <div class="image-info-item">
          <span>Downloads</span>
          <small>${P}</small>
        </div>
      </div>
    </li>
  `}function p(a){const t=a.map(B).join("");u.insertAdjacentHTML("beforeend",t),I.refresh()}function $(){u.innerHTML=""}function y(){f.classList.add("show")}function h(){f.classList.remove("show")}function d(){g.style.display="block"}function w(){g.style.display="none"}const v=document.querySelector(".form"),x=v.querySelector('input[name="search-text"]'),A=document.querySelector(".load-more-btn");let L="",i=1,c=0;const b=15;v.addEventListener("submit",async a=>{a.preventDefault();const t=x.value.trim();if(!t){s.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}L=t,i=1,c=0,$(),w(),y();try{const r=await m(t,i);r.hits.length===0?s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(p(r.hits),c=r.totalHits,c>i*b?d():s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error("Pixabay API error:",r),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}});A.addEventListener("click",async()=>{w(),y(),i+=1;try{const a=await m(L,i);p(a.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}c<=i*b?s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):d()}catch(a){console.error("Pixabay API error:",a),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{h()}});
//# sourceMappingURL=index.js.map
