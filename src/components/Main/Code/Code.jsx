import style from './Code.module.scss';
import cn from 'classnames';
import Title from '../../../ui/Title/Title';

function Code({ className }) {
	const lt = <span className={style.bold}>&lt;</span>;
	const slash = <span className={style.bold}>/</span>;
	const div = <span className={style.div}>div</span>;
	const clas = <span className={style.clas}>class</span>;
	const styles = <span className={style.clas}>style</span>;
	const equal = <span className={style.bold}>=</span>;
	const prime = <span className={style.bold}>&prime;</span>;
	const golden = <span className={style.golden}>golden-grid</span>;
	const grid = <span className={style.golden}>grid-area:</span>;
	const str = (
		<span className={style.golden}>
			11&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;/&nbsp;&nbsp;span&nbsp;&nbsp;10&nbsp;&nbsp;
			/&nbsp;&nbsp;span
		</span>
	);
	const str2 = <span className={style.golden}>12;</span>;
	const gt = <span className={style.bold}>&gt;</span>;

	return (
		<div className={cn(style.code, className)}>
			<Title>Sample code</Title>
			<div className={style.codeBlock}>
				<ol className={style.ol}>
					<li>
						&nbsp;&nbsp;
						{lt}
						{div}&nbsp;&nbsp;
						{clas}
						{equal}
						{prime}
						{golden}
						{prime}
						{gt}
					</li>
					<li>
						&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{lt}
						{div}&nbsp;&nbsp;
						{styles}
						{equal}
						{prime}
						{grid}
					</li>
					<li>
						&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{str}
					</li>
					<li>
						&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{str2}
						{prime}
						{gt}
					</li>
					<li>
						&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{lt}
						{slash}
						{div}
						{gt}
					</li>
					<li>
						&nbsp;&nbsp;
						{lt}
						{slash}
						{div}
						{gt}
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Code;
