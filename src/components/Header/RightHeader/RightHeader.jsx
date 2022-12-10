import style from './RightHeader.module.scss';
import { ReactComponent as Printer } from "./print.svg";

function RightHeader({ handlePrint }) {
  return (
    <section className={style.rightHeader}>
      <div className={style.printer} onClick={handlePrint}>
        <Printer />
        <p>Print this page</p>
      </div>
    </section>
  );
}

export default RightHeader;
