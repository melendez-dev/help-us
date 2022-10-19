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
export default function ContactUs() {
  return (
    <Box
      style={{
        backgroundColor: "#FFF",
        padding: "50px 0",
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
            <Typography variant="h1-bold" color="#434343">
              ¿CÓMO PODEMOS AYUDARTE?
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
                  right: "-10%",
                  top: "-4%",
                }}
              >
                <IconCustomWhatsapp />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box>
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
                <Box
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    style={{
                      width: "60%",
                    }}
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
                    variant="outlined"
                    style={{
                      width: "60%",
                    }}
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
                    variant="outlined"
                    style={{
                      width: "60%",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "60%",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "131px",
                      fotnSize: "13px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
