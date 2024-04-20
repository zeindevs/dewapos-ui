import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { t } = useTranslation()
  return (
    <Layout>
      {/* HEADER */}
      <header className="bg-background py-20 text-center md:py-28">
        <div className="container flex max-w-5xl flex-col items-center justify-center gap-3 px-5 md:gap-5">
          <span className="rounded-full border border-primary bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-sm dark:bg-primary/40 dark:text-red-100">
            Multi-vendor Point of Sale (POS)
          </span>
          <h2 className="text-3xl font-bold capitalize md:text-4xl xl:text-5xl">{t('header.title')}</h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300 md:text-lg">{t('header.subtitle')}</p>
          <div className="mt-4 flex items-center gap-3">
            <Link to={`/register`}>
              <Button className="min-w-32">{t('register-now')}</Button>
            </Link>
          </div>
        </div>
      </header>
      <section className="bg-background py-12 text-center md:py-16" id="news">
        <div className="container flex max-w-7xl flex-col items-center justify-center gap-3 px-5 md:gap-5"></div>
      </section>
    </Layout>
  )
}
