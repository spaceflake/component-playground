import { useState } from 'react'
import styles from './select.module.css'

type SelectOption = {
  label: string
  value: any
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption
  onChange?: (value: SelectOption | undefined) => void
}

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles['clear-button']}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret} onClick={() => setIsOpen(!isOpen)}></div>
      <ul className={`${styles.options} ${isOpen && styles.show}`}>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
