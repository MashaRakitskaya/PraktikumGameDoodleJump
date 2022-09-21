import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForumChat from '../../components/ForumChat/ForumChat';
import ForumTopicItem from '../../components/ForumTopicItem/ForumTopicItem';
import { forumTopicsList, FORUM_PATH } from '../../utils/constants';
import { ForumContainer, ForumTopicsList } from './Forum.styles';

const Forum = () => {
  const [isTopicSelected, setTopicSelected] = useState(false);
  let navigate = useNavigate();
  return (
    <ForumContainer>
      <ForumTopicsList>
        {forumTopicsList.map((item) => {
          return (
            <ForumTopicItem
              onTopicClick={() => {
                setTopicSelected(true);
                navigate(`${FORUM_PATH}/${item.id}`);
              }}
              forumTopicsItem={item}
              key={item.id}
            />
          );
        })}
      </ForumTopicsList>
      {isTopicSelected && <ForumChat />}
    </ForumContainer>
  );
};

export default Forum;
