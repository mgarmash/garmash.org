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
  services: {
    label: string;
    items: { title: string; description: string; tags: string[]; image?: { webp: string; jpg: string; alt: string } }[];
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
    title: "Максим Гармаш — AI/ML & Data Engineering консалтинг",
    description:
      "AI/ML и Data Engineering консалтинг. RAG, LLM, ETL-пайплайны, Apache Spark, Kafka, Airflow. 22+ года в разработке ПО.",
    lang: "ru",
    url: "https://garmash.org",
    ogTitle: "Максим Гармаш — AI/ML & Data Engineering",
    ogDescription:
      "Помогаю компаниям превратить данные в работающие AI-сервисы и надёжные пайплайны.",
  },
  nav: {
    brand: "AI & Data Engineering",
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
    role: "AI/ML & Data Engineering — консалтинг и\u00a0разработка",
    intro:
      "Помогаю продуктовым и\u00a0enterprise-компаниям превратить сырые данные и\u00a0хаотичные пайплайны в\u00a0предсказуемые AI-сервисы и\u00a0аналитику, которая влияет на\u00a0бизнес-результат.",
    langNote: "Русский (родной) · English (C1 — Advanced)",
    cta: { label: "Обсудить проект", href: "https://t.me/mgarmash" },
    ctaSecondary: { label: "Посмотреть проекты", href: "#cases" },
    photoAlt: "Максим Гармаш",
  },
  services: {
    label: "Чем я помогаю",
    items: [
      {
        title: "Аудит данных и\u00a0ETL",
        description:
          "Фиксированный спринт 2\u00a0недели. Выявляю узкие места пайплайнов, точки отказа и\u00a0риски качества данных. На\u00a0выходе — приоритезированный roadmap и\u00a0схема целевой архитектуры.",
        tags: ["Kafka", "Airflow", "NiFi", "Hadoop", "PostgreSQL", "Data Governance", "ClickHouse", "DataOps", "SQL"],
        image: { webp: "/service-1.webp", jpg: "/service-1.jpg", alt: "Data pipeline audit" },
      },
      {
        title: "MVP AI/ML\u2011решения",
        description:
          "4–6 недель от\u00a0гипотезы до\u00a0тестового продакшена. Скоринг, рекомендации, прогноз, RAG\u2011ассистент по\u00a0документации — берём одну задачу и\u00a0доводим до\u00a0результата.",
        tags: ["OpenAI API", "Llama", "RAG", "MLOps", "Python", "Vector DB", "Fine-tuning", "Prompt Engineering", "Embeddings", "NLP", "FastAPI"],
        image: { webp: "/service-4.webp", jpg: "/service-4.jpg", alt: "AI/ML MVP" },
      },
      {
        title: "Интеграция и\u00a0пайплайны",
        description:
          "Сквозные потоки данных между CRM, ERP, SAP, аналитикой и\u00a0внешними сервисами. Нормализация, очистка, маршрутизация — чтобы данные не\u00a0терялись по\u00a0дороге и\u00a0были пригодны для ML.",
        tags: ["NiFi", "Kafka", "Airflow", "SAP", "REST API", "SOAP", "PostgreSQL", "MSSQL", "n8n", "RabbitMQ", "Redis", "1C", "CRM", "ERP", "GraphQL"],
        image: { webp: "/service-2.webp", jpg: "/service-2.jpg", alt: "System integration" },
      },
      {
        title: "AI\u2011автоматизация процессов",
        description:
          "Внутренние AI\u2011инструменты для команды: чат\u2011боты поддержки сотрудников, классификация и\u00a0маршрутизация обращений, суммаризация документов, автогенерация отчётов. Снижаем рутину — высвобождаем людей на\u00a0задачи, где нужна голова.",
        tags: ["n8n", "LLM", "AI Agents", "RAG", "OpenAI API", "Python", "Whisper"],
        image: { webp: "/service-3.webp", jpg: "/service-3.jpg", alt: "AI process automation" },
      },
    ],
  },
  fit: {
    label: "Кому подходит",
    items: [
      "Данные копятся в\u00a0десятке систем \u2014 SAP, 1C, CRM, Excel \u2014 отчётность собирается вручную, а\u00a0единого источника правды нет",
      "Есть гипотеза или прототип AI\u2011решения, но не\u00a0хватает инженерной экспертизы довести до\u00a0продакшена и\u00a0масштабировать",
      "CRM, ERP, аналитика живут каждый сам по\u00a0себе \u2014 данные теряются на\u00a0стыках, дублируются, расходятся между филиалами",
      "Команда тонет в\u00a0рутине \u2014 ручная обработка обращений, поиск в\u00a0документации, отчёты \u2014 а\u00a0на\u00a0стратегию времени не\u00a0остаётся",
      "Растущий бизнес без выделенной data\u2011команды \u2014 данных уже много, а\u00a0инфраструктуры для их обработки ещё нет",
      "Enterprise с\u00a0легаси\u2011ландшафтом, где модернизация назрела, но непонятно, с\u00a0чего начать и\u00a0как не\u00a0сломать то, что работает",
    ],
  },
  cases: {
    label: "Проекты",
    items: [
      {
        title: "ETL-платформа для промышленного холдинга",
        nda: "NDA · промышленный сектор",
        context:
          "Крупная промышленная структура с несколькими производственными дивизионами в разных регионах РФ. Данные из SAP, MSSQL, MySQL и PostgreSQL существовали изолированно, отчётность собиралась вручную, а передача параметров в подсистему управления технологическими процессами (АСУ ТП) требовала сложной бизнес-логики преобразований и валидации.",
        solution:
          "Спроектировал и внедрил централизованную ETL-платформу: Apache NiFi для оркестрации потоков между источниками, Airflow для планирования batch-задач, Kafka для real-time передачи событий. Реализовал слой нормализации и очистки данных, экспериментальный агрегат трансформации для подготовки данных к передаче в АСУ ТП со сложной маршрутизацией и валидацией на каждом этапе.",
        result:
          "Единый поток данных из всех дивизионов. Время формирования сводной отчётности сократилось с дней до часов. Подсистема АСУ ТП получает верифицированные данные в автоматическом режиме.",
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
        nda: "NDA · государственная структура (СНГ)",
        context:
          "Государственная структура в одной из стран СНГ. Необходимо было организовать непрерывный мониторинг социальных сетей: сбор и хранение графовых данных (связи между пользователями, сообщества, пересечения аудиторий), выявление кластеров влияния и отслеживание появления новых лидеров мнений в режиме, близком к реальному времени.",
        solution:
          "Развёрнут кластер Cloudera Hadoop (HDFS, YARN, Hive, HBase, Spark) для хранения и обработки больших объёмов данных. Crawling реализован на Python (Scrapy) с распределённым планированием задач. Графовые структуры хранятся в Neo4j, кластерный анализ и ранжирование лидеров мнений — через Spark GraphX. Автоматическая генерация аналитических отчётов по расписанию.",
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
        title: "Распределённый краулинг и data-пайплайн",
        nda: "NDA · коммерческий заказчик",
        context:
          "Заказчику требовался регулярный сбор данных с десятков внешних веб-источников с агрессивной анти-бот защитой. Данные нужно было нормализовать, дедуплицировать, загрузить в Hadoop и внутренние системы заказчика, а также обеспечить управленческую аналитику через дашборды.",
        solution:
          "Построен распределённый краулер с ротацией через пул прокси-провайдеров, адаптивными алгоритмами обхода rate-limits и CAPTCHA, интеллектуальным управлением скоростью запросов. ETL-пайплайн: очистка и нормализация → загрузка в HDFS/Hive → витрины для BI. Управленческие дашборды в Superset. Проработаны правовые и логистические аспекты сбора данных.",
        result:
          "Стабильный автоматический сбор из 50+ источников без ручного вмешательства. Данные доступны для аналитиков через дашборды и для ML-инженеров через Hive/Spark в течение часов после появления на источнике.",
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
        nda: "NDA · промышленный заказчик",
        context:
          "Техническая документация заказчика — тысячи страниц PDF на английском языке: регламенты, спецификации оборудования, инструкции по эксплуатации. Инженеры и операторы на местах работают на русском языке и тратили часы на поиск нужных фрагментов. Критическое требование: нулевой уровень галлюцинаций — ответы строго по тексту документации, любая вольная интерпретация недопустима из-за специфики предметной области.",
        solution:
          "Построена RAG-платформа: загрузка и парсинг PDF-документов с сохранением структуры (разделы, таблицы, схемы), чанкинг с учётом семантических границ, индексация в векторную базу данных. Retrieval-слой с гибридным поиском (семантический + ключевой) обеспечивает точное извлечение релевантных фрагментов. Генерация ответа через GPT-4 с жёстким промпт-инжинирингом: модель отвечает только на основе найденных фрагментов, каждый тезис сопровождается ссылкой на конкретный документ, раздел и страницу. Кросс-язычность: вопрос на русском → поиск по английским документам → ответ на русском с цитатами из оригинала.",
        result:
          "Время поиска информации сократилось с часов до секунд. Сотрудники получают точные ответы с прямыми ссылками на источник, галлюцинации исключены на уровне архитектуры. Платформа используется ежедневно несколькими подразделениями.",
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
        title: "Backend федерального портала Госуслуги",
        nda: "gosuslugi.ru",
        context:
          "Единый портал государственных услуг РФ. Разработка нескольких подсистем бэкенда с высокой нагрузкой, строгими требованиями к безопасности (включая криптографию ГОСТ) и необходимостью интеграции с десятками ведомственных систем.",
        solution:
          "Лидер команды разработки, которую собрал с нуля и вырастил до 15 человек. Стек: Spring, MyBatis, Oracle, RabbitMQ, CXF (SOAP-интеграции с ведомствами), CryptoPro для ГОСТ-шифрования. Внедрил Scrum и CI-процессы.",
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
          "1–2 недели. Аудит данных, ETL, инфраструктуры. Понимание бизнес-задачи.",
      },
      {
        title: "Дизайн решения",
        description:
          "Схема архитектуры, оценка рисков, стоимости и сроков.",
      },
      {
        title: "PoC / MVP",
        description:
          "Быстрый прототип модели или пайплайна на реальных данных.",
      },
      {
        title: "Продакшен",
        description:
          "Развёртывание, мониторинг, обучение вашей команды.",
      },
      {
        title: "Поддержка",
        description:
          "Регулярные итерации, развитие, передача экспертизы.",
      },
    ],
  },
  ctaBanner: {
    title: "Готовы обсудить ваш проект?",
    subtitle:
      "Созвон 30–40 минут → короткий аудит → предложение с оценкой сроков и стоимости",
    cta: { label: "Обсудить проект", href: "https://t.me/mgarmash" },
  },
  experience: {
    label: "Опыт — 22+ года",
    roles: [
      {
        period: "2022 — настоящее время",
        title: "CTO",
        company: "Octocode",
        companyUrl: "https://octocode.tech",
        description:
          "AI-решения, data-пайплайны, управление продуктами и командами. Заказная разработка, собственные продукты и AI/Data консалтинг.",
      },
      {
        period: "2017 — настоящее время",
        title: "CEO",
        company: "ИП Гармаш",
        description:
          "Полный цикл: от архитектуры до деливери. Стратегическое и оперативное управление проектами, подбор и обучение персонала.",
      },
      {
        period: "2015 — 2017",
        title: "Зам. технического директора",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "BigData-платформа (Cloudera Hadoop), система анализа данных соцсетей, грант ФАСИ. Развитие направления BigData-технологий.",
      },
      {
        period: "2014 — 2015",
        title: "Руководитель отдела веб-разработки",
        company: "Softline",
        companyUrl: "https://softline.ru",
        description:
          "Управление офисом разработки (50 человек). Внедрение CI, Code Review, системы управления загрузкой.",
      },
      {
        period: "2011 — 2014",
        title: "Руководитель группы / департамента",
        company: "I-Sys",
        companyUrl: "http://i-sys.ru",
        description:
          "Backend gosuslugi.ru, RTB-платформа, рост команды с нуля до 15 человек.",
      },
    ],
    earlier: {
      title: "Ранняя карьера: 2004 — 2011",
      items: [
        {
          period: "2010 — 2011",
          description:
            "CTO, Синертех — система электронных дневников, внедрение Scrum",
        },
        {
          period: "2008 — 2010",
          description:
            "Java Developer, Comments (Москва) — интеграции для NCR, QIWI, Библио Глобус",
        },
        {
          period: "2006 — 2009",
          description:
            "Программист, 36,6 — корпоративные информационные системы",
        },
        {
          period: "2004 — 2006",
          description:
            "C++/C# Developer, SystemSoft / ВИТА ПЛЮС — промышленные контроллеры, MFC, .NET",
        },
      ],
      summary: "От C++ и промышленных систем до первой роли CTO за 6 лет.",
    },
  },
  stack: {
    label: "Технологический стек",
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
          "Фиксированный спринт (2–6 недель) с понятными артефактами, Time & Material для длительных проектов, или fractional CTO / Head of Data — N часов в месяц на постоянной основе.",
      },
      {
        question: "Работаете ли с удалёнными командами?",
        answer:
          "Да. Более 15 лет опыта управления распределёнными командами. Готов к командировкам при необходимости.",
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
      "AI/ML and Data Engineering consulting. RAG, LLM, ETL pipelines, Apache Spark, Kafka, Airflow. 22+ years in software development.",
    lang: "en",
    url: "https://garmash.org/en",
    ogTitle: "Max Garmash — AI/ML & Data Engineering",
    ogDescription:
      "Helping companies turn raw data into production-grade AI services and reliable pipelines.",
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
      "I help product and enterprise companies turn raw data and chaotic pipelines into predictable AI services and analytics that drive business outcomes.",
    langNote: "English (C1 — Advanced) · Russian (native)",
    cta: { label: "Discuss your project", href: "https://t.me/mgarmash" },
    ctaSecondary: { label: "View projects", href: "#cases" },
    photoAlt: "Max Garmash",
  },
  services: {
    label: "What I do",
    items: [
      {
        title: "Data & ETL audit",
        description:
          "Fixed 2-week sprint. I identify pipeline bottlenecks, failure points, and data quality risks. Deliverables: a prioritized roadmap and target architecture diagram.",
        tags: ["Kafka", "Airflow", "NiFi", "Hadoop", "PostgreSQL", "Data Governance", "ClickHouse", "DataOps", "SQL"],
        image: { webp: "/service-1.webp", jpg: "/service-1.jpg", alt: "Data pipeline audit" },
      },
      {
        title: "AI/ML MVP",
        description:
          "4–6 weeks from hypothesis to test production. Scoring, recommendations, forecasting, RAG-powered documentation assistant — we take one problem and deliver a working result.",
        tags: ["OpenAI API", "Llama", "RAG", "MLOps", "Python", "Vector DB", "Fine-tuning", "Prompt Engineering", "Embeddings", "NLP", "FastAPI"],
        image: { webp: "/service-4.webp", jpg: "/service-4.jpg", alt: "AI/ML MVP" },
      },
      {
        title: "Integration & pipelines",
        description:
          "End-to-end data flows between CRM, ERP, SAP, analytics, and external services. Normalization, cleansing, routing — so data doesn't get lost in transit and is ML-ready.",
        tags: ["NiFi", "Kafka", "Airflow", "SAP", "REST API", "SOAP", "PostgreSQL", "MSSQL", "n8n", "RabbitMQ", "Redis", "1C", "CRM", "ERP", "GraphQL"],
        image: { webp: "/service-2.webp", jpg: "/service-2.jpg", alt: "System integration" },
      },
      {
        title: "AI process automation",
        description:
          "Internal AI tools for your team: employee support chatbots, ticket classification and routing, document summarization, automated report generation. We reduce routine — freeing people for tasks that require thinking.",
        tags: ["n8n", "LLM", "AI Agents", "RAG", "OpenAI API", "Python", "Whisper"],
        image: { webp: "/service-3.webp", jpg: "/service-3.jpg", alt: "AI process automation" },
      },
    ],
  },
  fit: {
    label: "Who it's for",
    items: [
      "Data piles up across a\u00a0dozen systems\u00a0\u2014 SAP, 1C, CRM, Excel\u00a0\u2014 reports are assembled by hand and there\u2019s no\u00a0single source of\u00a0truth",
      "You have an\u00a0AI hypothesis or prototype but lack the engineering expertise to\u00a0bring it to\u00a0production and scale",
      "CRM, ERP, and analytics each live in\u00a0their own silo\u00a0\u2014 data gets lost at\u00a0handoffs, duplicated, and diverges across branches",
      "Your team is drowning in\u00a0routine\u00a0\u2014 manual ticket processing, doc searches, reports\u00a0\u2014 leaving no\u00a0time for strategy",
      "A\u00a0growing business without a\u00a0dedicated data team\u00a0\u2014 you already have plenty of\u00a0data but no\u00a0infrastructure to\u00a0process it",
      "An\u00a0enterprise with a\u00a0legacy landscape where modernization is\u00a0overdue, but it\u2019s unclear where to\u00a0start without breaking what already works",
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
          "Unified data flow across all divisions. Consolidated reporting time dropped from days to hours. The SCADA subsystem now receives verified data automatically.",
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
          "Stable automated collection from 50+ sources with no manual intervention. Data is available to analysts via dashboards and to ML engineers via Hive/Spark within hours of appearing at the source.",
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
          "1–2 weeks. Data, ETL, and infrastructure audit. Understanding the business problem.",
      },
      {
        title: "Solution design",
        description:
          "Architecture diagram, risk assessment, cost and timeline estimates.",
      },
      {
        title: "PoC / MVP",
        description:
          "Rapid prototype of the model or pipeline on real data.",
      },
      {
        title: "Production",
        description:
          "Deployment, monitoring, and training for your team.",
      },
      {
        title: "Support",
        description:
          "Regular iterations, evolution, and knowledge transfer.",
      },
    ],
  },
  ctaBanner: {
    title: "Ready to discuss your project?",
    subtitle:
      "30–40 minute call → brief audit → proposal with timeline and cost estimate",
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
