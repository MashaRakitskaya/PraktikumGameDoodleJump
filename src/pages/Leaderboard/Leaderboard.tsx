import React from 'react';
import LeaderboardItem from '../../components/LeaderboardItem/LeaderboardItem';
import { leaderboardList } from '../../utils/constants';
import { LeaderboardContainer, LeaderboardList } from './Leaderboard.styles';

const Leaderboard = () => {
  const sortLeaderboardList = leaderboardList.sort(function (a, b) {
    return b.points - a.points;
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
