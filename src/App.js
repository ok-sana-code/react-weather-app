import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div>
        <Weather defaultCity="Lviv"/>
        <footer>
          This project was coded by Oksana Shvets and is{" "}
          <a
            href="https://github.com/ok-sana-code/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://delightful-chebakia-49d210.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
