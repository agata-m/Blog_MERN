import { connect } from 'react-redux';
import { getSinglePost, loadPostsRequest, getRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    posts: getSinglePost(state),
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    loadPost: (id) => dispatch(loadPostsRequest(id)),
    resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);