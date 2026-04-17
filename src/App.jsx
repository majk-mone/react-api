import { useCast } from './hooks/useCast'
import Navbar from './components/Navbar'
import CastSection from './components/CastSection'

function App() {
	const { actors, actresses, allCast, loading, error } = useCast()

	if (loading)
		return <div className="text-center mt-5 fs-4">Caricamento...</div>
	if (error)
		return (
			<div className="text-center mt-5 text-danger">
				Errore nel caricamento.
			</div>
		)

	return (
		<>
			<Navbar />
			<div className="container py-4">
				<CastSection
					title="Actors"
					subtitle="List of actors fetched from an API"
					cast={actors}
				/>
				<CastSection
					title="Actresses"
					subtitle="List of actresses fetched from an API"
					cast={actresses}
				/>
				<CastSection
					title="All Cast"
					subtitle="Actors and actresses together"
					cast={allCast}
				/>
			</div>
		</>
	)
}

export default App
