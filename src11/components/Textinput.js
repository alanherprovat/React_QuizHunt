import classes from "../styles/Textinput.module.css";
export default function Textinput(type, placeholder, icon) {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
