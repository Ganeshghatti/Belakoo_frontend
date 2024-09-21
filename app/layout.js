import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function RootLayout({ children }) {
  return (
    <SafeAreaProvider>
      {children}
      <Toast />
    </SafeAreaProvider>
  );
}