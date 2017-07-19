import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
  render() {
    return (
      <ul className='article-list'>
        {this.props.data.map((list, index) =>
         <Article
          key={index}
          articleName={list.articleName}
          amount={list.amount}
          category={list.category}
          description={list.description}
          price={list.price}
          total={list.amount * list.price}/>
        )}
      </ul>
    );
  }
}

export default ArticleList;
