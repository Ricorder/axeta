import style from './Skill.module.scss';
import { ReactComponent as RedCross } from './redСross.svg';
import { memo, useState } from 'react';
import cn from 'classnames';
import { useAppContext } from '../../../../../../contexts/appContext';

function Skill({ children, id }) {
	const [isShown, setIsShown] = useState(false);
	const { remove } = useAppContext();
	const show = isShown && typeof children !== 'object';
	return (
		<div className={style.blockSkill}>
			<div
				className={cn(style.skill, {
					[style.hover]: isShown === true,
				})}
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
			>
				<p className={style.text}>{children}</p>
			</div>
			{show && (
				<RedCross
					className={style.svg}
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}
					onClick={() => remove(id)}
				/>
			)}
		</div>
	);
}

export default memo(Skill);
