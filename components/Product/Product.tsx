/* eslint-disable @next/next/no-img-element */
import { ProductProps } from './Product.props'
import { Tag } from '../Tag/Tag'
import styles from './Product.module.css'
import cn from 'classnames'
import { Rating } from '../Rating/Rating'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'
import { priceRu } from '../../helpers/helpers'

export const Product = ({product, className, ...props}: ProductProps) => {
	return (
		<Card className={styles.product}>
			<div className = {styles.logo}> <img 
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70} />
			</div>
			<div className = {styles.title}> {product.title} </div>
			<div className = {styles.price}> {priceRu(product.price)} </div>
			<div className = {styles.credit}> {priceRu(product.credit)}/<span>мес</span></div>
			<div className = {styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/> </div>
			<div className={styles.tags}>{product.categories.map(c =><Tag key={c} color='ghost'>{c}</Tag>)}</div>
			<div className = {styles.priceTitle}>цена</div>
			<div className = {styles.creditTitle}>кредит</div>
			<div className = {styles.rateTitle}>{product.reviewCount}отзывов</div>
			<hr className={styles.hr}/>
			<div className = {styles.description}>{product.description}</div>
			<div className = {styles.feature}>фичи</div>
			<div className = {styles.advBlock}>
				<div className={styles.advantages}>
					<div>Преимущества</div>
					<div>{product.advantages}</div>
				</div>
				<div className={styles.disadvantages}>
					<div>Недостатки</div>
					<div>{product.disadvantages}</div>
				</div>
			</div>
			<div className={styles.hr}><hr/></div>
			<div className={styles.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow={'right'}>Читать отзывы</Button>
			</div>


		</Card>

	)
	} 


function priceru(price: number): import("react").ReactNode {
	throw new Error('Function not implemented.')
}

