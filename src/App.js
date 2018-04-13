
import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import About from './screens/about';
import AccuReminder from './screens/accu-reminder';
import AccuSearch from './screens/accu-search';
import BannerDetail from './screens/banner-detail';
import Home from './screens/home';
import InstantBuy from './screens/instant-buy';
import Products from './screens/products';
import Store from './screens/store';
import StoreDetail from './screens/store-detail';

import SideBar from './screens/sidebar';

const Drawer = DrawerNavigator(
  {
  Home: { screen: Home },
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#e91e63'
  },
  contentComponent: props => <SideBar {...props}/>
});

export const App = StackNavigator(
  {
    Drawer: { screen: Drawer },

    About : { screen: About },
    AccuReminder : { screen : AccuReminder},
    AccuSearch : { screen : AccuSearch},
    BannerDetail : { screen: BannerDetail },
    Home: { screen: Home },
    InstantBuy: { screen: InstantBuy },
    Products : { screen: Products },  
    Store : { screen: Store },  
    StoreDetail : { screen: StoreDetail },

  },
  {
    initialRouteName: 'Drawer',
    headerMode : 'none'
  }
);

export default App;