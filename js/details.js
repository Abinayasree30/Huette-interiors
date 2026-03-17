const projectData = {
    "living-room": {
        title: "Living Room Design",
        subtitle: "Stylish and comfortable living spaces designed for family connection and modern living.",
        mainImage: "images/gallery1.jpg",
        type: "Residential Interior",
        location: "Chennai",
        style: "Modern Living",
        focus: "Comfort & Elegance",
        description1: "Our living room interiors are designed to create a warm and welcoming atmosphere with balanced layouts, premium finishes, and elegant furniture placement.",
        description2: "We focus on lighting, textures, and decor details that make the space both functional and visually impressive.",
        gallery: ["images/gallery1.jpg", "images/gallery2.jpg", "images/gallery4.jpg"]
    },
    "bedroom": {
        title: "Bedroom Design",
        subtitle: "Peaceful bedroom interiors created for privacy, comfort, and restful living.",
        mainImage: "images/gallery2.jpg",
        type: "Residential Interior",
        location: "Chennai",
        style: "Soft Luxury",
        focus: "Relaxation & Privacy",
        description1: "Our bedroom concepts use calming colors, layered textures, and thoughtful furniture placement to build a restful personal space.",
        description2: "From wardrobes to lighting accents, every detail is chosen to support comfort, storage, and a premium feel.",
        gallery: ["images/gallery2.jpg", "images/gallery1.jpg", "images/gallery5.jpg"]
    },
    "kitchen": {
        title: "Kitchen Design",
        subtitle: "Functional kitchens with efficient layouts and a modern visual finish.",
        mainImage: "images/gallery3.jpg",
        type: "Residential Interior",
        location: "Chennai",
        style: "Contemporary Kitchen",
        focus: "Storage & Workflow",
        description1: "Our kitchen interiors are designed around smooth movement, practical storage, and durable materials that support everyday use.",
        description2: "We combine modular layouts, smart cabinetry, and elegant surfaces to create kitchens that are both beautiful and efficient.",
        gallery: ["images/gallery3.jpg", "images/gallery4.jpg", "images/gallery6.jpg"]
    },
    "luxury-interior": {
        title: "Luxury Interior Design",
        subtitle: "Premium interiors with refined materials, statement details, and timeless sophistication.",
        mainImage: "images/gallery4.jpg",
        type: "Premium Interior",
        location: "Chennai",
        style: "Luxury Elegant",
        focus: "High-End Experience",
        description1: "Luxury interiors are built with rich textures, custom finishes, curated lighting, and a strong sense of visual harmony.",
        description2: "We shape each luxury project to feel exclusive, polished, and deeply personalized to the client’s lifestyle.",
        gallery: ["images/gallery4.jpg", "images/gallery5.jpg", "images/gallery1.jpg"]
    },
    "modern-design": {
        title: "Modern Interior Design",
        subtitle: "Clean, sleek, and balanced spaces inspired by contemporary living.",
        mainImage: "images/gallery5.jpg",
        type: "Modern Interior",
        location: "Chennai",
        style: "Minimal Contemporary",
        focus: "Clean Look & Simplicity",
        description1: "Our modern interiors feature clean lines, uncluttered layouts, neutral palettes, and subtle statement elements.",
        description2: "Each space is designed to feel open, stylish, and practical without losing warmth and personality.",
        gallery: ["images/gallery5.jpg", "images/gallery2.jpg", "images/gallery6.jpg"]
    },
    "office-space": {
        title: "Office Space Design",
        subtitle: "Professional workspaces planned for productivity, comfort, and brand identity.",
        mainImage: "images/gallery6.jpg",
        type: "Commercial Interior",
        location: "Chennai",
        style: "Modern Workspace",
        focus: "Productivity & Function",
        description1: "Our office interiors are designed to improve workflow, support employee comfort, and create a polished professional environment.",
        description2: "We balance workspace efficiency, meeting zones, lighting, and aesthetics to reflect both function and brand character.",
        gallery: ["images/gallery6.jpg", "images/gallery3.jpg", "images/gallery4.jpg"]
    }
};

const params = new URLSearchParams(window.location.search);
const type = params.get("type") || "living-room";
const currentProject = projectData[type] || projectData["living-room"];

document.getElementById("projectTitle").textContent = currentProject.title;
document.getElementById("projectSubtitle").textContent = currentProject.subtitle;
document.getElementById("projectMainImage").src = currentProject.mainImage;
document.getElementById("projectMainImage").alt = currentProject.title;
document.getElementById("projectType").textContent = currentProject.type;
document.getElementById("projectLocation").textContent = currentProject.location;
document.getElementById("projectStyle").textContent = currentProject.style;
document.getElementById("projectFocus").textContent = currentProject.focus;
document.getElementById("projectDescription1").textContent = currentProject.description1;
document.getElementById("projectDescription2").textContent = currentProject.description2;
document.getElementById("galleryImage1").src = currentProject.gallery[0];
document.getElementById("galleryImage2").src = currentProject.gallery[1];
document.getElementById("galleryImage3").src = currentProject.gallery[2];
