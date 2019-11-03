import React from 'react';

class PostsCounter extends React.Component {
    render() {
        let { postsCount } = this.props;

        if(postsCount === 0) {
            return (
                <div>
                    Posts amount: no posts
                </div>
            )
        } else {
            return (
                <div>
                    Posts amount: {postsCount}
                </div>
            );
        };        
    }
};

export default PostsCounter;
