import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Button variant='contained' color='error'>
                    <Link to={'/'}>Home</Link>
                    </Button>  &nbsp; &nbsp;
                <Button variant='contained' color='error'>
                    <Link to={'/Viewstud'}>View student</Link>
                    </Button> &nbsp; &nbsp;
                <Button variant='contained' color='error'>
                    <Link to={'/Addstud'}>Add student</Link>
                </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar