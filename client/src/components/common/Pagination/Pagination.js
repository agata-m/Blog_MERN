import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {
    state = {
        presentPage: this.props.initialPage || 1
    }

    changePage = (newPage) => {
        const { onPageChange } = this.props;
        this.setState({ presentPage: newPage });
        onPageChange(newPage);
    }

    previousPage = () => {
        if(this.state.presentPage > 1) {
            this.changePage(this.state.presentPage - 1);
        }
    }

    nextPage = () => {
        if(this.state.presentPage < this.props.pages) {
            this.changePage(this.state.presentPage + 1);
        }
    }

    render() {
        const { pages, onPageChange } = this.props;
        const { presentPage } = this.state;
        const { changePage } = this;

        return (
            <div className='pagination'>
                <ul className='pagination_list'>

                    { presentPage > 1 && (
                        <li
                            className={`pagination_list_item${(true) ? ' pagination_list_item--active' : ''}`}
                            onClick={this.previousPage}>
                            <b>&lt;</b>
                        </li>
                    )}

                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={++page}
                            onClick={() => { changePage(page) }}
                            className={`pagination_list_item${(page === presentPage) ? ' pagination_list_item--active' : ''}`}>
                            {page}
                        </li>
                    )}

                    { presentPage < pages && (
                        <li
                            className={`pagination_list_item${(true) ? ' pagination_list_item--active' : ''}`}
                            onClick={this.nextPage}>
                            <b>&gt;</b>
                        </li>
                    )}

                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func,
};

export default Pagination;