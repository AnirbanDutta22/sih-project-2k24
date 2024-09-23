// /* eslint-disable react/no-unescaped-entities */
// import { useNavigate } from "react-router-dom";
// import AYUSH from "/src/assets/AYUSH transparent.png";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleNavigation = (section) => {
//     document.getElementById(section).scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={styles.container}>

//       <div style={styles.navbar}>
//         <img src={AYUSH} alt="AYUSH Logo" style={styles.logo} />
//         <div style={styles.navLinks}>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("ayush")}
//           >
//             AYUSH
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("ayurveda")}
//           >
//             AYURVEDA
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("yoga")}
//           >
//             YOGA & NATUROPATHY
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("unani")}
//           >
//             UNANI
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("siddha")}
//           >
//             SIDDHA
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("homeopathy")}
//           >
//             HOMEOPATHY
//           </button>
//         </div>
//         <button style={styles.loginButton} onClick={handleLoginClick}>
//           LOGIN
//         </button>
//       </div>

//       <div id="ayush" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>
//             Embracing Holistic Healing: The AYUSH Approach
//           </h1>
//           <p style={styles.paragraph}>
//             AYUSH, an acronym for Ayurveda, Yoga & Naturopathy, Unani, Siddha,
//             and Homoeopathy, represents a diverse and harmonious approach to
//             health and wellness rooted in ancient traditions. This integrative
//             system of medicine emphasizes a holistic perspective, addressing not
//             just physical ailments but also mental and spiritual well-being. By
//             blending time-honored practices—such as the balance of doshas in
//             Ayurveda, the mind-body connection in Yoga, the humoral balance in
//             Unani, the elemental harmony in Siddha, and the principle of "like
//             cures like" in Homoeopathy—AYUSH offers a comprehensive framework
//             for achieving optimal health. Its personalized and preventive
//             strategies are designed to promote overall harmony, encouraging
//             individuals to live in balance with themselves and their
//             environment.
//           </p>
//           <button style={styles.joinButton} onClick={handleLoginClick}>
//             Join
//           </button>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/uploads/20220831134439/AyushGridProject-660x330.jpg"
//             alt="AYUSH"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="ayurveda" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://images.mid-day.com/images/images/2024/jan/ayurvedickidneytreatment1_d.jpg"
//             alt="Ayurveda"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Ayurveda</h1>
//           <p style={styles.paragraph}>
//             Ayurveda, a traditional system of medicine originating in ancient
//             India, focuses on achieving harmony between the body, mind, and
//             spirit to maintain health and treat illness. It operates on the
//             principle that health is governed by the balance of three
//             doshas—Vata, Pitta, and Kapha. Ayurvedic treatments include
//             personalized diet plans, herbal remedies, yoga, and lifestyle
//             adjustments designed to restore balance and promote overall
//             well-being. This holistic approach aims to address the root causes
//             of health issues rather than just alleviating symptoms.
//           </p>
//         </div>
//       </div>

//       <div id="yoga" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Yoga & Naturopathy</h1>
//           <p style={styles.paragraph}>
//             Yoga is an ancient practice that integrates physical postures,
//             breathing exercises, meditation, and ethical disciplines to promote
//             physical and mental health. It aims to harmonize the body and mind,
//             enhance flexibility, and reduce stress. Naturopathy complements yoga
//             by emphasizing natural healing methods, including diet, exercise,
//             and herbal therapies, to support the body's innate ability to heal
//             itself. Together, these practices focus on fostering a holistic
//             approach to health that emphasizes prevention and self-care.
//           </p>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://vuniversity.in/wp-content/uploads/2023/09/School-of-Yoga-and-Naturopathy.png"
//             alt="Yoga & Naturopathy"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="unani" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://www.theherbaltreatment.com/wp-content/uploads/2019/05/Herbal-Medicine-630x367.jpg"
//             alt="Unani"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Unani</h1>
//           <p style={styles.paragraph}>
//             Unani medicine, which has its roots in ancient Greece and was
//             refined in the Arab world, is a holistic system that emphasizes the
//             balance of the body's four humors—blood, phlegm, yellow bile, and
//             black bile. Treatments in Unani medicine involve the use of herbal
//             medicines, dietary recommendations, and lifestyle changes to restore
//             and maintain this balance. Unani practitioners aim to address the
//             underlying causes of illness by considering the individual's overall
//             health, environment, and emotional state, thereby promoting a
//             comprehensive approach to healing.
//           </p>
//         </div>
//       </div>

