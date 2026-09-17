/**
 * LỘ TRÌNH TIẾNG ANH BAND 4.0 - 7.0+ & MẸO VÀNG GHI NHỚ
 * Tích hợp: Phát âm bản xứ (Web Speech TTS), Chế độ Gõ Bịt Mắt (Dictation), và Tự Tạo Bộ Đề Riêng
 */

class UnifiedTypingGame {
  constructor() {
    // 1. Phase Master State & 3-Tier Curriculum
    this.currentPhase = "phase_1"; // "phase_1", "phase_2", "phase_3"
    this.currentMode = "vocab"; // "vocab", "tenses", "collocation", "sentence_upgrade", "dictation", "reading", "mistake_vault"
    this.currentVocabCategory = "irregular_verbs"; // "irregular_verbs", "daily_life", "emotions", "tech_ai"
    this.currentItSubCategory = "all"; // "all", "dev", "cloud", "data", "ai_sec"
    this.currentBand = "band_4_5"; // "band_4_5", "band_5_6", "band_6_7", "band_custom"
    this.currentPassageKey = "passage_1";
    this.isDictationMode = false;  // Chế độ gõ bịt mắt toàn diện
    this.dictationPeekTimer = null;
    this.speechRate = 1.0; // 0.75, 1.0, 1.25

    // 2. Active Pools & Indices
    this.activePool = [];
    this.activeIdx = 0;
    this.readingPool = [];
    this.wordPool = [];
    this.customDeck = [];
    this.customDeckName = "Bộ Đề Tự Nhập";
    this.readingIdx = 0;
    this.grammarIdx = 0;
    this.wordIdx = 0;

    this.currentChallenge = null;
    this.targetWord = "";
    this.typedLetters = [];

    // 3. Stats & Scoring
    this.score = 0;
    this.combo = 0;

    // 4. Bind DOM References
    this.bindDOM();

    // 5. Load Storage (Notebook, Custom Deck & Mistake Vault)
    this.notebookTips = [];
    this.mistakes = [];
    this.isSrsPractice = false;
    this.loadNotebookFromStorage();
    this.loadCustomDeckFromStorage();
    this.loadMistakesFromStorage();

    // 6. Meme & Audio
    this.memesList = [];
    this.isMemeActive = false;
    this.autoDismissTimer = null;
    this.autoDismissDuration = 1600;
    this.audioCtx = null;
    this.bgmPlaying = false;
    this.isBgmDucked = false;
    this.currentMusicType = "none"; // 'youtube', 'soundcloud', 'spotify', 'html5', 'none'
    this.ytPlayer = null;
    this.scWidget = null;
    this.spotifyEmbedController = null;
    this.isYtReady = false;
    this.currentTrackTitle = "Chưa phát";
    this.bgmVolume = 0.7;
    this.pendingYtVideoId = null;
    this.currentTrackDuration = 0;
    this.currentTrackTime = 0;
    this.progressInterval = null;
    this.isUserDraggingSeek = false;
    this.ttsUtteranceSeq = 0;
    this.activeUtterance = null;
    this.ttsResumeSafetyTimer = null;

    // 7. Text-To-Speech (Web Speech API)
    this.speechSynth = window.speechSynthesis;
    this.selectedVoice = null;
    this.initSpeechEngine();

    // 8. Bootstrap App
    this.initMemeLibrary();
    this.initAudioEngine();
    this.initOnlineMusic();
    this.initTensesGuide();
    this.initEventListeners();
    this.switchPhase(this.currentPhase);
  }

  bindDOM() {
    this.dom = {
      // Header & Score
      scoreDisplay: document.getElementById("scoreDisplay"),
      comboPill: document.getElementById("comboPill"),

      // Phase Stepper Buttons (3 Giai Đoạn Học)
      btnPhase1: document.getElementById("btnPhase1"),
      btnPhase2: document.getElementById("btnPhase2"),
      btnPhase3: document.getElementById("btnPhase3"),
      phase1ModeGroup: document.getElementById("phase1ModeGroup"),
      phase2ModeGroup: document.getElementById("phase2ModeGroup"),
      phase3ModeGroup: document.getElementById("phase3ModeGroup"),

      // Sub-Mode Switcher Tabs
      tabVocabMode: document.getElementById("tabVocabMode"),
      tabTensesMode: document.getElementById("tabTensesMode"),
      tabCollocationMode: document.getElementById("tabCollocationMode"),
      tabSentenceUpgradeMode: document.getElementById("tabSentenceUpgradeMode"),
      tabDictationSpeedMode: document.getElementById("tabDictationSpeedMode"),
      tabReadingEvidenceMode: document.getElementById("tabReadingEvidenceMode"),
      tabMistakeVaultMode: document.getElementById("tabMistakeVaultMode"),
      vaultCount: document.getElementById("vaultCount"),

      // Filter Groups
      vocabFilterGroup: document.getElementById("vocabFilterGroup"),
      itSubFilterBar: document.getElementById("itSubFilterBar"),
      itChips: document.querySelectorAll(".it-chip"),
      bandFilterGroup: document.getElementById("bandFilterGroup"),
      btnVocabIrr: document.getElementById("btnVocabIrr"),
      btnVocabDaily: document.getElementById("btnVocabDaily"),
      btnVocabEmotions: document.getElementById("btnVocabEmotions"),
      btnVocabTech: document.getElementById("btnVocabTech"),

      // Roadmap Milestones (Band 4.0 -> 7.0)
      btnBand45: document.getElementById("btnBand45"),
      btnBand56: document.getElementById("btnBand56"),
      btnBand67: document.getElementById("btnBand67"),
      btnBandCustom: document.getElementById("btnBandCustom"),
      btnPassage1: document.getElementById("btnBand45"),
      btnPassage2: document.getElementById("btnBand56"),
      btnPassage3: document.getElementById("btnBand67"),
      btnPassage4: document.getElementById("btnPassage4"),
      btnPassageCustom: document.getElementById("btnBandCustom"),
      customDeckTitle: document.getElementById("customDeckTitle"),
      roadmapBadgeLabel: document.getElementById("roadmapBadgeLabel"),
      currentMilestoneDesc: document.getElementById("currentMilestoneDesc"),
      bandProgressText: document.getElementById("bandProgressText"),
      roadmapProgressBar: document.getElementById("roadmapProgressBar"),
      btnOpenNotebook: document.getElementById("btnOpenNotebook"),
      notebookCount: document.getElementById("notebookCount"),

      // Main Arena Layout Container
      mainArena: document.getElementById("mainArena") || document.querySelector(".main-arena"),
      arenaLeftPane: document.querySelector(".arena-left-pane"),

      // Khung Bài Đọc Học Thuật Thực Tế (Passage Viewer)
      passageViewerPane: document.getElementById("passageViewerPane"),
      pvCodeBadge: document.getElementById("pvCodeBadge"),
      pvTopicTag: document.getElementById("pvTopicTag"),
      pvTitle: document.getElementById("pvTitle"),
      pvSubtitle: document.getElementById("pvSubtitle"),
      passageBodyScroll: document.getElementById("passageBodyScroll"),
      btnHighlightEvidence: document.getElementById("btnHighlightEvidence"),
      btnTogglePassage: document.getElementById("btnTogglePassage"),

      // Card Module 1.1: Vocab Card
      vocabCard: document.getElementById("vocabCard"),
      vocabBadge: document.getElementById("vocabBadge"),
      vocabTopicTag: document.getElementById("vocabTopicTag"),
      vocabIPA: document.getElementById("vocabIPA"),
      btnSpeakVocab: document.getElementById("btnSpeakVocab"),
      vocabTargetWord: document.getElementById("vocabTargetWord"),
      vocabMeaning: document.getElementById("vocabMeaning"),
      vocabContextText: document.getElementById("vocabContextText"),
      vocabTipText: document.getElementById("vocabTipText"),

      // Card Module 1.2: 6 Tenses Card
      grammarTensesCard: document.getElementById("grammarTensesCard"),
      tensesBadge: document.getElementById("tensesBadge"),
      tensesTopicTag: document.getElementById("tensesTopicTag"),
      tensesVerbTag: document.getElementById("tensesVerbTag"),
      btnSpeakTenses: document.getElementById("btnSpeakTenses"),
      tensesStoryTitle: document.getElementById("tensesStoryTitle"),
      tensesContextText: document.getElementById("tensesContextText"),
      tensesHintText: document.getElementById("tensesHintText"),

      // Card Module 2.1: Collocations & Chunks
      collocationCard: document.getElementById("collocationCard"),
      collocBadge: document.getElementById("collocBadge"),
      collocTopicTag: document.getElementById("collocTopicTag"),
      collocIPA: document.getElementById("collocIPA"),
      btnSpeakColloc: document.getElementById("btnSpeakColloc"),
      collocChunkTitle: document.getElementById("collocChunkTitle"),
      collocMeaning: document.getElementById("collocMeaning"),
      collocContextText: document.getElementById("collocContextText"),
      collocTipText: document.getElementById("collocTipText"),

      // Card Module 2.2: Sentence Upgrade 4.0 ➔ 7.0
      sentenceUpgradeCard: document.getElementById("sentenceUpgradeCard"),
      upgradePatternBadge: document.getElementById("upgradePatternBadge"),
      btnSpeakUpgrade: document.getElementById("btnSpeakUpgrade"),
      upgradeBasicText: document.getElementById("upgradeBasicText"),
      upgradeAdvancedText: document.getElementById("upgradeAdvancedText"),
      upgradeWhyText: document.getElementById("upgradeWhyText"),

      // Card Module 3.1: Dictation Speed Audition
      dictationSpeedCard: document.getElementById("dictationSpeedCard"),
      btnSpeed075: document.getElementById("btnSpeed075"),
      btnSpeed100: document.getElementById("btnSpeed100"),
      btnSpeed125: document.getElementById("btnSpeed125"),
      btnSpeakDictation: document.getElementById("btnSpeakDictation"),
      dictTopicTag: document.getElementById("dictTopicTag"),
      dictContextText: document.getElementById("dictContextText"),
      dictMeaningText: document.getElementById("dictMeaningText"),
      dictTrapText: document.getElementById("dictTrapText"),

      // Card Module 3.2: Reading Question & Evidence Card
      grammarStoryCard: document.getElementById("grammarStoryCard"),
      btnSpeakGrammar: document.getElementById("btnSpeakGrammar"),
      grammarStoryTag: document.getElementById("grammarStoryTag"),
      grammarVerbPrompt: document.getElementById("grammarVerbPrompt"),
      grammarContextText: document.getElementById("grammarContextText"),
      grammarHintNote: document.getElementById("grammarHintNote"),
      btnCardStudyTense: document.getElementById("btnCardStudyTense"),

      // Fallback Card
      wordHintCard: document.getElementById("wordHintCard"),
      btnSpeakWord: document.getElementById("btnSpeakWord"),
      hintMeaning: document.getElementById("hintMeaning"),
      hintIPA: document.getElementById("hintIPA"),
      hintNote: document.getElementById("hintNote"),
      hintLength: document.getElementById("hintLength"),

      // Dictation Mode (Gõ Bịt Mắt Toàn Diện)
      btnDictationToggle: document.getElementById("btnDictationToggle"),
      dictationStatusLabel: document.getElementById("dictationStatusLabel"),
      btnOpenCustomDeck: document.getElementById("btnOpenCustomDeck"),
      dictationOverlay: document.getElementById("dictationOverlay"),
      dictationInstruction: document.getElementById("dictationInstruction"),
      btnDictReplay: document.getElementById("btnDictReplay"),
      btnDictPeek: document.getElementById("btnDictPeek"),

      // Cẩm Nang 6 Thì (Tenses Guide)
      btnOpenTensesGuide: document.getElementById("btnOpenTensesGuide"),
      tensesGuideModal: document.getElementById("tensesGuideModal"),
      btnCloseTensesGuide: document.getElementById("btnCloseTensesGuide"),
      tgTabBar: document.getElementById("tgTabBar"),
      tgContentBox: document.getElementById("tgContentBox"),

      // Trợ Lý AI Tạo Bộ Đề (AI Generator)
      btnOpenAiGen: document.getElementById("btnOpenAiGen"),
      aiGeneratorModal: document.getElementById("aiGeneratorModal"),
      btnCloseAiGen: document.getElementById("btnCloseAiGen"),
      btnCancelAiGen: document.getElementById("btnCancelAiGen"),
      btnSubmitAiGen: document.getElementById("btnSubmitAiGen"),
      aiTopicInput: document.getElementById("aiTopicInput"),
      aiBandSelect: document.getElementById("aiBandSelect"),
      aiCountSelect: document.getElementById("aiCountSelect"),
      aiApiKeyInput: document.getElementById("aiApiKeyInput"),
      aiStatusPanel: document.getElementById("aiStatusPanel"),
      aiStatusMsg: document.getElementById("aiStatusMsg"),

      // Typing Arena & Seamless Mobile Input
      wordSlotsWrapper: document.getElementById("wordSlotsWrapper"),
      wordSlotsContainer: document.getElementById("wordSlotsContainer"),
      statusMessage: document.getElementById("statusMessage"),
      btnPeek: document.getElementById("btnPeek"),
      mobileNativeInput: document.getElementById("mobileNativeInput"),

      // Meme Popup
      memeModal: document.getElementById("memeModal"),
      memeImage: document.getElementById("memeImage"),
      memeCaption: document.getElementById("memeCaption"),
      memeComboText: document.getElementById("memeComboText"),
      recapWord: document.getElementById("recapWord"),
      recapMeaning: document.getElementById("recapMeaning"),
      dismissBar: document.getElementById("dismissBar"),
      memeCountDisplay: document.getElementById("memeCountDisplay"),

      // Golden Tip Explanation Modal
      explanationModal: document.getElementById("explanationModal"),
      explBandBadge: document.getElementById("explBandBadge"),
      explStoryTitle: document.getElementById("explStoryTitle"),
      explAnswerWord: document.getElementById("explAnswerWord"),
      explAnswerContext: document.getElementById("explAnswerContext"),
      btnSpeakModal: document.getElementById("btnSpeakModal"),
      explRuleLabel: document.getElementById("explRuleLabel"),
      explRuleVal: document.getElementById("explRuleVal"),
      explExampleLabel: document.getElementById("explExampleLabel"),
      explExampleVal: document.getElementById("explExampleVal"),
      explTrapVal: document.getElementById("explTrapVal"),
      explHackVal: document.getElementById("explHackVal"),
      btnSaveNotebook: document.getElementById("btnSaveNotebook"),
      btnExplNext: document.getElementById("btnExplNext"),

      // Sổ Tay Bỏ Túi Modal
      notebookModal: document.getElementById("notebookModal"),
      btnCloseNotebook: document.getElementById("btnCloseNotebook"),
      notebookListContainer: document.getElementById("notebookListContainer"),
      nbFilterAllCount: document.getElementById("nbFilterAllCount"),
      nbFilter45Count: document.getElementById("nbFilter45Count"),
      nbFilter56Count: document.getElementById("nbFilter56Count"),
      nbFilter67Count: document.getElementById("nbFilter67Count"),
      nbFilterCustomCount: document.getElementById("nbFilterCustomCount"),

      // Modal Module 5: Mistake Vault & SRS
      mistakeVaultModal: document.getElementById("mistakeVaultModal"),
      btnCloseMistakeVault: document.getElementById("btnCloseMistakeVault"),
      mvTotalCount: document.getElementById("mvTotalCount"),
      mvReviewedCount: document.getElementById("mvReviewedCount"),
      btnSrsPracticeNow: document.getElementById("btnSrsPracticeNow"),
      btnClearVault: document.getElementById("btnClearVault"),
      mvListContainer: document.getElementById("mvListContainer"),

      // Custom Deck Modal
      customDeckModal: document.getElementById("customDeckModal"),
      btnCloseCustomDeck: document.getElementById("btnCloseCustomDeck"),
      btnCancelCustomDeck: document.getElementById("btnCancelCustomDeck"),
      btnSaveCustomDeck: document.getElementById("btnSaveCustomDeck"),
      customDeckNameInput: document.getElementById("customDeckNameInput"),
      customDeckTextarea: document.getElementById("customDeckTextarea"),
      cdParsedCount: document.getElementById("cdParsedCount"),
      btnLoadSampleDeck: document.getElementById("btnLoadSampleDeck"),
      btnClearCustomDeck: document.getElementById("btnClearCustomDeck"),

      // Media & Online Music Controls
      customAudioInput: document.getElementById("customAudioInput"),
      customAudioElem: document.getElementById("customAudioElem"),
      customMemeFiles: document.getElementById("customMemeFiles"),
      btnAudioToggle: document.getElementById("btnAudioToggle"),
      volSlider: document.getElementById("volSlider"),
      btnOpenOnlineMusic: document.getElementById("btnOpenOnlineMusic"),
      onlineMusicModal: document.getElementById("onlineMusicModal"),
      btnCloseOnlineMusic: document.getElementById("btnCloseOnlineMusic"),
      onlineMusicUrlInput: document.getElementById("onlineMusicUrlInput"),
      btnPlayOnlineMusic: document.getElementById("btnPlayOnlineMusic"),
      btnStopOnlineMusic: document.getElementById("btnStopOnlineMusic"),
      btnSaveCloseOnlineMusic: document.getElementById("btnSaveCloseOnlineMusic"),
      onlineMusicStatusBox: document.getElementById("onlineMusicStatusBox"),
      onlineMusicStatusText: document.getElementById("onlineMusicStatusText"),
      currentTrackPill: document.getElementById("currentTrackPill"),
      currentTrackName: document.getElementById("currentTrackName"),

      // Unified Floating Music Player Elements
      floatingMusicWidget: document.getElementById("floatingMusicWidget"),
      playerSourceBrand: document.getElementById("playerSourceBrand"),
      playerBrandIcon: document.getElementById("playerBrandIcon"),
      playerBrandName: document.getElementById("playerBrandName"),
      floatingTrackTitle: document.getElementById("floatingTrackTitle"),
      btnToggleMinimizeWidget: document.getElementById("btnToggleMinimizeWidget"),
      btnCloseFloatingWidget: document.getElementById("btnCloseFloatingWidget"),
      floatingPlayerScreen: document.getElementById("floatingPlayerScreen"),
      youtubePlayerContainer: document.getElementById("youtubePlayerContainer"),
      soundcloudPlayerContainer: document.getElementById("soundcloudPlayerContainer"),
      spotifyPlayerContainer: document.getElementById("spotifyPlayerContainer"),
      audioVisualizerSlot: document.getElementById("audioVisualizerSlot"),
      audioVisualizerName: document.getElementById("audioVisualizerName"),
      floatingPlayerControls: document.getElementById("floatingPlayerControls"),
      seekCurrentTime: document.getElementById("seekCurrentTime"),
      playerProgressBar: document.getElementById("playerProgressBar"),
      seekProgressFill: document.getElementById("seekProgressFill"),
      seekTotalDuration: document.getElementById("seekTotalDuration"),
      btnSeekBackward: document.getElementById("btnSeekBackward"),
      btnSeekPlayToggle: document.getElementById("btnSeekPlayToggle"),
      btnSeekForward: document.getElementById("btnSeekForward"),
      widgetVolSlider: document.getElementById("widgetVolSlider"),
      spotifyEmbedNotice: document.getElementById("spotifyEmbedNotice")
    };
  }

