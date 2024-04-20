import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'register-now': 'Register Now',
      'header.title': 'We help your business easily to sell and manage your products.',
      'header.subtitle': 'Customer happiness is one of the keys to a thriving business.',
      'footer.privacy-and-policy': 'Privacy and Policy',
      'footer.company': 'COMPANY',
      'footer.about-us': 'About Us',
      'footer.terms-and-conditions': 'Terms and Condition',
      'footer.product': 'Product',
      'footer.how-to-use': 'How to Use',
      'footer.download': 'Download',
      'footer.help-support': 'Help & Support',
      'footer.careers': 'Careers',
      'footer.blog': 'Blog',
      'footer.documentation': 'Documentation',
      'footer.copyright': 'All Right Reserved.',
      'site.description': 'Multi-vendor Point of Sale (POS) for various business needs.',
    },
  },
  id: {
    translation: {
      'register-now': 'Daftar Sekarang',
      'header.title': 'Kami membantu bisnis Anda dengan mudah untuk menjual dan mengelola produk Anda.',
      'header.subtitle': 'Kebahagiaan pelanggan adalah salah satu kunci untuk bisnis yang berkembang.',
      'footer.privacy-and-policy': 'Kebijakan Privasi',
      'footer.company': 'PERUSAHAAN',
      'footer.about-us': 'Tentang Kami',
      'footer.terms-and-conditions': 'Syarat dan ketentuan',
      'footer.product': 'Produk',
      'footer.how-to-use': 'Cara Penggunaan',
      'footer.download': 'Download',
      'footer.help-support': 'Help & Support',
      'footer.careers': 'Karir',
      'footer.blog': 'Blog',
      'footer.documentation': 'Dokumentasi',
      'footer.copyright': 'Hak Cipta Dilindungi Undang-Undang.',
      'site.description': 'Point of Sale (POS) multi vendor untuk berbagai kebutuhan bisnis.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
