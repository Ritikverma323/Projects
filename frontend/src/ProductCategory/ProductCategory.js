import React, { Component } from 'react'
import axios from 'axios'
 class ProductCategory extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             productCategory:[]              
         }
         this.listOfProductCategory=this.listOfProductCategory.bind(this);
     }

     componentDidMount(){
        axios
        .get("http://localhost:5000/product-category")
        .then((product) => {
          this.setState({
              productCategory:[product.data]
          })
          console.log(product.data);
        })
        .catch((error) => {
          console.log(error);
        });
     }
     
   listOfProductCategory=()=>{
     const allCategory=  this.state.productCategory
     
    console.log(this.state.productCategory);

    const parentCategory =allCategory.filter((categories)=>{
        return categories.parent == null;

    })  

    
    return parentCategory.map((category)=>{
        return (<li key={category._id}>{category.category}</li>)
        });

   }
    render() {
        return (
            <div>
                {this.listOfProductCategory()}
            </div>
        )
    }
}

export default ProductCategory
