import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div>
        <Weather defaultCity="Lviv" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/oksana-shvets-548086244/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FBTUHgVcQCuoq0g8k4QJ8Q%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oksana Shvets
          </a>{" "}
          and is{" "}
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
