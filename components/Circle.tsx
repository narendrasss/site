import clsx from 'clsx'

export default function Circle({ radius, className }) {
  return (
    <div
      style={{ width: radius, height: radius }}
      className={clsx('absolute z-0 rounded-full', className)}
    />
  )
}
