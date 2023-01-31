import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton"; // default keyword ile gelen import
import { MyLabel, MyLabelItem } from "./components/MyLabel";

// aşağıdaki kullanım namespace çakışması olmasın diye kendi verdiğimiz isimlendirme
import MyButton2 from "./components/MyButton"; // as keyword alias
import * as MyLabel3 from "./components/MyLabel"; // lodash ve moment kütüphanelerinde görebiliriz

import * as MyButton4 from "./components/MyButton";
// içindeki tüm dosyalara erşiebildiğinden . ile alt export dosyasına erişiriz. dosya referansı

// default keyword kullanılmayan import

// default isim ile tanımlanmış olan dosyalar direk bizim component ismimiz ile çağrılır
// Ctrl + J
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* oop ile class instance alma yöntemi */}
        {/* props değerleri ile component özelleştirilir. props değerlerini uygulama çalışma zamanından önce verdiğimiz default değerler. */}
        {/* propslar sabit stateless değerlerimizdir. */}
        <MyButton title="button 1" />
        <MyButton title="button 2" color="red" />
        <MyLabel text="label" />
        <MyLabel text="label 2" />
        <MyLabelItem />
        <MyButton2 title="sdsad" />
        <MyLabel3.MyLabel text="dsds" />
        <MyButton4.default title="deneme1" />
      </header>
    </div>
  );
}

export default App;
