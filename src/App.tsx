import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/props-sample/MyButton"; // default keyword ile gelen import
import { MyLabel, MyLabelItem } from "./components/props-sample/MyLabel";

// aşağıdaki kullanım namespace çakışması olmasın diye kendi verdiğimiz isimlendirme
import MyButton2 from "./components/props-sample/MyButton"; // as keyword alias
import * as MyLabel3 from "./components/props-sample/MyLabel"; // lodash ve moment kütüphanelerinde görebiliriz

import * as MyButton4 from "./components/props-sample/MyButton";
import { UserClassComponent } from "./components/class-fc-sample/UserClassComponent";
// içindeki tüm dosyalara erşiebildiğinden . ile alt export dosyasına erişiriz. dosya referansı

// default keyword kullanılmayan import

// default isim ile tanımlanmış olan dosyalar direk bizim component ismimiz ile çağrılır
// Ctrl + J

type SwitchState = {
  IsOpen: boolean;
};

function App() {
  const [Switch, setSwitch] = useState<SwitchState>({ IsOpen: false }); // init value

  const [counter, setcounter] = useState<number>(0);

  // Her bir api call işlemini birbirinden izole yöntemek için birden fazla otomatik tetiklenir yapı olan useEffect kullanabilirim.

  // user profile fill
  // class component deki componentDidMount,componentDidUpdate,componentWillUnmount
  useEffect(() => {
    console.log("init with no deps");

    return () => {
      // clean up operations
      console.log("destroy clean up");
    };
  });
  // state ne olursa olsun her state değişiminde çalışır. peformansını olumsuz etkiler dikkatli kullanalım

  // user list dropdown fill
  useEffect(() => {
    console.log("init with counter state deps");

    return () => {
      console.log("switch state deps clean up");
    };
  }, [counter]); // counter state değişimi takip etsin
  // useEffect switch state takip etsin eğerli state bir değişiklik olursa bu kod değişimi yakalısın. [state1,state2,state3] bu şekilde kullanımda state1 yada state2 yada state3 değişiminde tetiklensin.

  // user table fill
  useEffect(() => {
    console.log("init empty array deps");

    return () => {
      console.log("clean up init empty deps");
    };
  }, []);
  // boş array dependency yöntemi tek sefere çalışacak kod.
  // OneCall UseEffect sadece 1 kereye mahsus component doma init olurken çalışır.
  // bir kereye mahsus bir veri çekilecek ise kullanılır.

  // function component içerisinde genelde arrow function
  const off = () => {
    setSwitch({ IsOpen: false });
    // bind yok this keyword yok.
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* oop ile class instance alma yöntemi */}
        {/* props değerleri ile component özelleştirilir. props değerlerini uygulama çalışma zamanından önce verdiğimiz default değerler. */}
        {/* propslar sabit stateless değerlerimizdir. */}
        {/* 1. örnek props kullanımı */}
        {/* <MyButton title="button 1" />
        <MyButton title="button 2" color="red" />
        <MyLabel text="label" />
        <MyLabel text="label 2" />
        <MyLabelItem />
        <MyButton2 title="sdsad" />
        <MyLabel3.MyLabel text="dsds" />
        <MyButton4.default title="deneme1" /> */}
        {/* useeffect usestate kullanımı */}
        <button onClick={() => setSwitch({ IsOpen: !Switch.IsOpen })}>
          Toggle Durum {Switch.IsOpen ? "açık" : "kapalı"}
        </button>
        <button onClick={off}> Off State </button>
        {Switch.IsOpen && <UserClassComponent />}
        <button onClick={() => setcounter(counter + 1)}>Set Counter</button>
      </header>
    </div>
  );
}

export default App;
