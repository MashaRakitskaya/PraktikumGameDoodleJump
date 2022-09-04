import React from 'react';
import {
  ListItem,
  Place,
  Avatar,
  Name,
  Points
} from './LeaderboardItem.styles';
interface LeaderboardItemProps {
  leaderboardItem: any;
  index: number;
}

const LeaderboardItem = ({ leaderboardItem, index }: LeaderboardItemProps) => {
  const { title, points, urlImg } = leaderboardItem;

  return (
    <ListItem>
      <Place>{index + 1}</Place>
      <Avatar src={urlImg}></Avatar>
      <Name>{title}</Name>
      <Points>{points}</Points>
    </ListItem>
  );
};

export default LeaderboardItem;
