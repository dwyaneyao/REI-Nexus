const STATUS_LABELS = {
  new: "未学",
  learning: "学习中",
  mastered: "已掌握",
};

const STATUS_ORDER = ["new", "learning", "mastered"];
const REVIEW_GRADES = {
  again: { label: "忘了", intervalLabel: "明天再见", className: "miss" },
  hard: { label: "吃力", intervalLabel: "短期复习", className: "hard" },
  good: { label: "记得", intervalLabel: "正常推进", className: "good" },
  easy: { label: "轻松", intervalLabel: "拉长间隔", className: "easy" },
};

const DAILY_NEW_LIMIT = 20;
const MAX_EVENTS = 400;
const DATA_VERSION = "20260601-browser-single-save";
const PROGRESS_STORAGE_KEY = "kotobavault:progress:v3";
const SETTINGS_STORAGE_KEY = "kotobavault:settings:v2";

function dataUrl(path) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${encodeURIComponent(DATA_VERSION)}`;
}

cleanupLegacyStorage();

const elements = {
  libraryView: document.querySelector("#libraryView"),
  studyShell: document.querySelector("#studyShell"),
  categoryList: document.querySelector("#categoryList"),
  backToLibraryButton: document.querySelector("#backToLibraryButton"),
  sourceSelect: document.querySelector("#sourceSelect"),
  unitSelect: document.querySelector("#unitSelect"),
  studyTitle: document.querySelector("#studyTitle"),
  searchInput: document.querySelector("#searchInput"),
  wordTableBody: document.querySelector("#wordTableBody"),
  termHeader: document.querySelector("#termHeader"),
  readingHeader: document.querySelector("#readingHeader"),
  typeHeader: document.querySelector("#typeHeader"),
  meaningHeader: document.querySelector("#meaningHeader"),
  newContentHeading: document.querySelector("#newContentHeading"),
  statTotal: document.querySelector("#statTotal"),
  statTotalLabel: document.querySelector("#statTotalLabel"),
  statDue: document.querySelector("#statDue"),
  statDueLabel: document.querySelector("#statDueLabel"),
  statStudiedToday: document.querySelector("#statStudiedToday"),
  statStudiedTodayLabel: document.querySelector("#statStudiedTodayLabel"),
  statStreak: document.querySelector("#statStreak"),
  statStreakLabel: document.querySelector("#statStreakLabel"),
  statLearning: document.querySelector("#statLearning"),
  statLearningLabel: document.querySelector("#statLearningLabel"),
  statMastered: document.querySelector("#statMastered"),
  statMasteredLabel: document.querySelector("#statMasteredLabel"),
  filterTitle: document.querySelector("#filterTitle"),
  checkinStatus: document.querySelector("#checkinStatus"),
  checkinButton: document.querySelector("#checkinButton"),
  todaySummary: document.querySelector("#todaySummary"),
  startTodayButton: document.querySelector("#startTodayButton"),
  dueList: document.querySelector("#dueList"),
  newWordList: document.querySelector("#newWordList"),
  learningTodayShell: document.querySelector("#learningTodayShell"),
  practiceOverviewShell: document.querySelector("#practiceOverviewShell"),
  vocabularyListShell: document.querySelector("#vocabularyListShell"),
  practiceListShell: document.querySelector("#practiceListShell"),
  studyCardShell: document.querySelector("#studyCardShell"),
  cardModeBar: document.querySelector(".card-mode-bar"),
  cardCounter: document.querySelector("#cardCounter"),
  cardStatus: document.querySelector("#cardStatus"),
  cardTerm: document.querySelector("#cardTerm"),
  cardReading: document.querySelector("#cardReading"),
  cardMeaning: document.querySelector("#cardMeaning"),
  cardExamples: document.querySelector("#cardExamples"),
  cardReviewControls: document.querySelector("#cardReviewControls"),
  cardStatusControls: document.querySelector("#cardStatusControls"),
  prevCardButton: document.querySelector("#prevCardButton"),
  revealCardButton: document.querySelector("#revealCardButton"),
  practiceGrammarButton: document.querySelector("#practiceGrammarButton"),
  nextCardButton: document.querySelector("#nextCardButton"),
  quizCounter: document.querySelector("#quizCounter"),
  quizModeLabel: document.querySelector("#quizModeLabel"),
  practiceQuizTools: document.querySelector("#practiceQuizTools"),
  quizContext: document.querySelector("#quizContext"),
  quizPrompt: document.querySelector("#quizPrompt"),
  quizChoices: document.querySelector("#quizChoices"),
  quizAnswerBox: document.querySelector("#quizAnswerBox"),
  quizAnswer: document.querySelector("#quizAnswer"),
  quizFeedback: document.querySelector("#quizFeedback"),
  quizActions: document.querySelector("#quizActions"),
  checkQuizButton: document.querySelector("#checkQuizButton"),
  prevQuizButton: document.querySelector("#prevQuizButton"),
  showQuizAnswerButton: document.querySelector("#showQuizAnswerButton"),
  nextQuizButton: document.querySelector("#nextQuizButton"),
  reviewSummary: document.querySelector("#reviewSummary"),
  reviewList: document.querySelector("#reviewList"),
  checkinSummary: document.querySelector("#checkinSummary"),
  checkinList: document.querySelector("#checkinList"),
  eventSummary: document.querySelector("#eventSummary"),
  eventList: document.querySelector("#eventList"),
  lessonResetPanel: document.querySelector("#lessonResetPanel"),
  lessonResetSummary: document.querySelector("#lessonResetSummary"),
  resetLessonButton: document.querySelector("#resetLessonButton"),
};

const sections = {
  today: document.querySelector("#todayView"),
  list: document.querySelector("#listView"),
  cards: document.querySelector("#cardsView"),
  quiz: document.querySelector("#quizView"),
  review: document.querySelector("#reviewView"),
  log: document.querySelector("#logView"),
};

const VALID_ACTIVE_VIEWS = new Set(Object.keys(sections));
const VALID_FILTERS = new Set(["all", "new", "due", "learning", "mastered"]);
const VALID_CARD_MODES = new Set(["filtered", "today"]);
const VALID_PRACTICE_POOLS = new Set(["all", "unattempted", "incorrect", "type"]);
const VALID_LESSON_TEST_TYPES = new Set(["vocabulary", "grammar"]);
const LESSON_TEST_SIZE = 50;

const state = {
  manifest: null,
  activeScreen: "library",
  sourceId: "",
  unitData: null,
  progress: loadProgress(),
  activeView: "today",
  activeFilter: "all",
  query: "",
  cardIndex: 0,
  cardMode: "filtered",
  cardPromptMode: loadSettings().cardPromptMode,
  cardRevealed: false,
  quizIndex: 0,
  quizSelectedChoice: "",
  quizSubmittedAnswer: "",
  quizIsCorrect: null,
  quizRevealed: false,
  quizLockedQuestionId: "",
  quizGrammarPointId: "",
  practicePool: "all",
  practiceTypeFilter: "all",
  lessonStepId: "",
  lessonReviewIndex: 0,
  lessonReviewRevealed: false,
  lessonPracticeReviewOrder: [],
  lessonPracticeReviewSignature: "",
  lessonTestType: "",
  lessonVocabularyPracticeIndex: 0,
  lessonGrammarPracticeIndex: 0,
  lessonVocabularyPracticeShuffle: false,
  lessonGrammarPracticeShuffle: false,
  lessonVocabularyPracticeOrder: [],
  lessonVocabularyPracticeOrderSignature: "",
  lessonGrammarPracticeOrder: [],
  lessonGrammarPracticeOrderSignature: "",
  checkinFailure: "",
};

function cleanupLegacyStorage() {
  const exactKeys = new Set([
    "kotobavault:" + "acc" + "ounts:v1",
    "kotobavault:progress:v1",
    "kotobavault:progress:v2",
    "kotobavault:settings:v1",
  ]);
  const prefixes = ["kotobavault:progress:v2:", "kotobavault:settings:v1:"];
  for (let index = localStorage.length - 1; index >= 0; index -= 1) {
    const key = localStorage.key(index);
    if (!key) {
      continue;
    }
    if (exactKeys.has(key) || prefixes.some((prefix) => key.startsWith(prefix))) {
      localStorage.removeItem(key);
    }
  }
}

function loadSettings() {
  try {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) || "{}");
    return {
      cardPromptMode: settings.cardPromptMode === "reading" ? "reading" : "term",
    };
  } catch {
    return { cardPromptMode: "term" };
  }
}

function saveSettings() {
  localStorage.setItem(
    SETTINGS_STORAGE_KEY,
    JSON.stringify({
      cardPromptMode: state.cardPromptMode,
    })
  );
}

function emptyProgress() {
  return {
    schemaVersion: 2,
    units: {},
    lessons: {},
    dailyPlans: {},
    events: [],
    checkins: {},
    sourceLocations: {},
  };
}

function todayString(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function addDays(dateText, days) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setDate(date.getDate() + days);
  return todayString(date);
}

function loadProgress() {
  try {
    const current = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || "null");
    if (current?.schemaVersion === 2) {
      return normalizeProgress(current);
    }
  } catch {
    return emptyProgress();
  }

  const fresh = emptyProgress();
  saveProgressObject(fresh);
  return fresh;
}

function normalizeProgress(progress) {
  return {
    schemaVersion: 2,
    units: progress.units || {},
    lessons: progress.lessons || {},
    dailyPlans: progress.dailyPlans || {},
    events: Array.isArray(progress.events) ? progress.events : [],
    checkins: progress.checkins || {},
    sourceLocations:
      progress.sourceLocations && typeof progress.sourceLocations === "object" ? progress.sourceLocations : {},
  };
}

function saveProgressObject(progress) {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

function saveProgress() {
  saveProgressObject(state.progress);
}

function normalizeStoredIndex(value) {
  const number = Number.parseInt(value, 10);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function normalizeStoredChoice(value, validValues, fallback) {
  return validValues.has(value) ? value : fallback;
}

function currentDatasetId() {
  return state.unitData?.unit?.id || elements.unitSelect.value || "";
}

function sourceLocation(sourceId) {
  const location = state.progress.sourceLocations?.[sourceId];
  return location && typeof location === "object" ? location : null;
}

function saveCurrentSourceLocation() {
  if (state.activeScreen !== "study" || !state.sourceId || !state.unitData) {
    return;
  }

  const datasetId = currentDatasetId();
  if (!datasetId) {
    return;
  }

  state.progress.sourceLocations = state.progress.sourceLocations || {};
  state.progress.sourceLocations[state.sourceId] = {
    datasetId,
    activeView: normalizeStoredChoice(state.activeView, VALID_ACTIVE_VIEWS, "today"),
    activeFilter: normalizeStoredChoice(state.activeFilter, VALID_FILTERS, "all"),
    cardIndex: normalizeStoredIndex(state.cardIndex),
    cardMode: normalizeStoredChoice(state.cardMode, VALID_CARD_MODES, "filtered"),
    quizIndex: normalizeStoredIndex(state.quizIndex),
    quizGrammarPointId: state.quizGrammarPointId || "",
    practicePool: normalizeStoredChoice(state.practicePool, VALID_PRACTICE_POOLS, "all"),
    practiceTypeFilter: state.practiceTypeFilter || "all",
    lessonStepId: state.lessonStepId || "",
    lessonReviewIndex: normalizeStoredIndex(state.lessonReviewIndex),
    lessonTestType: VALID_LESSON_TEST_TYPES.has(state.lessonTestType) ? state.lessonTestType : "",
    lessonVocabularyPracticeIndex: normalizeStoredIndex(state.lessonVocabularyPracticeIndex),
    lessonGrammarPracticeIndex: normalizeStoredIndex(state.lessonGrammarPracticeIndex),
    lessonVocabularyPracticeShuffle: Boolean(state.lessonVocabularyPracticeShuffle),
    lessonGrammarPracticeShuffle: Boolean(state.lessonGrammarPracticeShuffle),
    updatedAt: new Date().toISOString(),
  };
  saveProgress();
}

function applySourceLocation(location) {
  if (!location || typeof location !== "object") {
    return;
  }

  state.activeView = normalizeStoredChoice(location.activeView, VALID_ACTIVE_VIEWS, "today");
  state.activeFilter = normalizeStoredChoice(location.activeFilter, VALID_FILTERS, "all");
  state.cardIndex = normalizeStoredIndex(location.cardIndex);
  state.cardMode = normalizeStoredChoice(location.cardMode, VALID_CARD_MODES, "filtered");
  state.quizIndex = normalizeStoredIndex(location.quizIndex);
  state.quizGrammarPointId = typeof location.quizGrammarPointId === "string" ? location.quizGrammarPointId : "";
  state.practicePool = normalizeStoredChoice(location.practicePool, VALID_PRACTICE_POOLS, "all");
  state.practiceTypeFilter =
    typeof location.practiceTypeFilter === "string" && location.practiceTypeFilter ? location.practiceTypeFilter : "all";
  state.lessonReviewIndex = normalizeStoredIndex(location.lessonReviewIndex);
  state.lessonTestType = VALID_LESSON_TEST_TYPES.has(location.lessonTestType) ? location.lessonTestType : "";
  state.lessonVocabularyPracticeIndex = normalizeStoredIndex(location.lessonVocabularyPracticeIndex);
  state.lessonGrammarPracticeIndex = normalizeStoredIndex(location.lessonGrammarPracticeIndex);
  state.lessonVocabularyPracticeShuffle = Boolean(location.lessonVocabularyPracticeShuffle);
  state.lessonGrammarPracticeShuffle = Boolean(location.lessonGrammarPracticeShuffle);
  state.lessonVocabularyPracticeOrder = [];
  state.lessonVocabularyPracticeOrderSignature = "";
  state.lessonGrammarPracticeOrder = [];
  state.lessonGrammarPracticeOrderSignature = "";

  const lessonStepId = typeof location.lessonStepId === "string" ? location.lessonStepId : "";
  if (lessonStepId && lessonStep(lessonStepId)) {
    state.lessonStepId = lessonStepId;
  }
  if (isPracticeUnit() && state.activeFilter === "mastered") {
    state.activeFilter = "all";
  }
}

function normalize(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function examplesText(word) {
  return (word.examples || [])
    .map((example) => `${example.japanese || ""} ${example.meaning || ""}`.trim())
    .filter(Boolean)
    .join(" ");
}

function isGrammarUnit() {
  return state.unitData?.unit?.type === "grammar_unit";
}

function isPracticeUnit() {
  return state.unitData?.unit?.type === "practice_unit";
}

function isTextbookUnit() {
  return state.unitData?.unit?.type === "textbook_unit";
}

function itemTypeLabels() {
  if (isTextbookUnit()) {
    return {
      title: "日文教材课程",
      total: "课程步骤",
      term: "项目",
      reading: "类型",
      type: "范围",
      meaning: "内容",
      search: "步骤、表达、文法、词汇或问题",
      termPrompt: "项目",
      readingPrompt: "类型",
      newContent: "课程步骤",
      exampleTitle: "学习内容",
      noExamples: "这一步还没有补充内容。",
      tabs: { today: "课程", cards: "词汇", list: "练习", quiz: "测验", log: "记录" },
    };
  }
  if (isPracticeUnit()) {
    return {
      title: "日文练习题库",
      total: "题目",
      term: "题号",
      reading: "题型",
      type: "分类",
      meaning: "范围",
      search: "题号、题干、答案或解析",
      termPrompt: "题号",
      readingPrompt: "题型",
      newContent: "题型分布",
      exampleTitle: "解析",
      noExamples: "这道题还没有解析摘录。",
      tabs: { today: "总览", list: "题目", quiz: "刷题", review: "错题", log: "记录" },
    };
  }
  if (isGrammarUnit()) {
    return {
      title: "日文文法库",
      total: "文法点",
      term: "句型",
      reading: "接续",
      type: "分类",
      meaning: "用法",
      search: "句型、接续、中文意思或编号",
      termPrompt: "句型",
      readingPrompt: "接续",
      newContent: "新文法建议",
      exampleTitle: "例句",
      noExamples: "这条还没有例句。",
      tabs: { today: "今日", list: "文法点", cards: "讲解", quiz: "练习", review: "复习", log: "记录" },
    };
  }
  return {
    title: "日文词汇库",
    total: "词条",
    term: "词",
    reading: "读音",
    type: "词性",
    meaning: "意思",
    search: "日文、假名、中文意思或编号",
    termPrompt: "汉字",
    readingPrompt: "假名",
    newContent: "新词建议",
    exampleTitle: "例句",
    noExamples: "这条还没有例句。",
    tabs: { today: "今日", list: "词表", cards: "卡片", quiz: "小测", review: "复习", log: "记录" },
  };
}

function renderViewTabLabels(labels) {
  const tabList = document.querySelector(".view-tabs");
  const tabOrder = isTextbookUnit()
    ? ["today", "cards", "list", "quiz", "log"]
    : isPracticeUnit()
    ? ["today", "list", "quiz", "review", "log"]
    : ["today", "list", "cards", "quiz", "review", "log"];
  if (tabList) {
    for (const view of tabOrder) {
      const button = tabList.querySelector(`.tab-button[data-view="${view}"]`);
      if (button) {
        tabList.append(button);
      }
    }
  }
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.hidden = !tabOrder.includes(button.dataset.view);
    button.textContent = labels.tabs?.[button.dataset.view] || button.textContent;
  });
}

function renderStatLabels(labels) {
  elements.statTotalLabel.textContent = labels.total;
  if (isTextbookUnit()) {
    elements.statDueLabel.textContent = "已完成";
    elements.statStudiedTodayLabel.textContent = "今日活动";
    elements.statStreakLabel.textContent = "完成率";
    elements.statLearningLabel.textContent = "测验完成";
    elements.statMasteredLabel.textContent = "最近分";
    return;
  }
  if (isPracticeUnit()) {
    elements.statDueLabel.textContent = "已做";
    elements.statStudiedTodayLabel.textContent = "今日答题";
    elements.statStreakLabel.textContent = "正确率";
    elements.statLearningLabel.textContent = "错题";
    elements.statMasteredLabel.textContent = "未做";
    return;
  }
  elements.statDueLabel.textContent = "今日计划";
  elements.statStudiedTodayLabel.textContent = "今日已学";
  elements.statStreakLabel.textContent = "连续天数";
  elements.statLearningLabel.textContent = "学习中";
  elements.statMasteredLabel.textContent = "已掌握";
}

function renderFilterLabels() {
  if (isTextbookUnit()) {
    elements.filterTitle.textContent = "复习状态";
    document.querySelectorAll(".filter-button").forEach((button) => {
      const labelMap = {
        all: "全部",
        new: "未复习",
        due: "到期",
        learning: "学习中",
        mastered: "已掌握",
      };
      button.hidden = false;
      button.textContent = labelMap[button.dataset.filter] || button.textContent;
      button.classList.toggle("active", button.dataset.filter === state.activeFilter);
    });
    return;
  }

  const practiceMode = isPracticeUnit();
  if (practiceMode && state.activeFilter === "mastered") {
    state.activeFilter = "all";
  }
  elements.filterTitle.textContent = practiceMode ? "题目状态" : "筛选";
  document.querySelectorAll(".filter-button").forEach((button) => {
    if (practiceMode) {
      const labelMap = {
        all: "全部题",
        new: "未做",
        due: "错题",
        learning: "已正确",
      };
      button.hidden = button.dataset.filter === "mastered";
      button.textContent = labelMap[button.dataset.filter] || button.textContent;
    } else {
      const labelMap = {
        all: "全部",
        new: "未学",
        due: "到期",
        learning: "学习中",
        mastered: "已掌握",
      };
      button.hidden = false;
      button.textContent = labelMap[button.dataset.filter] || button.textContent;
    }
    button.classList.toggle("active", button.dataset.filter === state.activeFilter);
  });
}

function manifestDatasets() {
  return Array.isArray(state.manifest?.datasets) ? state.manifest.datasets : [];
}

function sourceIdForDataset(dataset) {
  return dataset?.sourceId || "source-uncategorized";
}

function manifestSources() {
  const datasets = manifestDatasets();
  if (Array.isArray(state.manifest?.sources) && state.manifest.sources.length) {
    return state.manifest.sources;
  }

  const sourceMap = new Map();
  for (const dataset of datasets) {
    const sourceId = sourceIdForDataset(dataset);
    if (!sourceMap.has(sourceId)) {
      sourceMap.set(sourceId, {
        id: sourceId,
        title: sourceId === "source-uncategorized" ? "未分类教材" : sourceId,
        unitCount: 0,
        vocabularyCount: 0,
      });
    }
    const source = sourceMap.get(sourceId);
    source.unitCount += 1;
    source.vocabularyCount += dataset.vocabularyCount || 0;
  }
  return [...sourceMap.values()];
}

function manifestCategories() {
  if (Array.isArray(state.manifest?.categories) && state.manifest.categories.length) {
    return sortedLibraryCategories(state.manifest.categories);
  }
  const sources = manifestSources();
  return sources.length
    ? [
        {
          id: "vocabulary",
          title: "词汇",
          sourceIds: sources.map((source) => source.id),
          sourceCount: sources.length,
          unitCount: sources.reduce((total, source) => total + (source.unitCount || 0), 0),
          vocabularyCount: sources.reduce((total, source) => total + (source.vocabularyCount || 0), 0),
        },
      ]
    : [];
}

function sortedLibraryCategories(categories) {
  const order = new Map([
    ["textbook", 0],
    ["vocabulary", 1],
    ["grammar", 2],
    ["practice", 3],
  ]);
  return [...categories].sort((a, b) => {
    const left = order.has(a.id) ? order.get(a.id) : order.size;
    const right = order.has(b.id) ? order.get(b.id) : order.size;
    return left - right || String(a.title || a.id).localeCompare(String(b.title || b.id), "zh-Hans");
  });
}

function sourcesForCategory(category) {
  const sources = manifestSources();
  const sourceIds = new Set(category.sourceIds || []);
  if (!sourceIds.size) {
    return sources;
  }
  return sources.filter((source) => sourceIds.has(source.id));
}

function datasetsForSource(sourceId) {
  return manifestDatasets().filter((dataset) => sourceIdForDataset(dataset) === sourceId);
}

function sourceForId(sourceId) {
  return manifestSources().find((source) => source.id === sourceId) || null;
}

function isQuestionOnlySource(source) {
  return source?.categoryId === "practice";
}

function isTextbookSource(source) {
  return source?.categoryId === "textbook";
}

function sourceCountLabel(source) {
  if (isTextbookSource(source)) {
    const vocabularyCount = source.lessonVocabularyCount || 0;
    return `${source.lessonStepCount || 0} 步骤 · ${source.audioCount || 0} 音频${
      vocabularyCount ? ` · ${vocabularyCount} 词汇` : ""
    }`;
  }
  if (isQuestionOnlySource(source)) {
    return `${source.sourceTextTestCount || 0} 道题`;
  }
  return `${source.vocabularyCount || 0} 条目`;
}

function datasetCountLabel(dataset, source) {
  if (isTextbookSource(source)) {
    const vocabularyCount = dataset.lessonVocabularyCount || 0;
    return `${dataset.lessonStepCount || 0} 步骤 · ${dataset.audioCount || 0} 音频${
      vocabularyCount ? ` · ${vocabularyCount} 词汇` : ""
    }`;
  }
  if (isQuestionOnlySource(source)) {
    return `${dataset.sourceTextTestCount || 0} 道题`;
  }
  return `${dataset.vocabularyCount || 0} 条目`;
}

function showLibrary() {
  state.activeScreen = "library";
  elements.libraryView.hidden = false;
  elements.studyShell.hidden = true;
}

function showStudy() {
  state.activeScreen = "study";
  elements.libraryView.hidden = true;
  elements.studyShell.hidden = false;
}

function renderLibrary() {
  elements.categoryList.textContent = "";
  const categories = manifestCategories();
  if (!categories.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "还没有可以学习的教材。";
    elements.categoryList.append(empty);
    return;
  }

  for (const category of categories) {
    const section = document.createElement("section");
    section.className = "category-section";

    const header = document.createElement("div");
    header.className = "category-header";
    const title = document.createElement("h2");
    const summary = document.createElement("p");
    title.textContent = category.title || category.id;
    if (category.id === "textbook") {
      summary.textContent = `${category.sourceCount || 0} 本教材 · ${category.unitCount || 0} 课 · ${
        category.lessonStepCount || 0
      } 个步骤 · ${category.audioCount || 0} 个音频`;
    } else {
      summary.textContent = `${category.sourceCount || 0} 本教材 · ${category.unitCount || 0} 个单元 · ${
        category.vocabularyCount || 0
      } 条目`;
    }
    header.append(title, summary);

    const grid = document.createElement("div");
    grid.className = "source-card-grid";
    for (const source of sourcesForCategory(category)) {
      const card = document.createElement("button");
      card.className = "source-card";
      card.type = "button";
      card.dataset.sourceId = source.id;

      const cardTitle = document.createElement("strong");
      const cardMeta = document.createElement("span");
      const cardAction = document.createElement("span");
      cardTitle.textContent = source.title || source.id;
      cardMeta.textContent = `${source.unitCount || 0} ${isTextbookSource(source) ? "课" : "个单元"} · ${sourceCountLabel(source)}`;
      cardAction.className = "source-card-action";
      cardAction.textContent = "进入学习";
      card.append(cardTitle, cardMeta, cardAction);
      grid.append(card);
    }

    section.append(header, grid);
    elements.categoryList.append(section);
  }
}

async function openSource(sourceId) {
  showStudy();
  const location = sourceLocation(sourceId);
  state.activeView = "today";
  await loadSource(sourceId, location?.datasetId || "", { restoreLocation: location });
}

function renderSourceOptions() {
  elements.sourceSelect.textContent = "";
  for (const source of manifestSources()) {
    const option = document.createElement("option");
    option.value = source.id;
    option.textContent = `${source.title} (${source.unitCount || 0} ${isTextbookSource(source) ? "课" : "单元"})`;
    elements.sourceSelect.append(option);
  }
  elements.sourceSelect.value = state.sourceId;
}

function renderUnitOptions(sourceId) {
  const datasets = datasetsForSource(sourceId);
  const source = sourceForId(sourceId);
  elements.unitSelect.textContent = "";
  for (const dataset of datasets) {
    const option = document.createElement("option");
    option.value = dataset.id;
    option.textContent = `${dataset.title} (${datasetCountLabel(dataset, source)})`;
    elements.unitSelect.append(option);
  }
  return datasets;
}

function resetCourseFilters() {
  state.query = "";
  elements.searchInput.value = "";
  state.activeFilter = "all";
  state.practicePool = "all";
  state.practiceTypeFilter = "all";
  state.lessonStepId = "";
  state.lessonReviewIndex = 0;
  state.lessonReviewRevealed = false;
  state.lessonPracticeReviewOrder = [];
  state.lessonPracticeReviewSignature = "";
  state.lessonTestType = "";
  state.lessonVocabularyPracticeIndex = 0;
  state.lessonGrammarPracticeIndex = 0;
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });
}

function currentUnitId() {
  return state.unitData?.unit?.id || "";
}

function unitStore() {
  const unitId = currentUnitId();
  if (!state.progress.units[unitId]) {
    state.progress.units[unitId] = { words: {} };
  }
  if (!state.progress.units[unitId].words) {
    state.progress.units[unitId].words = {};
  }
  return state.progress.units[unitId];
}

function wordRecord(wordId) {
  return state.progress.units[currentUnitId()]?.words?.[wordId] || null;
}

function ensureWordRecord(wordId) {
  const store = unitStore();
  if (!store.words[wordId]) {
    const today = todayString();
    store.words[wordId] = {
      status: "new",
      firstSeen: today,
      lastReviewed: null,
      nextReview: today,
      interval: 0,
      ease: 2.5,
      reviews: 0,
      correctStreak: 0,
      lapses: 0,
    };
  }
  return store.words[wordId];
}

function getStatus(wordId) {
  return wordRecord(wordId)?.status || "new";
}

function recordEvent(type, payload = {}) {
  const now = new Date();
  state.progress.events.unshift({
    id: `${now.getTime()}-${Math.random().toString(16).slice(2)}`,
    timestamp: now.toISOString(),
    date: todayString(now),
    type,
    unitId: currentUnitId(),
    ...payload,
  });
  state.progress.events = state.progress.events.slice(0, MAX_EVENTS);
}

function findWord(wordId) {
  return state.unitData?.vocabulary.find((word) => word.id === wordId) || null;
}

function findWordForAnswer(answer) {
  const normalizedAnswer = normalize(answer);
  return (
    state.unitData?.vocabulary.find((word) => {
      return normalize(word.term) === normalizedAnswer || normalize(word.reading) === normalizedAnswer;
    }) || null
  );
}

function allSourceTextTests() {
  return state.unitData?.sourceTextTests || [];
}

function practiceStore() {
  const store = unitStore();
  if (!store.practice) {
    store.practice = { questions: {} };
  }
  if (!store.practice.questions) {
    store.practice.questions = {};
  }
  return store.practice;
}

function practiceQuestionRecord(questionId) {
  return state.progress.units[currentUnitId()]?.practice?.questions?.[questionId] || null;
}

function ensurePracticeQuestionRecord(questionId) {
  const practice = practiceStore();
  if (!practice.questions[questionId]) {
    practice.questions[questionId] = {
      attempts: 0,
      correctAttempts: 0,
      wrongAttempts: 0,
      lastAnswer: "",
      lastCorrect: null,
      lastTriedAt: "",
      mastered: false,
    };
  }
  return practice.questions[questionId];
}

function recordPracticeAnswer(test, submittedAnswer, isCorrect) {
  const record = ensurePracticeQuestionRecord(test.id);
  record.attempts += 1;
  record.correctAttempts += isCorrect ? 1 : 0;
  record.wrongAttempts += isCorrect ? 0 : 1;
  record.lastAnswer = submittedAnswer;
  record.lastCorrect = isCorrect;
  record.lastTriedAt = new Date().toISOString();
  record.mastered = isCorrect;
}

function practiceStatus(test) {
  const record = practiceQuestionRecord(test.id);
  if (!record || !record.attempts) {
    return "unattempted";
  }
  return record.lastCorrect ? "correct" : "wrong";
}

function practiceQuestionTypes() {
  return [...new Set(allSourceTextTests().map((test) => test.type || "未分类"))];
}

function practiceQuestionMatchesQuery(test) {
  const query = normalize(state.query);
  if (!query) {
    return true;
  }
  const { question } = splitSourceTestPrompt(test);
  const haystack = normalize([test.id, test.part, test.type, question, test.answer, test.explanation].join(" "));
  return haystack.includes(query);
}

function practiceTypeMatches(test) {
  return state.practiceTypeFilter === "all" || (test.type || "未分类") === state.practiceTypeFilter;
}

function practiceFilteredTests() {
  return allSourceTextTests().filter((test) => {
    const status = practiceStatus(test);
    let statusMatches = state.activeFilter === "all";
    if (state.activeFilter === "new") {
      statusMatches = status === "unattempted";
    } else if (state.activeFilter === "due") {
      statusMatches = status === "wrong";
    } else if (state.activeFilter === "learning") {
      statusMatches = status === "correct";
    }
    return statusMatches && practiceTypeMatches(test) && practiceQuestionMatchesQuery(test);
  });
}

function practiceQuizPoolTests() {
  const tests = allSourceTextTests();
  let poolTests = tests;
  if (state.practicePool === "unattempted") {
    poolTests = tests.filter((test) => practiceStatus(test) === "unattempted");
  } else if (state.practicePool === "incorrect") {
    poolTests = tests.filter((test) => practiceStatus(test) === "wrong");
  } else if (state.practicePool === "type" && state.practiceTypeFilter !== "all") {
    poolTests = tests.filter((test) => (test.type || "未分类") === state.practiceTypeFilter);
  }
  const lockedTest = state.quizRevealed
    ? tests.find((test) => test.id === state.quizLockedQuestionId)
    : null;
  if (lockedTest && !poolTests.some((test) => test.id === lockedTest.id)) {
    return [lockedTest, ...poolTests];
  }
  return poolTests;
}

function percentage(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function isPracticeRecordFromToday(record) {
  if (!record?.lastTriedAt) {
    return false;
  }
  return todayString(new Date(record.lastTriedAt)) === todayString();
}

function practiceStats(tests = allSourceTextTests()) {
  let attempted = 0;
  let correct = 0;
  let wrong = 0;
  let todayAnswered = 0;
  for (const test of tests) {
    const record = practiceQuestionRecord(test.id);
    if (!record || !record.attempts) {
      continue;
    }
    attempted += 1;
    correct += record.lastCorrect ? 1 : 0;
    wrong += record.lastCorrect ? 0 : 1;
    todayAnswered += isPracticeRecordFromToday(record) ? 1 : 0;
  }
  return {
    total: tests.length,
    attempted,
    correct,
    wrong,
    unanswered: Math.max(tests.length - attempted, 0),
    accuracy: percentage(correct, attempted),
    todayAnswered,
  };
}

function lessonData() {
  return state.unitData?.lesson || {};
}

function lessonSteps() {
  return Array.isArray(lessonData().steps) ? lessonData().steps : [];
}

function lessonAudioTracks() {
  return Array.isArray(lessonData().audioTracks) ? lessonData().audioTracks : [];
}

function lessonReviewItems() {
  return Array.isArray(lessonData().reviewItems) ? lessonData().reviewItems : [];
}

function lessonVocabularySections() {
  return Array.isArray(lessonData().vocabularySections) ? lessonData().vocabularySections : [];
}

function lessonVocabularyItems() {
  return lessonVocabularySections().flatMap((section) =>
    (section.items || []).map((item) => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionTitleZh: section.titleZh,
      sectionDescriptionZh: section.descriptionZh,
    }))
  );
}

function filteredLessonVocabularySections() {
  const query = normalize(state.query);
  return lessonVocabularySections()
    .map((section) => {
      const items = (section.items || []).filter((item) => {
        if (!query) {
          return true;
        }
        return normalize(
          [
            section.title,
            section.titleZh,
            section.descriptionZh,
            item.term,
            item.reading,
            item.partOfSpeech,
            item.meaningZh,
            item.analysisZh,
          ].join(" ")
        ).includes(query);
      });
      return { ...section, items };
    })
    .filter((section) => section.items.length);
}

function filteredLessonVocabularyItems() {
  return filteredLessonVocabularySections().flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionTitleZh: section.titleZh,
      sectionDescriptionZh: section.descriptionZh,
    }))
  );
}

function lessonVocabularyItemMap() {
  return new Map(lessonVocabularyItems().map((item) => [item.id, item]));
}

function lessonVocabularyChoiceLabel(item) {
  if (!item) {
    return "";
  }
  return item.term || item.reading || item.meaningZh || "";
}

function lessonVocabularyReadingText(item) {
  return item?.reading || item?.term || "";
}

function enrichLessonVocabularyPracticeQuestion(question, itemMap) {
  const item = itemMap.get(question.vocabularyId) || null;
  const choices = (question.choices || [])
    .map((choice) => {
      const choiceItem = itemMap.get(choice.vocabularyId) || null;
      return {
        ...choice,
        label: choice.label || lessonVocabularyChoiceLabel(choiceItem),
        reading: choice.reading || choiceItem?.reading || "",
        meaningZh: choice.labelZh || choice.meaningZh || choiceItem?.meaningZh || "",
        analysisZh: choice.analysisZh || choiceItem?.analysisZh || "",
        vocabulary: choiceItem,
      };
    })
    .filter((choice) => choice.value && choice.label);
  return {
    ...question,
    vocabulary: item,
    sectionTitle: question.sectionTitle || item?.sectionTitle || "ことば",
    sectionTitleZh: question.sectionTitleZh || item?.sectionTitleZh || "",
    prompt: question.prompt || "",
    answer: String(question.answer || ""),
    choices,
  };
}

function lessonVocabularyPracticeQuestions() {
  const itemMap = lessonVocabularyItemMap();
  const questions = Array.isArray(lessonData().vocabularyPracticeQuestions)
    ? lessonData().vocabularyPracticeQuestions
    : [];
  return questions.map((question) => enrichLessonVocabularyPracticeQuestion(question, itemMap));
}

function filteredLessonVocabularyPracticeQuestions() {
  const query = normalize(state.query);
  return lessonVocabularyPracticeQuestions().filter((question) => {
    if (!query) {
      return true;
    }
    const haystack = normalize(
      [
        question.id,
        question.type,
        question.sectionTitle,
        question.prompt,
        question.promptZh,
        question.vocabulary?.term,
        question.vocabulary?.reading,
        question.vocabulary?.meaningZh,
        question.vocabulary?.analysisZh,
        ...(question.choices || []).flatMap((choice) => [
          choice.label,
          choice.reading,
          choice.meaningZh,
          choice.analysisZh,
        ]),
      ].join(" ")
    );
    return haystack.includes(query);
  });
}

function lessonVocabularyPracticeQuestion(questionId) {
  return lessonVocabularyPracticeQuestions().find((question) => question.id === questionId) || null;
}

function lessonGrammarPracticeQuestions() {
  const questions = Array.isArray(lessonData().grammarPracticeQuestions) ? lessonData().grammarPracticeQuestions : [];
  return questions.map((question) => ({
    ...question,
    sectionTitle: question.sectionTitle || "文法・表現",
    type: question.type || "语境文法・表达选择",
    answer: String(question.answer || ""),
    acceptedAnswers: (question.acceptedAnswers || [])
      .map((answer) => String(answer || "").trim())
      .filter(Boolean),
    choices: (question.choices || [])
      .map((choice) => ({
        ...choice,
        value: String(choice.value || ""),
        label: choice.label || "",
      }))
      .filter((choice) => choice.value && choice.label),
  }));
}

function filteredLessonGrammarPracticeQuestions() {
  const query = normalize(state.query);
  return lessonGrammarPracticeQuestions().filter((question) => {
    if (!query) {
      return true;
    }
    const haystack = normalize(
      [
        question.id,
        question.type,
        question.pointId,
        question.pointTitle,
        question.sectionTitle,
        question.prompt,
        question.promptZh,
        question.answer,
        question.focus,
        question.explanationZh,
        ...(question.acceptedAnswers || []),
        ...(question.choices || []).map((choice) => choice.label),
      ].join(" ")
    );
    return haystack.includes(query);
  });
}

function lessonGrammarPracticeQuestion(questionId) {
  return lessonGrammarPracticeQuestions().find((question) => question.id === questionId) || null;
}

function isGrammarSelfCheckQuestion(question) {
  return question?.type === "grammar_cloze_self_check";
}

function lessonGrammarAcceptedAnswers(question) {
  return (question?.acceptedAnswers || [])
    .map((answer) => String(answer || "").trim())
    .filter(Boolean);
}

function orderedLessonPracticeQuestions(kind, questions) {
  const shuffleKey =
    kind === "vocabulary" ? "lessonVocabularyPracticeShuffle" : "lessonGrammarPracticeShuffle";
  const orderKey = kind === "vocabulary" ? "lessonVocabularyPracticeOrder" : "lessonGrammarPracticeOrder";
  const signatureKey =
    kind === "vocabulary" ? "lessonVocabularyPracticeOrderSignature" : "lessonGrammarPracticeOrderSignature";
  if (!state[shuffleKey]) {
    return questions;
  }

  const signature = questions.map((question) => question.id).join("|");
  const idMap = new Map(questions.map((question) => [question.id, question]));
  if (state[signatureKey] !== signature) {
    state[signatureKey] = signature;
    state[orderKey] = shuffledIds(questions);
  }

  const ordered = (state[orderKey] || []).map((id) => idMap.get(id)).filter(Boolean);
  if (ordered.length !== questions.length) {
    const usedIds = new Set(ordered.map((question) => question.id));
    const missing = questions.filter((question) => !usedIds.has(question.id));
    state[orderKey] = [...ordered.map((question) => question.id), ...shuffledIds(missing)];
    return state[orderKey].map((id) => idMap.get(id)).filter(Boolean);
  }

  return ordered;
}

function orderedLessonVocabularyPracticeQuestions() {
  return orderedLessonPracticeQuestions("vocabulary", filteredLessonVocabularyPracticeQuestions());
}

function orderedLessonGrammarPracticeQuestions() {
  return orderedLessonPracticeQuestions("grammar", filteredLessonGrammarPracticeQuestions());
}

function renderLessonPracticeShuffleToggle(kind, checked) {
  const label = document.createElement("label");
  label.className = "lesson-practice-shuffle-toggle";
  const input = document.createElement("input");
  const span = document.createElement("span");
  input.type = "checkbox";
  input.dataset.lessonPracticeShuffle = kind;
  input.checked = Boolean(checked);
  span.textContent = "乱序";
  label.append(input, span);
  return label;
}

function resetLessonPracticeOrder(kind = "all") {
  if (kind === "all" || kind === "vocabulary") {
    state.lessonVocabularyPracticeOrder = [];
    state.lessonVocabularyPracticeOrderSignature = "";
  }
  if (kind === "all" || kind === "grammar") {
    state.lessonGrammarPracticeOrder = [];
    state.lessonGrammarPracticeOrderSignature = "";
  }
}

function setLessonPracticeShuffle(kind, enabled) {
  if (kind === "vocabulary") {
    state.lessonVocabularyPracticeShuffle = Boolean(enabled);
    state.lessonVocabularyPracticeIndex = 0;
    resetLessonPracticeOrder("vocabulary");
  } else if (kind === "grammar") {
    state.lessonGrammarPracticeShuffle = Boolean(enabled);
    state.lessonGrammarPracticeIndex = 0;
    resetLessonPracticeOrder("grammar");
  }
  renderList();
  saveCurrentSourceLocation();
}

function lessonActivities() {
  return lessonSteps().flatMap((step) =>
    (step.activities || []).map((activity) => ({
      ...activity,
      stepId: step.id,
      stepTitle: step.title,
      stepTitleZh: step.titleZh,
    }))
  );
}

function lessonActivity(activityId) {
  return lessonActivities().find((activity) => activity.id === activityId) || null;
}

function lessonAudioTrack(audioId) {
  return lessonAudioTracks().find((track) => track.id === audioId) || null;
}

function lessonStep(stepId) {
  return lessonSteps().find((step) => step.id === stepId) || null;
}

function activeLessonStep() {
  const steps = lessonSteps();
  if (!steps.length) {
    return null;
  }
  if (!state.lessonStepId || !steps.some((step) => step.id === state.lessonStepId)) {
    state.lessonStepId = firstIncompleteLessonStepId() || steps[0].id;
  }
  return lessonStep(state.lessonStepId) || steps[0];
}

function createEmptyLessonStore(showChinese = true) {
  return {
    steps: {},
    activities: {},
    reviewItems: {},
    vocabularyPractice: {},
    grammarPractice: {},
    tests: {},
    audio: {},
    showChinese,
  };
}

function lessonStore() {
  const unitId = currentUnitId();
  if (!state.progress.lessons) {
    state.progress.lessons = {};
  }
  if (!state.progress.lessons[unitId]) {
    state.progress.lessons[unitId] = createEmptyLessonStore(true);
  }
  const store = state.progress.lessons[unitId];
  store.steps = store.steps || {};
  store.activities = store.activities || {};
  store.reviewItems = store.reviewItems || {};
  store.vocabularyPractice = store.vocabularyPractice || {};
  store.grammarPractice = store.grammarPractice || {};
  store.tests = store.tests || {};
  store.audio = store.audio || {};
  return store;
}

function lessonChineseEnabled() {
  if (!isTextbookUnit() || !currentUnitId()) {
    return false;
  }
  return lessonStore().showChinese !== false;
}

function setLessonChineseEnabled(enabled) {
  const store = lessonStore();
  store.showChinese = Boolean(enabled);
  saveProgress();
  render();
}

function isLessonEventForUnit(event, unitId = currentUnitId()) {
  return event.unitId === unitId && String(event.type || "").startsWith("lesson-");
}

function lessonResetSnapshot() {
  const unitId = currentUnitId();
  const store = state.progress.lessons?.[unitId] || {};
  const completedSteps = Object.values(store.steps || {}).filter((record) => record?.completed).length;
  const activities = Object.values(store.activities || {}).filter(
    (record) => record?.value || record?.checked || record?.revealed
  ).length;
  const audioPlays = Object.values(store.audio || {}).reduce((sum, record) => sum + (Number(record?.plays) || 0), 0);
  const vocabularyPractice = Object.values(store.vocabularyPractice || {}).filter(
    (record) => record?.attempts || record?.value || record?.checked || record?.revealed
  ).length;
  const grammarPractice = Object.values(store.grammarPractice || {}).filter(
    (record) => record?.attempts || record?.value || record?.checked || record?.revealed
  ).length;
  const reviewItems = Object.values(store.reviewItems || {}).filter(
    (record) => record?.reviews || (record?.status && record.status !== "new")
  ).length;
  const tests = Object.values(store.tests || {}).filter(
    (record) => record?.questionIds?.length || record?.completedAt || Number.isFinite(record?.score)
  ).length;
  const events = state.progress.events.filter((event) => isLessonEventForUnit(event, unitId)).length;
  const total =
    completedSteps + activities + audioPlays + vocabularyPractice + grammarPractice + tests + events;
  return { completedSteps, activities, audioPlays, vocabularyPractice, grammarPractice, reviewItems, tests, events, total };
}

function resetCurrentLessonProgress() {
  if (!isTextbookUnit() || !currentUnitId()) {
    return;
  }
  const unitId = currentUnitId();
  const showChinese = state.progress.lessons?.[unitId]?.showChinese !== false;
  if (!state.progress.lessons) {
    state.progress.lessons = {};
  }
  state.progress.lessons[unitId] = createEmptyLessonStore(showChinese);
  state.progress.events = state.progress.events.filter((event) => !isLessonEventForUnit(event, unitId));
  state.lessonStepId = lessonSteps()[0]?.id || "";
  state.lessonReviewIndex = 0;
  state.lessonReviewRevealed = false;
  state.lessonPracticeReviewOrder = [];
  state.lessonPracticeReviewSignature = "";
  state.lessonTestType = "";
  state.lessonVocabularyPracticeIndex = 0;
  state.lessonGrammarPracticeIndex = 0;
  state.query = "";
  elements.searchInput.value = "";
  state.activeFilter = "all";
  state.practicePool = "all";
  state.practiceTypeFilter = "all";
  state.activeView = "today";
  saveProgress();
  render();
  saveCurrentSourceLocation();
}

function confirmResetCurrentLessonProgress() {
  if (!isTextbookUnit()) {
    return;
  }
  const title = state.unitData?.unit?.title || "当前课程";
  const confirmed = window.confirm(
    `重置「${title}」的学习状态？\n\n这会清空本课步骤完成、自测答案、音频播放、词汇练习、文法练习、测验成绩和学习记录。其他课程不会受影响。`
  );
  if (confirmed) {
    resetCurrentLessonProgress();
  }
}

function lessonStepRecord(stepId) {
  return state.progress.lessons?.[currentUnitId()]?.steps?.[stepId] || null;
}

function ensureLessonStepRecord(stepId) {
  const store = lessonStore();
  if (!store.steps[stepId]) {
    store.steps[stepId] = {
      completed: false,
      completedAt: "",
      updatedAt: "",
    };
  }
  return store.steps[stepId];
}

function lessonActivityRecord(activityId) {
  return state.progress.lessons?.[currentUnitId()]?.activities?.[activityId] || null;
}

function ensureLessonActivityRecord(activityId) {
  const store = lessonStore();
  if (!store.activities[activityId]) {
    store.activities[activityId] = {
      value: "",
      checked: false,
      revealed: false,
      correct: null,
      updatedAt: "",
    };
  }
  return store.activities[activityId];
}

function lessonReviewRecord(itemId) {
  return state.progress.lessons?.[currentUnitId()]?.reviewItems?.[itemId] || null;
}

function ensureLessonReviewRecord(itemId) {
  const store = lessonStore();
  if (!store.reviewItems[itemId]) {
    const today = todayString();
    store.reviewItems[itemId] = {
      status: "new",
      firstSeen: today,
      lastReviewed: null,
      nextReview: today,
      interval: 0,
      ease: 2.5,
      reviews: 0,
      correctStreak: 0,
      lapses: 0,
    };
  }
  return store.reviewItems[itemId];
}

function lessonVocabularyPracticeRecord(itemId) {
  return state.progress.lessons?.[currentUnitId()]?.vocabularyPractice?.[itemId] || null;
}

function ensureLessonVocabularyPracticeRecord(itemId) {
  const store = lessonStore();
  if (!store.vocabularyPractice[itemId]) {
    store.vocabularyPractice[itemId] = {
      value: "",
      checked: false,
      revealed: false,
      correct: null,
      attempts: 0,
      lastAnswer: "",
      lastAnswerLabel: "",
      notice: "",
      updatedAt: "",
    };
  }
  return store.vocabularyPractice[itemId];
}

function lessonGrammarPracticeRecord(questionId) {
  return state.progress.lessons?.[currentUnitId()]?.grammarPractice?.[questionId] || null;
}

function ensureLessonGrammarPracticeRecord(questionId) {
  const store = lessonStore();
  if (!store.grammarPractice[questionId]) {
    store.grammarPractice[questionId] = {
      value: "",
      checked: false,
      revealed: false,
      correct: null,
      attempts: 0,
      lastAnswer: "",
      lastAnswerLabel: "",
      notice: "",
      updatedAt: "",
    };
  }
  return store.grammarPractice[questionId];
}

function firstIncompleteLessonStepId() {
  return lessonSteps().find((step) => !lessonStepRecord(step.id)?.completed)?.id || "";
}

function currentLessonStepIndex() {
  const steps = lessonSteps();
  return Math.max(
    0,
    steps.findIndex((step) => step.id === activeLessonStep()?.id)
  );
}

function lessonStepCompletion() {
  const steps = lessonSteps();
  const completed = steps.filter((step) => lessonStepRecord(step.id)?.completed).length;
  return {
    total: steps.length,
    completed,
    percent: percentage(completed, steps.length),
  };
}

function isLessonReviewDue(item) {
  const record = lessonReviewRecord(item.id);
  return !record || !record.nextReview || record.nextReview <= todayString();
}

function lessonReviewStatus(item) {
  const record = lessonReviewRecord(item.id);
  if (!record || !record.reviews) {
    return "new";
  }
  return record.status || "learning";
}

function filteredLessonReviewItems() {
  const query = normalize(state.query);
  return lessonReviewItems().filter((item) => {
    const status = lessonReviewStatus(item);
    let statusMatches = state.activeFilter === "all";
    if (state.activeFilter === "due") {
      statusMatches = isLessonReviewDue(item);
    } else if (state.activeFilter !== "all") {
      statusMatches = status === state.activeFilter;
    }
    const haystack = normalize([item.id, item.type, item.prompt, item.promptZh, item.answer, item.answerZh, item.analysisZh].join(" "));
    return statusMatches && (!query || haystack.includes(query));
  });
}

function textbookStats() {
  const completion = lessonStepCompletion();
  const testStats = lessonTestTypes().map((type) => ({ type, ...lessonTestStats(type) }));
  const completedTests = testStats.filter((stats) => stats.completed).length;
  const latestCompleted = testStats
    .filter((stats) => stats.completedAt)
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0];
  const todayActivities = todayEvents().filter(
    (event) => event.unitId === currentUnitId() && String(event.type || "").startsWith("lesson-")
  ).length;
  return {
    ...completion,
    due: completedTests,
    mastered: latestCompleted ? `${latestCompleted.score}%` : "0%",
    todayActivities,
  };
}

function lessonVocabularyPracticeStats(questions = lessonVocabularyPracticeQuestions()) {
  let attempted = 0;
  let correct = 0;
  for (const question of questions) {
    const record = lessonVocabularyPracticeRecord(question.id);
    if (!record?.attempts) {
      continue;
    }
    attempted += 1;
    correct += record.correct ? 1 : 0;
  }
  return {
    total: questions.length,
    attempted,
    correct,
    wrong: Math.max(attempted - correct, 0),
    accuracy: percentage(correct, attempted),
  };
}

function lessonGrammarPracticeStats(questions = lessonGrammarPracticeQuestions()) {
  let attempted = 0;
  let correct = 0;
  for (const question of questions) {
    const record = lessonGrammarPracticeRecord(question.id);
    if (!record?.attempts) {
      continue;
    }
    attempted += 1;
    correct += record.correct ? 1 : 0;
  }
  return {
    total: questions.length,
    attempted,
    correct,
    wrong: Math.max(attempted - correct, 0),
    accuracy: percentage(correct, attempted),
  };
}

function lessonTestConfig(type) {
  if (type === "vocabulary") {
    return {
      type,
      title: "词汇测验",
      questionLabel: "词汇",
      questions: lessonVocabularyPracticeQuestions,
    };
  }
  if (type === "grammar") {
    return {
      type,
      title: "文法・表达测验",
      questionLabel: "文法・表达",
      questions: lessonGrammarPracticeQuestions,
    };
  }
  return null;
}

function lessonTestTypes() {
  return ["vocabulary", "grammar"];
}

function lessonTestQuestions(type) {
  return lessonTestConfig(type)?.questions() || [];
}

function createEmptyLessonTestSession(questionIds = []) {
  return {
    questionIds,
    answers: {},
    currentIndex: 0,
    startedAt: questionIds.length ? new Date().toISOString() : "",
    completedAt: "",
    total: questionIds.length,
    correct: 0,
    score: null,
  };
}

function lessonTestSession(type) {
  if (!VALID_LESSON_TEST_TYPES.has(type)) {
    return null;
  }
  const store = lessonStore();
  store.tests = store.tests || {};
  if (!store.tests[type]) {
    store.tests[type] = createEmptyLessonTestSession();
  }
  const session = store.tests[type];
  const validIds = new Set(lessonTestQuestions(type).map((question) => question.id));
  session.questionIds = Array.isArray(session.questionIds)
    ? session.questionIds.filter((questionId) => validIds.has(questionId))
    : [];
  session.answers = session.answers && typeof session.answers === "object" ? session.answers : {};
  for (const questionId of Object.keys(session.answers)) {
    if (!validIds.has(questionId)) {
      delete session.answers[questionId];
    }
  }
  session.currentIndex = normalizeStoredIndex(session.currentIndex);
  session.currentIndex = session.questionIds.length ? Math.min(session.currentIndex, session.questionIds.length - 1) : 0;
  session.total = session.questionIds.length;
  return session;
}

function lessonTestAnswerRecord(type, questionId) {
  return lessonTestSession(type)?.answers?.[questionId] || null;
}

function ensureLessonTestAnswerRecord(type, questionId) {
  const session = lessonTestSession(type);
  if (!session) {
    return null;
  }
  session.answers[questionId] = session.answers[questionId] || {
    selectedAnswer: "",
    submittedAnswer: "",
    submittedAnswerLabel: "",
    checked: false,
    revealed: false,
    correct: null,
    updatedAt: "",
  };
  return session.answers[questionId];
}

function lessonTestStats(type) {
  const session = lessonTestSession(type);
  if (!session) {
    return { total: 0, answered: 0, correct: 0, score: 0, completed: false, completedAt: "" };
  }
  let answered = 0;
  let correct = 0;
  for (const questionId of session.questionIds) {
    const record = session.answers?.[questionId];
    if (!record?.checked) {
      continue;
    }
    answered += 1;
    if (record.correct) {
      correct += 1;
    }
  }
  const total = session.questionIds.length;
  return {
    total,
    answered,
    correct,
    score: percentage(correct, total),
    completed: Boolean(total && answered >= total),
    completedAt: session.completedAt || "",
  };
}

function completeLessonTestIfReady(type) {
  const session = lessonTestSession(type);
  const stats = lessonTestStats(type);
  if (!session || !stats.completed) {
    return;
  }
  const firstCompletion = !session.completedAt;
  session.completedAt = session.completedAt || new Date().toISOString();
  session.correct = stats.correct;
  session.total = stats.total;
  session.score = stats.score;
  if (firstCompletion) {
    recordEvent("lesson-test", {
      testType: type,
      term: lessonTestConfig(type)?.title || "测验",
      result: "completed",
      correct: stats.correct,
      total: stats.total,
      score: stats.score,
    });
  }
}

function startLessonTest(type, forceNew = false) {
  const config = lessonTestConfig(type);
  if (!config) {
    return;
  }
  const existing = lessonTestSession(type);
  const existingStats = lessonTestStats(type);
  if (!forceNew && existing?.questionIds?.length && !existingStats.completed) {
    state.lessonTestType = type;
    resetQuizFeedback();
    renderQuiz();
    saveCurrentSourceLocation();
    return;
  }
  const questions = lessonTestQuestions(type);
  const limit = Math.min(LESSON_TEST_SIZE, questions.length);
  const questionIds = shuffledIds(questions.map((question) => ({ id: question.id }))).slice(0, limit);
  const store = lessonStore();
  store.tests[type] = createEmptyLessonTestSession(questionIds);
  state.lessonTestType = type;
  resetQuizFeedback();
  saveProgress();
  render();
  saveCurrentSourceLocation();
}

function currentLessonTestEntry() {
  if (!VALID_LESSON_TEST_TYPES.has(state.lessonTestType)) {
    return null;
  }
  const session = lessonTestSession(state.lessonTestType);
  if (!session?.questionIds?.length) {
    return null;
  }
  const questions = lessonTestQuestions(state.lessonTestType);
  const questionMap = new Map(questions.map((question) => [question.id, question]));
  session.currentIndex = Math.min(session.currentIndex, session.questionIds.length - 1);
  const questionId = session.questionIds[session.currentIndex];
  const question = questionMap.get(questionId);
  if (!question) {
    return null;
  }
  return {
    type: state.lessonTestType,
    config: lessonTestConfig(state.lessonTestType),
    session,
    question,
    record: lessonTestAnswerRecord(state.lessonTestType, question.id),
    index: session.currentIndex,
    total: session.questionIds.length,
  };
}

function lessonPracticeReviewId(type, questionId) {
  return `${type}:${questionId}`;
}

function lessonPracticeReviewPool() {
  const vocabularyQuestions = lessonVocabularyPracticeQuestions()
    .map((question) => ({
      id: lessonPracticeReviewId("vocabulary", question.id),
      type: "vocabulary",
      question,
      record: lessonVocabularyPracticeRecord(question.id),
    }))
    .filter((entry) => Number(entry.record?.attempts || 0) > 0);
  const grammarQuestions = lessonGrammarPracticeQuestions()
    .map((question) => ({
      id: lessonPracticeReviewId("grammar", question.id),
      type: "grammar",
      question,
      record: lessonGrammarPracticeRecord(question.id),
    }))
    .filter((entry) => Number(entry.record?.attempts || 0) > 0);
  return [...vocabularyQuestions, ...grammarQuestions];
}

function shuffledIds(entries) {
  const ids = entries.map((entry) => entry.id);
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]];
  }
  return ids;
}

function orderedLessonPracticeReviewPool() {
  const pool = lessonPracticeReviewPool();
  const signature = pool.map((entry) => entry.id).join("|");
  if (signature !== state.lessonPracticeReviewSignature) {
    state.lessonPracticeReviewSignature = signature;
    state.lessonPracticeReviewOrder = shuffledIds(pool);
    state.lessonReviewIndex = 0;
    resetQuizFeedback();
  }
  const byId = new Map(pool.map((entry) => [entry.id, entry]));
  const ordered = (state.lessonPracticeReviewOrder || []).map((id) => byId.get(id)).filter(Boolean);
  if (ordered.length !== pool.length) {
    const usedIds = new Set(ordered.map((entry) => entry.id));
    ordered.push(...pool.filter((entry) => !usedIds.has(entry.id)));
    state.lessonPracticeReviewOrder = ordered.map((entry) => entry.id);
  }
  return ordered;
}

function currentLessonPracticeReviewEntry() {
  const entries = orderedLessonPracticeReviewPool();
  if (!entries.length) {
    return null;
  }
  state.lessonReviewIndex = Math.min(state.lessonReviewIndex, entries.length - 1);
  return entries[state.lessonReviewIndex] || null;
}

function markLessonStep(stepId, completed) {
  const step = lessonStep(stepId);
  if (!step) {
    return;
  }
  const record = ensureLessonStepRecord(stepId);
  record.completed = completed;
  record.updatedAt = new Date().toISOString();
  record.completedAt = completed ? record.updatedAt : "";
  recordEvent("lesson-step", {
    stepId,
    term: step.title,
    result: completed ? "completed" : "open",
  });
  saveProgress();
  render();
  saveCurrentSourceLocation();
}

function recordLessonAudioPlay(audioId) {
  const track = lessonAudioTrack(audioId);
  if (!track) {
    return;
  }
  const store = lessonStore();
  const now = new Date().toISOString();
  if (!store.audio[audioId]) {
    store.audio[audioId] = { plays: 0, lastPlayedAt: "" };
  }
  store.audio[audioId].plays += 1;
  store.audio[audioId].lastPlayedAt = now;
  recordEvent("lesson-audio", {
    audioId,
    term: `${track.label || audioId} ${track.title || ""}`.trim(),
    result: "played",
  });
  saveProgress();
  renderStats();
  renderLogs();
}

function answerMatches(userAnswer, correctAnswer) {
  const expected = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
  const normalizedUser = normalize(userAnswer);
  return expected.some((answer) => normalizedUser === normalize(answer));
}

function lessonVocabularyAnswerVariants(item) {
  const variants = new Set();
  const add = (value) => {
    const text = String(value || "")
      .replace(/[＊*]/g, "")
      .trim();
    if (text) {
      variants.add(text);
    }
  };
  const term = String(item?.term || "");
  add(term);
  add(term.replace(/[＊*]/g, ""));
  for (const part of term.split(/[\/／]/)) {
    add(part);
  }

  const parentheticalMatches = [...term.matchAll(/[（(]([^（）()]+)[）)]/g)].map((match) => match[1].trim());
  const base = term.replace(/[（(][^（）()]+[）)]/g, "").trim();
  add(base);
  add(base.replace(/[～~]/g, ""));
  for (const value of parentheticalMatches) {
    add(value);
    if (base && /^[ぁ-んァ-ンー]+$/.test(value) && !base.includes("～")) {
      add(`${base}${value}`);
    }
  }

  if (item?.reading) {
    for (const reading of String(item.reading).split(/[\/／・、,，\s]+/)) {
      add(reading);
    }
  }

  return [...variants];
}

function lessonVocabularyAnswerMatches(userAnswer, item) {
  const normalizedUser = normalize(userAnswer);
  if (!normalizedUser) {
    return false;
  }
  return lessonVocabularyAnswerVariants(item).some((answer) => normalizedUser === normalize(answer));
}

function updateLessonActivityValue(activityId, value) {
  const record = ensureLessonActivityRecord(activityId);
  record.value = value;
  record.updatedAt = new Date().toISOString();
  saveProgress();
}

function updateLessonVocabularyPracticeValue(questionId, value) {
  const record = ensureLessonVocabularyPracticeRecord(questionId);
  record.value = value;
  record.checked = false;
  record.correct = null;
  record.revealed = false;
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  saveProgress();
}

function updateLessonGrammarPracticeValue(questionId, value) {
  const record = ensureLessonGrammarPracticeRecord(questionId);
  record.value = value;
  record.checked = false;
  record.correct = null;
  record.revealed = false;
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  saveProgress();
}

function checkLessonActivity(activity) {
  const record = ensureLessonActivityRecord(activity.id);
  const value = record.value || "";
  let correct = null;
  if (activity.type === "choice" || activity.type === "cloze") {
    correct = answerMatches(value, activity.answer);
  } else if (activity.type === "selfCheck") {
    correct = value === "ok";
  }
  record.checked = true;
  record.revealed = true;
  record.correct = correct;
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-activity", {
    activityId: activity.id,
    term: activity.prompt,
    result: correct === null ? "checked" : correct ? "correct" : "wrong",
  });
  saveProgress();
  render();
  saveCurrentSourceLocation();
}

function toggleLessonActivityReference(activity) {
  const record = ensureLessonActivityRecord(activity.id);
  const nextRevealed = !record.revealed;
  record.revealed = nextRevealed;
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-activity", {
    activityId: activity.id,
    term: activity.prompt,
    result: nextRevealed ? "revealed" : "hidden",
  });
  saveProgress();
  render();
}

function checkLessonVocabularyPractice(question) {
  if (!question) {
    return;
  }
  const record = ensureLessonVocabularyPracticeRecord(question.id);
  const value = record.value || "";
  if (!value) {
    record.notice = "先选一个答案。";
    record.updatedAt = new Date().toISOString();
    saveProgress();
    render();
    return;
  }
  const correct = value === question.answer;
  const selectedChoice = (question.choices || []).find((choice) => choice.value === value);
  record.checked = true;
  record.revealed = true;
  record.correct = correct;
  record.attempts = (record.attempts || 0) + 1;
  record.lastAnswer = value;
  record.lastAnswerLabel = selectedChoice?.label || "";
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-vocabulary-practice", {
    questionId: question.id,
    itemId: question.vocabularyId,
    term: question.vocabulary?.term || question.prompt,
    result: correct ? "correct" : "wrong",
    submittedAnswer: value,
  });
  saveProgress();
  render();
}

function toggleLessonVocabularyPracticeAnswer(question) {
  if (!question) {
    return;
  }
  const record = ensureLessonVocabularyPracticeRecord(question.id);
  record.revealed = !record.revealed;
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-vocabulary-practice", {
    questionId: question.id,
    itemId: question.vocabularyId,
    term: question.vocabulary?.term || question.prompt,
    result: record.revealed ? "revealed" : "hidden",
  });
  saveProgress();
  render();
}

function moveLessonVocabularyPractice(offset) {
  const questions = orderedLessonVocabularyPracticeQuestions();
  if (!questions.length) {
    return;
  }
  state.lessonVocabularyPracticeIndex =
    (state.lessonVocabularyPracticeIndex + offset + questions.length) % questions.length;
  renderList();
  saveCurrentSourceLocation();
}

function checkLessonGrammarPractice(question) {
  if (!question) {
    return;
  }
  if (isGrammarSelfCheckQuestion(question)) {
    return;
  }
  const record = ensureLessonGrammarPracticeRecord(question.id);
  const value = record.value || "";
  if (!value) {
    record.notice = "先选一个答案。";
    record.updatedAt = new Date().toISOString();
    saveProgress();
    render();
    return;
  }
  const correct = value === question.answer;
  const selectedChoice = (question.choices || []).find((choice) => choice.value === value);
  record.checked = true;
  record.revealed = true;
  record.correct = correct;
  record.attempts = (record.attempts || 0) + 1;
  record.lastAnswer = value;
  record.lastAnswerLabel = selectedChoice?.label || "";
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-grammar-practice", {
    questionId: question.id,
    pointId: question.pointId,
    term: question.pointTitle || question.prompt,
    result: correct ? "correct" : "wrong",
    submittedAnswer: value,
  });
  saveProgress();
  render();
}

function selfGradeLessonGrammarPractice(question, correct) {
  if (!question) {
    return;
  }
  const record = ensureLessonGrammarPracticeRecord(question.id);
  record.checked = true;
  record.revealed = true;
  record.correct = Boolean(correct);
  record.attempts = (record.attempts || 0) + 1;
  record.lastAnswer = correct ? "self-correct" : "self-wrong";
  record.lastAnswerLabel = correct ? "答对了" : "没答对";
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-grammar-practice", {
    questionId: question.id,
    pointId: question.pointId,
    term: question.pointTitle || question.focus || question.prompt,
    result: correct ? "correct" : "wrong",
    submittedAnswer: record.lastAnswerLabel,
  });
  saveProgress();
  render();
}

function toggleLessonGrammarPracticeAnswer(question) {
  if (!question) {
    return;
  }
  const record = ensureLessonGrammarPracticeRecord(question.id);
  record.revealed = !record.revealed;
  record.notice = "";
  record.updatedAt = new Date().toISOString();
  recordEvent("lesson-grammar-practice", {
    questionId: question.id,
    pointId: question.pointId,
    term: question.pointTitle || question.prompt,
    result: record.revealed ? "revealed" : "hidden",
  });
  saveProgress();
  render();
}

function moveLessonGrammarPractice(offset) {
  const questions = orderedLessonGrammarPracticeQuestions();
  if (!questions.length) {
    return;
  }
  state.lessonGrammarPracticeIndex =
    (state.lessonGrammarPracticeIndex + offset + questions.length) % questions.length;
  renderList();
  saveCurrentSourceLocation();
}

function gradeLessonReview(item, gradeKey) {
  const grade = REVIEW_GRADES[gradeKey];
  if (!item || !grade) {
    return;
  }
  const record = ensureLessonReviewRecord(item.id);
  const today = todayString();
  const previousInterval = record.interval || 0;
  let nextInterval = 1;

  if (gradeKey === "again") {
    record.ease = Math.max(1.3, record.ease - 0.2);
    record.correctStreak = 0;
    record.lapses += 1;
    nextInterval = 1;
  } else if (gradeKey === "hard") {
    record.ease = Math.max(1.3, record.ease - 0.05);
    record.correctStreak += 1;
    nextInterval = Math.max(1, Math.ceil(previousInterval * 1.2));
  } else if (gradeKey === "good") {
    record.correctStreak += 1;
    nextInterval = previousInterval === 0 ? 1 : Math.ceil(previousInterval * record.ease);
  } else if (gradeKey === "easy") {
    record.ease = Math.min(3.2, record.ease + 0.15);
    record.correctStreak += 1;
    nextInterval = previousInterval === 0 ? 3 : Math.ceil(previousInterval * (record.ease + 0.35));
  }

  record.status = nextInterval >= 14 ? "mastered" : "learning";
  record.interval = nextInterval;
  record.lastReviewed = today;
  record.nextReview = addDays(today, nextInterval);
  record.reviews += 1;

  recordEvent("lesson-review", {
    itemId: item.id,
    term: item.prompt,
    result: gradeKey,
    status: record.status,
    nextReview: record.nextReview,
    interval: record.interval,
  });
  state.lessonReviewRevealed = false;
  saveProgress();
  render();
}

function activeCardWord() {
  const words = cardVocabulary();
  return words[Math.min(state.cardIndex, Math.max(words.length - 1, 0))] || null;
}

function grammarPointTokens(point) {
  const stopTokens = new Set(["こと", "もの", "ため", "よう", "ない", "する", "ある", "いる"]);
  const term = String(point?.term || "");
  const termVariants = [
    term,
    term.replace(/[（(][^）)]*[）)]/g, ""),
    term.replace(/[（）()]/g, ""),
  ];
  const rawTokens = termVariants.flatMap((variant) => variant.split(/[\/／、,;；・\s]+/).concat(variant));
  const tokens = rawTokens
    .flatMap((token) => {
      const cleaned = normalize(
        token
          .replace(/[\u301c\uff5e~]/g, "")
          .replace(/[「」『』（）()\[\]［］【】]/g, " ")
          .trim()
      );
      let variants = [cleaned];
      if (/上で[はの]$/.test(cleaned)) {
        variants.push(cleaned.slice(0, -1));
      }
      variants = variants.flatMap((variant) => {
        const expanded = [variant];
        if (variant.includes("上")) {
          expanded.push(variant.replaceAll("上", "うえ"));
        }
        if (variant.includes("間")) {
          expanded.push(variant.replaceAll("間", "あいだ"));
        }
        return expanded;
      });
      return variants;
    })
    .filter((token) => token.length >= 2 && !stopTokens.has(token));
  return [...new Set(tokens)];
}

function grammarTestMatchesPoint(test, point) {
  const tokens = grammarPointTokens(point);
  if (!tokens.length) {
    return false;
  }
  const { question } = splitSourceTestPrompt(test);
  const haystack = normalize([question, test.answer, test.explanation].join(" "));
  return tokens.some((token) => haystack.includes(token));
}

function grammarPracticeContext() {
  const allTests = allSourceTextTests();
  if (!isGrammarUnit() || !state.quizGrammarPointId) {
    return { point: null, tests: allTests, isFallback: false };
  }

  const point = findWord(state.quizGrammarPointId);
  if (!point) {
    return { point: null, tests: allTests, isFallback: false };
  }

  const relatedTests = allTests.filter((test) => grammarTestMatchesPoint(test, point));
  return {
    point,
    tests: relatedTests.length ? relatedTests : allTests,
    isFallback: relatedTests.length === 0,
  };
}

function isDue(word) {
  const record = wordRecord(word.id);
  if (!record || record.status === "mastered") {
    return false;
  }
  return record.nextReview <= todayString();
}

function dueVocabulary() {
  return (state.unitData?.vocabulary || [])
    .filter(isDue)
    .sort((a, b) => {
      const left = wordRecord(a.id)?.nextReview || "";
      const right = wordRecord(b.id)?.nextReview || "";
      return left.localeCompare(right) || a.id.localeCompare(b.id);
    });
}

function newRecommendations() {
  const today = todayString();
  const unitId = currentUnitId();
  if (!state.progress.dailyPlans[today]) {
    state.progress.dailyPlans[today] = {};
  }
  const existingPlan = Array.isArray(state.progress.dailyPlans[today][unitId])
    ? state.progress.dailyPlans[today][unitId].filter((wordId) => {
        const word = findWord(wordId);
        return word && getStatus(word.id) === "new" && !wordRecord(word.id);
      })
    : [];
  const selectedIds = new Set(existingPlan);
  const nextPlan = [...existingPlan];
  for (const word of state.unitData?.vocabulary || []) {
    if (nextPlan.length >= DAILY_NEW_LIMIT) {
      break;
    }
    if (selectedIds.has(word.id) || getStatus(word.id) !== "new" || wordRecord(word.id)) {
      continue;
    }
    selectedIds.add(word.id);
    nextPlan.push(word.id);
  }
  const currentPlan = state.progress.dailyPlans[today][unitId] || [];
  if (
    !Array.isArray(state.progress.dailyPlans[today][unitId]) ||
    currentPlan.length !== nextPlan.length ||
    currentPlan.some((wordId, index) => wordId !== nextPlan[index])
  ) {
    state.progress.dailyPlans[today][unitId] = nextPlan;
    saveProgress();
  }
  return state.progress.dailyPlans[today][unitId]
    .map(findWord)
    .filter((word) => word && getStatus(word.id) === "new" && !wordRecord(word.id));
}

function dailyPlanVocabulary() {
  const selected = new Map();
  for (const word of dueVocabulary()) {
    selected.set(word.id, word);
  }
  for (const word of newRecommendations()) {
    selected.set(word.id, word);
  }
  return [...selected.values()];
}

function filteredVocabulary() {
  if (!state.unitData) {
    return [];
  }
  const query = normalize(state.query);
  return state.unitData.vocabulary.filter((word) => {
    const status = getStatus(word.id);
    let statusMatches = state.activeFilter === "all";
    if (state.activeFilter === "due") {
      statusMatches = isDue(word);
    } else if (state.activeFilter !== "all") {
      statusMatches = status === state.activeFilter;
    }
    const haystack = normalize(
      [word.id, word.term, word.reading, word.partOfSpeech, word.meaningHint, examplesText(word)].join(" ")
    );
    return statusMatches && (!query || haystack.includes(query));
  });
}

function cardVocabulary() {
  return state.cardMode === "today" ? dailyPlanVocabulary() : filteredVocabulary();
}

function reviewVocabulary() {
  const query = normalize(state.query);
  return dueVocabulary().filter((word) => {
    const haystack = normalize(
      [word.id, word.term, word.reading, word.partOfSpeech, word.meaningHint, examplesText(word)].join(" ")
    );
    return !query || haystack.includes(query);
  });
}

function todayEvents() {
  const today = todayString();
  return state.progress.events.filter((event) => event.date === today);
}

function todayStudySummary() {
  if (isTextbookUnit()) {
    const events = todayEvents().filter(
      (event) => event.unitId === currentUnitId() && String(event.type || "").startsWith("lesson-")
    );
    return {
      studiedWords: new Set(
        events.map((event) => event.stepId || event.activityId || event.itemId || event.audioId || event.testType).filter(Boolean)
      )
        .size,
      reviews: 0,
      quizzes: events.filter((event) => event.type === "lesson-activity" || event.type === "lesson-test").length,
    };
  }

  if (isPracticeUnit()) {
    const stats = practiceStats();
    const quizzes = todayEvents().filter((event) => event.type === "quiz" && event.unitId === currentUnitId()).length;
    return {
      studiedWords: stats.todayAnswered,
      reviews: 0,
      quizzes,
    };
  }

  const events = todayEvents().filter((event) => ["review", "status", "quiz"].includes(event.type));
  const words = new Set(events.map((event) => event.wordId).filter(Boolean));
  return {
    studiedWords: words.size,
    reviews: events.filter((event) => event.type === "review").length,
    quizzes: events.filter((event) => event.type === "quiz").length,
  };
}

function currentMasteredCount() {
  if (isTextbookUnit()) {
    return lessonTestTypes().filter((type) => lessonTestStats(type).completed).length;
  }

  if (isPracticeUnit()) {
    return practiceStats().correct;
  }
  return (state.unitData?.vocabulary || []).filter((word) => getStatus(word.id) === "mastered").length;
}

function streakCount() {
  let streak = 0;
  let cursor = todayString();
  while (state.progress.checkins[cursor]) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function setStatus(wordId, status) {
  const word = findWord(wordId);
  if (!word) {
    return;
  }

  if (status === "new") {
    const store = unitStore();
    delete store.words[wordId];
  } else {
    const record = ensureWordRecord(wordId);
    const today = todayString();
    record.status = status;
    record.lastReviewed = today;
    record.nextReview = status === "mastered" ? addDays(today, 30) : today;
    record.interval = status === "mastered" ? Math.max(record.interval, 30) : Math.max(record.interval, 1);
    record.reviews += 1;
  }

  recordEvent("status", {
    wordId,
    term: word.term,
    result: status,
  });
  saveProgress();
  render();
}

function reviewWord(wordId, gradeKey, shouldRender = true) {
  const word = findWord(wordId);
  const grade = REVIEW_GRADES[gradeKey];
  if (!word || !grade) {
    return;
  }

  const record = ensureWordRecord(wordId);
  const today = todayString();
  const previousInterval = record.interval || 0;
  let nextInterval = 1;

  if (gradeKey === "again") {
    record.ease = Math.max(1.3, record.ease - 0.2);
    record.correctStreak = 0;
    record.lapses += 1;
    nextInterval = 1;
  } else if (gradeKey === "hard") {
    record.ease = Math.max(1.3, record.ease - 0.05);
    record.correctStreak += 1;
    nextInterval = Math.max(1, Math.ceil(previousInterval * 1.2));
  } else if (gradeKey === "good") {
    record.correctStreak += 1;
    nextInterval = previousInterval === 0 ? 1 : Math.ceil(previousInterval * record.ease);
  } else if (gradeKey === "easy") {
    record.ease = Math.min(3.2, record.ease + 0.15);
    record.correctStreak += 1;
    nextInterval = previousInterval === 0 ? 3 : Math.ceil(previousInterval * (record.ease + 0.35));
  }

  record.status = nextInterval >= 14 ? "mastered" : "learning";
  record.interval = nextInterval;
  record.lastReviewed = today;
  record.nextReview = addDays(today, nextInterval);
  record.reviews += 1;

  recordEvent("review", {
    wordId,
    term: word.term,
    result: gradeKey,
    status: record.status,
    nextReview: record.nextReview,
    interval: record.interval,
  });
  saveProgress();
  if (shouldRender) {
    render();
  }
}

function statusControls(wordId) {
  const wrapper = document.createElement("div");
  wrapper.className = "status-controls";
  const current = getStatus(wordId);

  for (const status of STATUS_ORDER) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.wordId = wordId;
    button.dataset.status = status;
    button.textContent = STATUS_LABELS[status];
    if (status === current) {
      button.classList.add("active");
    }
    wrapper.append(button);
  }
  return wrapper;
}

function reviewControls(wordId) {
  const wrapper = document.createElement("div");
  wrapper.className = "review-controls";
  for (const [gradeKey, grade] of Object.entries(REVIEW_GRADES)) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.reviewWordId = wordId;
    button.dataset.grade = gradeKey;
    button.className = grade.className;
    button.textContent = grade.label;
    button.title = grade.intervalLabel;
    wrapper.append(button);
  }
  return wrapper;
}

function formatReviewDate(dateText) {
  if (!dateText) {
    return "未安排";
  }
  const today = todayString();
  if (dateText < today) {
    return `${dateText} 到期`;
  }
  if (dateText === today) {
    return "今天";
  }
  if (dateText === addDays(today, 1)) {
    return "明天";
  }
  return dateText;
}

function scheduleText(word) {
  const record = wordRecord(word.id);
  if (!record) {
    return "未开始";
  }
  return formatReviewDate(record.nextReview);
}

function renderMiniWordList(container, words, emptyText) {
  container.textContent = "";
  if (!words.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  for (const word of words) {
    const item = document.createElement("article");
    item.className = "review-item compact";

    const number = document.createElement("span");
    number.className = "review-number";
    number.textContent = word.id;

    const detail = document.createElement("div");
    const term = document.createElement("div");
    const reading = document.createElement("div");
    const meaning = document.createElement("div");
    term.className = "review-term";
    reading.className = "review-reading";
    term.textContent = word.term;
    reading.textContent = `${word.reading} · ${scheduleText(word)}`;
    meaning.textContent = word.meaningHint;
    detail.append(term, reading, meaning);

    item.append(number, detail, statusControls(word.id));
    container.append(item);
  }
}

function renderStats() {
  const vocabulary = state.unitData?.vocabulary || [];
  const labels = itemTypeLabels();
  const counts = { new: 0, learning: 0, mastered: 0 };
  for (const word of vocabulary) {
    counts[getStatus(word.id)] += 1;
  }
  const todaySummary = todayStudySummary();

  elements.studyTitle.textContent = labels.title;
  renderStatLabels(labels);
  renderFilterLabels();
  elements.termHeader.textContent = labels.term;
  elements.readingHeader.textContent = labels.reading;
  elements.typeHeader.textContent = labels.type;
  elements.meaningHeader.textContent = labels.meaning;
  elements.searchInput.placeholder = labels.search;
  elements.newContentHeading.textContent = labels.newContent;
  renderViewTabLabels(labels);

  if (isTextbookUnit()) {
    const stats = textbookStats();
    elements.statTotal.textContent = stats.total;
    elements.statDue.textContent = stats.completed;
    elements.statStudiedToday.textContent = stats.todayActivities;
    elements.statStreak.textContent = `${stats.percent}%`;
    elements.statLearning.textContent = stats.due;
    elements.statMastered.textContent = stats.mastered;
    return;
  }

  if (isPracticeUnit()) {
    const stats = practiceStats();
    elements.statTotal.textContent = stats.total;
    elements.statDue.textContent = stats.attempted;
    elements.statStudiedToday.textContent = stats.todayAnswered;
    elements.statStreak.textContent = `${stats.accuracy}%`;
    elements.statLearning.textContent = stats.wrong;
    elements.statMastered.textContent = stats.unanswered;
    return;
  }

  elements.statTotal.textContent = vocabulary.length;
  elements.statDue.textContent = dailyPlanVocabulary().length;
  elements.statStudiedToday.textContent = todaySummary.studiedWords;
  elements.statStreak.textContent = streakCount();
  elements.statLearning.textContent = counts.learning;
  elements.statMastered.textContent = counts.mastered;
}

function renderCheckin() {
  const today = todayString();
  const checkin = state.progress.checkins[today];
  elements.checkinStatus.classList.toggle("fail", Boolean(state.checkinFailure && !checkin));
  if (checkin) {
    const unitLabel = isTextbookUnit() ? "项课程活动" : "条目";
    elements.checkinStatus.textContent = isTextbookUnit()
      ? `今天已打卡：${checkin.studiedWords} ${unitLabel}，${checkin.quizzes} 次测验。`
      : `今天已打卡：${checkin.studiedWords} ${unitLabel}，${checkin.reviews} 次复习。`;
  } else {
    elements.checkinStatus.textContent = state.checkinFailure || "今天还没有打卡。";
  }
  elements.checkinButton.textContent = checkin ? "更新今日打卡" : "今日打卡";
}

function practicePoolLabel(pool = state.practicePool) {
  if (pool === "unattempted") {
    return "未做题";
  }
  if (pool === "incorrect") {
    return "错题";
  }
  if (pool === "type" && state.practiceTypeFilter !== "all") {
    return state.practiceTypeFilter;
  }
  return "全部题";
}

function practiceStatusLabel(test) {
  const status = practiceStatus(test);
  if (status === "correct") {
    return "已正确";
  }
  if (status === "wrong") {
    return "错题";
  }
  return "未做";
}

function appendPracticeMetric(container, value, label) {
  const item = document.createElement("div");
  const valueNode = document.createElement("strong");
  const labelNode = document.createElement("span");
  valueNode.textContent = value;
  labelNode.textContent = label;
  item.append(valueNode, labelNode);
  container.append(item);
}

function appendTextLine(container, text, className = "") {
  const item = document.createElement("p");
  if (className) {
    item.className = className;
  }
  item.textContent = text;
  container.append(item);
  return item;
}

function appendChineseText(container, text, className = "lesson-zh") {
  if (!lessonChineseEnabled() || !text) {
    return null;
  }
  const inlineParents = new Set(["P", "LI", "BUTTON", "SPAN", "STRONG"]);
  const item = document.createElement(inlineParents.has(container.tagName) ? "span" : "p");
  item.className = className;
  item.textContent = text;
  container.append(item);
  return item;
}

function appendBilingualLine(container, text, chineseText, className = "") {
  const item = appendTextLine(container, text, className);
  appendChineseText(item, chineseText);
  return item;
}

function renderTextbookChineseToggle() {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const text = document.createElement("span");
  label.className = "lesson-chinese-toggle";
  input.type = "checkbox";
  input.checked = lessonChineseEnabled();
  input.dataset.lessonChineseToggle = "true";
  text.textContent = "显示中文对照与解析";
  label.append(input, text);
  return label;
}

function renderTextbookAudio(container, audioId) {
  const track = lessonAudioTrack(audioId);
  const shell = document.createElement("div");
  shell.className = "lesson-audio";
  if (!track) {
    shell.textContent = `音频 ${audioId} 未配置。`;
    container.append(shell);
    return;
  }

  const title = document.createElement("strong");
  const audio = document.createElement("audio");
  title.textContent = `${track.label || track.id} · ${track.title || "音频"}`;
  audio.controls = true;
  audio.preload = "metadata";
  audio.dataset.audioId = track.id;
  audio.src = dataUrl(`../${track.path}`);
  audio.addEventListener("error", () => {
    const note = shell.querySelector(".lesson-audio-note") || document.createElement("span");
    note.className = "lesson-audio-note";
    note.textContent = "音频未找到，请确认 media 文件已导入。";
    shell.append(note);
  });
  shell.append(title);
  appendChineseText(shell, track.titleZh);
  shell.append(audio);
  container.append(shell);
}

function renderTextbookTranscript(container, audioId, collapsed = true) {
  const track = lessonAudioTrack(audioId);
  if (!track?.transcript?.length) {
    return;
  }
  const details = document.createElement("details");
  details.className = "lesson-transcript";
  details.open = !collapsed;
  const summary = document.createElement("summary");
  summary.textContent = "听力原文";
  details.append(summary);
  for (const line of track.transcript) {
    const row = document.createElement("p");
    const speaker = document.createElement("strong");
    const text = document.createElement("span");
    speaker.textContent = line.speaker ? `${line.speaker}：` : "";
    text.textContent = line.text || "";
    row.append(speaker, text);
    details.append(row);
    appendChineseText(details, line.translationZh, "lesson-zh transcript-zh");
  }
  container.append(details);
}

function renderTextbookBlock(container, block) {
  const shell = document.createElement("section");
  shell.className = `lesson-block lesson-block-${block.type || "plain"}`;
  if (block.title) {
    const title = document.createElement("h3");
    title.textContent = block.title;
    shell.append(title);
    appendChineseText(shell, block.titleZh, "lesson-zh lesson-title-zh");
  }

  if (block.type === "notice") {
    (block.lines || []).forEach((line, index) => {
      appendBilingualLine(shell, line, block.linesZh?.[index]);
    });
  } else if (block.type === "keyValue") {
    const grid = document.createElement("div");
    grid.className = "lesson-key-grid";
    for (const item of block.items || []) {
      const card = document.createElement("div");
      const term = document.createElement("strong");
      const detail = document.createElement("span");
      term.textContent = item.term || "";
      detail.textContent = item.detail || "";
      card.append(term, detail);
      appendChineseText(card, [item.termZh, item.detailZh].filter(Boolean).join("："));
      grid.append(card);
    }
    shell.append(grid);
  } else if (block.type === "audio") {
    renderTextbookAudio(shell, block.audioId);
  } else if (block.type === "transcript") {
    renderTextbookTranscript(shell, block.audioId, block.collapsed !== false);
  } else if (block.type === "expressionList" || block.type === "vocabGrid" || block.type === "checklist") {
    const list = document.createElement("ul");
    list.className = block.type === "vocabGrid" ? "lesson-vocab-grid" : "lesson-list";
    (block.items || []).forEach((item, index) => {
      const li = document.createElement("li");
      li.append(document.createTextNode(item));
      appendChineseText(li, block.itemsZh?.[index]);
      list.append(li);
    });
    shell.append(list);
  } else if (block.type === "paragraphs") {
    (block.paragraphs || []).forEach((paragraph, index) => {
      appendBilingualLine(shell, paragraph, block.paragraphsZh?.[index]);
    });
  } else if (block.type === "grammarList") {
    const list = document.createElement("div");
    list.className = "lesson-grammar-list";
    for (const item of block.items || []) {
      const card = document.createElement("article");
      const term = document.createElement("h4");
      const pattern = document.createElement("p");
      const meaning = document.createElement("p");
      const example = document.createElement("p");
      term.textContent = item.term || "";
      pattern.textContent = item.pattern || "";
      meaning.textContent = item.meaning || "";
      example.textContent = item.example ? `例：${item.example}` : "";
      card.append(term, pattern, meaning, example);
      appendChineseText(card, item.termZh ? `中文：${item.termZh}` : "");
      appendChineseText(card, item.analysisZh ? `解析：${item.analysisZh}` : "");
      appendChineseText(card, item.exampleZh ? `例句对照：${item.exampleZh}` : "");
      list.append(card);
    }
    shell.append(list);
  }

  container.append(shell);
}

function lessonActivityStatusText(activity, record) {
  if (!record?.checked && !record?.revealed) {
    return "未完成";
  }
  if (record.correct === true) {
    return "已正确";
  }
  if (record.correct === false) {
    return "需复习";
  }
  return "已查看";
}

function renderLessonActivity(activity) {
  const record = lessonActivityRecord(activity.id) || {};
  const item = document.createElement("article");
  item.className = "lesson-activity";
  const head = document.createElement("div");
  const promptWrap = document.createElement("div");
  const prompt = document.createElement("strong");
  const status = document.createElement("span");
  head.className = "lesson-activity-head";
  prompt.textContent = activity.prompt || "";
  promptWrap.append(prompt);
  appendChineseText(promptWrap, activity.promptZh);
  status.textContent = lessonActivityStatusText(activity, record);
  status.className = `lesson-activity-status ${record.correct === true ? "correct" : record.correct === false ? "wrong" : ""}`;
  head.append(promptWrap, status);
  item.append(head);
  if (activity.hintZh) {
    appendChineseText(item, `提示：${activity.hintZh}`, "lesson-zh lesson-hint-zh");
  }

  if (activity.type === "choice") {
    const choices = document.createElement("div");
    choices.className = "quiz-choices";
    for (const choice of activity.choices || []) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-choice-button";
      button.dataset.lessonActivityChoice = activity.id;
      button.dataset.choiceValue = choice.value;
      button.classList.toggle("selected", record.value === choice.value);
      if (record.revealed && choice.value === activity.answer) {
        button.classList.add("correct");
      } else if (record.revealed && record.correct === false && record.value === choice.value) {
        button.classList.add("wrong");
      }
      const label = document.createElement("span");
      const text = document.createElement("span");
      label.className = "quiz-choice-label";
      label.textContent = choice.value;
      text.className = "quiz-choice-text";
      text.textContent = choice.label;
      button.append(label, text);
      appendChineseText(button, choice.labelZh);
      choices.append(button);
    }
    item.append(choices);
  } else if (activity.type === "cloze") {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.className = "answer-box";
    label.append(document.createElement("span"));
    label.firstElementChild.textContent = "你的答案";
    input.type = "text";
    input.placeholder = lessonChineseEnabled() && activity.answerZh ? activity.answerZh : "";
    input.value = record.value || "";
    input.dataset.lessonActivityInput = activity.id;
    label.append(input);
    item.append(label);
  } else if (activity.type === "shortAnswer") {
    const textarea = document.createElement("textarea");
    textarea.className = "lesson-textarea";
    textarea.placeholder =
      lessonChineseEnabled() && activity.hintZh
        ? `${activity.hint || "输入自己的答案，再对照参考答案。"} / ${activity.hintZh}`
        : activity.hint || "输入自己的答案，再对照参考答案。";
    textarea.value = record.value || "";
    textarea.dataset.lessonActivityInput = activity.id;
    item.append(textarea);
  } else if (activity.type === "selfCheck") {
    const controls = document.createElement("div");
    controls.className = "lesson-self-check";
    for (const option of [
      { value: "ok", label: "可以说明" },
      { value: "again", label: "还要复习" },
    ]) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.lessonActivityChoice = activity.id;
      button.dataset.choiceValue = option.value;
      button.textContent = option.label;
      button.classList.toggle("active", record.value === option.value);
      controls.append(button);
    }
    item.append(controls);
  }

  const actions = document.createElement("div");
  actions.className = "lesson-activity-actions";
  const check = document.createElement("button");
  const reveal = document.createElement("button");
  check.type = "button";
  check.className = "primary-button";
  check.dataset.lessonActivityCheck = activity.id;
  check.textContent = activity.type === "shortAnswer" ? "对照答案" : "检查";
  reveal.type = "button";
  reveal.dataset.lessonActivityReveal = activity.id;
  reveal.textContent = record.revealed ? "隐藏参考" : "显示参考";
  actions.append(check, reveal);
  item.append(actions);

  if (record.revealed) {
    const feedback = document.createElement("div");
    feedback.className = `lesson-feedback ${record.correct === true ? "correct" : record.correct === false ? "miss" : ""}`;
    const answer = Array.isArray(activity.answer) ? activity.answer.join(" / ") : activity.answer;
    const answerLine = document.createElement("p");
    answerLine.className = "lesson-reference-answer";
    answerLine.textContent = `${record.correct === true ? "正确。 " : record.correct === false ? "还要复习。 " : ""}参考：${
      answer || "完成后自评。"
    }`;
    feedback.append(answerLine);
    if (lessonChineseEnabled() && activity.answerZh) {
      const answerZh = document.createElement("p");
      answerZh.className = "lesson-reference-analysis";
      answerZh.textContent = `中文对照：${activity.answerZh}`;
      feedback.append(answerZh);
    }
    if (activity.explanation) {
      const note = document.createElement("p");
      note.className = "lesson-reference-note";
      note.textContent = `依据：${activity.explanation}`;
      feedback.append(note);
    }
    if (lessonChineseEnabled() && activity.explanationZh) {
      const noteZh = document.createElement("p");
      noteZh.className = "lesson-reference-analysis";
      noteZh.textContent = `依据对照：${activity.explanationZh}`;
      feedback.append(noteZh);
    }
    if (lessonChineseEnabled() && activity.analysisZh) {
      const analysis = document.createElement("p");
      analysis.className = "lesson-reference-analysis";
      analysis.textContent = `中文解析：${activity.analysisZh}`;
      feedback.append(analysis);
    }
    item.append(feedback);
  }

  return item;
}

function renderTextbookCourse() {
  elements.learningTodayShell.hidden = true;
  elements.practiceOverviewShell.hidden = false;
  elements.practiceOverviewShell.textContent = "";
  elements.practiceOverviewShell.classList.add("textbook-course-shell");

  const stats = textbookStats();
  const header = document.createElement("div");
  header.className = "lesson-course-head";
  const headerText = document.createElement("div");
  const title = document.createElement("h2");
  const summary = document.createElement("p");
  const overview = document.createElement("p");
  title.textContent = state.unitData?.unit?.title || "教材课程";
  summary.textContent = `${stats.completed} / ${stats.total} 步骤完成 · ${stats.percent}%`;
  overview.className = "lesson-overview";
  overview.textContent = lessonData().overview || "";
  headerText.append(title, summary, overview);
  appendChineseText(headerText, lessonData().overviewZh, "lesson-zh lesson-overview-zh");
  header.append(headerText, renderTextbookChineseToggle());

  const goals = document.createElement("div");
  goals.className = "lesson-goals";
  for (const [index, goal] of (lessonData().goals || []).entries()) {
    const pill = document.createElement("span");
    pill.append(document.createTextNode(goal));
    appendChineseText(pill, lessonData().goalsZh?.[index]);
    goals.append(pill);
  }

  const layout = document.createElement("div");
  layout.className = "lesson-layout";
  const nav = document.createElement("nav");
  nav.className = "lesson-step-nav";
  for (const step of lessonSteps()) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.lessonStep = step.id;
    button.classList.toggle("active", activeLessonStep()?.id === step.id);
    button.classList.toggle("completed", Boolean(lessonStepRecord(step.id)?.completed));
    button.append(document.createTextNode(step.title));
    appendChineseText(button, step.titleZh);
    nav.append(button);
  }

  const step = activeLessonStep();
  const panel = document.createElement("article");
  panel.className = "lesson-step-panel";
  if (step) {
    const stepHead = document.createElement("div");
    stepHead.className = "lesson-step-head";
    const stepTitle = document.createElement("div");
    const stepMeta = document.createElement("span");
    const completeButton = document.createElement("button");
    const h3 = document.createElement("h3");
    const intro = document.createElement("p");
    h3.textContent = step.title;
    intro.textContent = step.summary || "";
    stepMeta.textContent = `步骤 ${currentLessonStepIndex() + 1} / ${lessonSteps().length}${
      step.pageRefs?.length ? ` · p.${step.pageRefs.join("-")}` : ""
    }`;
    completeButton.type = "button";
    completeButton.className = lessonStepRecord(step.id)?.completed ? "" : "primary-button";
    completeButton.dataset.lessonStepComplete = step.id;
    completeButton.textContent = lessonStepRecord(step.id)?.completed ? "取消完成" : "标记完成";
    stepTitle.append(h3);
    appendChineseText(stepTitle, step.titleZh, "lesson-zh lesson-title-zh");
    stepTitle.append(intro);
    appendChineseText(stepTitle, step.summaryZh);
    stepTitle.append(stepMeta);
    stepHead.append(stepTitle, completeButton);
    panel.append(stepHead);

    for (const block of step.blocks || []) {
      renderTextbookBlock(panel, block);
    }
    if (step.activities?.length) {
      const activities = document.createElement("section");
      activities.className = "lesson-activities";
      const activityTitle = document.createElement("h3");
      activityTitle.textContent = "自测";
      activities.append(activityTitle);
      for (const activity of step.activities) {
        activities.append(renderLessonActivity(activity));
      }
      panel.append(activities);
    }
  } else {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "这课还没有课程步骤。";
    panel.append(empty);
  }

  layout.append(nav, panel);
  elements.practiceOverviewShell.append(header, goals, layout);
}

function renderPracticeOverview() {
  elements.practiceOverviewShell.classList.remove("textbook-course-shell");
  elements.learningTodayShell.hidden = true;
  elements.practiceOverviewShell.hidden = false;
  elements.practiceOverviewShell.textContent = "";

  const tests = allSourceTextTests();
  const stats = practiceStats(tests);
  const header = document.createElement("div");
  header.className = "practice-overview-head";
  const title = document.createElement("h2");
  const summary = document.createElement("p");
  title.textContent = "刷题总览";
  summary.textContent = `本单元 ${stats.total} 道题，已做 ${stats.attempted} 道，当前正确率 ${stats.accuracy}%。`;
  header.append(title, summary);

  const metrics = document.createElement("div");
  metrics.className = "practice-metric-grid";
  appendPracticeMetric(metrics, stats.total, "题量");
  appendPracticeMetric(metrics, stats.attempted, "已做");
  appendPracticeMetric(metrics, `${stats.accuracy}%`, "正确率");
  appendPracticeMetric(metrics, stats.wrong, "错题");
  appendPracticeMetric(metrics, stats.unanswered, "未做");

  const actions = document.createElement("div");
  actions.className = "practice-actions";
  const actionItems = [
    { label: "继续刷题", pool: "all", primary: true },
    { label: "只练错题", pool: "incorrect" },
    { label: "练未做题", pool: "unattempted" },
  ];
  for (const action of actionItems) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.practiceStart = action.pool;
    button.textContent = action.label;
    if (action.primary) {
      button.className = "primary-button";
    }
    actions.append(button);
  }

  const typeGrid = document.createElement("div");
  typeGrid.className = "practice-type-grid";
  for (const type of practiceQuestionTypes()) {
    const typeTests = tests.filter((test) => (test.type || "未分类") === type);
    const typeStats = practiceStats(typeTests);
    const card = document.createElement("article");
    card.className = "practice-type-card";
    const typeTitle = document.createElement("h3");
    const typeSummary = document.createElement("p");
    const typeButton = document.createElement("button");
    typeTitle.textContent = type;
    typeSummary.textContent = `${typeStats.total} 题 · 已做 ${typeStats.attempted} · 正确率 ${typeStats.accuracy}%`;
    typeButton.type = "button";
    typeButton.dataset.practiceStart = "type";
    typeButton.dataset.practiceType = type;
    typeButton.textContent = "按题型开始";
    card.append(typeTitle, typeSummary, typeButton);
    typeGrid.append(card);
  }

  elements.practiceOverviewShell.append(header, metrics, actions, typeGrid);
}

function renderToday() {
  if (isTextbookUnit()) {
    renderTextbookCourse();
    return;
  }

  if (isPracticeUnit()) {
    renderPracticeOverview();
    return;
  }

  elements.learningTodayShell.hidden = false;
  elements.practiceOverviewShell.hidden = true;
  const due = dueVocabulary();
  const fresh = newRecommendations();
  const plan = dailyPlanVocabulary();
  elements.todaySummary.textContent = `今天安排 ${plan.length} 条目：${due.length} 个到期复习，${fresh.length} 个新内容。`;
  elements.startTodayButton.disabled = plan.length === 0;
  renderMiniWordList(elements.dueList, due, "今天没有到期复习。");
  renderMiniWordList(elements.newWordList, fresh, "今日新内容建议已清空。");
}

function renderPracticeTypeSelect(selectedValue, datasetName) {
  const select = document.createElement("select");
  select.dataset[datasetName] = "true";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全部题型";
  select.append(allOption);
  for (const type of practiceQuestionTypes()) {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    select.append(option);
  }
  select.value = selectedValue;
  return select;
}

function renderPracticeStatusPill(test) {
  const pill = document.createElement("span");
  const status = practiceStatus(test);
  pill.className = `practice-status-pill ${status}`;
  pill.textContent = practiceStatusLabel(test);
  return pill;
}

function renderTextbookVocabularyPracticeModule() {
  const module = document.createElement("section");
  module.className = "lesson-practice-module";
  const allQuestions = lessonVocabularyPracticeQuestions();
  const questions = orderedLessonVocabularyPracticeQuestions();
  const stats = lessonVocabularyPracticeStats(allQuestions);

  const head = document.createElement("div");
  head.className = "lesson-practice-module-head";
  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "词汇练习";
  titleWrap.append(title, renderLessonPracticeShuffleToggle("vocabulary", state.lessonVocabularyPracticeShuffle));

  const metrics = document.createElement("div");
  metrics.className = "lesson-practice-metrics";
  for (const [value, label] of [
    [stats.attempted, "已练习"],
    [stats.correct, "正确"],
    [`${stats.accuracy}%`, "正确率"],
  ]) {
    const item = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = value;
    span.textContent = label;
    item.append(strong, span);
    metrics.append(item);
  }
  head.append(titleWrap, metrics);
  module.append(head);

  if (!allQuestions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "这课还没有录入词汇选择题。";
    module.append(empty);
    return module;
  }

  if (!questions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有符合搜索条件的词汇选择题。";
    module.append(empty);
    return module;
  }

  state.lessonVocabularyPracticeIndex = Math.min(state.lessonVocabularyPracticeIndex, questions.length - 1);
  const question = questions[state.lessonVocabularyPracticeIndex];
  const record = lessonVocabularyPracticeRecord(question.id) || {};
  const selectedValue = (question.choices || []).some((choice) => choice.value === record.value) ? record.value : "";
  const answerChoice = (question.choices || []).find((choice) => choice.value === question.answer);
  const selectedChoice = (question.choices || []).find((choice) => choice.value === selectedValue);
  const card = document.createElement("article");
  card.className = "lesson-vocabulary-practice-card";

  const meta = document.createElement("div");
  meta.className = "lesson-vocabulary-practice-meta";
  const counter = document.createElement("span");
  counter.textContent = `${state.lessonVocabularyPracticeIndex + 1} / ${questions.length}`;
  meta.append(counter);

  const prompt = document.createElement("div");
  prompt.className = "lesson-vocabulary-practice-prompt";
  const stem = document.createElement("p");
  stem.textContent = question.prompt || "";
  prompt.append(stem);

  const choices = document.createElement("div");
  choices.className = "quiz-choices lesson-vocabulary-choice-grid";
  for (const choice of question.choices || []) {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const text = document.createElement("span");
    button.type = "button";
    button.className = "quiz-choice-button";
    button.dataset.lessonVocabularyPracticeChoice = question.id;
    button.dataset.choiceValue = choice.value;
    button.disabled = Boolean(record.revealed);
    button.classList.toggle("selected", selectedValue === choice.value);
    if (record.revealed && choice.value === question.answer) {
      button.classList.add("correct");
    } else if (record.revealed && record.correct === false && selectedValue === choice.value) {
      button.classList.add("wrong");
    }
    label.className = "quiz-choice-label";
    label.textContent = choice.value;
    text.className = "quiz-choice-text";
    text.textContent = choice.label;
    button.append(label, text);
    choices.append(button);
  }

  const actions = document.createElement("div");
  actions.className = "lesson-practice-actions";
  const check = document.createElement("button");
  const reveal = document.createElement("button");
  const prev = document.createElement("button");
  const next = document.createElement("button");
  check.type = "button";
  check.className = "primary-button";
  check.dataset.lessonVocabularyPracticeCheck = question.id;
  check.textContent = "检查";
  reveal.type = "button";
  reveal.dataset.lessonVocabularyPracticeReveal = question.id;
  reveal.textContent = record.revealed ? "隐藏答案" : "显示答案";
  prev.type = "button";
  prev.dataset.lessonVocabularyPracticeMove = "-1";
  prev.textContent = "上一题";
  next.type = "button";
  next.dataset.lessonVocabularyPracticeMove = "1";
  next.textContent = "下一题";
  actions.append(check, reveal, prev, next);

  card.append(meta, prompt, choices, actions);

  if (record.notice || record.checked || record.revealed) {
    const feedback = document.createElement("div");
    feedback.className = `lesson-feedback ${record.correct === true ? "correct" : record.correct === false ? "miss" : ""}`.trim();
    const verdict = document.createElement("p");
    const answerLine = document.createElement("p");
    if (record.notice) {
      verdict.textContent = record.notice;
    } else {
      verdict.textContent =
        record.correct === true
          ? "正确。"
          : record.correct === false
          ? `还差一点，你选了：${selectedChoice ? `${selectedChoice.value}. ${selectedChoice.label}` : record.lastAnswer || "-"}`
          : "答案已显示。";
    }
    feedback.append(verdict);
    if (record.revealed) {
      answerLine.className = "lesson-reference-answer";
      answerLine.textContent = `答案：${answerChoice ? `${answerChoice.value}. ${answerChoice.label}` : question.answer}${
        answerChoice?.reading ? `（${answerChoice.reading}）` : ""
      }`;
      feedback.append(answerLine);
      const meaning = question.vocabulary?.meaningZh || answerChoice?.meaningZh || "";
      const analysis = question.explanationZh || question.vocabulary?.analysisZh || answerChoice?.analysisZh || "";
      appendChineseText(feedback, meaning ? `释义：${meaning}` : "", "lesson-reference-analysis");
      appendChineseText(feedback, analysis ? `解析：${analysis}` : "", "lesson-reference-analysis");
    }
    card.append(feedback);
  }

  module.append(card);
  return module;
}

function renderTextbookGrammarSelfCheckCard(question, record, position, total) {
  const card = document.createElement("article");
  card.className = "lesson-vocabulary-practice-card";

  const meta = document.createElement("div");
  meta.className = "lesson-vocabulary-practice-meta";
  const counter = document.createElement("span");
  counter.textContent = `${position} / ${total}`;
  meta.append(counter);

  const prompt = document.createElement("div");
  prompt.className = "lesson-vocabulary-practice-prompt";
  const stem = document.createElement("p");
  stem.textContent = question.prompt || "";
  prompt.append(stem);

  const actions = document.createElement("div");
  actions.className = "lesson-practice-actions";
  const reveal = document.createElement("button");
  const prev = document.createElement("button");
  const next = document.createElement("button");
  reveal.type = "button";
  reveal.dataset.lessonGrammarPracticeReveal = question.id;
  reveal.textContent = record.revealed ? "隐藏答案" : "显示答案";
  prev.type = "button";
  prev.dataset.lessonGrammarPracticeMove = "-1";
  prev.textContent = "上一题";
  next.type = "button";
  next.dataset.lessonGrammarPracticeMove = "1";
  next.textContent = "下一题";
  actions.append(reveal, prev, next);

  card.append(meta, prompt, actions);

  if (record.revealed) {
    const selfCheck = document.createElement("div");
    selfCheck.className = "lesson-self-check";
    for (const [value, label] of [
      ["true", "答对了"],
      ["false", "没答对"],
    ]) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.lessonGrammarPracticeSelfGrade = question.id;
      button.dataset.correct = value;
      button.textContent = label;
      button.classList.toggle("active", record.checked && String(Boolean(record.correct)) === value);
      selfCheck.append(button);
    }
    card.append(selfCheck);
  }

  if (record.revealed) {
    const feedback = document.createElement("div");
    feedback.className = `lesson-feedback ${record.correct === true ? "correct" : record.correct === false ? "miss" : ""}`.trim();
    const verdict = document.createElement("p");
    const answerLine = document.createElement("p");
    const acceptedAnswers = lessonGrammarAcceptedAnswers(question);
    verdict.textContent = record.checked
      ? record.correct
        ? "已标记为答对。"
        : "已标记为没答对。"
      : "答案已显示。";
    answerLine.className = "lesson-reference-answer";
    answerLine.textContent = `答案：${question.answer}`;
    feedback.append(verdict, answerLine);
    if (acceptedAnswers.length > 1) {
      const acceptedLine = document.createElement("p");
      acceptedLine.className = "lesson-reference-answer";
      acceptedLine.textContent = `可接受答案：${acceptedAnswers.join(" / ")}`;
      feedback.append(acceptedLine);
    }
    appendChineseText(
      feedback,
      question.explanationZh ? `解析：${question.explanationZh}` : "",
      "lesson-reference-analysis"
    );
    card.append(feedback);
  }

  return card;
}

function renderTextbookGrammarPracticeModule() {
  const module = document.createElement("section");
  module.className = "lesson-practice-module";
  const allQuestions = lessonGrammarPracticeQuestions();
  const questions = orderedLessonGrammarPracticeQuestions();
  const stats = lessonGrammarPracticeStats(allQuestions);

  const head = document.createElement("div");
  head.className = "lesson-practice-module-head";
  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "文法・表現练习";
  titleWrap.append(title, renderLessonPracticeShuffleToggle("grammar", state.lessonGrammarPracticeShuffle));

  const metrics = document.createElement("div");
  metrics.className = "lesson-practice-metrics";
  for (const [value, label] of [
    [stats.attempted, "已练习"],
    [stats.correct, "正确"],
    [`${stats.accuracy}%`, "正确率"],
  ]) {
    const item = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = value;
    span.textContent = label;
    item.append(strong, span);
    metrics.append(item);
  }
  head.append(titleWrap, metrics);
  module.append(head);

  if (!allQuestions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "这课还没有录入文法・表达选择题。";
    module.append(empty);
    return module;
  }

  if (!questions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有符合搜索条件的文法・表达选择题。";
    module.append(empty);
    return module;
  }

  state.lessonGrammarPracticeIndex = Math.min(state.lessonGrammarPracticeIndex, questions.length - 1);
  const question = questions[state.lessonGrammarPracticeIndex];
  const record = lessonGrammarPracticeRecord(question.id) || {};
  if (isGrammarSelfCheckQuestion(question)) {
    module.append(renderTextbookGrammarSelfCheckCard(question, record, state.lessonGrammarPracticeIndex + 1, questions.length));
    return module;
  }
  const selectedValue = (question.choices || []).some((choice) => choice.value === record.value) ? record.value : "";
  const answerChoice = (question.choices || []).find((choice) => choice.value === question.answer);
  const selectedChoice = (question.choices || []).find((choice) => choice.value === selectedValue);
  const card = document.createElement("article");
  card.className = "lesson-vocabulary-practice-card";

  const meta = document.createElement("div");
  meta.className = "lesson-vocabulary-practice-meta";
  const counter = document.createElement("span");
  counter.textContent = `${state.lessonGrammarPracticeIndex + 1} / ${questions.length}`;
  meta.append(counter);

  const prompt = document.createElement("div");
  prompt.className = "lesson-vocabulary-practice-prompt";
  const stem = document.createElement("p");
  stem.textContent = question.prompt || "";
  prompt.append(stem);

  const choices = document.createElement("div");
  choices.className = "quiz-choices lesson-grammar-choice-grid";
  for (const choice of question.choices || []) {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const text = document.createElement("span");
    button.type = "button";
    button.className = "quiz-choice-button";
    button.dataset.lessonGrammarPracticeChoice = question.id;
    button.dataset.choiceValue = choice.value;
    button.disabled = Boolean(record.revealed);
    button.classList.toggle("selected", selectedValue === choice.value);
    if (record.revealed && choice.value === question.answer) {
      button.classList.add("correct");
    } else if (record.revealed && record.correct === false && selectedValue === choice.value) {
      button.classList.add("wrong");
    }
    label.className = "quiz-choice-label";
    label.textContent = choice.value;
    text.className = "quiz-choice-text";
    text.textContent = choice.label;
    button.append(label, text);
    choices.append(button);
  }

  const actions = document.createElement("div");
  actions.className = "lesson-practice-actions";
  const check = document.createElement("button");
  const reveal = document.createElement("button");
  const prev = document.createElement("button");
  const next = document.createElement("button");
  check.type = "button";
  check.className = "primary-button";
  check.dataset.lessonGrammarPracticeCheck = question.id;
  check.textContent = "检查";
  reveal.type = "button";
  reveal.dataset.lessonGrammarPracticeReveal = question.id;
  reveal.textContent = record.revealed ? "隐藏答案" : "显示答案";
  prev.type = "button";
  prev.dataset.lessonGrammarPracticeMove = "-1";
  prev.textContent = "上一题";
  next.type = "button";
  next.dataset.lessonGrammarPracticeMove = "1";
  next.textContent = "下一题";
  actions.append(check, reveal, prev, next);

  card.append(meta, prompt, choices, actions);

  if (record.notice || record.checked || record.revealed) {
    const feedback = document.createElement("div");
    feedback.className = `lesson-feedback ${record.correct === true ? "correct" : record.correct === false ? "miss" : ""}`.trim();
    const verdict = document.createElement("p");
    const answerLine = document.createElement("p");
    if (record.notice) {
      verdict.textContent = record.notice;
    } else {
      verdict.textContent =
        record.correct === true
          ? "正确。"
          : record.correct === false
          ? `还差一点，你选了：${selectedChoice ? `${selectedChoice.value}. ${selectedChoice.label}` : record.lastAnswer || "-"}`
          : "答案已显示。";
    }
    feedback.append(verdict);
    if (record.revealed) {
      answerLine.className = "lesson-reference-answer";
      answerLine.textContent = `答案：${answerChoice ? `${answerChoice.value}. ${answerChoice.label}` : question.answer}`;
      feedback.append(answerLine);
      appendChineseText(
        feedback,
        question.explanationZh ? `解析：${question.explanationZh}` : "",
        "lesson-reference-analysis"
      );
    }
    card.append(feedback);
  }

  module.append(card);
  return module;
}

function renderTextbookPractice() {
  elements.vocabularyListShell.hidden = true;
  elements.practiceListShell.hidden = false;
  elements.practiceListShell.textContent = "";

  const header = document.createElement("div");
  header.className = "practice-overview-head";
  const title = document.createElement("h2");
  title.textContent = "个人练习";
  header.append(title, renderTextbookChineseToggle());

  const modules = document.createElement("div");
  modules.className = "lesson-practice-modules";
  modules.append(renderTextbookVocabularyPracticeModule(), renderTextbookGrammarPracticeModule());
  elements.practiceListShell.append(header, modules);
}

function renderPracticeList() {
  elements.vocabularyListShell.hidden = true;
  elements.practiceListShell.hidden = false;
  elements.practiceListShell.textContent = "";

  const tools = document.createElement("div");
  tools.className = "practice-list-tools";
  const typeField = document.createElement("label");
  const typeLabel = document.createElement("span");
  typeLabel.textContent = "题型";
  typeField.append(typeLabel, renderPracticeTypeSelect(state.practiceTypeFilter, "practiceTypeFilter"));
  tools.append(typeField);

  const tests = practiceFilteredTests();
  const summary = document.createElement("p");
  summary.className = "practice-list-summary";
  summary.textContent = `当前显示 ${tests.length} 道题。`;

  const tableShell = document.createElement("div");
  tableShell.className = "table-shell";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  for (const label of ["题号", "题型", "题干", "状态", "最近结果", ""]) {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.append(th);
  }
  thead.append(headerRow);
  const tbody = document.createElement("tbody");

  if (!tests.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.className = "empty-state";
    cell.textContent = "没有符合条件的题目。";
    row.append(cell);
    tbody.append(row);
  }

  for (const test of tests) {
    const record = practiceQuestionRecord(test.id);
    const { question } = splitSourceTestPrompt(test);
    const row = document.createElement("tr");
    const id = document.createElement("td");
    const type = document.createElement("td");
    const prompt = document.createElement("td");
    const status = document.createElement("td");
    const result = document.createElement("td");
    const action = document.createElement("td");
    const button = document.createElement("button");

    id.textContent = test.id;
    type.textContent = test.type || "-";
    prompt.className = "practice-question-summary";
    prompt.textContent = question;
    status.append(renderPracticeStatusPill(test));
    result.textContent = record?.attempts
      ? `${record.lastCorrect ? "答对" : "答错"} · ${record.attempts} 次 · ${record.lastAnswer || "-"}`
      : "未作答";
    button.type = "button";
    button.dataset.practiceQuestionId = test.id;
    button.textContent = "重做";
    action.append(button);
    row.append(id, type, prompt, status, result, action);
    tbody.append(row);
  }

  table.append(thead, tbody);
  tableShell.append(table);
  elements.practiceListShell.append(tools, summary, tableShell);
}

function renderList() {
  if (isTextbookUnit()) {
    renderTextbookPractice();
    return;
  }

  if (isPracticeUnit()) {
    renderPracticeList();
    return;
  }

  elements.vocabularyListShell.hidden = false;
  elements.practiceListShell.hidden = true;
  elements.wordTableBody.textContent = "";
  const words = filteredVocabulary();
  if (!words.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.className = "empty-state";
    cell.textContent = "没有符合条件的条目。";
    row.append(cell);
    elements.wordTableBody.append(row);
    return;
  }

  for (const word of words) {
    const row = document.createElement("tr");
    const number = document.createElement("td");
    const term = document.createElement("td");
    const reading = document.createElement("td");
    const partOfSpeech = document.createElement("td");
    const meaning = document.createElement("td");
    const nextReview = document.createElement("td");
    const status = document.createElement("td");

    number.textContent = word.id;
    term.textContent = word.term;
    term.className = "word-term";
    reading.textContent = word.reading;
    reading.className = "word-reading";
    partOfSpeech.textContent = word.partOfSpeech;
    meaning.textContent = word.meaningHint;
    nextReview.textContent = scheduleText(word);
    status.append(statusControls(word.id));

    row.append(number, term, reading, partOfSpeech, meaning, nextReview, status);
    elements.wordTableBody.append(row);
  }
}

function renderCardPromptMode() {
  const labels = itemTypeLabels();
  document.querySelectorAll(".prompt-mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.promptMode === state.cardPromptMode);
    button.textContent = button.dataset.promptMode === "reading" ? labels.readingPrompt : labels.termPrompt;
  });
}

function renderCardExamples(word) {
  const labels = itemTypeLabels();
  elements.cardExamples.textContent = "";
  const examples = word.examples || [];
  if (!examples.length) {
    const empty = document.createElement("p");
    empty.className = "example-empty";
    empty.textContent = labels.noExamples;
    elements.cardExamples.append(empty);
    return;
  }

  const title = document.createElement("h3");
  title.textContent = labels.exampleTitle;
  elements.cardExamples.append(title);

  for (const example of examples) {
    const item = document.createElement("article");
    item.className = "source-example";

    const japanese = document.createElement("p");
    japanese.className = "source-example-japanese";
    japanese.textContent = example.japanese || "";
    item.append(japanese);

    if (example.meaning) {
      const meaning = document.createElement("p");
      meaning.className = "source-example-meaning";
      meaning.textContent = example.meaning;
      item.append(meaning);
    }

    elements.cardExamples.append(item);
  }
}

function renderGrammarStudy(words) {
  if (!words.length) {
    elements.cardCounter.textContent = "0 / 0";
    elements.cardStatus.textContent = "-";
    elements.cardTerm.textContent = "没有符合条件的文法点";
    elements.cardReading.textContent = "";
    elements.cardMeaning.textContent = "";
    elements.cardExamples.textContent = "";
    elements.cardReviewControls.textContent = "";
    elements.cardStatusControls.textContent = "";
    elements.practiceGrammarButton.disabled = true;
    return;
  }

  state.cardIndex = Math.min(state.cardIndex, words.length - 1);
  const word = words[state.cardIndex];
  const status = getStatus(word.id);
  const prefix = state.cardMode === "today" ? "今日 " : "";
  elements.cardCounter.textContent = `${prefix}${state.cardIndex + 1} / ${words.length}`;
  elements.cardStatus.textContent = `${STATUS_LABELS[status]} · ${scheduleText(word)}`;
  elements.cardTerm.textContent = word.term;
  elements.cardReading.textContent = `接续：${word.reading || "-"}`;
  elements.cardMeaning.textContent = `用法：${word.meaningHint || "-"}`;
  renderCardExamples(word);
  elements.cardReading.classList.remove("hidden-answer");
  elements.cardMeaning.classList.remove("hidden-answer");
  elements.cardExamples.classList.remove("hidden-answer");
  elements.practiceGrammarButton.disabled = allSourceTextTests().length === 0;
  elements.practiceGrammarButton.textContent = elements.practiceGrammarButton.disabled ? "本单元还没有练习" : "练习这个文法点";
  elements.cardReviewControls.textContent = "";
  elements.cardReviewControls.append(reviewControls(word.id));
  elements.cardStatusControls.textContent = "";
  elements.cardStatusControls.append(statusControls(word.id));
}

function resetTextbookVocabularyShell() {
  const module = elements.studyCardShell.querySelector(".lesson-vocabulary-module");
  if (module) {
    module.remove();
  }
  Array.from(elements.studyCardShell.children).forEach((child) => {
    child.hidden = false;
  });
}

function renderTextbookVocabulary() {
  elements.studyCardShell.hidden = false;
  const existing = elements.studyCardShell.querySelector(".lesson-vocabulary-module");
  if (existing) {
    existing.remove();
  }
  Array.from(elements.studyCardShell.children).forEach((child) => {
    child.hidden = true;
  });

  const sections = filteredLessonVocabularySections();
  const total = lessonVocabularyItems().length;
  const shown = sections.reduce((sum, section) => sum + section.items.length, 0);
  const module = document.createElement("div");
  module.className = "lesson-vocabulary-module";

  const header = document.createElement("div");
  header.className = "lesson-vocabulary-head";
  const titleWrap = document.createElement("div");
  const title = document.createElement("h2");
  const summary = document.createElement("p");
  title.textContent = "本课词汇";
  summary.textContent = `当前显示 ${shown} / ${total} 个词汇。`;
  titleWrap.append(title, summary);
  header.append(titleWrap, renderTextbookChineseToggle());
  module.append(header);

  if (!sections.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = total ? "没有符合搜索条件的词汇。" : "这课还没有录入词汇。";
    module.append(empty);
    elements.studyCardShell.append(module);
    return;
  }

  for (const section of sections) {
    const sectionNode = document.createElement("section");
    sectionNode.className = "lesson-vocabulary-section";
    const sectionHead = document.createElement("div");
    sectionHead.className = "lesson-vocabulary-section-head";
    const sectionTitle = document.createElement("h3");
    const sectionMeta = document.createElement("span");
    sectionTitle.textContent = section.title || "词汇";
    appendChineseText(sectionTitle, section.titleZh, "lesson-zh lesson-vocabulary-title-zh");
    sectionMeta.textContent = [
      `${section.items.length} 词`,
      Array.isArray(section.pageRefs) && section.pageRefs.length ? `p.${section.pageRefs.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join(" · ");
    sectionHead.append(sectionTitle, sectionMeta);
    sectionNode.append(sectionHead);
    appendChineseText(sectionNode, section.descriptionZh, "lesson-zh lesson-vocabulary-section-note");

    const grid = document.createElement("div");
    grid.className = "lesson-vocabulary-grid";
    for (const item of section.items) {
      const card = document.createElement("article");
      card.className = "lesson-vocabulary-card";
      const term = document.createElement("h4");
      const meta = document.createElement("div");
      const reading = document.createElement("span");
      const partOfSpeech = document.createElement("span");
      term.textContent = item.term || "";
      meta.className = "lesson-vocabulary-meta";
      reading.textContent = lessonVocabularyReadingText(item);
      partOfSpeech.textContent = item.partOfSpeech || "語句";
      meta.append(reading, partOfSpeech);
      card.append(term, meta);
      appendChineseText(card, item.meaningZh ? `释义：${item.meaningZh}` : "", "lesson-zh lesson-vocabulary-meaning");
      appendChineseText(card, item.analysisZh ? `解析：${item.analysisZh}` : "", "lesson-zh lesson-vocabulary-analysis");
      grid.append(card);
    }
    sectionNode.append(grid);
    module.append(sectionNode);
  }

  elements.studyCardShell.append(module);
}

