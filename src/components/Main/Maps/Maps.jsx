import style from "./Maps.module.scss";
import cn from "classnames";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useAppContext } from '../../../contexts/appContext';

function Maps({ className }) {
	const { latitudeLongitude } = useAppContext();
	const center = [Number(latitudeLongitude[1]), Number(latitudeLongitude[0])];
	return (
		<YMaps>
			<div className={cn(style.maps, className)}>
				<Map
					defaultState={{
						center,
						zoom: 10,
					}}
					state={{
						center,
						zoom: 10,
					}}
					width="552px"
					height="200px"
				>
				<Placemark
					geometry={center}
				/>
				</Map>
			</div>
		</YMaps>
	);
}

export default Maps;
