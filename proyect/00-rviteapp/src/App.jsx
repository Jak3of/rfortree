import { TwitterFollowCard } from "./TwiterFollowCard";
import './App.css'

export function App() {

  // pasando una funcion mediante props jsx
  //const formatUserName=(userName) => `@${userName}`

  // no es siempre buena practica

  const users=[
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  // const midudev = { userName: 'midudev', initialIsFollowing: true, name:'Miguel angel Duran'}

  /*
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
        */
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )



}