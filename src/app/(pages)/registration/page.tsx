'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './registration.module.scss'
import closeLockImage from '@/app/assets/images/close-lock-image.png'
import Image from 'next/image'
import Link from 'next/link'

interface FormData {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}

export default function RegistrationPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'http://eventmaster-production.up.railway.app/api/register/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        console.log('Регистрация прошла успешно!')
      } else {
        console.error('Ошибка при регистрации:', response.status)
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error)
    }
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero_section}>
          <div className={styles.hero_section_left}>
            <h1>РЕГИСТРАЦИЯ</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Имя"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="lastName">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Фамилия"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="phoneNumber">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Номер телефона"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Электронная почта"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                />
              </label>
              <button type="submit">РЕГИСТРАЦИЯ</button>
              <Link href={'/login'}>У вас уже есть аккаунт?</Link>
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
