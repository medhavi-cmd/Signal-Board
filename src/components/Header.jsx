function Header({ total, openCount, highPriorityCount, averageScore }) {
  return (
    <header className="surface hero">
      <div className="hero__top">
        <div>
          <span className="hero__eyebrow">Dashboard</span>
          <h1 className="hero__title">Signal Board</h1>
          <p className="hero__subtitle">
            Track incoming signals, focus on the highest-priority reviews, and keep the queue moving with a cleaner,
            more production-ready workflow.
          </p>
        </div>
      </div>

      <div className="hero__stats">
        <div className="stat-card">
          <span className="stat-card__label">Total signals</span>
          <div className="stat-card__value">{total}</div>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Open</span>
          <div className="stat-card__value">{openCount}</div>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">High priority</span>
          <div className="stat-card__value">{highPriorityCount}</div>
          <p className="state-card__copy">Average score {averageScore}</p>
        </div>
      </div>
    </header>
  )
}

export default Header