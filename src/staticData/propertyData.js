import { type } from "@testing-library/user-event/dist/type";
import { villa1 , villa2, villa3, villa4, villa5, villa6, villa7, villa8 } from "../img/PropertyImages/propertyImages";

const VillasData = [
  {
  id: 1,
  propertyType: "Villas",
  status: "Available",
  title: "133 गज में बना ये आलीशान घर जयपुर शहर में 🏡✨",
  description: "Experience premium living in this beautifully designed 4 BHK villa with a kids room, private living area, and a modular kitchen. Located in Vaishali West, Jaipur, this west-facing JDA approved home offers spacious interiors and top-tier furnishing. Perfectly suited for families seeking luxury and comfort in a prime area.",
  location: "📍Near Vaishali Nagar, Vaishali West, Jaipur, Rajasthan",
  featureType: ["Featured", "Spotlight"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "133 Sqyrd",
    dimensions: "30 x 40",
    bedrooms: 4,
    kidsRoom: 1,
    studyRoom: 0,
    bathrooms: 4,
    drawingRoom: true,
    facing: "West",
    features: {
      interior: "Premium Interior",
      furnished: "Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "King Size Bed",
        "AC",
        "Sofa",
        "LED TV",
        "Curtains"
      ],
      kitchen: ["Modular Kitchen"],
      interiorType: "Modern Modular Interior",
      security: ["CCTV"]
    },
    nearby: ["School", "Temple", "Hospital"]
  },
  askprice: "₹1.91 Cr",
  images: Object.values(villa1)
  },
  {
  id: 2,
  propertyType: "Villas",
  status: "Available",
  title: "157 गज में बना Ultra Luxury Villa 🎬🌿 | Lift, Theatre & Rooftop Garden",
  description: "Live the high life in this 157 gaj north-facing ultra luxury villa featuring a private theatre, lift, rooftop garden, study room, and double space parking. With 3 bedrooms, 4 ACs, and elegant interiors, this home is perfect for those who seek both comfort and class. Located in a prime area of Jaipur.",
  location: "📍Prime Location, Jaipur",
  featureType: ["Luxury", "Exclusive", "Premium"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "157 Sqyrd",
    dimensions: "33 x 43",
    bedrooms: 3,
    kidsRoom: 0,
    studyRoom: 1,
    bathrooms: 4,
    drawingRoom: true,
    servantRoom: false,
    facing: "North",
    features: {
      interior: "Ultra Luxury Interior",
      furnished: "Fully Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "King Size Bed",
        "AC-4",
        "Sofa",
        "LED TV",
        "Curtains"
      ],
      kitchen: ["Modular Kitchen", "Chimney"],
      interiorType: "Premium Wooden & Marble Finish",
      security: ["CCTV", "Smart Lock System"],
      additionalFeatures: [
        "Lift",
        "Private Movie Theater",
        "Rooftop Garden",
        "Double Space Parking"
      ]
    },
    nearby: ["School", "Temple", "Hospital"]
  },
  askprice: "₹3.21 Cr",
  images: Object.values(villa2)
  },
  // {
  //   "id": 3,
  //   "propertyType": "Villas",
  //   status: "Sold Out",
  //   "title": "133 गज मे आपकी सोच और सपनों से कही ज्यादा शानदार बना हुआ 4 BHK with Kids Room विला 🤩",
  //   "description": "This luxurious 4 BHK villa with a kids' room is located near National Super Mart, Jagdamba Nagar D, Vaishali West, Jaipur. Designed with modern aesthetics, it features high-end furnishings, a spacious layout, and premium amenities. The villa is fully furnished with wooden interiors, including king-size beds, air conditioners, an LED TV, and a modular kitchen with a chimney. JDA-approved and west-facing, this home ensures comfort, security, and convenience with nearby schools, temples, and hospitals.",
  //   "location": "📍Near National Super Mart, Jagdamba Nagar D, Vaishali West, Jaipur",
  //   "featureType": ["Featured", "Spotlight"],
  //   "contactInfo": {
  //     "phone": "+91 9660225994",
  //     "email": "contact@builder.com"
  //   },
  //   "propertyDetails": {
  //     "size": "133.33 Sqyrd",
  //     "dimensions": "30 x 40",
  //     "bedrooms": 4,
  //     "kidsRoom": 1,
  //     "studyRoom": 0,
  //     "bathrooms": 4,
  //     "drawingRoom": true,
  //     "facing": "West",
  //     "features": {
  //       "interior": "Super Luxury Interior",
  //       "furnished": "Fully Furnished",
  //       "approvals": "JDA Approved",
  //       "separatePatta": true,
  //       "furniture": [
  //         "King Size Bed",
  //         "AC",
  //         "Sofa",
  //         "LED TV",
  //         "Curtains"
  //       ],
  //       "kitchen": ["Chimney"],
  //       "interiorType": "Beautiful Wooden Interior",
  //       "security": ["CCTV"]
  //     },
  //     "nearby": ["School", "Temple", "Hospital"]
  //   },
  //   "askprice": "Contact for price",
  //   "images": Object.values(villa3)
  // },
  {
  id: 4,
  propertyType: "Villas",
  status: "Available",
  title: "200 गज में बना ये आलीशान घर Jaipur में 🎬 Luxurious Villa with Theatre Room",
  description: "PROJECT-104: A beautifully designed 200 gaj west-facing villa in Jaipur featuring 4 spacious bedrooms, a kids room, private living area, separate drawing room, and a fully modular kitchen. Comes with a dedicated theatre room and elegant furnishings. JDA-approved and vastu-compliant, this home offers premium comfort and is perfect for modern families.",
  location: "📍Prime Location, Jaipur",
  featureType: ["Featured", "Luxury"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "200 Sqyrd",
    dimensions: "30 x 60",
    bedrooms: 4,
    kidsRoom: 1,
    studyRoom: 0,
    bathrooms: 4,
    drawingRoom: true,
    servantRoom: false,
    facing: "West",
    features: {
      interior: "Luxury Interior",
      furnished: "Fully Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "King Size Beds",
        "ACs",
        "Sofa Set",
        "LED TV",
        "Curtains",
        "Dining Table"
      ],
      kitchen: ["Modular Kitchen", "Chimney"],
      interiorType: "Elegant Wooden Finish",
      security: ["CCTV"],
      additionalFeatures: [
        "Theatre Room"
      ]
    },
    nearby: [
      "School",
      "Hospital",
      "Temple"
    ]
  },
  askprice: "₹3.5 Cr",
  images: Object.values(villa4)
  },
  {
  id: 5,
  propertyType: "Villas",
  status: "Available",
  title: "श्याम कुंज – 200 गज में Ultra Luxury 4BHK Kothi with Lift, Theatre & Rooftop Garden 🌟🎬",
  description: "Presenting a stunning ultra-modern 4 BHK kothi with a home theatre, lift, rooftop garden, and premium amenities in Shyam Kunj, near Vaishali Nagar and Ajmer Road, Jaipur. This west-facing villa spans 200 gaj with elegant interiors, centralized ACs, imported furnishings, a designer temple, and two car parking. Fully loanable, JDA-approved, and built as per vastu, this home redefines luxury and comfort.",
  location: "📍Shyam Kunj, Near Vaishali Nagar & Ajmer Road, Jaipur",
  featureType: ["Ultra Luxury", "Exclusive", "Premium"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "200 Sqyrd",
    dimensions: "20 x 90",
    bedrooms: 4,
    kidsRoom: 0,
    studyRoom: 0,
    bathrooms: 5,
    drawingRoom: true,
    servantRoom: false,
    facing: "West",
    features: {
      interior: "Ultra Luxury Interior",
      furnished: "Fully Furnished",
      approvals: "JDA Patta Free Hold",
      separatePatta: true,
      furniture: [
        "Hydraulic Beds with Mattress & Side Tables - 4",
        "Daikin ACs - 7 (incl. 2 Ton Central AC in Hall)",
        "Sofa Set - 10 Seater (Drawing), 8 Seater (Living), 3 Seater (1st Fl), 2 Seater (Bedrooms)",
        "Modern Dining Table - 6 Seater",
        "Designer Curtains (Double Layer)",
        "LED Panel Furniture in all Rooms",
        "Elegant Sofa Chair",
        "Imported Artifacts",
        "Designer Wooden Doors (Melamine Finish)",
        "False Ceiling with Lighting",
        "Decorative Fans - 23 (Atomberg)",
        "Fancy Wall Lights",
        "Wardrobes with Dressing Areas"
      ],
      kitchen: [
        "Modular Kitchen",
        "Side-by-Side Refrigerator (602 Ltr)",
        "Microwave",
        "OTG",
        "Chimney (Hindware)",
        "RO (Under Counter)",
        "Centralized Geyser"
      ],
      interiorType: "Modern Premium Interior",
      security: [
        "CCTV",
        "Video Door Phone",
        "Electric Lock System"
      ],
      additionalFeatures: [
        "Home Theatre",
        "Lift (Automatic till 2nd Floor)",
        "Rooftop Garden with Lighting",
        "Water Fountain",
        "2 Car Covered Parking",
        "3 Phase Electricity & Water Connection",
        "Personal Borewell",
        "Beautiful Temple as per Vastu",
        "2 Front Side Balconies"
      ]
    },
    nearby: [
      "Chitrakoot Underpass - 1 km",
      "Sodala Metro Station - 5 min",
      "Jaipur Railway & Bus Station - 10 min",
      "NH Ajmer Road - 500 m",
      "Shalby Hospital - Nearby",
      "Mall of Jaipur - Nearby",
      "Jaishree Periwal School - 1 km"
    ]
  },
  askprice: "₹3.61 Cr",
  images: Object.values(villa5)
  },
  {
  id: 6,
  propertyType: "Villas",
  status: "Available",
  title: "113 गज का 4 BHK East Facing Luxury Villa with Rooftop Garden @ ₹1.75 Cr 🌿✨",
  description: "This East-facing 4 BHK luxury villa located in Rajni Vihar, Dhawas, Vaishali Nagar, Jaipur offers modern amenities, rooftop garden, premium interiors, and spacious living. Just 200m from Hotel Highway King and 500m from Chitrakoot Stadium, this JDA-approved home is in a prime well-developed colony with market, schools, and hospitals nearby. Fully furnished with branded fittings, 5 bathrooms, modular kitchen, video door phone, and open roof seating.",
  location: "📍Rajni Vihar, Dhawas, Vaishali Nagar, Jaipur",
  featureType: ["Featured", "Premium", "Luxury"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "113 Sqyrd",
    dimensions: "17 x 60",
    bedrooms: 4,
    kidsRoom: 0,
    studyRoom: 0,
    bathrooms: 5,
    drawingRoom: true,
    servantRoom: false,
    facing: "East",
    features: {
      interior: "Premium Luxury Interior",
      furnished: "Fully Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "4 Hydraulic Beds",
        "3 AC",
        "Sofa Set (3 Sets)",
        "Dining Table",
        "Bar Counter",
        "TV Panel (All Rooms)",
        "Mandir",
        "LED",
        "Curtains"
      ],
      kitchen: [
        "Modular Kitchen",
        "Chimney",
        "Refrigerator",
        "Chulha",
        "2 Geysers"
      ],
      interiorType: "Double Ceiling Height with Branded Fittings",
      security: [
        "CCTV Cameras",
        "Video Door Phone"
      ],
      additionalFeatures: [
        "Rooftop Garden",
        "Open Seating at Roof",
        "Bathroom Partition",
        "24×7 Water Facility",
        "Parking Space",
        "Vastu Friendly",
        "Loanable up to 90%",
        "Well Developed Colony"
      ]
    },
    nearby: [
      "Hotel Highway King - 200m",
      "Chitrakoot Stadium - 500m",
      "200 Ft Bypass - 500m",
      "Red Roj School - 100m",
      "SRG Hospital - 100m",
      "Element Mall - 2km"
    ]
  },
  askprice: "₹1.75 Cr",
  images: Object.values(villa6)
  },
  {
  id: 7,
  propertyType: "Villas",
  status: "Available",
  title: "190 गज में West Facing 5BHK Luxury Kothi with Home Theatre & Rooftop Garden 🏡🎬",
  description: "This west-facing 5BHK luxury kothi is located in Jagdamba Nagar C, Dhawas, Vaishali West, Jaipur. Spread across 190 gaj (28.6x60), it features 4 bedrooms, 1 guest room, 1 servant room, home theatre, rooftop garden, lift, and personal boring. Fully loaded with premium fittings, 5 ACs, refrigerator, chimney, 6 bathrooms, sofa sets, TV panels, dining table, temple, and security system with CCTV and video door phone. It’s JDA approved, has a separate patta, and is 90% loanable.",
  location: "📍 Jagdamba Nagar C, Dhawas, Vaishali West, Jaipur",
  featureType: ["Luxury", "Featured"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "190 Gaj",
    dimensions: "28.6 x 60",
    bedrooms: 5,
    guestRoom: 1,
    servantRoom: 1,
    bathrooms: 6,
    drawingRoom: true,
    homeTheatre: true,
    facing: "West",
    features: {
      interior: "Luxury Interior with Branded Fittings",
      furnished: "Fully Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "20 Seat Sofa Set",
        "6 Seater Dining Table",
        "TV Panels in All Bedrooms",
        "Mandir",
        "3 Seater Home Theatre",
        "Central Table (Shisham)"
      ],
      kitchen: [
        "Modular Kitchen",
        "Chimney + 3 Burner Stainless Steel Hob",
        "Microwave",
        "445L Refrigerator",
        "Dishwasher",
        "RO"
      ],
      interiorType: "Premium Finish with Vastu Compliant Layout",
      security: ["CCTV", "Video Door Phone"],
      additionalFeatures: [
        "Lift",
        "Personal Boring",
        "2 Car Parking",
        "Rooftop Garden with 5 Seater Set & Table",
        "5 Water Heaters",
        "10 Fans",
        "90% Loanable"
      ]
    },
    nearby: [
      "500m Ajmer Road",
      "500m SRG Hospital",
      "500m HDFC Bank",
      "500m CS Hospital",
      "200m Park",
      "200m Modern Heritage Sr. Sec. School",
      "300m BNVP Sr. Sec. School"
    ]
  },
  askprice: "₹3.31 Cr",
  images: Object.values(villa7)
  },
  {
  id: 8,
  propertyType: "Villas",
  status: "Available",
  title: "83 गज में West Facing 3BHK Luxury Villa with Rooftop Garden @ ₹1.03 Cr 🌿🏠",
  description: "Located in Amar Nagar C near D-Mart, Sirsi Road, Vaishali Nagar, Jaipur, this 3BHK west-facing villa is beautifully designed with a rooftop garden, modular kitchen, and super luxury wooden interiors. Fully furnished with beds, AC, sofa, LED, chimney, and security features like CCTV and video door phone. JDA approved, separate patta, and 90% loanable from leading banks, it’s ideal for a modern lifestyle with proximity to schools, hospitals, and banks.",
  location: "📍Amar Nagar C, Near D-Mart, Sirsi Road, Vaishali Nagar, Jaipur, Rajasthan",
  featureType: ["Featured", "Luxury", "Affordable"],
  contactInfo: {
    phone: "+91 9660225994",
    email: "contact@builder.com"
  },
  propertyDetails: {
    size: "83 Sqyrd",
    dimensions: "15 x 50",
    bedrooms: 3,
    kidsRoom: 0,
    studyRoom: 0,
    bathrooms: 3,
    drawingRoom: true,
    servantRoom: false,
    facing: "West",
    features: {
      interior: "Super Luxury Interior",
      furnished: "Fully Furnished",
      approvals: "JDA Approved",
      separatePatta: true,
      furniture: [
        "Bed",
        "AC",
        "Sofa",
        "LED",
        "Curtains",
        "Heir Geyser"
      ],
      kitchen: ["Modular Kitchen", "Chimney"],
      interiorType: "Beautiful Wooden Interior",
      security: ["CCTV", "Video Door Phone"],
      additionalFeatures: [
        "Rooftop Garden",
        "90% Loanable Property"
      ]
    },
    nearby: [
      "School",
      "Temple",
      "Hospital",
      "Bank"
    ]
  },
  askprice: "₹1.03 Cr (Fully Furnished), ₹98 Lac (Semi Furnished)",
  images: Object.values(villa8)
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
