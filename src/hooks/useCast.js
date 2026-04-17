import { useEffect, useState } from 'react'
import { fetchActors, fetchActresses } from '../api/actors'

export function useCast() {
	const [actors, setActors] = useState([])
	const [actresses, setActresses] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		Promise.all([fetchActors(), fetchActresses()])
			.then(([actorsData, actressesData]) => {
				setActors(actorsData)
				setActresses(actressesData)
			})
			.catch(setError)
			.finally(() => setLoading(false))
	}, [])

	const allCast = [...actors, ...actresses]

	return { actors, actresses, allCast, loading, error }
}
