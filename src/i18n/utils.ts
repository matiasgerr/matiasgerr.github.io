import { Labels } from './ui';

const defaultLang = 'es';

export function useTranslations(lang: keyof typeof Labels) {
  return function t(path: string): string {
    const keys = path.split(".");
    let value: any = Labels[lang];
    let fallback: any = Labels[defaultLang];

    for (const key of keys) {
      value = value?.[key];
      fallback = fallback?.[key];
    }

    return value ?? fallback ?? path;
  };
}
