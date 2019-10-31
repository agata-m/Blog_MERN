import { countPosts } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

export const mapStateToProps = props => ({
    postsCount: countPosts(props),
});