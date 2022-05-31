import styled from 'styled-components'
import {ActionButtonsProps} from './index.interfaces'

export const StyledActionButton = styled.button<ActionButtonsProps>`
  ${({ variant = 'default', btnSize = 'md' }) => {
    let css = ''

    if (variant === 'info') {
      css += `
        color: #fff;
        background-color: #4D96D1;
        border: 1px solid #4D96D1;
        &:hover {
          &:not([disabled]) {
            background-color: #1F64B1;
            border: 1px solid #1F64B1;
          }
          color: #fff;
          transition: 0.3s all ease;
        }
      `
    } else if (variant === 'warning') {
      css += `
        color: #fff;
        background-color: #FFCD4E;
        border: 1px solid #FFCD4E;
        &:hover {
          &:not([disabled]) {
            background-color: #EFB215;
            border: 1px solid #EFB215;
          }
          color: #fff;
          transition: 0.3s all ease;
        }
      `
    } else if (variant === 'danger') {
      css += `
        color: #fff;
        background-color: #F7675D;
        border: 1px solid #F7675D;
        &:hover {
          &:not([disabled]) {
            background-color: #DA3025;
            border: 1px solid #DA3025;
          }
          color: #fff;
          transition: 0.3s all ease;
        }
      `
    } else {
      css += `
        color: #4D96D1;
        background-color: #fff;
        border: 1px solid #4D96D1;
        &:hover {
          &:not([disabled]) {
            background-color: #4D96D1;
            border: 1px solid #4D96D1;
          }
          color: #fff;
          transition: 0.3s all ease;
        }
      `
    }
    if (btnSize === 'sm') {
      css += `
        font-size: 14px;
        line-height: 19px;
        border-radius: 4px;
        padding: 8px 20px 6px;
      `
    } else if (btnSize === 'lg') {
      css += `
        font-size: 16px;
        line-height: 22px;
        border-radius: 4px;
        padding: 12px 40px;
      `
    } else {
      css += `
        font-size: 14px;
        line-height: 19px;
        border-radius: 4px;
        padding: 11px 30px 10px;
      `
    }

    return css
  }
 }
 margin: 0 3px;
 cursor: pointer;
 box-shadow: none;
 transition: 0.3s all ease;
 font-family: 'Open Sans', sans-serif;
 &:disabled {
   color: #aaa;
   cursor: default;
   border: 1px solid #dadada;
   background-color: #DADADA;
 }
`