"use strict";const removeAlertBlocks=()=>{document.querySelectorAll(".alert-block .alert-block__row").forEach((e=>{e.querySelector("[data-close]").addEventListener("click",(()=>{e.style.opacity="0",e.style.transform="translateX(-100%)",setTimeout((()=>{e.remove()}),300)}))}))};document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".menu-navbar ul.list > li"),t=document.querySelector(".menu-navbar .divider"),n=document.querySelector(".menu-navbar-wrapper").getBoundingClientRect(),o=parseFloat(window.getComputedStyle(document.querySelector(".menu-navbar-wrapper")).paddingLeft);function c(e){const c=e.getBoundingClientRect(),r=c.left-n.left-o+c.width/2-t.offsetWidth/2;t.style.transform=`translateX(${r}px)`,t.style.width=`${c.width}px`}e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),c(t)})),t.addEventListener("mouseenter",(function(){c(t)}))})),document.addEventListener("click",(function(t){document.querySelector(".menu-navbar-wrapper").contains(t.target)||e.forEach((function(e){e.classList.remove("active")}))}))}));const compassInput=document.getElementById("compassInput"),compassLimb=document.querySelector(".compass-limb"),directionLabel=document.getElementById("directionLabel");compassInput.addEventListener("input",(function(){const e=this.value;let t;document.querySelector(".compass p").textContent=`${e}°`,compassLimb.style.transform=`rotate(${e}deg)`,t=e>=0&&e<45?"N":e>=45&&e<90?"NE":e>=90&&e<135?"E":e>=135&&e<180?"SE":e>=180&&e<225?"S":e>=225&&e<270?"SW":e>=270&&e<315?"W":e>=315&&e<360?"NW":"N",directionLabel.textContent=t})),document.querySelectorAll(".alert-block .alert-block__row").forEach((e=>{e.querySelector("[data-close]").addEventListener("click",(()=>{e.style.opacity="0",e.style.transform="translateX(-100%)",setTimeout((()=>{e.remove()}),300)}))}));