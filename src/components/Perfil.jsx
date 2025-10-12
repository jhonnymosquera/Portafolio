import useContexApp from '../Context/useContextApp';
import Contact_button from './Contact_button';

export default function Perfil() {
	let { perfil } = useContexApp();

	let { photo, title, description } = perfil;

	return (
		<div className="perfil">
			<div className="perfil_photo">
				<img src={'perfil/jhonny_photo.png'} style={{ borderRadius: '25%' }} className={'perfil_photo_img'} alt={photo.alt} />
			</div>

			<div className="perfil_desc">
				<h1>{title} </h1>

				<p>{description}</p>

				<Contact_button />
			</div>
		</div>
	);
}
