'use client'
import React, { useState, useEffect } from 'react'
import styles from './events.module.scss'
import EventItem from '@/app/components/eventItem/EventItem'

export default function EventsPage() {

  const [events, setEvents] = useState([])

  useEffect(() => {

    const eventDataFromStorage = JSON.parse(localStorage.getItem('events'))
    if (eventDataFromStorage) {
      setEvents(eventDataFromStorage)
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className="container ">
        <section className={styles.hero_section}>
          <h1>МЕРОПРИЯТИЯ </h1>
          <div className={styles.hero_section_items}>

            {events.map((event, index) => (
              <EventItem
                key={index}
                title={event.title}
                text={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                id={event.id}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
