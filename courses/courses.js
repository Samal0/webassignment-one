const coursesContainer = document.getElementById("courses-container");
const searchInput = document.getElementsByTagName("input")[0];

const courses = [
    {
        bannerUrl: "https://i.pinimg.com/originals/60/15/c3/6015c3a5a0df39f14972cfe17ca1019d.jpg",
        description: "Learn the basics of web development with HTML and CSS. These are essential before diving into more complicated topics such as JavaScript frameworks."
    }
]

const createCourseElement = ({ bannerUrl, description }) => {
    const containerDiv = document.createElement("div");

    const bannerImg = document.createElement("img");
    bannerImg.src = bannerUrl;
    bannerImg.alt = "Hot Beans Course Banner Image";

    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;

    const enrollBtn = document.createElement("button");

    containerDiv.appendChild(bannerImg);
    containerDiv.appendChild(descriptionP);
    containerDiv.appendChild(enrollBtn);

    return containerDiv;
}

courses.forEach(course => {
    coursesContainer.appendChild(createCourseElement(course));
});

searchInput.addEventListener("input", () => {
    for (let i = 0; i < coursesContainer.children.length; i++) {
        const child = coursesContainer.children[i];
        const description = child.getElementsByTagName("p")[0].textContent.toLowerCase();

        if (searchInput.value.length === 0) {
            child.style.display = "block";
            continue;
        }

        if (description.includes(searchInput.value.toLowerCase())) {
            child.style.display = "block";
        } else {
            child.style.display = "none";
        }
    }
})