import { count } from "console";
import React, { Component } from "react";

// components props
type UserComponentProps = {
  username?: string;
  password?: string;
};

// local state magement
type UserComponentState = {
  count: number;
  numeric?: number;
};

export class UserClassComponent extends Component<
  UserComponentProps,
  UserComponentState
> {
  // state undefined olarak tanımlandı
  // state!:UserComponentState;
  state: UserComponentState = {
    count: 0,
    numeric: 1,
  };

  constructor(props: UserComponentProps) {
    super(props); // base methoduna component contructore props taşıyacak
    // this.setState({count:1}); // state değişkenini değiştirmek için setState method kullanabiliriz. init değeri 1 yapar.

    this.Descrease = this.Descrease.bind(this); // object içerisindeki method refere edildi.
  }

  // class component life-cycle hook.

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

    // state takip mekanizması zor her işlem her biri farklı bir işle alakalı kısımdan takip ediliyor.
    if (prevState.count > 5) {
      alert("değer 5 ten büyük olamaz");
      this.setState({ count: 5 });
    }

    // bu kısma giren bir durum varsa tekrar tekrar render alınır.
    console.log("prevProps", prevProps, "prevState", prevState);
  }

  componentWillUnmount(): void {
    console.log(
      "componentWillUnmount",
      "component domdan kaldırılırken veya componentDidMount içindeki operasyonlar bittikten sonra (dispose işlemi)."
    );
  }

  Descrease() {
    this.setState({ count: this.state.count - 1 });
  }

  // function component de direct return ile render ediyorduk
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
        <button onClick={this.Descrease}> (-1) Azalt</button>
      </>
    );
  }
}
