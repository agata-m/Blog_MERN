import { connect } from 'react-redux';
import { getSinglePost, loadSinglePostRequest, getRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    posts: getSinglePost(state),
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);