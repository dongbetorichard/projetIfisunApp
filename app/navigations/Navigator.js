import {createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';

import Inscription from '../screens/Inscription';
import Connexion from '../screens/Connexion';
import Menu from '../screens/Menu';
import Signaler from '../screens/Signaler';
import Profil from '../screens/Profil';
import Succes from '../screens/Succes';
import Membres from '../screens/Membres';
import Assistance from '../screens/Assistance';
import Developpement from '../screens/Developpement';
import Temoignage from '../screens/Temoignage';
import Commissariats from '../screens/Commissariats';
import Plaintes from '../screens/Plaintes';






const createStackNavigatorOptions = {
    headerShown:true
}
const AppNavigator = createStackNavigator({

        Inscription:{screen:Inscription,
            navigationOptions: {
                title: 'Inscription'
              }},

        Connexion:{screen:Connexion,
            navigationOptions: {
                title: 'Connexion'
            }
        
        },

        Menu:{screen:Menu,
            navigationOptions: {
                title: 'Menu'
            }
        },

        Signaler:{screen:Signaler,
            navigationOptions: {
                title: 'Signaler'
            }
        },

        Profil:{screen:Profil,
            navigationOptions: {
                title: 'Profil'
            }
        },

        Membres:{screen:Membres,
            navigationOptions: {
                title: 'Membres'
            }
        },

        Succes:{screen:Succes,
            navigationOptions: {
                title: 'Succès'
            }
        },

        Assistance:{screen:Assistance,
            navigationOptions: {
                title: 'Assistance'
            }
        },

        Developpement:{screen:Developpement,
            navigationOptions: {
                title: 'Développement'
            }
},
        Temoignage:{screen:Temoignage,
            navigationOptions: {
                title: 'Témoignages'
            }
},
        Commissariats:{screen:Commissariats,
            navigationOptions: {
                title: 'Commissariats'
            }
},
        Plaintes:{screen:Plaintes,
            navigationOptions: {
                title: 'Plaintes'
            }
},

    
},
{
   defaultNavigationOptions : createStackNavigatorOptions 
}
);

export default createAppContainer(AppNavigator);
  