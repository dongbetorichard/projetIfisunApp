import {createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';

import Inscription from '../screens/Inscription';
import Connexion from '../screens/Connexion';
import Menu from '../screens/Menu';
import Signaler from '../screens/Signaler';
import ProfilUtilisateur from '../screens/profilUtilisateur';
import Succes from '../screens/Succes';
import Membres from '../screens/Membres';
import Assistance from '../screens/Assistance';
import Developpement from '../screens/Developpement';
import Temoignage from '../screens/Temoignage';





const createStackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
        Inscription:{screen:Inscription},
        Connexion:{screen:Connexion},
        Menu:{screen:Menu},
        Signaler:{screen:Signaler},
        profilUtilisateur:{screen:ProfilUtilisateur},
        Membres:{screen:Membres},
        Succes:{screen:Succes},
        Assistance:{screen:Assistance},
        Developpement:{screen:Developpement},
        Temoignage:{screen:Temoignage},

    
},
{
   defaultNavigationOptions : createStackNavigatorOptions 
}
);

export default createAppContainer(AppNavigator);
  