import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/RootStack';
import { TabNavigatorParamList } from 'src/navigation/TabNavigator';

type TabScreenNavigationProp = NavigationProp<TabNavigatorParamList, keyof TabNavigatorParamList, 'root'>;

export const getRootFromTabNavigation = (navigation: TabScreenNavigationProp) => {
  return navigation.getParent<NavigationProp<RootStackParamList>>('root');
};
