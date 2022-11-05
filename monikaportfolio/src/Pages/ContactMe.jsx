import styles from "../Styles/contactme.module.css";

const ContactMe = () => {
  return (
    <section id="contactMe" className={styles.contactMeSection}>
      <h1 className={styles.contactMeHeading}>Contact Me</h1>

      <span className={styles.contactMeDescription}>
        You can use different way to contact me. Choose what you want.
      </span>

      <div className={styles.contactMeContent}>
        <div className={styles.contactMeFirstSection}>
          <div>
            <a href="mailto:monasingh7479@gmail.com">
              <img src={require(`../Images/Gmail.png`)} alt="" />
              <h4>monasingh7479@gmail</h4>
            </a>
          </div>
          <div>
            <a href="https://github.com/Monika123465">
              <img src={require(`../Images/github.png`)} alt="" />
              <h4>@Monika123465</h4>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/monika-kumari-23531323b/">
              <img src={require(`../Images/linkedian.png`)} alt="" />
              <h4>@Monika123465</h4>
            </a>
          </div>
          <div>
            <a href="tel:+91 7033919229">
              <img src={require(`../Images/phone.jpg`)} alt="" />
              <h4>+91 7033919229</h4>
            </a>
          </div>
        </div>

        <div className={styles.contactMeSecondSection}>
          <img
            style={{
              width: "500px",
              height: "auto",
            }}
            src={require(`../Images/contactus.png`)}
            alt="err"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;