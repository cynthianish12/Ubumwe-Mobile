import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoadingScreen from '@/components/LoadingScreen'; 
import Auth from './auth/index'
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <Auth/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
