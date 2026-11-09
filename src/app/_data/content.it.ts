import type { SiteContent } from "./siteTypes";

export const it: SiteContent = {
  lang: "it",
  profile: {
    name: "Salvatore Bottiglieri",
    role: "Software AI Engineer, infrastruttura per agenti",
    location: "Napoli, Italia",
    remote: "Tre anni fully remote",
    email: "sasibottiglieri0@gmail.com",
    linkedin: "https://www.linkedin.com/in/salvatore-bottiglieri",
    github: "https://github.com/salvatorebottiglieri",
    cv: "/cv/salvatore-bottiglieri-cv.pdf",
    headline: "Infrastruttura per agenti, in produzione.",
    intro:
      "Costruisco i sistemi in cui gli agenti girano: runtime, orchestrazione, confini dei tool e valutazione. Due anni di agenti in produzione, cinque anni di backend e sistemi distribuiti.",
    availability:
      "Aperto a ruoli senior di infrastruttura per agenti e AI engineering. Tre anni fully remote.",
    about: [
      "Sono Salvatore, software engineer a Napoli. Costruisco i sistemi in cui gli agenti girano: runtime, orchestrazione, confini dei tool e valutazione.",
      "Mi interessano le parti che sopravvivono alla demo: stato persistente, tool tipizzati, approvazione umana e valutazioni che possono fallire.",
    ],
    principles: [
      {
        title: "Metti le garanzie nei tool",
        body: "Confini, permessi ed effetti collaterali appartengono al codice, non a un prompt.",
      },
      {
        title: "Valuta il fallimento",
        body: "Una demo mostra cosa funziona. Una eval mostra cosa si rompe.",
      },
      {
        title: "Progetta il passaggio di consegne",
        body: "Il miglior agente sa quando fermarsi e restituire la decisione a una persona.",
      },
    ],
    facts: [
      ["Base", "Napoli, Italia"],
      ["Focus", "Infrastruttura per agenti, agenti in produzione, valutazione"],
      ["Disponibilità", "Ruoli senior, consulenza selezionata"],
      ["Remote", "Tre anni fully remote"],
      ["Lingue", "Italiano, inglese"],
    ],
    education: {
      degree: "Laurea magistrale in Informatica",
      school: "Università degli Studi di Napoli Federico II",
      year: "2023",
      focus:
        "Complessità computazionale, architetture neurali avanzate, sistemi di basi di dati distribuiti.",
    },
  },
  projects: [
    {
      slug: "security-agents",
      index: "01",
      title: "Agenti di sicurezza",
      tagline: "Dai report di scansione alle fix riviste.",
      year: "2026",
      role: "Software AI Engineer, Infocube",
      statusKey: "production",
      status: "In produzione",
      layer: "Orchestrazione e MCP",
      outcome: "3 agenti, 2 server MCP",
      decision: "Tieni gli agenti sottili e i server MCP autorevoli.",
      stack: [
        "Python",
        "MCP",
        "LangGraph",
        "AWS Bedrock AgentCore",
        "ECS",
        "Jira",
        "Confluence",
      ],
      summary:
        "Tre agenti che automatizzano un workflow di sicurezza per una piattaforma video enterprise globale: triage dei finding SAST, DAST e SCA, conversione dei report in ticket Jira e proposta di fix a partire dai ticket.",
      context:
        "Il team di sicurezza riceveva report SAST, DAST e SCA per una piattaforma video enterprise globale. Triage, creazione dei ticket e prima bozza della fix erano manuali, ripetitivi e distribuiti tra Jira, Confluence e revisione di documenti.",
      problem:
        "La parte difficile non era generare testo. Era mantenere corretto il workflow: permessi, idempotenza, auditabilità e una decisione umana prima che qualcosa arrivasse a un repository.",
      constraints: [
        "Nessun merge automatico: una persona approva ogni ticket e ogni pull request.",
        "La logica di dominio vive nei server MCP, non nei prompt degli agenti.",
        "Gli stessi agenti girano su cloud e deployment diversi.",
        "Ogni azione deve essere tracciabile fino a un finding.",
      ],
      approach: [
        {
          title: "Agenti sottili, tool autorevoli",
          body: "I server MCP di Jira e Confluence possiedono la logica di dominio e gli effetti collaterali. Ogni agente è un client sottile che pianifica, chiama tool tipizzati e riporta le evidenze.",
        },
        {
          title: "Un workflow, tre agenti",
          body: "L'agente 1 fa triage dei finding contro una knowledge base revisionata. L'agente 2 trasforma i finding OSS in ticket Jira idempotenti. L'agente 3 propone una fix a partire da un ticket in un repository sandbox.",
        },
        {
          title: "L'approvazione umana è uno stato di prima classe",
          body: "Niente viene mergiato automaticamente. Il workflow si ferma dal revisore con un ticket, una fix proposta e le evidenze per accettare o rifiutare.",
        },
        {
          title: "Valuta i modi di fallire",
          body: "Una matrice di 13 casi OSS copriva ticket duplicati, gruppi parziali, ID Jira in conflitto, progetti non mappati e security risk vuoti. La matrice ha trovato un fallimento che bloccava un intero progetto; la fix ha aggiunto una severity di default e un caso di regressione.",
        },
      ],
      built: [
        "Tre agenti in produzione su AWS Bedrock AgentCore ed ECS.",
        "Server MCP di Jira e Confluence con la logica di dominio nel server.",
        "Una libreria di agenti cloud-agnostica con un solo percorso di deployment.",
        "Una knowledge base revisionata per il triage dei falsi positivi.",
        "Una riscrittura concorrente del motore di processing che ha dimezzato il tempo end-to-end.",
      ],
      results: [
        { label: "Agenti in produzione", value: "3" },
        { label: "Server MCP", value: "2" },
        {
          label: "Valutazione del triage",
          value: "12 TP / 2 FP / 9 Unsure",
          note: "Dry-run su un report DAST con 23 finding.",
        },
        {
          label: "Matrice di test OSS",
          value: "13 casi",
          note: "8 ticket, idempotenza, conflitti, schema preflight.",
        },
        {
          label: "Tempo di processing",
          value: "−50%",
          note: "Riscrittura concorrente del motore di processing.",
        },
      ],
      consequence:
        "Il team di sicurezza rivede eccezioni e fix proposte invece di fare la prima passata a mano. Ticket e pull request arrivano con le evidenze dietro, e il workflow è auditabile.",
      change:
        "Il prossimo passo è misurare il loop dell'orchestratore, non solo le chiamate ai tool. Il design v3 dell'agente 3 è ancora una proposta, e la copertura eval del flusso M3 è sottile.",
      reflection:
        "Il modello era la parte meno interessante. Il sistema erano permessi, idempotenza, confini dei tool tipizzati e il momento in cui il workflow restituisce la decisione a una persona.",
      flow: {
        steps: [
          { label: "Finding", sub: "Report SAST, DAST, SCA" },
          { label: "Triage", sub: "Knowledge base revisionata" },
          { label: "Jira", sub: "Ticket idempotenti" },
          { label: "Fix PR", sub: "Repository sandbox" },
          { label: "Revisione umana", sub: "Gate di approvazione" },
        ],
        branches: [
          { label: "Jira MCP", sub: "Logica di dominio nel server" },
          { label: "Confluence MCP", sub: "Storico del triage revisionato" },
          { label: "AgentCore", sub: "Runtime e deployment" },
          { label: "ECS", sub: "Esecuzione cloud-agnostica" },
        ],
        accentIndex: 1,
      },
      heroMetrics: [
        { value: "3", label: "agenti in produzione" },
        { value: "2", label: "server MCP" },
        { value: "1", label: "gate di approvazione umana" },
      ],
    },
    {
      slug: "cortex",
      index: "02",
      title: "Cortex",
      tagline: "Un runtime per agenti che agiscono, non solo rispondono.",
      year: "2026",
      role: "Creatore, open source",
      statusKey: "open-source",
      status: "Open source",
      layer: "Runtime per agenti",
      outcome: "20 ADR, goal persistenti",
      decision: "Rendi i goal persistenti e riprendibili, non legati al prompt.",
      stack: ["Python", "AsyncIO", "Pydantic", "PostgreSQL", "FastAPI", "MQTT", "Docker"],
      summary:
        "Un agent harness scritto da zero con un loop esplicito plan, act, verify, un event bus, goal persistenti, un registry di tool e agenti sensore distribuiti.",
      context:
        "La maggior parte dei progetti con agenti è una catena di prompt con un loop intorno. Cortex è la macchina sotto: un runtime in cui loop, event bus, memoria, tool e sensori sono moduli separati con contratti.",
      problem:
        "Un agente che risponde soltanto è facile da demo e difficile da operare. Il runtime ha bisogno di iterazioni limitate, output tipizzato, goal riprendibili e un modo per valutare la traiettoria, non solo la risposta finale.",
      constraints: [
        "Iterazioni limitate: chat ≤ 20, goal ≤ 100.",
        "Tool deny-by-default; shell e file_write sono opt-in.",
        "Decisioni tipizzate; output malformato fallisce subito.",
        "Il loop deve essere testabile senza un LLM live.",
      ],
      approach: [
        {
          title: "Tipizza l'output del modello",
          body: "Il reasoner restituisce una Decision tipizzata: RESPOND, EXECUTE_TOOLS o ASK_QUESTION. Un output invalido fallisce al confine invece di corrompere il loop.",
        },
        {
          title: "Persisti il goal, non la chat",
          body: "I goal sono salvati e ripresi dopo un restart. Il runtime può entrare nel loop da un goal in background, non solo da un turno utente.",
        },
        {
          title: "Disaccoppia con un event bus",
          body: "I moduli comunicano attraverso un event bus asyncio con salience filtering. I minion portano eventi del mondo reale via MQTT nello stesso loop.",
        },
        {
          title: "Valuta la traiettoria",
          body: "Un harness pytest-native valuta lo stato del goal annotato, esegue un trajectory judge solo sui fallimenti e confronta con una baseline versionata in CI.",
        },
      ],
      built: [
        "Loop esplicito Think, Act, Observe, Respond con componenti iniettati.",
        "Goal persistenti e riprendibili, due modalità operative.",
        "Event bus con salience filtering e minion MQTT.",
        "Eval harness custom: 30 task di loop, 13 di refusal, pass^k, gate in CI.",
        "20 architecture decision record; la CI impone mypy e un coverage gate.",
      ],
      results: [
        { label: "Decisioni architetturali", value: "20" },
        { label: "Task di loop", value: "30" },
        { label: "Task di refusal", value: "13" },
        { label: "Modalità operative", value: "2" },
      ],
      consequence:
        "Cortex è un testbed per pattern di tool calling non standard e un runtime che si può ispezionare, estendere e valutare. Gli ADR rendono i trade-off revisionabili.",
      change:
        "Il percorso MQTT dei minion non è cablato end-to-end, e la allow-list di accesso all'host è una mitigazione di fase 0, non un confine di sicurezza. Entrambi hanno bisogno di un vero threat model.",
      reflection:
        "La parte interessante non è la chiamata al modello. È la macchina a stati intorno: cosa viene persistito, cosa è limitato, cosa è tipizzato e cosa una persona può ispezionare quando fallisce.",
      flow: {
        steps: [
          { label: "Goal", sub: "Turno utente o goal in background" },
          { label: "Contesto", sub: "Storia, fatti, tool" },
          { label: "Think", sub: "Decisione tipizzata" },
          { label: "Act", sub: "Tool in sequenza o parallelo" },
          { label: "Observe", sub: "Risultati ed errori" },
          { label: "Respond", sub: "Risposta finale o nuovo loop" },
        ],
        branches: [
          { label: "Event bus", sub: "Moduli con salience filtering" },
          { label: "Memoria", sub: "Fatti affidabili e apprendimento" },
          { label: "Tool registry", sub: "Accesso deny-by-default" },
          { label: "Eval harness", sub: "30 task di loop, 13 di refusal" },
        ],
        accentIndex: 2,
      },
      heroMetrics: [
        { value: "20", label: "decisioni architetturali" },
        { value: "30", label: "task di loop" },
        { value: "13", label: "task di refusal" },
      ],
      links: [
        { label: "GitHub", href: "https://github.com/salvatorebottiglieri/botti-agent" },
      ],
    },
    {
      slug: "agentic-dev-kit",
      index: "03",
      title: "agentic-dev-kit",
      tagline: "Guardrail che calcolano fatti, non prompt.",
      year: "2026",
      role: "Creatore, open source (MIT)",
      statusKey: "open-source",
      status: "Open source",
      layer: "Valutazione e guardrail",
      outcome: "5/5 vs 0/5 test saltati",
      decision: "Calcola il fatto invece di chiedere all'agente di riportarlo.",
      stack: ["Python", "Git hooks", "pytest", "GitHub Actions", "MIT"],
      summary:
        "Un workflow agent-agnostic per costruire software con un coding agent, con un pre-commit gate che calcola i fatti che l'agente altrimenti dichiarerebbe.",
      context:
        "I coding agent seguono le regole testuali in modo incoerente. Un prompt che dice 'esegui i test' è una richiesta, non una garanzia. Il kit è nato come workflow a fasi e è finito con un gate che calcola i fatti.",
      problem:
        "Il primo round di una A/B eval pre-registrata ha mostrato che le regole nel prompt cambiavano la forma dell'agente, non il tasso di difetti. Il workflow aveva bisogno di un meccanismo che potesse fallire.",
      constraints: [
        "Agent-agnostic: processo puro, nessun adapter vendor-specific.",
        "Hook minimi: un pre-commit gate e un pre-push design gate.",
        "Nessun falso allarme; blocca solo quando il gate non può girare.",
        "MIT, generato da una fonte canonica privata.",
      ],
      approach: [
        {
          title: "Sposta la regola in un tool",
          body: "I test saltati e i pin obsoleti vengono calcolati dal report dei test e dai file di deploy, poi scritti in un gate report tracciato.",
        },
        {
          title: "Rendi il gate agent-neutral",
          body: "Il gate è un normale git hook. Gira allo stesso modo per qualsiasi coding agent e a fine sessione.",
        },
        {
          title: "Misura la regola contro il tool",
          body: "Una A/B replay pre-registrata ha confrontato la regola testuale con il gate. Il gate ha trovato i test saltati in 5/5 run contro 0/5 della regola, e i pin obsoleti in 5/5 contro 2/5.",
        },
        {
          title: "Tieni il workflow leggibile",
          body: "WORKFLOW.md è processo puro. Le skill sono file SKILL.md portabili. L'audit gate controlla gli invarianti sul tracker.",
        },
      ],
      built: [
        "Pre-commit gate per test saltati e pin di deploy obsoleti.",
        "Gate report scritto nel repository; final mode per la CI.",
        "Workflow a fasi e audit di fine sessione.",
        "Skill portabili e script di installazione.",
        "Release MIT v0.2.0.",
      ],
      results: [
        { label: "Test saltati", value: "5/5 vs 0/5" },
        { label: "Pin obsoleti", value: "5/5 vs 2/5" },
        { label: "Bypass", value: "0" },
        { label: "Falsi allarmi", value: "0" },
      ],
      consequence:
        "Il revisore vede un fatto calcolato invece di una dichiarazione dell'agente. Il gate è piccolo, auditabile e gira fuori dall'agente.",
      change:
        "L'audit gate è solo GitHub, e le skill custom sono ancora prime versioni. Un audit tracker-agnostic e più copertura eval sono il prossimo lavoro vero.",
      reflection:
        "Un prompt è un'opinione. Un gate è un fatto. Il lavoro utile è stato spostare la garanzia dal testo dell'agente a un tool che può fallire.",
      flow: {
        steps: [
          { label: "Regole", sub: "Cosa chiede il workflow" },
          { label: "A/B replay", sub: "Regola contro tool" },
          { label: "Pre-commit gate", sub: "Calcola i fatti" },
          { label: "Revisione", sub: "Fatti nel diff" },
        ],
        branches: [
          { label: "Git hook", sub: "Agent-neutral" },
          { label: "Gate report", sub: "Tracciato nel repo" },
          { label: "CI final mode", sub: "Rieseguito fuori da git" },
          { label: "Audit gate", sub: "Invarianti sul tracker" },
        ],
        accentIndex: 2,
      },
      heroMetrics: [
        { value: "5/5", label: "test saltati trovati" },
        { value: "5/5", label: "pin obsoleti trovati" },
        { value: "0", label: "bypass e falsi allarmi" },
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/salvatorebottiglieri/agentic-dev-kit",
        },
      ],
    },
  ],
  experience: [
    {
      period: "2024 — Oggi",
      role: "Software AI Engineer",
      company: "Infocube, Napoli",
      description:
        "Tre agenti in produzione, server MCP per Jira e Confluence, una libreria di agenti cloud-agnostica e un sistema multi-agente di generative UI. Deploy su AWS Bedrock AgentCore ed ECS.",
    },
    {
      period: "2021 — 2024",
      role: "Software Engineer, Core Infrastructure",
      company: "AIRED, Remote",
      description:
        "Ricerca ibrida con retrieval sparse e dense, una pipeline CI/CD multi-branch che ha ridotto il time-to-production da 4 ore a 15 minuti, e un classificatore per diagnostica medica con AUC 0.98.",
    },
  ],
  matrix: [
    {
      area: "Infrastruttura per agenti",
      what: "Runtime, orchestrazione, server MCP, confini dei tool.",
      artifacts: "Runtime per agenti, server MCP, un percorso di deployment.",
      tools: "Python, FastAPI, AWS Bedrock AgentCore, ECS.",
    },
    {
      area: "Agenti in produzione",
      what: "Triage, automazione dei ticket, agenti per fix, approvazione umana.",
      artifacts: "Tre agenti, integrazioni Jira e Confluence, eval suite.",
      tools: "LangGraph, MCP, Jira, Confluence.",
    },
    {
      area: "Valutazione e guardrail",
      what: "A/B eval, pre-commit gate, CI, osservabilità.",
      artifacts: "A/B pre-registrata, gate report, audit.",
      tools: "pytest, GitHub Actions, git hook.",
    },
    {
      area: "Backend e sistemi distribuiti",
      what: "Motori async, ricerca ibrida, API, dati.",
      artifacts: "Retrieval ibrido, processing async, CI/CD.",
      tools: "Python, Java, TypeScript, PostgreSQL, Qdrant, Docker.",
    },
  ],
  lab: [
    {
      title: "Server MCP stateless",
      label: "MCP / affidabilità",
      description:
        "Un server MCP per un page builder senza stato di sessione. Una sessione per tool call, classificazione tipizzata dei fallimenti, read timeout a 45 secondi e un gate di rollout.",
    },
    {
      title: "Memex",
      label: "Conoscenza / agenti",
      description:
        "Un motore di conoscenza personale: SQLite e markdown, ingest da Telegram, validazione adversariale, stati di fiducia e un'ontologia navigabile da un agente.",
    },
    {
      title: "Atlassian CLI",
      label: "Tooling",
      description: "CLI Python minimali per Jira REST v3 e Tempo Timesheets v4.",
    },
    {
      title: "Generative UI",
      label: "LangGraph / UI",
      description:
        "Un sistema multi-agente che trasforma vincoli in linguaggio naturale in componenti UI approvati per il prototyping interno.",
    },
  ],
  publications: [
    {
      title:
        "Machine Learning as a Support for the Diagnosis of Type 2 Diabetes",
      venue: "MDPI",
      year: "2023",
    },
    {
      title:
        "Generative AI and Emotional Health: Innovations with Haystack",
      venue: "ICTS4eHealth",
      year: "2024",
    },
  ],
  ui: {
    nav: { systems: "Sistemi", experience: "Esperienza", lab: "Lab", contact: "Contatti" },
    header: { role: "Software AI Engineer", start: "Parliamone", contact: "Contatti" },
    hero: {
      selectedSystem: "Sistema selezionato",
      seeSystems: "Vedi i sistemi",
      downloadCv: "Scarica il CV",
      readLog: "Leggi il decision log",
    },
    register: {
      title: "Sistemi selezionati",
      meta: "3 sistemi, 2026",
      system: "Sistema",
      layer: "Livello",
      status: "Stato",
      metric: "Metrica",
      year: "Anno",
      readLog: "Leggi il log",
      note: "Le metriche vengono dalla produzione o da valutazioni pubbliche. Le valutazioni sono indicate nel decision log.",
    },
    what: {
      title: "Cosa faccio",
      meta: "Dal runtime alla valutazione",
      intro: "Costruisco i sistemi che rendono gli agenti utili in produzione.",
      area: "Area",
      build: "Cosa costruisco",
      tools: "Tool tipici",
    },
    experience: { title: "Esperienza", meta: "CV disponibile", education: "Formazione" },
    publications: { title: "Pubblicazioni", meta: "Peer-reviewed" },
    about: { title: "Chi sono", meta: "Napoli, Italia. Tre anni fully remote." },
    lab: {
      title: "Lab",
      meta: "Prototipi e tool interni",
      console: "Console del lab",
      contact: "Scrivimi",
      note: "Questi sono tool interni e prototipi. I dettagli dei clienti sono anonimizzati; i sistemi sono descritti a un livello condivisibile.",
    },
    contact: {
      label: "Contatti",
      title: "Hai un agente che deve andare in produzione?",
      body: "Raccontami cosa si è bloccato: il runtime, i tool, la valutazione o il passaggio a una persona. Ti rispondo con un prossimo passo concreto.",
      email: "Scrivimi",
      cv: "CV",
    },
    footer: {
      rights: "© 2026 Salvatore Bottiglieri",
      note: "Contenuti da CV, repository pubblici e note di lavoro approvate.",
      language: "English / Italiano",
    },
    caseStudy: {
      decisionLog: "Decision log",
      selectedSystems: "Sistemi selezionati",
      role: "Ruolo",
      year: "Anno",
      layer: "Livello",
      outcome: "Risultato",
      figure: "Figura 1. Percorso del sistema {title}. Semplificato per chiarezza.",
      contents: "Indice",
      stack: "Stack",
      links: "Link",
      talk: "Parliamo di questo sistema",
      context: "Contesto",
      constraint: "Vincolo",
      decision: "Decisione",
      evidence: "Evidenza",
      consequence: "Conseguenza",
      change: "Cosa cambierei",
      reflection: "Riflessione",
      nextSystem: "Sistema successivo",
      readLog: "Leggi il decision log",
      evidenceNote: "Le valutazioni sono indicate nella nota.",
      decisionN: "Decisione",
    },
  },
};
