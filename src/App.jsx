import { useQuery } from '@tanstack/react-query'
import './App.css'

async function fetchNews() {
  const response = await fetch("https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=s1mccHAt7YAIWc6BBRpZxaHswajj9K0COGemBARS1AnjmRVB")

  if (!response.ok) {
    throw new Error("an error has occured please try again later")
  }

  return response.json()
}

function App() {

  const { data: news, isPending, error, } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  if (isPending) return <p>Pending news...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>

    </>
  )
}

export default App

