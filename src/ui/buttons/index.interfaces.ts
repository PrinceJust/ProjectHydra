import React from 'react'

export interface ActionButtonsProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string,
  click?() : void,
  disabled? : boolean,
  btnSize? : 'sm' | 'md' | 'lg',
  variant? : 'default' | 'info' | 'warning' | 'danger',
}