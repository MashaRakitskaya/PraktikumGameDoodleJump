import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForumChat from '../../components/ForumChat/ForumChat';
import ForumTopicItem from '../../components/ForumTopicItem/ForumTopicItem';
import { IGetTopicResponse } from '../../models/IForum';

import { useFetchGetTopicsQuery } from '../../services/forum';
import { FORUM_PATH } from '../../utils/constants';
import { ForumContainer, ForumTopicsList } from './Forum.styles.js';

const Forum = () => {
  const [isTopicSelected, setTopicSelected] = useState(false);
  const navigate = useNavigate();
  const { data: topicsList } = useFetchGetTopicsQuery();

  return (
    <ForumContainer role="forum">
      <ForumTopicsList>
        {topicsList?.map((item: IGetTopicResponse) => {
          return (
            <ForumTopicItem
              onTopicClick={() => {
                setTopicSelected(true);
                navigate(`${FORUM_PATH}/${item.id}`);
              }}
              topic={item.topic}
              createdAt={item.createdAt}
              key={item.id}
              creator={item.user_second_name}
            />
          );
        })}
      </ForumTopicsList>
      {isTopicSelected && <ForumChat />}
    </ForumContainer>
  );
};

export default Forum;
