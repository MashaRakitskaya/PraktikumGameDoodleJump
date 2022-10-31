import React from 'react';
import LeaderboardItem from '../../components/LeaderboardItem/LeaderboardItem';
import { leaderboardList } from '../../utils/constants';
import { LeaderboardContainer, LeaderboardList } from './Leaderboard.styles.js';

const Leaderboard = () => {
  const sortLeaderboardList = leaderboardList.sort(
    (currentItem, nextItem) => nextItem.points - currentItem.points
  );

  return (
    <LeaderboardContainer role="leaderboard">
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
