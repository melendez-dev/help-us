import { useLayoutEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  Paper,
  MenuItem,
  MenuList,
} from "@mui/material";
import Link from "next/link";

// responsive
import useMediaQuery from "@mui/material/useMediaQuery";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setMovil } from "../../../features/movil/movilSlice";

// icons
import {
  IconOpenMenu,
  IconCloseMenu,
  IconFaebook,
  IconInstagram,
  IconLinkedin,
} from "../../../assest/icons/config";

// framer motion
import { motion, useCycle, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const movil = useSelector((state) => state.movil.value);
  const matches = useMediaQuery("(max-width:920px)");
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setMovil(matches));
  }, [matches]);

  // menu movil with framer motion
  const [open, cycleOpen] = useCycle(false, true);
  const links = [
    { url: "/what-do", name: "¿Qué hacemos?", id: 1 },
    { url: "/about-us", name: "¿Quiénes somos?", id: 2 },
    { url: "/request", name: "Solicitud RTE", id: 3 },
    { url: "/contact", name: "Contácto", id: 4 },
    { url: "/donate", name: "Donar", id: 5 },
  ];

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <Container>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          padding: "24px 0px",
        }}
      >
        <Grid item xs={6} md={3}>
          <Link href="/">
            <Typography
              variant={movil ? "logo-small" : "logo"}
              color="primary"
              style={{ cursor: "pointer" }}
            >
              AYUDEMOS
            </Typography>
          </Link>
        </Grid>
        {movil ? (
          <Grid item xs={6}>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
                zIndex: 1000,
              }}
            >
              <Box onClick={cycleOpen}>
                <IconOpenMenu />
              </Box>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 300,
                    }}
                    exit={{
                      width: 0,
                      transition: { delay: 0.3, duration: 0.3 },
                    }}
                    style={{
                      backgroundColor: "#fff",
                      width: "100%",
                      position: "absolute",
                      height: "calc(100vh - 90px)",
                      // put left but not out of the screen
                      // open from the right to the left
                      right: "calc(100% - 108.7%)",
                    }}
                  >
                    <motion.div
                      initial="closed"
                      animate="open"
                      variants={sideVariants}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                        mr={2}
                        onClick={cycleOpen}
                      >
                        <IconCloseMenu />
                      </Box>
                      <Box
                        style={{
                          padding: "40px",
                        }}
                      >
                        <Box
                          style={{
                            textAlign: "center",
                          }}
                          mb={5}
                        >
                          <Link href="/">
                            <Typography variant="logo-small" color="secondary">
                              AYUDEMOS
                            </Typography>
                          </Link>
                        </Box>
                        <Divider />
                        {links.map((link, index) => (
                          <Box mt={2}>
                            <Link href={link.url} key={index}>
                              <Typography
                                variant="p"
                                color={link?.id === 5 ? "primary" : "secondary"}
                              >
                                {link.name}
                              </Typography>
                            </Link>
                          </Box>
                        ))}
                        <Box
                          style={{
                            position: "absolute",
                            bottom: "10%",
                            width: "calc(100% - 90px)",
                          }}
                        >
                          <Box>
                            <Divider />
                          </Box>
                          <Box mt={2}>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <IconInstagram color="#D8705D" />
                              <IconFaebook color="#D8705D" />
                              <IconLinkedin color="#D8705D" />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Grid>
        ) : (
          <>
            <Grid item xs={2}>
              <Link href="/what-do">
                <Button variant="text" color="secondary">
                  ¿Qué hacemos?
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link href="/about-us">
                <Button variant="text" color="secondary">
                  ¿Quiénes somos?
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link href="/request">
                <Button variant="text" color="secondary">
                  Solicitud RTE
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link href="/contact-us">
                <Button variant="text" color="secondary">
                  Contacto
                </Button>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link href="/donate">
                <Button variant="outlined" color="primary">
                  Donar
                </Button>
              </Link>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
