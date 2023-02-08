const jobsContainerDiv = document.getElementById("jobs-container");
const selectInput = document.getElementById("select-input");
const applicationInput = document.getElementsByTagName("textarea")[0];
const formEl = document.getElementsByTagName("form")[0];

const jobs = [
    {
        name: "Frontend Engineer",
        description: "Develop frontend websites and designs with HTML, CSS and JavaScript.",
    },
    {
        name: "Backend Engineer",
        description: "Work on server side code for websites. This involves data security and database management."
    },
    {
        name: "Infastructure Engineer",
        description: "Keep track of our systems and ensure that they are working correctly and securely"
    },
    {
        name: "UX Designer",
        description: "Create high quality UX designs for high customer experience and satisfaction."
    },
    {
        name: "Marketer",
        description: "Responsible for the company image and spreading the word about HotBeans."
    },
    {
        name: "Customer Service",
        description: "Improve our customer experience and satisfaction but interacting directly with customers."
    }
];

/** Sets the first letter in string to uppercase and the rest to lowercase */
const onlyFirstLetterUpper = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const setApplicationInputPlaceholder = (selectedJob) => {
    applicationInput.placeholder = `${onlyFirstLetterUpper(selectedJob)} experience, portfolio etc.`
}

const createJobElement = ({ name, description }) => {
    const divEl = document.createElement("div"); 

    const headingEl = document.createElement("h4");
    headingEl.textContent = name;

    const paraEl = document.createElement("p");
    paraEl.textContent = description;

    const btnEl = document.createElement("button");
    btnEl.textContent = "Apply";
    btnEl.className = name;

    btnEl.addEventListener("click", (e) => {
        e.preventDefault();

        location.href = "#form";
        selectInput.value = name;
        setApplicationInputPlaceholder(name);
    });

    divEl.appendChild(headingEl);
    divEl.appendChild(paraEl);
    divEl.appendChild(btnEl);

    return divEl;
}

const createSelectOptionElement = (jobName) => {
    const optionEl = document.createElement("option");
    optionEl.textContent = jobName;

    return optionEl;
}

selectInput.addEventListener("change", (e) => {
    applicationInput.placeholder = `${onlyFirstLetterUpper(e.target.value)} experience, portfolio etc.`
})

jobs.forEach(job => {
    jobsContainerDiv.appendChild(createJobElement(job));
    selectInput.appendChild(createSelectOptionElement(job.name));
    setApplicationInputPlaceholder(selectInput.value);
});

formEl.addEventListener("submit", (e) => {
    
})