import styles from './home.module.scss'
import Image from 'next/image'
import womanImage from '@/app/assets/images/woman-image.png'
import assets1 from '@/app/assets/images/assets-about-1.png'
import assets2 from '@/app/assets/images/assets-about-2.png'
import assets3 from '@/app/assets/images/assets-about-3.png'
import EventItem from '@/app/components/eventItem/EventItem'
import Link from 'next/link'
export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero_section}>
        <div className="container">
          <div className={styles.hero_section_content}>
            <Image
              src={womanImage}
              alt="woman-image"
              width={460}
              height={690}
            />
            <h1>
              Откройте двери к бесконечным возможностям и вдохновению через наши
              мероприятия
            </h1>
            <div className={styles.circle}></div>
          </div>
        </div>
      </section>
      <section className={styles.assets_section}>
        <div className="container">
          <div className={styles.assets_section_content}>
            <div className={styles.assets_left}>
              <Image alt="assets1" src={assets1} />
            </div>
            <div className={styles.assets_right}>
              <Image alt="assets2" src={assets2} />
              <Image alt="assets2" src={assets3} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.events}>
        <div className="container">
          <div className={styles.events_content}>
            <h2 className={styles.events_content_title}>МЕРОПРИЯТИЯ</h2>
            <div className={styles.events_items}>
              <EventItem
                title="Нооруз"
                text="Приглашаем вас отметить праздник Навруз вместе с нами! Присоединяйтесь к нам в этот день, чтобы встретить весну, радость и обновление. Наши праздничные мероприятия будут наполнены уникальными традициями, веселыми играми и вкусной едой. Давайте вместе создадим яркие воспоминания и насладимся этим особым временем вместе!"
                date="21.03.2023"
                time="14:00"
                location="Supara"
                id=''
              />
              <EventItem
                title="Нооруз"
                text="Приглашаем вас отметить праздник Навруз вместе с нами! Присоединяйтесь к нам в этот день, чтобы встретить весну, радость и обновление. Наши праздничные мероприятия будут наполнены уникальными традициями, веселыми играми и вкусной едой. Давайте вместе создадим яркие воспоминания и насладимся этим особым временем вместе!"
                date="21.03.2023"
                time="14:00"
                location="Supara"
                id=''
              />
              <EventItem
                title="Выставка картин"
                text="Приглашаем вас на увлекательное искусство нашей выставки картин! Погрузитесь в мир красок, форм и вдохновения вместе с нами. Мы собрали для вас коллекцию уникальных произведений различных художников, которые поразят ваше воображение и оставят незабываемые впечатления. Присоединяйтесь к нам, чтобы насладиться красотой искусства и поделиться эмоциями в кругу единомышленников."
                date="21.03.2023"
                time="14:00"
                location="Supara"
                id=''
              />
            </div>
            <Link className={styles.events_link} href={'/'}>
              Больше{' '}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
