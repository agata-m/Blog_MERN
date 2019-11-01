import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
    componentDidMount() {
        const { loadSinglePost } = this.props;
        loadSinglePost();
    }

    render() {
        const { posts, request } = this.props;

        if(request.pending === false && request.success === true && posts.length > 0) {
            return (
                <div>
                    <PageTitle>{posts[0].title}</PageTitle>
                    <HtmlBox>{posts[0].content}</HtmlBox>
                </div>
            );  

        } else if(request.pending === true || request.success === null) {
            return <Spinner />

        } else if(request.pending === false && request.error != null) {
            return <Alert variant='error'>Error: {request.error}</Alert> 
        } else {
            return <Alert variant='error' />
        };
    }
};

SinglePost.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadSinglePost: PropTypes.func.isRequired,
};

export default SinglePost;