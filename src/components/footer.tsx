import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

function FooterLink({
  children,
  href = '#',
  className = '',
}: React.PropsWithChildren & { href: string; className?: string }) {
  return (
    <a
      href={href}
      className={cn('text-muted-foreground hover:text-zinc-600 hover:underline dark:hover:text-zinc-300', className)}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-background">
      <div className="container flex max-w-7xl flex-col gap-10 px-5 py-8 md:flex-row md:py-12">
        <div className="flex max-w-[320px] flex-col gap-3">
          <h6 className="text-2xl font-medium">
            Dewa<span className="font-bold text-primary">POS</span>
          </h6>
          <p className="text-[15px] text-zinc-700 dark:text-zinc-300">{t('site.description')}</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 xl:grid-cols-3">
          <div>
            <h6 className="font-medium uppercase">{t('footer.company')}</h6>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <FooterLink href="#">{t('footer.about-us')}</FooterLink>
              </li>
              <li>
                <FooterLink href="#">{t('footer.careers')}</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium uppercase">Resources</h6>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <FooterLink href="#">{t('footer.blog')}</FooterLink>
              </li>
              <li>
                <FooterLink href="#">{t('footer.download')}</FooterLink>
              </li>
              <li>
                <FooterLink href="#">{t('footer.help-support')}</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium uppercase">Social Media</h6>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <FooterLink href="#">LinkedIn</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Instagram</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Twitter</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex max-w-7xl flex-col items-center justify-between gap-5 border-t px-5 py-3 md:flex-row">
        <small className="text-center text-sm text-zinc-700 dark:text-zinc-300">
          Copyright &copy; {new Date().getFullYear()} {import.meta.env.VITE_APP_TITLE}. {t('footer.copyright')}
        </small>
        <ul className="flex items-center divide-x text-sm">
          <li>
            <FooterLink href="#" className="p-3">
              {t('footer.terms-and-conditions')}
            </FooterLink>
          </li>
          <li>
            <FooterLink href="#" className="p-3">
              {t('footer.privacy-and-policy')}
            </FooterLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
