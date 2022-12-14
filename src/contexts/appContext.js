import { createContext, useState, useContext, useEffect } from 'react';

const appContext = createContext()

const AppContextProvider = ({children}) => {
	const [latitudeLongitude, setLatitudeLongitude] = useState([])
	const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')));

	useEffect(() => {
		localStorage.setItem('skills', JSON.stringify(skills));
		setSkills(JSON.parse(localStorage.getItem('skills')));
	}, [skills]);

	const add = (text) => {
		setSkills((prev) => {
			return [
				...prev,
				{
					id: Date.now(),
					text,
					experience: 0,
				},
			];
		});
	};

	const remove = (id) => {
		setSkills((prev) => prev.filter((skill) => skill.id !== id));
	};

	return (
		<appContext.Provider value={{
			skills,
			setSkills,
			add, 
			remove,
			latitudeLongitude,
			setLatitudeLongitude
		}} >
			{children}
		</appContext.Provider>
	)
}

export default AppContextProvider

const useAppContext = () => useContext(appContext)

export { useAppContext }
