import React, { Component } from 'react';
import ArticleList from './ArticleList';

const listData = [

  {
    articleName: "Donuts",
    amount: 4,
    category: "Bakery" ,
    description:'',
    price: 1.99
  },
  {
    articleName: "Chips",
    amount: 1,
    category: 'Salty',
    description: 'ham-chips',
    price: 1.35
  },
  {
    articleName: "oranges",
    amount: 2,
    category: 'Fruits',
    description: 'Fruits',
    price: 1.73
  },
  {
    articleName: "Carrots",
    amount: 3,
    category: 'Vegetables',
    description:'',
    price: 0.70
  }
];

class App extends Component {
  render() {
    return (
    <div>
      <ArticleList
      data={listData}
      />
    </div>
    );
  }
}

export default App;
