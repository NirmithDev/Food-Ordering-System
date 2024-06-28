import React from 'react'
import CartItem from './CartItem'
import { Box, Divider, Modal, Grid, TextField } from '@mui/material'
import AddressSection from './AddressSection'
import { Button, Card } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Formik,Form } from 'formik';
import * as Yup from "yup"

const style={
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  width:400,
  bgcolor:'background.paper',
  outline:'none',
  boxShadow:24,
  p:4
}

const initialValues={
  streetAddress:"",
  state:"",
  postalCode:"",
  city:""
}

/*const validationSchema=Yup.object.shape({
  streetAddress:Yup.string().required("Street address is required"),
  state:Yup.string().required("State is required"),
  postalCode:Yup.string().required("Street postalCode is required"),
  city:Yup.string().required("City is required")
})*/

const CartItems=[1,1]

const Cart = () => {
  const createOrderUsingSelectedAddress = () =>{
    
  }
  const openHandleAddressModel = () =>{
    setOpen(true);
  }

  const [open, setOpen] = React.useState(false);
  /*const handleOpen = () => {
    setOpen(true);
  };*/
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values) =>{
    console.log("form value ",values)
  }

  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {CartItems.map((item)=>(<CartItem/>))}
          <Divider></Divider>
          <div className='billDretails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>$400</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Delivery Fee</p>
                <p>$40</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Tax</p>
                <p>$4</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Fees</p>
                <p>$0</p>
              </div>
              <Divider></Divider>
              <div className='flex justify-between text-gray-400'>
                <p>Total Pay</p>
                <p>$444</p>
              </div>
            </div>
          </div>
        </section>
        
        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {[1,1,1].map((item)=>(<AddressSection item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon/>
                <div className='space-y-3 text-gray-500'>
                    <h1 className='font-semibold text-lb text-white'>Add New Address</h1>
                    <Button variant="outlined" fullWidth onClick={()=>openHandleAddressModel()}>Add</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} /*validationSchema={validationSchema}*/ onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined" /*error={!ErrorMessage("streetAddress")} helperText={<ErrorMessage>{(msg)=><span className='text-red-600'>{msg}</span>}</ErrorMessage>}*/></Field>
                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField} name="City" label="City" fullWidth variant="outlined" /*error={!ErrorMessage("streetAddress")} helperText={<ErrorMessage>{(msg)=><span className='text-red-600'>{msg}</span>}</ErrorMessage>}*/></Field>
                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField} name="PostalCode" label="Postal Code" fullWidth variant="outlined" /*error={!ErrorMessage("streetAddress")} helperText={<ErrorMessage>{(msg)=><span className='text-red-600'>{msg}</span>}</ErrorMessage>}*/></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="state" label="Province" fullWidth variant="outlined" /*error={!ErrorMessage("streetAddress")} helperText={<ErrorMessage>{(msg)=><span className='text-red-600'>{msg}</span>}</ErrorMessage>}*/></Field>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type='submit' color="primary">Delivery Here</Button>
                </Grid>
              </Grid>
            </Form>
            
          </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default Cart
