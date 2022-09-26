import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
import {Box} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box className={styles.navbar}>

  <Link to="/" className={styles.navbarLink}>
    Login</Link>

  <Link to="/User" className={styles.navbarLink}>
    Restaurent</Link>

      
    </Box>
  )
}

export default Navbar