import Link from 'next/link';
import style from './Header.module.css';

export default function Header() {

  return (
    <>
        <div className={style.top_header}>
            <Link href="/" className={style.title_header}>
                <a className={style.title_header}>
                    Ice Cream Shop
                </a>
            </Link>
            <div>
                <Link href="/products"><a className={style.header_link}>Products</a></Link>
                <Link href="/contact"><a  className={style.header_link}>Contact Us</a></Link>
                <Link href="/">
                    <a className={style.header_link}>
                        Home
                    </a>
                </Link>
            </div>
        </div>
        <style>
            .
        </style>
    </>
  )
}
