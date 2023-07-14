import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { Htag, Tag } from '../../components'
import { TopPageComponentProps } from './TopPageComponent.props'
import { Card } from '../../components/Card/Card'
import { HhData } from '../../components/hhData/HhData'

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
	return (
		<div className={styles.wrapper}>
		<div className={styles.title}>
			<Htag tag = 'h1'>{page.title}</Htag>
			{products && <Tag color='grey' size='m'>{products.length}</Tag>}
			<span>Sortirovka</span>
		</div>
		<div>
			{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
		</div>

		<div className={styles.hhTitle}>
			<Htag tag = 'h2'>Вакансии - {page.category}</Htag>
			<Tag color='red' size='m'>hh.ru</Tag>
		</div>
		<HhData {...page.hh} />
	
		</div>
	
	)
	} 
