type Props = {
  text: String;
  clickFn: () => void;
};

export const Botao = ({ text, clickFn }: Props) => {
  return <button onClick={clickFn}>{text}</button>;
};
