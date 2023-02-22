const btns = [
    {
        el: document.getElementsByClassName("catalog-btn")[0],
        link: "../courses/index.html"
    },
    {
        el: document.getElementsByClassName("apply-btn")[0],
        link: "../jobs/index.html",
    }
];

btns.forEach(btn => {
    btn.el.addEventListener("click", () => {
        location.href = btn.link;
    });
});