  // --- TEXT-TO-SPEECH (TTS) ENGINE ---
  initSpeechEngine() {
    if (!this.speechSynth) return;
    const updateVoices = () => {
      const voices = this.speechSynth.getVoices();
      // Ưu tiên giọng Anh-Mỹ hoặc Anh-Anh bản xứ mượt mà
      this.selectedVoice = voices.find(v => v.lang.startsWith("en-US") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha"))) 
        || voices.find(v => v.lang.startsWith("en-US")) 
        || voices.find(v => v.lang.startsWith("en-GB")) 
        || voices.find(v => v.lang.startsWith("en"));
    };
    updateVoices();
    if (this.speechSynth.onvoiceschanged !== undefined) {
      this.speechSynth.onvoiceschanged = updateVoices;
    }
  }

  speakText(text, rate = 0.9) {
    if (!this.speechSynth || !text) return;

    // Loại bỏ triệt để mọi phần trong ngoặc đơn như (drink), gạch dưới và khoảng trắng thừa
    let clean = text
      .replace(/\([^)]*\)/g, " ")
      .replace(/_{2,}/g, " ")
      .replace(/\[.*?\]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!clean) return;

    // Đánh số thứ tự phiên đọc để triệt tiêu tình trạng 2 âm nhập nhằng khi gõ nhanh
    this.ttsUtteranceSeq = (this.ttsUtteranceSeq || 0) + 1;
    const currentSeq = this.ttsUtteranceSeq;

    if (this.ttsResumeSafetyTimer) {
      clearTimeout(this.ttsResumeSafetyTimer);
      this.ttsResumeSafetyTimer = null;
    }

    // 1. TẮT NHẠC NỀN TỨC THỜI (MUTE 0ms) TRONG LÚC PHÁT ÂM CÂU
    let wasMusicPlaying = false;
    if (this.bgmPlaying || this.currentMusicType !== "none") {
      wasMusicPlaying = true;
      this.isBgmDucked = true;
      this.pauseBgmTemporary();
    }

    try {
      this.speechSynth.cancel(); // Dừng câu trước nếu đang đọc dở
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(clean);
    this.activeUtterance = utterance; // Ngăn V8 garbage collection huỷ onend
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.lang = "en-US";
    utterance.rate = rate; // Đọc với tốc độ vừa phải, rõ khẩu hình
    utterance.pitch = 1.0;

    // Hàm khôi phục lại nhạc nền sau khi đọc xong
    const restoreMusic = () => {
      // Chỉ khôi phục nếu phiên đọc này vẫn là mới nhất và không có câu nào đang nói
      if (this.ttsUtteranceSeq !== currentSeq) return;
      if (this.speechSynth && this.speechSynth.speaking) return;

      if (wasMusicPlaying && this.isBgmDucked) {
        this.isBgmDucked = false;
        setTimeout(() => {
          if (this.ttsUtteranceSeq === currentSeq && !this.isBgmDucked && (this.bgmPlaying || this.currentMusicType !== "none")) {
            this.resumeBgmTemporary();
          }
        }, 120);
      }
    };

    utterance.onend = () => {
      restoreMusic();
    };

    utterance.onerror = (e) => {
      // Nếu bị interrupted / canceled bởi câu sau, TUYỆT ĐỐI không khôi phục nhạc ở đây
      if (e && (e.error === 'interrupted' || e.error === 'canceled')) {
        return;
      }
      restoreMusic();
    };

    // Safety fallback: Đảm bảo nhạc luôn bật lại sau khi hết thời gian ước tính nếu trình duyệt nuốt onend
    const estimatedDurationMs = Math.max(1600, Math.ceil((clean.length / 12) * 1000 / rate) + 600);
    this.ttsResumeSafetyTimer = setTimeout(() => {
      if (this.ttsUtteranceSeq === currentSeq && this.isBgmDucked) {
        restoreMusic();
      }
    }, estimatedDurationMs);

    try {
      this.speechSynth.speak(utterance);
    } catch (err) {
      console.warn("SpeechSynthesis error:", err);
      restoreMusic();
    }
  }

  speakCurrentSentence() {
    if (!this.currentChallenge) return;
    const item = this.currentChallenge;
    const target = (this.targetWord || item.targetWord || item.word || "").toLowerCase();

    let text = "";
    if (this.currentMode === "vocab") {
      text = item.contextSentence || item.example || item.meaning || target;
    } else if (this.currentMode === "tenses") {
      text = item.contextSentence || item.example || "";
    } else if (this.currentMode === "collocation") {
      text = item.contextSentence || item.example || item.chunk || "";
    } else if (this.currentMode === "sentence_upgrade") {
      text = item.contextSentence || item.advanced70 || item.basic40 || "";
    } else if (this.currentMode === "dictation") {
      text = item.audioText || item.contextSentence || target;
    } else if (this.currentMode === "reading") {
      text = item.questionPrompt || item.contextSentence || "";
    } else {
      text = item.contextSentence || item.example || target;
    }

    if (!text) text = target;

    // Điền từ đúng vào chỗ trống [ ________ ] hoặc ________ và loại bỏ gợi ý dạng (buy)
    if (text && target) {
      text = text.replace(/\([^)]*\)\s*_{2,}/g, target);
      text = text.replace(/_{2,}/g, target);
      text = text.replace(/\([^)]*\)/g, " ");
    }

