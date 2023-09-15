import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetweenBox from "@/components/FlexBetweenBox";
import PixIcon from "@mui/icons-material/Pix";

type Props = unknown;

const Navbar = (props: Props) => {
  const tbd = props;
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetweenBox mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetweenBox gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }}></PixIcon>
        <Typography variant="h4" fontSize="16px">
          AI DashBoard
        </Typography>
      </FlexBetweenBox>

      <FlexBetweenBox gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetweenBox>
    </FlexBetweenBox>
  );
};

export default Navbar;
