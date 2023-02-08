const profilesContainer = document.getElementById("profiles");

const trainees = [
    {
        name: "Robert",
        description: "Robert has recently learnt React and is working in our user experience team. He is responsible for ensuring our UIs are to a high standard.",
        imgSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Annita",
        description: "Annita is part of our user experience team. She is responsible for creating high quality designs for our clients.",
        imgSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Carlson",
        description: "Carlson is part of our customer service team. He ensures that our customers receive the best experience.",
        imgSrc: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Timothy",
        description: "Timothy is responsible for doing server development for our client's websites. Timothy manages database systems and ensures that the systems are secure.",
        imgSrc: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Simon",
        description: "Simon is a infrastructor engineer at HotBeans. Simon is responsible for keeping our IT systems running smoothly and securly.",
        imgSrc: "https://images.pexels.com/photos/4728876/pexels-photo-4728876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Jenny",
        description: "Jenny is part of our marketing team. She is responsbile for the company image and acquiring partners and sponsors to spread the message about HotBeans.",
        imgSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
];

const createTraineeComponent = ({ name, description, imgSrc }) => {
    const divEl = document.createElement("div");
    divEl.className = "profile";

    const imgEl = document.createElement("img");
    imgEl.src = imgSrc;

    const infoContainerDivEl = document.createElement("div");

    const headingEl = document.createElement("h4");
    headingEl.textContent = name;

    const paraEl = document.createElement("p");
    paraEl.textContent = description;

    infoContainerDivEl.appendChild(headingEl);
    infoContainerDivEl.appendChild(paraEl);

    divEl.appendChild(imgEl);
    divEl.appendChild(infoContainerDivEl);

    return divEl;
}

trainees.forEach(trainee => {
    profilesContainer.appendChild(createTraineeComponent(trainee));
});