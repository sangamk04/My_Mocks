import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
import {Box} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box className={styles.navbar}>

  <Link to="/" className={styles.navbarLink}>
    Product</Link>

  <Link to="/ProductDetails" className={styles.navbarLink}>
  Product Details</Link>

  <Link to="/Cart" className={styles.navbarLink}>
 Cart</Link>

  <Link to="/Order" className={styles.navbarLink}>
  Order</Link>

      
    </Box>
  )
}

export default Navbar