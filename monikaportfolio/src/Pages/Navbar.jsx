import {
    Box,
    Button,
    RadioGroup,
    Stack,
    Text,
    useDisclosure,
    useMediaQuery,
  } from "@chakra-ui/react";
  import styles from "../Styles/Navbar.module.css";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  } from "@chakra-ui/react";
  
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSmallerThan700] = useMediaQuery("(max-width: 750px)");
  
    const handleScroll = (target) => {
      const targetElement = document.getElementById(target);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent textAlign={"center"} background={"#151418"}>
            <DrawerHeader
              bg="#151418"
              color="white"
              fontSize={"32px"}
              m="0px"
              borderBottomWidth="1px"
            >
              Monika kumari
            </DrawerHeader>
            <DrawerBody
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mb="35px"
            >
              <Stack direction={"column"} spacing={"18px"} alignItems={"center"}>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("home");
                      console.log("home");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    About
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("skills");
                      console.log("skills");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    Skills
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("projects");
                      console.log("projects");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    Projects
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("resume");
                      console.log("resume");
                    }, 800)
                  )}
                >
                  <Button color={"white"} fontWeight={"bold"} fontSize={30} >
                    Resume
                  </Button>
                </Box>
              </Stack>
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
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button
                bg="rgb(108,99,255)"
                color="white"
                variant="outline"
                mr={3}
                onClick={onClose}
                size="lg"
                _hover={{
                  background: "transparent",
                  color: "white",
                }}
              >
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <nav className={styles.navbar}>
          <Stack alignItems={"center"} direction={"row"} spacing={10}>
            {isSmallerThan700 ? (
              <Button className={styles.btn1} bg="transparent" onClick={onOpen}>
                <HamburgerIcon w={7} h={7} />
              </Button>
            ) : (
              ""
            )}
            <Box>
              <Text className={styles.name} fontSize={24} color="rgb(108,99,255)">
                    Monika
              </Text>
            </Box>
          </Stack>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            width="45%"
          >
            <div className={styles.navdata} onClick={() => handleScroll("home")}>
              <Text _hover={{cursor:"pointer"}} fontSize={20}>About</Text>
            </div>
            <div
              className={styles.navdata}
              onClick={() => handleScroll("skills")}
            >
              <Text _hover={{cursor:"pointer"}} fontSize={20}>Skills</Text>
            </div>
            <div
              className={styles.navdata}
              onClick={() => handleScroll("projects")}
            >
              <Text _hover={{cursor:"pointer"}} fontSize={20}>Projects</Text>
            </div>
            <div className={styles.navdata} onClick={() => handleScroll("resume")}>
              <Text onClick={() => {
              
              }} _hover={{cursor:"pointer"}} fontSize={20}>
                <a href="/resume.png" download={true}>Resume</a>
              </Text>
            </div>
            
  
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              onClick={() => handleScroll("contactMe")}
            >
              Contact Me
            </Button>
          </Box>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  