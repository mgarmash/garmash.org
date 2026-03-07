export interface SiteContent {
  meta: {
    title: string;
    description: string;
    lang: string;
    url: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    langSwitch: { label: string; href: string };
  };
  hero: {
    name: string;
    role: string;
    intro: string;
    langNote: string;
    cta: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    photoAlt: string;
  };
  approach: {
    label: string;
    statement: string;
    description: string;
  };
  services: {
    label: string;
    items: { title: string; description: string; tags: string[]; footnotes?: string; image?: { webp: string; jpg: string; alt: string } }[];
  };
  fit: {
    label: string;
    items: string[];
  };
  cases: {
    label: string;
    items: {
      title: string;
      nda: string;
      context: string;
      solution: string;
      result: string;
      stack: string[];
    }[];
  };
  process: {
    label: string;
    steps: { title: string; description: string }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    cta: { label: string; href: string };
  };
  experience: {
    label: string;
    roles: {
      period: string;
      title: string;
      company: string;
      companyUrl?: string;
      description: string;
    }[];
    earlier: {
      title: string;
      items: { period: string; description: string }[];
      summary: string;
    };
  };
  stack: {
    label: string;
    categories: { name: string; items: string[] }[];
  };
  faq: {
    label: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    location: string;
    links: { label: string; href: string; icon: string }[];
  };
  footer: {
    copyright: string;
  };
}

