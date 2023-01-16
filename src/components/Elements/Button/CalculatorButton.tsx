type CalculatorButtonProps = {
  content: string;
  onBtnClick?: () => void;
  customStyle?: object;
};

const DEFAULT_STYLE: object = {
  backgroundColor: "#D76F30",
  color: "white",
  borderRadius: "5px",
  border: "none",
  fontSize: "18px",
};

function CalculatorButton({
  content,
  onBtnClick,
  customStyle,
}: CalculatorButtonProps) {
  const buttonStyle = customStyle
    ? { ...DEFAULT_STYLE, ...customStyle }
    : DEFAULT_STYLE;

  return (
    <>
      <button style={buttonStyle} onClick={onBtnClick}>
        {content}
      </button>
    </>
  );
}

export default CalculatorButton;
