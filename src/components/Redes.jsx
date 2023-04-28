import useContexApp from '../Context/useContextApp';

function Redes() {
	let { perfil } = useContexApp();

	return (
		<div className="redes">
			<div className="redes_nombre">
				<p>{perfil.name} </p>
			</div>

			<div className="redes_icono">
				<a href="https://github.com/JhonnyMosquera" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github"></i>
				</a>

				<a href="https://www.frontendmentor.io/profile/jhonnymosquera" target="_blank" rel="noopener noreferrer">
					<img src="frontendmentor.png" alt="icono frontend mentor" />
				</a>

				<a href="https://www.linkedin.com/in/jhonny-mosquera-076b6a26b/" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin"></i>
				</a>

				<a href="https://twitter.com/jhonnymosquera_" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-twitter"></i>
				</a>
			</div>
		</div>
	);
}

export default Redes;
