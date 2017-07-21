import React, { Component } from 'react';
import Article from './Article';


class TotalList extends Component {

  constructor(props) {
     super(props);
     this.state = {};
  }
  handleClick() {
    let totalPrice = 0;
    for(let i = 0; i < this.props.data.length; i++) {
      totalPrice += (this.props.data[i].amount * this.props.data[i].price);
    }
    this.setState({ totalPrice: totalPrice});
  }
  render() {

    let totalPriceComponent;

    if (this.state.totalPrice) {
      totalPriceComponent = <div>{this.state.totalPrice}</div>;
    }

    return (
      <div className="TotalList">

        <button>
          <button onClick={this.handleClick.bind(this)} type="button" name="button"></button>
        </button>
        {totalPriceComponent}
      </div>
    );
  }
}

export default TotalList;
