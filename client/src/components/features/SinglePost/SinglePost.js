import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import loadSinglePost from '../../../redux/postsRedux';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../../config';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
    componentDidMount() {
        const { resetRequest, match } = this.props;
        loadSinglePost(match.params.id);
        console.log(match.params.id); // id jest ok
        resetRequest();
    }

    render() {
        const { posts, request, location, singlePost } = this.props;
        console.log(posts); //empty array - why?

        if(request.pending === false && request.success === true && posts.length > 0) {
            return (
                <div>
                    <p>Author: {posts.author}</p>
                    <PageTitle>{posts.title}</PageTitle>
                    <FacebookProvider appId='1039993433018202'>
                        <ShareButton href={`${BASE_URL}/${location.pathname}`}>
                            Share
                        </ShareButton>
                    </FacebookProvider>
                    <HtmlBox>{posts.content}</HtmlBox>
                    <FacebookProvider appId='1039993433018202'>
                        <Comments href={`${BASE_URL}/${location.pathname}`} />
                    </FacebookProvider>
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
            author: PropTypes.string.isRequired,
        })
    ),
    loadPost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props} />);