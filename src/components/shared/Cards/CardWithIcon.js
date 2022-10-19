import { Box, Grid, Typography } from "@mui/material";
export default function CardWithIcon({
  icon,
  title,
  desc,
  background,
  height,
}) {
  return (
    <Box
      style={{
        background: background,
        height: height,
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <Grid
        container
        spacing={1}
        style={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={2}
          style={{
            height: "100%",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "100%",
              marginRight: "9%",
            }}
          >
            {icon}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box
            style={{
              width: "2px",
              height: "80%",
              background: "#fff",
              marginTop: "10px",
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Box>
            <Box my={1}>
              <Typography variant="p-bold" color="#F3F3F3">
                {title}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography color="#F3F3F3"> {desc}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

