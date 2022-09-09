import React from 'react';
import LeaderboardItem from '../../components/LeaderboardItem/LeaderboardItem';
import { leaderboardList } from '../../utils/constants';
import { LeaderboardContainer, LeaderboardList } from './Leaderboard.styles';

const Leaderboard = () => {
  const sortLeaderboardList = leaderboardList.sort(function (
    currentItem,
    nextItem
  ) {
    return nextItem.points - currentItem.points;
  });
  return (
    <LeaderboardContainer>
      <LeaderboardList>
        {sortLeaderboardList.map((item, index) => {
          return (
            <LeaderboardItem
              key={item.id}
              leaderboardItem={item}
              index={index}
            />
          );
        })}
      </LeaderboardList>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
