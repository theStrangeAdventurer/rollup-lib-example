import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;
  return <button className={styles.button} {...rest}>{children as ReactNode}</button>;
};