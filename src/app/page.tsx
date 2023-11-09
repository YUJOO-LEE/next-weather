import Link from 'next/link';
import styles from './style.module.css';

export default function Home() {
  return (
    <div>
      <h1 className="header">Home</h1>
      <ul className={styles.list}>
        <li><Link href="/seoul">Seoul</Link></li>
        <li><Link href="/new-york">New York</Link></li>
        <li><Link href="/london">London</Link></li>
      </ul>
    </div>
  )
}
