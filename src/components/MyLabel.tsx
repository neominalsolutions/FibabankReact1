type MyLabelProps = {
  text: string; // required
};

// default fuction default export yok props keyword ile tanımlanmış function component
export function MyLabel(props: MyLabelProps) {
  return (
    <div style={{ marginTop: "10px" }}>
      <label>{props.text}</label>
      <MyLabelItem />
    </div>
  );
}

export function MyLabelItem() {
  return <p>Deneme 1</p>;
}
