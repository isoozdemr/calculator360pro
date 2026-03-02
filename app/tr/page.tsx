import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { getTRCategoriesForHomepage, TR_CALCULATOR_COUNT } from "@/lib/tr-calculators-nav";
import { TR_REHBERLER } from "@/lib/tr-rehberler";

export const metadata: Metadata = {
  title: "Ücretsiz Hesap Makinesi 2026 | Vergi, Maaş, Kredi, BES, Enflasyon",
  description: "2026 güncel vergi dilimleri, SGK kesintileri ve asgari ücretle anında hesaplayın! Ücretsiz vergi, maaş, kredi, BES devlet katkısı, enflasyon alım gücü, BMI ve 27 hesap makinesi. Hemen deneyin!",
  keywords: [
    "hesap makinesi",
    "online hesap makinesi",
    "vergi hesaplama 2026",
    "maaş hesaplama",
    "brüt net maaş hesaplama",
    "kredi hesaplama",
    "konut kredisi hesaplama",
    "emeklilik hesaplama",
    "BES devlet katkısı hesaplama",
    "enflasyon alım gücü hesaplama",
    "sgk prim hesaplama",
    "not ortalaması hesaplama",
    "gano hesaplama",
    "bmi hesaplama",
    "kalori hesaplama",
    "yüzde hesaplama",
    "yaş hesaplama",
    "türkiye hesap makinesi",
    "2026 vergi dilimleri",
    "asgari ücret 2026",
    "agi hesaplama",
    "birim çevirici",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr`,
    languages: {
      en: SITE_URL,
      tr: `${SITE_URL}/tr`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Ücretsiz Hesap Makinesi 2026 | Vergi, Maaş, Kredi, BES",
    description: "2026 güncel vergi, SGK, BES ve enflasyon hesaplama. 27 ücretsiz hesap makinesi. Hemen deneyin!",
    locale: "tr_TR",
    type: "website",
  },
};

const turkishCalculators = getTRCategoriesForHomepage();

const stats = [
  { value: "50.000+", label: "Aylık Hesaplama" },
  { value: `${TR_CALCULATOR_COUNT}`, label: "Farklı Hesap Makinesi" },
  { value: "2026", label: "Güncel Veriler" },
  { value: "%100", label: "Ücretsiz" },
];

const faqs = [
  {
    question: "2026 yılı vergi dilimleri nedir?",
    answer: "2026 yılı gelir vergisi dilimleri: 0-190.000 TL arası %15, 190.000-400.000 TL arası %20, 400.000-1.500.000 TL arası %27, 1.500.000-5.300.000 TL arası %35, 5.300.000 TL üzeri %40 oranında vergilendirilir.",
  },
  {
    question: "Brüt maaştan net maaş nasıl hesaplanır?",
    answer: "Brüt maaştan SGK işçi payı (%14), işsizlik sigortası (%1) ve gelir vergisi kesildikten sonra net maaş bulunur. AGİ (Asgari Geçim İndirimi) eklenerek nihai net maaş hesaplanır.",
  },
  {
    question: "KKDF ve BSMV nedir?",
    answer: "KKDF (Kaynak Kullanımını Destekleme Fonu) tüketici kredilerinde %15, BSMV (Banka ve Sigorta Muameleleri Vergisi) ise faiz üzerinden %10 oranında uygulanan yasal kesintilerdir.",
  },
  {
    question: "Emeklilik yaşı nasıl hesaplanır?",
    answer: "Emeklilik yaşı doğum yılınıza, cinsiyetinize ve işe başlama tarihinize göre değişir. 1999 öncesi, 1999-2008 arası ve 2008 sonrası işe başlayanlar için farklı tablolar uygulanır.",
  },
  {
    question: "Not ortalaması (GANO) nasıl hesaplanır?",
    answer: "GANO = (Her dersin notu × AKTS kredisi) toplamı / Toplam AKTS kredisi. Türk üniversitelerinde genellikle 4'lük not sistemi kullanılır.",
  },
];

export default function TurkeyHomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e293b] via-[#1e3a5f] to-[#334155] text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>2026 Güncel Veriler | Son Güncelleme: {DATA_VERSION.lastUpdatedDisplay}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Türkiye&apos;nin En Kapsamlı<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
                Online Hesap Makineleri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] mb-8 max-w-3xl mx-auto leading-relaxed">
              Vergi, maaş, kredi, emeklilik, BES devlet katkısı, enflasyon alım gücü, birim çevirici ve 
              <strong className="text-white"> {TR_CALCULATOR_COUNT} farklı hesap makinesi</strong>. 
              <strong className="text-white"> 2026 yılı güncel vergi dilimleri</strong>, SGK oranları ve 
              Türkiye düzenlemeleri ile <strong className="text-white">%100 doğru sonuçlar</strong> alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tr/hesap-makineleri"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Tüm Hesap Makineleri
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-lg"
              >
                Maaş Hesapla
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#2563eb]">{stat.value}</p>
                <p className="text-[#64748b] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Calculator Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              İhtiyacınıza Uygun Hesap Makinesi Seçin
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Türkiye&apos;deki vergi düzenlemeleri, SGK mevzuatı ve finansal hesaplamalar için 
              özel olarak geliştirilmiş profesyonel hesap makineleri.
            </p>
          </div>

          {turkishCalculators.map((category) => (
            <div key={category.slug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1e293b]">
                    {category.category}
                  </h2>
                  <p className="text-[#64748b] mt-1">{category.description}</p>
                </div>
                <Link
                  href={`/tr/hesap-makineleri/${category.slug}`}
                  className="hidden md:inline-flex items-center text-[#2563eb] hover:text-[#1d4ed8] font-medium"
                >
                  Tümünü Gör
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/tr/hesap-makineleri/${category.slug}/${calc.slug}`}
                    className="bg-white p-6 rounded-xl border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-xl transition-all group relative"
                  >
                    {calc.badge && (
                      <span className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full ${
                        calc.badge === "En Popüler" 
                          ? "bg-orange-100 text-orange-700"
                          : calc.badge === "Yeni"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {calc.badge}
                      </span>
                    )}
                    <div className="text-4xl mb-4">{calc.icon}</div>
                    <h3 className="text-lg font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{calc.description}</p>
                    <div className="mt-4 flex items-center text-[#2563eb] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Hesapla
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rehberler Section */}
      <section className="py-16 bg-white border-t border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
              Faydalı Rehberler
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Vergi takvimi, SGK emeklilik tablosu, kredi notu ve vergi indirimleri rehberleri ile 
              hesap makinelerimizi tamamlayın.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TR_REHBERLER.map((rehber) => (
              <Link
                key={rehber.slug}
                href={`/tr/rehberler/${rehber.slug}`}
                className="bg-[#f8fafc] p-6 rounded-xl border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2 transition-colors">
                  {rehber.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {rehber.description}
                </p>
                <span className="inline-flex items-center text-[#2563eb] text-sm font-medium mt-3">
                  Oku
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/tr/rehberler" className="text-[#2563eb] hover:underline font-medium">
              Tüm rehberler →
            </Link>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden Calculator360Pro?
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Türkiye&apos;nin en güvenilir online hesap makinesi platformu olarak, 
              doğruluk ve güncellik konusunda fark yaratıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">2026 Güncel Veriler</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Tüm hesap makineleri 2026 yılı vergi dilimleri, SGK oranları ve asgari ücret 
                verileri ile sürekli güncellenmektedir. Resmi Gazete yayınları takip edilmektedir.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Türkiye&apos;ye Özel</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                KKDF, BSMV, EYT, BES, AGİ, SGK prim kesintileri gibi yalnızca Türkiye&apos;ye 
                has düzenlemeler hesaplamalara dahil edilmiştir.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Gizlilik Öncelikli</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Girdiğiniz veriler sunucularımızda saklanmaz. Tüm hesaplamalar tarayıcınızda 
                yapılır. KVKK ve GDPR uyumlu gizlilik politikası.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">%100 Ücretsiz</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Tüm hesap makineleri tamamen ücretsizdir. Kayıt gerektirmez, kredi kartı 
                bilgisi istenmez. Sınırsız kullanım hakkı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Data Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
              2026 Yılı Güncel Veriler
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Hesaplamalarımızda kullanılan resmi veriler. Tüm bilgiler T.C. resmi kurumlarından 
              alınmakta ve düzenli olarak güncellenmektedir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                2026 Gelir Vergisi Dilimleri
              </h3>
              <ul className="space-y-2 text-sm text-[#64748b]">
                <li className="flex justify-between"><span>0 - 190.000 TL</span><span className="font-semibold text-[#1e293b]">%15</span></li>
                <li className="flex justify-between"><span>190.000 - 400.000 TL</span><span className="font-semibold text-[#1e293b]">%20</span></li>
                <li className="flex justify-between"><span>400.000 - 1.500.000 TL</span><span className="font-semibold text-[#1e293b]">%27</span></li>
                <li className="flex justify-between"><span>1.500.000 - 5.300.000 TL</span><span className="font-semibold text-[#1e293b]">%35</span></li>
                <li className="flex justify-between"><span>5.300.000 TL üzeri</span><span className="font-semibold text-[#1e293b]">%40</span></li>
              </ul>
            </div>
            
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-2xl">👷</span>
                2026 SGK Oranları
              </h3>
              <ul className="space-y-2 text-sm text-[#64748b]">
                <li className="flex justify-between"><span>SGK İşçi Payı</span><span className="font-semibold text-[#1e293b]">%14</span></li>
                <li className="flex justify-between"><span>SGK İşveren Payı</span><span className="font-semibold text-[#1e293b]">%20.5</span></li>
                <li className="flex justify-between"><span>İşsizlik Sigortası (İşçi)</span><span className="font-semibold text-[#1e293b]">%1</span></li>
                <li className="flex justify-between"><span>İşsizlik Sigortası (İşveren)</span><span className="font-semibold text-[#1e293b]">%2</span></li>
                <li className="flex justify-between"><span>Damga Vergisi</span><span className="font-semibold text-[#1e293b]">%0.759</span></li>
              </ul>
            </div>
            
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                2026 Diğer Veriler
              </h3>
              <ul className="space-y-2 text-sm text-[#64748b]">
                <li className="flex justify-between"><span>Asgari Ücret (Brüt)</span><span className="font-semibold text-[#1e293b]">33.030 TL</span></li>
                <li className="flex justify-between"><span>Asgari Ücret (Net)</span><span className="font-semibold text-[#1e293b]">28.075,50 TL</span></li>
                <li className="flex justify-between"><span>KKDF Oranı</span><span className="font-semibold text-[#1e293b]">%15</span></li>
                <li className="flex justify-between"><span>BSMV Oranı</span><span className="font-semibold text-[#1e293b]">%10</span></li>
                <li className="flex justify-between"><span>SGK Tavan</span><span className="font-semibold text-[#1e293b]">297.270 TL</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              3 kolay adımda doğru hesaplama sonuçlarına ulaşın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Hesap Makinesi Seçin</h3>
              <p className="text-[#64748b]">
                İhtiyacınıza uygun hesap makinesini{" "}
                <Link href="/tr/hesap-makineleri/finans" className="text-[#2563eb] hover:underline">finans</Link>,{" "}
                <Link href="/tr/hesap-makineleri/saglik" className="text-[#2563eb] hover:underline">sağlık</Link>,{" "}
                <Link href="/tr/hesap-makineleri/egitim" className="text-[#2563eb] hover:underline">eğitim</Link>,{" "}
                <Link href="/tr/hesap-makineleri/matematik" className="text-[#2563eb] hover:underline">matematik</Link> veya{" "}
                <Link href="/tr/hesap-makineleri/tarih-zaman" className="text-[#2563eb] hover:underline">tarih ve zaman</Link>{" "}
                kategorilerinden seçin.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Değerlerinizi Girin</h3>
              <p className="text-[#64748b]">
                Brüt maaş, kredi tutarı, yaş gibi gerekli bilgileri ilgili alanlara girin. 
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline"> Maaş</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline">vergi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline">BES</Link> veya{" "}
                <Link href="/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi" className="text-[#2563eb] hover:underline">enflasyon alım gücü</Link> hesaplarında tüm alanlar Türkçe ve anlaşılır şekilde etiketlenmiştir.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Sonuçları Alın</h3>
              <p className="text-[#64748b]">
                Anında detaylı sonuçları görüntüleyin. Vergi dökümü, aylık taksitler, 
                SGK kesintileri gibi tüm detaylar açıkça gösterilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-[#64748b]">
              Hesap makineleri ve hesaplama yöntemleri hakkında en çok sorulan sorular
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#f8fafc] rounded-lg p-6 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#1e293b] mb-2">{faq.question}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Resmi Veri Kaynakları
            </h3>
            <p className="text-sm text-[#64748b]">
              Hesaplamalarımızda kullanılan veriler aşağıdaki resmi kurumlardan alınmaktadır
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-5 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] font-medium">
              gib.gov.tr (Gelir İdaresi Başkanlığı)
            </span>
            <span className="bg-white px-5 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] font-medium">
              sgk.gov.tr (Sosyal Güvenlik Kurumu)
            </span>
            <span className="bg-white px-5 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] font-medium">
              csgb.gov.tr (Çalışma ve Sosyal Güvenlik Bakanlığı)
            </span>
            <span className="bg-white px-5 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] font-medium">
              tcmb.gov.tr (Türkiye Cumhuriyet Merkez Bankası)
            </span>
            <span className="bg-white px-5 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] font-medium">
              resmigazete.gov.tr (T.C. Resmi Gazete)
            </span>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Online Hesap Makinesi Nedir ve Neden Önemlidir?
            </h2>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Online hesap makineleri, karmaşık matematiksel ve finansal hesaplamaları saniyeler 
              içinde gerçekleştirmenizi sağlayan dijital araçlardır. Özellikle Türkiye&apos;deki 
              vergi mevzuatı, SGK düzenlemeleri ve finansal kurallar sürekli değiştiğinden, 
              güncel ve doğru hesaplama araçlarına sahip olmak kritik öneme sahiptir.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Calculator360Pro olarak, Türkiye&apos;ye özel {TR_CALCULATOR_COUNT} hesap makinesi sunuyoruz. 
              <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> Vergi hesaplama</Link>, 
              <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> maaş hesaplama</Link>, 
              <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> kredi hesaplama</Link>, 
              <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> emeklilik hesaplama</Link>, 
              <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> BES devlet katkısı</Link>, 
              <Link href="/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> enflasyon alım gücü</Link>, 
              birim çevirici ve daha fazlasını 2026 yılı güncel verileriyle sunuyoruz.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              2026 Yılında Vergi ve SGK Değişiklikleri
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              2026 yılı itibarıyla Türkiye&apos;de önemli vergi ve sosyal güvenlik değişiklikleri 
              yürürlüğe girmiştir. Gelir vergisi dilimleri yeniden düzenlenmiş, asgari ücret 
              güncellenmiş ve SGK tavan tutarı revize edilmiştir. Bu değişiklikler, çalışanların 
              net maaşlarını, işverenlerin maliyet hesaplarını ve emeklilik planlamalarını 
              doğrudan etkilemektedir.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Hesap makinelerimiz, bu güncel değişiklikleri anında yansıtarak size en doğru 
              sonuçları sunar. Örneğin, brüt maaşınızı girdiğinizde, SGK işçi payı (%14), 
              işsizlik sigortası (%1), gelir vergisi ve damga vergisi kesintileri otomatik 
              olarak hesaplanarak net maaşınız gösterilir.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Kredi Hesaplamalarında KKDF ve BSMV
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Türkiye&apos;de tüketici kredisi kullanırken, bankanın uyguladığı faiz oranının 
              yanı sıra yasal kesintiler de toplam maliyeti etkiler. KKDF (Kaynak Kullanımını 
              Destekleme Fonu) %15 ve BSMV (Banka ve Sigorta Muameleleri Vergisi) %10 oranında 
              uygulanmaktadır. Kredi hesap makinemiz, bu kesintileri de dahil ederek gerçek 
              toplam maliyeti hesaplar.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Emeklilik Planlaması ve SGK Hesaplamaları
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Emeklilik yaşı ve prim gün sayısı hesaplama, Türkiye&apos;de en çok merak edilen 
              konulardan biridir. 1999 öncesi, 1999-2008 arası ve 2008 sonrası işe başlayanlar 
              için farklı emeklilik koşulları geçerlidir. EYT (Emeklilikte Yaşa Takılanlar) 
              düzenlemesi ile birçok kişi erken emeklilik hakkı kazanmıştır.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Emeklilik hesap makinemiz, doğum yılınız, cinsiyetiniz ve işe başlama tarihinize 
              göre emeklilik yaşınızı ve gerekli prim gün sayısını hesaplar. Ayrıca BES 
              (Bireysel Emeklilik Sistemi) hesaplamaları ile toplam emeklilik birikiminizi 
              planlayabilirsiniz.
            </p>

            <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
              Eğitim ve Not Ortalaması Hesaplama
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Üniversite öğrencileri için GANO (Genel Ağırlıklı Not Ortalaması) hesaplama 
              önemli bir ihtiyaçtır. Türk üniversitelerinde genellikle 4&apos;lük not sistemi 
              kullanılır. Not ortalaması hesap makinemiz, AKTS kredilerini de dikkate alarak 
              doğru GANO hesaplaması yapar.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <p className="text-sm text-blue-800">
                <strong>Önemli Not:</strong> Hesap makinelerimiz bilgilendirme amaçlıdır. 
                Finansal, vergisel veya hukuki kararlar için mutlaka yetkili profesyonellere 
                (mali müşavir, avukat, SGK uzmanı vb.) danışınız.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hemen Hesaplamaya Başlayın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Türkiye&apos;nin en kapsamlı ve güncel hesap makineleri ile doğru sonuçlara 
            saniyeler içinde ulaşın. Ücretsiz, kayıt gerektirmez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Maaş Hesapla
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Vergi Hesapla
            </Link>
            <Link
              href="/tr/rehberler"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Rehberler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
