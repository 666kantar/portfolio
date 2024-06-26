import Header from "../components/header/header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ECMAScript, ReactJS, HTML, CSS, JSON,
                Ajax
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Firebase</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
