import React from 'react';
import {
  ListItem,
  Place,
  Avatar,
  Name,
  Points
} from './LeaderboardItem.styles.js';
interface LeaderboardItemProps {
  leaderboardItem: { title: string; points: number; urlImg: string };
  index: number;
}

const LeaderboardItem = ({ leaderboardItem, index }: LeaderboardItemProps) => {
  const { title, points, urlImg } = leaderboardItem;

  return (
    <ListItem>
      <Place>{index + 1}</Place>
      <Avatar alt="avatar" src={urlImg}></Avatar>
      <Name>{title}</Name>
      <Points>{points}</Points>
    </ListItem>
  );
};

export default LeaderboardItem;
