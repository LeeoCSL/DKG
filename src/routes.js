import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './UI/Main';
import Sueca from './UI/Sueca/inicio';
import SuecaJogar from './UI/Sueca/jogando';
import SuecaRegras from './UI/Sueca/regras';
import SuecaRegra from './UI/Sueca/regra';
import Kings from './UI/KingsCup';
import Serio from './UI/Serio';

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Sueca,
        SuecaJogar,
        SuecaRegras,
        SuecaRegra,
        Kings,
        Serio
        })
);

export default Routes;