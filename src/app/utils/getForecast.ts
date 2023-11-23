import { Response } from '@/app/types/forecast';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type Props = {
  location: string;
};

export const getForecast = async (props: Props): Promise<Response> => {
  const { location } = props;
  const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no
`);

  if (!result.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다');
  }

  return result.json();
};