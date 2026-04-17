import { useEffect, useState } from 'react'
import { fetchActors } from '../api/actors'

export function useActors() {
	const [actors, setActors] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchActors()
			.then((data) => {
				console.log('Attori:', data)
				setActors(data)
			})
			.catch(setError)
			.finally(() => setLoading(false))
	}, [])

	return { actors, loading, error }
}
