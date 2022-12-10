import style from "./Title.module.scss";
import cn from "classnames";

function Title({ className, children }) {
  return <h2 className={cn(style.title, className)}>{children}</h2>;
}

export default Title;