const ru: SiteContent = {
  meta: {
    title: "Максим Гармаш — ИИ/ML и инженерия данных: консультирование и разработка",
    description:
      "Устраняю работу, которая не заслуживает человеческого внимания. ИИ, машинное обучение (ML) и инженерия данных: от аудита данных до работающих ИИ-сервисов за недели. 22+ года опыта.",
    lang: "ru",
    url: "https://garmash.org",
    ogTitle: "Максим Гармаш — ИИ/ML и инженерия данных",
    ogDescription:
      "Устраняю работу, которая не заслуживает человеческого внимания. Данные, пайплайны, рутинные решения — передаю системам.",
  },
  nav: {
    brand: "ИИ и инженерия данных",
    links: [
      { label: "Услуги", href: "#services" },
      { label: "Проекты", href: "#cases" },
      { label: "Процесс", href: "#process" },
      { label: "Опыт", href: "#experience" },
      { label: "Контакты", href: "#contact" },
    ],
    langSwitch: { label: "EN", href: "/en" },
  },
  hero: {
    name: "Максим Гармаш",
    role: "ИИ/ML и\u00a0инженерия данных\u00a0— консультирование и\u00a0разработка",
    intro:
      "Устраняю работу, которая не\u00a0заслуживает человеческого внимания. Превращаю сырые данные и\u00a0ручные процессы в\u00a0предсказуемые ИИ\u2011сервисы и\u00a0автоматику\u00a0— за\u00a0недели, не\u00a0месяцы.",
    langNote: "Русский (родной) · English (C1 — Advanced)",
    cta: { label: "Обсудить проект", href: "https://t.me/mgarmash" },
    ctaSecondary: { label: "Посмотреть проекты", href: "#cases" },
    photoAlt: "Максим Гармаш",
  },
  approach: {
    label: "Подход",
    statement: "Если действие повторяется без участия мышления\u00a0— это дефект, а\u00a0не\u00a0работа.",
    description: "Данные не\u00a0должны переноситься вручную. Отчёты не\u00a0должны собираться руками. Ответы на\u00a0типовые вопросы не\u00a0должны отнимать время специалиста.\n\nЗа\u00a022\u00a0года сменились технологии\u00a0— конвейеры данных (ETL), оркестраторы, ИИ\u2011агенты\u00a0— но\u00a0принцип один: каждый повторяющийся процесс без мышления можно и\u00a0нужно передать системе. Чем точнее проведена эта граница, тем больше людей занимаются тем, что действительно требует головы.",
  },
  services: {
    label: "Чем я помогаю",
    items: [
      {
        title: "Аудит данных и\u00a0ETL*",
        description:
          "Фиксированный спринт 2\u00a0недели. Выявляю узкие места пайплайнов, точки отказа и\u00a0риски качества данных. На\u00a0выходе\u00a0— дорожная карта с\u00a0приоритетами и\u00a0схема целевой архитектуры: что\u00a0чинить первым и\u00a0сколько это займёт.",
        tags: ["Kafka", "Airflow", "NiFi", "Hadoop", "PostgreSQL", "Управление данными", "ClickHouse", "DataOps", "SQL"],
        footnotes: "* ETL — извлечение, преобразование, загрузка данных",
        image: { webp: "/service-1.webp", jpg: "/service-1.jpg", alt: "Аудит пайплайнов данных" },
      },
      {
        title: "MVP* ИИ/ML\u2011решения",
        description:
          "4–6 недель от\u00a0гипотезы до\u00a0тестового продакшена. Скоринг, рекомендации, прогноз, RAG*\u2011ассистент по\u00a0документации\u00a0— беру одну задачу и\u00a0довожу до\u00a0результата, который можно измерить и\u00a0показать бизнесу.",
        tags: ["OpenAI API", "Llama", "RAG", "MLOps", "Python", "Векторная БД", "Дообучение", "Промпт-инжиниринг", "Эмбеддинги", "NLP", "FastAPI"],
        footnotes: "* MVP — минимально жизнеспособный продукт · RAG — генерация ответов с\u00a0извлечением из\u00a0базы знаний",
        image: { webp: "/service-4.webp", jpg: "/service-4.jpg", alt: "ИИ/ML-решение" },
      },
      {
        title: "Интеграция и\u00a0пайплайны",
        description:
          "Сквозные потоки данных между CRM, ERP, SAP, аналитикой и\u00a0внешними сервисами. Нормализация, очистка, маршрутизация\u00a0— чтобы данные не\u00a0терялись по\u00a0дороге, отчётность сходилась, а\u00a0решения принимались быстрее.",
        tags: ["NiFi", "Kafka", "Airflow", "SAP", "REST API", "SOAP", "PostgreSQL", "MSSQL", "n8n", "RabbitMQ", "Redis", "1C", "CRM", "ERP", "GraphQL"],
        image: { webp: "/service-2.webp", jpg: "/service-2.jpg", alt: "Системная интеграция" },
      },
      {
        title: "ИИ\u2011автоматизация процессов",
        description:
          "Внутренние ИИ\u2011инструменты для команды: чат\u2011боты поддержки, классификация обращений, суммаризация документов, автогенерация отчётов. Каждый из\u00a0этих процессов повторяется без мышления\u00a0— значит, человек не\u00a0должен им заниматься.",
        tags: ["n8n", "LLM", "ИИ-агенты", "RAG", "OpenAI API", "Python", "Whisper"],
        image: { webp: "/service-3.webp", jpg: "/service-3.jpg", alt: "ИИ-автоматизация процессов" },
      },
    ],
  },
  fit: {
    label: "Кому подходит",
    items: [
      "Данные в\u00a0десятке систем\u00a0— SAP, 1C, CRM, Excel\u00a0— а\u00a0единого источника правды нет",
      "ИИ\u2011прототип есть, но\u00a0не\u00a0хватает экспертизы довести до\u00a0продакшена и\u00a0масштабировать",
      "CRM, ERP, аналитика живут отдельно\u00a0— данные теряются на\u00a0стыках, расходятся между филиалами",
      "Команда тонет в\u00a0рутине\u00a0— обращения, документация, отчёты\u00a0— а\u00a0на\u00a0стратегию времени нет",
      "Данных уже много, а\u00a0команды данных и\u00a0инфраструктуры для них ещё нет",
      "Устаревшая инфраструктура: модернизация назрела, но\u00a0непонятно, с\u00a0чего начать и\u00a0как не\u00a0сломать работающее",
    ],
  },
  cases: {
    label: "Проекты",
    items: [
      {
        title: "ETL-платформа для промышленного холдинга",
        nda: "Конфиденциально · промышленный сектор",
        context:
          "Крупная промышленная структура с несколькими производственными дивизионами в разных регионах РФ. Данные из SAP, MSSQL, MySQL и PostgreSQL существовали изолированно, отчётность собиралась вручную, а передача параметров в подсистему управления технологическими процессами (АСУ ТП) требовала сложной бизнес-логики преобразований и валидации.",
        solution:
          "Спроектировал и внедрил централизованную ETL-платформу: Apache NiFi для оркестрации потоков между источниками, Airflow для планирования пакетных задач, Kafka для передачи событий в\u00a0реальном времени. Реализовал слой нормализации и очистки данных, экспериментальный агрегат трансформации для подготовки данных к передаче в АСУ ТП со сложной маршрутизацией и валидацией на каждом этапе.",
        result:
          "Единый поток данных из всех дивизионов. Время формирования сводной отчётности\u00a0— с\u00a0дней до\u00a0часов. Ручной труд на\u00a0сверках сведён к\u00a0нулю. Подсистема АСУ\u00a0ТП получает верифицированные данные автоматически.",
        stack: [
          "Apache NiFi",
          "Airflow",
          "Kafka",
          "SAP",
          "MSSQL",
          "MySQL",
          "PostgreSQL",
        ],
      },
      {
        title: "Анализ социальных графов и выявление лидеров мнений",
        nda: "Конфиденциально · государственная структура (СНГ)",
        context:
          "Государственная структура в одной из стран СНГ. Необходимо было организовать непрерывный мониторинг социальных сетей: сбор и хранение графовых данных (связи между пользователями, сообщества, пересечения аудиторий), выявление кластеров влияния и отслеживание появления новых лидеров мнений в режиме, близком к реальному времени.",
        solution:
          "Развёрнут кластер Cloudera Hadoop (HDFS, YARN, Hive, HBase, Spark) для хранения и обработки больших объёмов данных. Краулинг реализован на Python (Scrapy) с распределённым планированием задач. Графовые структуры хранятся в Neo4j, кластерный анализ и ранжирование лидеров мнений — через Spark GraphX. Автоматическая генерация аналитических отчётов по расписанию.",
        result:
          "Система обрабатывает миллионы узлов и связей. Новые лидеры мнений выявляются автоматически в течение суток после набора критической массы. Аналитические отчёты формируются без участия оператора.",
        stack: [
          "Hadoop",
          "HDFS",
          "Spark",
          "Spark GraphX",
          "HBase",
          "Hive",
          "Neo4j",
          "Scrapy",
          "Python",
        ],
      },
      {
        title: "Распределённый краулинг и\u00a0пайплайн данных",
        nda: "Конфиденциально · коммерческий заказчик",
        context:
          "Заказчику требовался регулярный сбор данных с десятков внешних веб-источников с агрессивной анти-бот защитой. Данные нужно было нормализовать, дедуплицировать, загрузить в Hadoop и внутренние системы заказчика, а также обеспечить управленческую аналитику через информационные панели.",
        solution:
           "Построен распределённый краулер с ротацией через пул прокси-провайдеров, адаптивными алгоритмами обхода ограничений частоты запросов и капчи, интеллектуальным управлением скоростью запросов. ETL-пайплайн: очистка и нормализация → загрузка в HDFS/Hive → витрины для бизнес-аналитики (BI). Управленческие панели в Superset. Проработаны правовые и логистические аспекты сбора данных.",
        result:
          "Стабильный автоматический сбор из\u00a050+ источников\u00a0— без единого ручного действия. Данные доступны аналитикам через информационные панели и\u00a0ML\u2011инженерам через Hive/Spark в\u00a0течение часов после появления на\u00a0источнике.",
        stack: [
          "Python",
          "Scrapy",
          "Hadoop",
          "HDFS",
          "Hive",
          "Spark",
          "Superset",
        ],
      },
      {
        title: "RAG-платформа для обучения и поддержки сотрудников",
        nda: "Конфиденциально · промышленный заказчик",
        context:
          "Техническая документация заказчика — тысячи страниц PDF на английском языке: регламенты, спецификации оборудования, инструкции по эксплуатации. Инженеры и операторы на местах работают на русском языке и тратили часы на поиск нужных фрагментов. Критическое требование: нулевой уровень галлюцинаций — ответы строго по тексту документации, любая вольная интерпретация недопустима из-за специфики предметной области.",
        solution:
          "Построена RAG-платформа: загрузка и парсинг PDF-документов с сохранением структуры (разделы, таблицы, схемы), чанкинг с учётом семантических границ, индексация в векторную базу данных. Поисковый слой с гибридным поиском (семантический + ключевой) обеспечивает точное извлечение релевантных фрагментов. Генерация ответа через GPT-4 с жёстким промпт-инжинирингом: модель отвечает только на основе найденных фрагментов, каждый тезис сопровождается ссылкой на конкретный документ, раздел и страницу. Кросс-язычность: вопрос на русском → поиск по английским документам → ответ на русском с цитатами из оригинала.",
        result:
          "Время поиска информации сократилось с часов до секунд. Сотрудники получают точные ответы с прямыми ссылками на источник, галлюцинации исключены на уровне архитектуры. Платформа используется ежедневно несколькими подразделениями.",
        stack: [
          "GPT-4",
          "RAG",
          "Векторная БД",
          "Python",
          "Разбор PDF",
          "Гибридный поиск",
        ],
      },
      {
        title: "Серверная часть федерального портала Госуслуги",
        nda: "gosuslugi.ru",
        context:
          "Единый портал государственных услуг РФ. Разработка нескольких подсистем бэкенда с высокой нагрузкой, строгими требованиями к безопасности (включая криптографию ГОСТ) и необходимостью интеграции с десятками ведомственных систем.",
        solution:
          "Лидер команды разработки, которую собрал с нуля и вырастил до 15 человек. Стек: Spring, MyBatis, Oracle, RabbitMQ, CXF (SOAP-интеграции с ведомствами), CryptoPro для ГОСТ-шифрования. Внедрил Scrum и непрерывную интеграцию (CI).",
        result:
          "Подсистемы запущены в продакшен и обслуживают десятки миллионов граждан. Команда продолжила работу после передачи.",
        stack: [
          "Java",
          "Spring",
          "Oracle",
          "RabbitMQ",
          "CryptoPro",
          "JBoss",
        ],
      },
    ],
  },
  process: {
    label: "Как я работаю",
    steps: [
      {
        title: "Диагностика",
        description:
          "1–2 недели. Аудит данных, ETL, инфраструктуры. На\u00a0выходе\u00a0— карта текущего состояния и\u00a0приоритеты.",
      },
      {
        title: "Дизайн решения",
        description:
          "Схема целевой архитектуры, оценка рисков, стоимости и\u00a0сроков. Вы\u00a0понимаете, за\u00a0что платите.",
      },
      {
        title: "Пилот",
        description:
          "Быстрый прототип на\u00a0реальных данных. Результат можно показать бизнесу.",
      },
      {
        title: "Продакшен",
        description:
          "Развёртывание, мониторинг, документация. Ваша команда может работать самостоятельно.",
      },
      {
        title: "Поддержка",
        description:
          "Итерации, развитие, передача экспертизы. Зависимость от\u00a0меня снижается с\u00a0каждым месяцем.",
      },
    ],
  },
  ctaBanner: {
    title: "Готовы обсудить ваш проект?",
    subtitle:
      "30\u201340\u00a0минут\u00a0→ разберём узкие места\u00a0→ предложение с\u00a0оценкой сроков и\u00a0стоимости. Даже если не\u00a0стартуем\u00a0— получите свежий взгляд на\u00a0свои процессы.",
    cta: { label: "Обсудить проект", href: "https://t.me/mgarmash" },
  },
  experience: {
    label: "Опыт — 22+ года",
    roles: [
      {
        period: "2022 — настоящее время",
        title: "Технический директор (CTO)",
        company: "Octocode",
        companyUrl: "https://octocode.tech",
        description:
          "ИИ-решения, пайплайны данных, управление продуктами и командами. Заказная разработка, собственные продукты и\u00a0консультирование по\u00a0ИИ и\u00a0данным.",
      },
      {
        period: "2017 — настоящее время",
        title: "Генеральный директор",
        company: "ИП Гармаш",
        description:
          "Полный цикл: от архитектуры до\u00a0поставки. Стратегическое и оперативное управление проектами, подбор и обучение персонала.",
      },
      {
        period: "2015 — 2017",
        title: "Зам. технического директора",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "Платформа больших данных (Cloudera Hadoop), система анализа данных соцсетей, грант ФАСИ. Развитие направления технологий больших данных.",
      },
      {
        period: "2014 — 2015",
        title: "Руководитель отдела веб-разработки",
        company: "Softline",
        companyUrl: "https://softline.ru",
        description:
          "Управление офисом разработки (50 человек). Внедрение непрерывной интеграции (CI), код-ревью, системы управления загрузкой.",
      },
      {
        period: "2011 — 2014",
        title: "Руководитель группы / департамента",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "Серверная часть gosuslugi.ru, RTB-платформа, рост команды с нуля до 15 человек.",
      },
    ],
    earlier: {
      title: "Ранняя карьера: 2004 — 2011",
      items: [
        {
          period: "2010 — 2011",
          description:
            "Технический директор, Синертех — система электронных дневников, внедрение Scrum",
        },
        {
          period: "2008 — 2010",
          description:
            "Java-разработчик, Comments (Москва) — интеграции для NCR, QIWI, Библио Глобус",
        },
        {
          period: "2006 — 2009",
          description:
            "Программист, 36,6 — корпоративные информационные системы",
        },
        {
          period: "2004 — 2006",
          description:
            "Разработчик C++/C#, SystemSoft / ВИТА ПЛЮС — промышленные контроллеры, MFC, .NET",
        },
      ],
      summary: "От C++ и промышленных систем до первой роли технического директора за\u00a06\u00a0лет.",
    },
  },
  stack: {
    label: "Технологический стек",
    categories: [
      {
        name: "ИИ / машинное обучение",
        items: [
          "Llama",
          "RAG",
          "MLOps",
          "Дообучение",
          "Промпт-инжиниринг",
          "Эмбеддинги",
          "Векторная БД",
          "PyTorch",
          "scikit-learn",
          "NLP",
          "Whisper",
          "ИИ-агенты",
          "Компьютерное зрение",
        ],
      },
      {
        name: "Данные / ETL",
        items: [
          "Spark",
          "Kafka",
          "Airflow",
          "NiFi",
          "Hadoop",
          "HDFS",
          "Hive",
          "HBase",
          "Oozie",
          "ClickHouse",
          "YARN",
          "MapReduce",
          "Flume",
          "Управление данными",
        ],
      },
      {
        name: "Базы данных",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Oracle",
          "MSSQL",
          "MySQL",
          "Elasticsearch",
          "Redis",
          "ClickHouse",
          "Qdrant",
          "SQLite",
          "CouchDB",
          "MariaDB",
        ],
      },
      {
        name: "Языки программирования",
        items: ["Java", "Python", "JavaScript", "TypeScript", "Groovy", "SQL", "Bash"],
      },
      {
        name: "DevOps",
        items: [
          "Docker",
          "Ansible",
          "Jenkins",
          "GitLab CI",
          "GitHub Actions",
          "Kubernetes",
          "Terraform",
          "Helm",
          "Nginx",
          "Linux",
          "Git",
          "Prometheus",
          "Grafana",
          "AWS",
          "GCP",
          "Azure",
          "ArgoCD",
          "Vault",
          "Consul",
        ],
      },
      {
        name: "Языки",
        items: ["Русский (родной)", "English (C1 — Advanced)"],
      },
    ],
  },
  faq: {
    label: "Частые вопросы",
    items: [
      {
        question: "С кем я буду работать?",
        answer:
          "Со мной напрямую. При необходимости подключаю свою команду из Octocode под конкретный проект — разработчиков, аналитиков данных, DevOps-инженеров.",
      },
      {
        question: "Как начинается работа?",
        answer:
          "Созвон 30–40 минут, чтобы понять задачу → короткий аудит текущей ситуации → предложение с оценкой сроков, стоимости и рисков.",
      },
      {
        question: "Какие форматы сотрудничества?",
        answer:
          "Фиксированный спринт (2–6 недель) с\u00a0понятными артефактами, оплата по\u00a0времени и\u00a0затратам (Time\u00a0&\u00a0Material) для длительных проектов, или внештатный технический директор / руководитель направления данных\u00a0— N\u00a0часов в\u00a0месяц на\u00a0постоянной основе.",
      },
      {
        question: "Работаете ли с удалёнными командами?",
        answer:
          "Да. Более 15 лет опыта управления распределёнными командами. Готов к командировкам при необходимости.",
      },
      {
        question: "Как обеспечивается конфиденциальность?",
        answer:
           "Работаю под соглашением о\u00a0неразглашении (NDA). Все данные остаются на\u00a0вашей инфраструктуре. Доступы\u00a0— минимально необходимые, с\u00a0отзывом после завершения проекта.",
      },
      {
        question: "Что нужно от нашей команды на старте?",
        answer:
          "2\u20113\u00a0часа ключевого специалиста для погружения в\u00a0контекст. Дальше\u00a0— точка контакта для вопросов и\u00a0доступы к\u00a0системам. Основную работу веду сам.",
      },
      {
        question: "Какой порядок бюджета?",
        answer:
           "Зависит от\u00a0формата. Фиксированный спринт\u00a0— понятная сумма до\u00a0старта. По\u00a0времени и\u00a0затратам\u00a0— ежемесячная оценка с\u00a0контролем. В\u00a0обоих случаях\u00a0— прозрачная разбивка, никаких скрытых расходов. Конкретные цифры\u00a0— после 30\u2011минутного разбора задачи.",
      },
    ],
  },
  contact: {
    label: "Контакты",
    location: "Россия, Оренбург · Готов к командировкам",
    links: [
      {
        label: "max@garmash.org",
        href: "mailto:max@garmash.org",
        icon: "email",
      },
      {
        label: "Telegram",
        href: "https://t.me/mgarmash",
        icon: "telegram",
      },
      {
        label: "GitHub",
        href: "https://github.com/mgarmash",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maxgarmash/",
        icon: "linkedin",
      },
    ],
  },
  footer: {
    copyright: "© 2026 Максим Гармаш",
  },
};

