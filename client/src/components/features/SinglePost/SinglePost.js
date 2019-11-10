import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../../config';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

import './SinglePost.scss';

class SinglePost extends React.Component {
    componentDidMount() {
        const { resetRequest, loadSinglePost, match } = this.props;
        loadSinglePost(match.params.id);
        resetRequest();
    }

    render() {
        const { posts, request, location } = this.props;

        if(posts === null && request.pending === true) {
            return <Spinner />
        } else if(posts === null) {   
            return <Alert variant='error' children=''>Ups! Page not found :(</Alert>
        };


        if(request.pending === true || request.success === null) {
            return <Spinner />

        } else if(request.pending === false && request.error != null) {
            return <Alert variant='error' children=''>{request.error}</Alert> 
            
        } else if(request.pending === false && request.success === true && posts.length !== 0) {
            return (
                <div className='single-post-body'>
                    <PageTitle>{posts.title}</PageTitle>
                    <div className='share-btn-section'>
                        <p>Author: {posts.author}</p>
                        <FacebookProvider appId='1039993433018202'>
                            <ShareButton href={`${BASE_URL}/${location.pathname}`} className='share-button'>
                                Share on Facebook
                            </ShareButton>
                        </FacebookProvider>
                    </div>
                    
                    <HtmlBox>{posts.content}</HtmlBox>
                    <div className='fb-comment-section'>
                        <FacebookProvider appId='1039993433018202'>
                            <Comments href={`${BASE_URL}/${location.pathname}`} />
                        </FacebookProvider>
                    </div>
                </div>
            );  

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
    loadSiglePost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props} />);