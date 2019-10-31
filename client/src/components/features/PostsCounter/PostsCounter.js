import React from 'react';

class PostsCounter extends React.Component {
    render() {
        let { postsCount } = this.props;

        if(postsCount === 0) {
            postsCount = 'no posts';
        };

        return (
            <div>
                Posts amount: {postsCount}
            </div>
        );
    }
};

export default PostsCounter;