function renderCards() {
  if (isTextbookUnit()) {
    renderTextbookVocabulary();
    return;
  }

  if (isPracticeUnit()) {
    resetTextbookVocabularyShell();
    return;
  }

  resetTextbookVocabularyShell();
  elements.studyCardShell.hidden = false;
  renderCardPromptMode();
  const grammarMode = isGrammarUnit();
  elements.cardModeBar.hidden = grammarMode;
  elements.revealCardButton.hidden = grammarMode;
  elements.practiceGrammarButton.hidden = !grammarMode;
  document.querySelector(".study-card")?.classList.toggle("grammar-study-card", grammarMode);

  const words = cardVocabulary();
  if (grammarMode) {
    renderGrammarStudy(words);
    return;
  }

  if (!words.length) {
    elements.cardCounter.textContent = "0 / 0";
    elements.cardStatus.textContent = "-";
    elements.cardTerm.textContent = state.cardMode === "today" ? "今日计划已完成" : "没有符合条件的卡片";
    elements.cardReading.textContent = "";
    elements.cardMeaning.textContent = "";
    elements.cardExamples.textContent = "";
    elements.cardReviewControls.textContent = "";
    elements.cardStatusControls.textContent = "";
    elements.revealCardButton.disabled = true;
    return;
  }

  elements.revealCardButton.disabled = false;
  state.cardIndex = Math.min(state.cardIndex, words.length - 1);
  const word = words[state.cardIndex];
  const status = getStatus(word.id);
  const prefix = state.cardMode === "today" ? "今日 " : "";
  const promptIsReading = state.cardPromptMode === "reading";
  const labels = itemTypeLabels();
  elements.cardCounter.textContent = `${prefix}${state.cardIndex + 1} / ${words.length}`;
  elements.cardStatus.textContent = `${STATUS_LABELS[status]} · ${scheduleText(word)} · ${
    promptIsReading ? `${labels.readingPrompt}出题` : `${labels.termPrompt}出题`
  }`;
  elements.cardTerm.textContent = promptIsReading ? word.reading : word.term;
  elements.cardReading.textContent = promptIsReading ? `${labels.term}：${word.term}` : `${labels.reading}：${word.reading}`;
  elements.cardMeaning.textContent = word.meaningHint;
  renderCardExamples(word);
  elements.cardReading.classList.toggle("hidden-answer", !state.cardRevealed);
  elements.cardMeaning.classList.toggle("hidden-answer", !state.cardRevealed);
  elements.cardExamples.classList.toggle("hidden-answer", !state.cardRevealed);
  elements.revealCardButton.textContent = state.cardRevealed ? "隐藏答案" : "显示答案";
  elements.cardReviewControls.textContent = "";
  elements.cardReviewControls.append(reviewControls(word.id));
  elements.cardStatusControls.textContent = "";
  elements.cardStatusControls.append(statusControls(word.id));
}

