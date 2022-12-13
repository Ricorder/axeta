import style from './RightHeader.module.scss';
import cn from "classnames";
import { ReactComponent as Printer } from "./print.svg";

function RightHeader({ handlePrint, className }) {
  return (
    <section className={cn(style.rightHeader, className)}>
      <div className={style.printer} onClick={handlePrint}>
        <Printer />
        <p>Print this page</p>
      </div>
    </section>
  );
}

export default RightHeader;
