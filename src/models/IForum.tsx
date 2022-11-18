import { InputNames } from '../constans/constans';

export interface IGetTopicResponse {
  id: number;
  createdAt: string;
  topic: string;
  user_id: number;
  user_second_name: string;
  comments: {
    comment: string;
    createdAt: string;
    id: number;
    topic_id: number;
    user_id: number;
    user_second_name: string;
    comments: {
      comment: string;
      createdAt: string;
      id: number;
      topic_comment_id: number;
      user_id: number;
      user_second_name: string;
    }[];
  }[];
}

export interface IPostTopicParams {
  [InputNames.topic]: string;
  user_id: number;
  user_second_name: string;
}

export interface IGetTopicParams {
  id: number;
}

export interface IPostTopicCommentParams {
  user_id: number;
  comment: string;
  topic_id: number;
  user_second_name: string;
}

export interface IPostCommentToCommentsParams {
  user_id: number;
  comment: string;
  user_second_name: string;
}

export interface ITopicCommentResponse {
  id: any;
  createdAt: string;
  comment: string;
  user_id: number;
  user_second_name: string;
  topic_id: number;
  comments: {
    comment: string;
    createdAt: string;
    id: number;
    topic_comment_id: number;
    user_id: number;
    user_second_name: string;
  }[];
}
