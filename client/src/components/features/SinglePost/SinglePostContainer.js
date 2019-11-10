import { connect } from 'react-redux';
import { getSinglePost, loadSinglePostRequest, getRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    request: getRequest(state),
    posts: getSinglePost(state),
})

const mapDispatchToProps = dispatch => ({
    resetRequest: () => dispatch(resetRequest()),
    loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);