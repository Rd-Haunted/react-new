import { Box, Container, styled, } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import assests from '../../assests'
const Headerwraperstyle = styled(Box)`
.MuiContainer-root {
    max-width: 1446px;
    margin: auto;
    padding: 0px 12px;
}
`
export default function Header() {
  return (
    <Headerwraperstyle>
        <Container>
        <Box className='header_outer'>
            <Box className='header_outer_inner_left'>
                <Link to='/'> 
                <figure>
                    <img src={assests.logo_image} alt="this is a image" />
                </figure>
                </Link>
            </Box>
            <Box className='header_outer_inner_right'>
                <Box className='header_outer_inner_right_top'>
                    
                </Box>
                <Box className='header_outer_inner_right_bottom'>

                </Box>
            </Box>
        </Box>
        </Container>
    </Headerwraperstyle>
  )
}
