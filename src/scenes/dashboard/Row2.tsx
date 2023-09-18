import DashBoardBox from "@/components/DashBoardBox";
import React from "react";

type Props = unknown;
//props: Props
const Row2 = () => {
  return (
    <>
      <DashBoardBox gridArea="d"></DashBoardBox>
      <DashBoardBox gridArea="e"></DashBoardBox>
      <DashBoardBox gridArea="f"></DashBoardBox>
    </>
  );
};

export default Row2;
