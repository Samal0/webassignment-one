const jobsContainerDiv = document.getElementById("jobs-container");
// const jobTitles = ["Frontend Engineer", "Backend Engineer", "Infastructure Engineer", "UX Designer", "Marketer", "Customer Service"];

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
    }
];

const createJobElement = ({ name, description }) => {
    const divEl = document.createElement("div"); 

    const headingEl = document.createElement("h4");
    headingEl.textContent = name;

    const paraEl = document.createElement("p");
    paraEl.textContent = description;

    const btnEl = document.createElement("button");
    btnEl.textContent = "Apply";

    divEl.appendChild(headingEl);
    divEl.appendChild(paraEl);
    divEl.appendChild(btnEl);

    return divEl;
}

jobs.forEach(job => {
    jobsContainerDiv.appendChild(createJobElement(job));
})