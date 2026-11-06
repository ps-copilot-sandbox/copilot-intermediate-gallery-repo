# Neden Agentic Coding Önemli — Kişisel Hazırlık Notları

> Çarşamba (30.9) İngilizce sunumun "why" kısmı için. Instructions bölümü Navi'de — burada sadece felsefi/kavramsal giriş var. Notlar Türkçe, sahnede söyleyeceğin cümleler İngilizce olarak ayrıca işaretli.

---

## 1) "Agentic" ile "autocomplete" arasındaki fark aslında bir yetki devri

- Klasik Copilot: reaktif, tek öneri, her adımı insan tetikler ve onaylar (satır satır kontrol).
- Agentic: hedef odaklı bir döngü (algıla → planla → uygula → doğrula) — birden fazla dosya/araçta insan müdahalesi olmadan ilerler.
- Kritik zihniyet değişimi: artık **her tuş vuruşunu değil, sonucu** denetliyorsun. "Agent" kelimesi zaten bunu söylüyor: devredilmiş yetki (delegated authority).

**🎤 Soundbite (EN):** *"Copilot used to finish your sentence. Now it finishes your sprint — the real question is whether it finishes it the way you meant."*

---

## 2) Neden şimdi? (2024–2026 dönüm noktası)

- Uzun context window + güvenilir tool-calling + reasoning modelleri → uzun ufuklu (long-horizon) görevler artık ekonomik ve tutarlı.
- Model kapasitesi değil, **harness ekosistemi** (VS Code, CLI, CI entegrasyonları) olgunlaştı — altyapı model yeteneğine yetişti.
- Yani bu bir "hype" değil, iki eğrinin (model kalitesi + tooling olgunluğu) kesiştiği an.

---

## 3) Temel gerilim: Özerklik (autonomy) vs Kontrol

- Daha fazla özerklik = daha fazla kaldıraç, ama aynı zamanda **compounding errors** riski (slayttaki "testsiz debug döngüsü" görseli tam bunu anlatıyor).
- Yazılım mühendisliği zaten belirsizliği azaltmakla ilgiliydi (tipler, testler, kontratlar, mimari). Agentic coding bu ihtiyacı ortadan kaldırmıyor, **daha kritik hale getiriyor** — çünkü artık deterministik olmayan bir aktör, deterministik olması gereken bir sistemin içinde çalışıyor.
- Analoji: Her oturumda hafızası sıfırlanan, çok hızlı ve bilgili ama **hiç onboard olmamış** bir junior mühendis işe alıyorsun. Instructions = onboarding dokümanı, Skills/Prompts = playbook, Agents = rol tanımı ve yetki sınırı, Hooks = CI kapısı (asla es geçilemeyen kural).

**🎤 Soundbite (EN):** *"An agent is only as reliable as the boundaries you give it. No boundaries, no reliability — no matter how big the model is."*

---

## 4) Geliştiricinin "değeri" yeniden tanımlanıyor

- Slayttan alıntı: *"Coding was never the true value of developers — it was their analytical skills and the ability to become proficient in any domain quickly."*
- Artık asıl fark yaratan şey: **niyeti (intent) domain diliyle net ifade edebilmek** ve çıktıyı titizlikle doğrulayabilmek.
- Felsefi olarak bu, "yazardan" (typist) "editöre/mimara" geçiş — kod yazmak değil, **"done" tanımını kesinleştirmek ve doğrulamak** öne çıkıyor.

**🎤 Soundbite (EN):** *"You're not typing faster. You're specifying more precisely and verifying more rigorously — that's the actual skill shift."*

---

## 5) 6 primitive neden bürokrasi değil, kaldıraç

Her primitive, belirsizliğin farklı bir eksenini kapatıyor:

| Primitive | Kapattığı belirsizlik |
|---|---|
| Instructions | "Her zaman doğru kabul edilecek şey ne?" |
| Prompts | "Şu an tam olarak hangi görev yapılacak?" |
| Agents | "Kim yapıyor, hangi yetkiyle/araçla?" |
| Skills | "Bilinen karmaşık bir işi nasıl *iyi* yaparız?" |
| Hooks | "Ne olursa olsun asla ihlal edilmeyecek kural ne?" |
| MCP | "Repo dışında agent'ın dokunabileceği sınır ne?" |

**Kritik ayrım — determinizm spektrumu:**
Instructions/Skills = *ikna* (LLM görmezden gelebilir, non-deterministic).
Hooks = *icra* (shell script, exit code, gerçekten bloklar — deterministic).
→ Hangi garantiye gerçekten ihtiyacın olduğunu bilmek, doğru primitive'i seçmenin anahtarı.

---

## 6) Research → Plan → Implement neden felsefi olarak da doğru

- Yanlış bir varsayımı **plan aşamasında** (birkaç yüz token, insan tarafından okunabilir) yakalamak; 10 dosya değiştirdikten sonra yakalamaktan çok daha ucuz.
- Bu, agentic coding'in icat ettiği bir disiplin değil — RFC'ler, design doc'lar zaten vardı. Agentic coding sadece bu disiplini **atlamayı çok daha cazip ve çok daha pahalı** hale getirdi.

---

## 7) Rahatsız edici ama önemli gerçek (tartışma açılışı için)

> Agentic coding hem iyi hem kötü mühendislik alışkanlıklarını büyütür (amplify eder).
> - Testsiz, konvansiyonsuz, dağınık bir repo → agent'lar da hızlı ama güvenilmez değişiklikler üretir.
> - İyi mimarili (DDD, hexagonal, net sınırlar) bir repo → **aynı model**, çarpıcı derecede daha güvenilir sonuç verir.

**🎤 Soundbite (EN):** *"You're not adopting a tool. You're exposing your engineering culture to a fast, extremely literal-minded collaborator. It will do exactly what your repo's structure and docs say — not what you meant."*

---

## 8) Demoya geçiş cümlesi

**🎤 (EN):** *"So today, I won't just tell you this — I'll show you the exact same task, done twice, in this exact repository: once with zero scaffolding, once using the primitives already sitting in `.github/`. Let the difference speak for itself."*

---

## Notlar / hatırlatmalar (kendime)

- [ ] Bu bölüm ~15-20 dk, slayt ağır değil — konuşma ağırlıklı, 1-2 slayt (harness diyagramı + determinism spektrumu tablosu) yeterli.
- [ ] "Wasted CI/CD Minutes" slaytındaki görseli burada tekrar kullan (testsiz vs testli debug loop) — 6. maddeyle birebir örtüşüyor.
- [ ] Kapanışta mutlaka "bugün gördüğünüz her şey bu repo'da zaten var, siz de hands-on kısmında aynılarını kullanacaksınız" vurgusu yap — güven inşa ediyor.
