import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>

  <Link to="/" className={styles.navbarLink}>
    Home</Link>

  <Link to="/puppy" className={styles.navbarLink}>
    Puppy</Link>

  <Link to="/search" className={styles.navbarLink}>
    Search</Link>
    
    </div>
  )
}

export default Navbar