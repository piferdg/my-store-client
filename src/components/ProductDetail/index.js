import React, { Component } from 'react'

class ProductDetail extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    //fetch data for ONE product
  }

  render () {
    return (
      <h2>Hello from Product Detail</h2>
    )
  }
}

export default ProductDetail