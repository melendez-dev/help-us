import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";
// icons
import { IconCustomWhatsapp } from "../../../assest/icons/config";

// redux
import { useSelector } from "react-redux";

export default function ContactUs() {
  const movil = useSelector((state) => state.movil.value);
  const [info, setInfo] = useState({});
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", info);
      Swal.fire({
        icon: "success",
        title: "Enviado con exito",
        timer: 2000,
      });

      // clear handleChange
    } catch (error) {
      console.log(error);
    }
  };

  const CustomeContainer = movil ? Container : Box;

  return (
    <Box
      style={{
        backgroundColor: movil ? "#f3f3f3" : "#FFF",
        padding: movil ? "20px 0" : "50px 0",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <Typography variant={movil ? "h3-bold" : "h1-bold"} color="#434343">
              {movil ? "¿Cómo podemos ayudarte?" : "¿CÓMO PODEMOS AYUDARTE?"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                style={{
                  alignItems: "center",
                  display: "flex",
                  height: "100%",
                  position: "relative",
                  right: movil ? undefined : "-10%",
                  top: movil ? undefined : "-4%",
                }}
              >
                <IconCustomWhatsapp />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomeContainer>
              <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      style={{
                        textAlign: movil ? "center" : undefined,
                      }}
                    >
                      <Typography variant="h3-bold" color="#434343">
                        O déjanos tus datos y te llamamos
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="p-small" color="#434343">
                        Nombre
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        required
                        variant="outlined"
                        style={{
                          width: movil ? "100%" : "60%",
                        }}
                        name="name"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="p-small" color="#434343">
                        Teléfono
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        required
                        variant="outlined"
                        style={{
                          width: movil ? "100%" : "60%",
                        }}
                        name="phone"
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="p-small" color="#434343">
                        Correo
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        required
                        type="email"
                        name="email"
                        variant="outlined"
                        style={{
                          width: movil ? "100%" : "60%",
                        }}
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: movil ? "100%" : "60%",
                      }}
                      mb={movil ? 4 : 0}
                      mt={movil ? 1 : 0}
                    >
                      <Button
                        variant="contained"
                        style={{
                          width: "131px",
                          fotnSize: "13px",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                        type="submit"
                      >
                        Enviar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CustomeContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
