import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import ScreenKeys from './ScreenKeys';
import {Size} from '../../core/screenTools';
import Home from '../screens/indexTabs/home/Home';
import Task from '../screens/indexTabs/task/Task';
import Contract from '../screens/indexTabs/contract/Contract';
import BulletinBoard from '../screens/indexTabs/bulletinBoard/BulletinBoard';
import i18n from '../i18n';
import theme from '../theme';
import {
  icon_bulletin_board,
  icon_contract,
  icon_home,
  icon_task,
} from '../files/images/Images';
import {useSafeAreaInsets} from 'react-native-safe-area-context/src/SafeAreaContext';

interface TabType {
  name: ScreenKeys;
  labelName: string;
  component: React.ComponentType;
  icon: any;
}

const Tab = createBottomTabNavigator();

const IndexTabsRoute = observer(() => {
  /**
   * 图标大小
   */
  const iconSize = Size(22);

  const tabs: Array<TabType> = [
    {
      name: ScreenKeys.Home,
      labelName: i18n.Home,
      component: Home,
      icon: icon_home,
    },
    {
      name: ScreenKeys.Task,
      labelName: i18n.Task,
      component: Task,
      icon: icon_task,
    },
    {
      name: ScreenKeys.Contract,
      labelName: i18n.Contract,
      component: Contract,
      icon: icon_contract,
    },
    {
      name: ScreenKeys.BulletinBoard,
      labelName: i18n.BulletinBoard,
      component: BulletinBoard,
      icon: icon_bulletin_board,
    },
  ];

  const renderTab = (item: TabType, index: number) => {
    return (
      <Tab.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
          tabBarLabel: item.labelName,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={item.icon}
              style={{width: iconSize, height: iconSize, tintColor: color}}
            />
          ),
        }}
      />
    );
  };

  const edgeInsets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      //给tab设置padding的正确姿势
      safeAreaInsets={{
        bottom: edgeInsets.bottom + Platform.select({android: 10, ios: 0})!,
      }}
      initialRouteName={ScreenKeys.Home}
      screenOptions={{
        lazy: false,
        tabBarActiveTintColor: theme.textActiveColor,
        tabBarInactiveTintColor: theme.textInactiveColor,
        tabBarStyle: {
          backgroundColor: theme.bgDefaultColor,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: theme.textSize12,
        },
      }}
    >
      {tabs.map((item, index) => {
        return renderTab(item, index);
      })}
    </Tab.Navigator>
  );
});

export default IndexTabsRoute;
