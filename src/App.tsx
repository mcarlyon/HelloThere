import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Container, AppBar, Toolbar, Typography, Button, FormControlLabel, Switch, Box } from "@mui/material";

const App: React.FC = () => {
  // State to toggle between light and dark modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Light and Dark themes
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // Function to toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply background color based on theme
  useEffect(() => {
    const theme = isDarkMode ? darkTheme : lightTheme;
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [isDarkMode, lightTheme, darkTheme]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      	<Router>
      	{/* AppBar Section */}
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: "inherit", textDecoration: "none", cursor: "pointer", fontWeight: "bold" }}>
						My Homepage
					</Typography>
					<Box sx={{ flexGrow: 1 }}>
						{/* <Button component={Link} to="/" color="inherit">
							Home
						</Button> */}
						<Button component={Link} to="/about" color="inherit">
							About
						</Button>
						<Button component={Link} to="/contact" color="inherit">
							Contact
						</Button>
					</Box>
					{/* Toggle Switch for Light/Dark Mode */}
					<FormControlLabel
						control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
						label={isDarkMode ? "Dark Mode" : "Light Mode"}
						sx={{ color: "white" }}
					/>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg" sx={{ paddingY: 4, color: (theme) => theme.palette.text.primary }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</Container>
      	</Router>
    </ThemeProvider>
  );
};

export default App;
