import React, { Component } from 'react'

 class ProductCategory extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
         }
     }
     
    render() {
        return (
            <div>
                {console.log("check path",this.props)}
               {this.props.match.params.id} 
                products from category 
            </div>
        )
    }
}

export default ProductCategory
