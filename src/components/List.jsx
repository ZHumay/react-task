import React from 'react'
import { Table} from 'reactstrap'
import Edit from './Edit'

function List(props) {
    let{removeProduct,products,editProduct}=props

  return (
    <>

    <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Price</th>
        <th>Id</th>
      </tr>
    </thead>
    <tbody>
      
      {products.map( e => <tr> 
        <td >{e.name}  </td>
        <td >{e.color} </td>
        <td >{e.price} </td>
        <td> {e.id} </td>


        <button onClick={() => editProduct(e)} style={{width:50,backgroundColor:"green"}}> Edit</button>
        <button onClick={() => removeProduct(e.id)} style={{width:100,backgroundColor:"red"}}> Delete(byId)</button>
      </tr>
      )}
    </tbody>
  </Table>


  </>
  )


}

export default List