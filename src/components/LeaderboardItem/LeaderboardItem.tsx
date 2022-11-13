import React from 'react';
import {
  ListItem,
  Place,
  Avatar,
  Name,
  Points
} from './LeaderboardItem.styles';
interface LeaderboardItemProps {
  leaderboardItem: { name: string; score: number; urlImg: string };
  index: number;
}

const LeaderboardItem = ({ leaderboardItem, index }: LeaderboardItemProps) => {
  const { name, score, urlImg } = leaderboardItem;

  return (
    <ListItem>
      <Place>{index + 1}</Place>
      <Avatar alt="avatar" src={urlImg}></Avatar>
      <Name>{name}</Name>
      <Points>{score}</Points>
    </ListItem>
  );
};

export default LeaderboardItem;
