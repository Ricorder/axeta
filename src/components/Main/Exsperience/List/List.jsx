import { useState } from 'react';
import Input from '../../../../ui/Input/Input';
import style from "./List.module.scss";

function List({ experience, text, setSkills, id }) {
	const [edit, setEdit] = useState(true);

	const editExsperience = () => {
		setEdit(false);
	};

	const editExsperience2 = () => {
		setEdit(true);
	};

	const change = (text) => {
		setSkills((prev) =>
			prev
				.map((skill) => {
					if (skill.id === id) {
						return {
						...skill,
						experience: text,
						};
					}
					return skill;
				})
				.sort((a, b) => b.experience - a.experience)
		);
		setEdit(true);
	};
	
	return (
		<li>
			<span>{text}</span>&nbsp;&nbsp;&nbsp;
			{edit
				?<span className={style.old} onClick={editExsperience}>{`${experience} ${experience === 1 ? "year" : "years"}`}</span>
				: (
				<Input
					className={style.inputName}
					enterText={experience}
					add={change}
					exit={editExsperience2}
					length="14"
					isNumber
					/>
				)
			}
		</li>
	);
}

export default List;