function sourceTextTests() {
  if (isTextbookUnit()) {
    return [];
  }
  return isPracticeUnit() ? practiceQuizPoolTests() : grammarPracticeContext().tests;
}

function answerChoiceKey(answer) {
  const match = String(answer || "")
    .normalize("NFKC")
    .trim()
    .match(/^([A-J]|[1-9]\d*)\s*[（(]?/i);
  return match ? match[1].toUpperCase() : "";
}

function splitSourceTestPrompt(test) {
  const prompt = String(test?.prompt || "").trim();
  const marker = "選択肢：";
  const markerIndex = prompt.indexOf(marker);
  if (markerIndex === -1) {
    return { question: prompt, choiceText: "" };
  }
  return {
    question: prompt.slice(0, markerIndex).trim() || prompt,
    choiceText: prompt.slice(markerIndex + marker.length).trim(),
  };
}

function renderMarkedText(target, value) {
  target.textContent = "";
  const text = String(value || "");
  const parts = text.split(/(\*\*[^*]+?\*\*)/g);
  for (const part of parts) {
    if (!part) {
      continue;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = part.slice(2, -2);
      target.append(strong);
    } else {
      target.append(document.createTextNode(part));
    }
  }
}

function parseSourceTestChoices(test) {
  const { choiceText } = splitSourceTestPrompt(test);
  const block = choiceText.normalize("NFKC").replace(/\s+/g, " ").trim();
  if (!block) {
    return [];
  }

  const choices = [];
  const markerPattern = /(?:^|\s)([A-J]|[1-4])\s+(.+?)(?=\s+(?:[A-J]|[1-4])\s+|$)/gi;
  let match = markerPattern.exec(block);
  while (match) {
    const text = match[2].replace(/[\/／]\s*$/, "").trim();
    choices.push({ value: match[1].toUpperCase(), text });
    match = markerPattern.exec(block);
  }
  return choices;
}

function sourceAnswerMatches(userAnswer, correctAnswer) {
  const normalizedUser = normalize(userAnswer);
  if (!normalizedUser) {
    return false;
  }

  const normalizedCorrect = normalize(correctAnswer);
  if (normalizedUser === normalizedCorrect) {
    return true;
  }

  const parts = String(correctAnswer || "")
    .split(/\s*[\/／]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length <= 1) {
    return false;
  }

  const hasNamedSlots = parts.some((part) => /^[A-J]:/i.test(part));
  const cleanParts = parts.map((part) => part.replace(/^[A-J]:\s*/i, "").trim());
  if (hasNamedSlots) {
    return cleanParts.every((part) => normalizedUser.includes(normalize(part)));
  }
  return cleanParts.some((part) => normalizedUser === normalize(part));
}

function renderSourceTestFeedback(test) {
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.className = `quiz-feedback ${
    state.quizIsCorrect === true ? "correct" : state.quizIsCorrect === false ? "miss" : ""
  }`.trim();
  if (!state.quizRevealed) {
    return;
  }

  const verdict = document.createElement("p");
  verdict.className = "quiz-verdict";
  if (state.quizIsCorrect === true) {
    verdict.textContent = "正确。";
  } else if (state.quizIsCorrect === false) {
    verdict.textContent = state.quizSubmittedAnswer ? `还差一点，你的答案：${state.quizSubmittedAnswer}` : "还差一点。";
  } else {
    verdict.textContent = "答案已显示。";
  }

  const answerLine = document.createElement("p");
  answerLine.className = "quiz-answer-line";
  answerLine.textContent = `答案：${test.answer}`;

  const explanation = document.createElement("p");
  explanation.className = "quiz-explanation";
  explanation.textContent = `解析：${test.explanation}`;

  elements.quizFeedback.append(verdict, answerLine, explanation);
}

function renderQuizContext(context) {
  elements.quizContext.textContent = "";
  elements.quizContext.hidden = true;
  if (!isGrammarUnit()) {
    return;
  }

  if (!context.point) {
    elements.quizContext.textContent = `本单元练习 · ${context.tests.length} 道题`;
  } else if (context.isFallback) {
    elements.quizContext.textContent = `${context.point.term} 没有匹配到直连题，显示本单元练习 · ${context.tests.length} 道题`;
  } else {
    elements.quizContext.textContent = `${context.point.term} · ${context.tests.length} 道相关题`;
  }
  elements.quizContext.hidden = false;
}

function renderSourceTextTests() {
  const context = isGrammarUnit() ? grammarPracticeContext() : { point: null };
  const tests = context.tests;
  elements.quizChoices.textContent = "";
  renderQuizContext(context);

  if (!tests.length) {
    elements.quizModeLabel.textContent = "单元测试";
    elements.quizCounter.textContent = "0 / 0";
    elements.quizPrompt.textContent = "还没有测试题。";
    elements.quizAnswerBox.hidden = true;
    elements.quizActions.hidden = true;
    elements.quizFeedback.textContent = "";
    return;
  }

  state.quizIndex = Math.min(state.quizIndex, tests.length - 1);
  const test = tests[state.quizIndex];
  const { question } = splitSourceTestPrompt(test);
  const choices = parseSourceTestChoices(test);
  const expectedChoice = answerChoiceKey(test.answer);
  const usesChoices = Boolean(expectedChoice && choices.length >= 2);

  elements.quizModeLabel.textContent = `${test.part} · ${test.type}`;
  elements.quizCounter.textContent = `${state.quizIndex + 1} / ${tests.length}`;
  renderMarkedText(elements.quizPrompt, question);
  elements.quizAnswerBox.hidden = usesChoices;
  elements.quizActions.hidden = false;
  elements.prevQuizButton.disabled = tests.length <= 1;
  elements.nextQuizButton.disabled = tests.length <= 1;
  elements.prevQuizButton.textContent = state.quizIndex === 0 ? "回到最后一题" : "上一题";
  elements.showQuizAnswerButton.textContent = "显示答案";
  elements.nextQuizButton.textContent = state.quizIndex + 1 === tests.length ? "回到第一题" : "下一题";

  if (usesChoices) {
    elements.quizAnswer.value = "";
    for (const choice of choices) {
      const button = document.createElement("button");
      const label = document.createElement("span");
      const text = document.createElement("span");
      button.type = "button";
      button.className = "quiz-choice-button";
      button.dataset.sourceChoice = choice.value;
      button.disabled = state.quizRevealed;
      label.className = "quiz-choice-label";
      label.textContent = choice.value;
      text.className = "quiz-choice-text";
      text.textContent = choice.text;
      if (state.quizSelectedChoice === choice.value) {
        button.classList.add("selected");
      }
      if (state.quizRevealed && choice.value === expectedChoice) {
        button.classList.add("correct");
      } else if (state.quizRevealed && state.quizIsCorrect === false && state.quizSubmittedAnswer === choice.value) {
        button.classList.add("wrong");
      }
      button.append(label, text);
      elements.quizChoices.append(button);
    }
  } else {
    elements.quizAnswer.placeholder = "输入答案后检查，或直接显示答案。";
    if (state.quizSubmittedAnswer) {
      elements.quizAnswer.value = state.quizSubmittedAnswer;
    }
  }

  renderSourceTestFeedback(test);
}

function renderPracticeQuizTools(tests, stats) {
  elements.practiceQuizTools.hidden = false;
  elements.practiceQuizTools.textContent = "";

  const scope = document.createElement("div");
  scope.className = "practice-quiz-scope";
  const poolLabel = document.createElement("strong");
  const poolSummary = document.createElement("span");
  poolLabel.textContent = practicePoolLabel();
  poolSummary.textContent = `${tests.length} 题 · 已做 ${stats.attempted} · 正确率 ${stats.accuracy}%`;
  scope.append(poolLabel, poolSummary);

  const poolButtons = document.createElement("div");
  poolButtons.className = "practice-pool-buttons";
  const pools = [
    { label: "全部题", value: "all" },
    { label: "未做题", value: "unattempted" },
    { label: "错题", value: "incorrect" },
  ];
  for (const pool of pools) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.practicePool = pool.value;
    button.textContent = pool.label;
    button.classList.toggle("active", state.practicePool === pool.value);
    poolButtons.append(button);
  }

  const typeField = document.createElement("label");
  const typeLabel = document.createElement("span");
  typeLabel.textContent = "题型";
  typeField.append(
    typeLabel,
    renderPracticeTypeSelect(state.practicePool === "type" ? state.practiceTypeFilter : "all", "practiceQuizType")
  );

  elements.practiceQuizTools.append(scope, poolButtons, typeField);
}

