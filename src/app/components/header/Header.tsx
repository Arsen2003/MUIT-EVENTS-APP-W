'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'
import logoImage from '@/app/assets/images/logo.png'
import Aside from '../aside/Aside'
export default function Header() {
  const [asideOpen, setAsideOpen] = useState(false) // Состояние для открытия/
  const toggleAside = () => {
    setAsideOpen(!asideOpen)
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <Link href={'/'} className={styles.logo}>
            <Image src={logoImage} alt="logo-image" width={96} height={75} />
            <span>
              Международный
              <br /> Университет <br />
              Инновационых <br />
              Технологий
              <br /> ИЭМ
            </span>
          </Link>
          <nav className={styles.header_nav}>
            <Link href={'/'}>Главная</Link>
            <Link href={'/events'}>Мероприятия</Link>
            <Link href={'/about-us'}>О нас</Link>
          </nav>
          <div className={styles.header_control}>
            <button className={styles.burger_menu} onClick={toggleAside}>
              Меню
            </button>
            <Link href={'/create-event'} className={styles.login__button}>
              Создать мероприятие
            </Link>
          </div>
        </div>
      </div>
      {asideOpen && <Aside onClose={toggleAside} />}
    </header>
  )
}
