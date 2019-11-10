import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounterContainer from '../../features/PostsCounter/PostsCounterContainer';
import PostsContainer from '../../features/Posts/PostsContainer';

const PostsPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounterContainer />
        <PostsContainer />
    </div>
);

export default PostsPage;