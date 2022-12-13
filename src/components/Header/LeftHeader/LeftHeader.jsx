import style from './LeftHeader.module.scss';
import cn from "classnames";
import Photo from './Photo/Photo';
import Personal from './Personal/Personal';

function LeftHeader({className}) {

	return (
    <section className={cn(style.leftHeader, className)}>
      <Photo />
      <Personal />
    </section>
  );
}

export default LeftHeader;
