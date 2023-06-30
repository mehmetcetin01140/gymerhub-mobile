import auth from '@react-native-firebase/auth';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {firebaseErrorMapper} from '../helpers/firebase/FirebaseErrorMapper';
import * as RootNavigation from '../helpers/navigation/RootNavigation';
export async function createUserWithEmailAndPassword(
  email: string,
  password: string,
) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Hoşgeldiniz',
      textBody: 'Başarıyla üye oldunuz.',
      autoClose: 2000,
    });
    RootNavigation.navigate('LoginRegister', {
      currentRenderedComponent: 'Login',
    });
    return user;
  } catch (error: any) {
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Hata',
      textBody: firebaseErrorMapper(error.code),
      autoClose: 2000,
    });
  }
}
