import { Bg_url } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    
    <div>
        <div className="absolute -z-10">
        <img
          src={Bg_url}
          alt='logo'
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
};

export default GptSearch