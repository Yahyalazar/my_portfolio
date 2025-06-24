import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Footer } from '@/components/footer';
import {getLangDir} from 'rtl-detect';
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  const direction = getLangDir(locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}