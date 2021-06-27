import "./styles/_app.scss";
import hero from "./assets/hero.png";
import rocket from "./assets/rocket.png";
import CountDown from "./components/CountDown";

const App = () => {
  return (
    <div className="app">
      <img className="rocket" src={rocket} alt="rocket" />
      <section className="header-text">
        <div className="title">
          <h1>Get your seat to Mars!</h1>
          <p>
            Earth is doomes, but don't worry! The last rocket is leaving for
            mars soon, so hurry up and book your flight!
          </p>
        </div>
        <img
          className="hero"
          src={hero}
          alt="astronaut attached to a rocket with the moon behind"
        />
      </section>
      <section className="countdowns">
        {[1, 2, 3].map((item) => (
          <CountDown key={item} index={item} />
        ))}
      </section>
    </div>
  );
};

export default App;
