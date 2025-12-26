import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { value: 'mr', label: 'मराठी', flag: '🇮🇳' },
  ];

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="h-4 w-4 text-current opacity-70" />
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className="h-8 w-auto min-w-[100px] border-none bg-transparent text-current text-sm font-medium focus:ring-0 focus:ring-offset-0 px-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-[120px]">
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value} className="text-sm">
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
