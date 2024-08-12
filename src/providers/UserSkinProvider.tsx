'use client'

import { ThemeColors } from '@/lib/utils';
import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

type ThemeTypes = 'light' | 'dark' | 'custom'
export interface UserSkinContextType {
  customName: string;
  setCustomName: (name: string) => void;
  customLogo: string;
  setCustomLogo: (logo: string) => void;
  customColorTheme: ThemeColors;
  setCustomColorTheme: (colorTheme: ThemeColors) => void;

  currentTheme: ThemeTypes;
  setCurrentTheme: (currentTheme: ThemeTypes) => void;
}

const UserSkinContext = createContext<UserSkinContextType | undefined>(undefined);

export const UserSkinProvider = ({ children }: PropsWithChildren) => {
  const [customName, setCustomName] = useState('')
  const [customLogo, setCustomLogo] = useState('')
  const [customColorTheme, setCustomColorTheme] = useState<ThemeColors>({})
  // 
  const [currentTheme, setCurrentTheme] = useState<ThemeTypes>('light')

  return (
    <UserSkinContext.Provider value={{
      customName,
      setCustomName,
      customLogo,
      setCustomLogo,
      customColorTheme,
      setCustomColorTheme,

      currentTheme,
      setCurrentTheme,
    }}>
      {children}
    </UserSkinContext.Provider>
  );
};

export const useUserSkin = () => {
  const context = useContext(UserSkinContext);
  if (context === undefined) {
    throw new Error('useUserSkin must be used within a UserSkinProvider');
  }
  return context;
};
