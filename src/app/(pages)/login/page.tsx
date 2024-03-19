'use client'

import styles from './login.module.scss'
import closeLockImage from '@/app/assets/images/close-lock-image.png'
import Image from 'next/image'
import Link from 'next/link'
export default function LoginPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero_section}>
          <div className={styles.hero_section_left}>
            <h1>ЛОГИН</h1>
            <form>
              <label htmlFor="">
                <input type="email" placeholder="Электронная почта" />
              </label>
              <label htmlFor="">
                <input type="password" placeholder="Пароль" />
              </label>
              <button>ЛОГИН</button>
              <Link href={'/registration'}>У вас нет аккаунта?</Link>
            </form>
          </div>
          <div className={styles.hero_section_right}>
            <Image src={closeLockImage} alt="close-lock-image" />
          </div>
        </section>
      </div>
    </main>
  )
}