function renderPracticeQuiz() {
  const tests = practiceQuizPoolTests();
  const stats = practiceStats(tests);
  elements.quizChoices.textContent = "";
  elements.quizContext.hidden = false;
  elements.quizContext.textContent = `${practicePoolLabel()} · ${stats.total} 题 · 当前正确率 ${stats.accuracy}%`;
  renderPracticeQuizTools(tests, stats);

  if (!tests.length) {
    elements.quizModeLabel.textContent = practicePoolLabel();
    elements.quizCounter.textContent = "0 / 0";
    elements.quizPrompt.textContent = "当前题池没有题目。";
    elements.quizAnswerBox.hidden = true;
    elements.quizActions.hidden = true;
    elements.quizFeedback.textContent = "";
    return;
  }

  state.quizIndex = Math.min(state.quizIndex, tests.length - 1);
  const test = tests[state.quizIndex];
  const { question } = splitSourceTestPrompt(test);
  const choices = parseSourceTestChoices(test);
  const expectedChoice = answerChoiceKey(test.answer);
  const usesChoices = Boolean(expectedChoice && choices.length >= 2);

  elements.quizModeLabel.textContent = `${test.part} · ${test.type}`;
  elements.quizCounter.textContent = `${state.quizIndex + 1} / ${tests.length}`;
  renderMarkedText(elements.quizPrompt, question);
  elements.quizAnswerBox.hidden = usesChoices;
  elements.quizActions.hidden = false;
  elements.prevQuizButton.disabled = tests.length <= 1;
  elements.nextQuizButton.disabled = tests.length <= 1;
  elements.prevQuizButton.textContent = state.quizIndex === 0 ? "回到最后一题" : "上一题";
  elements.showQuizAnswerButton.textContent = "显示答案";
  elements.nextQuizButton.textContent = state.quizIndex + 1 === tests.length ? "回到第一题" : "下一题";

  if (usesChoices) {
    elements.quizAnswer.value = "";
    for (const choice of choices) {
      const button = document.createElement("button");
      const label = document.createElement("span");
      const text = document.createElement("span");
      button.type = "button";
      button.className = "quiz-choice-button";
      button.dataset.sourceChoice = choice.value;
      button.disabled = state.quizRevealed;
      label.className = "quiz-choice-label";
      label.textContent = choice.value;
      text.className = "quiz-choice-text";
      text.textContent = choice.text;
      if (state.quizSelectedChoice === choice.value) {
        button.classList.add("selected");
      }
      if (state.quizRevealed && choice.value === expectedChoice) {
        button.classList.add("correct");
      } else if (state.quizRevealed && state.quizIsCorrect === false && state.quizSubmittedAnswer === choice.value) {
        button.classList.add("wrong");
      }
      button.append(label, text);
      elements.quizChoices.append(button);
    }
  } else {
    elements.quizAnswer.placeholder = "输入答案后检查，或直接显示答案。";
    if (state.quizSubmittedAnswer) {
      elements.quizAnswer.value = state.quizSubmittedAnswer;
    }
  }

  renderSourceTestFeedback(test);
}