//       <div id="siddha" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Siddha</h1>
//           <p style={styles.paragraph}>
//             Siddha medicine, originating in Tamil Nadu, India, is one of the
//             oldest traditional healing systems in the Indian subcontinent. It
//             encompasses a wide range of therapeutic practices, including herbal
//             remedies, dietary guidelines, and spiritual techniques, to balance
//             the body's elements and energies. Siddha philosophy emphasizes the
//             interconnectedness of the body, mind, and environment, and seeks to
//             treat both physical and mental ailments by restoring balance and
//             harmony. It also incorporates unique diagnostic methods, such as
//             pulse reading and observation of bodily signs.
//           </p>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://www.thehealthsite.com/wp-content/uploads/2022/05/siddha.jpg"
//             alt="Siddha"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="homeopathy" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/homoeopathy-1710497484.jpg"
//             alt="Homoeopathy"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Homoeopathy</h1>
//           <p style={styles.paragraph}>
//             Homoeopathy is a system of medicine based on the principle of "like
//             cures like," where substances that cause symptoms in healthy
//             individuals are used in highly diluted forms to treat similar
//             symptoms in sick individuals. Founded by Samuel Hahnemann in the
//             late 18th century, homoeopathy aims to stimulate the body's vital
//             force to heal itself. Treatments are individualized and focus on the
//             totality of the patient's symptoms and overall well-being, rather
//             than just addressing specific diseases. This approach emphasizes
//             gentle, non-invasive remedies and considers both physical and
//             emotional aspects of health.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100vh",
//     fontFamily: '"Roboto", sans-serif',
//   },
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 30px",
//     backgroundColor: "#ad92eda9",
//     color: "#fff",
//     position: "fixed",
//     width: "100%",
//     top: 0,
//     zIndex: 1000,
//   },
//   logo: {
//     height: "70px",
//     width: "auto",
//   },
//   navLinks: {
//     display: "flex",
//     justifyContent: "space-between",
//     flex: 1,
//     margin: "0 30px",
//   },
//   navButton: {
//     background: "none",
//     border: "none",
//     color: "#000",
//     fontSize: "16px",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     cursor: "pointer",
//     padding: "10px 15px",
//     transition: "color 0.3s",
//   },
//   navButtonHover: {
//     color: "#fff",
//   },
//   loginButton: {
//     backgroundColor: "#8b5cf6",
//     border: "none",
//     borderRadius: "5px",
//     color: "#fff",
//     padding: "12px 24px",
//     cursor: "pointer",
//     fontSize: "18px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "background-color 0.3s, box-shadow 0.3s",
//   },
//   content: {
//     flex: 1,
//     display: "flex",
//     alignItems: "center",
//     padding: "50px 50px",
//     gap: "20px",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     marginTop: "70px",
//   },
//   textContent: {
//     flex: 1,
//     maxWidth: "50%",
//     textAlign: "left",
//     paddingRight: "20px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   heading: {
//     fontSize: "32px",
//     margin: "0 0 20px 0",
//     color: "#333",
//   },
//   paragraph: {
//     fontSize: "18px",
//     color: "#555",
//     lineHeight: "1.6",
//     margin: "0 0 20px 0",
//   },
//   photoBox: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingLeft: "20px",
//   },
//   photo: {
//     width: "100%",
//     maxWidth: "800px",
//     height: "auto",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   joinButton: {
//     backgroundColor: "#8b5cf6",
//     border: "none",
//     borderRadius: "5px",
//     color: "#fff",
//     width: "90px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "16px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "background-color 0.3s, box-shadow 0.3s",
//     textAlign: "center",
//   },
// };

