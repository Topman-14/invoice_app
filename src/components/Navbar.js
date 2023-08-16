import React from 'react'
import styles from './styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
            <img src='/logo.svg' className='logo'/>
            <div className={styles.innerSidebar}></div>
        </div>
        <div>
            <img src="/images/icon-moon.svg" alt="" style={{margin:'32px auto'}}/>
            <hr style={{border:'1.3px solid #494e6e'}}/>
            <Link href={'https://github.com/Topman-14'}>
                <img src="/images/me.png" alt="" style={{margin:'24px auto', borderRadius:'50%', width:'32px'}}/>
            </Link>
        </div>
    </aside>
  )
}
