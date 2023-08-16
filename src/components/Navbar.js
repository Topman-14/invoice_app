import React, { useState } from 'react'
import styles from './styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({toggleDarkMode, darkMode}) {
  const [toggleImg, setToggleImg] = useState("/images/icon-moon.svg")
  const handleToggle = () =>{
    setToggleImg((prevImg)=> prevImg == "/images/icon-sun.svg" ? "/images/icon-moon.svg" : "/images/icon-sun.svg" )
    toggleDarkMode()
  }
  return (
    <aside className={styles.sidebar} style={darkMode? {background:"rgb(30, 33, 57)"} : {background:"rgb(55, 59, 83)"}}>
        <div className={styles.sidebarTop}>
            <img src='/logo.svg' className='logo'/>
            <div className={styles.innerSidebar}></div>
        </div>
        <div>
            <img onClick={handleToggle} src={toggleImg} alt="" style={{margin:'32px auto'}} className='cursor-pointer'/>
            <hr style={{border:'1.3px solid #494e6e'}}/>
            <Link href={'https://github.com/Topman-14'}>
                <img src="/images/me.png" alt="" style={{margin:'24px auto', borderRadius:'50%', width:'32px'}} className='cursor-pointer'/>
            </Link>
        </div>
    </aside>
  )
}
