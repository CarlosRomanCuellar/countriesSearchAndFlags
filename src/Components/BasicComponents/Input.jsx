const Input = (props) => {
  const onChangeHandler = (ev) => {
    props.updateValue(ev.target.value);
  };

  return (
    <input
      className={props.className}
      type="text"
      onChange={onChangeHandler}
      value={props.value}
      placeholder={props.placeholder || ""}
    ></input>
  );
};

export default Input;
