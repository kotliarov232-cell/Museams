function Contacts() {
  return (
    <main className="container my-5">
      <h1 className="mb-4">📬 Контакти</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Зв'яжіться з нами</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">📧 Email: kotliarov232@gmail.com</li>
                <li className="mb-2">📞 Телефон: +48 739 288 482</li>
                <li className="mb-2">📍 Адреса: м. Olawa, Chrobrego 80/15</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body p-0">
             <div className="ratio ratio-4x3">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.4577826491762!2d17.302512491059513!3d50.94533598459733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47102774d25a85e5%3A0x6b65bc375d3c8d24!2sBoles%C5%82awa%20Chrobrego%2080%2C%2055-200%20O%C5%82awa!5e0!3m2!1suk!2spl!4v1777483558620!5m2!1suk!2spl"
                 width="600"
                 height="450"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Карта"
               />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacts