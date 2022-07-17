import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          background: `url(/images/ProfilePicture.png)`,
          minHeight: "100vh",
          bgcolor: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vh",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "85%",
            height: "100%",
            top: 0,
            right: 0,
            backgroundImage: `linear-gradient(270.09deg, #000000 59.87%, rgba(217, 217, 217, 0) 99.92%)`,
          },
        }}
      >
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} bgcolor="black">
          <Box
            sx={{
              position: "relative",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              // gap: 4,
              px: 10,
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              label="EMAIL"
              type="email"
              color="secondary"
              sx={{
                border: "1px solid #FFFFFF",
                borderRadius: "4px",
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="PASSWORD"
              type="password"
              color="secondary"
              sx={{
                mt: 2,
                border: "1px solid #FFFFFF",
                borderRadius: "4px",
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                height: "56px",
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