// export default Home;
import React, { useState } from "react";
import AYUSH from "/src/assets/AYUSH.png";
import india from "/src/assets/india.png";
import DropdownLang from "../components/Header/DropdownLang";
import { Link, NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const navKeys = `w-[2rem] text-base hover:text-[1.05rem] transition-all ease-in-out duration-300 cursor-pointer`;
// const activeLink = `bg-gray-50`;

const Home = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About AYUSH", path: "/about" },
    { name: "Startup Registration", path: "/registration" },
    { name: "Application Status", path: "/status" },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        { name: "Guidelines", path: "/resources/guidelines" },
        { name: "Templates", path: "/resources/templates" },
        { name: "Tutorials", path: "/resources/tutorials" },
      ],
    },
    {
      name: "Funding",
      path: "/funding",
      dropdown: [
        { name: "Grants", path: "/funding/grants" },
        { name: "Loans", path: "/funding/loans" },
        { name: "Investors", path: "/funding/investors" },
      ],
    },
    {
      name: "Events & Workshops",
      path: "/events",
      dropdown: [
        { name: "Upcoming Events", path: "/events/upcoming" },
        { name: "Webinars", path: "/events/webinars" },
        { name: "Workshops", path: "/events/workshops" },
      ],
    },
    { name: "Help Center", path: "/help" },
    { name: "User Dashboard", path: "/dashboard" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleMouseEnter = (index) => {
    setOpenDropdown(index); // Set the index of the dropdown to open
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null); // Close the dropdown when mouse leaves
  };

  return (
    <div>
      <nav className="flex flex-col">
        {/* topnav */}
        <div className="flex justify-center items-center bg-violet-500/70 p-2">
          <div className="w-[90%] mx-auto flex justify-between capitalize">
            {/* government icon */}
            <div className="basis-[60%] flex justify-start items-center gap-x-2 font-medium cursor-pointer">
              <img src={india} alt="indian_icon" className="size-7 shadow-md" />{" "}
              |<span>भारत सरकार |</span>
              <span>Government of India</span>
            </div>
            {/* nav keys */}
            <div className="flex basis-[40%] justify-end gap-x-6 items-center font-medium">
              <p className={`${navKeys} mr-5`}>sitemap</p>|
              <div className="flex justify-center items-center">
                <p className={navKeys}>A-</p>
                <p className={navKeys}>A</p>
                <p className={navKeys}>A+</p>
              </div>
              |
              <DropdownLang />
              {/* signup login btns */}
              <Link
                to="/signup"
                className="px-4 py-1 bg-violet-800 rounded text-white capitalize hover:bg-violet-900 transition-all ease-in-out duration-300"
              >
                register
              </Link>
              <Link
                to="/login"
                className="px-4 py-1 bg-violet-800 rounded text-white capitalize hover:bg-violet-900 transition-all ease-in-out duration-300"
              >
                login
              </Link>
            </div>
          </div>
        </div>
        {/* midnav */}
        <div className="flex justify-center gap-x-10 items-center w-[90%] mx-auto py-3">
          <img src={AYUSH} alt="ayush_logo" className="w-44 h-20" />
          <h1 className="text-2xl font-semibold">AYUSH Startup Portal</h1>
          <div className="flex-1 flex justify-center items-center">
            <ul className="flex items-center gap-x-10 font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-violet-500 ${
                        isActive
                          ? "border-b-2 border-violet-500 font-bold text-violet-500/70"
                          : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.dropdown && openDropdown === index && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex} className="hover:bg-gray-100">
                          <NavLink
                            to={dropdownItem.path}
                            className={({ isActive }) =>
                              `hover:text-violet-500 block px-4 py-2 ${
                                isActive ? "font-bold text-violet-500/70" : ""
                              }`
                            }
                          >
                            {dropdownItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* endniv */}
        <div className="flex justify-center items-center shadow-md py-2 border-t border-violet-200">
          <div className="w-[50%] mx-auto">
            <form className="flex-1">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="absolute end-1.5 bottom-1 btn-primary bg-violet-800 hover:bg-violet-900 px-3"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
