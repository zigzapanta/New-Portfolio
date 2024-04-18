const projectsData = [
    {
        image: "./images/ordering-kiosk.png",
        name: "Ordering-Kiosk(in progress)",
        description: "React app simulating the Ordering kiosk seen in fast food chains. This uses only frontend and is created with react.js and css.",
        url: "https://zigzapanta.github.io/Ordering-Kiosk/"
    },
    {
        image: "./images/full-stack-ecommerce.png",
        name: "Fullstack-Ecommerce",
        description: "A full-stack website completed during the bootcamp. The focus is on integrating the API to the frontend. JWT token were used in authentication.",
        url: "https://capstone-3-liard.vercel.app/"
    },


    {
        image: "./images/frontend-ecommerce.png",
        name: "Frontend-Ecommerce",
        description: "A purely front end website created by following a web tutorial in using React.",
        url: "https://zigzapanta.github.io/Ecommerce-Frontend/"
    },
];





const projectArea = document.getElementById("project-area");


function createProjectCard(project) {
    
    const projectCardHTML = `
        <div class="project-card">
            <a href="${project.url}" target="_blank">
                <img src="${project.image}" alt="${project.name}" class="project-image">
            </a>
            <div class="project-texts">
                <p class="project-name">${project.name}</p>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;

   
    projectArea.innerHTML += projectCardHTML;
}


projectsData.forEach(createProjectCard);
