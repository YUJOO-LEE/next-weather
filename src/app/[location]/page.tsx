import { HomeButton } from '@/app/[location]/components/HomeButton';
import { getForecast } from '@/app/utils/getForecast';
import styles from './style.module.css';

type Props = {
  params: {
    location: string;
  };
}

export default async function Detail(props: Props) {
  const { params } = props;

  const weather = await getForecast({ location: params.location });

  return (
    <div>
      <h1 className="header">{params.location}</h1>
      <div className={styles.header}>
        <HomeButton />
      </div>
      <ul className={styles.list}>
        {weather.forecast.forecastday.map((day) => (
          <li key={day.date_epoch}>
            <h2>
              {day.date}
            </h2>
            <p>
              평균 기온 {day.day.avgtemp_c}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}