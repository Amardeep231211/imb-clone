import { AppBar, InputBase, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { SearchOffOutlined } from '@mui/icons-material'
function Navbar() {
  return (
    <AppBar  position="static" >
        <Toolbar>
        <Typography>
            The Movies
        </Typography>
        <Link href={"/"} className='link'>Home</Link>
        <Link href={"/"} className='link'>Popular</Link>
        <Link href={"/"} className='link'>Top Rated</Link>
        <Link href={"/"} className='link'>Up Comming</Link>

        <InputBase  className='inputSearchfield' variant="outlined"
        
        />
        <Link href={"/"} className='link'>Login</Link>
        
        </Toolbar>       
    </AppBar>
  )
}

export default Navbar