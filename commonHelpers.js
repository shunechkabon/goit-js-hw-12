import{a as v,S as $,i as h}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const B="44033175-ed9824b2e45f2d60c01451c92",E=15;async function m(e,r=1){const s=`https://pixabay.com/api/?key=${B}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${E}&page=${r}`;return(await v.get(s)).data}let p;function g(e,r){const s=e.map(n=>`
      <li>
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}">
        </a>
        <div class="info">
          <p><span>Likes:</span> ${n.likes}</p>
          <p><span>Views:</span> ${n.views}</p>
          <p><span>Comments:</span> ${n.comments}</p>
          <p><span>Downloads:</span> ${n.downloads}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",s),p?p.refresh():p=new $("#gallery a",{})}function w(e){e.style.display="block"}function i(e){e.style.display="none"}function f(e){h.error({message:e})}function L(e){h.warning({message:e})}function P(e){e.style.display="block"}function b(e){e.style.display="none"}const I=document.getElementById("search-form"),M=document.getElementById("search-input"),c=document.getElementById("gallery"),a=document.getElementById("loader"),l=document.getElementById("load-more");let d=1,y="";I.addEventListener("submit",async e=>{e.preventDefault();const r=M.value.trim();if(r===""){f("Please enter a search query!");return}y=r,d=1,c.innerHTML="",b(l),w(a);try{const s=await m(y,d);if(i(a),s.hits.length===0){L("Sorry, there are no images matching your search query. Please try again!");return}g(s.hits,c),P(l)}catch(s){i(a),f("Something went wrong. Please try again later."),console.error(s)}});l.addEventListener("click",async()=>{d+=1,w(a);try{const e=await m(y,d);if(i(a),e.hits.length===0){L("We're sorry, but you've reached the end of search results."),b(l);return}g(e.hits,c);const{height:r}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}catch(e){i(a),f("Something went wrong. Please try again later."),console.error(e)}});
//# sourceMappingURL=commonHelpers.js.map
