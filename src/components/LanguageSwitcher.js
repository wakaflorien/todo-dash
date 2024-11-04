import {
  CheckIcon,
  ChevronDownIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-between w-full px-4 py-2 text-xs font-medium ${props.currentTheme === "light" ? "bg-content-bg border text-secondary" : "bg-primary/20 text-white"} rounded-md  focus:outline-none focus:ring-none`}
      >
        <div className="flex items-center">
          <GlobeAmericasIcon className="nav-icon mr-2 text-gray-500" />
          <span className="mr-1">{selectedLanguage.flag}</span>
          <span>{selectedLanguage.name}</span>
        </div>
        <ChevronDownIcon
          className={`nav-icon ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 origin-top-right z-40 ${props.currentTheme === "light" ? "bg-content-bg" : "bg-primary/20 text-white"} rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  handleLanguageChange(language.code);
                  i18n.changeLanguage(language.code);
                }}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm text-secondary ${props.currentTheme === "light" ? "hover:bg-gray-100 hover:text-tertiary" : "" }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLang === language.code && (
                  <CheckIcon className="w-4 h-4 text-tertiary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
