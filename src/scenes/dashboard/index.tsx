import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  gridTemplateLarge,
  gridTemplateSmall,
} from "@/scenes/dashboard/gridTemplate";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

type Props = unknown;
//props: Props

const Dashboard = () => {
  const mediumScreens = useMediaQuery("(min-width:1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        mediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 /> 
    </Box>
  );
};

export default Dashboard;
