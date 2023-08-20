import image from "../assets/images/3.jpg";
import classes from "../styles/Vedio.module.css";
export default function Vedio() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="Vedio title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
