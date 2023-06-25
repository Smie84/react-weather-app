import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rustenburg" />
        <footer>
          <p>
            This website was coded by Simiso Sesedza and it is{" "}
            <a
              href="https://github.com/Smie84/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://hilarious-buttercream-59d551.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
