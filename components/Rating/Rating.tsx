import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState, KeyboardEvent } from 'react'
import StarIcon from './star.svg'

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps) => {
	const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])


	const constructRating = (currentRating: number) => {
		const upDatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				// eslint-disable-next-line react/jsx-key
				<StarIcon
					className= {cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
				})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i+1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e:KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i+1, e)}
				/>
			)
		})
		setRatingArray(upDatedArray)
	}

	const changeDisplay = (i: number) => {
		if(!isEditable) {
			return;
		}
		constructRating(i)
	}

	const onClick = (i: number) => {
		if(!isEditable || !setRating) {
			return;
		}
		setRating(i)
	}

	const handleSpace = (i: number, e:KeyboardEvent<SVGAElement>) => {
		if(e.code != "Space" || !setRating) {
			return
		}
		setRating(i)
	}

	return (
		<div {...props}>
		{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}

		</div>
	)
}
