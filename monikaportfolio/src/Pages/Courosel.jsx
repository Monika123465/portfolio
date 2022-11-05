import { useContext, useEffect } from "react";
import { useState } from "react";
import styles from "../Styles/section.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import { AuthContext } from "./Context";

function Courosel() {
  const { state, dispatch } = useContext(AuthContext);
  const [img, setimg] = useState(require(`../Images/pluralsight1.png`));
  const [img1, setimg1] = useState(require(`../Images/geekbuing.png`));
  const [img4, setimg4] = useState(require(`../Images/rock.png`));
  const imgarr = [
    require(`../Images/pluralsight1.png`),
    require(`../Images/pluralsight2.png`),
    require(`../Images/pluralsightsignin.png`),
    require(`../Images/courses.png`),
  ];

  const imgarr1 = [
    
    require(`../Images/geekbuing.png`),
    require(`../Images/smarthome.png`),
    require(`../Images/geekbuingsignin.png`),
    require(`../Images/geekbuingcart.png`),
  ];

  const imgarr4 = [
    require(`../Images/rock.png`),
    require(`../Images/rockwomen.png`),
    require(`../Images/rocksearch.png`),
    require(`../Images/rockcart.png`),
  ];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 4) {
        i = 0;
      }
      setimg(imgarr[i]);
      setimg1(imgarr1[i]);
      setimg4(imgarr4[i]);
      i++;
    }, 4000);
  }, []);

  const onClosepluralsight = () => {
    dispatch({ type: "closepluralsight" });
  };

  const onClose = () => {
    dispatch({ type: "closegeekbuying" });
  };
  return (
    <section id="projects">
      <Modal
        isOpen={state.isOpenNow}
        onClose={onClosepluralsight}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pluralsight</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img} alt="img" />
            </div>
            <br />
            <div className={styles.textdata}>
              <p>
                
              Pluralsight,is an American privately held online education company that offers a 
              variety of video training courses for software developers,
               IT administrators, and creative professionals through its website
              </p>
              <p>Tech Stack:- HTML,CSS,Javascript,React.js,Chakra</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/Monika123465/calculating-price-1643"
              >
                <Button
                  bg="rgb(108,99,255)"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://plurasightmasaiproject.netlify.app/"
              >
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="rgb(108,99,255)"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClosepluralsight}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={state.isOpenNowgeek} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>GeekBuying</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img1} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
              Geekbuying leading online shop selling a wide range of consumer electronic gadgets
              </p>
              <p>Tech Stack:- HTML,CSS,Javascript,React.js</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/ankit2341/Eagles"
              >
                <Button
                  bg="rgb(108,99,255)"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://geekbuyingmasai.netlify.app/"
              >
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="rgb(108,99,255)"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isOpenNownord}
        onClose={() => dispatch({ type: "closenordstrom" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nordstrom</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img4} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                
              Nordstrom, Inc. is a leading fashion retailer offering compelling clothing,
               shoes and accessories for men, women and kid
              </p>
              <p>Tech Stack:- HTML,CSS,Javascript,React.js</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href=""
              >
                <Button
                  bg="rgb(108,99,255)"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://github.com/gopalkrushnas063/entertaining-snails-6673-Nordstromrack"
              >
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="rgb(108,99,255)"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch({ type: "closenordstrom" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className={styles.projecttitile}>
        <h1>Projects</h1>
        <h5>
          Since I started working as a web developer I worked on many projects.
        </h5>
        <h5>Let’s dive into this now.</h5>
      </div>
      <div className={styles.container}>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Pluralsight</h3>
            <p>
            Pluralsight,is an American privately held online education company that offers a 
              variety of video training courses for software developers.
            </p>
            <p>Tech Stack:- <br />  HTML,CSS,Javascript,React.js</p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/react.png`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "openpluralsight" })}
              className={styles.footer}
            >
              View
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img4} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Nordstrom rack</h3>
            <p>
            Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, 
            shoes and accessories for men, women and kid
            </p>
            <p>
              Tech Stack:- <br />
              HTML,CSS,Javascript,React.js
            </p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/react.png`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "opennordstrom" })}
              className={styles.footer}
            >
              View
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img1} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Geekbuing</h3>
            <p>
            Geekbuying leading online shop selling a wide range of consumer electronic gadgets
            </p>
            <p>Tech Stack:- HTML,CSS,Javascript,React.js,Chakra</p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/react.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Chakra UI"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../Images/abc.png`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "opengeekbuying" })}
              className={styles.footer}
            >
              View
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courosel;


