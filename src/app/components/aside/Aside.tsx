import styles from './Aside.module.scss'
import Link from 'next/link'

type AsideProps = {
  onClose: () => void // Функция для закрытия бокового меню
}
export default function Aside({ onClose }: AsideProps) {
  return (
    <aside className={styles.aside}>
      <Link onClick={onClose} href={'/'}>
        Главная
      </Link>
      <Link onClick={onClose} href={'/events'}>
        Мероприятия
      </Link>

      <Link onClick={onClose} href={'/about-us'}>
        О нас
      </Link>
      <button onClick={onClose}>Закрыть</button>
    </aside>
  )
}
