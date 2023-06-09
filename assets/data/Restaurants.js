const restaurantsData = [
  {
    id: "1",
    name: "Le Panorama",
    address: "Kiyovu, KN 3 Ave, Kigali",
    phone: "+250 788 123 456",
    email: "info@lepanorama.kig",
  },
  {
    id: "2",
    name: "Khana Khazana",
    address: "Kiyovu, KG 11 Ave, Kigali",
    phone: "+250 788 234 567",
    email: "info@khanakhazana.kig",
  },
  {
    id: "3",
    name: "Meze Fresh",
    address: "Kimihurura, KG 624 St, Kigali",
    phone: "+250 788 345 678",
    email: "info@mezefresh.kig",
  },
  {
    id: "4",
    name: "Pili Pili",
    address: "Kimihurura, KG 674 St, Kigali",
    phone: "+250 788 456 789",
    email: "info@pilipili.kig",
  },
  {
    id: "5",
    name: "Sole Luna",
    address: "Gacuriro, KG 9 Ave, Kigali",
    phone: "+250 788 567 890",
    email: "info@soleluna.kig",
  },
  {
    id: "6",
    name: "Repub Lounge",
    address: "Kacyiru, KG 7 Ave, Kigali",
    phone: "+250 788 678 901",
    email: "info@republounge.kig",
  },
  {
    id: "7",
    name: "Kiseki Japanese Restaurant",
    address: "Nyamirambo, KN 17 Ave, Kigali",
    phone: "+250 788 789 012",
    email: "info@kisekijapanese.kig",
  },
  {
    id: "8",
    name: "Poivre Noir",
    address: "Nyamirambo, KN 21 Ave, Kigali",
    phone: "+250 788 890 123",
    email: "info@poivrenoir.kig",
  },
  {
    id: "9",
    name: "L'Epicurean",
    address: "Remera, KN 59 St, Kigali",
    phone: "+250 788 901 234",
    email: "info@lepicepican.kig",
  },
  {
    id: "10",
    name: "The Bistro",
    address: "Gacuriro, KG 42 St, Kigali",
    phone: "+250 788 012 345",
    email: "info@thebistro.kig",
  },
];

const menuOptionsData = [
  {
    restaurant: { id: 1, name: "Le Panorama" },
    category: { id: 1, name: "Appetizer" },
    items: [
      {
        name: "Pizza",
        amount: 2,
        unitPrice: 3000,
        description: "Lorem ipsumn isut etiec sumpex",
      }
    ],
  },
  {
    restaurant: { id: 1, name: "Le Panorama" },
    category: { id: 2, name: "Starter" },
    items: [
      {
        name: "Pizza",
        amount: 2,
        unitPrice: 3000,
        description: "Lorem ipsumn isut etiec sumpex",
      }
    ],
  },
  {
    restaurant: { id: 1, name: "Le Panorama" },
    category: { id: 3, name: "Main" },
    items: [
      {
        name: "Pizza",
        amount: 2,
        unitPrice: 3000,
        description: "Lorem ipsumn isut etiec sumpex",
      }
    ],
  },
  {
    restaurant: { id: 1, name: "Le Panorama" },
    category: { id: 4, name: "Dessert" },
    items: [
      {
        name: "Pizza",
        amount: 2,
        unitPrice: 3000,
        description: "Lorem ipsumn isut etiec sumpex",
      }
    ],
  },
  {
    restaurant: { id: 1, name: "Le Panorama" },
    category: { id: 5, name: "Drink" },
    items: [
      {
        name: "Pizza",
        amount: 2,
        unitPrice: 3000,
        description: "Lorem ipsumn isut etiec sumpex",
      }
    ],
  },
];
export { restaurantsData, menuOptionsData };
