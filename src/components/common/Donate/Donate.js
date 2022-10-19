import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";
export default function Donate() {
  return (
    <Container>
      <Card>
        <Grid
          container
          spacing="1"
          borderRadius="12px"
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
            background: "#D8705D",
            height: "462px",
            width: "574px",
          }}
        >
          <Grid xs={12}>
            <Box>
              <Typography variant="h2" color="white">
                Transferencia Bancaria
              </Typography>

              <Typography variant="p" color="white">
                ¡Estás a punto de apoyar la construcción de{" "}
                <b>un nuevo hogar</b> para quienes más lo necesitan!
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box>
              <Typography variant="h3" color="white">
                Banco Davivienda
              </Typography>

              <Typography variant="p-bold" color="white">
                #### #### #### #####
              </Typography>
            </Box>
            <Grid>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              objectPosition: "center",
              width: "221px",
              height: "2px",
              background: "#fff",
              marginTop: "10px",
              textAlign: "center",
              marginRight: "9%"
            }}
          />
        </Grid>
            <Box style={{
              marginTop: "10px",
            }}>
              <Typography variant="h3" color="white">
                Banco Bancolombia
              </Typography>

              <Typography variant="p-bold" color="white">
                #### #### #### #####
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      </Container>
  );
}
