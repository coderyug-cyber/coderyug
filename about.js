const sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-250px";
}

/* Tabs */
const tabs = document.querySelectorAll(".tab-links");
const contents = document.querySelectorAll(".tab-contents");

tabs.forEach(tab=>{
  tab.onclick = ()=>{
    tabs.forEach(t=>t.classList.remove("active-link"));
    contents.forEach(c=>c.classList.remove("active-tab"));

    tab.classList.add("active-link");
    document.getElementById(tab.dataset.tab).classList.add("active-tab");
  }
});
