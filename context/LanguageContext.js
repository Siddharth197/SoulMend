'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Default to English
    const [language, setLanguage] = useState('en');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load saved language from local storage on mount
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
            setLanguage(savedLanguage);
        }
        setIsLoaded(true);
    }, []);

    const changeLanguage = (lang) => {
        if (lang === 'en' || lang === 'hi') {
            setLanguage(lang);
            localStorage.setItem('language', lang);
        }
    };

    const t = (key) => {
        const langData = translations[language];
        // If language data is missing, or key is missing in that language, fallback to English
        // If English key is also missing, return the key itself
        return (langData && langData[key]) || (translations['en'] && translations['en'][key]) || key;
    };

    const value = {
        language,
        changeLanguage,
        t,
        isLoaded
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
