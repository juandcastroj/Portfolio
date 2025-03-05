import { useState, useEffect, useRef } from "react"

export function useSearch() {

    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    //validate a controlled form 
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
      if (search === '') {
        setError('Please enter a movie name')
       return
      }
      if (search.length < 3) {
        setError('Need more than 3 characters to search movie')
       return
      }
      setError(null)
    }, [search])
    
    return { search, updateSearch,  error }
}