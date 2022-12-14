import style from './Photo.module.scss';
import { ReactComponent as Ellipse } from './ellipse.svg';
import { ReactComponent as Vector } from './vector.svg';
import { useEffect, useState } from 'react';

function Photo() {
	console.log('Photo');
	const [isShown, setIsShown] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const addImage = async (e) => {
		
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			localStorage.setItem('image', reader.result);
			setSelectedImage(localStorage.getItem('image'));
		});
		reader.readAsDataURL(e.target.files[0]);
	};
	useEffect(() => {
		setSelectedImage(localStorage.getItem('image'));
	}, []);

	return (
		<div className={style.blockPhoto}>
			<div
				className={style.photoContainer}
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
			>
				<div className={style.photo}>
					{selectedImage && (
						<img
							className={style.img}
							alt=""
							src={selectedImage}
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						/>
					)}
				</div>
				{isShown && (
					<>
						<Ellipse
							className={style.ellipse}
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						/>
						<Vector
							className={style.vector}
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						/>
						<input
							className={style.input}
							type="file"
							name="myImage"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
							onChange={addImage}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default Photo;
