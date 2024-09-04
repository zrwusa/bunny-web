import React, {ButtonHTMLAttributes, forwardRef} from 'react';
import classNames from 'classnames';
import styles from "./Button.module.scss"

// Extend HTML Button element attributes
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({variant = 'primary', size = 'medium', isLoading, className, children, disabled, ...props}, ref) => {
        return (
            <button
                ref={ref}
                className={
                    classNames(
                        styles.button,
                        styles[variant],
                        styles[size],
                        {
                            [styles.loading]: isLoading,
                            [styles.disabled]: disabled || isLoading,
                        },
                        className
                    )
                }
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? 'Loading...' : children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
