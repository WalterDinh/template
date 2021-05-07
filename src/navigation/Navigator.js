import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import App from "../App";
import Splash from "../screen/Splash";
import Home from "../screen/Home";
import ChooseType from "../screen/ChooseType";
import ListPokemon from "../screen/ListPokemon";
import SearchPokemon from "../screen/SearchPokemon";
import PokemonInfo from "../screen/PokemonInfo";
const MaintNavigation = createStackNavigator(
  {
    Home,
    SearchPokemon,
    ChooseType,
    ListPokemon,
    PokemonInfo
  }
);
const Switch = createSwitchNavigator(
  {
    Splash,
    PokemonInfo,
    MaintNavigation
  },
  {
    initialRouteName: "Splash",
    headerMode: 'none'
  }
);
export default createAppContainer(Switch);
