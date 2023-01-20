import React from 'react'
import { Link, Typography } from '@mui/material'

function Footer(props){
    return (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          {...props}
          sx={{color: "#fff"}}
        >
          {"Copyright © "}
          <Link color="inherit" href="http://localhost:4000/">
            Homeservices
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
    )
}

export default Footer