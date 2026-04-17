import ActorCard from './ActorCard'

function CastSection({ title, subtitle, cast }) {
	return (
		<div className="mb-5">
			<div className="text-center mb-4">
				<h1 className="fw-bold">{title}</h1>
				<p className="text-muted">{subtitle}</p>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{cast.map((person) => (
					<div className="col" key={person.id}>
						<ActorCard actor={person} />
					</div>
				))}
			</div>
		</div>
	)
}
export default CastSection
