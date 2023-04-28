import useContexApp from '../Context/useContextApp';
import Contact_button from './Contact_button';
import Picture from './utils/Picture';

export default function Perfil() {
	let { perfil } = useContexApp();

	let { photo, tittle, description } = perfil;

	return (
		<div className="perfil">
			<div className="perfil_photo">
				<Picture img={photo} className={'perfil_photo_img'} />
			</div>

			<div className="perfil_desc">
				<h1>{tittle} </h1>

				<p>{description}</p>

				<Contact_button />
			</div>
		</div>
	);
}
