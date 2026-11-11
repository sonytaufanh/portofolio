export default function Section({ id, index, label, title, desc, children }) {
  return (
    <section className="section reveal" id={id}>
      <div className="container">
        <header className="sec-head">
          <span className="mono">
            <span className="idx">{index}</span>
            {label}
          </span>
          <h2 className="sec-title">{title}</h2>
          {desc && <p className="sec-desc">{desc}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
