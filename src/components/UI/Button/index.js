import * as S from "./styles";

const Button = (props) => {
  return <S.Button onClick={props.onClick}>{props.children}</S.Button>;
};

export default Button;
