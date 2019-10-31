import { countPosts } from '../../../redux/postsRedux';
import { connect } from 'react-redux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    postsCount: countPosts(state),
});



export default connect(mapStateToProps, null)(PostsCounter);