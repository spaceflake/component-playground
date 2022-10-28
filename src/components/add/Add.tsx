import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Add = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3])
  const [parent] = useAutoAnimate<HTMLUListElement>()
  const add = () => setItems([...items, items.length + 1])
  const remove = () =>
    setItems((items) => items.filter((_, i) => i !== items.length - 1))

  return (
    <>
      <ul ref={parent}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={add}>Add number</button>
        <button onClick={remove}>Remove last</button>
      </div>
    </>
  )
}

export default Add
