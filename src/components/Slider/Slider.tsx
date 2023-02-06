import "./slider.scss";
import { SliderItem } from "../SliderItem/SliderItem";
export const Slider = () => {
  return (
    <div className="slider-content">
      <SliderItem />
      <ul className="slider__dots">
        <li className="slider__dots__item"></li>
        <li className="slider__dots__item"></li>
        <li className="slider__dots__item"></li>
        <li className="slider__dots__item"></li>
        <li className="slider__dots__item"></li>
      </ul>
    </div>
  );
};
export default Slider;
