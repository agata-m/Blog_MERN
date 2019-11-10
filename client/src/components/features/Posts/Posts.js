import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPostsByPage, initialPage, postsPerPage } = this.props;
        loadPostsByPage(initialPage, postsPerPage);
    }

    loadPostsPage = (page) => {
        const { loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(page, postsPerPage);
    }

    render() {
        const { posts, request, pages, presentPage } = this.props;
        const { loadPostsPage } = this;
        let { pagination } = this.props;

        if(pagination === undefined) {
            pagination = true
        }

        if(request.pending === false && request.error !== null && posts.length > 0) {
            return <Alert variant='error' children={''}>Error: {request.error}</Alert>
        } else if(request.pending === false && request.success === true && posts.length > 0) {
            return (
            <div>
                <PostsList posts={posts} />
                { pagination && <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage}/> }
            </div>
            )
        } else if(request.pending === true || request.success === null) {
            return <Spinner />
        } else if(request.pending === false && request.success === true && posts.length === 0) {
            return <Alert variant='info' children={''}>No posts</Alert>
        };
    }
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
    loadPostsByPage: PropTypes.func.isRequired,
};

Posts.defaultProps = {
    initialPage: 1,
    postsPerPage: 2,
    pagination: true
};

export default withRouter(props => <Posts {...props} />);