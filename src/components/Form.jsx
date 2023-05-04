import React, { useState } from 'react'
import { Form,FormGroup,Label,Input,Button} from 'reactstrap'


function Formm(props) {
    const [elementToAdd, setElementToAdd] = useState({}) ;
    const addproperty =(value,propertyName)=>
    {   
        const newState= {...elementToAdd ,[propertyName]: value  }
       
        setElementToAdd(newState)
         
    }

  return (
    <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Name</Label>
          <Input type="text" name="name" id="name" placeholder="Name" onChange={(e)=>addproperty(e.target.value,'name')}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Color</Label>
          <Input type="text" name="color" id="color" placeholder="Color"onChange={(e)=>addproperty(e.target.value,'color')} />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Price</Label>
          <Input type="text" name="price" id="price" placeholder="Price" onChange={(e)=>addproperty(e.target.value,'price')} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Id</Label>
          <Input type="text" name="id" id="id" placeholder="id" onChange={(e)=>addproperty(e.target.value,'id')} />
        </FormGroup>
        
        <Button onClick={()=>props.Function(elementToAdd)}>Submit</Button>
      </Form>
  )
}

export default Formm