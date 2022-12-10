import style from './LeftHeader.module.scss';
import Photo from './Photo/Photo';
import Personal from './Personal/Personal';

function LeftHeader() {

	return (
		<section className={style.leftHeader}>
			<Photo/>
			<Personal/>
		</section>
	);
}

export default LeftHeader;
