import { Button, Card, CardContent, CircularProgress, Grid } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { object, number, string, boolean} from "yup"

import React, { useState } from 'react'



function AddPlayer() {
  const [open, setOpen] = useState(false);
    const handleClose = () => {
   setOpen(false);
      };
  return (
    <Grid container pt={5} pl={5}>
    <Card>
      <CardContent>
        <Formik initialValues={{
          name:'',
          nation:'',
          club:'',
          cost:0,
          clip:'',
          description:'',
          img:'',
          top:false

        }} 
        validationSchema={object({
          name: string().required('Name is required').min(2, 'Name needs to be at lease 2 characters').max(10, 'Name can not be bigger than 10 characters'),
          nation: string().required('Nation is required').min(2, 'Nation needs to be at lease 2 characters').max(50, 'Nation can not be bigger than 50 characters'),
          club: string().required('Club is required').min(2, 'Club needs to be at lease 2 characters').max(50, 'Club can not be bigger than 50 characters'),
          cost: number().required('Cost is required'),
          description: string().required('Description is required').min(10, 'Description needs to be at lease 10 characters'),
          clip: string().required('Clip is required').min(10, 'Clip needs to be at lease 10 characters'),
          img: string().required('Image is required').min(10, 'Image needs to be at lease 10 characters'),

        })}
        onSubmit={async (values) => {
          fetch(`https://635fe664ca0fe3c21aa783b3.mockapi.io/players`, {  method: 'POST',
          body: JSON.stringify(values),  headers: {
          'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
          }).then(response =>{
            if(!response.ok){
                throw new Error(`HTTP Status: ${response.status}`)
            }
            return response.json()
          })            
          .then(data => setOpen(true))
          .catch(error => console.log(error.message));
      
        }}>
          {({values,errors,isSubmitting})=>(
            <Form autoComplete="off">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Field fullWidth name="name" component={TextField} label="Full Name"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="club" component={TextField} label="Club"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="nation" component={TextField} label="Nation"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="img" component={TextField} label="URL of image"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="cost" component={TextField} type="number" label="Market value"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="clip" component={TextField} label="Intro video"/>
                </Grid>
                <Grid item>
                  <Field fullWidth name="description" component={TextField} label="Information"/>
                </Grid>
                <Grid item>
                  <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" startIcon={isSubmitting ? <CircularProgress size="0.9rem"/> : undefined}>{isSubmitting ? 'Submitting' : 'Submit'}</Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default AddPlayer
