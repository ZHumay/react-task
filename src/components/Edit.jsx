import React from 'react'
import { Form,FormGroup,Label,Input,Button,} from 'reactstrap'
import List from "./List"

function Edit(props) {
    let{save,seteditName,seteditColor,seteditPrice,seteditId,editColor,editName,editPrice,editId,}=props
  
  return (
    <>
    
    <Form inline style={{paddingTop:80}}>
        <FormGroup>
      <h1> Edit</h1>
          <Label for="exampleEmail" hidden>Name</Label>
          <Input type="text" value={editName} name="name" id="name" placeholder="Name"  onChange={(e) => seteditName(e.target.value,'name')}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Color</Label>
          <Input type="text" value={editColor} name="color" id="color" placeholder="Color" onChange={(e) => seteditColor(e.target.value,'color')}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Price</Label>
          <Input type="text" value={editPrice} name="price" id="price" placeholder="Price"onChange={(e) => seteditPrice(e.target.value,'price')} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Id</Label>
          <Input type="text" value={editId} name="id" id="id" placeholder="id"onChange={(e) => seteditId(e.target.value,'id')} />
        </FormGroup>
        <Button onClick={()=>props.save(save)} >Save</Button>
      </Form>

      </>
  )
}

export default Edit
