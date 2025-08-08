import React from "react";
import { Typography } from "@mui/material";

const AboutPage: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      This page gives information about our company and mission. We aim to provide great services and user experience.
    </Typography>
  </div>
);

export default AboutPage;