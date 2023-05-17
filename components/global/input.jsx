import style from "../../styles/input.module.css";

export default {
  Input: ({
    className = "input-default",
    placeholder = "",
    type = "text",
    onChange = () => {},
    value = null,
    suffix,
  }) => {
    return (
      <div className="input-box">
        <input
          value={value}
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {suffix && <div className="suffix-input">{suffix} </div>}
      </div>
    );
  },
  inputWithSuffix: ({
    classSuffixBox = "suffix_box",
    value,
    defaultValue = "",
    onKey = () => {},
    onChange = () => {},
    type = "text",
    placeholder = "",
    className = "input_other_text",
    suffix = "",
    max,
    min,
    onWheel,
    pattern,
    myRef,
  }) => {
    return (
      <div className={classSuffixBox}>
        <input
          ref={myRef}
          onWheel={onWheel}
          pattern={pattern}
          maxLength={max}
          min={min}
          value={value}
          defaultValue={defaultValue}
          onKeyUp={onKey}
          className={`${"input_other_text"} ${className}`}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
        {suffix}
      </div>
    );
  },
  textArea: ({ className, cols, rows }) => {
    return (
      <textarea
        className={`${className} input_other_text p-3`}
        name=""
        id=""
        cols={cols}
        rows={rows}
      />
    );
  },
  checkbox: ({ name = "", label = "", onChange = () => {}, checked }) => {
    return (
      <label className={style.container}>
        {label}
        <input
          name={name}
          // value={true}
          // defaultValue={true}
          onChange={onChange}
          className={style.check_input}
          type="checkbox"
          checked={checked}
        />
        <span className={style.checkmark}></span>
      </label>
    );
  },
};
