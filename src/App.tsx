import "./ui/reset.scss";
import "./ui/main-template.scss";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
    </div>
  );
};
