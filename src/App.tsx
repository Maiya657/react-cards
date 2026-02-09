import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <h2 className="mb-4">Группа карточек</h2>
      <div className="row row-cols-3">
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
            <img src="https://picsum.photos/300/200" alt="Card picture" />
          </Card>
        </div>
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
          </Card>
        </div>
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
            <img src="https://picsum.photos/300/200" alt="Card picture" />
          </Card>
        </div>
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
          </Card>
        </div>
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
            <img src="https://picsum.photos/300/200" alt="Card picture" />
          </Card>
        </div>
        <div className="col mb-3">
          <Card
            title="Card title"
            text="Some quick example text to build
              on the card title and make up the
              bulk of the card&apos;s content."
            href="#"
            linkTitle="Go somewhere">
            <img src="https://picsum.photos/300/200" alt="Card picture" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App