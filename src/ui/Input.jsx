
export default function Input({ type, placeholder, name, id, className, value, handleChange }) {
  return (
    <>
      <input type={type} value={value} name={name} id={id} placeholder={placeholder} className={className} onChange={(e) => { handleChange(e) }} />
    </>
  )
}
