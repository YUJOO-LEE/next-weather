import Link from 'next/link';
import styles from './style.module.css';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getCurrentWeather = async () => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Seoul&aqi=no`);

  if (!result.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다');
  }

  return result.json();
};

export default async function Home() {
  const weather = await getCurrentWeather();
  console.log(weather);

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
