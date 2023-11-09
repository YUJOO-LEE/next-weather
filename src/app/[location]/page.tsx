import { HomeButton } from '@/app/[location]/components/HomeButton';

type Props = {
  params: {
    location: string;
  };
}

export default function Detail(props: Props) {
  const { params } = props;

  return (
    <div>
      <h1 className="header">{params.location}</h1>
      <HomeButton />
    </div>
  );
}