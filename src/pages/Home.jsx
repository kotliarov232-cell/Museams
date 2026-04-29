function Home() {
  const news = [
    { id: 1, title: "Лувр відкрив нову виставку єгипетських артефактів", date: "10.04.2025" },
    { id: 2, title: "Британський музей реставрує унікальні експонати", date: "08.04.2025" },
    { id: 3, title: "Метрополітен-музей придбав картину за $50 млн", date: "06.04.2025" },
    { id: 4, title: "Національний музей Китаю організував виставку сучасного китайського мистецтва", date: "20.03.2025" },
    { id: 5, title: "Прадо відсвяткував 200 років з дня заснування", date: "02.04.2025" },
    { id: 6, title: "Уффіці представив відреставровану картину Боттічеллі", date: "30.03.2025" },
    { id: 7, title: "Ватиканські музеї побили рекорд відвідуваності", date: "28.03.2025" },
    { id: 8, title: "Рейксмюсеум відкрив виставку Золотого віку", date: "25.03.2025" },
    { id: 9, title: "Музей Прадо та Лувр підписали угоду про співпрацю", date: "22.03.2025" },
    { id: 10, title: "Національний музей Токіо представив самурайські обладунки", date: "20.03.2025" },
  ]

  return (
    <main>
      {/* Слайдер */}
      <div id="museumSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#museumSlider" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#museumSlider" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#museumSlider" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.rbc.ua/static/img/5/6/565337688_1333950085065558_9222303464832975462_n_de3df2ebd795eff4783ef17eaf50c4c1_1300x820.jpg"
              alt="Лувр"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
              <h2>🏛️ Лувр</h2>
              <p>Найбільший музей світу, Париж, Франція</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/British_Museum_from_NE_2.JPG"
              className="d-block w-100"
              alt="Британський музей"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
              <h2>🎭 Британський музей</h2>
              <p>Лондон, Великобританія</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static.tildacdn.com/tild3337-6531-4661-a332-356333643261/__1.jpg"
              className="d-block w-100"
              alt="Метрополітен"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
              <h2>🗽 Метрополітен</h2>
              <p>Нью-Йорк, США</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#museumSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#museumSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Новини */}
      <div className="container my-5">
        <h2 className="mb-4">📰 Головні новини</h2>
        <div className="row">
          {news.map(item => (
            <div className="col-md-6 mb-3" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text text-muted small">📅 {item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home