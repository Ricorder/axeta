import style from "./Main.module.scss";
import cn from "classnames";
import Portfio from "./Portfio/Portfio";
import Exsperience from './Exsperience/Exsperience';
import Code from './Code/Code';
import Availability from './Availability/Availability';
import Maps from './Maps/Maps';
import FirstExpression from './FirstExpression/FirstExpression';
import SecondExpression from './SecondExpression/SecondExpression';
import { YMaps } from "@pbe/react-yandex-maps";

function Main({ className }) {
	return (
		<main className={cn(style.main, className)}>
			<Portfio className={style.portfio} />
			<Exsperience className={style.exsperience} />
			<Code className={style.code} />
			<Availability className={style.availability} />
			<YMaps><Maps className={style.map} /></YMaps>
			<FirstExpression className={style.first} />
			<SecondExpression className={style.second} />
		</main>
	);
}

export default Main;
