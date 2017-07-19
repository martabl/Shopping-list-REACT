import React, { Component } from 'react';
import Article from './Article';

function handleClick() {

}
class TotalList extends Component {
  render() {
    return (
      <div className="TotalList">
        <ArticleTotal>
          <button onClick={this.handleClick} type="button" name="button"></button>

      </ArticleTotal>
      </div>
    );
  }
}

export default TotalList;
