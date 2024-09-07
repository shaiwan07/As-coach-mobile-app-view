import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import type { ParamListBase } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum Screens {
  WelcomeScreen = 'WelcomeScreen',
  RegistrationScreen = 'RegistrationScreen',
  LoginScreen = 'LoginScreen',
  SmsScreen = 'SmsScreen',
  LkScreen = 'LkScreen',
  ProfileScreen = 'ProfileScreen',
  ProfileEditScreen = 'ProfileEditScreen',
  ChangePasswordScreen = 'ChangePasswordScreen',
  NewChangePasswordScreen = 'NewChangePasswordScreen',
  AddClientScreen = 'AddClientScreen',
  DetailClient = 'DetailClient',
  PlanScreen = 'PlanScreen',
  DetailPlanScreen = 'DetailPlanScreen',
}

type Routes = Screens;

export type RoutesProps = NativeStackScreenProps<ParamListBase, Routes>;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();
