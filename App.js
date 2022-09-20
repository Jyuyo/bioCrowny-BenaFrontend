import { React, useEffect, useMemo, useState } from 'react';
import { Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/Auth';
import AuthContext from './src/context/AuthContext';
import AppNavigation from './src/components/Navigation/AppNavigation';
import { removeTokenApi, setTokenApi } from './src/components/Auth/Token';
import { WishlistContext } from './src/context/WishlistContext';

export default function App() {
  const [auth, setAuth] = useState(undefined);
  useEffect(() => {
    setAuth(null);

  }, []);

  const login = (user) => {
    console.log("LOGIN")
    console.log(user);
    setTokenApi(user);
    setAuth(user);
  }

  const logout = () => {
    setAuth(null);
    removeTokenApi();
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  const [wishlist, setWishlist] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <WishlistContext.Provider value={{wishlist, setWishlist, shoppingCart, setShoppingCart}}>
        <PaperProvider>
          {auth ? <AppNavigation /> : <AuthScreen login={login} />}
        </PaperProvider>
      </WishlistContext.Provider>
    </AuthContext.Provider>

  );
}
