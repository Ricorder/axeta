import style from './FirstExpression.module.scss';
import cn from 'classnames';
import Title from '../../../ui/Title/Title';
import { ReactComponent as OpenQuotes } from '../openQuote.svg';
import { ReactComponent as CloseQuotes } from '../closeQuote.svg';

function FirstExpression({ className }) {
	return (
		<div className={cn(style.firstExpression, className)}>
			<Title>The Most Amaizing...</Title>
			<div className={style.div}>
				<OpenQuotes className={style.open} />
				<p className={style.p}>
					The only true wisdom is in knowing you know nothing...
				</p>
				<CloseQuotes className={style.close} />
			</div>
		</div>
	);
}

export default FirstExpression;
