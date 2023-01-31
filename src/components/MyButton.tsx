type tamsayı = 10; // primative

// export edilen nesnelere dikkat edelim type ve interface ismi aynı tanımlanamaz
// type IUser {

// }

// state ile çalışırken yada apiden çekilen bir veriyi modellerken karmaşık iç içe nested bir model olacağı için interface tercih edilebilir.// Apidan gelen DTO tanımları
interface IUser {
  firstname: string;
  lastname: string;
}

// interfacler birbirinden extend olarak genişler.
interface IUser extends IBaseUser {
  password: string; // props
  getName(name?: string): void; // func
  numeric?: tamsayı; // interface içerisinde type tanımı yapabiliriz. type içerisinde interface tanımı yapamazsınız.
}

// diğer bir özellik 2 farklı interface başka dosylara ts dosyaları altından aynı isimde tanımlanıp birleştirilebilir.

interface IBaseUser {
  canHear: boolean; // required
}

type A = {
  name: string;
};

// intersects ile nesne genişletme mantığını kullanabiliriz.
type B = A & {
  isActive: boolean;
};

// class Type dan kalıtım almayalım
// implements keyword class'ın interface yada type üzerinden özellikleri kullanmaya zorlanmasıdır.
// ts de class class'tan kalırım alırken yada interface interface üzerinden kalıtım alırken extends keyword kullanılır.
class C implements B {
  name: string;
  isActive: boolean;

  constructor(name: string, isActive: boolean) {
    this.name = name;
    this.isActive = isActive;
  }
}

// C classından kalıtım alan D class
class D extends C {}

// interface primative tanım içermez.

// arrow function yöntemi
// props yöntemi constructor değer gönderme yöntemi (basit değer kompleks olmayan modeller için type kullanımı)

// component içerisine dışarıdan değer geçiyorsam yada basic form yapıları ile çalışırken type
type MyButtonProps = {
  title: string; // zorunlu
  color?: string | undefined; // opsiyonel (Type ve İnterface de Union Types kullanılabilir)
};
// object types tanımı

// arrow + default keyword var function component tanımı
const MyButton = ({ title, color }: MyButtonProps) => {
  // class ihtiyacı olmadan interface üzerinden literal formtta instance üretebiliyoruz.
  const user: IUser = {
    password: "243324",
    firstname: "ssad",
    lastname: "343",
    canHear: true,
    getName() {},
  };

  // fragment <></> içerisinde stil tanımlaması yapamıyoruz sadece ayraç amaçlı kapsayıcı olarak kullanılır. Doma yansımaz.
  return (
    <>
      <button style={{ backgroundColor: color }}>{title}</button>
    </>
  );
};

export default MyButton; // biz dışarı bu butonu MyButton

// default function yöntemi
// export default function MyButton2(props:MyButtonProps) {
//  return <>{props.title}</>
// }
