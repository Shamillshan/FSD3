import { TextField, Typography } from '@mui/material'
import React from 'react'

const Addstud = () => {
  return (
    <div>
        <Typography variant='h3'>Add Student</Typography> 
        <TextField variant='outlined' label="Name"></TextField> <br/> <br/>
        <TextField variant='outlined' label="Email"></TextField> <br/> <br/>
        <TextField variant='outlined' label="Place"></TextField> <br/> <br/>
        <TextField variant='outlined' label="Age"></TextField> <br/> <br/>
        <TextField variant='outlined' label="Gender"></TextField> <br/> <br/>
        <TextField variant='outlined' label="Password" type="password"/> 
    </div>
  )
}

export default Addstud