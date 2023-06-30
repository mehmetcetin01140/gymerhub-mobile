import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import * as RootNavigation from '../helpers/navigation/RootNavigation';
import {firebaseErrorMapper} from '../helpers/firebase/FirebaseErrorMapper';
import {
  ALERT_TYPE,
  Toast,
} from 'react-native-alert-notification';
interface AuthContextType {
  user: FirebaseAuthTypes.User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async (email: string, password: string) => {},
  signOut: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Hoşgeldiniz',
        textBody: 'Başarıyla giriş yaptınız.',
        autoClose: 2000,
      });
      RootNavigation.navigate('MemberProfile');
    } catch (error: any) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Hata',
        textBody: firebaseErrorMapper(error.code),
        autoClose: 2000,
      });
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  const authContextValue: AuthContextType = {
    user,
    signIn,
    signOut,
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
