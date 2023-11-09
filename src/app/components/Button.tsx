import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export const Button = (props: React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>): React.ReactNode => {
  const { children, ...restProps } = props;

  return (
    <button className={styles.button} {...restProps}>
      {children}
    </button>
  );
};