import { createContext, useState, useContext } from "react";

const appContext = createContext()

const AppContextProvider = ({children}) => {
	const [latitudeLongitude, setLatitudeLongitude] = useState([])
	const [skills, setSkills] = useState([
		{
			id: "1",
			text: "Kotlin",
			experience: 11,
		},
		{
			id: "2",
			text: "Java",
			experience: 15,
		},
		{
			id: "3",
			text: "Type Script",
			experience: 4,
		},
		{
			id: "4",
			text: "Go",
			experience: 3,
		},
	]);

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
