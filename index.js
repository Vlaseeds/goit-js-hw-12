import{a as b,S as P,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="55034455-5b3cbae51e7a3fca079c2f233",q="https://pixabay.com/api/";async function d(a,t=1){const r={key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await b.get(q,{params:r})).data}const m=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper"),g=document.querySelector(".load-more-btn"),I=new P(".gallery a",{captionsData:"alt",captionDelay:250});function R(a){const{webformatURL:t,largeImageURL:r,tags:i,likes:e,views:o,comments:n,downloads:L}=a;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${i}" />
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
          <small>${n}</small>
        </div>
        <div class="image-info-item">
          <span>Downloads</span>
          <small>${L}</small>
        </div>
      </div>
    </li>
  `}function f(a){const t=a.map(R).join("");m.insertAdjacentHTML("beforeend",t),I.refresh()}function B(){m.innerHTML=""}function p(){u.classList.add("show")}function y(){u.classList.remove("show")}function E(){g.style.display="block"}function h(){g.style.display="none"}const w=document.querySelector(".form"),$=w.querySelector('input[name="search-text"]'),x=document.querySelector(".load-more-btn");let v="",s=1,c=0;w.addEventListener("submit",async a=>{a.preventDefault();const t=$.value.trim();if(!t){l.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}v=t,s=1,c=0,B(),h(),p();try{const r=await d(t,s);r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(r.hits),c=r.totalHits,c>s*15&&E())}catch(r){console.error("Pixabay API error:",r),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}});x.addEventListener("click",async()=>{s+=1,p();try{const a=await d(v,s);f(a.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}c<=s*15&&(h(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(a){console.error("Pixabay API error:",a),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
