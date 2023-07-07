import { ButtonProps } from './button.props'
import styles from './Button.module.css'
import cn from 'classnames'


export const Button = ({ appearance, children, className, ...props}: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
			>
			{children}
		</button>
	)
}