import Formulario from './Formulario';

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="contact_container">
				<div className="contact_desc">
					<h2>Contácteme</h2>

					<p>
						Me encantaría ponernos en contacto y trabajar juntos. Por favor, complete el formulario y me pondré en contacto con
						usted lo antes posible.
					</p>
				</div>

				<Formulario />
			</div>
		</div>
	);
}
