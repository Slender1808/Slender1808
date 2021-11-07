import Image from "next/image";

export default function Contato() {
  const contato = {
    endereco: "Vila São João, Torres - RS - CEP: 9560-000",
    tel: "51 99818-9117",
    email: "jadson.g-matos@outlook.com",
    name: "Jadson Goulart de Matos",
    map: {
      link: "https://goo.gl/maps/bKEognZdazbGPyes7",
      img: "https://maps.google.com/maps?q=Vila%20S%C3%A3o%20Jo%C3%A3o%20Torres,%20RS,%2095560-000&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  };

  return (
    <section
      className="col-12 shadow rounded-3 my-3 p-5 align-items-center "
      id="contato"
    >
      <h2>Contato</h2>
      <div className="d-flex align-items-center row">
        <div className="d-block col-md-6 ">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a className="text-decoration-none link-dark" href={contato.link}>
                Nome: {contato.name}
              </a>
            </li>
            <li className="list-group-item">
              <a
                className="text-decoration-none link-dark"
                href={contato.map.link}
              >
                Endereço: {contato.endereco}
              </a>
            </li>
            <li className="list-group-item">
              <a
                className="text-decoration-none link-dark"
                href={"tel:+55" + contato.tel}
              >
                Telefone: {contato.tel}
              </a>
            </li>
            <li className="list-group-item">
              <a
                className="text-decoration-none link-dark"
                href={"mailto:" + contato.email}
              >
                Email: {contato.email}
              </a>
            </li>
          </ul>
          <div className="d-flex py-2 flex-column d-print-none justify-content-evenly">
            <div
              id="linkedin"
              className="badge-base LI-profile-badge"
              data-locale="pt_BR"
              data-size="large"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="jadson-g-matos"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link shadow-lg w-100"
                href="https://br.linkedin.com/in/jadson-g-matos?trk=profile-badge"
              ></a>
            </div>
            <a
              href="/Profile.pdf"
              className="btn btn-primary my-3 col-5 mx-auto"
              type="button"
              download
            >
              Baixar curriculo
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column col-md-5 mx-auto">
          <iframe
            src={contato.map.img}
            className="w-100 mb-3 map"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
          ></iframe>
          <div className="align-self-center">
            <Image
              src="/qr.png"
              alt="qr code"
              layout="fixed"
              width="171"
              height="171"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
