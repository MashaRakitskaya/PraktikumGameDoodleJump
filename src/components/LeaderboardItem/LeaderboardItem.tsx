import React from 'react';
import { ENDPOINTS } from "../../constans/constans";
import {
  ListItem,
  Place,
  Avatar,
  Name,
  Points
} from './LeaderboardItem.styles.js';
interface LeaderboardItemProps {
  leaderboardItem: { name: string; score: number; urlImg: string };
  index: number;
}

const LeaderboardItem = ({ leaderboardItem, index }: LeaderboardItemProps) => {
  let { name, score, urlImg } = leaderboardItem;

  if(!urlImg){
      urlImg = ENDPOINTS.USER.DEFAULT_AVATAR
  }

  return (
    <ListItem>
      <Place>{index + 1}</Place>
      <Avatar
          alt="avatar"
          src={urlImg?.[0] === '/' ? ENDPOINTS.RESOURCES + urlImg : urlImg}
      ></Avatar>
      <Name>{name}</Name>
      <Points>{score}</Points>
    </ListItem>
  );
};

export default LeaderboardItem;
