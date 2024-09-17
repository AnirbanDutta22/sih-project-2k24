/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import AYUSH from "/src/assets/AYUSH transparent.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleNavigation = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <img src={AYUSH} alt="AYUSH Logo" style={styles.logo} />
        <div style={styles.navLinks}>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("ayush")}
          >
            AYUSH
          </button>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("ayurveda")}
          >
            AYURVEDA
          </button>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("yoga")}
          >
            YOGA & NATUROPATHY
          </button>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("unani")}
          >
            UNANI
          </button>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("siddha")}
          >
            SIDDHA
          </button>
          <button
            style={styles.navButton}
            onClick={() => handleNavigation("homeopathy")}
          >
            HOMEOPATHY
          </button>
        </div>
        <button style={styles.loginButton} onClick={handleLoginClick}>
          LOGIN
        </button>
      </div>

      <div id="ayush" style={styles.content}>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>
            Embracing Holistic Healing: The AYUSH Approach
          </h1>
          <p style={styles.paragraph}>
            AYUSH, an acronym for Ayurveda, Yoga & Naturopathy, Unani, Siddha,
            and Homoeopathy, represents a diverse and harmonious approach to
            health and wellness rooted in ancient traditions. This integrative
            system of medicine emphasizes a holistic perspective, addressing not
            just physical ailments but also mental and spiritual well-being. By
            blending time-honored practices—such as the balance of doshas in
            Ayurveda, the mind-body connection in Yoga, the humoral balance in
            Unani, the elemental harmony in Siddha, and the principle of "like
            cures like" in Homoeopathy—AYUSH offers a comprehensive framework
            for achieving optimal health. Its personalized and preventive
            strategies are designed to promote overall harmony, encouraging
            individuals to live in balance with themselves and their
            environment.
          </p>
          <button style={styles.joinButton} onClick={handleLoginClick}>
            Join
          </button>
        </div>
        <div style={styles.photoBox}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220831134439/AyushGridProject-660x330.jpg"
            alt="AYUSH"
            style={styles.photo}
          />
        </div>
      </div>

      <div id="ayurveda" style={styles.content}>
        <div style={styles.photoBox}>
          <img
            src="https://images.mid-day.com/images/images/2024/jan/ayurvedickidneytreatment1_d.jpg"
            alt="Ayurveda"
            style={styles.photo}
          />
        </div>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>Ayurveda</h1>
          <p style={styles.paragraph}>
            Ayurveda, a traditional system of medicine originating in ancient
            India, focuses on achieving harmony between the body, mind, and
            spirit to maintain health and treat illness. It operates on the
            principle that health is governed by the balance of three
            doshas—Vata, Pitta, and Kapha. Ayurvedic treatments include
            personalized diet plans, herbal remedies, yoga, and lifestyle
            adjustments designed to restore balance and promote overall
            well-being. This holistic approach aims to address the root causes
            of health issues rather than just alleviating symptoms.
          </p>
        </div>
      </div>

      <div id="yoga" style={styles.content}>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>Yoga & Naturopathy</h1>
          <p style={styles.paragraph}>
            Yoga is an ancient practice that integrates physical postures,
            breathing exercises, meditation, and ethical disciplines to promote
            physical and mental health. It aims to harmonize the body and mind,
            enhance flexibility, and reduce stress. Naturopathy complements yoga
            by emphasizing natural healing methods, including diet, exercise,
            and herbal therapies, to support the body's innate ability to heal
            itself. Together, these practices focus on fostering a holistic
            approach to health that emphasizes prevention and self-care.
          </p>
        </div>
        <div style={styles.photoBox}>
          <img
            src="https://vuniversity.in/wp-content/uploads/2023/09/School-of-Yoga-and-Naturopathy.png"
            alt="Yoga & Naturopathy"
            style={styles.photo}
          />
        </div>
      </div>

      <div id="unani" style={styles.content}>
        <div style={styles.photoBox}>
          <img
            src="https://www.theherbaltreatment.com/wp-content/uploads/2019/05/Herbal-Medicine-630x367.jpg"
            alt="Unani"
            style={styles.photo}
          />
        </div>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>Unani</h1>
          <p style={styles.paragraph}>
            Unani medicine, which has its roots in ancient Greece and was
            refined in the Arab world, is a holistic system that emphasizes the
            balance of the body's four humors—blood, phlegm, yellow bile, and
            black bile. Treatments in Unani medicine involve the use of herbal
            medicines, dietary recommendations, and lifestyle changes to restore
            and maintain this balance. Unani practitioners aim to address the
            underlying causes of illness by considering the individual's overall
            health, environment, and emotional state, thereby promoting a
            comprehensive approach to healing.
          </p>
        </div>
      </div>

      <div id="siddha" style={styles.content}>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>Siddha</h1>
          <p style={styles.paragraph}>
            Siddha medicine, originating in Tamil Nadu, India, is one of the
            oldest traditional healing systems in the Indian subcontinent. It
            encompasses a wide range of therapeutic practices, including herbal
            remedies, dietary guidelines, and spiritual techniques, to balance
            the body's elements and energies. Siddha philosophy emphasizes the
            interconnectedness of the body, mind, and environment, and seeks to
            treat both physical and mental ailments by restoring balance and
            harmony. It also incorporates unique diagnostic methods, such as
            pulse reading and observation of bodily signs.
          </p>
        </div>
        <div style={styles.photoBox}>
          <img
            src="https://www.thehealthsite.com/wp-content/uploads/2022/05/siddha.jpg"
            alt="Siddha"
            style={styles.photo}
          />
        </div>
      </div>

      <div id="homeopathy" style={styles.content}>
        <div style={styles.photoBox}>
          <img
            src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/homoeopathy-1710497484.jpg"
            alt="Homoeopathy"
            style={styles.photo}
          />
        </div>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>Homoeopathy</h1>
          <p style={styles.paragraph}>
            Homoeopathy is a system of medicine based on the principle of "like
            cures like," where substances that cause symptoms in healthy
            individuals are used in highly diluted forms to treat similar
            symptoms in sick individuals. Founded by Samuel Hahnemann in the
            late 18th century, homoeopathy aims to stimulate the body's vital
            force to heal itself. Treatments are individualized and focus on the
            totality of the patient's symptoms and overall well-being, rather
            than just addressing specific diseases. This approach emphasizes
            gentle, non-invasive remedies and considers both physical and
            emotional aspects of health.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: '"Roboto", sans-serif',
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#004d00",
    color: "#fff",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    height: "70px",
    width: "auto",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    margin: "0 30px",
  },
  navButton: {
    background: "none",
    border: "none",
    color: "#b3e6b3",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "10px 15px",
    transition: "color 0.3s",
  },
  navButtonHover: {
    color: "#fff",
  },
  loginButton: {
    backgroundColor: "#008000",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: "50px 50px",
    gap: "20px",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "70px",
  },
  textContent: {
    flex: 1,
    maxWidth: "50%",
    textAlign: "left",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "32px",
    margin: "0 0 20px 0",
    color: "#333",
  },
  paragraph: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    margin: "0 0 20px 0",
  },
  photoBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20px",
  },
  photo: {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  joinButton: {
    backgroundColor: "#008000",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    width: "90px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s, box-shadow 0.3s",
    textAlign: "center",
  },
};

export default Home;
