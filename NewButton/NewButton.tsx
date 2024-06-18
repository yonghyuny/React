type NewButtonProps = {
  click: () => void;
};

const NewButton = ({ click }: NewButtonProps) => {
  return <button onClick={click}>뉴버튼</button>;
};

export default NewButton;
