import { useState } from 'react';
import Countries from 'countries-api';
import style from './Personal.module.scss';
import Input from '../../../../ui/Input/Input';
import Skills from './Skills/Skills';
import { useAppContext } from '../../../../contexts/appContext';
import { useEffect } from 'react';

function Personal() {
	const [name, setName] = useState('Андрей Бреслав');
	const [adress, setAdress] = useState('Котлин');
	const [editName, setEditName] = useState(true);
	const [editAdress, setEditAdress] = useState(true);
	const [country, setCountry] = useState('');
	const [localLang, setLocalLang] = useState('');
	const { setLatitudeLongitude } = useAppContext();

	const sendCoordinate = async (path) => {
		const response1 = await fetch(
			`https://geocode-maps.yandex.ru/1.x/?apikey=3914f4e5-0fd3-41be-a18e-bfff93e243c6&format=json&geocode=${path}`,
		);
		const coordinate = await response1.json();
		const geocoderMetaData =
			coordinate.response.GeoObjectCollection.featureMember[0].GeoObject;
		setLatitudeLongitude(geocoderMetaData.Point.pos.split(' '));
		const lang =
			geocoderMetaData.metaDataProperty.GeocoderMetaData.Address.country_code;
		setCountry(lang.toLowerCase());
		const languages = Object.values(
			Countries.findByCountryCode(lang).data[0].languages,
		);
		setLocalLang(languages.reduce((str, language) => str + ', ' + language));
	};

	useEffect(() => {
		sendCoordinate(adress);
	}, []);

	const editNameChange = () => {
		setEditName(false);
	};

	const editNameChange2 = () => {
		setEditName(true);
	};

	const addNameChange = (text) => {
		setName(text);
		setEditName(true);
	};

	const editAdressChange = () => {
		setEditAdress(false);
	};

	const editAdressChange2 = () => {
		setEditAdress(true);
	};
	const addAdressChange = (text) => {
		setAdress(text);
		sendCoordinate(text);
		setEditAdress(true);
	};

	return (
		<section className={style.personal}>
			<div onClick={editNameChange}>
				{editName ? (
					<p className={style.name}>{name}</p>
				) : (
					<Input
						className={style.inputName}
						enterText={name}
						add={addNameChange}
						exit={editNameChange2}
						length="14"
					/>
				)}
			</div>
			<div onClick={editAdressChange}>
				{editAdress ? (
					<p className={style.adress}>{adress}</p>
				) : (
					<Input
						className={style.inputAdress}
						enterText={adress}
						add={addAdressChange}
						exit={editAdressChange2}
						length="25"
					/>
				)}
			</div>
			<div className={style.country}>
				<img
					src={`https://flagcdn.com/24x18/${country}.png`}
					width="24"
					height="18"
					alt=""
				></img>
				&nbsp;&nbsp;
				<p className={style.country}>{localLang}</p>
			</div>
			<Skills />
		</section>
	);
}

export default Personal;
