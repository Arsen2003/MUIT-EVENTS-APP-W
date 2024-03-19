'use client'
import styles from './EventItem.module.scss'
import Image from 'next/image'
import PointImage from '@/app/assets/icons/point-image.png'
import ClockImage from '@/app/assets/icons/clock-image.png'
import CalendarImage from '@/app/assets/icons/calendar-image.png'
import Link from 'next/link'
import slugify from 'slugify'

type EventPropsType = {
  title: string
  text: string
  date: string | null
  time: string | null
  location: string
  id: string
}

export default function EventItem({
  title,
  text,
  date,
  time,
  location,
  id,
}: EventPropsType) {
  
  console.log(id, text)
  return (
    <div className={styles.item}>
      <span>{title}</span>
      <p>{text}</p>
      <div className={styles.item_footer}>
        <div>
          <span>
            <Image
              width={23}
              height={23}
              alt="calendar-image"
              src={CalendarImage}
            />
            {date ? date : 'No date available'}
          </span>
          <span>
            <Image width={23} height={23} alt="clock-image" src={ClockImage} />
            {time ? time : 'No time available'}
          </span>
          <span>
            <Image width={23} height={23} alt="point-image" src={PointImage} />
            {location}
          </span>
        </div>
        <Link className={styles.item_link} href={`/events/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  )
}
