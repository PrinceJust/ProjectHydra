import React from 'react'

export interface ActionButtonsProps extends React.HTMLProps<HTMLButtonElement> {
  text? : string,
  click?() : void,
  disabled? : boolean,
  sizes? : 'sm' | 'md' | 'lg',
  variant? : 'default' | 'info' | 'warning' | 'danger',
}