import style from "./Availability.module.scss";
import cn from "classnames";
import Title from "../../../ui/Title/Title";

function Availability({ className }) {

	return (
		<div className={cn(style.availability, className)}>
			<Title>Availability</Title>
			<p className={style.p}>Full-time</p>
			<h3 className={style.h3}>Preferred Environment</h3>
			<p className={style.p}>GitHub, Mac OSX</p>
		</div>
	);
}

export default Availability;
