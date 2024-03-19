'use client'

import { useState, useEffect } from 'react'
import styles from './event.module.scss'
import { useParams } from 'next/navigation'

export default function EventPage() {
  const { id } = useParams()

  const [eventData, setEventData] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState(0)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]')

    const event = events.find((event) => event.id === id)
    if (event) {
      setEventData(event)
      setExpenses(event.expenses || []) // Устанавливаем расходы из localStorage или пустой массив, если они отсутствуют
    }
  }, [id])

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value)
  }

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(parseInt(e.target.value))
  }

  const addExpense = () => {
    const newExpense = { name: expenseName, amount: expenseAmount }
    setExpenses([...expenses, newExpense])
    // Обновляем localStorage
    const events = JSON.parse(localStorage.getItem('events') || '[]')
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, expenses: [...(event.expenses || []), newExpense] } // Добавляем новый расход к существующим расходам
      }
      return event
    })
    localStorage.setItem('events', JSON.stringify(updatedEvents))
  }

  if (!eventData) {
    return <main>Loading...</main>
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero_section}>
          <h1>{eventData.title}</h1>
          <p>{eventData.description}</p>
          <div className={styles.hero_section_footer}>
            <ul>
              <li>Дата: {eventData.date}</li>
              <li>Время: {eventData.time}</li>
              <li>Место: {eventData.location}</li>
            </ul>
            <ul>
              <li>Дресскод: {eventData.dressCode}</li>
              <li>Тип Мероприятия: {eventData.eventType}</li>
              <li>Конакты: {eventData.contact}</li>
            </ul>
          </div>
          <button className={styles.button} onClick={openModal}>
            Отчет
          </button>
        </section>
      </div>

      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2>Добавить расход</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                addExpense()
              }}
            >
              <label>
                <input
                  type="text"
                  value={expenseName}
                  onChange={handleExpenseNameChange}
                />
              </label>
              <label>
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={handleExpenseAmountChange}
                />
              </label>
              <button type="submit">Добавить</button>
            </form>

            <ul>
              {expenses.map((expense, index) => (
                <li key={index}>
                  <span>{expense.name} </span> {expense.amount}{' '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  )
}
