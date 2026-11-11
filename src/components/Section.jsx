export default function Section({ id, label, title, children }) {
  return (
    <section className="section reveal" id={id}>
      <div className="container">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
