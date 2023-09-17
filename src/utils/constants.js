const constants = {
    aboutpage:{
        aboutQuoteContent: "There are no rockstars in collaborative design",
        aboutQuoteAuthor: "- Will Evans",
    },
    homepage:{
        quoteContent: "Simplicity is the ultimate sophistication",
        quoteAuthor: "- Leonardo Da Vinci",
        quoteDescription: "As designers we idolise the Quotee & always aim to achieve this, simplify problems .. simplify solutions and life of our end users.."
    },
    planning:[
        { 
            title: 'DISCOVER',
            description : "Open minded learning process to understand the User, the Market & the Business",
            hoverChildren: [   
                "UX Research",
                "Competitor Analysis",
                "Heuristic Evaluation",
                "User Persona",
                "User Journey Map",
                "Empathy Map",
                "Story Board",
                "Service Blueprint"
            ],
            image: require("../assets/planning-1.png")
        },
        { 
            title: 'DEFINE',
            description : "Analyse patterns & draw insights for UX Mental Models and Business Strategy",
            hoverChildren: [   
               " Mind Maps",
                "Affinity Diagrams",
                "Analysis & Insights",
                "UX Strategy",
                "Task Flows",
                "Ux Architecture"
            ],
            image: require("../assets/planning-2.png")
        },
        { 
            title: 'DESIGN',
            description : "Translate Strategy to Ideas, Interactions, Prototypes & Visual identity",
            hoverChildren : [
                "Lo-Fi Wireframes",
                "Interaction Design",
                "Clickable Prototype",
                "Visual Designs",
                "Branding",
                "Illustrations"
            ],
            image: require("../assets/planning-3.png")
        },
        { 
            title: 'DELIVER',
            description : "Collaborate to build the product, test with real users and evolve.",
            hoverChildren: [
                "Final Designs", 
                "Design System",
                "Implementation support",
                "Usability Testing",
                "Documentation" 
            ],
            image: require("../assets/planning-4.png")
        }
    ],
    offering : [
        {
            title:"End to end UX consulting",
            description: "From Discovery of the problem to Research, Strategy, Design and till Delivery of the product.",
            image: require("../assets/Group 1.png")
        },
        {
            title:"Branding & Illustrations",
            description: "Creating distinct Identity and custom illustrations for Products & Services",
            image: require("../assets/Group 2.png")
        },
        {
            title:"Strategic consulting",
            description: "Solve Business problems with a User Centric mindset to help achieve your success metrics",
            image: require("../assets/Group 3.png")
        },
        {
            title:"Design Systems",
            description: "Design complete set of standards, components & patterns , to empower your design to scale flexibly",
            image: require("../assets/Group 4.png")
        }
    ],
    values:[
        {
            title: "Empathy",
            description: "As designers , we believe empathy is the cornerstone of design",
            image: require("../assets/empathy_icon.png")
        },
        {
            title: "Synergy",
            description: "Together we are always better... True synergy is only possible with open minds",
            image: require("../assets/synergy_icon.png")
        },
        {
            title: "Passion",
            description: "No great work can be done without passion and we always strive to keep that burning ...",
            image: require("../assets/passion_icon.png")
        },
        {
            title: "Curiosity",
            description: "Stay hungry, stay curious is our motto as it is breeds new ideas",
            image: require("../assets/curiosity_icon.png")
        },
        {
            title: "Integrity",
            description: "We believe our honest efforts and integrity are our best PR",
            image: require("../assets/integrity_icon.png")
        },
        {
            title: "Persistence",
            description: "We always persevere to give our best ... every single time",
            image: require("../assets/persistence_icon.png")
        },
    ]

}

export default constants;