function renderLessonPracticeReviewFeedback(entry) {
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.className = `quiz-feedback ${
    state.quizIsCorrect === true ? "correct" : state.quizIsCorrect === false ? "miss" : ""
  }`.trim();
  if (!entry || !state.quizRevealed) {
    return;
  }

  const question = entry.question;
  const isSelfCheck = isGrammarSelfCheckQuestion(question);
  if (isSelfCheck) {
    const verdict = document.createElement("p");
    verdict.className = "quiz-verdict";
    if (state.quizIsCorrect === true) {
      verdict.textContent = "已标记为答对。";
    } else if (state.quizIsCorrect === false) {
      verdict.textContent = "已标记为没答对。";
    } else {
      verdict.textContent = "答案已显示。";
    }
    const answerLine = document.createElement("p");
    answerLine.className = "quiz-answer-line";
    answerLine.textContent = `答案：${question.answer}`;
    elements.quizFeedback.append(verdict, answerLine);
    const acceptedAnswers = lessonGrammarAcceptedAnswers(question);
    if (acceptedAnswers.length > 1) {
      const acceptedLine = document.createElement("p");
      acceptedLine.className = "quiz-answer-line";
      acceptedLine.textContent = `可接受答案：${acceptedAnswers.join(" / ")}`;
      elements.quizFeedback.append(acceptedLine);
    }
    if (lessonChineseEnabled() && question.explanationZh) {
      const explanation = document.createElement("p");
      explanation.className = "quiz-explanation";
      explanation.textContent = question.explanationZh;
      elements.quizFeedback.append(explanation);
    }
    return;
  }

  const answerChoice = (question.choices || []).find((choice) => choice.value === question.answer);
  const submittedChoice = (question.choices || []).find((choice) => choice.value === state.quizSubmittedAnswer);
  const verdict = document.createElement("p");
  verdict.className = "quiz-verdict";
  if (state.quizIsCorrect === true) {
    verdict.textContent = "正确。";
  } else if (state.quizIsCorrect === false) {
    verdict.textContent = submittedChoice ? `还差一点，你选了：${submittedChoice.label}` : "还差一点。";
  } else {
    verdict.textContent = "答案已显示。";
  }

  const answerLine = document.createElement("p");
  answerLine.className = "quiz-answer-line";
  answerLine.textContent = `答案：${answerChoice?.label || question.answer}`;
  elements.quizFeedback.append(verdict, answerLine);

  if (lessonChineseEnabled() && question.explanationZh) {
    const explanation = document.createElement("p");
    explanation.className = "quiz-explanation";
    explanation.textContent = question.explanationZh;
    elements.quizFeedback.append(explanation);
  }
}

