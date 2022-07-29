import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div>
        <Weather />
        <footer>
          This project was coded by Oksana Shvets and is{" "}
          <a href="https://github.com/ok-sana-code/react-weather-app">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://delightful-chebakia-49d210.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
