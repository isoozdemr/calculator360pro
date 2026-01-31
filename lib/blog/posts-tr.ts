export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export const blogPostsTR: BlogPost[] = [
  {
    slug: "2026-gelir-vergisi-dilimleri-hesaplama-rehberi",
    title: "2026 Gelir Vergisi Dilimleri ve Hesaplama Rehberi",
    description:
      "2026 yılı güncel gelir vergisi dilimleri, kümülatif vergi matrahı hesaplama ve efektif vergi oranı hakkında kapsamlı rehber. Vergi hesaplama örnekleri ve ipuçları.",
    content: `
# 2026 Gelir Vergisi Dilimleri ve Hesaplama Rehberi

Türkiye'de gelir vergisi, artan oranlı (kademeli) tarife sistemi ile hesaplanmaktadır. 2026 yılı için güncel vergi dilimleri ve hesaplama yöntemlerini bu rehberde bulabilirsiniz.

## 2026 Yılı Gelir Vergisi Dilimleri

2026 yılı gelir vergisi dilimleri şu şekildedir:

| Vergi Matrahı | Vergi Oranı |
|---------------|-------------|
| 0 - 110.000 TL | %15 |
| 110.001 - 230.000 TL | %20 |
| 230.001 - 870.000 TL | %27 |
| 870.001 - 3.000.000 TL | %35 |
| 3.000.001 TL ve üzeri | %40 |

## Kademeli Vergi Sistemi Nasıl Çalışır?

Kademeli vergi sistemi, gelirinizin her dilimine farklı oran uygulanması anlamına gelir. Tüm gelirinize tek bir yüksek oran uygulanmaz.

### Örnek Hesaplama: 500.000 TL Vergi Matrahı

Bir çalışanın yıllık vergi matrahı 500.000 TL ise:

1. **İlk 110.000 TL**: %15 = 16.500 TL
2. **110.001 - 230.000 TL arası (120.000 TL)**: %20 = 24.000 TL
3. **230.001 - 500.000 TL arası (270.000 TL)**: %27 = 72.900 TL

**Toplam Vergi**: 16.500 + 24.000 + 72.900 = **113.400 TL**

**Efektif Vergi Oranı**: 113.400 / 500.000 = **%22.68**

Gördüğünüz gibi, en yüksek dilim %27 olmasına rağmen, efektif vergi oranı %22.68'dir. Bu, kademeli sistemin adil yapısını gösterir.

## Kümülatif Vergi Matrahı Nedir?

Kümülatif vergi matrahı, yılın başından itibaren toplam vergilendirilecek gelirinizdir. Her ay maaşınız bu matraha eklenir ve vergi dilimi buna göre belirlenir.

### Neden Önemli?

- Yılın ilk aylarında düşük vergi diliminde olabilirsiniz
- Yıl ilerledikçe toplam matrahınız artar
- Üst vergi dilimlerine geçebilirsiniz
- Bu nedenle aynı brüt maaşla, yılın son aylarında net maaşınız düşebilir

## Vergi Matrahı Nasıl Hesaplanır?

Vergi matrahı = Brüt Gelir - SGK Kesintileri

SGK kesintileri:
- SGK İşçi Payı: %14
- İşsizlik Sigortası İşçi Payı: %1
- Toplam: %15

### Örnek: 50.000 TL Brüt Maaş

- SGK Kesintileri: 50.000 × 0.15 = 7.500 TL
- Vergi Matrahı: 50.000 - 7.500 = 42.500 TL
- Yıllık Matrah (12 ay): 42.500 × 12 = 510.000 TL

## Asgari Ücret Muafiyeti

2026 yılında asgari ücretliler gelir vergisinden ve damga vergisinden muaftır. Asgari ücretin üzerinde maaş alanlar ise sadece asgari ücreti aşan kısım için vergi öderler.

## Damga Vergisi

Damga vergisi, brüt maaş üzerinden binde 7,59 (‰7,59) oranında uygulanır. Ancak asgari ücretliler damga vergisinden de muaftır.

## Vergi İndirimleri ve İstisnalar

Bazı harcamalar ve yatırımlar vergiden düşülebilir:

- **Eğitim Harcamaları**: Belirli limitlere kadar
- **Sağlık Harcamaları**: Belirli limitlere kadar
- **Bağış ve Yardımlar**: Belirli oranlarda
- **BES Katkıları**: Belirli limitlere kadar vergi avantajı

## Vergi Beyannamesi

Ücretliler için genellikle gelir vergisi **stopaj** yoluyla tahsil edilir. İşvereniniz maaştan vergiyi kesip vergi dairesine yatırır.

Ancak bazı durumlarda yıllık beyanname verilmesi gerekir:
- Birden fazla işverenden ücret alanlar
- Serbest meslek erbabı ve tüccarlar
- Kira geliri elde edenler (istisna tutarını aşanlar)
- Yurtdışı geliri olanlar

## İpuçları ve Öneriler

1. **Vergi Planlaması**: Yıl başında vergi planlaması yapın
2. **İndirimlerden Yararlanın**: Eğitim, sağlık harcamalarını belgelendirin
3. **BES Katkısı**: Bireysel Emeklilik Sistemi'ne katkı yaparak vergi avantajı sağlayın
4. **Mali Müşavir**: Karmaşık durumlarda mali müşavir ile çalışın

## Sonuç

Gelir vergisi hesaplama, kademeli sistem sayesinde adil bir yapıya sahiptir. Vergi matrahınızı ve efektif vergi oranınızı bilmek, finansal planlamanız için önemlidir.

Vergi hesaplamalarınızı kolaylaştırmak için [Vergi Hesap Makinemizi](/tr/hesap-makineleri/finans/vergi-hesap-makinesi) kullanabilirsiniz.

**Önemli Not**: Bu rehber bilgilendirme amaçlıdır. Vergi planlaması ve beyanname işlemleri için mutlaka yetkili mali müşavir veya serbest muhasebeci ile görüşün. Vergi mevzuatı sık değişebilmektedir.
    `,
    author: "Calculator360Pro Ekibi",
    date: "2026-01-20",
    category: "Finans",
    tags: ["gelir vergisi", "vergi hesaplama", "2026 vergi dilimleri", "vergi matrahı", "finans"],
  },
  {
    slug: "brutten-nete-maas-hesaplama-sgk-agi-vergi",
    title: "Brütten Nete Maaş Hesaplama: SGK, AGİ, Vergi Rehberi",
    description:
      "Brüt maaştan net maaşa geçiş hesaplama rehberi. SGK kesintileri, gelir vergisi, damga vergisi, AGİ ve tüm kesintilerin detaylı açıklaması.",
    content: `
# Brütten Nete Maaş Hesaplama: SGK, AGİ, Vergi Rehberi

Brüt maaşınızdan net maaşınıza geçişte hangi kesintiler yapılır? Bu rehberde tüm kesintileri detaylı olarak açıklıyoruz.

## Brüt Maaş Nedir?

Brüt maaş, işverenin size ödediği toplam tutardır. Bu tutardan çeşitli kesintiler yapılarak net maaşınız hesaplanır.

## Net Maaş Nedir?

Net maaş, brüt maaştan tüm kesintiler (SGK, vergi, damga vergisi vb.) düşüldükten sonra elinize geçen tutardır.

## Maaş Hesaplama Adımları

### 1. SGK Kesintileri

SGK kesintileri brüt maaş üzerinden hesaplanır:

- **SGK İşçi Payı**: %14
- **İşsizlik Sigortası İşçi Payı**: %1
- **Toplam SGK Kesintisi**: %15

**Örnek**: 50.000 TL brüt maaş için
- SGK Kesintisi: 50.000 × 0.15 = 7.500 TL

### 2. Vergi Matrahı Hesaplama

Vergi matrahı = Brüt Maaş - SGK Kesintileri

**Örnek**: 50.000 - 7.500 = 42.500 TL

### 3. Gelir Vergisi Hesaplama

Gelir vergisi, kademeli sistem ile hesaplanır. 2026 yılı vergi dilimleri:

- 0 - 110.000 TL: %15
- 110.001 - 230.000 TL: %20
- 230.001 - 870.000 TL: %27
- 870.001 - 3.000.000 TL: %35
- 3.000.001 TL ve üzeri: %40

**Örnek**: Aylık 42.500 TL vergi matrahı için (yıllık 510.000 TL):
- İlk 110.000 TL: %15 = 16.500 TL
- 110.001 - 230.000 TL: %20 = 24.000 TL
- 230.001 - 510.000 TL: %27 = 75.600 TL
- **Yıllık Toplam Vergi**: 116.100 TL
- **Aylık Vergi**: 116.100 / 12 = 9.675 TL

### 4. Damga Vergisi

Damga vergisi brüt maaş üzerinden binde 7,59 (‰7,59) oranında uygulanır.

**Örnek**: 50.000 × 0.00759 = 379,50 TL

**Not**: Asgari ücretliler damga vergisinden muaftır.

### 5. AGİ (Asgari Geçim İndirimi)

AGİ, gelir vergisinden düşülen bir indirimdir. Medeni durum ve çocuk sayısına göre değişir.

2026 yılı AGİ tutarları (aylık):
- Bekar: 2.500 TL
- Evli (eşi çalışmıyor): 2.750 TL
- Evli + 1 çocuk: 3.000 TL
- Evli + 2 çocuk: 3.250 TL
- Evli + 3 çocuk: 3.500 TL

AGİ, gelir vergisinden düşülür.

## Tam Örnek Hesaplama: 50.000 TL Brüt Maaş

**Varsayımlar**: Bekar, asgari ücret üzerinde

1. **Brüt Maaş**: 50.000 TL
2. **SGK Kesintisi** (%15): 7.500 TL
3. **Vergi Matrahı**: 50.000 - 7.500 = 42.500 TL
4. **Aylık Gelir Vergisi** (yıllık 510.000 TL matrah için): 9.675 TL
5. **AGİ İndirimi**: 2.500 TL
6. **Net Gelir Vergisi**: 9.675 - 2.500 = 7.175 TL
7. **Damga Vergisi**: 50.000 × 0.00759 = 379,50 TL

**Net Maaş**: 50.000 - 7.500 - 7.175 - 379,50 = **34.945,50 TL**

## Asgari Ücret Hesaplama

2026 yılı asgari ücret:
- **Brüt**: 26.005,50 TL
- **Net**: 22.104,67 TL

Asgari ücretliler gelir vergisinden ve damga vergisinden muaftır.

## SGK İşveren Payı

İşveren, brüt maaş üzerinden ek olarak şu kesintileri yapar (işçinin maaşından düşülmez):

- SGK İşveren Payı: %20,5
- İşsizlik Sigortası İşveren Payı: %2
- **Toplam İşveren Maliyeti**: %22,5

**Örnek**: 50.000 TL brüt maaş için
- İşveren SGK Payı: 50.000 × 0.225 = 11.250 TL
- **Toplam İşveren Maliyeti**: 50.000 + 11.250 = 61.250 TL

## Maaş Hesaplama İpuçları

1. **Kümülatif Matrah**: Vergi hesaplaması yıl başından itibaren kümülatiftir
2. **AGİ Kontrolü**: AGİ indirimi gelir vergisinden düşülür, negatif olamaz
3. **Asgari Ücret Muafiyeti**: Asgari ücretliler vergi ödemez
4. **Yıl Sonu Farkı**: Yılın son aylarında net maaş düşebilir (üst dilime geçiş)

## Sonuç

Brütten nete maaş hesaplama, SGK, vergi, damga vergisi ve AGİ gibi birçok faktörü içerir. Doğru hesaplama için [Maaş Hesap Makinemizi](/tr/hesap-makineleri/finans/maas-hesap-makinesi) kullanabilirsiniz.

**Önemli Not**: Bu rehber bilgilendirme amaçlıdır. Resmi hesaplamalar için işvereniniz veya mali müşaviriniz ile görüşün.
    `,
    author: "Calculator360Pro Ekibi",
    date: "2026-01-20",
    category: "Finans",
    tags: ["maas hesaplama", "brut net maas", "sgk kesintileri", "agi", "finans"],
  },
  {
    slug: "konut-kredisi-alirken-dikkat-edilecekler-2026",
    title: "Konut Kredisi Alırken Dikkat Edilecekler 2026",
    description:
      "Konut kredisi alırken dikkat edilmesi gerekenler, faiz oranları, masraflar, ön onay süreci ve ipotek işlemleri hakkında kapsamlı rehber.",
    content: `
# Konut Kredisi Alırken Dikkat Edilecekler 2026

Ev almak, hayatınızın en önemli finansal kararlarından biridir. Konut kredisi alırken dikkat etmeniz gereken tüm detayları bu rehberde bulabilirsiniz.

## Konut Kredisi Nedir?

Konut kredisi, ev satın almak için bankalardan alınan uzun vadeli kredidir. Genellikle 5-20 yıl arası vade ile kullanılır ve ev ipotek altına alınır.

## Faiz Oranları

2026 yılı konut kredisi faiz oranları genellikle %2,5 - %4,5 arasında değişmektedir. Faiz oranı:
- Kredi notunuza
- Gelirinize
- Kredi tutarına
- Vadeye
- Bankaya göre değişir

**İpucu**: En düşük faiz oranını bulmak için en az 3-5 bankadan teklif alın.

## Kredi Tutarı ve Peşinat

### Maksimum Kredi Tutarı

Genellikle ev değerinin %80-90'ı kadar kredi alabilirsiniz. Yani:
- 2.000.000 TL'lik ev için
- %80 kredi = 1.600.000 TL kredi
- Peşinat = 400.000 TL (%20)

### Peşinat Önerileri

- **Minimum**: %10-20 peşinat
- **Önerilen**: %20-30 peşinat
- **Avantaj**: Daha yüksek peşinat = daha düşük faiz oranı

## Aylık Taksit Hesaplama

Aylık taksit, kredi tutarı, faiz oranı ve vadeye göre hesaplanır.

**Örnek**: 1.000.000 TL kredi, %3 faiz, 10 yıl (120 ay)
- Aylık taksit: yaklaşık 9.656 TL

Detaylı hesaplama için [Konut Kredisi Hesap Makinemizi](/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi) kullanabilirsiniz.

## Kredi Masrafları

Konut kredisi alırken karşılaşacağınız masraflar:

### 1. Kredi Masrafları
- **Kredi Değerleme Raporu**: 1.000 - 3.000 TL
- **Sigorta**: Yıllık kredi tutarının %0,5-1'i
- **Banka Masrafları**: 500 - 2.000 TL

### 2. Tapu ve Noter Masrafları
- **Tapu Harcı**: Ev değerinin %2'si
- **Noter Masrafları**: 1.000 - 3.000 TL
- **İpotek Tesis Masrafı**: 500 - 1.500 TL

### 3. Diğer Masraflar
- **DASK Sigortası**: Yıllık 500 - 2.000 TL
- **Emlak Vergisi**: Yıllık ev değerinin %0,1-0,2'si
- **Aidat**: Site/kooperatif aidatı

**Toplam Masraf**: Genellikle ev değerinin %3-5'i kadar

## Ön Onay Süreci

### 1. Kredi Notu Kontrolü

Kredi notunuzu kontrol edin:
- **1.500+**: Çok iyi
- **1.200-1.499**: İyi
- **1.000-1.199**: Orta
- **1.000 altı**: Düşük (kredi zor)

### 2. Gerekli Belgeler

- Kimlik fotokopisi
- Gelir belgesi (maaş bordrosu, SGK dökümü)
- Banka hesap ekstreleri
- Tapu fotokopisi (varsa)
- Kredi notu raporu

### 3. Ön Onay Başvurusu

Birden fazla bankaya ön onay başvurusu yapabilirsiniz. Ön onay:
- 1-3 gün içinde sonuçlanır
- Kesin taahhüt değildir
- Ev bulduktan sonra kesin onay alınır

## Kesin Onay ve İpotek

### 1. Ev Seçimi

Ev seçerken dikkat:
- Konum ve ulaşım
- Bina yaşı ve durumu
- Tapu durumu (kat irtifakı/kat mülkiyeti)
- DASK sigortası
- Yapı ruhsatı

### 2. İpotek İşlemleri

Ev ipotek altına alınır:
- Tapuya şerh konur
- Banka, ödeme yapılmazsa evi satma hakkına sahiptir
- Kredi ödendikçe ipotek kaldırılır

### 3. Ödeme Planı

- İlk taksit genellikle 1-2 ay sonra başlar
- Aylık taksitler düzenli ödenmelidir
- Gecikme durumunda faiz ve ceza uygulanır

## Erken Ödeme ve Kısmi Ödeme

### Erken Ödeme Avantajları

- Toplam faiz maliyeti azalır
- Kredi süresi kısalır
- Bazı bankalar erken ödeme cezası alabilir (kontrol edin)

### Kısmi Ödeme

Bazı bankalar kısmi ödemeye izin verir:
- Yılda 1-2 kez
- Belirli tutar üzerinde
- Faiz hesaplaması yeniden yapılır

## Dikkat Edilmesi Gerekenler

### 1. Faiz Oranı Değişkenliği

- Sabit faiz: Tüm vade boyunca aynı
- Değişken faiz: Piyasa koşullarına göre değişir
- Hibrit: İlk yıllar sabit, sonra değişken

### 2. Gizli Masraflar

- Kredi sigortası
- Hayat sigortası
- Hesap işletim ücretleri
- EFT/havale ücretleri

### 3. Kredi Notu Etkisi

Kredi notunuz düşükse:
- Daha yüksek faiz oranı
- Daha düşük kredi tutarı
- Daha yüksek peşinat istenebilir

## Sonuç

Konut kredisi alırken:
1. **Araştırın**: En az 3-5 bankadan teklif alın
2. **Hesaplayın**: [Konut Kredisi Hesap Makinesi](/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi) ile taksitleri hesaplayın
3. **Planlayın**: Masrafları ve peşinatı planlayın
4. **Kontrol Edin**: Kredi notunuzu ve belgelerinizi hazırlayın

**Önemli Not**: Bu rehber bilgilendirme amaçlıdır. Kredi başvurusu öncesi banka temsilcileri ile görüşün ve tüm şartları detaylı okuyun.
    `,
    author: "Calculator360Pro Ekibi",
    date: "2026-01-20",
    category: "Finans",
    tags: ["konut kredisi", "mortgage", "ev kredisi", "ipotek", "finans"],
  },
  {
    slug: "eyt-nedir-kimler-faydalanabilir",
    title: "EYT Nedir? Kimler Faydalanabilir?",
    description:
      "Erken Yaşlananlar Yasası (EYT) nedir, kimler faydalanabilir, emeklilik yaşı ve prim günü hesaplama. EYT ile emeklilik şartları rehberi.",
    content: `
# EYT Nedir? Kimler Faydalanabilir?

EYT (Erken Yaşlananlar Yasası), 1999 öncesi sigortalı olanların emeklilik şartlarını düzenleyen yasadır. Bu rehberde EYT kapsamında emeklilik şartlarını açıklıyoruz.

## EYT Nedir?

EYT, 8 Eylül 1999 tarihinden önce sigortalı olanların emeklilik şartlarını düzenleyen yasadır. Bu tarihten önce sigortalı olanlar, daha esnek emeklilik şartlarından yararlanır.

## EYT Kapsamına Kimler Girer?

EYT kapsamına girmek için:
- **8 Eylül 1999 tarihinden önce** sigortalı olmuş olmalısınız
- SGK (eski SSK, Bağ-Kur, Emekli Sandığı) kaydınız olmalı

### Önemli Tarih: 8 Eylül 1999

Bu tarih, emeklilik şartlarında kritik bir dönüm noktasıdır:
- **Öncesi**: EYT şartları (daha esnek)
- **Sonrası**: Yeni sistem (daha katı şartlar)

## EYT Emeklilik Şartları

EYT kapsamında emeklilik için 3 şart vardır:

### 1. Yaş Şartı

Cinsiyet ve sigorta başlangıç tarihine göre değişir:

**Kadınlar**:
- 1999 öncesi sigortalı: 20 yıl sigortalılık + 50 yaş
- Yaş şartı yok: 25 yıl sigortalılık

**Erkekler**:
- 1999 öncesi sigortalı: 25 yıl sigortalılık + 50 yaş
- Yaş şartı yok: 25 yıl sigortalılık

### 2. Prim Günü Şartı

- **Kadınlar**: 5.000 prim günü
- **Erkekler**: 5.000 prim günü

### 3. Sigortalılık Süresi

- **Kadınlar**: 20 yıl
- **Erkekler**: 25 yıl

## EYT Emeklilik Yaşı Hesaplama

Emeklilik yaşınız, sigorta başlangıç tarihinize göre belirlenir.

### Örnek: 1995'te Sigortalı Olan Kadın

- Sigorta başlangıcı: 1 Ocak 1995
- Yaş şartı: 50 yaş
- Prim günü: 5.000 gün
- Sigortalılık süresi: 20 yıl

**Emeklilik tarihi**: 50. yaş günü + 5.000 prim günü + 20 yıl şartı tamamlandığında

### Örnek: 1990'da Sigortalı Olan Erkek

- Sigorta başlangıcı: 1 Ocak 1990
- Yaş şartı: 50 yaş
- Prim günü: 5.000 gün
- Sigortalılık süresi: 25 yıl

**Emeklilik tarihi**: 50. yaş günü + 5.000 prim günü + 25 yıl şartı tamamlandığında

## 1999 Sonrası Sigortalılar

8 Eylül 1999 sonrası sigortalı olanlar için:

- **Yaş şartı**: 60-65 yaş (kademeli artış)
- **Prim günü**: 7.200 gün
- **Sigortalılık süresi**: 25 yıl

## EYT Avantajları

EYT kapsamındakiler için avantajlar:

1. **Daha Erken Emeklilik**: 50 yaşında emeklilik mümkün
2. **Daha Az Prim Günü**: 5.000 prim günü yeterli
3. **Esnek Şartlar**: Yaş şartı olmadan da emeklilik mümkün

## EYT Dezavantajları

1. **Düşük Emeklilik Maaşı**: Daha az prim = daha düşük maaş
2. **Erken Emeklilik**: Daha uzun süre emekli maaşı alınır
3. **Güncelleme**: Emekli maaşı güncellemeleri daha düşük olabilir

## EYT Emeklilik Maaşı Hesaplama

Emeklilik maaşı şu faktörlere bağlıdır:

1. **Toplam Prim**: Ödenen toplam prim tutarı
2. **Ortalama Kazanç**: Son çalışma yıllarındaki ortalama kazanç
3. **Prim Günü**: Toplam prim günü sayısı
4. **Yaş**: Emeklilik yaşı

Detaylı hesaplama için [Emeklilik Hesap Makinemizi](/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi) kullanabilirsiniz.

## EYT ile İlgili Sık Sorulan Sorular

### EYT'den faydalanmak için ne yapmalıyım?

SGK kaydınızı kontrol edin. 8 Eylül 1999 öncesi sigortalı iseniz, EYT şartlarından yararlanırsınız.

### Prim günümü nasıl öğrenebilirim?

- e-Devlet üzerinden
- SGK şubelerinden
- SGK mobil uygulamasından

### EYT kapsamında erken emeklilik mümkün mü?

Evet, şartları tamamladığınızda emekli olabilirsiniz. Ancak emeklilik maaşınız düşük olabilir.

### EYT'den çıkmak mümkün mü?

Hayır, EYT kapsamına girdiyseniz, bu şartlardan yararlanırsınız.

## Sonuç

EYT, 1999 öncesi sigortalı olanlar için önemli bir avantajdır. Emeklilik planlamanızı yaparken:

1. **Kontrol Edin**: Sigorta başlangıç tarihinizi öğrenin
2. **Hesaplayın**: [Emeklilik Hesap Makinesi](/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi) ile emeklilik tarihinizi hesaplayın
3. **Planlayın**: Prim günü ve yaş şartlarını planlayın

**Önemli Not**: Bu rehber bilgilendirme amaçlıdır. Resmi bilgi için SGK şubelerinden veya e-Devlet üzerinden bilgi alın.
    `,
    author: "Calculator360Pro Ekibi",
    date: "2026-01-20",
    category: "Finans",
    tags: ["eyt", "emeklilik", "sgk", "erken emeklilik", "finans"],
  },
  {
    slug: "bmi-nedir-ideal-kilo-nasil-hesaplanir",
    title: "BMI Nedir? İdeal Kilo Nasıl Hesaplanır?",
    description:
      "BMI (Vücut Kitle İndeksi) nedir, nasıl hesaplanır, ideal kilo aralığı nedir? BMI hesaplama ve sağlıklı kilo yönetimi rehberi.",
    content: `
# BMI Nedir? İdeal Kilo Nasıl Hesaplanır?

BMI (Body Mass Index - Vücut Kitle İndeksi), vücut ağırlığının boy uzunluğuna göre değerlendirilmesi için kullanılan bir ölçüttür. Bu rehberde BMI hesaplama ve ideal kilo konusunu detaylı olarak açıklıyoruz.

## BMI Nedir?

BMI, vücut ağırlığının (kg) boy uzunluğunun (m) karesine bölünmesi ile hesaplanan bir değerdir. Bu değer, kişinin zayıf, normal, fazla kilolu veya obez olup olmadığını değerlendirmek için kullanılır.

## BMI Hesaplama Formülü

BMI = Ağırlık (kg) / Boy (m)²

### Örnek Hesaplama

- Ağırlık: 70 kg
- Boy: 1,75 m
- BMI = 70 / (1,75)² = 70 / 3,0625 = **22,86**

## BMI Kategorileri

Dünya Sağlık Örgütü (WHO) BMI kategorileri:

| BMI Aralığı | Kategori | Açıklama |
|-------------|----------|----------|
| 18,5 altı | Zayıf | Düşük kilo |
| 18,5 - 24,9 | Normal | Sağlıklı kilo |
| 25 - 29,9 | Fazla Kilolu | Hafif fazla kilo |
| 30 - 34,9 | Obez (Sınıf I) | Orta derecede obez |
| 35 - 39,9 | Obez (Sınıf II) | Şiddetli obez |
| 40 ve üzeri | Aşırı Obez (Sınıf III) | Çok şiddetli obez |

## İdeal Kilo Hesaplama

İdeal kilo, BMI'nin 22-23 aralığında olduğu kilodur. Bu aralık, sağlık risklerinin en düşük olduğu aralıktır.

### İdeal Kilo Formülü

İdeal Kilo = Boy (m)² × 22,5

### Örnek: 1,75 m Boy İçin

- İdeal Kilo = (1,75)² × 22,5 = 3,0625 × 22,5 = **68,9 kg**

## BMI'nin Avantajları

1. **Kolay Hesaplama**: Basit formül ile hesaplanır
2. **Hızlı Değerlendirme**: Hızlı bir sağlık değerlendirmesi sağlar
3. **Yaygın Kullanım**: Tüm dünyada kabul görmüş bir ölçüttür

## BMI'nin Sınırlamaları

BMI, mükemmel bir ölçüt değildir:

### 1. Kas Kütlesi

- Yüksek kas kütlesi olanlar (sporcular) yanlış "fazla kilolu" olarak değerlendirilebilir
- Kas, yağdan daha ağırdır

### 2. Yaş

- Yaşlılarda kas kütlesi azalır, yağ oranı artabilir
- BMI normal olsa bile sağlık riski olabilir

### 3. Cinsiyet

- Kadınlar genellikle erkeklerden daha fazla yağ oranına sahiptir
- Aynı BMI değeri farklı anlamlar taşıyabilir

### 4. Vücut Kompozisyonu

- Bel çevresi, yağ dağılımı gibi faktörler BMI'de görünmez
- Karın bölgesi yağlanması sağlık riski oluşturabilir

## Sağlıklı Kilo Yönetimi

### 1. Dengeli Beslenme

- Sebze, meyve, tam tahıl tüketimi
- Protein kaynakları (balık, tavuk, baklagiller)
- Sağlıklı yağlar (zeytinyağı, avokado)
- Şeker ve işlenmiş gıdalardan kaçınma

### 2. Düzenli Egzersiz

- Haftada en az 150 dakika orta yoğunlukta egzersiz
- Kuvvet antrenmanı (haftada 2-3 kez)
- Günlük aktivite (yürüyüş, merdiven çıkma)

### 3. Yeterli Uyku

- Günde 7-9 saat uyku
- Düzenli uyku saatleri
- Kaliteli uyku ortamı

### 4. Stres Yönetimi

- Stres, kilo alımına neden olabilir
- Meditasyon, yoga, nefes egzersizleri
- Hobi ve sosyal aktiviteler

## BMI ve Sağlık Riski

### Düşük BMI (18,5 altı)

Sağlık riskleri:
- Bağışıklık sistemi zayıflığı
- Kemik erimesi riski
- Yetersiz beslenme
- Adet düzensizliği (kadınlarda)

### Normal BMI (18,5 - 24,9)

- En düşük sağlık riski
- Optimal sağlık durumu
- Uzun vadeli sağlık avantajları

### Fazla Kilolu (25 - 29,9)

Sağlık riskleri:
- Tip 2 diyabet riski
- Yüksek tansiyon
- Kalp hastalığı riski
- Eklem problemleri

### Obez (30 ve üzeri)

Sağlık riskleri:
- Ciddi sağlık sorunları
- Kalp hastalığı
- Diyabet
- Uyku apnesi
- Kanser riski artışı

## BMI Hesaplama İpuçları

1. **Doğru Ölçüm**: Sabah aç karnına, hafif giysilerle ölçün
2. **Düzenli Takip**: Ayda bir kez BMI'nizi kontrol edin
3. **Hedef Belirleme**: Gerçekçi kilo hedefleri koyun
4. **Profesyonel Destek**: Doktor veya diyetisyen ile çalışın

## Sonuç

BMI, sağlıklı kilo yönetimi için önemli bir araçtır. Ancak tek başına yeterli değildir. Vücut kompozisyonu, bel çevresi ve genel sağlık durumu da önemlidir.

BMI hesaplamanızı yapmak için [BMI Hesap Makinemizi](/tr/hesap-makineleri/saglik/bmi-hesap-makinesi) kullanabilirsiniz.

**Önemli Not**: Bu rehber bilgilendirme amaçlıdır. Sağlık sorunları için mutlaka doktorunuza danışın.
    `,
    author: "Calculator360Pro Ekibi",
    date: "2026-01-20",
    category: "Sağlık",
    tags: ["bmi", "vücut kitle indeksi", "ideal kilo", "sağlık", "kilo yönetimi"],
  },
];

export function getBlogPostTR(slug: string): BlogPost | undefined {
  return blogPostsTR.find((post) => post.slug === slug);
}

export function getAllBlogPostsTR(): BlogPost[] {
  return blogPostsTR;
}
