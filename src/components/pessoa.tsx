type Props = {
  data: {
    name: string;
    age: number;
  };
};

export const Pessoa = ({ data }: Props) => {
  return (
    <>
      <ul>
        <li>
          {data.name} - {data.age} anos.
        </li>
      </ul>
    </>
  );
};
