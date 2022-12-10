import { useState } from "react";
import style from "./Skills.module.scss";
import { ReactComponent as Cross } from "./cross.svg";
import Skill from "./Skill/Skill";
import Input from "../../../../../ui/Input/Input";
import { useAppContext } from '../../../../../contexts/appContext';

function Skills() {
	const { skills, add } = useAppContext();
  const [edit, setEdit] = useState(false);

  const enter = () => {
    setEdit(true);
  };

  const exit = () => {
    setEdit(false);
  };

  const skillsLength = skills.length <= 3;

  return (
    <div className={style.skills}>
      {skills &&
        skills.map(skill => (
          <Skill id={skill.id} key={skill.id} >
            {skill.text}
          </Skill>
        ))}
      {!edit && skillsLength ? (
        <Skill>
          <Cross onClick={enter} />
        </Skill>
      ) : (
        skillsLength && (
          <Input className={style.input} add={add} exit={exit} length="15" />
        )
      )}
    </div>
  );
}

export default Skills;
