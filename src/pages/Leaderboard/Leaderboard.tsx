import React, { useEffect } from 'react';
import LeaderboardItem from '../../components/LeaderboardItem/LeaderboardItem';
import { useFetchTeamLeaderboardMutation } from '../../services/leaderboard';
import { LeaderboardContainer, LeaderboardList } from './Leaderboard.styles.js';

const Leaderboard = () => {
  const [fetchLeaderboard, { data = [] }] = useFetchTeamLeaderboardMutation();

  useEffect(() => {
    fetchLeaderboard({ ratingFieldName: 'score', cursor: 0, limit: 100 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LeaderboardContainer role="leaderboard">
      <LeaderboardList>
        {data.map((item, index) => {
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
