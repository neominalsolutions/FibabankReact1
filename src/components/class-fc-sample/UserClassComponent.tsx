import { count } from "console";
import React, { Component } from "react";

// components props
type UserComponentProps = {
  username: string;
  password: string;
};

// local state magement
type UserComponentState = {
  count: number;
};

export class UserClassComponent extends Component<
  UserComponentProps,
  UserComponentState
> {
  // state undefined olarak tanımlandı
  // state!:UserComponentState;
  state: UserComponentState = {
    count: 0,
  };

  constructor(props: UserComponentProps) {
    super(props); // base methoduna component contructore props taşıyacak
    // this.setState({count:1}); // state değişkenini değiştirmek için setState method kullanabiliriz. init değeri 1 yapar.
  }

  componentDidMount(): void {
    console.log(
      "componentDidMount",
      "component init tetiklenir.constructor sonraki api call işlemlerini yaptığımız kısım"
    );
  }

  componentDidUpdate(
    prevProps: Readonly<UserComponentProps>,
    prevState: Readonly<UserComponentState>,
    snapshot?: any
  ): void {
    console.log(
      "componentDidUpdate",
      "component içerisindeki bir state değişiminde tetiklenir"
    );
  }

  componentWillUnmount(): void {
    console.log(
      "componentWillUnmount",
      "component domdan kaldırılırken tetiklenir."
    );
  }

  render(): React.ReactNode {
    return (
      <>
        {this.props.username}
        Counter: {this.state.count}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {" "}
          + Arttır{" "}
        </button>
      </>
    );
  }
}
