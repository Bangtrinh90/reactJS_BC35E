import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id: 1,
        name:'product-1',
        price: 500,
        image: 'https://i.pravatar.cc'
    }


    tong2So = (a,b) => {
        return a + b;
    }

    renderProduct = () => {
        return <div className='card'>
            <img src={this.product.image}/>
            <div className='card-body'>
                <h4>{this.product.image}</h4>
                <p>{this.product.name}</p>
                <button className='btn btn-warning'>Add to cart</button>
            </div>

        </div>
    }
  render() {
    let title = "Cybersoft";

    return (
      <div className='container'>
        <h3>Title: {title}</h3>
        <h3>Tổng: {this.tong2So(5,10)}</h3>
        <div className='w-25'>{this.renderProduct()}</div>
      </div>
    )
  }
}

