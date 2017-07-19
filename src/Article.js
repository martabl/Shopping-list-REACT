import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  render() {
    return (
      <div className="Article">
      <ul>
        <li>
        <p>{this.props.articleName}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.category}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
        <p>{this.props.total}</p>
        </li>
      </ul>
      </div>
    );
  }
}

Article.propTypes= {
articleName: PropTypes.string.isRequired,
amount: PropTypes.number.isRequired,
category: PropTypes.string.isRequired,
description: PropTypes.string,
price: PropTypes.number.isRequired,
};

Article.defaultProps = {
  description: 'There is not description' 
};

export default Article;
