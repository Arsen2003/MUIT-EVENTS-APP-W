import styles from './Footer.module.scss'
import logoImage from '@/app/assets/images/logo-max.png'
import Link from 'next/link'
import Image from 'next/image'
import instagramIcon from '@/app/assets/icons/instagram-icon.png'
import whatsappIcon from '@/app/assets/icons/whatsapp-icon.png'
import facebookIcon from '@/app/assets/icons/facebook-icon.png'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_content}>
          <Link href={'/'} className={styles.logo}>
            <Image src={logoImage} alt="logo-image" width={198} height={154} />
            <span>
              Международный
              <br /> Университет <br />
              Инновационых <br />
              Технологий
              <br /> ИЭМ
            </span>
          </Link>
          <nav className={styles.footer_nav}>
            <div>
              <span>Платформа</span>
              <Link href={'/'}>Главная</Link>
              <Link href={'/events'}>Мероприятия</Link>
              <Link href={'/about-us'}>О нас</Link>
            </div>
            <div>
              <span>Контакты</span>
              <a href="">+996 228 228 </a>
              <a href="">intuit@gmail.com</a>
              <div>
                <a href="">
                  <Image
                    src={instagramIcon}
                    alt="instagram-icon"
                    width={35}
                    height={35}
                  />
                </a>
                <a href="">
                  <Image
                    src={facebookIcon}
                    alt="facebook-icon"
                    width={35}
                    height={35}
                  />
                </a>

                <a href="">
                  <Image
                    src={whatsappIcon}
                    alt="whatsapp-icon"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
