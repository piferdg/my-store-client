import React, { Component } from 'react'
import Card from '../Card'

class ProductDetail extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    //fetch data for ONE product
    const id = this.props.match.params.id

    fetch(`http://localhost:4000/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data.product
        })
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }

  render () {
    return (
      <div>
        <h2>Welcome to the Product Detail</h2>
        <Card>
          <h2>{this.state.product.name}!</h2>
          <img src={this.state.product.img_url} alt='product' />
          <h3>{this.state.product.description}</h3>
          <h3>Price: ${this.state.product.price / 100}</h3>
      </Card>  
    </div>
    )
  }
}

export default ProductDetail