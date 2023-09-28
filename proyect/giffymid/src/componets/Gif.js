import React from 'react';
import './Gif.css'

export default function Gif({ id, title, url }) {
  return <a href={`#${id}`}>
    <h4>{title}</h4>
    <small>{id}</small>
    <img alt={title} src={url} width='300' height='200' />
  </a>
}