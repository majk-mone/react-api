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
		<div className="container py-4">
			{actors.map((actor) => (
				<ActorCard key={actor.id} actor={actor} />
			))}
		</div>
	)
}

export default App
