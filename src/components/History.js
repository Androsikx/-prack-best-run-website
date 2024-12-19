import React from "react";
import "./History.css";
import Chart from "./Chart";

function History() {
  return (
    <section id="history" className="history">
      <h2 data-aos="fade-up">Історія Best-Run Consulting</h2>
      <p data-aos="fade-up">
        У 2014 році усе починалося з маленького офісу та трьох працівників. За 8 років компанія зробила разючий стрибок у розвитку й тепер розміщується у просторому сучасному офісі та має понад 20 працівників.
      </p>
      <p data-aos="fade-up">
        Best-Run Consulting — це скрупульозне виконання поставлених цілей, відповідальність у роботі, рішучість, креативність та компромісність.
      </p>
      <ul data-aos="fade-up">
        <li><strong>2016:</strong> Золото рейтингу серед комерційних підприємств Києва.</li>
        <li><strong>2018:</strong> Перший іноземний клієнт — McDonald Paper (США).</li>
        <li><strong>2019:</strong> Партнерство з ЄБРР.</li>
        <li><strong>2021:</strong> Створення add-on модулів для SAP Business One.</li>
        <li><strong>2022:</strong> Офіційне партнерство з SAP SE.</li>
      </ul>
      <div className="chart-container" data-aos="fade-up">
        <Chart />
      </div>
    </section>
  );
}

export default History;
