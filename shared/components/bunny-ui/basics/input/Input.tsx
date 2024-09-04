import React, {forwardRef, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

// Extend HTML Input element attributes
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean; // Example prop to indicate error state
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({error, className, ...props}, ref) => {
        return (
            <input
                ref={ref}
                className={classNames(
                    styles.input,
                    {[styles.error]: error}, // Conditional class for error state
                    className // Allow custom className to be passed
                )}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input'; // Set display name for better debugging

export default Input;
