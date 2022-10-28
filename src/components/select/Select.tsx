import { useRef, useState } from 'react'
import { useOnClickOutside } from '../../misc/hooks'
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
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  const handleSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelected(e.currentTarget.innerHTML)
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref} tabIndex={0} className={styles.container}>
      <span className={styles.value}>{selected ? selected : 'Select..'}</span>
      <button
        className={styles['clear-button']}
        onClick={() => setSelected(null)}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles['caret-btn']}
      >
        <div className={`${styles.caret} ${isOpen && styles.open}`}></div>
      </button>
      <ul className={`${styles.options} ${isOpen && styles.show}`}>
        {options.map((option) => (
          <li
            key={option.label}
            className={styles.option}
            onClick={handleSelect}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
