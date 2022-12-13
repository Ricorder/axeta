import style from './Header.module.scss';
import cn from 'classnames';
import RightHeader from './RightHeader/RightHeader';
import LeftHeader from './LeftHeader/LeftHeader';

function Header({ handlePrint, className }) {
	return (
		<header className={cn(style.header, className)}>
			<LeftHeader className={style.leftHeader} />
			<RightHeader className={style.rightHeader} handlePrint={handlePrint} />
		</header>
	);
}

export default Header;
