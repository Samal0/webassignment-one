const coursesContainer = document.getElementById("courses-container");
const searchInput = document.getElementsByTagName("input")[0];

const courses = [
    {
        bannerUrl: "../public/images/html-css-banner.png",
        description: "Learn the basics of web development with HTML and CSS. These are essential before diving into more complicated topics such as JavaScript and frameworks."
    },
    {
        bannerUrl: "../public/images/javascript-banner.png",
        description: "JavaScript is useful for enhancing UIs and making them more responsive and functional. This is essential for advanced web development. This comes with a bit of a learning curve."
    },
    {
        bannerUrl: "../public/images/react-banner.png",
        description: "React is great for creating complicated UIs that require advanced state management and components. This is useful for creating complicated apps that require a lot of data handling."
    },
    {
        bannerUrl: "../public/images/typescript-banner.png",
        description: "Enhance your JavaScript experience with TypeScript. This introduces type safety to your JavaScript code which enhances the development process."
    },
    {
        bannerUrl: "../public/images/node-banner.png",
        description: "Node is an easy to use and intuitive server environment that proves very useful for server development. This allows developers to handle data in database systems."
    },
]

const getAverageRGB = (imgEl) => {
    let blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;
        
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('Banner image on different domain.');
        return defaultRGB;
    }
    
    length = data.data.length;
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return rgb;
}

const styleFromRGB = ({ r, g, b }) => {
    return `rgb(${r}, ${g}, ${b})`;
}

const createCourseElement = ({ bannerUrl, description }) => {
    const containerDiv = document.createElement("div");

    const bannerImg = document.createElement("img");
    bannerImg.src = bannerUrl
    bannerImg.alt = "Hot Beans Course Banner Image";

    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;

    const enrollBtn = document.createElement("button");
    enrollBtn.innerText = "Enroll";

    // const rgb = getAverageRGB(bannerImg);
    // console.log(rgb);
    // enrollBtn.style.backgroundColor = styleFromRGB(rgb);

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

        if (description.includes(searchInput.value.toLowerCase().trim())) {
            child.style.display = "block";
        } else {
            child.style.display = "none";
        }
    }
})