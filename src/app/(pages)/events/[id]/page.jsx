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
  const [totalExpense, setTotalExpense] = useState(0)
  const [isCode, setIsCode] = useState('')
  const [isCodeModalVisible, setIsCodeModalVisible] = useState(false) // Состояние

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events') || '[]')

    const event = events.find((event) => event.id === id)
    if (event) {
      setEventData(event)
      setExpenses(event.expenses || [])
      setTotalExpense(
        event.expenses
          ? event.expenses.reduce((total, expense) => total + expense.amount, 0)
          : 0
      )
    }
  }, [id])

  const openModal = () => {
    // Проверяем, является ли необходимо отображать модальное окно для ввода кода
    if (eventData.accessCode && !isCode) {
      setIsCodeModalVisible(true)
    } else {
      setModalVisible(true)
    }
  }

  const closeModal = () => {
    setModalVisible(false)
  }
  const closeCodeModal = () => {
    setIsCodeModalVisible(false)
  }

  const handleCodeChange = (e) => {
    setIsCode(e.target.value)
  }

  const handleCodeConfirmation = () => {
    if (isCode === eventData.accessCode) {
      setIsCode('')
      setIsCodeModalVisible(false)
      setModalVisible(true)
    } else {
      alert('Неверный код!')
    }
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
    setTotalExpense(totalExpense + expenseAmount)

    const events = JSON.parse(localStorage.getItem('events') || '[]')
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, expenses: [...(event.expenses || []), newExpense] }
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
            <div>
              <ul>
                <li>Дата: {eventData.date}</li>
                <li>Время: {eventData.time}</li>
                <li>Место: {eventData.location}</li>
              </ul>
              <ul>
                <li>Дресскод: {eventData.dressCode}</li>
                <li>Тип Мероприятия: {eventData.eventType}</li>
                <li>Контакты: {eventData.contact}</li>
              </ul>
            </div>
            <span>
              {' '}
              Сумма всех счетов: {totalExpense}
              <button className={styles.button} onClick={openModal}>
                Отчет
              </button>
            </span>
          </div>
        </section>
      </div>

      {isCodeModalVisible && (
        <div className={styles.modal_access}>
          <div className={styles.modal_access_content}>
            <span className={styles.close} onClick={closeCodeModal}>
              &times;
            </span>
            <h2>Подтверждение кода</h2>
            <input
              type="text"
              value={isCode}
              onChange={handleCodeChange}
              placeholder="Введите код"
            />
            <button onClick={handleCodeConfirmation}>Подтвердить</button>
          </div>
        </div>
      )}

      {eventData.accessCode === isCode && modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2>Добавить расход</h2>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                addExpense()
              }}
            >
              <label className={styles.label_modal}>
                <input
                  type="text"
                  value={expenseName}
                  onChange={handleExpenseNameChange}
                  placeholder="Название"
                />
              </label>
              <label>
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={handleExpenseAmountChange}
                  placeholder="Сумма"
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
