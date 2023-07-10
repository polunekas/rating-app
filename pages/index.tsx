import React from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'
import { useState } from 'react'

export default function Home() {
const [rating, setRating] = useState<number>(4)
  return (
  	<>
		<Htag tag='h1'>Текст</Htag>
		<Button appearance='primary' arrow = "right">Кнопка</Button>
		<Button appearance='ghost'>Кнопка</Button>
		<P size='l'>Hu</P>
		<P size='m'>Hu</P>
		<P size='s'>Hu</P>
		<Tag size = 's' color='green'>Mlksdn</Tag>
		<Tag size = 'm' color='red'>red</Tag>
		<Tag size = 'm' color='primary'>red</Tag>

		<Rating rating={rating} isEditable setRating={setRating}/>
	</>

  )
}
