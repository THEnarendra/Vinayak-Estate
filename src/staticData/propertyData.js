import { type } from "@testing-library/user-event/dist/type";
import { villa1 , villa2 } from "../img/PropertyImages/propertyImages";

const VillasData = [
  {
    id: 1,
    propertyType: "Villas",
    title: "111 गज मे आपकी सोच और सपनों से कही ज्यादा शानदार बना हुआ 4 BHK with kids room विला 🤩",
    description: "This 4 BHK villa near Manas Hospital, Vaishali West Dhawas, Jaipur, combines modern design with comfort. Fully furnished with wooden interiors, king-size beds, air conditioners, an LED TV, and a fully equipped kitchen, it offers super luxury interiors. JDA-approved and west-facing, it’s close to schools, temples, and hospitals, ensuring convenience and elegance.",
    location: "📍Near Manas Hospital , Vaishali West Dhawas Jaipur",
    featureType: ["Featured", "Spotlight"],
    contactInfo: {
      phone: "+91 123 456 7890",
      email: "contact@builder.com",
    },
    propertyDetails: {
      size: "111 Sqyrd",
      dimensions: "30 x 50",
      bedrooms: 4,
      kidsRoom: 1,
      studyRoom: "",
      bathrooms: 4,
      drawingRoom: true,
      facing: "West",
      features: {
        interior: "Super Luxury Interior",
        furnished: "fully furnished",
        approvals: "JDA Approved",
        separatePatta: true,
        furniture: [
          "King Size Bed",
          "AC-4",
          "Sofa",
          "LED TV-1",
          "Curtains"
        ],
        kitchen: ["Chimney"],
        interiorType: "Beautiful Wooden Interior",
        security: ["CCTV"]
      },
      nearby: ["School", "Temple", "Hospital"]
    },
    askprice: "Contact for price",
    images: Object.values(villa1),
  },
  {
    id: 2,
    propertyType: "Villas",
    title: "100 गज मे आपकी सोच और सपनों से कही ज्यादा शानदार बना हुआ 4 BHK with Study space विला 🤩",
    description: "This luxurious 4 BHK villa near Manas Hospital, Vaishali West Dhawas, Jaipur, offers modern design, comfort, and top-notch amenities. Fully furnished with wooden interiors, it features king-size beds, air conditioners, an LED TV, and a kitchen with a chimney. With JDA approval and a west-facing layout, it’s close to schools, temples, and hospitals, ensuring a convenient and elegant lifestyle.",
    location: "📍Near Manas Hospital , Vaishali West Dhawas Jaipur",
    featureType: ["Featured", "Spotlight"],
    contactInfo: {
      phone: "+91 123 456 7890",
      email: "contact@builder.com",
    },
    propertyDetails: {
      size: "100 Sqyrd",
      dimensions: "20 x 45",
      bedrooms: 4,
      kidsRoom: "",
      studyRoom: 2,
      bathrooms: 4,
      drawingRoom: true,
      facing: "West",
      features: {
        interior: "Super Luxury Interior",
        furnished: "fully furnished",
        approvals: "JDA Approved",
        separatePatta: true,
        furniture: [
          "King Size Bed",
          "AC",
          "Sofa",
          "LED TV",
          "Curtains"
        ],
        kitchen: ["Chimney"],
        interiorType: "Beautiful Wooden Interior",
        security: ["CCTV"]
      },
      nearby: ["School", "Temple", "Hospital"]
    },
    askprice: "Contact for price",
    images: Object.values(villa2),
  },
  
];

const FlatsData = [];

const LandData = [];

const FarmHouseData = [];

const SpotlightFlats = [];

const FocusVillas = [];

const propertyData = {
  VillasData,
  FlatsData,
  LandData,
  FarmHouseData,
  SpotlightFlats,
  FocusVillas
}

export default propertyData;
