'use client';

import React from 'react';
import styles from './LanguageModal.module.css';
import { useLanguage } from '@/context/LanguageContext';

const LANGUAGES = [
    { code: 'en', label: 'English - EN' },
    { code: 'hi', label: 'हिन्दी - HI' },
    { code: 'ta', label: 'தமிழ் - TA' },
    { code: 'te', label: 'తెలుగు - TE' },
    { code: 'kn', label: 'ಕನ್ನಡ - KN' },
    { code: 'ml', label: 'മലയാളം - ML' },
    { code: 'bn', label: 'বাংলা - BN' },
    { code: 'mr', label: 'मराठी - MR' }
];

export default function LanguageModal({ isOpen, onClose }) {
    const { language, changeLanguage } = useLanguage();

    if (!isOpen) return null;

    const handleLanguageSelect = (langCode) => {
        changeLanguage(langCode);
        // Optional: close modal on select, or let user close it manually
        // onClose(); 
        // User screenshot shows radio buttons, implying selection first then maybe close. 
        // Or it acts as immediate selection. Let's keep it immediate for now.
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.title}>Change Language</div>

                <div className={styles.languageList}>
                    {LANGUAGES.map((lang) => (
                        <div
                            key={lang.code}
                            className={`${styles.languageOption} ${language === lang.code ? styles.selected : ''}`}
                            onClick={() => handleLanguageSelect(lang.code)}
                        >
                            <div className={styles.radioCircle}>
                                <div className={styles.innerCircle}></div>
                            </div>
                            <span className={styles.label}>{lang.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
