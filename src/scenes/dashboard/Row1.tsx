import DashBoardBox from "@/components/DashBoardBox";
import React from "react";
import { useGetKpisQuery } from "@/state/api";

type Props = unknown;
//props: Props
const Row1 = () => {
  const { data } = useGetKpisQuery();
  console.log(data);
  return (
    <>
      <DashBoardBox gridArea="a"></DashBoardBox>
      <DashBoardBox gridArea="b"></DashBoardBox>
      <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  );
};

export default Row1;
