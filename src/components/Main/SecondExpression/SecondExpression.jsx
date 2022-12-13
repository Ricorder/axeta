import style from './SecondExpression.module.scss';
import cn from 'classnames';
import Title from '../../../ui/Title/Title';
import { ReactComponent as OpenQuotes } from '../openQuote.svg';
import { ReactComponent as CloseQuotes } from '../closeQuote.svg';

function SecondExpression({ className }) {
	return (
		<div className={cn(style.secondExpression, className)}>
			<Title>In clients I look for...</Title>
			<div className={style.div}>
				<OpenQuotes className={style.open} />
				<p className={style.p}>
					There is only one good, knowledge, and one evil, ignorance.
				</p>
				<CloseQuotes className={style.close} />
			</div>
		</div>
	);
}

export default SecondExpression;
