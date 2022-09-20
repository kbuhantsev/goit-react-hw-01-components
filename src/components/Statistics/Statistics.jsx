import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {!!title ? <h2 className={css.title}>{title}</h2> : ''}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
