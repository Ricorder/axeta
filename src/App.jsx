import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: 'axeta-test',
	});

	return (
		<div className={style.body} ref={componentRef}>
			<Header className={style.header} handlePrint={handlePrint} />
			<Main className={style.main} />
		</div>
	);
}

export default App;
