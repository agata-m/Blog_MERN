import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounterContainer from '../../features/PostsCounter/PostsCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostsPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounterContainer />
        <Posts />
    </div>
);

export default PostsPage;