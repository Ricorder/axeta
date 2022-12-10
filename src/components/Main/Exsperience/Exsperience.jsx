import style from "./Exsperience.module.scss";
import cn from "classnames";
import Title from "../../../ui/Title/Title";
import List from './List/List';
import { useAppContext } from '../../../contexts/appContext';

function Exsperience({ className }) {
	const { skills, setSkills } = useAppContext();

	return (
		<div className={cn(style.exsperience, className)}>
			<Title>Experience</Title>
			<ul className={style.li}>
				{skills &&
					skills.map(el => (
						<List
							key={el.id}
							id={el.id}
							text={el.text}
							experience={el.experience}
							setSkills={setSkills}
						/>
					))
				}
			</ul>
		</div>
	);
}

export default Exsperience;