function renderLessonTestCompletion(entry) {
  const stats = lessonTestStats(entry.type);
  if (!stats.completed) {
    return;
  }
  const card = document.createElement("div");
  const title = document.createElement("strong");
  const detail = document.createElement("span");
  const actions = document.createElement("div");
  const restart = document.createElement("button");
  const back = document.createElement("button");
  card.className = "lesson-test-score-card";
  title.textContent = `本次成绩：${stats.score}分`;
  detail.textContent = `${stats.correct} / ${stats.total} 正确`;
  actions.className = "lesson-test-score-actions";
  restart.type = "button";
  restart.className = "primary-button";
  restart.dataset.lessonTestRestart = entry.type;
  restart.textContent = "重新测验";
  back.type = "button";
  back.dataset.lessonTestBack = "true";
  back.textContent = "回到测验列表";
  actions.append(restart, back);
  card.append(title, detail, actions);
  elements.quizFeedback.append(card);
}

function renderLessonTestFeedback(entry) {
  const record = entry.record;
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.className = `quiz-feedback ${
    record?.checked && record.correct === true ? "correct" : record?.checked && record.correct === false ? "miss" : ""
  }`.trim();
  if (!record?.revealed) {
    renderLessonTestCompletion(entry);
    return;
  }

  const question = entry.question;
  const isSelfCheck = isGrammarSelfCheckQuestion(question);
  if (isSelfCheck) {
    const verdict = document.createElement("p");
    verdict.className = "quiz-verdict";
    if (record.correct === true) {
      verdict.textContent = "已标记为答对。";
    } else if (record.correct === false) {
      verdict.textContent = "已标记为没答对。";
    } else {
      verdict.textContent = "答案已显示。";
    }
    const answerLine = document.createElement("p");
    answerLine.className = "quiz-answer-line";
    answerLine.textContent = `答案：${question.answer}`;
    elements.quizFeedback.append(verdict, answerLine);
    const acceptedAnswers = lessonGrammarAcceptedAnswers(question);
    if (acceptedAnswers.length > 1) {
      const acceptedLine = document.createElement("p");
      acceptedLine.className = "quiz-answer-line";
      acceptedLine.textContent = `可接受答案：${acceptedAnswers.join(" / ")}`;
      elements.quizFeedback.append(acceptedLine);
    }
    if (lessonChineseEnabled() && question.explanationZh) {
      const explanation = document.createElement("p");
      explanation.className = "quiz-explanation";
      explanation.textContent = question.explanationZh;
      elements.quizFeedback.append(explanation);
    }
    renderLessonTestCompletion(entry);
    return;
  }

  const answerChoice = (question.choices || []).find((choice) => choice.value === question.answer);
  const submittedChoice = (question.choices || []).find((choice) => choice.value === record.submittedAnswer);
  const verdict = document.createElement("p");
  verdict.className = "quiz-verdict";
  if (record.correct === true) {
    verdict.textContent = "正确。";
  } else if (record.correct === false) {
    verdict.textContent = submittedChoice ? `还差一点，你选了：${submittedChoice.label}` : "还差一点。";
  } else {
    verdict.textContent = "答案已显示。";
  }

  const answerLine = document.createElement("p");
  answerLine.className = "quiz-answer-line";
  answerLine.textContent = `答案：${answerChoice?.label || question.answer}`;
  elements.quizFeedback.append(verdict, answerLine);

  if (lessonChineseEnabled() && question.explanationZh) {
    const explanation = document.createElement("p");
    explanation.className = "quiz-explanation";
    explanation.textContent = question.explanationZh;
    elements.quizFeedback.append(explanation);
  }
  renderLessonTestCompletion(entry);
}

