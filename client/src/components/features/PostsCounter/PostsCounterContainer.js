import { countPosts } from '../../../redux/postsRedux';

export const mapStateToProps = state => ({
    postsCount: countPosts(state),
});