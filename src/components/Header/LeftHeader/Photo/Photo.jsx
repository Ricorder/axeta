import style from './Photo.module.scss';
import { ReactComponent as Ellipse } from './ellipse.svg';
import { ReactComponent as Vector } from './vector.svg';
import { useState } from 'react';

function Photo() {
	const [isShown, setIsShown] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const addImage = (event) => {
		setSelectedImage(event.target.files[0]);
	};

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
							src={URL.createObjectURL(selectedImage)}
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
