import { useActors } from './hooks/useActors'
import ActorCard from './components/ActorCard'

function App() {
	const { actors, loading, error } = useActors()

	if (loading)
		return <div className="text-center mt-5 fs-4">Caricamento...</div>
	if (error)
		return (
			<div className="text-center mt-5 text-danger">
				Errore nel aricamento...
			</div>
		)

	return (
		<>
			<nav className="navbar" style={{ backgroundColor: '#12122a' }}>
				<div className="container w-100 justify-content-center">
					<span className="navbar-brand text-white">
						Wonderful Cast
					</span>
				</div>
			</nav>

			<div className="container py-4">
				<div className="text-center mb-4">
					<h1 className="fw-bold">Actors</h1>
					<p className="text-muted">
						List of actors fetched from an API
					</p>
				</div>

				<div className="row row-cols-1 row-cols-md-3 g-4">
					{actors.map((actor) => (
						<div className="col" key={actor.id}>
							<ActorCard actor={actor} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default App
