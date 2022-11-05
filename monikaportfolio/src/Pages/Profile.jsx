import { Image, Text, Button } from "@chakra-ui/react";
import styles from "../Styles/profile.module.css";

const Profile = () => {
  return (
    <section id="home">
      <div className={styles.profile}>
        <div className={styles.info}>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Hi, I Am
          </h1>
          <h1
            style={{
              color: "rgb(108,99,255)",
              fontSize: "38px",
              fontWeight: "bold",
            }}
          >
            Monika kumari
          </h1>
          <Text fontSize={15}>
            A MERN Stack developer. I have a passion for technology and love
            working on new and exciting technologies emerging nowadays. I'm a
            passionate Developer with good communication skills, good attention
            to detalis and the ability to write efficeint code using MERN Stack.
          </Text>
          <div>
            <a
              href="https://www.linkedin.com/in/monika-kumari-23531323b/"
              target="_blank"
            >
              <Button
                colorScheme="red"
                color={"white"}
                borderRadius={50}
                marginTop={2}
              >
                Hire me
              </Button>
            </a>
          </div>
          <div className={styles.socialicon}>
            <button>
              <a target={"_blank"} href="https://github.com/Monika123465">
                <img
                  src={require(`../Images/github.png`)}
                  alt="Github"
                />
              </a>
            </button>

            <button>
              <a href="mailto:monasingh7479@gmail.com">
                <img src={require(`../Images/Gmail.png`)} alt="twitter" />
              </a>
            </button>

            <button>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/monika-kumari-23531323b/"
              >
                <img
                  src="https://img.icons8.com/fluency/344/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </button>
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            className="avatarimg"
            alt=""
            src={require("../Images/monika.jpeg")}
          />
           </div>
      </div>
    </section>
  );
};

export default Profile;