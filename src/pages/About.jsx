function About() {
  return (
    <main className="container my-5">
      <h1 className="mb-4">Про сайт</h1>
      <div className="row">
        <div className="col-md-8">
          <p>
            Цей інформаційний портал присвячений найвідомішим музеям світу. 
            Тут ви знайдете актуальні новини, галерею фотографій та корисну 
            інформацію про найвизначніші культурні заклади планети.
          </p>
          <p>
            Наша мета — популяризувати культуру та мистецтво, надаючи 
            відвідувачам зручний доступ до інформації про світові музеї.
          </p>
          <h4 className="mt-4">Що є на сайті:</h4>
          <ul>
            <li>Актуальні новини зі світу музеїв</li>
            <li>Галерея найвідоміших експонатів</li>
            <li>Інформація про музеї з усього світу</li>
            <li>Контактна інформація</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white">
            <div className="card-body text-center">
              <h1>🏛️</h1>
              <h5>Музеї Світу</h5>
              <p className="text-secondary">Інформаційний портал</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About