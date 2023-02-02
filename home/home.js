const btns = [
    {
        el: document.getElementsByClassName("catalog-btn")[0],
        link: "../courses/courses.html"
    },
    {
        el: document.getElementsByClassName("apply-btn")[0],
        link: "../jobs/jobs.html",
    }
];

btns.forEach(btn => {
    btn.el.addEventListener("click", () => {
        location.href = btn.link;
    });
});