function renderLessonTestOverview() {
  elements.practiceQuizTools.hidden = true;
  elements.practiceQuizTools.textContent = "";
  elements.quizChoices.textContent = "";
  elements.quizAnswerBox.hidden = true;
  elements.quizContext.hidden = true;
  elements.quizContext.textContent = "";
  elements.quizModeLabel.textContent = "测验";
  elements.quizCounter.textContent = "";
  elements.quizPrompt.textContent = "";
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.className = "quiz-feedback";
  elements.quizActions.hidden = true;
  elements.checkQuizButton.textContent = "检查";
  elements.showQuizAnswerButton.textContent = "显示答案";
  elements.checkQuizButton.hidden = false;

  const overview = document.createElement("div");
  overview.className = "lesson-test-overview";
  for (const type of lessonTestTypes()) {
    const config = lessonTestConfig(type);
    const questions = lessonTestQuestions(type);
    const session = lessonTestSession(type);
    const stats = lessonTestStats(type);
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const summary = document.createElement("p");
    const detail = document.createElement("p");
    const actions = document.createElement("div");
    const start = document.createElement("button");
    card.className = "lesson-test-card";
    title.textContent = config.title;
    summary.textContent = questions.length
      ? `从本课 ${questions.length} 道${config.questionLabel}练习题中随机抽取 ${Math.min(LESSON_TEST_SIZE, questions.length)} 道。`
      : `本课还没有${config.questionLabel}练习题。`;
    detail.className = "lesson-test-card-detail";
    if (stats.completed) {
      detail.textContent = `最近成绩：${stats.score}分（${stats.correct} / ${stats.total}）。`;
    } else if (session.questionIds.length) {
      detail.textContent = `进行中：${stats.answered} / ${stats.total}。`;
    } else {
      detail.textContent = "尚未开始。";
    }
    actions.className = "lesson-test-card-actions";
    start.type = "button";
    start.className = "primary-button";
    start.disabled = !questions.length;
    if (stats.completed) {
      start.dataset.lessonTestRestart = type;
      start.textContent = "重新测验";
    } else {
      start.dataset.lessonTestStart = type;
      start.textContent = session.questionIds.length ? "继续测验" : "开始测验";
    }
    actions.append(start);
    card.append(title, summary, detail, actions);
    overview.append(card);
  }
  elements.quizPrompt.append(overview);
}

function renderActiveLessonTest() {
  const entry = currentLessonTestEntry();
  if (!entry) {
    state.lessonTestType = "";
    renderLessonTestOverview();
    return;
  }
  const { question, record } = entry;
  const isSelfCheck = isGrammarSelfCheckQuestion(question);
  const selectedValue = (question.choices || []).some((choice) => choice.value === record?.selectedAnswer)
    ? record.selectedAnswer
    : "";

  elements.practiceQuizTools.hidden = true;
  elements.practiceQuizTools.textContent = "";
  elements.quizChoices.textContent = "";
  elements.quizAnswerBox.hidden = true;
  elements.quizContext.hidden = false;
  elements.quizContext.textContent = "";
  const back = document.createElement("button");
  back.type = "button";
  back.dataset.lessonTestBack = "true";
  back.textContent = "测验列表";
  elements.quizContext.append(back);
  elements.quizModeLabel.textContent = entry.config.title;
  elements.quizCounter.textContent = `${entry.index + 1} / ${entry.total}`;
  elements.quizPrompt.textContent = question.prompt || "";
  elements.quizActions.hidden = false;
  elements.checkQuizButton.hidden = isSelfCheck;
  elements.checkQuizButton.textContent = "检查";
  elements.showQuizAnswerButton.textContent = isSelfCheck && record?.revealed ? "隐藏答案" : "显示答案";
  elements.prevQuizButton.disabled = entry.total <= 1;
  elements.nextQuizButton.disabled = entry.total <= 1;
  elements.prevQuizButton.textContent = entry.index === 0 ? "回到最后一题" : "上一题";
  elements.nextQuizButton.textContent = entry.index + 1 === entry.total ? "回到第一题" : "下一题";

  if (isSelfCheck) {
    if (record?.revealed) {
      for (const [value, label] of [
        ["true", "答对了"],
        ["false", "没答对"],
      ]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-review-self-grade-button";
        button.dataset.lessonTestSelfGrade = value;
        button.textContent = label;
        button.classList.toggle("active", record.checked && String(Boolean(record.correct)) === value);
        elements.quizChoices.append(button);
      }
    }
    renderLessonTestFeedback(entry);
    return;
  }

  for (const choice of question.choices || []) {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const text = document.createElement("span");
    button.type = "button";
    button.className = "quiz-choice-button";
    button.dataset.lessonTestChoice = choice.value;
    button.disabled = Boolean(record?.revealed);
    label.className = "quiz-choice-label";
    label.textContent = choice.value;
    text.className = "quiz-choice-text";
    text.textContent = choice.label || "";
    if (selectedValue === choice.value) {
      button.classList.add("selected");
    }
    if (record?.revealed && choice.value === question.answer) {
      button.classList.add("correct");
    } else if (record?.revealed && record.correct === false && record.submittedAnswer === choice.value) {
      button.classList.add("wrong");
    }
    button.append(label, text);
    elements.quizChoices.append(button);
  }

  renderLessonTestFeedback(entry);
}

function renderTextbookReview() {
  if (!VALID_LESSON_TEST_TYPES.has(state.lessonTestType)) {
    renderLessonTestOverview();
    return;
  }
  renderActiveLessonTest();
}

function renderQuiz() {
  if (isTextbookUnit()) {
    renderTextbookReview();
    return;
  }

  elements.checkQuizButton.hidden = false;
  elements.checkQuizButton.textContent = "检查";
  elements.showQuizAnswerButton.textContent = "看答案";

  if (isPracticeUnit()) {
    renderPracticeQuiz();
    return;
  }

  elements.practiceQuizTools.hidden = true;
  elements.practiceQuizTools.textContent = "";
  const tests = sourceTextTests();
  if (tests.length) {
    renderSourceTextTests();
    return;
  }

  elements.quizModeLabel.textContent = "填空小测";
  elements.quizContext.hidden = true;
  elements.quizContext.textContent = "";
  elements.quizChoices.textContent = "";
  elements.quizAnswerBox.hidden = false;
  elements.quizActions.hidden = false;

  const cards = state.unitData?.reviewCards || [];
  if (!cards.length) {
    elements.quizCounter.textContent = "0 / 0";
    elements.quizPrompt.textContent = "还没有小测题。";
    elements.quizActions.hidden = true;
    return;
  }
  state.quizIndex = Math.min(state.quizIndex, cards.length - 1);
  const card = cards[state.quizIndex];
  elements.quizCounter.textContent = `${state.quizIndex + 1} / ${cards.length}`;
  renderMarkedText(elements.quizPrompt, card.prompt);
  elements.prevQuizButton.disabled = cards.length <= 1;
  elements.nextQuizButton.disabled = cards.length <= 1;
  elements.prevQuizButton.textContent = state.quizIndex === 0 ? "回到最后一题" : "上一题";
  elements.showQuizAnswerButton.textContent = "看答案";
  elements.nextQuizButton.textContent = state.quizIndex + 1 === cards.length ? "回到第一题" : "下一题";
}

function renderPracticeMistakes() {
  const mistakes = allSourceTextTests().filter((test) => practiceStatus(test) === "wrong" && practiceQuestionMatchesQuery(test));
  elements.reviewList.textContent = "";
  elements.reviewSummary.textContent = mistakes.length
    ? `当前有 ${mistakes.length} 道错题，答对后会从当前错题中移除。`
    : "当前没有错题。";

  if (!mistakes.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "答错的题目会出现在这里。";
    elements.reviewList.append(empty);
    return;
  }

  for (const test of mistakes) {
    const record = practiceQuestionRecord(test.id);
    const { question } = splitSourceTestPrompt(test);
    const item = document.createElement("article");
    item.className = "practice-question-card";
    const meta = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    const prompt = document.createElement("p");
    const answer = document.createElement("p");
    const action = document.createElement("button");
    meta.className = "practice-question-meta";
    title.textContent = `${test.id} · ${test.type}`;
    detail.textContent = `错误 ${record?.wrongAttempts || 0} 次 · 最近答案 ${record?.lastAnswer || "-"}`;
    prompt.textContent = question;
    answer.className = "practice-question-answer";
    answer.textContent = `答案：${test.answer}`;
    action.type = "button";
    action.dataset.practiceQuestionId = test.id;
    action.textContent = "重做";
    meta.append(title, detail);
    item.append(meta, prompt, answer, action);
    elements.reviewList.append(item);
  }
}

function renderReview() {
  if (isTextbookUnit()) {
    elements.reviewList.textContent = "";
    elements.reviewSummary.textContent = "教材课程测验集中在“测验”视图。";
    return;
  }

  if (isPracticeUnit()) {
    renderPracticeMistakes();
    return;
  }

  const words = reviewVocabulary();
  elements.reviewList.textContent = "";
  elements.reviewSummary.textContent = words.length
    ? `当前有 ${words.length} 条目到期，需要按日期复习。`
    : "当前没有到期复习条目。";

  renderMiniWordList(elements.reviewList, words, "当前没有到期复习条目。");
}

function renderLessonResetPanel() {
  if (!elements.lessonResetPanel || !elements.resetLessonButton || !elements.lessonResetSummary) {
    return;
  }
  elements.lessonResetPanel.hidden = !isTextbookUnit();
  if (!isTextbookUnit()) {
    return;
  }
  const snapshot = lessonResetSnapshot();
  elements.lessonResetSummary.textContent = snapshot.total
    ? `当前记录：步骤 ${snapshot.completedSteps}、自测 ${snapshot.activities}、音频播放 ${snapshot.audioPlays}、词汇练习 ${snapshot.vocabularyPractice}、文法练习 ${snapshot.grammarPractice}、测验 ${snapshot.tests}、学习记录 ${snapshot.events}。`
    : "本课还没有可清空的学习状态。";
  elements.resetLessonButton.disabled = snapshot.total === 0;
}

function renderLogs() {
  renderLessonResetPanel();
  const logScope = isTextbookUnit() ? "当前课" : "当前单元";
  const unitEvents = state.progress.events.filter((event) => event.unitId === currentUnitId());
  const checkins = Object.values(state.progress.checkins).sort((a, b) => b.date.localeCompare(a.date));
  elements.checkinSummary.textContent = checkins.length
    ? `共 ${checkins.length} 天，当前连续 ${streakCount()} 天。`
    : "还没有打卡记录。";
  elements.checkinList.textContent = "";
  for (const checkin of checkins.slice(0, 30)) {
    const item = document.createElement("article");
    item.className = "timeline-item";
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    title.textContent = checkin.date;
    detail.textContent = `${checkin.studiedWords} 条目 · ${checkin.reviews} 次复习 · ${checkin.quizzes} 次小测`;
    item.append(title, detail);
    elements.checkinList.append(item);
  }
  if (!checkins.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "打卡后会出现在这里。";
    elements.checkinList.append(empty);
  }

  elements.eventSummary.textContent = unitEvents.length
    ? `${logScope}最近 ${Math.min(unitEvents.length, 50)} 条。`
    : `${logScope}还没有学习记录。`;
  elements.eventList.textContent = "";
  for (const event of unitEvents.slice(0, 50)) {
    const item = document.createElement("article");
    item.className = "timeline-item";
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    title.textContent = eventLabel(event);
    detail.textContent = eventDetail(event);
    item.append(title, detail);
    elements.eventList.append(item);
  }
  if (!unitEvents.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = `${logScope}的复习、练习和状态变化会记录在这里。`;
    elements.eventList.append(empty);
  }
}

function eventLabel(event) {
  if (event.type === "lesson-step") {
    return `${event.date} 课程步骤 ${event.term}`;
  }
  if (event.type === "lesson-activity") {
    return `${event.date} 课程自测`;
  }
  if (event.type === "lesson-vocabulary-practice") {
    return `${event.date} 词汇练习 ${event.term}`;
  }
  if (event.type === "lesson-grammar-practice") {
    return `${event.date} 文法・表达练习 ${event.term}`;
  }
  if (event.type === "lesson-audio") {
    return `${event.date} 播放音频 ${event.term}`;
  }
  if (event.type === "lesson-review") {
    return `${event.date} 课程测验 ${event.term}`;
  }
  if (event.type === "lesson-practice-review") {
    return `${event.date} 课程测验 ${event.term}`;
  }
  if (event.type === "lesson-test") {
    return `${event.date} 测验 ${event.term}`;
  }
  if (event.type === "review") {
    return `${event.date} 复习 ${event.term}`;
  }
  if (event.type === "quiz") {
    return `${event.date} 小测 ${event.term || event.answer}`;
  }
  if (event.type === "checkin") {
    return `${event.date} 打卡`;
  }
  if (event.type === "status") {
    return `${event.date} 标记 ${event.term}`;
  }
  return `${event.date} 学习记录`;
}

function eventDetail(event) {
  if (event.type === "lesson-step") {
    return event.result === "completed" ? "步骤已完成" : "步骤重新打开";
  }
  if (event.type === "lesson-activity") {
    const labels = { correct: "正确", wrong: "需复习", checked: "已对照", revealed: "显示参考", hidden: "隐藏参考" };
    return labels[event.result] || "已练习";
  }
  if (event.type === "lesson-vocabulary-practice") {
    const labels = { correct: "答对", wrong: "答错", revealed: "显示答案", hidden: "隐藏答案" };
    return labels[event.result] || "已练习";
  }
  if (event.type === "lesson-grammar-practice") {
    const labels = { correct: "答对", wrong: "答错", revealed: "显示答案", hidden: "隐藏答案" };
    return labels[event.result] || "已练习";
  }
  if (event.type === "lesson-audio") {
    return "已记录播放";
  }
  if (event.type === "lesson-review") {
    return `${REVIEW_GRADES[event.result]?.label || event.result} · 下次 ${formatReviewDate(event.nextReview)} · ${
      event.status === "mastered" ? "已掌握" : "学习中"
    }`;
  }
  if (event.type === "lesson-practice-review") {
    return event.result === "correct" ? "答对" : "答错";
  }
  if (event.type === "lesson-test") {
    return `${event.correct || 0}/${event.total || 0} · ${event.score || 0}分`;
  }
  if (event.type === "review") {
    return `${REVIEW_GRADES[event.result]?.label || event.result} · 下次 ${formatReviewDate(event.nextReview)} · ${STATUS_LABELS[event.status]}`;
  }
  if (event.type === "quiz") {
    return `${event.correct ? "答对" : "答错"} · 答案 ${event.answer}`;
  }
  if (event.type === "checkin") {
    return `${event.studiedWords} 条目 · 连续 ${event.streak} 天`;
  }
  if (event.type === "status") {
    return STATUS_LABELS[event.result] || event.result;
  }
  return "";
}

function render() {
  if (state.activeScreen !== "study" || !state.unitData) {
    return;
  }
  syncActiveView();
  renderStats();
  renderCheckin();
  renderToday();
  renderList();
  renderCards();
  renderQuiz();
  renderReview();
  renderLogs();
}

function setActiveView(view) {
  state.activeView = view;
  syncActiveView();
  render();
  saveCurrentSourceLocation();
}

function resetQuizFeedback() {
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.className = "quiz-feedback";
  elements.quizAnswer.value = "";
  state.quizSelectedChoice = "";
  state.quizSubmittedAnswer = "";
  state.quizIsCorrect = null;
  state.quizRevealed = false;
  state.quizLockedQuestionId = "";
}

function syncActiveView() {
  if (isTextbookUnit() && state.activeView === "review") {
    state.activeView = "today";
  }
  if (isPracticeUnit() && state.activeView === "cards") {
    state.activeView = "today";
  }
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.view === state.activeView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  for (const [name, section] of Object.entries(sections)) {
    section.hidden = name !== state.activeView;
  }
}

function checkIn() {
  const today = todayString();
  const summary = todayStudySummary();
  if (summary.studiedWords === 0) {
    state.checkinFailure = "打卡失败：今天还没有学习内容。";
    renderCheckin();
    return;
  }

  state.checkinFailure = "";
  const checkin = {
    date: today,
    checkedInAt: new Date().toISOString(),
    studiedWords: summary.studiedWords,
    reviews: summary.reviews,
    quizzes: summary.quizzes,
    mastered: currentMasteredCount(),
    unitIds: [currentUnitId()],
  };
  state.progress.checkins[today] = checkin;
  recordEvent("checkin", {
    studiedWords: checkin.studiedWords,
    reviews: checkin.reviews,
    quizzes: checkin.quizzes,
    streak: streakCount(),
  });
  saveProgress();
  render();
}

