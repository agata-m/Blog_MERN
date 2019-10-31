import React from 'react';

class PostsCounter extends React.Component {
    render() {
        const { postsCount } = this.props;

        return (
            <div>
                Posts amount: {this.props.length}
            </div>
        );
    }
};

export default PostsCounter;
