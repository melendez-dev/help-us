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
      <Grid container spacing={1}>
        <Grid style={{textAlign: "Right"}} item xs={3}>
          {icon}
        </Grid>
        <Grid item xs={1}>
          <Box
            style={{
              width: "2px",
              height: "100%",
              background: "#fff",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box><Typography variant="p-bold" color="#F3F3F3"> {title}</Typography></Box>
          <Box><Typography color="#F3F3F3"> {desc}</Typography></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