async function loadUnit(datasetId, options = {}) {
  const dataset = manifestDatasets().find((item) => item.id === datasetId);
  if (!dataset) {
    state.unitData = null;
    render();
    return;
  }
  const response = await fetch(dataUrl(`../${dataset.path}`), { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load ${dataset.path}`);
  }
  state.sourceId = sourceIdForDataset(dataset);
  state.unitData = await response.json();
  state.cardIndex = 0;
  state.cardMode = "filtered";
  state.cardRevealed = false;
  state.quizIndex = 0;
  state.quizGrammarPointId = "";
  state.practicePool = "all";
  state.practiceTypeFilter = "all";
  state.lessonStepId = "";
  state.lessonReviewIndex = 0;
  state.lessonReviewRevealed = false;
  state.lessonPracticeReviewOrder = [];
  state.lessonPracticeReviewSignature = "";
  state.lessonTestType = "";
  state.lessonVocabularyPracticeIndex = 0;
  state.lessonGrammarPracticeIndex = 0;
  state.lessonVocabularyPracticeShuffle = false;
  state.lessonGrammarPracticeShuffle = false;
  resetLessonPracticeOrder();
  resetQuizFeedback();
  if (options.restoreLocation) {
    applySourceLocation(options.restoreLocation);
  }
  elements.sourceSelect.value = state.sourceId;
  elements.unitSelect.value = dataset.id;
  render();
  if (options.saveLocation !== false) {
    saveCurrentSourceLocation();
  }
}

async function loadSource(sourceId, preferredDatasetId = "", options = {}) {
  const sourceChanged = state.sourceId && state.sourceId !== sourceId;
  state.sourceId = sourceId;
  if (sourceChanged) {
    resetCourseFilters();
  }
  renderSourceOptions();
  const datasets = renderUnitOptions(sourceId);
  const dataset = datasets.find((item) => item.id === preferredDatasetId) || datasets[0];
  if (!dataset) {
    state.unitData = null;
    render();
    return;
  }
  const restoreLocation =
    options.restoreLocation?.datasetId === dataset.id ? options.restoreLocation : null;
  await loadUnit(dataset.id, {
    restoreLocation,
    saveLocation: options.saveLocation,
  });
}

async function init() {
  const response = await fetch(dataUrl("../data/manifest.json"), { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load data/manifest.json");
  }
  state.manifest = await response.json();
  renderLibrary();
  showLibrary();
}

elements.backToLibraryButton.addEventListener("click", () => {
  saveCurrentSourceLocation();
  showLibrary();
});

window.addEventListener("beforeunload", () => {
  saveCurrentSourceLocation();
});

elements.categoryList.addEventListener("click", (event) => {
  const sourceCard = event.target.closest("[data-source-id]");
  if (!sourceCard) {
    return;
  }
  openSource(sourceCard.dataset.sourceId).catch((error) => {
    console.error(error);
  });
});

elements.sourceSelect.addEventListener("change", (event) => {
  saveCurrentSourceLocation();
  openSource(event.target.value).catch((error) => {
    console.error(error);
  });
});

elements.unitSelect.addEventListener("change", (event) => {
  loadUnit(event.target.value).catch((error) => {
    console.error(error);
  });
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.cardIndex = 0;
  state.cardMode = "filtered";
  state.cardRevealed = false;
  state.lessonReviewIndex = 0;
  state.lessonVocabularyPracticeIndex = 0;
  state.lessonGrammarPracticeIndex = 0;
  resetLessonPracticeOrder();
  render();
  saveCurrentSourceLocation();
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
    return;
  }
  if (target.matches("[data-lesson-activity-input]")) {
    updateLessonActivityValue(target.dataset.lessonActivityInput || "", target.value);
    return;
  }

  if (target.matches("[data-lesson-vocabulary-practice-input]")) {
    updateLessonVocabularyPracticeValue(target.dataset.lessonVocabularyPracticeInput || "", target.value);
  }
});

elements.startTodayButton.addEventListener("click", () => {
  if (isTextbookUnit()) {
    state.lessonStepId = firstIncompleteLessonStepId() || lessonSteps()[0]?.id || "";
    setActiveView("today");
    return;
  }

  state.cardMode = "today";
  state.cardIndex = 0;
  state.cardRevealed = false;
  setActiveView("cards");
});

elements.checkinButton.addEventListener("click", () => {
  checkIn();
});

if (elements.resetLessonButton) {
  elements.resetLessonButton.addEventListener("click", () => {
    confirmResetCurrentLessonProgress();
  });
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeFilter = button.dataset.filter;
    state.cardIndex = 0;
    state.cardMode = "filtered";
    state.cardRevealed = false;
    state.lessonReviewIndex = 0;
    state.lessonReviewRevealed = false;
    state.lessonVocabularyPracticeIndex = 0;
    state.lessonGrammarPracticeIndex = 0;
    document.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    render();
    saveCurrentSourceLocation();
  });
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.view === "quiz" && isGrammarUnit()) {
      state.quizGrammarPointId = "";
      state.quizIndex = 0;
      resetQuizFeedback();
    }
    setActiveView(button.dataset.view);
  });
});

document.querySelectorAll(".prompt-mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.cardPromptMode = button.dataset.promptMode === "reading" ? "reading" : "term";
    state.cardRevealed = false;
    saveSettings();
    renderCards();
  });
});

document.addEventListener("click", (event) => {
  const lessonStepButton = event.target.closest("button[data-lesson-step]");
  if (lessonStepButton) {
    state.lessonStepId = lessonStepButton.dataset.lessonStep || "";
    renderToday();
    saveCurrentSourceLocation();
    return;
  }

  const lessonOpenStep = event.target.closest("button[data-lesson-open-step]");
  if (lessonOpenStep) {
    state.lessonStepId = lessonOpenStep.dataset.lessonOpenStep || "";
    setActiveView("today");
    return;
  }

  const lessonStepComplete = event.target.closest("button[data-lesson-step-complete]");
  if (lessonStepComplete) {
    const stepId = lessonStepComplete.dataset.lessonStepComplete || "";
    markLessonStep(stepId, !lessonStepRecord(stepId)?.completed);
    return;
  }

  const lessonChoice = event.target.closest("button[data-lesson-activity-choice]");
  if (lessonChoice) {
    const activityId = lessonChoice.dataset.lessonActivityChoice || "";
    updateLessonActivityValue(activityId, lessonChoice.dataset.choiceValue || "");
    render();
    return;
  }

  const lessonActivityCheck = event.target.closest("button[data-lesson-activity-check]");
  if (lessonActivityCheck) {
    const activity = lessonActivity(lessonActivityCheck.dataset.lessonActivityCheck || "");
    if (activity) {
      checkLessonActivity(activity);
    }
    return;
  }

  const lessonActivityReveal = event.target.closest("button[data-lesson-activity-reveal]");
  if (lessonActivityReveal) {
    const activity = lessonActivity(lessonActivityReveal.dataset.lessonActivityReveal || "");
    if (activity) {
      toggleLessonActivityReference(activity);
    }
    return;
  }

  const vocabularyPracticeChoice = event.target.closest("button[data-lesson-vocabulary-practice-choice]");
  if (vocabularyPracticeChoice && !vocabularyPracticeChoice.disabled) {
    updateLessonVocabularyPracticeValue(
      vocabularyPracticeChoice.dataset.lessonVocabularyPracticeChoice || "",
      vocabularyPracticeChoice.dataset.choiceValue || ""
    );
    renderList();
    return;
  }

  const vocabularyPracticeCheck = event.target.closest("button[data-lesson-vocabulary-practice-check]");
  if (vocabularyPracticeCheck) {
    const question = lessonVocabularyPracticeQuestion(vocabularyPracticeCheck.dataset.lessonVocabularyPracticeCheck || "");
    checkLessonVocabularyPractice(question);
    return;
  }

  const vocabularyPracticeReveal = event.target.closest("button[data-lesson-vocabulary-practice-reveal]");
  if (vocabularyPracticeReveal) {
    const question = lessonVocabularyPracticeQuestion(vocabularyPracticeReveal.dataset.lessonVocabularyPracticeReveal || "");
    toggleLessonVocabularyPracticeAnswer(question);
    return;
  }

  const vocabularyPracticeMove = event.target.closest("button[data-lesson-vocabulary-practice-move]");
  if (vocabularyPracticeMove) {
    moveLessonVocabularyPractice(Number(vocabularyPracticeMove.dataset.lessonVocabularyPracticeMove || 0));
    return;
  }

  const grammarPracticeChoice = event.target.closest("button[data-lesson-grammar-practice-choice]");
  if (grammarPracticeChoice && !grammarPracticeChoice.disabled) {
    updateLessonGrammarPracticeValue(
      grammarPracticeChoice.dataset.lessonGrammarPracticeChoice || "",
      grammarPracticeChoice.dataset.choiceValue || ""
    );
    renderList();
    return;
  }

  const grammarPracticeCheck = event.target.closest("button[data-lesson-grammar-practice-check]");
  if (grammarPracticeCheck) {
    const question = lessonGrammarPracticeQuestion(grammarPracticeCheck.dataset.lessonGrammarPracticeCheck || "");
    checkLessonGrammarPractice(question);
    return;
  }

  const grammarPracticeReveal = event.target.closest("button[data-lesson-grammar-practice-reveal]");
  if (grammarPracticeReveal) {
    const question = lessonGrammarPracticeQuestion(grammarPracticeReveal.dataset.lessonGrammarPracticeReveal || "");
    toggleLessonGrammarPracticeAnswer(question);
    return;
  }

  const grammarPracticeSelfGrade = event.target.closest("button[data-lesson-grammar-practice-self-grade]");
  if (grammarPracticeSelfGrade) {
    const question = lessonGrammarPracticeQuestion(grammarPracticeSelfGrade.dataset.lessonGrammarPracticeSelfGrade || "");
    selfGradeLessonGrammarPractice(question, grammarPracticeSelfGrade.dataset.correct === "true");
    return;
  }

  const grammarPracticeMove = event.target.closest("button[data-lesson-grammar-practice-move]");
  if (grammarPracticeMove) {
    moveLessonGrammarPractice(Number(grammarPracticeMove.dataset.lessonGrammarPracticeMove || 0));
    return;
  }

  const lessonTestStart = event.target.closest("button[data-lesson-test-start]");
  if (lessonTestStart) {
    startLessonTest(lessonTestStart.dataset.lessonTestStart || "", false);
    return;
  }

  const lessonTestRestart = event.target.closest("button[data-lesson-test-restart]");
  if (lessonTestRestart) {
    startLessonTest(lessonTestRestart.dataset.lessonTestRestart || "", true);
    return;
  }

  const lessonTestBack = event.target.closest("button[data-lesson-test-back]");
  if (lessonTestBack) {
    state.lessonTestType = "";
    resetQuizFeedback();
    renderQuiz();
    saveCurrentSourceLocation();
    return;
  }

  const lessonReviewGrade = event.target.closest("button[data-lesson-review-grade][data-lesson-review-item]");
  if (lessonReviewGrade) {
    const item = lessonReviewItems().find((reviewItem) => reviewItem.id === lessonReviewGrade.dataset.lessonReviewItem);
    gradeLessonReview(item, lessonReviewGrade.dataset.lessonReviewGrade);
    return;
  }

  const practiceStart = event.target.closest("button[data-practice-start]");
  if (practiceStart) {
    state.practicePool = practiceStart.dataset.practiceStart || "all";
    if (practiceStart.dataset.practiceType) {
      state.practiceTypeFilter = practiceStart.dataset.practiceType;
      state.practicePool = "type";
    }
    state.quizIndex = 0;
    resetQuizFeedback();
    setActiveView("quiz");
    return;
  }

  const practicePoolButton = event.target.closest("button[data-practice-pool]");
  if (practicePoolButton) {
    state.practicePool = practicePoolButton.dataset.practicePool || "all";
    state.quizIndex = 0;
    resetQuizFeedback();
    renderQuiz();
    saveCurrentSourceLocation();
    return;
  }

  const practiceQuestionButton = event.target.closest("button[data-practice-question-id]");
  if (practiceQuestionButton) {
    const tests = allSourceTextTests();
    const index = tests.findIndex((test) => test.id === practiceQuestionButton.dataset.practiceQuestionId);
    if (index === -1) {
      return;
    }
    state.practicePool = "all";
    state.quizIndex = index;
    resetQuizFeedback();
    setActiveView("quiz");
    return;
  }

  const statusButton = event.target.closest("button[data-word-id][data-status]");
  if (statusButton) {
    setStatus(statusButton.dataset.wordId, statusButton.dataset.status);
    return;
  }

  const reviewButton = event.target.closest("button[data-review-word-id][data-grade]");
  if (!reviewButton) {
    return;
  }
  const words = cardVocabulary();
  reviewWord(reviewButton.dataset.reviewWordId, reviewButton.dataset.grade, false);
  state.cardRevealed = false;
  if (state.cardMode === "filtered" && words.length) {
    state.cardIndex = (state.cardIndex + 1) % words.length;
  }
  render();
  saveCurrentSourceLocation();
});

document.addEventListener("change", (event) => {
  if (event.target.matches("input[data-lesson-chinese-toggle]")) {
    setLessonChineseEnabled(event.target.checked);
    return;
  }

  if (event.target.matches("input[data-lesson-practice-shuffle]")) {
    setLessonPracticeShuffle(event.target.dataset.lessonPracticeShuffle || "", event.target.checked);
    return;
  }

  if (event.target.matches("select[data-practice-type-filter]")) {
    state.practiceTypeFilter = event.target.value || "all";
    renderList();
    saveCurrentSourceLocation();
    return;
  }

  if (event.target.matches("select[data-practice-quiz-type]")) {
    state.practiceTypeFilter = event.target.value || "all";
    state.practicePool = state.practiceTypeFilter === "all" ? "all" : "type";
    state.quizIndex = 0;
    resetQuizFeedback();
    renderQuiz();
    saveCurrentSourceLocation();
  }
});

document.addEventListener(
  "play",
  (event) => {
    const target = event.target;
    if (!(target instanceof HTMLAudioElement) || !target.dataset.audioId || !isTextbookUnit()) {
      return;
    }
    recordLessonAudioPlay(target.dataset.audioId);
  },
  true
);

elements.prevCardButton.addEventListener("click", () => {
  const length = cardVocabulary().length;
  if (!length) {
    return;
  }
  state.cardIndex = (state.cardIndex - 1 + length) % length;
  state.cardRevealed = false;
  renderCards();
  saveCurrentSourceLocation();
});

elements.nextCardButton.addEventListener("click", () => {
  const length = cardVocabulary().length;
  if (!length) {
    return;
  }
  state.cardIndex = (state.cardIndex + 1) % length;
  state.cardRevealed = false;
  renderCards();
  saveCurrentSourceLocation();
});

elements.revealCardButton.addEventListener("click", () => {
  state.cardRevealed = !state.cardRevealed;
  renderCards();
});

elements.practiceGrammarButton.addEventListener("click", () => {
  const word = activeCardWord();
  if (!word) {
    return;
  }
  state.quizGrammarPointId = word.id;
  state.quizIndex = 0;
  resetQuizFeedback();
  setActiveView("quiz");
});

function currentSourceTextTest() {
  const tests = sourceTextTests();
  return tests[state.quizIndex] || null;
}

function checkSourceTextQuiz() {
  const test = currentSourceTextTest();
  if (!test) {
    return;
  }

  const context = grammarPracticeContext();
  const choices = parseSourceTestChoices(test);
  const expectedChoice = answerChoiceKey(test.answer);
  const usesChoices = Boolean(expectedChoice && choices.length >= 2);
  const submittedAnswer = usesChoices ? state.quizSelectedChoice : elements.quizAnswer.value.trim();
  if (!submittedAnswer) {
    elements.quizFeedback.textContent = usesChoices ? "先选一个答案。" : "先输入答案。";
    elements.quizFeedback.className = "quiz-feedback miss";
    return;
  }

  const isCorrect = usesChoices
    ? submittedAnswer === expectedChoice
    : sourceAnswerMatches(submittedAnswer, test.answer);
  state.quizSubmittedAnswer = submittedAnswer;
  state.quizIsCorrect = isCorrect;
  state.quizRevealed = true;
  if (isPracticeUnit()) {
    const shouldPinAnsweredQuestion =
      state.practicePool === "unattempted" || (state.practicePool === "incorrect" && isCorrect);
    state.quizLockedQuestionId = test.id;
    recordPracticeAnswer(test, submittedAnswer, isCorrect);
    if (shouldPinAnsweredQuestion) {
      state.quizIndex = 0;
    }
  }

  recordEvent("quiz", {
    cardId: test.id,
    wordId: context.point?.id,
    term: context.point?.term || test.id,
    questionId: test.id,
    questionType: test.type,
    part: test.part,
    answer: test.answer,
    submittedAnswer,
    correct: isCorrect,
  });
  saveProgress();
  render();
  saveCurrentSourceLocation();
}

function chooseLessonTestChoice(value) {
  const entry = currentLessonTestEntry();
  if (!entry) {
    return;
  }
  const record = ensureLessonTestAnswerRecord(entry.type, entry.question.id);
  if (!record || record.revealed) {
    return;
  }
  record.selectedAnswer = value;
  record.submittedAnswer = "";
  record.submittedAnswerLabel = "";
  record.correct = null;
  record.checked = false;
  record.revealed = false;
  record.updatedAt = new Date().toISOString();
  saveProgress();
  renderQuiz();
}

function checkLessonTestQuiz() {
  const entry = currentLessonTestEntry();
  if (!entry || isGrammarSelfCheckQuestion(entry.question)) {
    return;
  }
  const record = ensureLessonTestAnswerRecord(entry.type, entry.question.id);
  const submittedAnswer = record?.selectedAnswer || "";
  if (!submittedAnswer) {
    elements.quizFeedback.textContent = "先选一个答案。";
    elements.quizFeedback.className = "quiz-feedback miss";
    return;
  }
  const question = entry.question;
  const isCorrect = submittedAnswer === question.answer;
  const answerChoice = (question.choices || []).find((choice) => choice.value === submittedAnswer);
  record.submittedAnswer = submittedAnswer;
  record.submittedAnswerLabel = answerChoice?.label || "";
  record.correct = isCorrect;
  record.checked = true;
  record.revealed = true;
  record.updatedAt = new Date().toISOString();
  completeLessonTestIfReady(entry.type);
  saveProgress();
  renderStats();
  renderLogs();
  renderQuiz();
  saveCurrentSourceLocation();
}

function revealLessonTestAnswer() {
  const entry = currentLessonTestEntry();
  if (!entry) {
    return;
  }
  const record = ensureLessonTestAnswerRecord(entry.type, entry.question.id);
  if (!record) {
    return;
  }
  const question = entry.question;
  if (isGrammarSelfCheckQuestion(question)) {
    record.revealed = !record.revealed;
    if (!record.revealed && !record.checked) {
      record.correct = null;
      record.submittedAnswer = "";
      record.submittedAnswerLabel = "";
    }
  } else {
    const submittedAnswer = record.selectedAnswer || "";
    const answerChoice = (question.choices || []).find((choice) => choice.value === submittedAnswer);
    record.submittedAnswer = submittedAnswer;
    record.submittedAnswerLabel = answerChoice?.label || "";
    record.correct = submittedAnswer === question.answer;
    record.checked = true;
    record.revealed = true;
    completeLessonTestIfReady(entry.type);
  }
  record.updatedAt = new Date().toISOString();
  saveProgress();
  renderStats();
  renderLogs();
  renderQuiz();
  saveCurrentSourceLocation();
}

function selfGradeLessonTest(isCorrect) {
  const entry = currentLessonTestEntry();
  if (!entry || !isGrammarSelfCheckQuestion(entry.question)) {
    return;
  }
  const record = ensureLessonTestAnswerRecord(entry.type, entry.question.id);
  if (!record?.revealed) {
    return;
  }
  record.submittedAnswer = isCorrect ? "答对了" : "没答对";
  record.submittedAnswerLabel = record.submittedAnswer;
  record.correct = isCorrect;
  record.checked = true;
  record.updatedAt = new Date().toISOString();
  completeLessonTestIfReady(entry.type);
  saveProgress();
  renderStats();
  renderLogs();
  renderQuiz();
  saveCurrentSourceLocation();
}

function moveLessonTest(delta) {
  const entry = currentLessonTestEntry();
  if (!entry) {
    return;
  }
  entry.session.currentIndex = (entry.session.currentIndex + delta + entry.total) % entry.total;
  resetQuizFeedback();
  saveProgress();
  renderQuiz();
  saveCurrentSourceLocation();
}

elements.quizChoices.addEventListener("click", (event) => {
  const lessonTestSelfGrade = event.target.closest("button[data-lesson-test-self-grade]");
  if (lessonTestSelfGrade && isTextbookUnit()) {
    selfGradeLessonTest(lessonTestSelfGrade.dataset.lessonTestSelfGrade === "true");
    return;
  }

  const lessonTestChoice = event.target.closest("button[data-lesson-test-choice]");
  if (lessonTestChoice && isTextbookUnit() && !lessonTestChoice.disabled) {
    chooseLessonTestChoice(lessonTestChoice.dataset.lessonTestChoice);
    return;
  }

  const choiceButton = event.target.closest("button[data-source-choice]");
  if (!choiceButton || choiceButton.disabled) {
    return;
  }
  state.quizSelectedChoice = choiceButton.dataset.sourceChoice;
  state.quizSubmittedAnswer = "";
  state.quizIsCorrect = null;
  state.quizRevealed = false;
  renderQuiz();
});

elements.checkQuizButton.addEventListener("click", () => {
  if (isTextbookUnit()) {
    checkLessonTestQuiz();
    return;
  }

  if (sourceTextTests().length) {
    checkSourceTextQuiz();
    return;
  }

  const cards = state.unitData?.reviewCards || [];
  const card = cards[state.quizIndex];
  if (!card) {
    return;
  }
  const userAnswer = normalize(elements.quizAnswer.value);
  const correctAnswer = normalize(card.answer);
  const isCorrect = Boolean(userAnswer && userAnswer === correctAnswer);
  const linkedWord = findWordForAnswer(card.answer);
  elements.quizFeedback.textContent = isCorrect ? "正确。" : `还差一点，答案是：${card.answer}`;
  elements.quizFeedback.className = `quiz-feedback ${isCorrect ? "correct" : "miss"}`;
  recordEvent("quiz", {
    cardId: card.id,
    wordId: linkedWord?.id,
    term: linkedWord?.term,
    answer: card.answer,
    correct: isCorrect,
  });
  saveProgress();
  renderStats();
  renderLogs();
});

elements.showQuizAnswerButton.addEventListener("click", () => {
  if (isTextbookUnit()) {
    revealLessonTestAnswer();
    return;
  }

  const sourceTest = currentSourceTextTest();
  if (sourceTest) {
    state.quizSubmittedAnswer = state.quizSelectedChoice || elements.quizAnswer.value.trim();
    state.quizIsCorrect = null;
    state.quizRevealed = true;
    renderQuiz();
    return;
  }

  const cards = state.unitData?.reviewCards || [];
  const card = cards[state.quizIndex];
  if (!card) {
    return;
  }
  elements.quizFeedback.textContent = `答案：${card.answer}`;
  elements.quizFeedback.className = "quiz-feedback";
});

elements.prevQuizButton.addEventListener("click", () => {
  if (isTextbookUnit()) {
    moveLessonTest(-1);
    return;
  }

  const sourceTests = sourceTextTests();
  if (sourceTests.length) {
    state.quizIndex = (state.quizIndex - 1 + sourceTests.length) % sourceTests.length;
    resetQuizFeedback();
    renderQuiz();
    const prevTest = sourceTests[state.quizIndex];
    const usesChoices = Boolean(answerChoiceKey(prevTest?.answer) && parseSourceTestChoices(prevTest).length >= 2);
    if (!usesChoices) {
      elements.quizAnswer.focus();
    }
    saveCurrentSourceLocation();
    return;
  }

  const cards = state.unitData?.reviewCards || [];
  if (!cards.length) {
    return;
  }
  state.quizIndex = (state.quizIndex - 1 + cards.length) % cards.length;
  resetQuizFeedback();
  renderQuiz();
  elements.quizAnswer.focus();
  saveCurrentSourceLocation();
});

elements.nextQuizButton.addEventListener("click", () => {
  if (isTextbookUnit()) {
    moveLessonTest(1);
    return;
  }

  const sourceTests = sourceTextTests();
  if (sourceTests.length) {
    state.quizIndex = (state.quizIndex + 1) % sourceTests.length;
    resetQuizFeedback();
    renderQuiz();
    const nextTest = sourceTests[state.quizIndex];
    const usesChoices = Boolean(answerChoiceKey(nextTest?.answer) && parseSourceTestChoices(nextTest).length >= 2);
    if (!usesChoices) {
      elements.quizAnswer.focus();
    }
    saveCurrentSourceLocation();
    return;
  }

  const cards = state.unitData?.reviewCards || [];
  if (!cards.length) {
    return;
  }
  state.quizIndex = (state.quizIndex + 1) % cards.length;
  resetQuizFeedback();
  renderQuiz();
  elements.quizAnswer.focus();
  saveCurrentSourceLocation();
});

elements.quizAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    elements.checkQuizButton.click();
  }
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.matches("[data-lesson-vocabulary-practice-input]")) {
    return;
  }
  if (event.key !== "Enter") {
    return;
  }
  const item = lessonVocabularyItems().find((vocabularyItem) => vocabularyItem.id === target.dataset.lessonVocabularyPracticeInput);
  checkLessonVocabularyPractice(item);
});

init().catch((error) => {
  console.error(error);
  document.body.textContent = "KotobaVault 数据加载失败，请先运行导出脚本。";
});
