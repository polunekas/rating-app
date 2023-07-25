import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';
import { ReviewFormProps } from './ReviewForm.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import CloseIcon from './close.svg'
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

export const ReviewForm = ({ productId, isOpened , className, ...props }: ReviewFormProps) => {

const { register, control, handleSubmit } = useForm<IReviewForm>()
const onSubmit = (data: IReviewForm) => {
	console.log(data)
}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
		<div className={cn(styles.reviewForm, className)} {...props}>
		
		<Input {...register('name')} placeholder='Имя'/>
		<Input {...register('title')} placeholder='Заголовок отзыва' className={styles.title}/>
		<div className={styles.rating}>
			<span>Оценка:</span>
			<Controller 
				control={control} name='rating' render={({ field }) => (
				<Rating isEditable rating={field.value} ref = {field.ref} setRating={field.onChange}/>
			)} />
			
		</div>
		<Textarea {...register('description')} placeholder='Текст отзыва'/>
		<div className={styles.submit}>
			<Button appearance="primary">Отправить</Button>
			<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
		</div>
		</div>
		<div className={styles.success}>
			<div className={styles.successTitle}>Ваш отзыв отправлен</div>
			<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
			<CloseIcon className={styles.close}/>
		</div>
		</form>
	);
};
