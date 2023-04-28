import Picture from './utils/Picture';

function Proyecto({ proyecto }) {
	let { title, img, technologies, urls } = proyecto;

	return (
		<div className="proyectos_container_item">
			<div className="proyectos_container_item_img">
				<a href={`${urls.live}`} target="_blank">
					<Picture img={img} />
				</a>
			</div>

			<div className="proyectos_container_item_desc">
				<h3>{title}</h3>

				<div className="proyectos_container_item_desc_tec">
					{technologies.map((tec, i) => (
						<p key={i}>{tec}</p>
					))}
				</div>

				<div className="proyectos_container_item_desc_links">
					{/* <div className="proyectos_container_item_desc_links_container">
						<a href={urls.live} target="_blank" rel="noopener noreferrer">
							Ver Proyecto
						</a>
					</div> */}

					<div className="proyectos_container_item_desc_links_container">
						<a href={urls.repository} target="_blank" rel="noopener noreferrer">
							Ver Codigo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Proyecto;
