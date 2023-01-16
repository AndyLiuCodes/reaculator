type SubContentProp = {
  content: string;
  customStyle?: object;
};

const DEFAULT_STYLE = {
  color: "grey",
};

function SubContent({ content, customStyle }: SubContentProp) {
  return <div style={{ ...DEFAULT_STYLE, ...customStyle }}>{content}</div>;
}

export default SubContent;
