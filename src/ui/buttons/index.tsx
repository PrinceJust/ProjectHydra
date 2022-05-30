import { ActionButtonsProps } from './index.interfaces'
import { StyledActionButton } from './index.styled'

const ActionButton = ({ text, click, ...rest }: ActionButtonsProps): JSX.Element => {
  const {disabled = false, sizes = 'md', variant = 'default'} = rest
  const clickProps = disabled ? {} : {onClick : click}

  return (
    <>
      <StyledActionButton variant={variant} sizes={sizes} {...clickProps} disabled={disabled}>
        {text}
      </StyledActionButton>
    </>
  )
}

export default ActionButton