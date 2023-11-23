import { Response } from '@/app/types/currentWeather';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type Props = {
  location: string;
};

export const getCurrentWeather = async (props: Props): Promise<Response> => {
  const { location } = props;
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`);

  if (!result.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다');
  }

  return result.json();
};