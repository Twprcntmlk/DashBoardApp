import DashBoardBox from "@/components/DashBoardBox";
import React from "react";

type Props = unknown;
//props: Props
const Row3 = () => {
  return (
    <>
      <DashBoardBox gridArea="g"></DashBoardBox>
      <DashBoardBox gridArea="h"></DashBoardBox>
      <DashBoardBox gridArea="i"></DashBoardBox>
      <DashBoardBox gridArea="j"></DashBoardBox>
    </>
  );
};

export default Row3;
