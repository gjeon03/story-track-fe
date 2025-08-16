"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getLanguageConfig, LanguageConfig } from "@/utils/language-prompts";

interface LanguageContextType {
  voiceLanguageIndex: number;
  blogLanguageIndex: number;
  voiceLanguageConfig: LanguageConfig;
  blogLanguageConfig: LanguageConfig;
  setVoiceLanguageIndex: (index: number) => void;
  setBlogLanguageIndex: (index: number) => void;
  getPrompt: (promptType: keyof LanguageConfig['prompts'], variables?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [voiceLanguageIndex, setVoiceLanguageIndex] = useState<number>(0); // 기본값: 한국어
  const [blogLanguageIndex, setBlogLanguageIndex] = useState<number>(0); // 기본값: 한국어

  // localStorage에서 언어 설정 로드
  useEffect(() => {
    const savedVoiceLanguage = localStorage.getItem('voiceToTextLanguage');
    const savedBlogLanguage = localStorage.getItem('blogGenerationLanguage');
    
    if (savedVoiceLanguage !== null) {
      setVoiceLanguageIndex(parseInt(savedVoiceLanguage));
    }
    if (savedBlogLanguage !== null) {
      setBlogLanguageIndex(parseInt(savedBlogLanguage));
    }
  }, []);

  const voiceLanguageConfig = getLanguageConfig(voiceLanguageIndex);
  const blogLanguageConfig = getLanguageConfig(blogLanguageIndex);

  const getPrompt = (promptType: keyof LanguageConfig['prompts'], variables: Record<string, string> = {}): string => {
    let prompt = blogLanguageConfig.prompts[promptType];
    
    // 변수 치환
    Object.entries(variables).forEach(([key, value]) => {
      prompt = prompt.replace(new RegExp(`{${key}}`, 'g'), value);
    });
    
    return prompt;
  };

  const value = {
    voiceLanguageIndex,
    blogLanguageIndex,
    voiceLanguageConfig,
    blogLanguageConfig,
    setVoiceLanguageIndex,
    setBlogLanguageIndex,
    getPrompt,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};