'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // Импорт функции для генерации UUID
import styles from './create-event.module.scss'
import { redirect } from 'next/navigation'

export default function CreateEvent() {
  const [eventData, setEventData] = useState({
    id: '',
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    dressCode: '',
    eventType: '',
    contact: '',
    accessCode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = uuidv4()
    const updatedEventData = {
      ...eventData,
      id: newId,
    }
    const existingEvents = JSON.parse(localStorage.getItem('events') || '[]')
    const updatedEvents = [...existingEvents, updatedEventData]
    localStorage.setItem('events', JSON.stringify(updatedEvents))
  
    setEventData({
      id: '',
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      dressCode: '',
      eventType: '',
      contact: '',
      accessCode: '',
    })

    redirect('/events')
  }
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero_section}>
          <h1>Создайте свое мероприятие!</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.hero_section_content}>
              <div>
                <label>
                  <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                    placeholder="Название"
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    placeholder="Описание(Макс. 200 слов)"
                    required
                  />
                </label>
                <label>
                  <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    placeholder="Дата"
                    required
                  />
                </label>
                <label>
                  <input
                    type="time"
                    name="time"
                    value={eventData.time}
                    onChange={handleChange}
                    placeholder="Время"
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    placeholder="Место"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="text"
                    name="dressCode"
                    value={eventData.dressCode}
                    onChange={handleChange}
                    placeholder="Дресс-код"
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="eventType"
                    value={eventData.eventType}
                    onChange={handleChange}
                    placeholder="Тип мероприятия"
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="contact"
                    value={eventData.contact}
                    onChange={handleChange}
                    placeholder="Контактные данные"
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="accessCode"
                    value={eventData.accessCode}
                    onChange={handleChange}
                    placeholder="КОД ДОСТУПА"
                    required
                  />
                </label>
                <button type="submit">Создать</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
