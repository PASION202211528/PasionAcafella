const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click",()=>{
        
        tabs.forEach(tab => tab.classList.remove("active"))
        
        tab.classList.add("active");
        contents.forEach((c)=> c.classList.remove("active"))
        
        contents[index].classList.add("active");
    });
});
tabs[0].click();

/*let nav-area = document.querySelector('.nav-area');

window.onscroll = () => {
    nav-area.classList.remove('active');
}*/