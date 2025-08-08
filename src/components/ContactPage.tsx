import React from "react";
import { Typography } from "@mui/material";

const ContactPage: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      Contact Us
    </Typography>
    <Typography variant="body1" paragraph>
      You can reach us at:
      <br />
      Email: contact@myhomepage.com
      <br />
      Phone: 123-456-7890
    </Typography>
  </div>
);

export default ContactPage;