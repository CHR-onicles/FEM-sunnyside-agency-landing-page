const nav_toggle = document.querySelector(".nav-toggle");
const nav_links_container = document.querySelector(".nav-links-container");
const nav_links = document.querySelector(".nav-links");

nav_toggle.addEventListener("click", () => {
    nav_toggle.classList.toggle("rotate-nav-toggle");
    nav_links_container.classList.toggle("show-nav-links-container");
    const container_height = nav_links_container.getBoundingClientRect().height;
    const nav_links_height = nav_links.getBoundingClientRect().height;
    if (container_height === 0){
        nav_links_container.style.height = `${nav_links_height}px`;
        nav_links_container.style.opacity = 1;
        nav_links_container.style.transform = `translateY(0)`;
    } else {
        nav_links_container.style.height = 0;
        nav_links_container.style.opacity = 0;
        nav_links_container.style.transform = `translateY(-50px)`;
    }
});