const en: SiteContent = {
  meta: {
    title: "Max Garmash — AI/ML & Data Engineering Consulting",
    description:
      "I eliminate work that doesn't deserve human attention. AI/ML and Data Engineering: from data audits to production AI services in weeks. 22+ years of experience.",
    lang: "en",
    url: "https://garmash.org/en",
    ogTitle: "Max Garmash — AI/ML & Data Engineering",
    ogDescription:
      "I eliminate work that doesn't deserve human attention. Data, pipelines, routine decisions — handed to systems.",
  },
  nav: {
    brand: "AI & Data Engineering",
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#cases" },
      { label: "Process", href: "#process" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    langSwitch: { label: "RU", href: "/" },
  },
  hero: {
    name: "Max Garmash",
    role: "AI/ML & Data Engineering — consulting and development",
    intro:
      "I eliminate work that doesn't deserve human attention. Raw data and manual processes become predictable AI\u00a0services and automation — in weeks, not months.",
    langNote: "English (C1 — Advanced) · Russian (native)",
    cta: { label: "Discuss your project", href: "https://t.me/mgarmash" },
    ctaSecondary: { label: "View projects", href: "#cases" },
    photoAlt: "Max Garmash",
  },
  approach: {
    label: "Approach",
    statement: "If an action repeats without thinking — it\u2019s a\u00a0defect, not work.",
    description: "Data shouldn\u2019t be moved by hand. Reports shouldn\u2019t be assembled manually. Routine questions shouldn\u2019t cost a\u00a0specialist\u2019s time.\n\nIn 22\u00a0years the tools have changed — ETL\u00a0pipelines, orchestrators, AI\u00a0agents — but the principle hasn\u2019t: every process that repeats without thinking can and should be handed to a\u00a0system. The sharper this line is drawn, the more people work on what actually requires a\u00a0human mind.",
  },
  services: {
    label: "What I do",
    items: [
      {
        title: "Data & ETL audit",
        description:
          "Fixed 2-week sprint. I identify pipeline bottlenecks, failure points, and data quality risks. You get a prioritized roadmap and target architecture: what to fix first and how long it takes.",
        tags: ["Kafka", "Airflow", "NiFi", "Hadoop", "PostgreSQL", "Data Governance", "ClickHouse", "DataOps", "SQL"],
        image: { webp: "/service-1.webp", jpg: "/service-1.jpg", alt: "Data pipeline audit" },
      },
      {
        title: "AI/ML MVP",
        description:
          "4\u20136\u00a0weeks from hypothesis to test production. Scoring, recommendations, forecasting, RAG-powered documentation assistant — I\u00a0take one problem and deliver a\u00a0measurable result you can show to the business.",
        tags: ["OpenAI API", "Llama", "RAG", "MLOps", "Python", "Vector DB", "Fine-tuning", "Prompt Engineering", "Embeddings", "NLP", "FastAPI"],
        image: { webp: "/service-4.webp", jpg: "/service-4.jpg", alt: "AI/ML MVP" },
      },
      {
        title: "Integration & pipelines",
        description:
          "End-to-end data flows between CRM, ERP, SAP, analytics, and external services. Normalization, cleansing, routing — so data doesn\u2019t get lost in transit, reports add up, and decisions come faster.",
        tags: ["NiFi", "Kafka", "Airflow", "SAP", "REST API", "SOAP", "PostgreSQL", "MSSQL", "n8n", "RabbitMQ", "Redis", "1C", "CRM", "ERP", "GraphQL"],
        image: { webp: "/service-2.webp", jpg: "/service-2.jpg", alt: "System integration" },
      },
      {
        title: "AI process automation",
        description:
          "Internal AI tools for your team: support chatbots, ticket classification, document summarization, automated reports. Each of these processes repeats without thinking\u00a0— which means a\u00a0human shouldn\u2019t be doing it.",
        tags: ["n8n", "LLM", "AI Agents", "RAG", "OpenAI API", "Python", "Whisper"],
        image: { webp: "/service-3.webp", jpg: "/service-3.jpg", alt: "AI process automation" },
      },
    ],
  },
  fit: {
    label: "Who it's for",
    items: [
      "Data across a\u00a0dozen systems\u00a0— SAP, 1C, CRM, Excel\u00a0— and no\u00a0single source of\u00a0truth",
      "AI prototype exists, but not enough expertise to\u00a0bring it to\u00a0production and scale",
      "CRM, ERP, analytics live in\u00a0silos\u00a0— data gets lost at\u00a0handoffs, diverges across branches",
      "Team drowning in\u00a0routine\u00a0— tickets, doc searches, reports\u00a0— no\u00a0time left for strategy",
      "Plenty of\u00a0data already, but no\u00a0data team or infrastructure to\u00a0process it",
      "Legacy landscape: modernization is\u00a0overdue, but unclear where to\u00a0start without breaking what works",
    ],
  },
  cases: {
    label: "Projects",
    items: [
      {
        title: "ETL platform for an industrial conglomerate",
        nda: "NDA · industrial sector",
        context:
          "A major industrial group with multiple manufacturing divisions across Russian regions. Data from SAP, MSSQL, MySQL, and PostgreSQL existed in silos, reporting was assembled manually, and feeding parameters into the SCADA system required complex business logic for transformation and validation.",
        solution:
          "Designed and deployed a centralized ETL platform: Apache NiFi for orchestrating flows between sources, Airflow for scheduling batch jobs, Kafka for real-time event streaming. Built a normalization and cleansing layer, plus an experimental transformation aggregate for preparing data for SCADA with complex routing and validation at every stage.",
        result:
          "Unified data flow across all divisions. Reporting time\u00a0— from days to hours. Manual reconciliation eliminated entirely. The SCADA subsystem now receives verified data automatically.",
        stack: [
          "Apache NiFi",
          "Airflow",
          "Kafka",
          "SAP",
          "MSSQL",
          "MySQL",
          "PostgreSQL",
        ],
      },
      {
        title: "Social graph analysis and opinion leader detection",
        nda: "NDA · government agency (CIS)",
        context:
          "A government agency in a CIS country needed continuous social media monitoring: collecting and storing graph data (user connections, communities, audience overlaps), identifying influence clusters, and tracking the emergence of new opinion leaders in near real-time.",
        solution:
          "Deployed a Cloudera Hadoop cluster (HDFS, YARN, Hive, HBase, Spark) for storing and processing large data volumes. Crawling was implemented in Python (Scrapy) with distributed task scheduling. Graph structures stored in Neo4j, cluster analysis and opinion leader ranking via Spark GraphX. Automated analytical report generation on a schedule.",
        result:
          "The system processes millions of nodes and edges. New opinion leaders are detected automatically within 24 hours of reaching critical mass. Analytical reports are generated without manual intervention.",
        stack: [
          "Hadoop",
          "HDFS",
          "Spark",
          "Spark GraphX",
          "HBase",
          "Hive",
          "Neo4j",
          "Scrapy",
          "Python",
        ],
      },
      {
        title: "Distributed crawling and data pipeline",
        nda: "NDA · commercial client",
        context:
          "The client needed regular data collection from dozens of external web sources with aggressive anti-bot protection. Data had to be normalized, deduplicated, loaded into Hadoop and the client's internal systems, and made available through management dashboards.",
        solution:
          "Built a distributed crawler with rotation through a pool of proxy providers, adaptive algorithms for bypassing rate limits and CAPTCHA, and intelligent request throttling. ETL pipeline: cleansing and normalization → loading into HDFS/Hive → data marts for BI. Management dashboards in Superset. Legal and logistical aspects of data collection were addressed.",
        result:
          "Stable automated collection from 50+ sources\u00a0— zero manual steps. Data available to analysts via dashboards and to ML engineers via Hive/Spark within hours of appearing at the source.",
        stack: [
          "Python",
          "Scrapy",
          "Hadoop",
          "HDFS",
          "Hive",
          "Spark",
          "Superset",
        ],
      },
      {
        title: "RAG platform for employee training and support",
        nda: "NDA · industrial client",
        context:
          "The client's technical documentation consisted of thousands of PDF pages in English: regulations, equipment specifications, and operating manuals. Field engineers and operators work in Russian and spent hours searching for the right sections. Critical requirement: zero hallucinations — answers strictly from the documentation text, with no free interpretation allowed due to the domain specifics.",
        solution:
          "Built a RAG platform: PDF document loading and parsing with structure preservation (sections, tables, diagrams), chunking with semantic boundary awareness, and indexing into a vector database. The retrieval layer uses hybrid search (semantic + keyword) for precise extraction of relevant fragments. Response generation via GPT-4 with strict prompt engineering: the model answers only based on retrieved fragments, every claim includes a reference to the specific document, section, and page. Cross-lingual capability: question in Russian → search across English documents → answer in Russian with citations from the original.",
        result:
          "Information lookup time dropped from hours to seconds. Employees receive precise answers with direct source references; hallucinations are eliminated at the architecture level. The platform is used daily by multiple departments.",
        stack: [
          "GPT-4",
          "RAG",
          "Vector DB",
          "Python",
          "PDF parsing",
          "Hybrid search",
        ],
      },
      {
        title:
          "Backend for Gosuslugi (Russian Federal e-Government Portal)",
        nda: "gosuslugi.ru",
        context:
          "Russia's unified federal e-government portal. Development of several high-load backend subsystems with strict security requirements (including GOST cryptography) and integration with dozens of government agency systems.",
        solution:
          "Led the development team, which I built from scratch and grew to 15 people. Stack: Spring, MyBatis, Oracle, RabbitMQ, CXF (SOAP integrations with government agencies), CryptoPro for GOST encryption. Introduced Scrum and CI processes.",
        result:
          "Subsystems launched in production, serving tens of millions of citizens. The team continued operating after the handover.",
        stack: [
          "Java",
          "Spring",
          "Oracle",
          "RabbitMQ",
          "CryptoPro",
          "JBoss",
        ],
      },
    ],
  },
  process: {
    label: "How I work",
    steps: [
      {
        title: "Discovery",
        description:
          "1\u20132\u00a0weeks. Data, ETL, and infrastructure audit. You get a\u00a0current-state map and clear priorities.",
      },
      {
        title: "Solution design",
        description:
          "Target architecture, risk assessment, cost and timeline estimates. You know what you\u2019re paying for.",
      },
      {
        title: "PoC / MVP",
        description:
          "Rapid prototype on real data. A\u00a0result you can show to the business.",
      },
      {
        title: "Production",
        description:
          "Deployment, monitoring, documentation. Your team can operate independently.",
      },
      {
        title: "Support",
        description:
          "Iterations, evolution, knowledge transfer. Dependency on me decreases every month.",
      },
    ],
  },
  ctaBanner: {
    title: "Ready to discuss your project?",
    subtitle:
      "30\u201340\u00a0minute call \u2192 we identify bottlenecks \u2192 proposal with timeline and cost estimate. Even if we don\u2019t start\u00a0— you get a\u00a0fresh perspective on your processes.",
    cta: { label: "Discuss your project", href: "https://t.me/mgarmash" },
  },
  experience: {
    label: "Experience — 22+ years",
    roles: [
      {
        period: "2022 — present",
        title: "CTO",
        company: "Octocode",
        companyUrl: "https://octocode.tech",
        description:
          "AI solutions, data pipelines, product and team management. Client projects, proprietary products, and AI/Data consulting.",
      },
      {
        period: "2017 — present",
        title: "CEO",
        company: "Self-employed",
        description:
          "Full cycle: from architecture to delivery. Strategic and operational project management, hiring and mentoring.",
      },
      {
        period: "2015 — 2017",
        title: "Deputy CTO",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "BigData platform (Cloudera Hadoop), social media analytics system, FASI grant. Building out the BigData technology practice.",
      },
      {
        period: "2014 — 2015",
        title: "Head of Web Development",
        company: "Softline",
        companyUrl: "https://softline.ru",
        description:
          "Managing a 50-person development office. Introduced CI, code review, and workload management systems.",
      },
      {
        period: "2011 — 2014",
        title: "Team / Department Lead",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "Backend for gosuslugi.ru, RTB platform, grew the team from scratch to 15 people.",
      },
    ],
    earlier: {
      title: "Early career: 2004 — 2011",
      items: [
        {
          period: "2010 — 2011",
          description:
            "CTO, Sinertech — electronic gradebook system, Scrum adoption",
        },
        {
          period: "2008 — 2010",
          description:
            "Java Developer, Comments (Moscow) — integrations for NCR, QIWI, Biblio Globus",
        },
        {
          period: "2006 — 2009",
          description:
            "Software Developer, 36.6 — enterprise information systems",
        },
        {
          period: "2004 — 2006",
          description:
            "C++/C# Developer, SystemSoft / VITA PLUS — industrial controllers, MFC, .NET",
        },
      ],
      summary:
        "From C++ and industrial systems to first CTO role in 6 years.",
    },
  },
  stack: {
    label: "Tech stack",
    categories: [
      {
        name: "AI / ML",
        items: [
          "Llama",
          "RAG",
          "MLOps",
          "Fine-tuning",
          "Prompt Engineering",
          "Embeddings",
          "Vector DB",
          "PyTorch",
          "scikit-learn",
          "NLP",
          "Whisper",
          "AI Agents",
          "Computer Vision",
        ],
      },
      {
        name: "Data / ETL",
        items: [
          "Spark",
          "Kafka",
          "Airflow",
          "NiFi",
          "Hadoop",
          "HDFS",
          "Hive",
          "HBase",
          "Oozie",
          "ClickHouse",
          "YARN",
          "MapReduce",
          "Flume",
          "Data Governance",
        ],
      },
      {
        name: "Databases",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Oracle",
          "MSSQL",
          "MySQL",
          "Elasticsearch",
          "Redis",
          "ClickHouse",
          "Qdrant",
          "SQLite",
          "CouchDB",
          "MariaDB",
        ],
      },
      {
        name: "Code",
        items: ["Java", "Python", "JavaScript", "TypeScript", "Groovy", "SQL", "Bash"],
      },
      {
        name: "DevOps",
        items: [
          "Docker",
          "Ansible",
          "Jenkins",
          "GitLab CI",
          "GitHub Actions",
          "Kubernetes",
          "Terraform",
          "Helm",
          "Nginx",
          "Linux",
          "Git",
          "Prometheus",
          "Grafana",
          "AWS",
          "GCP",
          "Azure",
          "ArgoCD",
          "Vault",
          "Consul",
        ],
      },
      {
        name: "Languages",
        items: ["English (C1 — Advanced)", "Russian (native)"],
      },
    ],
  },
  faq: {
    label: "FAQ",
    items: [
      {
        question: "Who will I be working with?",
        answer:
          "With me directly. When needed, I bring in my team from Octocode for a specific project — developers, data analysts, DevOps engineers.",
      },
      {
        question: "How does the engagement start?",
        answer:
          "A 30–40 minute call to understand the problem → brief audit of the current situation → proposal with timeline, cost, and risk estimates.",
      },
      {
        question: "What engagement models do you offer?",
        answer:
          "Fixed sprint (2–6 weeks) with clear deliverables, Time & Material for longer projects, or fractional CTO / Head of Data — N hours per month on a recurring basis.",
      },
      {
        question: "Do you work with remote teams?",
        answer:
          "Yes. Over 15 years of experience managing distributed teams. Available for on-site visits when needed.",
      },
      {
        question: "How do you handle confidentiality?",
        answer:
          "I work under NDA. All data stays on your infrastructure. Access is minimal and revoked after project completion.",
      },
      {
        question: "What do you need from our team to start?",
        answer:
          "2\u20133\u00a0hours of a\u00a0key person\u2019s time for context. After that\u00a0— a\u00a0point of contact and system access. I\u00a0do the heavy lifting.",
      },
      {
        question: "What\u2019s the ballpark budget?",
        answer:
          "Depends on the format. Fixed sprint\u00a0— clear price upfront. T&M\u00a0— monthly estimate with controls. In both cases\u00a0— transparent breakdown, no hidden costs. Specific numbers\u00a0— after a\u00a030-minute task review.",
      },
    ],
  },
  contact: {
    label: "Contact",
    location: "Russia, Orenburg · Available for travel",
    links: [
      {
        label: "max@garmash.org",
        href: "mailto:max@garmash.org",
        icon: "email",
      },
      {
        label: "Telegram",
        href: "https://t.me/mgarmash",
        icon: "telegram",
      },
      {
        label: "GitHub",
        href: "https://github.com/mgarmash",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maxgarmash/",
        icon: "linkedin",
      },
    ],
  },
  footer: {
    copyright: "© 2026 Max Garmash",
  },
};

export function getContent(lang: "ru" | "en"): SiteContent {
  return lang === "en" ? en : ru;
}

export { ru, en };
