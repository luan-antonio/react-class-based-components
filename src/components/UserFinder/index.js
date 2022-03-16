import { Component, Fragment } from "react";
import UsersContext from "../../store/users-context";
import Users from "../Users";
import ErrorBoundary from "../ErrorBoundary";

import * as S from "./styles";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <S.InputHolder>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </S.InputHolder>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
