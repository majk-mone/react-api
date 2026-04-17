function ActorCard({ actor }) {
	return (
		<div
			className="card h-100 text-white border-0"
			style={{ backgroundColor: '#1a1a3e' }}
		>
			<div
				className="card-header text-center border-0"
				style={{ backgroundColor: '#1a1a3e' }}
			>
				<h5 className="card-title fw-bold fs-4">{actor.name}</h5>
			</div>
			<img
				src={actor.image}
				alt={actor.name}
				className="img-fluid px-3"
				style={{
					height: '280px',
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>
			<div className="card-body text-center">
				<p className="text-secondary fst-italic mb-2">
					{actor.birth_year} &nbsp; {actor.nationality}
				</p>
				<p className="small">{actor.biography}</p>
				<p className="fst-italic small" style={{ color: '#e8a020' }}>
					<strong className="d-block text-warning">Known For:</strong>
					{(actor.most_famous_movies || []).join(', ')}
				</p>
				<p className="fst-italic small" style={{ color: '#e8a020' }}>
					<strong className="d-block text-warning">Awards:</strong>
					{(actor.awards || []).join(', ')}
				</p>
			</div>
		</div>
	)
}

export default ActorCard
