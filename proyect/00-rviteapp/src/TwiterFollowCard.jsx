//hocks 
import { useState } from 'react'



// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCard({ children, userName = 'unknow', name ,initialIsFollowing}) {

  //el padre no cambia al hijo (children) componente
  // por que no inicializa 2 veces un parametro 
  // se hace reactivo al mismo elemento & se inicializa solo una vez 
  const  [isFollowing , setIsFollowind]= useState(initialIsFollowing)
  

  const text = isFollowing ? 'Siguiendo' : 'Seguir' 
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-followind'
  : 'tw-followCard-button'
  // da igual si se cambia despues ya que el componente actua de forma reactiva
  const handleClick = () => {
    setIsFollowind(!isFollowing)
  }


  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt={`avatar de ${userName}`} src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}{children}</strong>
          <span className="tw-followCard-UserName"> @{userName}</span>
        </div>
      </header>
      <aside>
      <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}