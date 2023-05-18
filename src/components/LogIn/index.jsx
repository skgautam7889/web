// import React, {  } from "react";
// import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
// import firebaseConfig from "../../firebase/config";

// const LogIn = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = e.target.elements;
//     try {
//       firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   const { currentUser } = useContext(AuthContext);
//   if (currentUser) {
//     return <Redirect to="/dashboard" />;
//   }
//   return (
//     <>
//       <h1>Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" placeholder="Email" />
//         <label htmlFor="password">Password</label>
//         <input type="password" name="password" placeholder="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default LogIn;

import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../firebase/config";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignIn() {
  const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
          firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
          alert(error);
        }
      };
      const { currentUser } = useContext(AuthContext);
      if (currentUser) {
        return <Redirect to="/dashboard" />;
      }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
        Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}