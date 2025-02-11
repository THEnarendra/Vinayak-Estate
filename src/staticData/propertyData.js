import { type } from "@testing-library/user-event/dist/type";
import { villa1 , villa2, villa3, villa4 } from "../img/PropertyImages/propertyImages";

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
  {
    "id": 3,
    "propertyType": "Villas",
    "title": "133 गज मे आपकी सोच और सपनों से कही ज्यादा शानदार बना हुआ 4 BHK with Kids Room विला 🤩",
    "description": "This luxurious 4 BHK villa with a kids' room is located near National Super Mart, Jagdamba Nagar D, Vaishali West, Jaipur. Designed with modern aesthetics, it features high-end furnishings, a spacious layout, and premium amenities. The villa is fully furnished with wooden interiors, including king-size beds, air conditioners, an LED TV, and a modular kitchen with a chimney. JDA-approved and west-facing, this home ensures comfort, security, and convenience with nearby schools, temples, and hospitals.",
    "location": "📍Near National Super Mart, Jagdamba Nagar D, Vaishali West, Jaipur",
    "featureType": ["Featured", "Spotlight"],
    "contactInfo": {
      "phone": "+91 9660225994",
      "email": "contact@builder.com"
    },
    "propertyDetails": {
      "size": "133.33 Sqyrd",
      "dimensions": "30 x 40",
      "bedrooms": 4,
      "kidsRoom": 1,
      "studyRoom": 0,
      "bathrooms": 4,
      "drawingRoom": true,
      "facing": "West",
      "features": {
        "interior": "Super Luxury Interior",
        "furnished": "Fully Furnished",
        "approvals": "JDA Approved",
        "separatePatta": true,
        "furniture": [
          "King Size Bed",
          "AC",
          "Sofa",
          "LED TV",
          "Curtains"
        ],
        "kitchen": ["Chimney"],
        "interiorType": "Beautiful Wooden Interior",
        "security": ["CCTV"]
      },
      "nearby": ["School", "Temple", "Hospital"]
    },
    "askprice": "Contact for price",
    "images": Object.values(villa3)
  },
  {
    "id": 4,
    "propertyType": "Villas",
    "title": "200 गज में East Facing Luxury Villa with Movie Theater, Bar & Rooftop Garden 🤩",
    "description": "Experience unmatched luxury with this fully furnished 200 gaj east-facing villa, featuring a private movie theater, rooftop garden, bar, and lift. Designed for elegance and comfort, it includes high-end amenities such as a 5kW solar panel, tubewell, personal borewell pump, and spacious parking for two cars. With both 80ft and 60ft road connectivity, this villa is located in a prime area near top schools, hospitals, and entertainment hubs.",
    "location": "📍Prime Location, Near Ajmer Road & Chitrakoot Stadium, Jaipur",
    "featureType": ["Luxury", "Exclusive", "Premium"],
    "contactInfo": {
      "phone": "+91 9876543210",
      "email": "luxury@realestate.com"
    },
    "propertyDetails": {
      "size": "200 Sqyrd",
      "dimensions": "30 x 60",
      "bedrooms": 4,
      "kidsRoom": 0,
      "studyRoom": 0,
      "bathrooms": 6,
      "drawingRoom": true,
      "servantRoom": true,
      "facing": "East",
      "features": {
        "interior": "Ultra Luxury Interior",
        "furnished": "Fully Furnished",
        "approvals": "JDA Approved",
        "separatePatta": true,
        "furniture": [
          "King Size Bed",
          "AC",
          "Sofa",
          "LED TV",
          "Curtains"
        ],
        "kitchen": ["Modular Kitchen", "Chimney"],
        "interiorType": "Premium Wooden & Marble Finish",
        "security": ["CCTV", "Smart Lock System"],
        "additionalFeatures": [
          "5kW Solar Panel",
          "Tubewell",
          "Personal Borewell Pump",
          "Movie Theater",
          "Bar",
          "Lift",
          "Rooftop Garden",
          "2 Car Parking",
          "Both Side Connected Road (80ft & 60ft)"
        ]
      },
      "nearby": [
        "Hospital - 500 meters",
        "School - 1 km",
        "Ajmer Road - 1 km",
        "200 Ft Bypass - 1 km",
        "Chitrakoot Stadium - 1.5 km"
      ]
    },
    "askprice": "Contact for price",
    "images": Object.values(villa4)
  }
  
  
  
  
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
