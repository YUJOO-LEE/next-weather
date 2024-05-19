import { getCurrentWeather } from '@/app/utils/getCurrentWeather';
import Link from 'next/link';
import styles from './style.module.css';

export default async function Home() {
  const weather = await getCurrentWeather({ location: 'seoul' });

  return (
    <div>
      <h1 className="header">Home</h1>
      <ul className={styles.list}>
        <li><Link href="/seoul">Seoul <span>{weather.current.condition.text}</span></Link></li>
        <li><Link href="/new-york">New York</Link></li>
        <li><Link href="/london">London</Link></li>
      </ul>
    </div>
  )
}
