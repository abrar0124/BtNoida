const HeaderArray = [
  { name: "Home", path: "/" },

  {
    name: "DCS Solutions",
    path: "/",
    subMenu: [
      { name: "Departure Control System", path: "/dcs-solutions/departure" },
      { name: "Backup DCS", path: "/dcs-solutions/backup" },
      { name: "Local DCS", path: "/dcs-solutions/local" },
      { name: "Mobile DCS", path: "/dcs-solutions/mobile" },
      { name: "Weight and Balance", path: "/dcs-solutions/weight" },
    ],
  },
  {
    name: "Hardware",
    path: "/",
    subMenu: [
      { name: "Printers", path: "/hardware/printers" },
      { name: "Scanners", path: "/hardware/scanners" },
      { name: "RFID Solutions", path: "/hardware/rfid" },
      { name: "Kiosks", path: "/hardware/kiosks" },
    ],
  },
  {
    name: "BRS Hardware",
    path: "/",
    subMenu: [
      { name: "Baggage Tracking", path: "/brs-hardware/tracking" },
      { name: "RFID Readers", path: "/brs-hardware/rfid" },
    ],
  },
  {
    name: "Company A - Z",
    path: "/",
    subMenu: [
      { name: "Our History", path: "/company-a-z/history" },
      { name: "Leadership", path: "/company-a-z/leadership" },
      { name: "Careers", path: "/company-a-z/careers" },
      { name: "News", path: "/company-a-z/news" },
    ],
  },
  // Ye last 4 items header mai show honge agar Navbar sahi implement ho
  { name: "Events", path: "/events" },
  { name: "Mobile Apps", path: "/mobileapps" },
  { name: "APIs", path: "/api" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login Api", path: "/Loginapi" },
];

export default HeaderArray;
