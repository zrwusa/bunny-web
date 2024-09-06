import React, {ElementType, ForwardedRef, forwardRef, HTMLAttributes,} from "react";
import classNames from "classnames";
import styles from "./Box.module.scss";

type Tags = keyof HTMLElementTagNameMap;
// type Tags = keyof IntrinsicElements;

export type BoxProps<T extends Tags = 'div'> = HTMLAttributes<HTMLElementTagNameMap[T]> & {
    tag?: T;
};

export const Box = forwardRef(<T extends Tags = 'div'>(
    {tag, children, className, ...rest}: BoxProps<T>,
    ref: ForwardedRef<HTMLElement>
) => {
    // TODO The type safety of ref is questionable

    const Tag = tag as ElementType;

    return (
        <Tag
            ref={ref}
            className={classNames(styles.box, className)}
            {...rest}
        >
            {children}
        </Tag>
    );
});

Box.displayName = "Box";

export default Box;
