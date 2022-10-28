import * as React from 'react'

export interface ICardContainerProps extends React.PropsWithChildren {}

const CardContainer: React.FC<ICardContainerProps> = ({ children }) => {
  return <div>{children}</div>
}

export default CardContainer
