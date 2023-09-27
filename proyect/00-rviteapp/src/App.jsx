import { TwitterFollowCard } from "./TwiterFollowCard";
import './App.css'

export function App() {

  // pasando una funcion mediante props jsx
  const formatUserName=(userName) => `@${userName}`

  // no es siempre buena practica


  
  const midudev = { userName: 'midudev', initialIsFollowing: true, name:'Miguel angel Duran'}
  

  return (
    <section className="App">
      <TwitterFollowCard 
      formatUserName={formatUserName} 
      {... midudev} > 
        1
      </TwitterFollowCard>


      <TwitterFollowCard 
      formatUserName={formatUserName} 
      initialIsFollowing 
      userName='pheralb' 
      name='Pablo Hernandez'> 
      55
      </TwitterFollowCard>
      <TwitterFollowCard 
      formatUserName={formatUserName} 
      initialIsFollowing={false} 
      userName='elonmusk' 
      name='Elon Musk' />
      <TwitterFollowCard 
      formatUserName={formatUserName} 
      initialIsFollowing 
      userName='vxnder' 
      name='VanderHard' />
    </section>
  )
}