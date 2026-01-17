import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';

import MainStack from './main-navigation';
import AuthStack from './auth-navigation';
import { supabase } from '../../lib/supabase';

const Navigator = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase?.auth?.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <Provider>
      <NavigationContainer>
        {session ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
};

export default Navigator;
