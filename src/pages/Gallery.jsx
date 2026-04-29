function Gallery() {
  const museums = [
    { id: 1, name: "Лувр", city: "Париж, Франція", description: "Найбільший музей світу", img: "https://mandry.club/wp-content/uploads/2020/05/parizh-luvr.jpg" },
    { id: 2, name: "Британський музей", city: "Лондон, Великобританія", description: "8 мільйонів експонатів", img: "https://ic.pics.livejournal.com/kolllak/14380162/4227135/4227135_original.jpg" },
    { id: 3, name: "Метрополітен", city: "Нью-Йорк, США", description: "Найбільший музей США", img: "https://r-xx.bstatic.com/xdata/images/xphoto/800x800/653842820.jpg?k=56c161ba4c90431e29784598a5483af86a58d5dbd8ae40d04625aa18fa50b0c2&o=https://static.tildacdn.com/tild3337-6531-4661-a332-356333643261/__1.jpg" },
    { id: 4, name: "Національний музей", city: "Китай", description: "У музеї зберігається понад 620 000 цінних експонатів", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/62684-Beijing-Tiananmen-Square_%2828609003992%29.jpg/960px-62684-Beijing-Tiananmen-Square_%2828609003992%29.jpg" },
    { id: 5, name: "Прадо", city: "Мадрид, Іспанія", description: "Найкраща іспанська живопис", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZq4CvBrTn_WaupF1_qBNypxzMi7pSmXgeyg&s" },
    { id: 6, name: "Уффіці", city: "Флоренція, Італія", description: "Скарби епохи Відродження", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLxEGIDCyVLqkqCKV9C2kRM22Zdxk6Q1Ztw&s 0" },
    { id: 7, name: "Ватиканські музеї", city: "Ватикан", description: "Сікстинська капела", img: "https://romegid.com/wp-content/uploads/2019/08/vatikan-min-732x500.jpg" },
    { id: 8, name: "Рейксмюсеум", city: "Амстердам, Нідерланди", description: "Рембрандт і Вермер", img: "https://mywowo.net/media/images/cache/amsterdam_rijkmuseum_01_introduzione_jpg_1200_630_cover_85.jpg" },
    { id: 9, name: "Музей Орсе", city: "Париж, Франція", description: "Імпресіонізм і модернізм", img: "https://paradis.voyage/wp-content/uploads/2023/10/foto4-scaled.jpg" },
    { id: 10, name: "Національний музей Токіо", city: "Токіо, Японія", description: "Японське мистецтво і культура", img: "https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/national-tokyo-museum_optimized.jpg" },
  ]

  return (
    <main className="container my-5">
      <h1 className="mb-4">🖼️ Галерея музеїв</h1>
      <div className="row">
        {museums.map(museum => (
          <div className="col-md-4 mb-4" key={museum.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={museum.img}
                alt={museum.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{museum.name}</h5>
                <p className="card-text text-muted">{museum.city}</p>
                <p className="card-text">{museum.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Gallery