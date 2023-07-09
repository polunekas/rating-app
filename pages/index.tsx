import React from 'react'
import { Htag, Button, P, Tag } from '../components'

export default function Home() {
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
	</>

  )
}
