import { Component } from "react";
import * as S from "./styles";

class User extends Component{
  render(){
    return <S.User>{this.props.name}</S.User>;
  }
}

export default User;
