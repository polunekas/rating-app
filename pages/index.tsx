import React from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'
import { useState } from 'react'
import { withLayout } from '../layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

function Home({menu}: HomeProps) {
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

		<ul>
			{menu.map(m => (<li key = {m._id.secondCategory}>{m._id.secondCategory}</li>))}
		</ul>
		
	</>

  )
}


export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async() => {
	const firstCategory = 0
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	})
	
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[];
	firstCategory: number
}