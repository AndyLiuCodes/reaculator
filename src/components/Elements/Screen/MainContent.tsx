type MainContentProp = {
  content: string;
  customStyle?: object;
};

const DEFAULT_STYLE = {
  display: "inline-flex",
  alignItems: "center",
};

function MainContent({ content, customStyle }: MainContentProp) {
  return <div style={{ ...DEFAULT_STYLE, ...customStyle }}>{content}</div>;
}

export default MainContent;
