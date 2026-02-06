"use client";

import Link from "next/link";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";

// Social media icons
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/calculator360pro", icon: TwitterIcon },
  { name: "Facebook", href: "https://www.facebook.com/calculator360pro", icon: FacebookIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/calculator360pro", icon: LinkedInIcon },
  { name: "Pinterest", href: "https://www.pinterest.com/calculator360pro", icon: PinterestIcon },
  { name: "YouTube", href: "https://www.youtube.com/@calculator360pro", icon: YouTubeIcon },
];

const TR_CATEGORIES = [
  { name: "Finans", slug: "finans" },
  { name: "Sağlık", slug: "saglik" },
  { name: "Eğitim", slug: "egitim" },
  { name: "Matematik", slug: "matematik" },
  { name: "Tarih & Zaman", slug: "tarih-zaman" },
];

export function FooterTR() {
  const recentBlogPosts = getAllBlogPostsTR().slice(0, 5);

  return (
    <footer className="bg-[#1e293b] text-[#f1f5f9] mt-16">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Calculator360Pro</h3>
            <p className="text-[#94a3b8] text-sm mb-4">
              Calculator360Pro günlük ihtiyaçlarınız için ücretsiz ve doğru hesap makineleri sunar.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                  aria-label={`${social.name} sayfamızı takip edin`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>
                <Link href="/tr" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/tr/hesap-makineleri" className="hover:text-white transition-colors">
                  Hesap Makineleri
                </Link>
              </li>
              <li>
                <Link href="/tr/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tr/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kategoriler</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {TR_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/tr/hesap-makineleri/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Son Blog Yazıları</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {recentBlogPosts.length > 0 ? (
                recentBlogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/tr/blog/${post.slug}`}
                      className="hover:text-white transition-colors line-clamp-2"
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <Link href="/tr/blog" className="hover:text-white transition-colors">
                    Blog Yazıları
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>
                <Link href="/tr/gizlilik-politikasi" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/tr/kullanim-kosullari" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/tr/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 text-center text-sm text-[#94a3b8]">
          <p>© {new Date().getFullYear()} Calculator360Pro. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
