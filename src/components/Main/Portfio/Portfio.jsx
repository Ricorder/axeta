import style from './Portfio.module.scss';
import cn from 'classnames';
import Title from '../../../ui/Title/Title';

function Portfio({ className }) {
	return (
		<div className={cn(style.portfio, className)}>
			<Title>Portfolio</Title>
			<ul className={style.ul}>
				<li>
					<a href="/">Bootstrap 4 Material Design (Sample Link)</a>
				</li>
				<li>
					<a href="/">Modern JavaScript stack</a>
				</li>
				<li>
					<a href="/">Datepicker for twitter bootstrap</a>
				</li>
				<li>
					<a href="/">Fast and reliable Bootstrap widgets in Angular </a>
				</li>
			</ul>
		</div>
	);
}

export default Portfio;
