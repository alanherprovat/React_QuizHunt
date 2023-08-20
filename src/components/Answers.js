import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.Answer}>
      <Checkbox className={classes.answer} text="Test Answer" />
    </div>
  );
}
