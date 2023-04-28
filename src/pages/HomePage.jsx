import Redes from '../components/Redes';
import Habilidades from '../components/Habilidades';
import Proyectos from '../components/Proyectos';
import Perfil from '../components/Perfil';
import Contact from '../components/Contact';

function HomePage() {
	return (
		<main className="home_page">
			<div className="pdd">
				<header className="header">
					<Redes />

					<Perfil />
				</header>

				<hr />

				<Habilidades />

				<hr />

				<Proyectos />
			</div>

			<Contact />

			<div className="pdd">
				<hr />

				<footer className="footer">
					<Redes />
				</footer>
			</div>
		</main>
	);
}

export default HomePage;
