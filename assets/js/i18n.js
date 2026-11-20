/* Elbrus Garayev — translations (EN · AZ · RU)

   English lives in index.html and is captured from the page at load, so it
   never has to be duplicated here. To translate a new element, give it a
   data-i18n="some.key" attribute and add the key to `az` and `ru` below.
   Other hooks: data-i18n-content (meta content), data-i18n-aria (aria-label).
   A key missing from a language falls back to English. */
(function () {
  'use strict';

  var LANGS = ['en', 'az', 'ru'];

  var DICT = {
    en: {
      'ui.themeToLight': 'Switch to light mode',
      'ui.themeToDark': 'Switch to dark mode',
      'ui.menuOpen': 'Open menu',
      'ui.menuClose': 'Close menu'
    },

    az: {
      'meta.title': 'Elbrus Garayev — Senior Backend Mühəndisi',
      'meta.description': 'Elbrus Garayev — Bakıda, ABB-də çalışan Senior Backend mühəndisi. Maliyyə məhsulları üçün etibarlı və miqyaslana bilən backend sistemləri qurur.',

      'ui.skip': 'Məzmuna keç',
      'ui.language': 'Dil',
      'ui.themeToLight': 'İşıqlı rejimə keç',
      'ui.themeToDark': 'Qaranlıq rejimə keç',
      'ui.menuOpen': 'Menyunu aç',
      'ui.menuClose': 'Menyunu bağla',

      'nav.home': 'Ana səhifə',
      'nav.about': 'Haqqımda',
      'nav.experience': 'Təcrübə',
      'nav.skills': 'Bacarıqlar',
      'nav.apps': 'Tətbiqlər',
      'nav.soon': 'Tezliklə',
      'nav.comingSoon': 'Tezliklə',
      'nav.contact': 'Əlaqə',

      'hero.location': 'Bakı, Azərbaycan',
      'hero.hello': 'Salam, mən Elbrusam.',
      'hero.role': 'Senior Backend mühəndisi.',
      'hero.lead': 'Real maliyyə məhsullarını və rəqəmsal xidmətləri işlədən etibarlı, miqyaslana bilən backend sistemləri layihələndirir və qururam.',
      'hero.ctaExperience': 'Təcrübəmə baxın',
      'hero.ctaResume': 'CV-ni yükləyin',

      'facts.currentlyLabel': 'Hazırda',
      'facts.currently': 'ABB-də Senior Backend Developer',
      'facts.experienceLabel': 'Təcrübə',
      'facts.experience': 'Bank sektorunda 6+ il backend',
      'facts.stackLabel': 'Əsas stek',

      'about.title': 'Qısaca özüm haqqında.',
      'about.p1': 'Mənim üçün backend inkişafı sadəcə kod yazmaq deyil — bu, sistem düşüncəsi, struktur və uzunmüddətli dayanıqlıq deməkdir.',
      'about.p2': 'Altı ildir Azərbaycanın ən böyük banklarından biri olan ABB-də çalışıram: junior-dan lead-ə, indi isə senior backend developer vəzifəsinə qədər yüksəlmişəm. İşim Java və Spring Boot ekosistemindədir — mikroservislər, ödəniş axınları və Apache Kafka üzərində event-driven inteqrasiyalar, Oracle və MongoDB ilə birlikdə.',
      'about.p3': 'Strukturlaşdırılmış texniki analizi, dürüst qiymətləndirməni və yaxşı planlaşdırılmış sprintləri dəyərləndirirəm. Məqsəd sadəcə işləyən kod deyil — ölçülə bilən və dayanıqlı nəticələrdir. Getdikcə daha çox proqram arxitekturasına, sistem dizaynına və komandaların birlikdə düzgün texniki qərarlar verməsinə kömək etməyə fokuslanıram.',

      'focus.1t': 'Java və Spring ekosistemi',
      'focus.1d': 'Produksiya servisləri üçün gündəlik alətlərim.',
      'focus.2t': 'REST API dizaynı və inteqrasiyalar',
      'focus.2d': 'Digər komandaların rahatlıqla istifadə etdiyi kontraktlar.',
      'focus.3t': 'Kafka ilə event-driven',
      'focus.3d': 'Yüksək ötürmə qabiliyyəti üçün asinxron axınlar.',
      'focus.4t': 'Mikroservislər və paylanmış sistemlər',
      'focus.4d': 'Aydın sərhədlər, proqnozlaşdırıla bilən xətalar.',
      'focus.5t': 'Performans və optimallaşdırma',
      'focus.5d': 'Əvvəldən sürətli, yük altında sabit.',
      'focus.6t': 'Təmiz, dayanıqlı kod',
      'focus.6d': 'İllər sonra da oxunaqlı qalan arxitektura.',
      'focus.7t': 'Texniki analiz və qiymətləndirmə',
      'focus.7d': 'Problemi həll etməzdən əvvəl onu anlamaq.',
      'focus.8t': 'Arxitektura və liderlik',
      'focus.8d': 'Növbəti inkişaf istiqamətim.',

      'exp.eyebrow': 'Karyera',
      'exp.title': 'Təcrübə.',
      'exp.intro': 'Rəqəmsal bankçılığın arxasındakı sistemləri qururam — ödənişlər, kartlar və hər şeyi bir-birinə bağlayan inteqrasiyalar.',
      'exp.current': 'Hazırda',
      'exp.abb.period': 'Okt 2020 — İndiyədək',
      'exp.abb.company': 'ABB · Bankçılıq · Tam ştat',
      'exp.abb.summary': 'Bankın rəqəmsal və korporativ kanallarının arxasındakı backend-i qurur və inkişaf etdirirəm — müştərilərin hər gün ödəniş, köçürmə və kartlarını idarə etmək üçün güvəndiyi servisləri.',
      'exp.abb.p1': 'Fev 2024 — İndiyədək',
      'exp.abb.p2': 'Sen 2022 — Fev 2024',
      'exp.abb.p3': 'İyl 2021 — Sen 2022',
      'exp.abb.p4': 'Okt 2020 — İyl 2021',
      'exp.abb.h1': 'Korporativ və KOS ödənişləri komandasının tərkibində ISO 20022 (MX) standartının bankın daxili ödəniş proseslərinə inteqrasiyasında iştirak etmişəm — beynəlxalq ödənişlər köhnə SWIFT MT formatından keçid edərkən.',
      'exp.abb.h2': 'Rəqəmsal bank platformasının arxasındakı Spring Boot mikroservislərini layihələndirir və dəstəkləyirəm.',
      'exp.abb.h3': 'Düzgünlük, idempotentlik və aydın xəta idarəetməsinə fokuslanan ödəniş axınları qururam.',
      'exp.abb.h4': 'Kartlarla bağlı servisləri, kart idarəetməsi və tranzaksiyaların arxasındakı API-ləri hazırlayıram.',
      'exp.abb.h5': 'Əsas bank sistemi ilə digər sistemlər arasında Kafka əsaslı inteqrasiyalar qururam.',
      'exp.abb.h6': 'Sprint planlamasına strukturlaşdırılmış texniki analiz və qiymətləndirmə gətirirəm.',
      'exp.codex.period': 'Mar 2019 — Yan 2022',
      'exp.codex.title': 'Həmtəsisçi',
      'exp.codex.company': 'Codex Academy · Fərdi fəaliyyət · Bakı',
      'exp.knexel.period': 'Mar 2019 — İyl 2019',
      'exp.knexel.title': 'Təcrübəçi',
      'exp.knexel.company': 'Knexel Technologies · Bakı',

      'skills.eyebrow': 'Bacarıqlar',
      'skills.title': 'İşlədiyim texnologiyalar.',
      'skills.1d': 'Hazırladığım hər şeyin təməli.',
      'skills.2t': 'Mesajlaşma və paylanmış sistemlər',
      'skills.2d': 'Sistemlər arasında məlumatı etibarlı ötürmək.',
      'skills.3t': 'Verilənlər bazaları',
      'skills.3d': 'Vacib məlumatların modelləşdirilməsi və optimallaşdırılması.',
      'skills.4t': 'Mühəndislik alətləri',
      'skills.4d': 'Commit-dən produksiyaya — təkrarlana bilən şəkildə.',
      'skills.5t': 'Arxitektura və təcrübələr',
      'skills.5d': 'Hissələr necə birləşir — və elə də qalır.',
      'skills.tagAnalysis': 'Texniki analiz və qiymətləndirmə',

      'certs.eyebrow': 'Sertifikatlar',
      'certs.title': 'Sertifikatlar və davamlı öyrənmə.',
      'certs.ccdakMeta': 'CCDAK · İyn 2028-dək qüvvədədir',
      'certs.verify': 'Sertifikatı yoxla',
      'certs.note': 'Öyrənmək heç vaxt bitmir — bu siyahı zamanla böyüyür.',

      'edu.title': 'Təhsil',
      'edu.1n': 'Bakalavr, Kompüter mühəndisliyi',
      'edu.1s': 'Bakı Mühəndislik Universiteti',
      'edu.2n': 'Kompüter proqram mühəndisliyi',
      'edu.3n': 'Backend inkişafı',

      'apps.title': 'Hazırladıqlarım.',
      'apps.intro': 'Mobil tətbiqlər, developer alətləri və eksperimentlər — müstəqil şəkildə, produksiya sistemləri ilə eyni diqqətlə hazırlanıb.',

      'contact.title': 'Gəlin tanış olaq.',
      'contact.intro': 'Proqram mühəndisliyi, arxitektura və ya mənalı bir şey qurmaq barədə danışmaq istəyirsiniz? Əlaqə saxlamağınıza şad olaram.',
      'contact.email': 'E-poçt',

      'footer.sig': 'Qayğı ilə hazırlanıb.'
    },

    ru: {
      'meta.title': 'Эльбрус Гараев — Senior Backend-инженер',
      'meta.description': 'Эльбрус Гараев — Senior Backend-инженер в ABB, Баку. Проектирует и создаёт надёжные, масштабируемые backend-системы для финансовых продуктов.',

      'ui.skip': 'Перейти к содержанию',
      'ui.language': 'Язык',
      'ui.themeToLight': 'Включить светлую тему',
      'ui.themeToDark': 'Включить тёмную тему',
      'ui.menuOpen': 'Открыть меню',
      'ui.menuClose': 'Закрыть меню',

      'nav.home': 'Главная',
      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.skills': 'Навыки',
      'nav.apps': 'Приложения',
      'nav.soon': 'Скоро',
      'nav.comingSoon': 'Скоро',
      'nav.contact': 'Контакты',

      'hero.location': 'Баку, Азербайджан',
      'hero.hello': 'Привет, я Эльбрус.',
      'hero.role': 'Senior Backend-инженер.',
      'hero.lead': 'Проектирую и создаю надёжные, масштабируемые backend-системы, на которых работают реальные финансовые продукты и цифровые сервисы.',
      'hero.ctaExperience': 'Мой опыт',
      'hero.ctaResume': 'Скачать резюме',

      'facts.currentlyLabel': 'Сейчас',
      'facts.currently': 'Senior Backend Developer в ABB',
      'facts.experienceLabel': 'Опыт',
      'facts.experience': '6+ лет в backend-разработке для банка',
      'facts.stackLabel': 'Основной стек',

      'about.title': 'Немного обо мне.',
      'about.p1': 'Для меня backend-разработка — это не просто написание кода, а системное мышление, структура и работа на долгую перспективу.',
      'about.p2': 'Шесть лет я работаю в ABB, одном из крупнейших банков Азербайджана: прошёл путь от junior до lead, а сейчас — senior backend-разработчик. Моя работа — экосистема Java и Spring Boot: микросервисы, платёжные потоки и event-driven интеграции на Apache Kafka вместе с Oracle и MongoDB.',
      'about.p3': 'Я ценю структурированный технический анализ, честную оценку задач и хорошо спланированные спринты. Цель — не просто работающий код, а измеримый и устойчивый результат. Всё больше внимания уделяю архитектуре ПО, системному дизайну и тому, чтобы помогать командам вместе принимать верные технические решения.',

      'focus.1t': 'Java и экосистема Spring',
      'focus.1d': 'Мои повседневные инструменты для продакшн-сервисов.',
      'focus.2t': 'Дизайн REST API и интеграции',
      'focus.2d': 'Контракты, на которых удобно строить другим командам.',
      'focus.3t': 'Event-driven на Kafka',
      'focus.3d': 'Асинхронные потоки с высокой пропускной способностью.',
      'focus.4t': 'Микросервисы и распределённые системы',
      'focus.4d': 'Чёткие границы, предсказуемые отказы.',
      'focus.5t': 'Производительность и оптимизация',
      'focus.5d': 'Быстро с самого начала, стабильно под нагрузкой.',
      'focus.6t': 'Чистый, поддерживаемый код',
      'focus.6d': 'Архитектура, которая остаётся понятной спустя годы.',
      'focus.7t': 'Технический анализ и оценка',
      'focus.7d': 'Понять задачу, прежде чем её решать.',
      'focus.8t': 'Архитектура и лидерство',
      'focus.8d': 'Куда растёт мой фокус дальше.',

      'exp.eyebrow': 'Карьера',
      'exp.title': 'Опыт.',
      'exp.intro': 'Создаю системы, на которых держится цифровой банкинг: платежи, карты и интеграции, связывающие всё воедино.',
      'exp.current': 'Сейчас',
      'exp.abb.period': 'Окт 2020 — сейчас',
      'exp.abb.company': 'ABB · Банкинг · Полная занятость',
      'exp.abb.summary': 'Развиваю backend цифровых и корпоративных каналов банка — сервисы, на которые клиенты полагаются каждый день, чтобы платить, переводить деньги и управлять картами.',
      'exp.abb.p1': 'Фев 2024 — сейчас',
      'exp.abb.p2': 'Сен 2022 — Фев 2024',
      'exp.abb.p3': 'Июл 2021 — Сен 2022',
      'exp.abb.p4': 'Окт 2020 — Июл 2021',
      'exp.abb.h1': 'В составе команды платежей Corporate & SME участвовал в интеграции стандарта ISO 20022 (MX) во внутренние платёжные процессы банка при переходе международных платежей с устаревшего SWIFT MT.',
      'exp.abb.h2': 'Проектирую и поддерживаю микросервисы на Spring Boot для платформы цифрового банкинга.',
      'exp.abb.h3': 'Создаю платёжные потоки с упором на корректность, идемпотентность и понятную обработку ошибок.',
      'exp.abb.h4': 'Разрабатываю карточные сервисы и API для управления картами и транзакциями.',
      'exp.abb.h5': 'Строю интеграции на Kafka между core banking и смежными системами.',
      'exp.abb.h6': 'Привношу в планирование спринтов структурированный технический анализ и оценку задач.',
      'exp.codex.period': 'Мар 2019 — Янв 2022',
      'exp.codex.title': 'Сооснователь',
      'exp.codex.company': 'Codex Academy · Собственный проект · Баку',
      'exp.knexel.period': 'Мар 2019 — Июл 2019',
      'exp.knexel.title': 'Стажёр',
      'exp.knexel.company': 'Knexel Technologies · Баку',

      'skills.eyebrow': 'Навыки',
      'skills.title': 'Технологии, с которыми я работаю.',
      'skills.1d': 'Основа всего, что я создаю.',
      'skills.2t': 'Обмен сообщениями и распределённые системы',
      'skills.2d': 'Надёжная передача данных между системами.',
      'skills.3t': 'Базы данных',
      'skills.3d': 'Моделирование и оптимизация важных данных.',
      'skills.4t': 'Инженерные инструменты',
      'skills.4d': 'От коммита до продакшна — воспроизводимо.',
      'skills.5t': 'Архитектура и практики',
      'skills.5d': 'Как части складываются вместе — и остаются такими.',
      'skills.tagAnalysis': 'Технический анализ и оценка',

      'certs.eyebrow': 'Сертификаты',
      'certs.title': 'Сертификаты и непрерывное обучение.',
      'certs.ccdakMeta': 'CCDAK · Действителен до июня 2028',
      'certs.verify': 'Проверить сертификат',
      'certs.note': 'Учёба никогда не заканчивается — этот список со временем растёт.',

      'edu.title': 'Образование',
      'edu.1n': 'Бакалавр, компьютерная инженерия',
      'edu.1s': 'Бакинский инженерный университет',
      'edu.2n': 'Программная инженерия',
      'edu.3n': 'Backend-разработка',

      'apps.title': 'Что я создал.',
      'apps.intro': 'Мобильные приложения, инструменты для разработчиков и эксперименты — созданные самостоятельно, с тем же вниманием, что и продакшн-системы.',

      'contact.title': 'Давайте знакомиться.',
      'contact.intro': 'Хотите обсудить разработку ПО, архитектуру или создать что-то значимое? Буду рад знакомству.',
      'contact.email': 'Почта',

      'footer.sig': 'Сделано с заботой.'
    }
  };

  var root = document.documentElement;
  var listeners = [];
  var current = 'en';

  // Capture English from the markup once
  var nodes = {
    text: document.querySelectorAll('[data-i18n]'),
    content: document.querySelectorAll('[data-i18n-content]'),
    aria: document.querySelectorAll('[data-i18n-aria]')
  };
  nodes.text.forEach(function (el) { DICT.en[el.dataset.i18n] = el.textContent.trim(); });
  nodes.content.forEach(function (el) { DICT.en[el.dataset.i18nContent] = el.getAttribute('content'); });
  nodes.aria.forEach(function (el) { DICT.en[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  function t(key) {
    var table = DICT[current] || DICT.en;
    return table[key] != null ? table[key] : (DICT.en[key] != null ? DICT.en[key] : key);
  }

  function apply(lang, opts) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    current = lang;
    root.lang = lang;

    nodes.text.forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    nodes.content.forEach(function (el) { el.setAttribute('content', t(el.dataset.i18nContent)); });
    nodes.aria.forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

    if (opts && opts.persist) {
      try { localStorage.setItem('lang', lang); } catch (e) {}
      try {
        var url = new URL(location.href);
        if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      } catch (e) {}
    }

    root.classList.remove('i18n-pending');
    listeners.forEach(function (fn) { fn(lang); });
  }

  window.i18n = {
    t: t,
    langs: LANGS,
    get lang() { return current; },
    set: function (lang) { apply(lang, { persist: true }); },
    onChange: function (fn) { listeners.push(fn); }
  };

  // Initial language was resolved in <head> (URL → saved → browser → en)
  apply(root.lang);
})();
