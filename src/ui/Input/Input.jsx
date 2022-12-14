import style from './Input.module.scss';
import { memo, useState } from 'react';
import { ReactComponent as Ok } from './ok.svg';
import cn from 'classnames';
import { ReactComponent as Error } from './error.svg';

function Input({ add, exit, enterText, length, className, isNumber }) {
	const [text, setText] = useState(enterText);

	const handleChange = ({ target: { value } }) => {
		setText(value);
	};

	const addChange = (e) => {
		if (e.key === 'Enter' && !okOrError && text) {
			if (isNumber) {
				if (!isNaN(Number(text))) {
					add(Number(text));
				}
			} else {
				add(text);
			}
			exit();
		} else if (!text && e.key === 'Enter') {
			exit();
		}
	};

	const checkSymbol = /^(?=.*[!@*#$%^&()+=//\\\][{}?><":;|])/;
	const okOrError = checkSymbol.test(text);

	return (
		<div
			className={cn(style.blockInput, {
				[style.inline]: isNumber === true,
			})}
		>
			<input
				value={text}
				className={cn(style.input, className, {
					[style.errorInput]: okOrError === true,
				})}
				onChange={handleChange}
				maxLength={length}
				onKeyDown={addChange}
				type="text"
			/>
			{!okOrError ? (
				text && <Ok className={style.svg} />
			) : (
				<>
					<Error className={style.svg} />
					{!isNumber && <p className={style.error}>Error Description</p>}
				</>
			)}
		</div>
	);
}

export default memo(Input);
