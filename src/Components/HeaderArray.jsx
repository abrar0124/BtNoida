const HeaderArray = [
  { name: "Home", path: "/" },

  {
    name: "Products Crud",
    path: "/Products crud",
    subMenu: [
      { name: "Departure Control System", path: "/" },
      { name: "Backup DCS", path: "/" },
      { name: "Local DCS", path: "/" },
      { name: "Mobile DCS", path: "/" },
      { name: "Weight and Balance", path: "/" },
    ],
  },
  {
    name: "Hardware",
    path: "/",
    subMenu: [
      { name: "Printers", path: "/" },
      { name: "Scanners", path: "/" },
      { name: "RFID Solutions", path: "/" },
      { name: "Kiosks", path: "/" },
    ],
  },
  {
    name: "BRS Hardware",
    path: "/",
    subMenu: [
      { name: "Baggage Tracking", path: "/" },
      { name: "RFID Readers", path: "/" },
    ],
  },
  {
    name: "Company A - Z",
    path: "/",
    subMenu: [
      { name: "Our History", path: "/" },
      { name: "Leadership", path: "/" },
      { name: "Careers", path: "/" },
      { name: "News", path: "/" },
    ],
  },
  // Ye last 4 items header mai show honge agar Navbar sahi implement ho
  { name: "Events", path: "/events" },
  { name: "Mobile Apps", path: "/mobileapps" },
  { name: "APIs", path: "/api" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login Api", path: "/Loginapi" },
  { name: "Porfolio", path: "/portfolio" },
];

export default HeaderArray;
