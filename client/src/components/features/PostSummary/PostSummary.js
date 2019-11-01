import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from './cuttingTextFunction';

import './PostSummary.scss';

const PostSummary = ({ id, title, content }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 150)}</HtmlBox>
        <Button variant='primary'>
            <Link to={`/posts/${id}`}>Read more</Link>
        </Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};

export default PostSummary;