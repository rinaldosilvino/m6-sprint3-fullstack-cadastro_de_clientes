import { ButtonStyle } from "./styles";

const RcButton = (props) => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};

export default RcButton;
