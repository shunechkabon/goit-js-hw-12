import{S as p,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const m="44033175-ed9824b2e45f2d60c01451c92";function h(t){const o=`https://pixabay.com/api/?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()})}let a;function y(t,o){const r=t.map(s=>`
      <li>
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class="info">
          <p><span>Likes:</span> ${s.likes}</p>
          <p><span>Views:</span> ${s.views}</p>
          <p><span>Comments:</span> ${s.comments}</p>
          <p><span>Downloads:</span> ${s.downloads}</p>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new p("#gallery a",{})}function g(t){t.style.display="block"}function l(t){t.style.display="none"}function u(t){f.error({message:t})}function w(t){f.warning({message:t})}const L=document.getElementById("search-form"),b=document.getElementById("search-input"),d=document.getElementById("gallery"),c=document.getElementById("loader");L.addEventListener("submit",t=>{t.preventDefault();const o=b.value.trim();if(o===""){u("Please enter a search query!");return}d.innerHTML="",g(c),h(o).then(r=>{if(l(c),r.hits.length===0){w("Sorry, there are no images matching your search query. Please try again!");return}y(r.hits,d)}).catch(r=>{l(c),u("Something went wrong. Please try again later."),console.error(r)})});
//# sourceMappingURL=commonHelpers.js.map