    this.speakText(text, this.speechRate || 0.88);
  }

  speakCurrentWord() {
    if (!this.currentChallenge) return;
    const item = this.currentChallenge;
    const word = (this.targetWord || item.targetWord || item.word || "").trim();
    if (word) {
      this.speakText(word, 0.85);
    }
  }

  speakCurrentItem() {
    this.speakCurrentSentence();
  }

  // --- DICTATION MODE (GÕ BỊT MẮT) ---
  toggleDictationMode() {
    this.isDictationMode = !this.isDictationMode;
    const btn = this.dom.btnDictationToggle;
    const label = this.dom.dictationStatusLabel;

    if (this.isDictationMode) {
      btn.classList.add("active");
      label.textContent = "BẬT 🔥";
      this.dom.dictationOverlay.classList.remove("hidden");
      this.dom.wordHintCard.classList.add("hidden");
      this.dom.grammarStoryCard.classList.add("hidden");

      // Tự động phát âm ngay câu hỏi hiện tại
      setTimeout(() => this.speakCurrentItem(), 200);
    } else {
      btn.classList.remove("active");
      label.textContent = "TẮT";
      this.dom.dictationOverlay.classList.add("hidden");
      if (this.currentMode === "grammar") {
        this.dom.grammarStoryCard.classList.remove("hidden");
      } else {
        this.dom.wordHintCard.classList.remove("hidden");
      }
    }
  }

  peekDictationHint() {
    if (!this.isDictationMode) return;
    this.dom.dictationOverlay.classList.add("hidden");
    if (this.currentMode === "grammar") {
      this.dom.grammarStoryCard.classList.remove("hidden");
    } else {
      this.dom.wordHintCard.classList.remove("hidden");
    }

    if (this.dictationPeekTimer) clearTimeout(this.dictationPeekTimer);
    this.dictationPeekTimer = setTimeout(() => {
      if (this.isDictationMode) {
        this.dom.dictationOverlay.classList.remove("hidden");
        this.dom.wordHintCard.classList.add("hidden");
        this.dom.grammarStoryCard.classList.add("hidden");
      }
    }, 3000); // Ẩn lại sau 3 giây
  }

  // --- MEME LIBRARY ---
  initMemeLibrary() {
    if (window.CUSTOM_MEME_CONFIG && Array.isArray(window.CUSTOM_MEME_CONFIG) && window.CUSTOM_MEME_CONFIG.length > 0) {
      this.memesList = [...window.CUSTOM_MEME_CONFIG];
    } else {
      this.memesList = [
        { url: "https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif", caption: "MÈO GẬT ĐẦU: ĐỈNH CỦA CHÓP!" },
        { url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZhcTJtYW04NnpobzJ2eXkyNGg2aDNhY3NlZTVidjR1N2tkaG42eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/artj92V8o75VPL7AeQ/giphy.gif", caption: "POP CAT: NẢY SỐ NHANH NHƯ CHỚP!" },
        { url: "https://media.giphy.com/media/DhstvI3CH03yOTXRdC/giphy.gif", caption: "DRAKE: ĐỈNH NÓC KỊCH TRẦN BAY PHẤP PHỚI!" },
        { url: "https://media.giphy.com/media/G9nbBA8PS440E/giphy.gif", caption: "GATSBY NÂNG LY: BẬC THẦY MẸO VÀNG!" }
      ];
    }
    this.updateMemeCountUI();
  }

  updateMemeCountUI() {
    if (this.dom.memeCountDisplay) {
      this.dom.memeCountDisplay.textContent = `Meme: ${this.memesList.length} sẵn sàng`;
    }
  }

  // --- AUDIO SYNTHESIZER ---
  initAudioEngine() {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      this.audioCtx = new AudioCtxClass();
    }
  }

  playKeyChime() {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    const notes = [440, 493.88, 523.25, 587.33, 659.25, 783.99, 880];
    const f = notes[this.typedLetters.length % notes.length];
    osc.frequency.setValueAtTime(f, this.audioCtx.currentTime);

    const vol = parseFloat(this.dom.volSlider.value) || 0.7;
    gain.gain.setValueAtTime(0.22 * vol, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.12);
  }

  playErrorBuzz() {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, this.audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(80, this.audioCtx.currentTime + 0.14);

    const vol = parseFloat(this.dom.volSlider.value) || 0.7;
    gain.gain.setValueAtTime(0.28 * vol, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.14);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.14);
  }

  playFanfare() {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const now = this.audioCtx.currentTime;
    const vol = parseFloat(this.dom.volSlider.value) || 0.7;
    const chord = [523.25, 659.25, 783.99, 1046.50];
    chord.forEach((f, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.07);
      gain.gain.setValueAtTime(0.3 * vol, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.35);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.35);
    });
  }

  // --- 3-PHASE CURRICULUM & ROADMAP SWITCHER ---
  switchPhase(phaseKey) {
    this.currentPhase = phaseKey;

    // 1. Cập nhật giao diện Phase Stepper
    const phaseBtns = [
      { key: "phase_1", btn: this.dom.btnPhase1, group: this.dom.phase1ModeGroup },
      { key: "phase_2", btn: this.dom.btnPhase2, group: this.dom.phase2ModeGroup },
      { key: "phase_3", btn: this.dom.btnPhase3, group: this.dom.phase3ModeGroup }
    ];

    phaseBtns.forEach(p => {
      if (p.btn) {
        p.btn.classList.toggle("active", p.key === phaseKey);
        const tag = p.btn.querySelector(".phase-tag-status");
        if (tag) {
          if (p.key === phaseKey) {
            tag.textContent = "🎯 ĐANG HỌC";
            tag.classList.remove("phase-locked");
          } else {
            tag.textContent = p.key === "phase_1" ? "CĂN BẢN" : (p.key === "phase_2" ? "BỨT PHÁ" : "LÀM CHỦ");
            tag.classList.add("phase-locked");
          }
        }
      }
      if (p.group) {
        p.group.classList.toggle("hidden", p.key !== phaseKey);
      }
    });

    // 2. Chọn sub-mode mặc định cho Phase tương ứng
    if (phaseKey === "phase_1") {
      this.switchMode("vocab");
    } else if (phaseKey === "phase_2") {
      this.switchMode("collocation");
    } else if (phaseKey === "phase_3") {
      this.switchMode("dictation");
    }
  }

  switchVocabCategory(catKey) {
    this.currentVocabCategory = catKey;
    const catBtns = [
      { key: "irregular_verbs", el: this.dom.btnVocabIrr },
      { key: "daily_life", el: this.dom.btnVocabDaily },
      { key: "emotions", el: this.dom.btnVocabEmotions },
      { key: "tech_ai", el: this.dom.btnVocabTech }
    ];
    catBtns.forEach(c => {
      if (c.el) c.el.classList.toggle("active", c.key === catKey);
    });

    if (this.dom.itSubFilterBar) {
      this.dom.itSubFilterBar.classList.toggle("hidden", catKey !== "tech_ai");
    }

    this.updateMilestoneHeader();
    this.loadPoolForModeAndBand();
    this.loadCurrentQuestion();
  }

  switchMode(newMode) {
    this.isSrsPractice = false;
    this.currentMode = newMode;

    // 1. Cập nhật active class trên thanh Mode Tabs
    const modeTabs = [
      { id: "vocab", el: this.dom.tabVocabMode },
      { id: "tenses", el: this.dom.tabTensesMode },
      { id: "collocation", el: this.dom.tabCollocationMode },
      { id: "sentence_upgrade", el: this.dom.tabSentenceUpgradeMode },
      { id: "dictation", el: this.dom.tabDictationSpeedMode },
      { id: "reading", el: this.dom.tabReadingEvidenceMode },
      { id: "mistake_vault", el: this.dom.tabMistakeVaultMode }
    ];
    modeTabs.forEach(t => {
      if (t.el) {
        if (t.id === newMode) t.el.classList.add("active");
        else t.el.classList.remove("active");
      }
    });

    // Nếu chọn Sổ tay lỗi sai, mở modal xem danh sách và thống kê
    if (newMode === "mistake_vault") {
      this.openMistakeVaultModal();
      return;
    }

    // 2. Chuyển đổi hiển thị Card tương tác theo Module
    if (this.dom.vocabCard) this.dom.vocabCard.classList.toggle("hidden", newMode !== "vocab");
    if (this.dom.grammarTensesCard) this.dom.grammarTensesCard.classList.toggle("hidden", newMode !== "tenses");
    if (this.dom.collocationCard) this.dom.collocationCard.classList.toggle("hidden", newMode !== "collocation");
    if (this.dom.sentenceUpgradeCard) this.dom.sentenceUpgradeCard.classList.toggle("hidden", newMode !== "sentence_upgrade");
    if (this.dom.dictationSpeedCard) this.dom.dictationSpeedCard.classList.toggle("hidden", newMode !== "dictation");
    if (this.dom.grammarStoryCard) this.dom.grammarStoryCard.classList.toggle("hidden", newMode !== "reading");
    if (this.dom.wordHintCard) this.dom.wordHintCard.classList.add("hidden");

    // 3. Hiển thị bộ lọc tương ứng (Vocab categories vs Band levels)
    if (this.dom.vocabFilterGroup) {
      this.dom.vocabFilterGroup.classList.toggle("hidden", newMode !== "vocab");
    }
    if (this.dom.itSubFilterBar) {
      this.dom.itSubFilterBar.classList.toggle("hidden", newMode !== "vocab" || this.currentVocabCategory !== "tech_ai");
    }
    if (this.dom.bandFilterGroup) {
      this.dom.bandFilterGroup.classList.toggle("hidden", newMode === "vocab");
    }

    // 4. Khung Passage Viewer (Cột trái): Chỉ mở to ở chế độ Reading; các chế độ khác căn giữa gọn gàng
    if (this.dom.mainArena) {
      if (newMode === "reading") {
        this.dom.mainArena.classList.remove("single-column");
      } else {
        this.dom.mainArena.classList.add("single-column");
      }
    }
    if (this.dom.passageViewerPane) {
      if (newMode === "reading") {
        this.dom.passageViewerPane.classList.remove("collapsed");
        this.renderPassageViewer();
      } else {
        this.dom.passageViewerPane.classList.add("collapsed");
      }
    }

    this.updateMilestoneHeader();
    this.loadPoolForModeAndBand();
    this.loadCurrentQuestion();
  }

  switchBand(newBandKey) {
    this.isSrsPractice = false;
    this.currentBand = newBandKey;

    // Đồng bộ mã bài đọc tương ứng
    if (newBandKey === "band_4_5") this.currentPassageKey = "passage_1";
    else if (newBandKey === "band_5_6") this.currentPassageKey = "passage_2";
    else if (newBandKey === "band_6_7") this.currentPassageKey = "passage_3";
    else if (newBandKey === "passage_4") this.currentPassageKey = "passage_4";
    else if (newBandKey === "band_custom") this.currentPassageKey = "passage_custom";

    // Cập nhật giao diện nút Band
    const bandButtons = [this.dom.btnBand45, this.dom.btnBand56, this.dom.btnBand67, this.dom.btnBandCustom];
    bandButtons.forEach(btn => {
      if (btn) {
        if (btn.dataset.band === newBandKey || btn.id === `btn${newBandKey}`) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    });

    this.updateMilestoneHeader();
    if (this.currentMode === "reading") {
      this.renderPassageViewer();
    }
    this.loadPoolForModeAndBand();
    this.loadCurrentQuestion();
  }

  // Alias
  switchPassage(newPassageKey) {
    const bandMap = {
      "passage_1": "band_4_5",
      "passage_2": "band_5_6",
      "passage_3": "band_6_7",
      "passage_4": "band_6_7",
      "passage_custom": "band_custom"
    };
    this.switchBand(bandMap[newPassageKey] || newPassageKey);
  }

  updateMilestoneHeader() {
    if (!this.dom.currentMilestoneDesc) return;

    if (this.currentMode === "vocab") {
      const itSubNames = {
        "all": "GIAI ĐOẠN 1 • 💻 100 Từ Vựng Chuyên Ngành IT & Kỹ Thuật (Toàn Bộ 100 Từ)",
        "dev": "GIAI ĐOẠN 1 • 💻 IT Nhóm 1: Lập Trình & Thuật Toán Cốt Lõi (25 Từ)",
        "cloud": "GIAI ĐOẠN 1 • ☁️ IT Nhóm 2: Hạ Tầng, Cloud & DevOps (25 Từ)",
        "data": "GIAI ĐOẠN 1 • 🗄️ IT Nhóm 3: Database & Kiến Trúc Dữ Liệu (25 Từ)",
        "ai_sec": "GIAI ĐOẠN 1 • 🛡️ IT Nhóm 4: Bảo Mật, Web & Trí Tuệ Nhân Tạo (25 Từ)"
      };
      const catNames = {
        "irregular_verbs": "GIAI ĐOẠN 1 • ⚡ Động Từ Bất Quy Tắc Cốt Lõi (V1 ➔ V2 ➔ V3)",
        "daily_life": "GIAI ĐOẠN 1 • 💬 Từ Vựng Đời Sống & Giao Tiếp Căn Bản (Band 4.0 - 5.0)",
        "emotions": "GIAI ĐOẠN 1 • 💖 Cảm Xúc & Tính Từ Miêu Tả Cốt Lõi",
        "tech_ai": itSubNames[this.currentItSubCategory] || "GIAI ĐOẠN 1 • 💻 100 Từ Vựng Chuyên Ngành IT & Phần Mềm"
      };
      this.dom.currentMilestoneDesc.textContent = catNames[this.currentVocabCategory] || "Giai đoạn 1: Nền tảng từ vựng thiết yếu";
      if (this.dom.roadmapBadgeLabel) {
        this.dom.roadmapBadgeLabel.textContent = this.currentVocabCategory === "tech_ai" ? "💻 100 TỪ VỰNG IT THỰC CHIẾN" : "📖 1.1. HỌC TỪ MỚI CỐT LÕI";
      }
      return;
    }

    if (this.currentMode === "tenses") {
      const tenseBandNames = {
        "band_4_5": "GIAI ĐOẠN 1 • ⚡ 6 Thì Cấp 1 (Hiện tại đơn, Quá khứ đơn, Tương lai)",
        "band_5_6": "GIAI ĐOẠN 1 • 🚀 6 Thì Cấp 2 (Hiện tại hoàn thành, Quá khứ tiếp diễn chen ngang)",
        "band_6_7": "GIAI ĐOẠN 1 • 💎 6 Thì Cấp 3 (Bẫy mệnh đề thời gian, Động từ trạng thái)",
        "band_custom": `BỘ ĐỀ RIÊNG / AI • ${this.customDeckName}`
      };
      this.dom.currentMilestoneDesc.textContent = tenseBandNames[this.currentBand] || "Giai đoạn 1: Bài tập 6 thì kinh điển";
      if (this.dom.roadmapBadgeLabel) {
        this.dom.roadmapBadgeLabel.textContent = "⚡ 1.2. BÀI TẬP 6 THÌ GÀI BẪY";
      }
      return;
    }

    const bandNames = {
      "band_4_5": "CẤP ĐỘ 1 (Band 4.0 - 5.0) • Nền Tảng Cốt Lõi & Cụm Từ Thường Nhật",
      "band_5_6": "CẤP ĐỘ 2 (Band 5.0 - 6.5) • Bứt PhA Học Thuật (AWL) & Nâng Cấp Câu Phức",
      "band_6_7": "CẤP ĐỘ 3 (Band 6.5 - 7.0+) • Mastery C1 Chuyên Sâu, Đảo Ngữ & Paraphrase",
      "band_custom": `BỘ ĐỀ RIÊNG / AI • ${this.customDeckName} (${this.customDeck.length} mục)`
    };
    this.dom.currentMilestoneDesc.textContent = bandNames[this.currentBand] || "Lộ trình bứt phá 4.0 ➔ 7.0";
    if (this.dom.roadmapBadgeLabel) {
      const modeNames = {
        "collocation": "🎯 2.1. COLLOCATIONS",
        "sentence_upgrade": "⚡ 2.2. NÂNG CẤP CÂU",
        "dictation": "🎧 3.1. DICTATION SPEED",
        "reading": "📖 3.2. READING EVIDENCE",
        "mistake_vault": "⭐ SỔ TAY LỖI SAI"
      };
      this.dom.roadmapBadgeLabel.textContent = modeNames[this.currentMode] || "🎯 LỘ TRÌNH 4.0 ➔ 7.0";
    }
  }

  loadPoolForModeAndBand() {
    if (this.isSrsPractice) {
      this.activePool = [...this.mistakes];
      this.activeIdx = 0;
      return;
    }

    if (this.currentBand === "band_custom") {
      if (this.customDeck.length === 0) {
        this.activePool = [];
        this.openCustomDeckModal();
      } else {
        this.activePool = [...this.customDeck];
      }
      this.activeIdx = 0;
      return;
    }

    if (this.currentMode === "vocab") {
      const vocabData = window.VOCAB_FOUNDATION_DATA || {};
      let pool = vocabData[this.currentVocabCategory] || vocabData["irregular_verbs"] || [];
      if (this.currentVocabCategory === "tech_ai" && this.currentItSubCategory && this.currentItSubCategory !== "all") {
        pool = pool.filter(w => w.subCategoryKey === this.currentItSubCategory);
      }
      this.activePool = [...pool];
    } else if (this.currentMode === "tenses") {
      const gMap = window.ROADMAP_GRAMMAR || {};
      this.activePool = [...(gMap[this.currentBand] || gMap["band_4_5"] || [])];
    } else if (this.currentMode === "collocation") {
      const colData = window.COLLOCATION_CHUNKS_DATA || {};
      this.activePool = [...(colData[this.currentBand] || colData["band_4_5"] || [])];
    } else if (this.currentMode === "sentence_upgrade") {
      const upData = window.SENTENCE_UPGRADE_DATA || {};
      this.activePool = [...(upData[this.currentBand] || upData["band_4_5"] || [])];
    } else if (this.currentMode === "dictation") {
      const dictData = window.DICTATION_DATA || {};
      this.activePool = [...(dictData[this.currentBand] || dictData["band_4_5"] || [])];
    } else if (this.currentMode === "reading") {
      this.loadPassageChallenges();
      this.activePool = [...this.readingPool];
    } else {
      this.activePool = [];
    }

    this.activeIdx = 0;
  }

  loadPassageChallenges() {
    if (this.currentPassageKey === "passage_custom") {
      this.readingPool = [...this.customDeck];
      return;
    }

    const passageData = window.READING_PASSAGES_DATA?.[this.currentPassageKey];
    if (passageData && Array.isArray(passageData.questions)) {
      this.readingPool = [...passageData.questions];
    } else {
      const gMap = window.ROADMAP_GRAMMAR || {};
      this.readingPool = [...(gMap[this.currentBand] || [])];
    }
  }

  renderPassageViewer() {
    if (!this.dom.passageViewerPane) return;
    const passage = window.READING_PASSAGES_DATA?.[this.currentPassageKey];
    if (!passage) {
      if (this.currentPassageKey === "passage_custom") {
        if (this.dom.pvCodeBadge) this.dom.pvCodeBadge.textContent = "BỘ ĐỀ RIÊNG";
        if (this.dom.pvTopicTag) this.dom.pvTopicTag.textContent = "TỰ NHẬP / AI";
        if (this.dom.pvTitle) this.dom.pvTitle.textContent = this.customDeckName;
        if (this.dom.pvSubtitle) this.dom.pvSubtitle.textContent = `Bộ câu hỏi đọc hiểu do bạn tạo (${this.customDeck.length} câu)`;
        if (this.dom.passageBodyScroll) {
          this.dom.passageBodyScroll.innerHTML = `<div class="p-block"><span class="p-letter">[A]</span> Dưới đây là các câu hỏi luyện tập từ bộ đề riêng của bạn. Hãy đọc kỹ câu hỏi và gõ đúng từ khóa!</div>`;
        }
      }
      return;
    }

    if (this.dom.pvCodeBadge) this.dom.pvCodeBadge.textContent = passage.code;
    if (this.dom.pvTopicTag) this.dom.pvTopicTag.textContent = passage.topic;
    if (this.dom.pvTitle) this.dom.pvTitle.textContent = passage.title;
    if (this.dom.pvSubtitle) this.dom.pvSubtitle.textContent = passage.subtitle;

    if (this.dom.passageBodyScroll && Array.isArray(passage.paragraphs)) {
      this.dom.passageBodyScroll.innerHTML = passage.paragraphs.map(p => `
        <div class="p-block" data-tag="${p.tag}" id="pBlock_${p.tag}">
          <span class="p-letter">[${p.tag}]</span> ${p.text}
        </div>
      `).join("");
    }
  }

  highlightEvidenceInPassage() {
    if (!this.currentChallenge || !this.currentChallenge.evidence) return;
    const ev = this.currentChallenge.evidence;
    const tagMatch = ev.paragraph ? ev.paragraph.match(/Paragraph\s*([A-Za-z])/i) : null;
    const tag = tagMatch ? tagMatch[1].toUpperCase() : "A";

    const allBlocks = document.querySelectorAll(".p-block");
    allBlocks.forEach(b => b.classList.remove("evidence-highlight"));

    const targetBlock = document.getElementById(`pBlock_${tag}`);
    if (targetBlock) {
      targetBlock.classList.add("evidence-highlight");
      targetBlock.scrollIntoView({ behavior: "smooth", block: "nearest" });

      if (this.dom.passageViewerPane && this.dom.passageViewerPane.classList.contains("collapsed")) {
        this.dom.passageViewerPane.classList.remove("collapsed");
      }
    }
  }

  togglePassageView() {
    if (!this.dom.passageViewerPane) return;
    if (this.dom.passageViewerPane.classList.contains("expanded")) {
      this.dom.passageViewerPane.classList.remove("expanded");
      this.dom.passageViewerPane.classList.add("collapsed");
    } else if (this.dom.passageViewerPane.classList.contains("collapsed")) {
      this.dom.passageViewerPane.classList.remove("collapsed");
    } else {
      this.dom.passageViewerPane.classList.add("expanded");
    }
  }

  // --- QUESTION LOADER CHO CẢ 5 MODULES ---
  loadCurrentQuestion() {
    this.isMemeActive = false;
    this.typedLetters = [];
    if (this.dom.memeModal) this.dom.memeModal.classList.add("hidden");
    if (this.dom.explanationModal) this.dom.explanationModal.classList.add("hidden");

    // Xóa highlight cũ trong bài đọc
    document.querySelectorAll(".p-block").forEach(b => b.classList.remove("evidence-highlight"));

    if (this.activePool.length === 0) {
      if (this.isSrsPractice) {
        this.dom.statusMessage.innerHTML = `🎉 Tuyệt vời! Bạn không còn lỗi sai nào trong Sổ Tay Lỗi Sai!`;
      } else if (this.currentBand === "band_custom") {
        this.dom.statusMessage.innerHTML = `Chưa có dữ liệu trong bộ đề riêng. Hãy bấm <strong>"NHẬP BỘ ĐỀ"</strong> để thêm từ!`;
      } else {
        this.dom.statusMessage.innerHTML = `Chưa có dữ liệu cho phần này. Hãy chọn một cấp độ khác phía trên!`;
      }
      this.dom.wordSlotsContainer.innerHTML = "";
      return;
    }

    if (this.activeIdx >= this.activePool.length) {
      this.activeIdx = 0;
    }

    const item = this.activePool[this.activeIdx];
    this.currentChallenge = item;
    this.targetWord = (item.targetWord || item.word || "").toUpperCase().replace(/[^A-Z]/g, "");

    const slotPreview = `<span class="blank-indicator">[ ________ ]</span>`;

    // Helper loại bỏ rò rỉ đáp án trực tiếp trong câu ngữ cảnh
    const cleanContext = (text) => {
      if (!text) return `Điền từ thích hợp: ________`;
      let cleaned = text;
      if (this.targetWord) {
        const targetRegex = new RegExp(`\\(\\s*${this.targetWord}\\s*\\)\\s*`, "gi");
        cleaned = cleaned.replace(targetRegex, "");
      }
      if (item.word && item.word.toUpperCase() !== (item.verbPrompt || '').toUpperCase()) {
        const wordRegex = new RegExp(`\\(\\s*${item.word}\\s*\\)\\s*`, "gi");
        cleaned = cleaned.replace(wordRegex, "");
      }
      return cleaned;
    };

    // 0. Module 1.1: Học Từ Mới Cốt Lõi
    if (this.currentMode === "vocab") {
      if (this.dom.vocabBadge) this.dom.vocabBadge.textContent = item.categoryLabel || "📖 TỪ VỰNG CỐT LÕI (BAND 4.0 - 5.0)";
      if (this.dom.vocabTopicTag) this.dom.vocabTopicTag.textContent = item.categoryLabel || "Từ Vựng Mới";
      if (this.dom.vocabIPA) this.dom.vocabIPA.textContent = item.ipa || "/.../";
      if (this.dom.vocabTargetWord) {
        this.dom.vocabTargetWord.textContent = "";
        this.dom.vocabTargetWord.style.display = "none";
      }
      if (this.dom.vocabMeaning) this.dom.vocabMeaning.textContent = item.meaning || "Từ vựng tiếng Anh";

      const rawCtx = item.contextSentence || item.example || `Luyện gõ từ vựng: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.vocabContextText) {
        this.dom.vocabContextText.innerHTML = ctx.includes("________")
          ? ctx.replace("________", slotPreview)
          : `${ctx} ➔ Gõ từ: ${slotPreview}`;
      }
      if (this.dom.vocabTipText) {
        let tip = item.spellingTip || item.goldenTip?.memoryHack || "Gõ nhịp nhàng từng chữ cái để nhớ từ thật sâu!";
        if (this.targetWord.length >= 3) {
          const spelledWord = this.targetWord.split("").join("-");
          tip = tip.replace(new RegExp(spelledWord, "gi"), "••••••••");
          tip = tip.replace(new RegExp(`\\b${this.targetWord}\\b`, "gi"), "••••••••");
        }
        this.dom.vocabTipText.textContent = tip;
      }

    // 0.5. Module 1.2: Bài Tập 6 Thì Gài Bẫy
    } else if (this.currentMode === "tenses") {
      if (this.dom.tensesBadge) this.dom.tensesBadge.textContent = item.bandLabel || "⚡ BÀI TẬP 6 THÌ KINH ĐIỂN";
      if (this.dom.tensesTopicTag) this.dom.tensesTopicTag.textContent = item.topic || "6 Thì Căn Bản";
      if (this.dom.tensesVerbTag) {
        this.dom.tensesVerbTag.innerHTML = `ĐỘNG TỪ CẦN CHIA: <strong>${(item.verbPrompt || '').toUpperCase()}</strong>`;
      }
      if (this.dom.tensesStoryTitle) {
        this.dom.tensesStoryTitle.textContent = item.storyTitle || "Câu Chuyện Gài Bẫy 6 Thì";
      }

      const rawCtx = item.contextSentence || item.example || `Chia động từ: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.tensesContextText) {
        this.dom.tensesContextText.innerHTML = ctx.includes("________")
          ? ctx.replace("________", slotPreview)
          : `${ctx} ➔ Điền: ${slotPreview}`;
      }
      if (this.dom.tensesHintText) {
        this.dom.tensesHintText.textContent = item.hintText || item.goldenTip?.rule || "Nhận diện dấu hiệu trạng ngữ thời gian!";
      }

    // 1. Module Collocation
    } else if (this.currentMode === "collocation") {
      if (this.dom.collocBadge) this.dom.collocBadge.textContent = item.bandLabel || "🎯 COLLOCATION CHUNK";
      if (this.dom.collocTopicTag) this.dom.collocTopicTag.textContent = item.topic || "Topic";
      if (this.dom.collocIPA) this.dom.collocIPA.textContent = item.ipa || "/.../";
      if (this.dom.collocChunkTitle) {
        const maskedChunk = (item.chunk || item.targetWord || "").replace(
          new RegExp(`\\b${this.targetWord}\\b`, "gi"),
          "________"
        );
        this.dom.collocChunkTitle.textContent = maskedChunk;
      }
      if (this.dom.collocMeaning) this.dom.collocMeaning.textContent = item.meaning || "Cụm từ cố định";
      
      const rawCtx = item.contextSentence || item.example || `Luyện gõ cụm từ: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.collocContextText) {
        this.dom.collocContextText.innerHTML = ctx.includes("________") 
          ? ctx.replace("________", slotPreview) 
          : `${ctx} ➔ Gõ từ: ${slotPreview}`;
      }
      if (this.dom.collocTipText) {
        this.dom.collocTipText.textContent = item.collocationTip || item.goldenTip?.rule || "Nắm chắc sự kết hợp tự nhiên của người bản xứ!";
      }

    // 2. Module Sentence Upgrade
    } else if (this.currentMode === "sentence_upgrade") {
      if (this.dom.upgradePatternBadge) this.dom.upgradePatternBadge.textContent = item.pattern || "Cấu Trúc Ngữ Pháp 7.0";
      if (this.dom.upgradeBasicText) this.dom.upgradeBasicText.textContent = item.basic40 || "Câu đơn cơ bản";
      
      const rawCtx = item.contextSentence || item.advanced70 || `Nâng cấp thành: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.upgradeAdvancedText) {
        this.dom.upgradeAdvancedText.innerHTML = ctx.includes("________")
          ? ctx.replace("________", slotPreview)
          : `${ctx} ➔ Điền: ${slotPreview}`;
      }
      if (this.dom.upgradeWhyText) {
        this.dom.upgradeWhyText.textContent = item.whyUpgrade || item.goldenTip?.rule || "Biến đổi câu giúp tăng điểm Grammatical Range & Accuracy!";
      }

    // 3. Module Dictation Speed
    } else if (this.currentMode === "dictation") {
      if (this.dom.dictTopicTag) this.dom.dictTopicTag.textContent = item.topic || "Luyện Nghe Bóc Tách Âm";
      
      const rawCtx = item.contextSentence || item.audioText || `Nghe và gõ: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.dictContextText) {
        this.dom.dictContextText.innerHTML = ctx.includes("________")
          ? ctx.replace("________", slotPreview)
          : `${ctx} ➔ Gõ từ: ${slotPreview}`;
      }
      if (this.dom.dictMeaningText) this.dom.dictMeaningText.textContent = item.meaning || "";
      if (this.dom.dictTrapText) {
        let trap = item.dictationTrap || item.audioHint || "Chú ý các âm nối và âm đuôi!";
        trap = trap.replace(new RegExp(`\\b${this.targetWord}\\b`, "gi"), "từ cần nghe");
        this.dom.dictTrapText.textContent = trap;
      }

      // Tự động phát âm câu theo tốc độ đã chọn
      setTimeout(() => {
        this.speakText(item.audioText || item.contextSentence || this.targetWord, this.speechRate);
      }, 350);

    // 4. Module Reading & Evidence
    } else if (this.currentMode === "reading") {
      if (this.dom.grammarStoryTag) {
        this.dom.grammarStoryTag.textContent = item.taskBadge || item.taskType || `${(item.topic || 'BÀI ĐỌC').toUpperCase()}`;
      }
      if (this.dom.grammarVerbPrompt) {
        this.dom.grammarVerbPrompt.innerHTML = `DẠNG BÀI: <strong>TÌM 1 TỪ TRONG BÀI ĐỌC</strong>`;
      }

      const rawCtx = item.questionPrompt || item.contextSentence || item.example || `Điền từ thích hợp: ________`;
      const ctx = cleanContext(rawCtx);
      if (this.dom.grammarContextText) {
        this.dom.grammarContextText.innerHTML = ctx.includes("________")
          ? ctx.replace("________", slotPreview)
          : `${ctx} ➔ Điền: ${slotPreview}`;
      }
      if (this.dom.grammarHintNote) {
        const hint = item.hintText || (item.evidence ? `Manh mối tại ${item.evidence.paragraph}: Quét từ khóa liên quan` : item.meaning || 'Lắng nghe và gõ phím');
        this.dom.grammarHintNote.textContent = `💡 ${hint}`;
      }
    }

    // Hiển thị Dictation UI nếu đang bật gõ bịt mắt
    if (this.isDictationMode) {
      if (this.dom.dictationOverlay) this.dom.dictationOverlay.classList.remove("hidden");
      setTimeout(() => this.speakCurrentItem(), 250);
    } else {
      if (this.dom.dictationOverlay) this.dom.dictationOverlay.classList.add("hidden");
    }

    this.renderSlots();
    this.updateStatusMessage();
    this.updateProgressUI(this.activeIdx + 1, this.activePool.length);
  }

  advanceNextQuestion() {
    this.activeIdx++;
    if (this.activeIdx >= this.activePool.length) {
      this.activeIdx = 0;
    }
    if (this.dom.explanationModal) {
      this.dom.explanationModal.classList.add("hidden");
    }
    this.loadCurrentQuestion();
  }

  updateProgressUI(current, total) {
    if (this.dom.bandProgressText) {
      this.dom.bandProgressText.textContent = `${current} / ${total} bài`;
    }
    if (this.dom.roadmapProgressBar) {
      const pct = total > 0 ? Math.round((current / total) * 100) : 0;
      this.dom.roadmapProgressBar.style.width = `${pct}%`;
    }
  }

  renderSlots() {
    this.dom.wordSlotsContainer.innerHTML = "";
    for (let i = 0; i < this.targetWord.length; i++) {
      const slot = document.createElement("div");
      slot.className = "slot mystery-hidden";
      slot.dataset.index = i;

      const charSpan = document.createElement("span");
      charSpan.className = "slot-char";
      charSpan.textContent = "_";

      const subSpan = document.createElement("span");
      subSpan.className = "slot-sub";
      subSpan.textContent = `[${i + 1}]`;

      if (i === 0) {
        slot.classList.add("active-typing");
      }

      slot.appendChild(charSpan);
      slot.appendChild(subSpan);
      this.dom.wordSlotsContainer.appendChild(slot);
    }
  }

  updateStatusMessage() {
    const nextIdx = this.typedLetters.length;
    if (nextIdx < this.targetWord.length) {
      const remaining = this.targetWord.length - nextIdx;
      if (this.isDictationMode) {
        this.dom.statusMessage.innerHTML = `🎧 <strong>Gõ Bịt Mắt:</strong> Lắng nghe giọng đọc và gõ tiếp <strong>${remaining}</strong> chữ cái! (Nhấn <strong>TAB</strong> để nghe lại)`;
      } else {
        if (nextIdx === 0) {
          this.dom.statusMessage.innerHTML = `Từ cần điền có <strong>${this.targetWord.length}</strong> chữ cái. Hãy gõ chữ cái đầu tiên!`;
        } else {
          this.dom.statusMessage.innerHTML = `Đã gõ đúng <strong>${nextIdx}/${this.targetWord.length}</strong> chữ. Còn <strong>${remaining}</strong> chữ cái nữa!`;
        }
      }
    }
  }

  // --- KEYBOARD HANDLING & MISTAKE RECORDER ---
  handleLetterPress(pressedLetter) {
    const nextIdx = this.typedLetters.length;
    if (nextIdx >= this.targetWord.length) return;

    const expectedLetter = this.targetWord[nextIdx];
    const targetSlot = this.dom.wordSlotsContainer.children[nextIdx];

    if (pressedLetter === expectedLetter) {
      this.playKeyChime();
      this.typedLetters.push(pressedLetter);

      targetSlot.classList.remove("mystery-hidden", "active-typing");
      targetSlot.classList.add("revealed-correct");
      targetSlot.querySelector(".slot-char").textContent = pressedLetter;

      if (this.typedLetters.length === this.targetWord.length) {
        this.onChallengeCompleted();
      } else {
        const nextSlot = this.dom.wordSlotsContainer.children[this.typedLetters.length];
        if (nextSlot) nextSlot.classList.add("active-typing");
        this.updateStatusMessage();
      }
    } else {
      this.playErrorBuzz();
      // Tự động lưu vào Sổ Tay Lỗi Sai (Mistake Vault) khi gõ sai chữ cái
      this.recordMistake(this.currentChallenge);

      if (targetSlot) {
        targetSlot.classList.add("shake-error");
        setTimeout(() => targetSlot.classList.remove("shake-error"), 250);
      }
    }
  }

  revealNextHintLetter() {
    const nextIdx = this.typedLetters.length;
    if (nextIdx < this.targetWord.length) {
      const letterToReveal = this.targetWord[nextIdx];
      // Mở gợi ý cũng được đánh dấu là cần ôn tập lại
      this.recordMistake(this.currentChallenge);
      this.handleLetterPress(letterToReveal);
    }
  }

  // --- CELEBRATION & MEME TRIGGER ---
  onChallengeCompleted() {
    this.isMemeActive = true;
    this.playFanfare();

    this.combo++;
    const points = 500 + this.combo * 200;
    this.score += points;
    this.dom.scoreDisplay.textContent = String(this.score).padStart(6, '0');
    this.dom.comboPill.textContent = `COMBO: ${this.combo} 🔥`;

    const meme = this.memesList[Math.floor(Math.random() * this.memesList.length)];
    this.dom.memeImage.src = meme.url;
    this.dom.memeCaption.textContent = meme.caption;
    this.dom.memeComboText.textContent = `+${points} ĐIỂM!`;
    this.dom.recapWord.textContent = this.targetWord;

    const meaning = this.currentChallenge.meaning 
      || this.currentChallenge.chunk 
      || this.currentChallenge.goldenTip?.rule 
      || "Hoàn thành chuẩn xác";
    this.dom.recapMeaning.textContent = meaning;

    this.autoSaveTipToNotebook(this.currentChallenge);

    // Phát âm giọng đọc ăn mừng từ vừa gõ
    this.speakText(this.targetWord, 0.9);

    this.dom.memeModal.classList.remove("hidden");

    const bar = this.dom.dismissBar;
    bar.style.transition = 'none';
    bar.style.width = '100%';
    setTimeout(() => {
      bar.style.transition = `width ${this.autoDismissDuration}ms linear`;
      bar.style.width = '0%';
    }, 20);

    this.autoDismissTimer = setTimeout(() => {
      this.dismissMeme();
    }, this.autoDismissDuration);
  }

  dismissMeme() {
    if (!this.isMemeActive) return;
    this.isMemeActive = false;
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
      this.autoDismissTimer = null;
    }
    this.dom.memeModal.classList.add("hidden");
    this.showGoldenTipModal();
  }

  // --- MODAL GIẢI THÍCH CHI TIẾT & MẸO VÀNG CHO CẢ 5 MODULES ---
  showGoldenTipModal() {
    const item = this.currentChallenge;
    if (!item) {
      this.advanceNextQuestion();
      return;
    }

    const bandLabels = {
      "band_4_5": "BAND 4.0 - 5.0",
      "band_5_6": "BAND 5.0 - 6.5",
      "band_6_7": "BAND 6.5 - 7.0+",
      "band_custom": "BỘ ĐỀ RIÊNG"
    };
    this.dom.explBandBadge.textContent = bandLabels[this.currentBand] || "LỘ TRÌNH 4.0 ➔ 7.0";
    this.dom.explAnswerWord.textContent = this.targetWord;

    // 0. Module 1.1: Vocab
    if (this.currentMode === "vocab") {
      this.dom.explStoryTitle.textContent = `📖 Từ Vựng Cốt Lõi: ${item.word || item.targetWord} (${item.ipa || ''})`;
      this.dom.explAnswerContext.textContent = `Nghĩa: ${item.meaning || ''}`;
      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "NGỮ CẢNH & CÂU MINH HỌA:";
      this.dom.explRuleVal.innerHTML = item.contextSentence ? item.contextSentence.replace("________", `<strong>${this.targetWord}</strong>`) : (item.example || "");
      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "VÍ DỤ GIAO TIẾP THỰC TẾ:";
      this.dom.explExampleVal.textContent = item.example || item.contextSentence || "";
      this.dom.explTrapVal.textContent = item.spellingTip || item.goldenTip?.theTrap || "Cẩn thận các ký tự dễ nhầm hoặc âm đuôi!";
      this.dom.explHackVal.textContent = item.goldenTip?.memoryHack || item.spellingTip || "💡 Gõ nhịp nhàng từng chữ cái để khắc sâu trí nhớ!";

    // 0.5. Module 1.2: 6 Tenses
    } else if (this.currentMode === "tenses") {
      this.dom.explStoryTitle.textContent = `⚡ 6 Thì Kinh Điển: ${item.topic || item.storyTitle || 'Chia Động Từ'}`;
      this.dom.explAnswerContext.textContent = `Động từ chia đúng: [ ${this.targetWord} ]`;
      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "QUY TẮC NGỮ PHÁP (TENSES RULE):";
      this.dom.explRuleVal.innerHTML = item.goldenTip?.rule || item.hintText || "Quy tắc 6 thì cốt lõi.";
      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "CÂU CHUYỆN HOÀN CHỈNH:";
      this.dom.explExampleVal.textContent = item.contextSentence ? item.contextSentence.replace("________", this.targetWord) : "";
      this.dom.explTrapVal.textContent = item.goldenTip?.theTrap || "Cạm bẫy hay gặp trong đề thi.";
      this.dom.explHackVal.textContent = item.goldenTip?.memoryHack || "💡 Thần chú nhận biết dấu hiệu thì!";

    // 1. Module Collocation
    } else if (this.currentMode === "collocation") {
      this.dom.explStoryTitle.textContent = `🎯 Collocation: ${item.chunk || item.targetWord}`;
      this.dom.explAnswerContext.textContent = item.chunk || "";
      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "QUY TẮC KẾT HỢP TỰ NHIÊN (COLLOCATION RULE):";
      this.dom.explRuleVal.innerHTML = item.goldenTip?.rule || item.collocationTip || "Cách dùng tự nhiên của người bản ngữ.";
      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "NGỮ CẢNH & VÍ DỤ MINH HỌA:";
      this.dom.explExampleVal.textContent = item.goldenTip?.example || item.contextSentence || "";
      this.dom.explTrapVal.textContent = item.goldenTip?.theTrap || item.collocationTip || "Người học hay dịch 'word-by-word' làm mất tính tự nhiên.";
      this.dom.explHackVal.textContent = item.goldenTip?.memoryHack || "💡 Học từ theo cụm thay vì học từ đơn lẻ!";

    // 2. Module Sentence Upgrade
    } else if (this.currentMode === "sentence_upgrade") {
      this.dom.explStoryTitle.textContent = `⚡ Nâng Cấp Câu: ${item.pattern || "Cấu Trúc Điểm Cao"}`;
      this.dom.explAnswerContext.textContent = item.advanced70 || item.contextSentence || "";
      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "TẠI SAO CÂU 7.0 ĂN ĐIỂM (EVALUATION CRITERIA):";
      this.dom.explRuleVal.innerHTML = item.whyUpgrade || item.goldenTip?.rule || "Tăng tính học thuật và độ phức tạp ngữ pháp.";
      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "ĐỐI CHIẾU CÂU GỐC 4.0 VS NÂNG CẤP 7.0:";
      this.dom.explExampleVal.innerHTML = `❌ <strong>4.0:</strong> ${item.basic40 || ''}<br>✨ <strong>7.0:</strong> ${item.advanced70 || ''}`;
      this.dom.explTrapVal.textContent = item.goldenTip?.theTrap || "Lỗi cấu trúc song hành hoặc sai vị trí trợ động từ trong đảo ngữ.";
      this.dom.explHackVal.textContent = item.goldenTip?.memoryHack || "💡 Danh từ hóa & Mệnh đề phân từ là bí quyết lên Band 7.0!";

    // 3. Module Dictation Speed
    } else if (this.currentMode === "dictation") {
      this.dom.explStoryTitle.textContent = `🎧 Bóc Tách Âm: ${item.topic || "Nghe Chép Chính Tả"}`;
      this.dom.explAnswerContext.textContent = item.audioText || item.contextSentence || "";
      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "QUY TẮC PHÁT ÂM & BẪY ÂM NỐI:";
      this.dom.explRuleVal.innerHTML = item.goldenTip?.rule || item.audioHint || "Chú ý các hiện tượng nuốt âm và nối âm.";
      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "CÂU CHUẨN BẢN XỨ:";
      this.dom.explExampleVal.textContent = item.audioText || item.contextSentence || "";
      this.dom.explTrapVal.textContent = item.dictationTrap || item.goldenTip?.theTrap || "Sót âm đuôi -s/-ed hoặc nuốt mạo từ a/an/the.";
      this.dom.explHackVal.textContent = item.goldenTip?.memoryHack || "💡 Bắt nhịp trọng âm câu để không bỏ sót các từ chức năng!";

    // 4. Module Reading
    } else {
      const passage = window.READING_PASSAGES_DATA?.[this.currentPassageKey];
      const passageTitle = passage ? `${passage.code} • ${passage.topic}` : "BÀI ĐỌC READING";
      this.dom.explBandBadge.textContent = passageTitle;
      this.dom.explStoryTitle.textContent = item.taskBadge || item.taskType || "Phân Tích Dẫn Chứng & Paraphrase";

      const contextStr = item.questionPrompt || item.contextSentence || item.example || "";
      this.dom.explAnswerContext.textContent = contextStr.replace("________", `[ ${this.targetWord} ]`);

      if (this.dom.explRuleLabel) this.dom.explRuleLabel.textContent = "VỊ TRÍ DẪN CHỨNG TRONG BÀI ĐỌC (EVIDENCE):";
      if (item.evidence) {
        this.dom.explRuleVal.innerHTML = `<strong>${item.evidence.paragraph} (${item.evidence.lines}):</strong> <em>"${item.evidence.quote}"</em>`;
      } else {
        this.dom.explRuleVal.textContent = item.goldenTip?.rule || item.meaning || "Từ vựng bài đọc.";
      }

      if (this.dom.explExampleLabel) this.dom.explExampleLabel.textContent = "BẢNG GIẢI MÃ PARAPHRASE (TỪ ĐỀ BÀI ➔ BÀI ĐỌC):";
      if (item.paraphraseMap && item.paraphraseMap.length > 0) {
        this.dom.explExampleVal.innerHTML = `<div class="paraphrase-list">` + item.paraphraseMap.map(m => `
          <div class="paraphrase-chip">
            <span class="pq-word">${m.questionKey}</span> ➔ <span class="pp-word">${m.passageKey}</span>
          </div>
        `).join("") + `</div>`;
      } else {
        this.dom.explExampleVal.textContent = item.example || item.questionPrompt || "";
      }

      this.dom.explTrapVal.textContent = item.readingTrap || item.goldenTip?.theTrap || "Cẩn thận nhầm lẫn giữa False và Not Given.";
      this.dom.explHackVal.textContent = item.strategyTip || item.goldenTip?.memoryHack || "Dự đoán từ loại trước chỗ trống rồi mới scan dẫn chứng!";
    }

    this.dom.btnSaveNotebook.textContent = "⭐ ĐÃ LƯU VÀO SỔ TAY";
    this.dom.explanationModal.classList.remove("hidden");
  }

  // --- MISTAKE VAULT & SRS DAILY REVIEW ---
  loadMistakesFromStorage() {
    try {
      const saved = localStorage.getItem("english_typing_mistakes");
      if (saved) {
        this.mistakes = JSON.parse(saved);
      } else {
        this.mistakes = [];
      }
    } catch (e) {
      this.mistakes = [];
    }
    this.updateVaultCounter();
  }

  saveMistakesToStorage() {
    try {
      localStorage.setItem("english_typing_mistakes", JSON.stringify(this.mistakes));
    } catch (e) {
      console.warn("Không thể lưu mistakes vào localStorage", e);
    }
    this.updateVaultCounter();
  }

  recordMistake(item) {
    if (!item) return;
    const word = (item.targetWord || item.word || "").toUpperCase().replace(/[^A-Z]/g, "");
    if (!word || word.length < 2) return;

    const existing = this.mistakes.find(m => m.word === word);
    if (!existing) {
      this.mistakes.unshift({
        id: `mistake_${Date.now()}_${word}`,
        word: word,
        targetWord: word,
        mode: this.currentMode,
        band: this.currentBand,
        topic: item.topic || "Luyện tập",
        meaning: item.meaning || item.chunk || word,
        contextSentence: item.contextSentence || item.questionPrompt || item.audioText || "",
        trap: item.dictationTrap || item.readingTrap || item.goldenTip?.theTrap || item.whyUpgrade || "Lỗi chính tả hoặc cấu trúc",
        timestamp: Date.now()
      });
      this.saveMistakesToStorage();
    }
  }

  updateVaultCounter() {
    if (this.dom.vaultCount) {
      this.dom.vaultCount.textContent = this.mistakes.length;
    }
    if (this.dom.mvTotalCount) {
      this.dom.mvTotalCount.textContent = this.mistakes.length;
    }
  }

  openMistakeVaultModal() {
    this.renderMistakeVaultList();
    if (this.dom.mistakeVaultModal) {
      this.dom.mistakeVaultModal.classList.remove("hidden");
    }
  }

  renderMistakeVaultList() {
    if (!this.dom.mvListContainer) return;
    this.dom.mvListContainer.innerHTML = "";

    if (this.mistakes.length === 0) {
      this.dom.mvListContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #94a3b8;">
          <div style="font-size: 3rem; margin-bottom: 10px;">🎉</div>
          <div style="font-family: 'Orbitron', monospace; font-size: 1.1rem; color: #10b981; font-weight: 800;">
            SỔ TAY TRỐNG - BẠN CHƯA CÓ LỖI SAI NÀO!
          </div>
          <div style="margin-top: 8px; font-size: 0.88rem;">
            Khi bạn gõ nhầm phím hoặc xem gợi ý, hệ thống sẽ tự động ghi nhớ vào đây để bạn luyện tập lại.
          </div>
        </div>
      `;
      return;
    }

    this.mistakes.forEach((m, idx) => {
      const card = document.createElement("div");
      card.className = "mv-item-card";
      card.innerHTML = `
        <div class="mv-item-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="mv-item-tag">${(m.mode || 'LỖI').toUpperCase()}</span>
            <span class="mv-item-word">${m.word}</span>
          </div>
          <button class="btn-clear-vault" style="padding: 4px 8px; font-size: 0.72rem;" data-idx="${idx}">✕ XÓA</button>
        </div>
        <div class="mv-item-context">
          <strong>Ngữ cảnh:</strong> ${m.contextSentence ? m.contextSentence.replace(m.word, `[ ${m.word} ]`) : m.meaning}
        </div>
        <div class="mv-item-trap">
          ⚠️ <strong>Lưu ý khắc phục:</strong> ${m.trap}
        </div>
      `;

      const btnDel = card.querySelector(".btn-clear-vault");
      if (btnDel) {
        btnDel.addEventListener("click", (e) => {
          e.stopPropagation();
          this.mistakes.splice(idx, 1);
          this.saveMistakesToStorage();
          this.renderMistakeVaultList();
        });
      }

      this.dom.mvListContainer.appendChild(card);
    });
  }

  startSrsPractice() {
    if (this.mistakes.length === 0) {
      alert("Bạn chưa có lỗi sai nào trong Sổ Tay Lỗi Sai!");
      return;
    }

    this.isSrsPractice = true;
    this.activePool = [...this.mistakes];
    this.activeIdx = 0;

    if (this.dom.mistakeVaultModal) {
      this.dom.mistakeVaultModal.classList.add("hidden");
    }

    // Chuyển sang giao diện luyện tập
    const firstMistake = this.mistakes[0];
    this.currentMode = firstMistake.mode || "collocation";
    this.switchMode(this.currentMode);
    this.isSrsPractice = true; // duy trì sau switchMode
    this.activePool = [...this.mistakes];
    this.activeIdx = 0;

    if (this.dom.currentMilestoneDesc) {
      this.dom.currentMilestoneDesc.textContent = `🔥 ÔN TẬP NGẮT QUÃNG (SRS): Đang luyện lại ${this.mistakes.length} câu/từ từng bị sai!`;
    }

    this.loadCurrentQuestion();
  }

  clearMistakeVault() {
    if (this.mistakes.length === 0) return;
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử lỗi sai trong Sổ tay không?")) {
      this.mistakes = [];
      this.saveMistakesToStorage();
      this.renderMistakeVaultList();
    }
  }

  // --- SỔ TAY MẸO VÀNG (NOTEBOOK LOGIC) ---
  loadNotebookFromStorage() {
    try {
      const data = localStorage.getItem("english_typing_roadmap_notebook");
      if (data) {
        this.notebookTips = JSON.parse(data);
      }
    } catch (e) {
      console.warn("Không thể đọc localStorage", e);
      this.notebookTips = [];
    }
    this.updateNotebookBadge();
  }

  saveNotebookToStorage() {
    try {
      localStorage.setItem("english_typing_roadmap_notebook", JSON.stringify(this.notebookTips));
    } catch (e) {
      console.warn("Không thể ghi localStorage", e);
    }
    this.updateNotebookBadge();
  }

  autoSaveTipToNotebook(item) {
    if (!item) return;

    const id = item.id || `${item.word || item.targetWord}_${this.currentBand}`;
    const exists = this.notebookTips.some(t => t.id === id);

    if (!exists) {
      const tip = item.goldenTip || {
        rule: item.meaning || "Từ vựng luyện gõ",
        theTrap: "Chú ý lỗi chính tả",
        memoryHack: "💡 Luyện tập thường xuyên",
        example: item.example || ""
      };

      this.notebookTips.unshift({
        id: id,
        bandKey: this.currentBand,
        bandLabel: item.band || (this.currentBand === "band_4_5" ? "BAND 4.0 - 5.0" : this.currentBand === "band_5_6" ? "BAND 5.0 - 6.0" : this.currentBand === "band_6_7" ? "BAND 6.0 - 7.0+" : "BỘ ĐỀ RIÊNG"),
        word: this.targetWord,
        topic: item.topic || item.storyTitle || "Mẹo ghi nhớ",
        rule: tip.rule,
        theTrap: tip.theTrap,
        memoryHack: tip.memoryHack,
        example: tip.example || ""
      });
      this.saveNotebookToStorage();
    }
  }

  updateNotebookBadge() {
    if (this.dom && this.dom.notebookCount) {
      this.dom.notebookCount.textContent = this.notebookTips.length;
    }
  }

  openNotebook(filter = "all") {
    const countAll = this.notebookTips.length;
    const count45 = this.notebookTips.filter(t => t.bandKey === "band_4_5").length;
    const count56 = this.notebookTips.filter(t => t.bandKey === "band_5_6").length;
    const count67 = this.notebookTips.filter(t => t.bandKey === "band_6_7").length;
    const countCustom = this.notebookTips.filter(t => t.bandKey === "band_custom").length;

    this.dom.nbFilterAllCount.textContent = countAll;
    this.dom.nbFilter45Count.textContent = count45;
    this.dom.nbFilter56Count.textContent = count56;
    this.dom.nbFilter67Count.textContent = count67;
    if (this.dom.nbFilterCustomCount) {
      this.dom.nbFilterCustomCount.textContent = countCustom;
    }

    const list = filter === "all" 
      ? this.notebookTips 
      : this.notebookTips.filter(t => t.bandKey === filter);

    const container = this.dom.notebookListContainer;
    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = `
        <div class="nb-empty-state">
          <div class="nb-empty-icon">📖</div>
          <p>Chưa có bí kíp nào được mở khóa trong mục này.</p>
          <p style="font-size: 0.85rem; color: #38bdf8; margin-top: 6px;">Hãy tiếp tục gõ hoàn thành các bài học trên lộ trình để săn mẹo vàng!</p>
        </div>
      `;
    } else {
      list.forEach(item => {
        const card = document.createElement("div");
        card.className = "nb-item-card";
        card.innerHTML = `
          <div class="nb-item-header">
            <div class="nb-item-left">
              <span class="nb-item-band">${item.bandLabel}</span>
              <span class="nb-item-word">${item.word}</span>
            </div>
            <div class="nb-item-topic">${item.topic}</div>
          </div>

          <div class="nb-item-section nb-item-rule">
            <strong>🌟 Quy tắc vàng:</strong> ${item.rule}
          </div>

          <div class="nb-item-section nb-item-trap">
            <strong>⚠️ Bẫy hay lừa:</strong> ${item.theTrap}
          </div>

          <div class="nb-item-section nb-item-hack">
            <strong>💡 Thần chú nhớ siêu tốc:</strong> ${item.memoryHack}
          </div>
        `;
        container.appendChild(card);
      });
    }

    this.dom.notebookModal.classList.remove("hidden");
  }

  // --- TRÌNH NHẬP BỘ ĐỀ RIÊNG (CUSTOM DECK MANAGER) ---
  loadCustomDeckFromStorage() {
    try {
      const savedDeck = localStorage.getItem("english_typing_custom_deck");
      const savedName = localStorage.getItem("english_typing_custom_deck_name");
      if (savedDeck) {
        this.customDeck = JSON.parse(savedDeck);
      }
      if (savedName) {
        this.customDeckName = savedName;
      }
      this.updateCustomDeckUI();
    } catch (e) {
      console.warn("Không thể tải custom deck", e);
      this.customDeck = [];
    }
  }

  updateCustomDeckUI() {
    if (this.dom.customDeckTitle) {
      this.dom.customDeckTitle.textContent = this.customDeck.length > 0 
        ? `${this.customDeckName} (${this.customDeck.length} mục)`
        : "Tự Nhập Từ / Excel";
    }
  }

  openCustomDeckModal() {
    if (this.customDeck.length > 0) {
      this.dom.customDeckNameInput.value = this.customDeckName;
      // Chuyển deck thành text format
      const textLines = this.customDeck.map(item => {
        return `${item.word} | ${item.meaning} | ${item.goldenTip?.memoryHack || item.example || ''}`;
      }).join("\n");
      this.dom.customDeckTextarea.value = textLines;
      this.updateCustomDeckPreview();
    }
    this.dom.customDeckModal.classList.remove("hidden");
  }

  updateCustomDeckPreview() {
    const rawText = this.dom.customDeckTextarea.value;
    const parsed = this.parseCustomDeckText(rawText);
    this.dom.cdParsedCount.textContent = `Đã nhận diện: ${parsed.length} mục hợp lệ`;
  }

  parseCustomDeckText(rawText) {
    if (!rawText) return [];
    const lines = rawText.split("\n");
    const result = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;

      // Hỗ trợ phân cách bằng Tab (\t) từ Excel hoặc Gạch đứng (|) hoặc Phẩy (,)
      let parts = [];
      if (trimmed.includes("\t")) {
        parts = trimmed.split("\t");
      } else if (trimmed.includes("|")) {
        parts = trimmed.split("|");
      } else if (trimmed.includes(",")) {
        parts = trimmed.split(",");
      } else {
        parts = [trimmed];
      }

      const word = (parts[0] || "").trim().replace(/[^a-zA-Z]/g, "").toUpperCase();
      if (!word || word.length < 2) return;

      const meaning = (parts[1] || "Từ vựng luyện gõ").trim();
      const hack = (parts[2] || `💡 Mẹo nhớ: Chú ý phát âm và chính tả của ${word}`).trim();

      result.push({
        id: `custom_${idx}_${word}`,
        band: "BỘ ĐỀ RIÊNG",
        topic: "Từ Vựng Tự Tạo",
        word: word,
        targetWord: word,
        verbPrompt: word,
        meaning: meaning,
        ipa: "/custom/",
        contextSentence: `Vocabulary practice: ________ (${meaning})`,
        hintText: meaning,
        example: `Ví dụ: Hãy ghi nhớ từ ${word}`,
        goldenTip: {
          rule: `Từ vựng: ${word} - ${meaning}`,
          theTrap: "Chú ý kiểm tra kỹ các chữ cái khi gõ nhanh.",
          memoryHack: hack,
          example: `Nghĩa: ${meaning}`
        }
      });
    });

    return result;
  }

  saveCustomDeck() {
    const rawText = this.dom.customDeckTextarea.value;
    const parsed = this.parseCustomDeckText(rawText);

    if (parsed.length === 0) {
      alert("Chưa có mục hợp lệ nào! Xin hãy nhập ít nhất 1 từ theo định dạng: Từ | Nghĩa | Mẹo nhớ");
      return;
    }

    this.customDeck = parsed;
    this.customDeckName = this.dom.customDeckNameInput.value.trim() || "Bộ Từ Vựng Của Tôi";

    try {
      localStorage.setItem("english_typing_custom_deck", JSON.stringify(this.customDeck));
      localStorage.setItem("english_typing_custom_deck_name", this.customDeckName);
    } catch (e) {
      console.warn("Lỗi ghi custom deck vào localStorage", e);
    }

    this.updateCustomDeckUI();
    this.dom.customDeckModal.classList.add("hidden");

    // Chuyển sang chơi ngay bộ đề vừa tạo
    this.switchBand("band_custom");
  }

  loadSampleDeck() {
    this.dom.customDeckNameInput.value = "10 Từ Vựng IELTS 7.0+ Đắt Giá";
    this.dom.customDeckTextarea.value = 
`ACCOMMODATION | Chỗ ở tiện nghi | Nhớ quy tắc 2 chữ C và 2 chữ M!
ENVIRONMENT | Môi trường sống | Bẫy phát âm: Có chữ N đứng sau O
SUSTAINABLE | Bền vững lâu dài | Cực đắt trong IELTS Writing Task 2
PRONUNCIATION | Cách phát âm chuẩn | Bẫy chính tả: Không có chữ 'o' như pronounce
GOVERNMENT | Chính phủ quốc gia | Bẫy viết thiếu chữ N sau chữ R (Govern-ment)
ENTREPRENEUR | Doanh nhân khởi nghiệp | Xuất phát từ tiếng Pháp, nhớ đuôi -EUR
COLLEAGUE | Đồng nghiệp cơ quan | Nhớ cụm -EAGUE tương tự league
NECESSARY | Cần thiết sống còn | 1 cổ áo (C) và 2 tay áo (2 chữ S)
SUCCESSFUL | Thành công vang dội | 2 chữ C và 2 chữ S
OPPORTUNITY | Cơ hội tốt | 2 chữ P và đuôi -UNITY`;
    this.updateCustomDeckPreview();
  }

  clearCustomDeckData() {
    if (confirm("Bạn có chắc chắn muốn xóa bộ đề riêng này không?")) {
      this.customDeck = [];
      this.customDeckName = "Bộ Đề Tự Nhập";
      localStorage.removeItem("english_typing_custom_deck");
      localStorage.removeItem("english_typing_custom_deck_name");
      this.dom.customDeckTextarea.value = "";
      this.updateCustomDeckPreview();
      this.updateCustomDeckUI();
    }
  }

  // --- CẨM NANG 6 THÌ (TENSES MASTER GUIDE) ---
  initTensesGuide() {
    if (!this.dom.tgTabBar || !window.TENSES_GUIDE_DATA) return;
    this.dom.tgTabBar.innerHTML = "";
    window.TENSES_GUIDE_DATA.forEach((tense, idx) => {
      const btn = document.createElement("button");
      btn.className = `tg-tab-btn ${idx === 0 ? "active" : ""}`;
      btn.dataset.tenseId = tense.id;
      btn.innerHTML = `<span class="tg-tab-icon">${tense.icon}</span> ${tense.name.split('(')[0].trim()}`;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tg-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderTenseDetail(tense.id);
      });
      this.dom.tgTabBar.appendChild(btn);
    });
    // Render first tense initially
    if (window.TENSES_GUIDE_DATA.length > 0) {
      this.renderTenseDetail(window.TENSES_GUIDE_DATA[0].id);
    }
  }

  detectTenseId(item) {
    if (!item) return "present_simple";
    if (item.tenseId) return item.tenseId;
    const text = ((item.topic || "") + " " + (item.goldenTip?.rule || "") + " " + (item.storyTitle || "")).toLowerCase();
    if (text.includes("quá khứ tiếp diễn") || text.includes("past continuous")) return "past_continuous";
    if (text.includes("hiện tại tiếp diễn") || text.includes("present continuous")) return "present_continuous";
    if (text.includes("hiện tại hoàn thành") || text.includes("present perfect")) return "present_perfect";
    if (text.includes("quá khứ đơn") || text.includes("past simple") || text.includes("didn't")) return "past_simple";
    if (text.includes("tương lai") || text.includes("mệnh đề thời gian") || text.includes("future")) return "simple_future";
    if (text.includes("hiện tại đơn") || text.includes("present simple")) return "present_simple";
    
    if (this.currentBand === "band_5_6") return "present_perfect";
    if (this.currentBand === "band_6_7") return "simple_future";
    return "present_simple";
  }

  openTensesGuide(preferredTenseId = null) {
    const targetId = preferredTenseId || this.detectTenseId(this.currentChallenge);
    const tabs = document.querySelectorAll(".tg-tab-btn");
    tabs.forEach(t => {
      if (t.dataset.tenseId === targetId) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });
    this.renderTenseDetail(targetId);
    this.dom.tensesGuideModal.classList.remove("hidden");
  }

  renderTenseDetail(tenseId) {
    if (!this.dom.tgContentBox || !window.TENSES_GUIDE_DATA) return;
    const tense = window.TENSES_GUIDE_DATA.find(t => t.id === tenseId) || window.TENSES_GUIDE_DATA[0];
    if (!tense) return;

    const signalsHtml = tense.signals.map(s => `<span class="tg-signal-pill">${s}</span>`).join(" ");

    const trapsHtml = tense.traps.map(tr => `
      <div class="tg-trap-card">
        <div class="tg-trap-title">⚠️ ${tr.title}</div>
        <div class="tg-trap-body">${tr.content}</div>
      </div>
    `).join("");

    const examplesHtml = tense.examples.map(ex => `
      <div class="tg-example-item">
        <span class="tg-ex-en">💬 ${ex.en}</span>
        <span class="tg-ex-vi">${ex.vi}</span>
      </div>
    `).join("");

    this.dom.tgContentBox.innerHTML = `
      <div class="tg-detail-header">
        <div class="tg-detail-title-row">
          <span class="tg-detail-icon">${tense.icon}</span>
          <div class="tg-detail-names">
            <h2 class="tg-name">${tense.name}</h2>
            <div class="tg-band-badge">${tense.badge} • ${tense.band}</div>
          </div>
        </div>
        <p class="tg-summary">${tense.summary}</p>
      </div>

      <!-- Công thức 3 thể -->
      <div class="tg-section">
        <div class="tg-section-title">📐 CÔNG THỨC 3 THỂ CHUẨN</div>
        <div class="tg-formula-grid">
          <div class="tg-formula-card pos">
            <div class="tg-f-label">Khẳng định (+)</div>
            <div class="tg-f-val">${tense.formula.positive}</div>
          </div>
          <div class="tg-formula-card neg">
            <div class="tg-f-label">Phủ định (-)</div>
            <div class="tg-f-val">${tense.formula.negative}</div>
          </div>
          <div class="tg-formula-card q">
            <div class="tg-f-label">Nghi vấn (?)</div>
            <div class="tg-f-val">${tense.formula.question}</div>
          </div>
        </div>
      </div>

      <!-- Dấu hiệu nhận biết -->
      <div class="tg-section">
        <div class="tg-section-title">🔍 DẤU HIỆU NHẬN BIẾT NHANH (SIGNAL WORDS)</div>
        <div class="tg-signals-wrap">${signalsHtml}</div>
      </div>

      <!-- Ví dụ thực tế -->
      <div class="tg-section">
        <div class="tg-section-title">📖 VÍ DỤ MINH HỌA NGỮ CẢNH</div>
        <div class="tg-examples-box">${examplesHtml}</div>
      </div>

      <!-- Cạm bẫy thi cử -->
      <div class="tg-section">
        <div class="tg-section-title">🚨 CẠM BẪY TỬ THẦN TRONG ĐỀ THI (HAY BỊ LỪA NHẤT)</div>
        <div class="tg-traps-list">${trapsHtml}</div>
      </div>

      <!-- Thần chú nhớ siêu tốc -->
      <div class="tg-section">
        <div class="tg-hack-banner">
          <div class="tg-hack-title">⚡ THẦN CHÚ KHẮC CỐT GHI NHỚ</div>
          <div class="tg-hack-content">${tense.memoryHack}</div>
        </div>
      </div>

      <!-- Nút hành động vào thực chiến -->
      <div class="tg-action-row">
        <button class="tg-btn-practice" id="tgBtnGoPractice" data-filterband="${tense.filterBand || 'band_4_5'}">
          🚀 VÀO PHÒNG THỰC CHIẾN BẮT BẪY THÌ NÀY ➔
        </button>
      </div>
    `;

    // Gắn sự kiện nút Vào thực chiến
    const btnPractice = document.getElementById("tgBtnGoPractice");
    if (btnPractice) {
      btnPractice.addEventListener("click", () => {
        const band = btnPractice.dataset.filterband;
        this.dom.tensesGuideModal.classList.add("hidden");
        this.switchBand(band);
        this.switchMode("grammar");
      });
    }
  }

  // --- TRỢ LÝ AI TẠO BỘ ĐỀ (AI CHALLENGE GENERATOR) ---
  openAiGenModal() {
    const savedKey = localStorage.getItem("gemini_api_key") || "";
    if (this.dom.aiApiKeyInput) {
      this.dom.aiApiKeyInput.value = savedKey;
    }
    if (this.dom.aiStatusPanel) {
      this.dom.aiStatusPanel.classList.add("hidden");
    }
    this.dom.aiGeneratorModal.classList.remove("hidden");
  }

  async generateAiChallenges() {
    const topic = this.dom.aiTopicInput.value.trim() || "Chủ đề tự do";
    const band = this.dom.aiBandSelect.value;
    const count = parseInt(this.dom.aiCountSelect.value) || 5;
    const apiKey = this.dom.aiApiKeyInput.value.trim();

    if (apiKey) {
      localStorage.setItem("gemini_api_key", apiKey);
    }

    this.dom.aiStatusPanel.classList.remove("hidden");
    this.dom.aiStatusMsg.textContent = "AI đang suy nghĩ và sáng tác câu chuyện gài bẫy theo chủ đề...";
    this.dom.btnSubmitAiGen.disabled = true;

    try {
      let challenges = [];
      if (apiKey) {
        try {
          this.dom.aiStatusMsg.textContent = "Đang kết nối Google Gemini API để tạo bộ đề chất lượng cao...";
          challenges = await this.callGeminiAPI(apiKey, topic, band, count);
        } catch (apiErr) {
          console.warn("Lỗi gọi Gemini API, chuyển sang Smart AI Engine:", apiErr);
          this.dom.aiStatusMsg.textContent = "API bận hoặc không hợp lệ, đang kích hoạt Smart AI Engine tích hợp...";
          await new Promise(r => setTimeout(r, 600));
          challenges = this.generateSmartScenarios(topic, band, count);
        }
      } else {
        await new Promise(r => setTimeout(r, 700)); // Hiệu ứng AI thinking
        challenges = this.generateSmartScenarios(topic, band, count);
      }

      if (!challenges || challenges.length === 0) {
        throw new Error("Không tạo được câu hỏi.");
      }

      this.customDeck = challenges;
      this.customDeckName = `AI: ${topic.length > 22 ? topic.substring(0, 20) + '...' : topic}`;

      try {
        localStorage.setItem("english_typing_custom_deck", JSON.stringify(this.customDeck));
        localStorage.setItem("english_typing_custom_deck_name", this.customDeckName);
      } catch (e) {
        console.warn("Không thể lưu AI deck vào storage", e);
      }

      this.updateCustomDeckUI();
      this.dom.aiGeneratorModal.classList.add("hidden");

      // Chuyển sang chơi ngay ở band_custom
      this.switchBand("band_custom");
      this.switchMode("grammar");

    } catch (err) {
      alert("Có lỗi khi tạo câu hỏi: " + err.message);
    } finally {
      this.dom.aiStatusPanel.classList.add("hidden");
      this.dom.btnSubmitAiGen.disabled = false;
    }
  }

  async callGeminiAPI(apiKey, topic, band, count) {
    const prompt = `Bạn là chuyên gia luyện thi IELTS và Ngữ pháp tiếng Anh đỉnh cao.
Hãy tạo ${count} câu hỏi điền từ (fill-in-the-blank) kèm câu chuyện hấp dẫn và bẫy ngữ pháp theo:
- Chủ đề: "${topic}"
- Cấp độ: "${band}"
- Mỗi câu hỏi phải là một đoạn văn ngắn thực tế có một chỗ trống dạng: "(verb) ________" để người học chia động từ hoặc điền từ vựng trọng tâm.
- Chỗ trống phải là 1 từ duy nhất viết HOA toàn bộ (ví dụ: PREPARED, DRANK, IS_WORKING...). Không dùng ký tự lạ.
- Đính kèm mẹo vàng (goldenTip) bóc tách cạm bẫy thi cử và thần chú nhớ nhanh.

BẮT BUỘC TRẢ VỀ ĐÚNG ĐỊNH DẠNG JSON MẢNG (Array of Objects) như sau:
[
  {
    "id": "ai_1",
    "band": "${band}",
    "topic": "${topic}",
    "storyTitle": "Tiêu đề câu chuyện ngắn",
    "verbPrompt": "động từ gốc",
    "targetWord": "TỪ_ĐIỀN_VIẾT_HOA",
    "word": "TỪ_ĐIỀN_VIẾT_HOA",
    "contextSentence": "Đoạn văn tiếng Anh chứa (verb) ________ trong ngữ cảnh.",
    "hintText": "Gợi ý nhận biết thì hoặc nghĩa",
    "meaning": "Dịch nghĩa tiếng Việt câu hoặc từ",
    "ipa": "/.../",
    "goldenTip": {
      "rule": "Quy tắc ngữ pháp hoặc từ vựng cốt lõi",
      "theTrap": "Cạm bẫy hay bị lừa nhất",
      "memoryHack": "💡 Thần chú hoặc mẹo nhớ siêu tốc",
      "example": "Ví dụ thực tế tương tự"
    }
  }
]`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const resp = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `HTTP ${resp.status}`);
    }

    const data = await resp.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error("Phản hồi rỗng từ Gemini API.");

    let parsed = JSON.parse(rawText);
    if (!Array.isArray(parsed) && parsed.questions && Array.isArray(parsed.questions)) {
      parsed = parsed.questions;
    }
    if (!Array.isArray(parsed)) {
      throw new Error("Dữ liệu trả về không phải định dạng mảng.");
    }

    return parsed.map((item, idx) => ({
      id: `ai_${Date.now()}_${idx}`,
      band: band,
      topic: item.topic || topic,
      storyTitle: item.storyTitle || `Tình huống ${idx + 1}`,
      verbPrompt: (item.verbPrompt || item.word || item.targetWord || "VERB").toUpperCase(),
      targetWord: (item.targetWord || item.word || "").replace(/[^a-zA-Z]/g, "").toUpperCase(),
      word: (item.targetWord || item.word || "").replace(/[^a-zA-Z]/g, "").toUpperCase(),
      contextSentence: item.contextSentence || `Practice: (word) ________`,
      hintText: item.hintText || item.meaning || "Lắng nghe và gõ phím",
      meaning: item.meaning || "Câu hỏi AI sinh",
      ipa: item.ipa || "/ai-vocab/",
      goldenTip: {
        rule: item.goldenTip?.rule || "Quy tắc ngữ pháp quan trọng.",
        theTrap: item.goldenTip?.theTrap || "Cẩn thận nhầm lẫn thì hoặc lỗi chính tả.",
        memoryHack: item.goldenTip?.memoryHack || "💡 Hãy chú ý các từ chỉ thời gian trong câu.",
        example: item.goldenTip?.example || item.contextSentence
      }
    }));
  }

  generateSmartScenarios(topic, band, count) {
    const topicLower = (topic || "").toLowerCase();

    const SCENARIOS = [
      // 1. CÔNG NGHỆ, IT, AI & LẬP TRÌNH
      {
        tags: ["it", "ai", "tech", "lập trình", "code", "máy tính", "phần mềm", "công nghệ"],
        data: [
          {
            band: "Band 4.0 - 5.0",
            topic: "Lập Trình & AI",
            storyTitle: "Thói Quen Của Kỹ Sư AI",
            verbPrompt: "write",
            targetWord: "WRITES",
            word: "WRITES",
            contextSentence: "Every morning, Alex (write) ________ clean python code before the team stand-up meeting.",
            hintText: "Dấu hiệu 'Every morning' + Chủ ngữ 'Alex' (ngôi thứ 3 số ít).",
            meaning: "Viết mã nguồn sạch",
            ipa: "/raɪts/",
            goldenTip: {
              rule: "Ở thì Hiện tại đơn, chủ ngữ số ít (Alex / He / She) động từ phải thêm 's' hoặc 'es'.",
              theTrap: "Quên đuôi 's' khi nói hoặc gõ phím nhanh (He write code).",
              memoryHack: "💡 Chủ ngữ số ít chưa có 's' ➔ Động từ phải mượn 's'!",
              example: "He writes python code every day."
            }
          },
          {
            band: "Band 4.0 - 5.0",
            topic: "Lập Trình & AI",
            storyTitle: "Sự Cố Quên Sao Lưu Dữ Liệu",
            verbPrompt: "backup",
            targetWord: "BACKUP",
            word: "BACKUP",
            contextSentence: "Because he was in a hurry, Alex didn't (backup) ________ the production database.",
            hintText: "Sau trợ động từ phủ định DIDN'T thì động từ thế nào?",
            meaning: "Không sao lưu cơ sở dữ liệu",
            ipa: "/ˈbæk.ʌp/",
            goldenTip: {
              rule: "Khi đã có trợ động từ DID / DIDN'T, động từ theo sau BẮT BUỘC về NGUYÊN THỂ.",
              theTrap: "Nhiều người thấy quá khứ nên chia 'didn't backed up' (SAI NẶNG).",
              memoryHack: "💡 Mẹo 'Tài Xế Gánh Tạ': DIDN'T đã gánh thì quá khứ, động từ chính thảnh thơi về nguyên thể!",
              example: "He didn't backup the file yesterday."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Lập Trình & AI",
            storyTitle: "Server Bất Ngờ Sập Giữa Chừng",
            verbPrompt: "crash",
            targetWord: "CRASHED",
            word: "CRASHED",
            contextSentence: "While the deep learning model was training, the main server suddenly (crash) ________.",
            hintText: "Hành động dài 'was training' bị hành động ngắn chen ngang.",
            meaning: "Máy chủ bất ngờ bị sập",
            ipa: "/kræʃt/",
            goldenTip: {
              rule: "Phối hợp thì: Hành động dài đang diễn ra chia Quá khứ tiếp diễn (was training), hành động ngắn chen ngang chia Quá khứ đơn (crashed).",
              theTrap: "Chia cả hai vế cùng quá khứ tiếp diễn.",
              memoryHack: "💡 Đang mượt mà (was/were V-ing) thì thình lình 'BÙM' một phát (V2/ed dứt khoát)!",
              example: "While I was coding, the electricity went out."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Lập Trình & AI",
            storyTitle: "Nghiên Cứu Mô Hình Ngôn Ngữ Lớn",
            verbPrompt: "develop",
            targetWord: "DEVELOPED",
            word: "DEVELOPED",
            contextSentence: "The AI research laboratory has (develop) ________ three multimodal models since 2023.",
            hintText: "Dấu hiệu 'since 2023' đi với thì Hiện tại hoàn thành (has + V3/ed).",
            meaning: "Đã phát triển 3 mô hình từ năm 2023",
            ipa: "/dɪˈvel.əpt/",
            goldenTip: {
              rule: "SINCE + mốc thời gian là dấu hiệu đặc trưng của thì Hiện tại hoàn thành (have/has + V3/ed).",
              theTrap: "Nhầm lẫn giữa SINCE (mốc thời gian) và FOR (khoảng thời gian).",
              memoryHack: "💡 SINCE mốc - FOR khoảng. Cứ thấy bóng dáng HAVE/HAS là gọi tên CỘT 3!",
              example: "We have developed this software since last year."
            }
          },
          {
            band: "Band 6.0 - 7.0+",
            topic: "Lập Trình & AI",
            storyTitle: "Bẫy Mệnh Đề Thời Gian Triển Khai Mã",
            verbPrompt: "pass",
            targetWord: "PASSES",
            word: "PASSES",
            contextSentence: "The automated CI/CD pipeline will deploy the code as soon as the test suite (pass) ________.",
            hintText: "Sau liên từ chỉ thời gian 'AS SOON AS', cấm dùng 'will'!",
            meaning: "Ngay khi bộ kiểm thử vượt qua thành công",
            ipa: "/ˈpæs.ɪz/",
            goldenTip: {
              rule: "Trong mệnh đề trạng ngữ chỉ thời gian (as soon as, when, until, before, after), TUYỆT ĐỐI CẤM dùng WILL dù nói về tương lai. Phải dùng Hiện Tại Đơn!",
              theTrap: "Viết theo quán tính: 'as soon as it will pass' (lỗi trừ điểm cực nặng trong IELTS Writing/Speaking).",
              memoryHack: "💡 Thần chú 'Vùng Cấm Bay': AS SOON AS là vùng cấm bay với phi cơ WILL, phi cơ WILL bị bắn hạ, chỉ còn lại Hiện Tại Đơn!",
              example: "I will call you as soon as I arrive."
            }
          }
        ]
      },

      // 2. PHỎNG VẤN XIN VIỆC & SỰ NGHIỆP
      {
        tags: ["phỏng vấn", "interview", "xin việc", "công việc", "sự nghiệp", "career", "job", "hr", "cv"],
        data: [
          {
            band: "Band 4.0 - 5.0",
            topic: "Phỏng Vấn & Sự Nghiệp",
            storyTitle: "Lịch Trình Buổi Phỏng Vấn",
            verbPrompt: "start",
            targetWord: "STARTS",
            word: "STARTS",
            contextSentence: "The final interview with the CEO (start) ________ at exactly 9 AM tomorrow.",
            hintText: "Hiện tại đơn diễn tả lịch trình, thời gian biểu cố định trong tương lai.",
            meaning: "Bắt đầu đúng 9 giờ sáng mai",
            ipa: "/stɑːts/",
            goldenTip: {
              rule: "Hiện tại đơn dùng cho lịch trình cố định của máy bay, tàu hỏa, buổi thi, phỏng vấn.",
              theTrap: "Vội vàng dùng 'will start' dù có giờ giấc cố định theo lịch.",
              memoryHack: "💡 Có giờ giấc lịch trình đính kèm (at 9 AM) ➔ Ưu tiên thì Hiện Tại Đơn!",
              example: "The train leaves at 6 PM tomorrow."
            }
          },
          {
            band: "Band 4.0 - 5.0",
            topic: "Phỏng Vấn & Sự Nghiệp",
            storyTitle: "Ứng Viên Quên Mang Bản In CV",
            verbPrompt: "bring",
            targetWord: "BRING",
            word: "BRING",
            contextSentence: "Due to nervousness, Alex didn't (bring) ________ a printed copy of his resume.",
            hintText: "Sau trợ động từ DIDN'T, động từ về dạng gì?",
            meaning: "Đã không mang theo bản in CV",
            ipa: "/brɪŋ/",
            goldenTip: {
              rule: "Sau DIDN'T, động từ bắt buộc ở dạng nguyên thể (bring, không phải brought).",
              theTrap: "Viết 'didn't brought' do quen miệng.",
              memoryHack: "💡 DIDN'T gánh quá khứ rồi, động từ chính giữ nguyên vẹn!",
              example: "He didn't bring his laptop."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Phỏng Vấn & Sự Nghiệp",
            storyTitle: "Tình Huống Bất Ngờ Khi Đang Trả Lời",
            verbPrompt: "ring",
            targetWord: "RANG",
            word: "RANG",
            contextSentence: "While Alex was answering a difficult question, his smartphone suddenly (ring) ________.",
            hintText: "Hành động ngắn chen ngang (ring ➔ rang) khi đang trả lời.",
            meaning: "Điện thoại thình lình reo chuông",
            ipa: "/ræŋ/",
            goldenTip: {
              rule: "Quá khứ tiếp diễn (was answering) phối hợp với Quá khứ đơn (rang) chỉ sự việc bất ngờ chen ngang.",
              theTrap: "Chia 'was ringing' hoặc 'ringed'. Quá khứ của ring là rang (cột 2).",
              memoryHack: "💡 Ring ➔ Rang ➔ Rung. Cột 2 quá khứ đổi 'i' thành 'a'!",
              example: "The phone rang while I was taking a shower."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Phỏng Vấn & Sự Nghiệp",
            storyTitle: "Kinh Nghiệm Làm Việc Tích Lũy",
            verbPrompt: "work",
            targetWord: "WORKED",
            word: "WORKED",
            contextSentence: "Alex has (work) ________ as a senior consultant for more than five years.",
            hintText: "Dấu hiệu 'for more than five years' + have/has + V3.",
            meaning: "Đã làm việc hơn 5 năm",
            ipa: "/wɜːkt/",
            goldenTip: {
              rule: "Hành động kéo dài từ quá khứ đến hiện tại với 'FOR + khoảng thời gian' chia Hiện Tại Hoàn Thành.",
              theTrap: "Dùng quá khứ đơn 'worked' mà quên trợ động từ 'has' khi nói về việc vẫn đang tiếp tục.",
              memoryHack: "💡 FOR khoảng thời gian: Kéo dài từ xưa đến nay thì gọi Hiện Tại Hoàn Thành!",
              example: "She has worked here for 3 years."
            }
          },
          {
            band: "Band 6.0 - 7.0+",
            topic: "Phỏng Vấn & Sự Nghiệp",
            storyTitle: "Chờ Kết Quả Tuyển Dụng",
            verbPrompt: "make",
            targetWord: "MAKES",
            word: "MAKES",
            contextSentence: "The recruiter will email Alex as soon as the board (make) ________ its final decision.",
            hintText: "Sau 'AS SOON AS', động từ chia thì gì với chủ ngữ 'the board'?",
            meaning: "Ngay khi hội đồng đưa ra quyết định cuối cùng",
            ipa: "/meɪks/",
            goldenTip: {
              rule: "Mệnh đề trạng ngữ chỉ thời gian (as soon as) dùng thì Hiện Tại Đơn để chỉ tương lai, chủ ngữ số ít thêm 's/es'.",
              theTrap: "Viết 'as soon as the board will make'.",
              memoryHack: "💡 Không bao giờ cho 'WILL' bay vào vùng lãnh thổ của AS SOON AS!",
              example: "I will tell him when he arrives."
            }
          }
        ]
      },

      // 3. DU LỊCH & SỰ CỐ DỌC ĐƯỜNG
      {
        tags: ["du lịch", "travel", "chuyến đi", "xe", "đà lạt", "sa pa", "khách sạn", "trip", "máy bay", "flight"],
        data: [
          {
            band: "Band 4.0 - 5.0",
            topic: "Du Lịch & Khám Phá",
            storyTitle: "Mua Quà Lưu Niệm Ở Chợ Đêm",
            verbPrompt: "buy",
            targetWord: "BOUGHT",
            word: "BOUGHT",
            contextSentence: "During his trip to Da Lat last weekend, Alex (buy) ________ lots of fresh strawberries.",
            hintText: "Dấu hiệu 'last weekend' + Quá khứ bất quy tắc của BUY.",
            meaning: "Đã mua nhiều dâu tây tươi",
            ipa: "/bɔːt/",
            goldenTip: {
              rule: "BUY là động từ bất quy tắc, quá khứ cột 2 là BOUGHT.",
              theTrap: "Tự ý thêm -ed thành 'buyed'.",
              memoryHack: "💡 Gia đình vần OUGHT: BUY ➔ BOUGHT, BRING ➔ BROUGHT, THINK ➔ THOUGHT!",
              example: "She bought a ticket yesterday."
            }
          },
          {
            band: "Band 4.0 - 5.0",
            topic: "Du Lịch & Khám Phá",
            storyTitle: "Trời Đột Ngột Đổ Mưa Rào",
            verbPrompt: "rain",
            targetWord: "RAINING",
            word: "RAINING",
            contextSentence: "Look at the dark clouds! It is (rain) ________ heavily outside the hotel.",
            hintText: "Dấu hiệu 'Look at...' cảm thán + is + V-ing.",
            meaning: "Đang mưa rất to",
            ipa: "/ˈreɪn.ɪŋ/",
            goldenTip: {
              rule: "Câu mệnh lệnh/cảm thán (Look!, Listen!, Watch out!) là dấu hiệu của thì Hiện Tại Tiếp Diễn.",
              theTrap: "Thiếu động từ to be hoặc quên đuôi -ing.",
              memoryHack: "💡 'Look!' mở to mắt nhìn ➔ Việc đang diễn ra ngay trước mắt (Be + V-ing)!",
              example: "Listen! The bird is singing."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Du Lịch & Khám Phá",
            storyTitle: "Xe Hỏng Giữa Đèo Sương Mù",
            verbPrompt: "break",
            targetWord: "BROKE",
            word: "BROKE",
            contextSentence: "While they were driving up the mountain pass, the rental car (break) ________ down.",
            hintText: "Hành động ngắn cắt ngang: break ➔ broke.",
            meaning: "Chiếc xe thuê bất ngờ bị hỏng",
            ipa: "/brəʊk/",
            goldenTip: {
              rule: "Hành động ngắn cắt ngang hành động dài chia Quá khứ đơn (broke down).",
              theTrap: "Chia 'breaked' hoặc nhầm sang phân từ 3 'broken'.",
              memoryHack: "💡 BREAK ➔ BROKE (quá khứ) ➔ BROKEN (hoàn thành). Cột 2 là BROKE!",
              example: "His car broke down on the way to work."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Du Lịch & Khám Phá",
            storyTitle: "Trải Nghiệm Đặt Chân Tới Nhiều Miền Đất",
            verbPrompt: "visit",
            targetWord: "VISITED",
            word: "VISITED",
            contextSentence: "Emma has (visit) ________ five famous heritage cities so far.",
            hintText: "Dấu hiệu 'so far' (cho tới nay) + has + V3.",
            meaning: "Đã ghé thăm 5 thành phố di sản",
            ipa: "/ˈvɪz.ɪ.tɪd/",
            goldenTip: {
              rule: "'So far / Up to now' là dấu hiệu của thì Hiện Tại Hoàn Thành chỉ trải nghiệm tích lũy.",
              theTrap: "Dùng thì quá khứ đơn vì tưởng hành động đi du lịch đã xong.",
              memoryHack: "💡 Thấy SO FAR là kết quả còn cộng dồn tới nay ➔ Gọi ngay Hiện Tại Hoàn Thành!",
              example: "I have read three chapters so far."
            }
          },
          {
            band: "Band 6.0 - 7.0+",
            topic: "Du Lịch & Khám Phá",
            storyTitle: "Báo Tin Khi Máy Bay Hạ Cánh",
            verbPrompt: "land",
            targetWord: "LANDS",
            word: "LANDS",
            contextSentence: "I promise I will text you as soon as the airplane (land) ________ safely.",
            hintText: "Sau 'AS SOON AS', chia thì Hiện Tại Đơn với chủ ngữ 'the airplane'.",
            meaning: "Ngay khi máy bay hạ cánh an toàn",
            ipa: "/lændz/",
            goldenTip: {
              rule: "Mệnh đề thời gian sau 'as soon as' không dùng WILL, dùng Hiện Tại Đơn.",
              theTrap: "Viết 'as soon as the plane will land'.",
              memoryHack: "💡 AS SOON AS là cấm địa của WILL!",
              example: "Call me when you land."
            }
          }
        ]
      },

      // 4. HẸN HÒ & ẨM THỰC
      {
        tags: ["hẹn hò", "nhà hàng", "ẩm thực", "ăn", "cà phê", "coffee", "restaurant", "date", "dating", "dinner"],
        data: [
          {
            band: "Band 4.0 - 5.0",
            topic: "Ẩm Thực & Hẹn Hò",
            storyTitle: "Bữa Tối Lãng Mạn Hôm Qua",
            verbPrompt: "order",
            targetWord: "ORDERED",
            word: "ORDERED",
            contextSentence: "Last night at the French bistro, Alex (order) ________ two delicious steaks.",
            hintText: "Dấu hiệu 'Last night' ➔ Quá khứ đơn có quy tắc (+ed).",
            meaning: "Đã gọi hai phần bít tết hảo hạng",
            ipa: "/ˈɔː.dəd/",
            goldenTip: {
              rule: "Hành động đã xảy ra và chấm dứt hẳn với 'last night' chia Quá khứ đơn.",
              theTrap: "Nhầm lẫn phát âm đuôi -ed: ordered kết thúc bằng âm /d/.",
              memoryHack: "💡 Last night, yesterday, ago: Quá khứ dứt khoát!",
              example: "They ordered pizza yesterday."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Ẩm Thực & Hẹn Hò",
            storyTitle: "Đầu Bếp Đang Nếm Thử Món Ăn",
            verbPrompt: "taste",
            targetWord: "TASTING",
            word: "TASTING",
            contextSentence: "Look! The head chef is (taste) ________ the signature soup before serving it.",
            hintText: "Hành động chủ động nếm thức ăn ĐƯỢC PHÉP chia tiếp diễn!",
            meaning: "Đang chủ động nếm món súp",
            ipa: "/ˈteɪst.ɪŋ/",
            goldenTip: {
              rule: "Động từ 'taste': Nếu mang nghĩa 'chủ động nếm' thì ĐƯỢC chia tiếp diễn (is tasting). Nếu mang nghĩa 'có vị gì' thì CẤM chia tiếp diễn (The soup tastes good).",
              theTrap: "Máy móc nhớ 'taste là giác quan không được chia tiếp diễn' nên bỏ lỡ câu đúng.",
              memoryHack: "💡 Đang đưa thìa lên miệng nếm (hành động thể chất) ➔ Hoàn toàn được dùng V-ing!",
              example: "He is tasting the wine right now."
            }
          },
          {
            band: "Band 5.0 - 6.0",
            topic: "Ẩm Thực & Hẹn Hò",
            storyTitle: "Mối Tình Tri Kỷ Kéo Dài Nhiều Năm",
            verbPrompt: "know",
            targetWord: "KNOWN",
            word: "KNOWN",
            contextSentence: "Alex has (know) ________ Emma since they were first-year university students.",
            hintText: "Dấu hiệu 'since they were...' + has + V3 (KNOW ➔ KNOWN).",
            meaning: "Đã quen biết nhau từ thời sinh viên năm nhất",
            ipa: "/nəʊn/",
            goldenTip: {
              rule: "KNOW là động từ chỉ trạng thái nhận thức, không chia tiếp diễn (has been knowing SAI), phải dùng Hiện Tại Hoàn Thành (has known).",
              theTrap: "Viết 'has knew' (nhầm sang cột 2). V3 của know là known.",
              memoryHack: "💡 KNOW ➔ KNEW (cột 2) ➔ KNOWN (cột 3). Thấy HAVE/HAS là chọn KNOWN!",
              example: "I have known him for ten years."
            }
          },
          {
            band: "Band 6.0 - 7.0+",
            topic: "Ẩm Thực & Hẹn Hò",
            storyTitle: "Gọi Tráng Miệng Sau Món Chính",
            verbPrompt: "finish",
            targetWord: "FINISH",
            word: "FINISH",
            contextSentence: "We will order sweet dessert as soon as we (finish) ________ the main course.",
            hintText: "Sau liên từ thời gian 'AS SOON AS', dùng thì Hiện Tại Đơn.",
            meaning: "Ngay khi ăn xong món chính",
            ipa: "/ˈfɪn.ɪʃ/",
            goldenTip: {
              rule: "Mệnh đề thời gian với 'as soon as' dùng Hiện Tại Đơn (finish), không dùng 'will finish'.",
              theTrap: "Viết 'as soon as we will finish'.",
              memoryHack: "💡 AS SOON AS cấm bay đối với WILL!",
              example: "We will leave as soon as we finish dinner."
            }
          }
        ]
      }
    ];

    let matchedCategory = SCENARIOS.find(cat => cat.tags.some(t => topicLower.includes(t)));
    let candidateQuestions = matchedCategory ? matchedCategory.data : SCENARIOS.flatMap(cat => cat.data);

    let filtered = candidateQuestions.filter(q => q.band.includes(band.split(" ")[1] || "4.0"));
    if (filtered.length < count) {
      const others = candidateQuestions.filter(q => !filtered.includes(q));
      filtered = [...filtered, ...others];
    }

    const selected = filtered.slice(0, count);

    return selected.map((item, idx) => {
      const customizedTopic = topic.length > 2 ? topic : item.topic;
      return {
        id: `smart_ai_${Date.now()}_${idx}`,
        band: item.band,
        topic: customizedTopic,
        storyTitle: `${customizedTopic} • ${item.storyTitle}`,
        verbPrompt: item.verbPrompt,
        targetWord: item.targetWord,
        word: item.targetWord,
        contextSentence: item.contextSentence,
        hintText: item.hintText,
        meaning: item.meaning,
        ipa: item.ipa,
        goldenTip: item.goldenTip
      };
    });
  }

  // Hàm loại bỏ dấu tiếng Việt (Telex/VNI) để gõ tiếng Anh trơn tru trên điện thoại
  removeVietnameseTones(str) {
    if (!str) return "";
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  // --- EVENT LISTENERS ---
  initEventListeners() {
    window.addEventListener("keydown", (e) => {
      // 1. Phím TAB: Nghe phát âm lại (TTS Replay)
      if (e.key === "Tab") {
        e.preventDefault();
        this.speakCurrentItem();
        return;
      }

      // 2. Nếu Modal Cẩm Nang 6 Thì đang mở ➔ Phím ESC đóng modal
      if (!this.dom.tensesGuideModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          this.dom.tensesGuideModal.classList.add("hidden");
        }
        return;
      }

      // 2.5. Nếu Modal Nhạc Online đang mở ➔ Phím ESC đóng modal
      if (this.dom.onlineMusicModal && !this.dom.onlineMusicModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          this.dom.onlineMusicModal.classList.add("hidden");
        }
        return;
      }

      // 3. Nếu Modal AI Generator đang mở ➔ Phím ESC đóng modal
      if (!this.dom.aiGeneratorModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          this.dom.aiGeneratorModal.classList.add("hidden");
        }
        return;
      }

      // 4. Nếu Modal Custom Deck đang mở ➔ Không bắt phím gõ game
      if (!this.dom.customDeckModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          this.dom.customDeckModal.classList.add("hidden");
        }
        return;
      }

      // 5. Nếu Sổ tay đang mở ➔ Phím ESC đóng sổ tay
      if (!this.dom.notebookModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          this.dom.notebookModal.classList.add("hidden");
        }
        return;
      }

      // 4. Nếu Modal Mẹo Vàng đang mở ➔ Enter hoặc Space để sang câu tiếp
      if (!this.dom.explanationModal.classList.contains("hidden")) {
        if (e.key === "Enter" || e.code === "Space") {
          e.preventDefault();
          this.advanceNextQuestion();
        }
        return;
      }

      // 5. Nếu Meme đang hiển thị ➔ Enter/Space/Escape để tắt ngay
      if (this.isMemeActive) {
        if (e.key === "Enter" || e.code === "Space" || e.key === "Escape") {
          e.preventDefault();
          this.dismissMeme();
        }
        return;
      }

      // 6. Gõ phím A-Z (Tự động chuyển dấu tiếng Việt Telex/VNI về chữ cái tiếng Anh)
      const key = this.removeVietnameseTones(e.key).toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        this.handleLetterPress(key);
      }
    });

    // --- MOBILE TYPING & ON-SCREEN VIRTUAL KEYBOARD LISTENERS ---
    // 1. Nhận ký tự gõ từ bàn phím ảo điện thoại (iOS / Android)
    if (this.dom.mobileNativeInput) {
      this.dom.mobileNativeInput.addEventListener("input", (e) => {
        let raw = e.target.value || "";
        if (!raw && e.data) raw = e.data;
        if (raw) {
          const clean = this.removeVietnameseTones(raw).toUpperCase();
          for (let char of clean) {
            if (/^[A-Z]$/.test(char)) {
              this.handleLetterPress(char);
            }
          }
        }
        this.dom.mobileNativeInput.value = "";
      });

      this.dom.mobileNativeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Space") {
          if (this.isMemeActive) {
            e.preventDefault();
            this.dismissMeme();
            return;
          }
          if (!this.dom.explanationModal.classList.contains("hidden")) {
            e.preventDefault();
            this.advanceNextQuestion();
            return;
          }
        }
        if (e.key === "Tab") {
          e.preventDefault();
          this.speakCurrentItem();
          return;
        }
        const key = this.removeVietnameseTones(e.key).toUpperCase();
        if (/^[A-Z]$/.test(key)) {
          this.handleLetterPress(key);
        }
      });
    }

    // 2. Chạm vào ô chữ cái để kích hoạt bàn phím ảo điện thoại tại chỗ, hoàn toàn không nẩy màn hình
    const focusMobileTyping = () => {
      if (this.dom.mobileNativeInput) {
        this.dom.mobileNativeInput.focus({ preventScroll: true });
      }
    };

    if (this.dom.wordSlotsWrapper) {
      this.dom.wordSlotsWrapper.addEventListener("click", focusMobileTyping);
      this.dom.wordSlotsWrapper.addEventListener("touchstart", focusMobileTyping, { passive: true });
    }
    if (this.dom.wordSlotsContainer) {
      this.dom.wordSlotsContainer.addEventListener("click", focusMobileTyping);
      this.dom.wordSlotsContainer.addEventListener("touchstart", focusMobileTyping, { passive: true });
    }

    // Tự động nhận diện thiết bị di động hay máy tính
    this.isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || (navigator.maxTouchPoints > 0 && window.innerWidth <= 1024);

    if (this.isMobileDevice) {
      document.body.classList.add("is-mobile-device");
      if (this.dom.statusMessage) {
        this.dom.statusMessage.textContent = "Chạm vào ô chữ để gõ!";
      }
    } else {
      document.body.classList.add("is-desktop-device");
    }

    // Phase Stepper Buttons
    if (this.dom.btnPhase1) this.dom.btnPhase1.addEventListener("click", () => this.switchPhase("phase_1"));
    if (this.dom.btnPhase2) this.dom.btnPhase2.addEventListener("click", () => this.switchPhase("phase_2"));
    if (this.dom.btnPhase3) this.dom.btnPhase3.addEventListener("click", () => this.switchPhase("phase_3"));

    // Sub-Mode Switcher Tabs
    if (this.dom.tabVocabMode) {
      this.dom.tabVocabMode.addEventListener("click", () => this.switchMode("vocab"));
    }
    if (this.dom.tabTensesMode) {
      this.dom.tabTensesMode.addEventListener("click", () => this.switchMode("tenses"));
    }
    if (this.dom.tabCollocationMode) {
      this.dom.tabCollocationMode.addEventListener("click", () => this.switchMode("collocation"));
    }
    if (this.dom.tabSentenceUpgradeMode) {
      this.dom.tabSentenceUpgradeMode.addEventListener("click", () => this.switchMode("sentence_upgrade"));
    }
    if (this.dom.tabDictationSpeedMode) {
      this.dom.tabDictationSpeedMode.addEventListener("click", () => this.switchMode("dictation"));
    }
    if (this.dom.tabReadingEvidenceMode) {
      this.dom.tabReadingEvidenceMode.addEventListener("click", () => this.switchMode("reading"));
    }
    if (this.dom.tabMistakeVaultMode) {
      this.dom.tabMistakeVaultMode.addEventListener("click", () => this.openMistakeVaultModal());
    }

    // Phase 1 Vocab Category Filter Buttons
    if (this.dom.btnVocabIrr) this.dom.btnVocabIrr.addEventListener("click", () => this.switchVocabCategory("irregular_verbs"));
    if (this.dom.btnVocabDaily) this.dom.btnVocabDaily.addEventListener("click", () => this.switchVocabCategory("daily_life"));
    if (this.dom.btnVocabEmotions) this.dom.btnVocabEmotions.addEventListener("click", () => this.switchVocabCategory("emotions"));
    if (this.dom.btnVocabTech) this.dom.btnVocabTech.addEventListener("click", () => this.switchVocabCategory("tech_ai"));

    // IT Subcategory Filter Chips
    if (this.dom.itChips) {
      this.dom.itChips.forEach(chip => {
        chip.addEventListener("click", () => {
          this.dom.itChips.forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          this.currentItSubCategory = chip.dataset.itCat || "all";
          this.updateMilestoneHeader();
          this.loadPoolForModeAndBand();
          this.loadCurrentQuestion();
        });
      });
    }

    // Roadmap Band Milestone Buttons
    if (this.dom.btnBand45) this.dom.btnBand45.addEventListener("click", () => this.switchBand("band_4_5"));
    if (this.dom.btnBand56) this.dom.btnBand56.addEventListener("click", () => this.switchBand("band_5_6"));
    if (this.dom.btnBand67) this.dom.btnBand67.addEventListener("click", () => this.switchBand("band_6_7"));
    if (this.dom.btnBandCustom) this.dom.btnBandCustom.addEventListener("click", () => this.switchBand("band_custom"));

    // Cẩm Nang 6 Thì Open Button
    if (this.dom.btnOpenTensesGuide) {
      this.dom.btnOpenTensesGuide.addEventListener("click", () => this.openTensesGuide());
    }
    if (this.dom.btnCloseTensesGuide) {
      this.dom.btnCloseTensesGuide.addEventListener("click", () => this.dom.tensesGuideModal.classList.add("hidden"));
    }

    // Khung Bài Đọc & Dẫn Chứng Actions
    if (this.dom.btnHighlightEvidence) {
      this.dom.btnHighlightEvidence.addEventListener("click", () => this.highlightEvidenceInPassage());
    }
    if (this.dom.btnTogglePassage) {
      this.dom.btnTogglePassage.addEventListener("click", () => this.togglePassageView());
    }
    if (this.dom.btnCardStudyTense) {
      this.dom.btnCardStudyTense.addEventListener("click", () => {
        if (this.currentMode === "tenses") {
          this.openTensesGuide();
        } else {
          this.highlightEvidenceInPassage();
        }
      });
    }

    // Dictation Speed Controls (0.75x, 1.0x, 1.25x)
    const setSpeed = (spd) => {
      this.speechRate = spd;
      [this.dom.btnSpeed075, this.dom.btnSpeed100, this.dom.btnSpeed125].forEach(btn => {
        if (btn) btn.classList.toggle("active", parseFloat(btn.dataset.speed) === spd);
      });
      this.speakCurrentItem();
    };
    if (this.dom.btnSpeed075) this.dom.btnSpeed075.addEventListener("click", () => setSpeed(0.75));
    if (this.dom.btnSpeed100) this.dom.btnSpeed100.addEventListener("click", () => setSpeed(1.0));
    if (this.dom.btnSpeed125) this.dom.btnSpeed125.addEventListener("click", () => setSpeed(1.25));

    // Speaker Buttons (Phát âm cả câu và phát âm riêng từ trên mọi thẻ bài)
    document.querySelectorAll(".btn-speak-sentence, .btn-dict-replay-main, #btnSpeakVocab, #btnSpeakTenses, #btnSpeakColloc, #btnSpeakUpgrade, #btnSpeakDictation, #btnSpeakGrammar").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.speakCurrentSentence();
      });
    });

    document.querySelectorAll(".btn-speak-word, .btn-dict-replay-word, #btnSpeakVocabWord, #btnSpeakTensesWord, #btnSpeakCollocWord, #btnSpeakUpgradeWord, #btnSpeakDictationWord, #btnSpeakGrammarWord, #btnSpeakWord").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.speakCurrentWord();
      });
    });

    if (this.dom.btnSpeakModal) {
      this.dom.btnSpeakModal.addEventListener("click", () => this.speakCurrentWord());
    }

    // Mistake Vault Actions
    if (this.dom.btnCloseMistakeVault) {
      this.dom.btnCloseMistakeVault.addEventListener("click", () => this.dom.mistakeVaultModal.classList.add("hidden"));
    }
    if (this.dom.btnSrsPracticeNow) {
      this.dom.btnSrsPracticeNow.addEventListener("click", () => this.startSrsPractice());
    }
    if (this.dom.btnClearVault) {
      this.dom.btnClearVault.addEventListener("click", () => this.clearMistakeVault());
    }
    if (this.dom.mistakeVaultModal) {
      this.dom.mistakeVaultModal.addEventListener("click", (e) => {
        if (e.target === this.dom.mistakeVaultModal) {
          this.dom.mistakeVaultModal.classList.add("hidden");
        }
      });
    }

    // Dictation Mode Toggle & Peek
    if (this.dom.btnDictationToggle) {
      this.dom.btnDictationToggle.addEventListener("click", () => this.toggleDictationMode());
    }
    if (this.dom.btnDictReplay) {
      this.dom.btnDictReplay.addEventListener("click", () => this.speakCurrentItem());
    }
    if (this.dom.btnDictPeek) {
      this.dom.btnDictPeek.addEventListener("click", () => this.peekDictationHint());
    }

    // Custom Deck Open & Actions
    this.dom.btnOpenCustomDeck.addEventListener("click", () => this.openCustomDeckModal());
    this.dom.btnCloseCustomDeck.addEventListener("click", () => this.dom.customDeckModal.classList.add("hidden"));
    this.dom.btnCancelCustomDeck.addEventListener("click", () => this.dom.customDeckModal.classList.add("hidden"));
    this.dom.btnSaveCustomDeck.addEventListener("click", () => this.saveCustomDeck());
    this.dom.btnLoadSampleDeck.addEventListener("click", () => this.loadSampleDeck());
    this.dom.btnClearCustomDeck.addEventListener("click", () => this.clearCustomDeckData());
    this.dom.customDeckTextarea.addEventListener("input", () => this.updateCustomDeckPreview());

    // Meme Modal click đóng ngay
    this.dom.memeModal.addEventListener("click", () => {
      if (this.isMemeActive) this.dismissMeme();
    });

    // Next Question Button trong Modal Mẹo Vàng
    this.dom.btnExplNext.addEventListener("click", () => {
      this.advanceNextQuestion();
    });

    // Save Notebook Button trong Modal
    this.dom.btnSaveNotebook.addEventListener("click", () => {
      this.autoSaveTipToNotebook(this.currentChallenge);
      this.dom.btnSaveNotebook.textContent = "✓ ĐÃ LƯU VÀO SỔ TAY";
    });

    // Peek Button (Mở 1 chữ cái)
    this.dom.btnPeek.addEventListener("click", () => {
      this.revealNextHintLetter();
    });

    // Sổ Tay Bỏ Túi Mở / Đóng
    this.dom.btnOpenNotebook.addEventListener("click", () => {
      this.openNotebook("all");
    });
    this.dom.btnCloseNotebook.addEventListener("click", () => {
      this.dom.notebookModal.classList.add("hidden");
    });
    this.dom.notebookModal.addEventListener("click", (e) => {
      if (e.target === this.dom.notebookModal) {
        this.dom.notebookModal.classList.add("hidden");
      }
    });

    // Filter Buttons trong Sổ Tay
    const filterButtons = document.querySelectorAll(".nb-filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.openNotebook(btn.dataset.filter);
      });
    });

    // Custom Meme Upload
    this.dom.customMemeFiles.addEventListener("change", (e) => {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        files.forEach(file => {
          const objectUrl = URL.createObjectURL(file);
          const caption = file.name.replace(/\.[^/.]+$/, "").toUpperCase();
          this.memesList.unshift({ url: objectUrl, caption: caption });
        });
        this.updateMemeCountUI();
      }
    });

    // Custom Audio Upload (Local MP3 File)
    if (this.dom.customAudioInput) {
      this.dom.customAudioInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file);
          const fileName = file.name.replace(/\.[^/.]+$/, "");
          this.playOnlineMusic(url, `MP3: ${fileName}`);
        }
      });
    }

    // Online Music Modal Triggers
    if (this.dom.btnOpenOnlineMusic) {
      this.dom.btnOpenOnlineMusic.addEventListener("click", () => {
        this.dom.onlineMusicModal.classList.remove("hidden");
      });
    }
    if (this.dom.currentTrackPill) {
      this.dom.currentTrackPill.addEventListener("click", () => {
        this.dom.onlineMusicModal.classList.remove("hidden");
      });
    }
    if (this.dom.btnCloseOnlineMusic) {
      this.dom.btnCloseOnlineMusic.addEventListener("click", () => {
        this.dom.onlineMusicModal.classList.add("hidden");
      });
    }
    if (this.dom.btnSaveCloseOnlineMusic) {
      this.dom.btnSaveCloseOnlineMusic.addEventListener("click", () => {
        this.dom.onlineMusicModal.classList.add("hidden");
      });
    }
    if (this.dom.onlineMusicModal) {
      this.dom.onlineMusicModal.addEventListener("click", (e) => {
        if (e.target === this.dom.onlineMusicModal) {
          this.dom.onlineMusicModal.classList.add("hidden");
        }
      });
    }

    // Play Online Music Button
    if (this.dom.btnPlayOnlineMusic) {
      this.dom.btnPlayOnlineMusic.addEventListener("click", () => {
        const url = this.dom.onlineMusicUrlInput ? this.dom.onlineMusicUrlInput.value.trim() : "";
        if (url) {
          this.playOnlineMusic(url);
        } else {
          if (this.dom.onlineMusicStatusText) {
            this.dom.onlineMusicStatusText.innerHTML = "⚠️ Vui lòng dán link YouTube, SoundCloud hoặc MP3 trước!";
          }
        }
      });
    }

    // Stop Online Music Button
    if (this.dom.btnStopOnlineMusic) {
      this.dom.btnStopOnlineMusic.addEventListener("click", () => {
        this.stopAllMusic();
      });
    }

    // Floating Music Widget Controls (Thu nhỏ, Ẩn/Hiện, Scrubber Tua & Mini Volume)
    if (this.dom.btnToggleMinimizeWidget) {
      this.dom.btnToggleMinimizeWidget.addEventListener("click", () => {
        if (this.dom.floatingMusicWidget) {
          this.dom.floatingMusicWidget.classList.toggle("minimized");
          const isMin = this.dom.floatingMusicWidget.classList.contains("minimized");
          this.dom.btnToggleMinimizeWidget.textContent = isMin ? "🗖" : "🗕";
          this.dom.btnToggleMinimizeWidget.title = isMin ? "Mở rộng player" : "Thu nhỏ player";
        }
      });
    }

    if (this.dom.btnCloseFloatingWidget) {
      this.dom.btnCloseFloatingWidget.addEventListener("click", () => {
        if (this.dom.floatingMusicWidget) {
          this.dom.floatingMusicWidget.classList.add("hidden");
        }
      });
    }

    if (this.dom.btnSeekPlayToggle) {
      this.dom.btnSeekPlayToggle.addEventListener("click", () => {
        this.toggleBgm();
      });
    }

    if (this.dom.btnSeekBackward) {
      this.dom.btnSeekBackward.addEventListener("click", () => {
        this.seekRelative(-10);
      });
    }

    if (this.dom.btnSeekForward) {
      this.dom.btnSeekForward.addEventListener("click", () => {
        this.seekRelative(10);
      });
    }

    if (this.dom.playerProgressBar) {
      this.dom.playerProgressBar.addEventListener("input", (e) => {
        this.isUserDraggingSeek = true;
        const val = parseFloat(e.target.value);
        if (this.dom.seekCurrentTime) {
          this.dom.seekCurrentTime.textContent = this.formatTime(val);
        }
        if (this.dom.seekProgressFill && this.currentTrackDuration > 0) {
          const pct = Math.min(100, Math.max(0, (val / this.currentTrackDuration) * 100));
          this.dom.seekProgressFill.style.width = pct + "%";
        }
      });

      this.dom.playerProgressBar.addEventListener("change", (e) => {
        const val = parseFloat(e.target.value);
        this.seekToSeconds(val);
        setTimeout(() => {
          this.isUserDraggingSeek = false;
        }, 300);
      });
    }

    if (this.dom.widgetVolSlider) {
      this.dom.widgetVolSlider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        this.setBgmVolume(val);
      });
    }

    // Audio BGM Toggle (Bật / Tắt Nhạc Nền)
    this.dom.btnAudioToggle.addEventListener("click", () => {
      this.toggleBgm();
    });

    // Volume Slider (Đồng bộ âm lượng cho cả YouTube, Spotify, SoundCloud & MP3)
    this.dom.volSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      this.setBgmVolume(val);
    });
  }

  // --- ONLINE BACKGROUND MUSIC MANAGER (SPOTIFY / YOUTUBE / SOUNDCLOUD / MP3) ---
  initOnlineMusic() {
    // 1. Phục hồi volume đã lưu
    const savedVol = localStorage.getItem("antigravity_bgm_volume");
    if (savedVol !== null) {
      this.bgmVolume = parseFloat(savedVol);
      if (this.dom.volSlider) this.dom.volSlider.value = this.bgmVolume;
      if (this.dom.widgetVolSlider) this.dom.widgetVolSlider.value = this.bgmVolume;
    }

    // 2. Phục hồi bài hát đã lưu
    const savedUrl = localStorage.getItem("antigravity_bgm_url");
    const savedTitle = localStorage.getItem("antigravity_bgm_title");
    if (savedUrl && this.dom.onlineMusicUrlInput) {
      this.dom.onlineMusicUrlInput.value = savedUrl;
    }
    if (savedTitle && this.dom.currentTrackName) {
      this.currentTrackTitle = savedTitle;
      this.dom.currentTrackName.textContent = savedTitle;
    }

    // 3. Đăng ký hook cho YouTube API sẵn sàng
    window.onYouTubeIframeAPIReady = () => {
      this.isYtReady = true;
      if (this.pendingYtVideoId) {
        this.createOrLoadYouTubePlayer(this.pendingYtVideoId);
        this.pendingYtVideoId = null;
      }
    };

    // 4. Đăng ký hook cho Spotify iFrame API sẵn sàng
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      window.SpotifyIframeApi = IFrameAPI;
    };
  }

  formatTime(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) return "00:00";
    const sec = Math.floor(totalSeconds);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  updateFloatingWidgetUI(source, title) {
    if (!this.dom.floatingMusicWidget) return;

    // Hiển thị khung widget floating
    this.dom.floatingMusicWidget.classList.remove("hidden");

    // Dynamic border & glow theo nguồn phát
    this.dom.floatingMusicWidget.classList.remove("source-youtube", "source-soundcloud", "source-spotify", "source-html5");
    this.dom.floatingMusicWidget.classList.add(`source-${source}`);

    // Brand badge
    const brandMap = {
      youtube: { icon: "🔴", name: "YOUTUBE" },
      soundcloud: { icon: "🟠", name: "SOUNDCLOUD" },
      spotify: { icon: "🟢", name: "SPOTIFY" },
      html5: { icon: "🟣", name: "MP3 AUDIO" }
    };
    const brand = brandMap[source] || { icon: "🎵", name: "ONLINE MUSIC" };
    if (this.dom.playerBrandIcon) this.dom.playerBrandIcon.textContent = brand.icon;
    if (this.dom.playerBrandName) this.dom.playerBrandName.textContent = brand.name;
    if (this.dom.floatingTrackTitle) this.dom.floatingTrackTitle.textContent = title || "Đang phát nhạc...";

    // Ẩn / Hiện đúng slot media trong màn hình widget
    const slots = {
      youtube: this.dom.youtubePlayerContainer,
      soundcloud: this.dom.soundcloudPlayerContainer,
      spotify: this.dom.spotifyPlayerContainer,
      html5: this.dom.audioVisualizerSlot
    };

    Object.entries(slots).forEach(([key, slotElem]) => {
      if (slotElem) {
        if (key === source) {
          slotElem.classList.remove("hidden");
        } else {
          slotElem.classList.add("hidden");
        }
      }
    });

    if (source === "html5" && this.dom.audioVisualizerName) {
      this.dom.audioVisualizerName.textContent = title || "MP3 Track";
    }

    // Spotify đã có đầy đủ giao diện player riêng (Phát/Dừng, Tua thời gian, Âm lượng)
    // ➔ Ẩn bộ điều khiển custom (floatingPlayerControls) và thông báo preview khi phát Spotify
    if (this.dom.floatingPlayerControls) {
      if (source === "spotify") {
        this.dom.floatingPlayerControls.classList.add("hidden");
      } else {
        this.dom.floatingPlayerControls.classList.remove("hidden");
      }
    }

    // Luôn ẩn thông báo preview vì người dùng đã đăng nhập hoặc nghe trực tiếp
    if (this.dom.spotifyEmbedNotice) {
      this.dom.spotifyEmbedNotice.classList.add("hidden");
    }

    // Nút play/pause (chỉ áp dụng cho YouTube, SoundCloud, MP3)
    if (this.dom.btnSeekPlayToggle) {
      this.dom.btnSeekPlayToggle.textContent = this.bgmPlaying ? "⏸" : "▶";
    }
  }

  startProgressTracker() {
    this.stopProgressTracker();
    // Spotify tự quản lý tiến độ bài hát bên trong iframe, không cần tracker
    if (this.currentMusicType === "spotify") return;

    this.progressInterval = setInterval(() => {
      if (!this.bgmPlaying || this.isBgmDucked) return;

      if (this.currentMusicType === "youtube" && this.ytPlayer) {
        try {
          if (typeof this.ytPlayer.getCurrentTime === "function" && typeof this.ytPlayer.getDuration === "function") {
            const cur = this.ytPlayer.getCurrentTime() || 0;
            const dur = this.ytPlayer.getDuration() || 0;
            this.updateProgressUI(cur, dur);
          }
        } catch (e) {}
      } else if (this.currentMusicType === "soundcloud" && this.scWidget) {
        try {
          this.scWidget.getPosition((posMs) => {
            this.scWidget.getDuration((durMs) => {
              const cur = (posMs || 0) / 1000;
              const dur = (durMs || 0) / 1000;
              this.updateProgressUI(cur, dur);
            });
          });
        } catch (e) {}
      } else if (this.currentMusicType === "html5" && this.dom.customAudioElem) {
        const cur = this.dom.customAudioElem.currentTime || 0;
        const dur = this.dom.customAudioElem.duration || 0;
        this.updateProgressUI(cur, dur);
      }
    }, 500);
  }

  stopProgressTracker() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  updateProgressUI(curSec, durSec) {
    this.currentTrackTime = curSec;
    this.currentTrackDuration = durSec;

    if (this.dom.seekCurrentTime && !this.isUserDraggingSeek) {
      this.dom.seekCurrentTime.textContent = this.formatTime(curSec);
    }
    if (this.dom.seekTotalDuration && durSec > 0) {
      this.dom.seekTotalDuration.textContent = this.formatTime(durSec);
    }

    if (this.dom.playerProgressBar && !this.isUserDraggingSeek) {
      this.dom.playerProgressBar.max = durSec > 0 ? durSec : 100;
      this.dom.playerProgressBar.value = curSec;
    }

    if (this.dom.seekProgressFill && !this.isUserDraggingSeek && durSec > 0) {
      const pct = Math.min(100, Math.max(0, (curSec / durSec) * 100));
      this.dom.seekProgressFill.style.width = pct + "%";
    }
  }

  seekToSeconds(targetSec) {
    const safeTarget = Math.max(0, targetSec);
    this.currentTrackTime = safeTarget;

    if (this.currentMusicType === "youtube" && this.ytPlayer) {
      try {
        if (typeof this.ytPlayer.seekTo === "function") {
          this.ytPlayer.seekTo(safeTarget, true);
        }
      } catch (e) {}
    } else if (this.currentMusicType === "soundcloud" && this.scWidget) {
      try {
        if (typeof this.scWidget.seekTo === "function") {
          this.scWidget.seekTo(safeTarget * 1000);
        }
      } catch (e) {}
    } else if (this.currentMusicType === "html5" && this.dom.customAudioElem) {
      try {
        this.dom.customAudioElem.currentTime = safeTarget;
      } catch (e) {}
    }

    this.updateProgressUI(safeTarget, this.currentTrackDuration);
  }

  seekRelative(deltaSec) {
    const maxDur = this.currentTrackDuration > 0 ? this.currentTrackDuration : 99999;
    const newTarget = Math.max(0, Math.min(maxDur, (this.currentTrackTime || 0) + deltaSec));
    this.seekToSeconds(newTarget);
  }

  extractYouTubeId(url) {
    if (!url) return null;
    const reg = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/)|music\.youtube\.com\/watch\?v=)([\w-]{11})/;
    const match = url.match(reg);
    return match ? match[1] : null;
  }

  isSoundCloudUrl(url) {
    return url && (url.includes("soundcloud.com/") || url.includes("on.soundcloud.com/"));
  }

  extractSpotifyInfo(url) {
    if (!url) return null;
    // URL web: https://open.spotify.com/(intl-xx/)?(track|playlist|album|artist|episode)/([a-zA-Z0-9]+)
    const webMatch = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|playlist|album|artist|episode)\/([a-zA-Z0-9]+)/);
    if (webMatch) {
      return { type: webMatch[1], id: webMatch[2], uri: `spotify:${webMatch[1]}:${webMatch[2]}` };
    }
    // URI spotify:track:...
    const uriMatch = url.match(/spotify:(track|playlist|album|artist|episode):([a-zA-Z0-9]+)/);
    if (uriMatch) {
      return { type: uriMatch[1], id: uriMatch[2], uri: `spotify:${uriMatch[1]}:${uriMatch[2]}` };
    }
    return null;
  }

  playOnlineMusic(rawUrl, customTitle = null) {
    if (!rawUrl) return;
    const url = rawUrl.trim();
    if (!url) return;

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const spotifyInfo = this.extractSpotifyInfo(url);
    const ytId = this.extractYouTubeId(url);
    const isSc = this.isSoundCloudUrl(url);

    let detectedTitle = customTitle;

    if (spotifyInfo) {
      // --- XỬ LÝ SPOTIFY ---
      if (!detectedTitle) detectedTitle = `Spotify (${spotifyInfo.type.toUpperCase()})`;
      this.currentMusicType = "spotify";
      this.pauseHtml5Audio();
      this.pauseYouTube();
      this.pauseSoundCloud();
      this.currentTrackTitle = detectedTitle;
      this.playSpotify(spotifyInfo);
    } else if (ytId) {
      // --- XỬ LÝ YOUTUBE ---
      if (!detectedTitle) detectedTitle = `YouTube (${ytId})`;
      this.currentMusicType = "youtube";
      this.pauseHtml5Audio();
      this.pauseSoundCloud();
      this.pauseSpotify();
      this.currentTrackTitle = detectedTitle;
      this.playYouTube(ytId);
    } else if (isSc) {
      // --- XỬ LÝ SOUNDCLOUD ---
      if (!detectedTitle) detectedTitle = "SoundCloud Track";
      this.currentMusicType = "soundcloud";
      this.pauseHtml5Audio();
      this.pauseYouTube();
      this.pauseSpotify();
      this.currentTrackTitle = detectedTitle;
      this.playSoundCloud(url);
    } else {
      // --- XỬ LÝ LINK MP3 / AUDIO STREAM ---
      if (!detectedTitle) {
        const parts = url.split("/");
        detectedTitle = parts[parts.length - 1] || "Online Audio Stream";
      }
      this.currentMusicType = "html5";
      this.pauseYouTube();
      this.pauseSoundCloud();
      this.pauseSpotify();
      this.currentTrackTitle = detectedTitle;
      this.playHtml5Audio(url);
    }

    this.bgmPlaying = true;
    if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
    if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
    if (this.dom.currentTrackName) this.dom.currentTrackName.textContent = detectedTitle;
    if (this.dom.onlineMusicStatusText) {
      this.dom.onlineMusicStatusText.innerHTML = `🟢 Đang phát: <strong>${detectedTitle}</strong>`;
    }

    localStorage.setItem("antigravity_bgm_url", url);
    localStorage.setItem("antigravity_bgm_title", detectedTitle);
  }

  playSpotify(spotifyInfo) {
    this.updateFloatingWidgetUI("spotify", this.currentTrackTitle);

    const body = document.getElementById("spotifyWidgetBody");
    if (!body) return;

    const embedUrl = `https://open.spotify.com/embed/${spotifyInfo.type}/${spotifyInfo.id}?utm_source=generator&theme=0`;
    body.innerHTML = `<iframe id="spotifyIframe" style="border-radius:10px" src="${embedUrl}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

    // Tích hợp Spotify iFrame Controller nếu có
    if (window.SpotifyIframeApi) {
      try {
        window.SpotifyIframeApi.createController(body, {
          uri: spotifyInfo.uri,
          width: '100%',
          height: 152
        }, (EmbedController) => {
          this.spotifyEmbedController = EmbedController;
          EmbedController.play();
        });
      } catch (e) {
        console.warn("Spotify Iframe API error:", e);
      }
    }
  }

  playYouTube(videoId) {
    this.updateFloatingWidgetUI("youtube", this.currentTrackTitle);

    if (!window.YT || !window.YT.Player) {
      this.pendingYtVideoId = videoId;
      return;
    }
    this.createOrLoadYouTubePlayer(videoId);
  }

  createOrLoadYouTubePlayer(videoId) {
    this.updateFloatingWidgetUI("youtube", this.currentTrackTitle);

    const container = document.getElementById("youtubePlayerContainer");
    if (!container) return;

    if (this.ytPlayer && typeof this.ytPlayer.loadVideoById === "function") {
      try {
        this.ytPlayer.loadVideoById({ videoId: videoId });
        this.ytPlayer.unMute();
        this.ytPlayer.setVolume(this.bgmVolume * 100);
        this.ytPlayer.playVideo();
        this.startProgressTracker();
        return;
      } catch (err) {
        console.warn("YouTube player reload error:", err);
      }
    }

    container.innerHTML = '<div id="ytIframeSlot"></div>';
    try {
      this.ytPlayer = new YT.Player('ytIframeSlot', {
        height: '190',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin || "http://localhost"
        },
        events: {
          onReady: (event) => {
            try {
              event.target.unMute();
              event.target.setVolume(this.bgmVolume * 100);
              event.target.playVideo();
              this.startProgressTracker();
            } catch (e) {}
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              this.bgmPlaying = true;
              if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
              if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
              this.startProgressTracker();
            } else if (event.data === YT.PlayerState.PAUSED) {
              if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "▶";
            }
          },
          onError: (e) => {
            if (this.dom.onlineMusicStatusText) {
              this.dom.onlineMusicStatusText.innerHTML = `⚠️ Video này có thể bị chặn nhúng hoặc lỗi bản quyền. Hãy thử link khác!`;
            }
          }
        }
      });
    } catch (e) {
      console.warn("YouTube player init error:", e);
    }
  }

  playSoundCloud(trackUrl) {
    this.updateFloatingWidgetUI("soundcloud", this.currentTrackTitle);

    const container = document.getElementById("soundcloudPlayerContainer");
    if (!container) return;

    container.innerHTML = `<iframe id="scWidgetIframe" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>`;
    
    setTimeout(() => {
      const iframe = document.getElementById("scWidgetIframe");
      if (iframe && window.SC && window.SC.Widget) {
        try {
          this.scWidget = window.SC.Widget(iframe);
          this.scWidget.bind(window.SC.Widget.Events.READY, () => {
            this.scWidget.setVolume(this.bgmVolume * 100);
            this.scWidget.play();
            this.startProgressTracker();
          });
          this.scWidget.bind(window.SC.Widget.Events.PLAY, () => {
            this.bgmPlaying = true;
            if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
            if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
            this.startProgressTracker();
          });
          this.scWidget.bind(window.SC.Widget.Events.PAUSE, () => {
            if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "▶";
          });
        } catch (e) {
          console.warn("SoundCloud widget err:", e);
        }
      }
    }, 600);
  }

  playHtml5Audio(url) {
    this.updateFloatingWidgetUI("html5", this.currentTrackTitle);
    if (!this.dom.customAudioElem) return;
    this.dom.customAudioElem.src = url;
    this.dom.customAudioElem.volume = this.bgmVolume;
    this.dom.customAudioElem.muted = false;
    this.dom.customAudioElem.play().then(() => {
      this.bgmPlaying = true;
      if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
      if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
      this.startProgressTracker();
    }).catch(e => {
      console.warn("HTML5 audio playback err:", e);
    });

    this.dom.customAudioElem.onplay = () => {
      this.bgmPlaying = true;
      if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
      if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
      this.startProgressTracker();
    };
    this.dom.customAudioElem.onpause = () => {
      if (!this.isBgmDucked && this.dom.btnSeekPlayToggle) {
        this.dom.btnSeekPlayToggle.textContent = "▶";
      }
    };
  }

  pauseYouTube() {
    if (this.ytPlayer) {
      try {
        if (typeof this.ytPlayer.mute === "function") this.ytPlayer.mute();
        if (typeof this.ytPlayer.setVolume === "function") this.ytPlayer.setVolume(0);
        if (typeof this.ytPlayer.pauseVideo === "function") this.ytPlayer.pauseVideo();
      } catch (e) {}
    }
    const iframe = document.querySelector("#youtubePlayerContainer iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "mute", args: [] }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), "*");
      } catch (e) {}
    }
  }

  resumeYouTube() {
    if (this.ytPlayer) {
      try {
        if (typeof this.ytPlayer.unMute === "function") this.ytPlayer.unMute();
        if (typeof this.ytPlayer.setVolume === "function") this.ytPlayer.setVolume(this.bgmVolume * 100);
        if (typeof this.ytPlayer.playVideo === "function") this.ytPlayer.playVideo();
      } catch (e) {}
    }
    const iframe = document.querySelector("#youtubePlayerContainer iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "unMute", args: [] }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "setVolume", args: [this.bgmVolume * 100] }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
      } catch (e) {}
    }
  }

  pauseSoundCloud() {
    if (this.scWidget) {
      try {
        if (typeof this.scWidget.setVolume === "function") this.scWidget.setVolume(0);
        if (typeof this.scWidget.pause === "function") this.scWidget.pause();
      } catch (e) {}
    }
  }

  resumeSoundCloud() {
    if (this.scWidget) {
      try {
        if (typeof this.scWidget.setVolume === "function") this.scWidget.setVolume(this.bgmVolume * 100);
        if (typeof this.scWidget.play === "function") this.scWidget.play();
      } catch (e) {}
    }
  }

  pauseSpotify() {
    if (this.spotifyEmbedController) {
      try {
        this.spotifyEmbedController.pause();
      } catch (e) {}
    }
    const iframe = document.querySelector("#spotifyWidgetBody iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ command: "pause" }, "*");
      } catch (e) {}
    }
  }

  resumeSpotify() {
    if (this.spotifyEmbedController) {
      try {
        this.spotifyEmbedController.resume();
      } catch (e) {}
    }
    const iframe = document.querySelector("#spotifyWidgetBody iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ command: "resume" }, "*");
        iframe.contentWindow.postMessage({ command: "play" }, "*");
      } catch (e) {}
    }
  }

  pauseHtml5Audio() {
    if (this.dom.customAudioElem) {
      try {
        this.dom.customAudioElem.muted = true;
        this.dom.customAudioElem.pause();
      } catch (e) {}
    }
  }

  resumeHtml5Audio() {
    if (this.dom.customAudioElem && this.dom.customAudioElem.src) {
      try {
        this.dom.customAudioElem.muted = false;
        this.dom.customAudioElem.volume = this.bgmVolume;
        this.dom.customAudioElem.play().catch(() => {});
      } catch (e) {}
    }
  }

  pauseBgmTemporary() {
    this.pauseYouTube();
    this.pauseSoundCloud();
    this.pauseSpotify();
    this.pauseHtml5Audio();
  }

  resumeBgmTemporary() {
    if (this.currentMusicType === "youtube") {
      this.resumeYouTube();
    } else if (this.currentMusicType === "soundcloud") {
      this.resumeSoundCloud();
    } else if (this.currentMusicType === "spotify") {
      this.resumeSpotify();
    } else if (this.currentMusicType === "html5") {
      this.resumeHtml5Audio();
    }
  }

  stopAllMusic() {
    this.pauseYouTube();
    this.pauseSoundCloud();
    this.pauseSpotify();
    this.pauseHtml5Audio();
    this.bgmPlaying = false;
    this.isBgmDucked = false;
    this.stopProgressTracker();
    if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "▶ BẬT NHẠC";
    if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "▶";
    if (this.dom.onlineMusicStatusText) {
      this.dom.onlineMusicStatusText.innerHTML = "⏹ Đã dừng phát nhạc.";
    }
  }

  toggleBgm() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.bgmPlaying) {
      this.stopAllMusic();
    } else {
      if (this.currentMusicType === "youtube") {
        this.resumeYouTube();
        this.bgmPlaying = true;
        if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
        if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
        this.startProgressTracker();
        return;
      } else if (this.currentMusicType === "soundcloud") {
        this.resumeSoundCloud();
        this.bgmPlaying = true;
        if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
        if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
        this.startProgressTracker();
        return;
      } else if (this.currentMusicType === "spotify") {
        this.resumeSpotify();
        this.bgmPlaying = true;
        if (this.dom.floatingMusicWidget) this.dom.floatingMusicWidget.classList.remove("hidden");
        if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
        if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
        return;
      } else if (this.currentMusicType === "html5") {
        this.resumeHtml5Audio();
        this.bgmPlaying = true;
        if (this.dom.btnAudioToggle) this.dom.btnAudioToggle.textContent = "⏸ TẮT NHẠC";
        if (this.dom.btnSeekPlayToggle) this.dom.btnSeekPlayToggle.textContent = "⏸";
        this.startProgressTracker();
        return;
      }

      // Nếu chưa có bài nào phát, thử lấy từ ô input hoặc mở modal
      const val = this.dom.onlineMusicUrlInput ? this.dom.onlineMusicUrlInput.value.trim() : "";
      if (val) {
        this.playOnlineMusic(val, this.currentTrackTitle !== "Chưa phát" ? this.currentTrackTitle : null);
      } else {
        if (this.dom.onlineMusicModal) this.dom.onlineMusicModal.classList.remove("hidden");
      }
    }
  }

  setBgmVolume(val) {
    this.bgmVolume = val;
    localStorage.setItem("antigravity_bgm_volume", val);
    if (this.dom.volSlider) {
      this.dom.volSlider.value = val;
    }
    if (this.dom.widgetVolSlider) {
      this.dom.widgetVolSlider.value = val;
    }
    if (this.dom.customAudioElem) {
      this.dom.customAudioElem.volume = val;
    }
    if (this.ytPlayer && typeof this.ytPlayer.setVolume === "function") {
      try { this.ytPlayer.setVolume(val * 100); } catch (e) {}
    }
    if (this.scWidget && typeof this.scWidget.setVolume === "function") {
      try { this.scWidget.setVolume(val * 100); } catch (e) {}
    }
  }
}

// Khởi chạy ứng dụng
window.addEventListener("DOMContentLoaded", () => {
  window.unifiedGame = new UnifiedTypingGame();
  window.game = window.unifiedGame;
});
