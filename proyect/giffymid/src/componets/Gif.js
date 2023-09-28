export default function Gif({id,title,url}){
    return <div>
    <h4>{title}</h4>
    <small>{id}</small>
    <img alt={title} src={url} width='300' height='200' />
  </div>
}