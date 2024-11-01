import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-1 rounded-md ${i18n.language === 'en' ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}
            >
                English
            </button>
            <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-3 py-1 rounded-md ${i18n.language === 'fr' ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}
            >
                French
            </button>
        </div>
    );
};

export default LanguageSwitcher;