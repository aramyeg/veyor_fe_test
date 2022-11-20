import React from "react"
import Board from 'react-trello'
import MyCard from "../components/MyCard";
import MyLaneHeader from "../components/MyLaneHeader";
import boardData from "../data/boardData";

const components = {
  Card: MyCard,
  LaneHeader: MyLaneHeader
};

export default function Home() {
  return (
    <Board  components={components} class='bg-pinkish' data={boardData}/>
  )
}
