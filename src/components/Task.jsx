import React, { useState } from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import Form from './Form'
import List from './List'
import Edit from './Edit';

function Task() {
    const [products ,setProducts]= useState([]) ;
    const [productId, setproductId] = useState(0);

    const [editName, seteditName] = useState('');
    const [editColor, seteditColor] = useState('');
    const [editPrice, seteditPrice] = useState(0)
    const [editId, seteditId] = useState(0)
  

    const addProduct = (element)=>
    {
        products.push(element)
        setProducts([...products]) ;
    }
    const removeProduct = (id) => {
        let filteredProducts = products.filter(q => q.id !== id);
        setProducts(filteredProducts)
    }
    const editProduct = (e) => {
        seteditName(e.name);
        seteditColor(e.color)
        seteditPrice(e.price)
        seteditId(e.id)
     
    }
    const save = () => {
        let product = products.find(q => q.id == editId);

        product.name = editName;
        product.price = editPrice;
        product.color=editColor;
        product.id=editId

        setProducts([...products])
    }

  return (
    <>
     <Container>
            <Row>
                <h1>Products</h1>
      
            </Row>
            <Row>
                <Col xs={6}>
                    <List products = {products} removeProduct={removeProduct} editProduct={editProduct} />

                </Col>
                <Col xs={6}>
                    <Form Function = {addProduct} />
                </Col>

                 <Col xs={6}>
                       <Edit save={save}/>
                </Col>

            </Row>

     </Container>

      </>

   
  )
}

export default Task
