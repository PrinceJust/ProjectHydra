import { StyledActionButton } from './index.styled'

import { ActionButtonsProps } from './index.interfaces'

const ActionButton = ({ text, click, ...rest }: ActionButtonsProps): JSX.Element => {
  const {disabled = false, btnSize = 'md', variant = 'default'} = rest
  const clickProps = disabled ? {} : {onClick : click}

  return (
    <>
      <StyledActionButton variant={variant} btnSize={btnSize} {...clickProps} disabled={disabled}>
        {text}
      </StyledActionButton>
    </>
  )
}

export default ActionButton