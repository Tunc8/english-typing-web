/**
 * HỆ THỐNG BỘ ĐỀ READING HỌC THUẬT THỰC TẾ (ACADEMIC READING MASTERY)
 * Bao gồm bài đọc hoàn chỉnh chia Paragraphs A, B, C, D...
 * Kèm các dạng câu hỏi: Summary Completion, Paraphrase Matching, True/False Trap Clues, Discourse Cloze
 * Đầy đủ vị trí dẫn chứng (Evidence Locator), Bảng Paraphrase và Bóc tách cạm bẫy
 */

window.READING_PASSAGES_DATA = {
  "passage_1": {
    id: "passage_1",
    code: "READING PASSAGE 1",
    topic: "KHOA HỌC MÔI TRƯỜNG",
    title: "The Hidden Threat of Marine Microplastics",
    subtitle: "Tác Động Khôn Lường Của Vi Nhựa Đối Với Hệ Sinh Thái Biển & Sức Khỏe Con Người",
    paragraphs: [
      {
        tag: "A",
        text: "Since the mass production of synthetic polymers began in the mid-twentieth century, plastics have become indispensable to modern human civilization. Their exceptional durability, lightweight structure, and economic affordability have catalyzed innovations across myriad industries, from medical appliances to food preservation. However, this very persistence poses an unprecedented ecological catastrophe when plastics enter the marine environment. Unlike natural organic matter, synthetic plastics do not undergo rapid biological decay; rather, prolonged exposure to solar ultraviolet radiation and ocean turbulence causes them to degrade into minute fragments."
      },
      {
        tag: "B",
        text: "These minuscule particles, generally defined by researchers as pieces measuring less than five millimeters in diameter, are classified as microplastics. Marine scientists categorize them into primary microplastics—manufactured intentionally for commercial applications such as cosmetics and abrasive industrial cleansers—and secondary microplastics, which derive from the continuous physical fragmentation of larger debris like synthetic textiles, fishing nets, and single-use beverage containers. Alarmingly, due to their hydrophobic surface properties, microplastics act as potent chemical sponges, absorbing hydrophobic persistent organic pollutants (POPs) and toxic heavy metals from the surrounding seawater at concentrations several million times higher than ambient levels."
      },
      {
        tag: "C",
        text: "The physiological hazard posed to marine organisms is severe and multifaceted. Filter-feeding zooplankton, fish larvae, and seabirds frequently confuse these brightly colored plastic particles with natural prey, such as fish eggs or plankton. Ingestion invariably triggers pseudo-satiation, an insidious condition where animals feel full despite receiving zero nutritional sustenance, leading to severe intestinal obstruction and eventual starvation. Furthermore, toxic chemical additives—including phthalates and bisphenol A (BPA)—gradually leach into the fatty tissues of marine organisms, causing severe endocrine disruption and bioaccumulating as they ascend through trophic levels up to apex predators."
      },
      {
        tag: "D",
        text: "Addressing this pervasive environmental challenge demands comprehensive international collaboration and multidisciplinary innovation. Scientists emphasize that merely skimming debris from ocean gyres is mathematically inadequate; genuine mitigation necessitates tackling the problem at its terrestrial source. Regulatory mandates prohibiting non-essential primary microbeads, investments in compostable bio-based polymers, and the global implementation of extended producer responsibility (EPR) frameworks represent indispensable components of any viable long-term solution to preserve global oceanic ecosystems."
      }
    ],
    questions: [
      {
        id: "p1_q1",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Under prolonged sunlight and wave turbulence, synthetic plastic debris begins to (break down) ________ into smaller pieces instead of decaying naturally.",
        targetWord: "DEGRADE",
        word: "DEGRADE",
        verbPrompt: "DEGRADE",
        meaning: "Phân rã thành các mảnh nhỏ (degrade)",
        ipa: "/dɪˈɡreɪd/",
        evidence: {
          paragraph: "Paragraph A",
          lines: "Lines 6-8",
          quote: "...solar ultraviolet radiation and ocean turbulence causes them to degrade into minute fragments."
        },
        paraphraseMap: [
          { questionKey: "break down into smaller pieces", passageKey: "degrade into minute fragments" },
          { questionKey: "prolonged sunlight and wave turbulence", passageKey: "solar ultraviolet radiation and ocean turbulence" }
        ],
        readingTrap: "Bẫy từ 'decay': Nhiều bạn nhầm lẫn giữa 'decay' (phân hủy sinh học tự nhiên của chất hữu cơ) và 'degrade' (phân rã vật lý của hạt nhựa tổng hợp). Bài đọc nhấn mạnh nhựa KHÔNG decay tự nhiên mà DEGRADE thành hạt nhỏ.",
        strategyTip: "Kỹ thuật Scanning: Quét từ khóa 'solar ultraviolet' hoặc 'turbulence' ở cuối Đoạn A để định vị câu chứa động từ chỉ sự phân rã.",
        goldenTip: {
          rule: "Summary Completion: Chỉ điền đúng 1 từ xuất hiện nguyên văn trong bài đọc (NO MORE THAN ONE WORD).",
          theTrap: "Điền từ ngoài bài đọc hoặc tự biến đổi sai từ loại (ví dụ: điền degradation thay vì degrade).",
          memoryHack: "💡 Đọc câu hỏi ➔ Xác định từ loại cần điền (động từ sau 'to') ➔ Quét từ khóa song sinh trong bài ➔ Bê nguyên từ gốc DEGRADE!",
          example: "Plastics degrade into microplastics over decades."
        }
      },
      {
        id: "p1_q2",
        taskType: "Academic Paraphrase Matching",
        taskBadge: "🔄 BẮT CẶP PARAPHRASE TRONG BÀI",
        questionPrompt: "Microplastics possess a dangerous chemical property: they absorb extremely (poisonous) ________ substances and heavy metals from seawater.",
        targetWord: "TOXIC",
        word: "TOXIC",
        verbPrompt: "TOXIC",
        meaning: "Độc hại nguy hiểm (toxic = poisonous)",
        ipa: "/ˈtɒk.sɪk/",
        evidence: {
          paragraph: "Paragraph B",
          lines: "Lines 7-9",
          quote: "...absorbing hydrophobic persistent organic pollutants (POPs) and toxic heavy metals from the surrounding seawater..."
        },
        paraphraseMap: [
          { questionKey: "extremely poisonous substances", passageKey: "toxic heavy metals & pollutants" },
          { questionKey: "chemical property", passageKey: "hydrophobic surface properties" }
        ],
        readingTrap: "Bẫy từ vựng đồng nghĩa: Câu hỏi dùng tính từ phổ thông 'poisonous', trong khi bài thi học thuật luôn paraphrase thành 'toxic'. Nếu chỉ scan từ 'poisonous', bạn sẽ không bao giờ tìm thấy trong bài!",
        strategyTip: "Lập bảng Paraphrase: Luôn chuẩn bị sẵn các cặp từ đồng nghĩa kinh điển: poisonous = toxic = hazardous = venomous = lethal.",
        goldenTip: {
          rule: "Kỹ năng Paraphrasing: Người ra đề IELTS luôn thay đổi từ vựng câu hỏi bằng từ đồng nghĩa học thuật trong bài đọc.",
          theTrap: "Cố chấp tìm đúng chữ 'poisonous' trong bài đọc sẽ bị mất thời gian vô ích.",
          memoryHack: "💡 POISONOUS trong đề ➔ Quét mắt tìm ngay TOXIC trong bài đọc!",
          example: "Toxic chemicals accumulate in the marine food chain."
        }
      },
      {
        id: "p1_q3",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Marine creatures ingest plastic waste because they mistake these colorful particles for their natural (food) ________.",
        targetWord: "PREY",
        word: "PREY",
        verbPrompt: "PREY",
        meaning: "Con mồi / Thức ăn tự nhiên (prey)",
        ipa: "/preɪ/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 2-3",
          quote: "...frequently confuse these brightly colored plastic particles with natural prey, such as fish eggs or plankton."
        },
        paraphraseMap: [
          { questionKey: "mistake ... for", passageKey: "confuse ... with" },
          { questionKey: "natural food", passageKey: "natural prey" }
        ],
        readingTrap: "Bẫy cấu trúc đồng nghĩa: 'mistake A for B' được bài đọc diễn đạt lại bằng 'confuse A with B'. Từ cần điền là danh từ sau tính từ 'natural'.",
        strategyTip: "Dự đoán từ loại: Sau 'natural' chắc chắn là một Danh từ số ít hoặc không đếm được. Trong bài đọc: 'natural prey'.",
        goldenTip: {
          rule: "Cấu trúc: Confuse X with Y = Mistake X for Y (Nhầm lẫn X với Y).",
          theTrap: "Điền 'food' hoặc 'plankton' (plankton chỉ là ví dụ 'such as', từ bao quát là PREY).",
          memoryHack: "💡 'Mistake ... for' bắt cặp với 'Confuse ... with'. Danh từ đi kèm là PREY!",
          example: "Predators hunt for their natural prey."
        }
      },
      {
        id: "p1_q4",
        taskType: "True/False/Not Given Trap Clue",
        taskBadge: "🚨 BÓC TÁCH BẪY TỪ KHÓA TỬ THẦN",
        questionPrompt: "Due to plastic ingestion, animals experience false fullness despite receiving zero (nutritional) ________ value, which leads to starvation.",
        targetWord: "NUTRITIONAL",
        word: "NUTRITIONAL",
        verbPrompt: "NUTRITIONAL",
        meaning: "Giá trị dinh dưỡng (nutritional sustenance)",
        ipa: "/njuːˈtrɪʃ.ən.əl/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 4-5",
          quote: "...an insidious condition where animals feel full despite receiving zero nutritional sustenance, leading to severe intestinal obstruction..."
        },
        paraphraseMap: [
          { questionKey: "false fullness", passageKey: "pseudo-satiation (feel full)" },
          { questionKey: "zero nutritional value", passageKey: "zero nutritional sustenance" }
        ],
        readingTrap: "Bẫy thuật ngữ chuyên ngành: 'pseudo-satiation' là từ chuyên môn gây hoang mang, nhưng vế sau bài đọc giải thích rất rõ: 'receiving zero nutritional sustenance' (không nhận được chút dinh dưỡng nào).",
        strategyTip: "Không sợ từ lạ: Khi gặp thuật ngữ như 'pseudo-satiation', hãy đọc tiếp 5-7 từ ngay sau dấu gạch ngang hoặc mệnh đề quan hệ để tìm lời giải thích.",
        goldenTip: {
          rule: "Tính từ bổ nghĩa cho danh từ: 'nutritional sustenance' = 'nutritional value' (giá trị dinh dưỡng).",
          theTrap: "Nhầm lẫn giữa danh từ nutrition và tính từ nutritional.",
          memoryHack: "💡 Trước danh từ value/sustenance, bắt buộc dùng tính từ NUTRITIONAL!",
          example: "Fast food provides low nutritional value."
        }
      },
      {
        id: "p1_q5",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Scientists argue that effective cleanup cannot rely on skimming ocean gyres; solutions must target the (land-based) ________ source.",
        targetWord: "TERRESTRIAL",
        word: "TERRESTRIAL",
        verbPrompt: "TERRESTRIAL",
        meaning: "Nguồn gốc trên cạn / đất liền (terrestrial source)",
        ipa: "/təˈres.tri.əl/",
        evidence: {
          paragraph: "Paragraph D",
          lines: "Lines 3-4",
          quote: "...genuine mitigation necessitates tackling the problem at its terrestrial source."
        },
        paraphraseMap: [
          { questionKey: "land-based source", passageKey: "terrestrial source" },
          { questionKey: "effective cleanup / solutions", passageKey: "genuine mitigation" }
        ],
        readingTrap: "Bẫy từ vựng học thuật cao cấp: 'Land-based' (trên đất liền) được các bài báo khoa học đổi thành tính từ học thuật 'terrestrial'.",
        strategyTip: "Scanning cụm tương phản: Quét từ 'ocean gyres' ở Đoạn D, sau đó tìm câu chuyển ý mang tính giải pháp triệt để.",
        goldenTip: {
          rule: "Cặp từ học thuật cốt lõi: Land-based = Terrestrial (thuộc về đất liền/mặt đất); Marine/Aquatic = Dưới nước/Đại dương.",
          theTrap: "Điền từ 'land' (sai ngữ pháp vì cần tính từ đứng trước danh từ source).",
          memoryHack: "💡 Nhớ cặp đối lập: TERRESTRIAL (trên cạn) đối lập với MARINE (dưới biển)!",
          example: "Terrestrial animals live on land."
        }
      }
    ]
  },

  "passage_2": {
    id: "passage_2",
    code: "READING PASSAGE 2",
    topic: "CÔNG NGHỆ & TRÍ TUỆ NHÂN TẠO",
    title: "Artificial Intelligence and the Reshaping of Modern Labor",
    subtitle: "Trí Tuệ Nhân Tạo & Cuộc Cách Mạng Tái Định Hình Thị Trường Việc Làm",
    paragraphs: [
      {
        tag: "A",
        text: "The acceleration of artificial intelligence (AI), particularly the advent of sophisticated generative foundation models, has ignited contentious debates regarding the trajectory of the global workforce. Throughout previous technological revolutions, mechanization primarily supplanted manual labor while augmenting cognitive occupations. The contemporary wave of algorithmic automation, however, diverges markedly: for the first time, intellectual, analytical, and creative tasks—long considered the exclusive domain of human cognition—are being executed by machines with astonishing proficiency."
      },
      {
        tag: "B",
        text: "Economists categorize algorithmic impact into substitution and complementarity effects. In repetitive, codified domains such as basic computer programming, technical document synthesis, and standardized financial forecasting, AI serves predominantly as a substitute, drastically compressing headcounts. Conversely, in professions demanding high-level strategic reasoning, empathetic negotiation, and ethical judgment, algorithmic tools act as cognitive prosthetics. Rather than rendering human professionals obsolete, AI complements their capacity, allowing one specialist to achieve outcomes that previously necessitated an entire department."
      },
      {
        tag: "C",
        text: "Nevertheless, widespread algorithmic integration entails substantial ethical perils, most notably algorithmic bias and opacity. Machine learning models trained on historical corporate data inevitably inherit and amplify human prejudices, resulting in discriminatory recruitment and performance evaluation practices. Furthermore, the proprietary 'black box' architecture of deep neural networks impedes accountability, leaving displaced employees unable to scrutinize the rationale behind automated employment terminations."
      },
      {
        tag: "D",
        text: "To avert profound social polarization, labor market experts contend that governmental policies must transition from passive unemployment welfare toward proactive reskilling ecosystems. Educational curricula require an urgent overhaul, de-emphasizing rote memorization in favor of metacognitive agility, emotional intelligence, and technological literacy. Ultimately, the future of work will not be determined by autonomous algorithms alone, but by societal decisions regarding how human-machine collaboration is structured and democratized."
      }
    ],
    questions: [
      {
        id: "p2_q1",
        taskType: "Academic Paraphrase Matching",
        taskBadge: "🔄 BẮT CẶP PARAPHRASE TRONG BÀI",
        questionPrompt: "Earlier industrial revolutions predominantly replaced (physical) ________ work while enhancing cognitive roles.",
        targetWord: "MANUAL",
        word: "MANUAL",
        verbPrompt: "MANUAL",
        meaning: "Lao động chân tay (manual labor = physical work)",
        ipa: "/ˈmæn.ju.əl/",
        evidence: {
          paragraph: "Paragraph A",
          lines: "Lines 3-4",
          quote: "...mechanization primarily supplanted manual labor while augmenting cognitive occupations."
        },
        paraphraseMap: [
          { questionKey: "physical work", passageKey: "manual labor" },
          { questionKey: "predominantly replaced", passageKey: "primarily supplanted" },
          { questionKey: "enhancing", passageKey: "augmenting" }
        ],
        readingTrap: "Bẫy Paraphrase 3 tầng: Đề thi đổi cả 3 từ trong câu: replaced ➔ supplanted, physical work ➔ manual labor, enhancing ➔ augmenting. Bạn phải nhận ra 'manual' chính là từ cần điền!",
        strategyTip: "Tìm câu mở đầu Đoạn A nói về 'previous technological revolutions' để định vị câu gốc.",
        goldenTip: {
          rule: "Manual labor = Physical work (Lao động chân tay); Cognitive labor = Intellectual work (Lao động trí óc).",
          theTrap: "Điền từ 'physical' (từ trong câu hỏi, không xuất hiện trong bài đọc). Bắt buộc phải nhặt từ MANUAL trong bài.",
          memoryHack: "💡 Physical work trong đề ➔ Nhặt ngay chữ MANUAL trong bài đọc!",
          example: "Robots are replacing repetitive manual labor."
        }
      },
      {
        id: "p2_q2",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "In complex professions requiring empathy and ethics, AI tools will not make human experts (outdated) ________ but will enhance their efficiency.",
        targetWord: "OBSOLETE",
        word: "OBSOLETE",
        verbPrompt: "OBSOLETE",
        meaning: "Lỗi thời / Bị đào thải (obsolete = outdated)",
        ipa: "/ˈɒb.səl.iːt/",
        evidence: {
          paragraph: "Paragraph B",
          lines: "Lines 6-7",
          quote: "Rather than rendering human professionals obsolete, AI complements their capacity..."
        },
        paraphraseMap: [
          { questionKey: "make human experts outdated", passageKey: "rendering human professionals obsolete" },
          { questionKey: "enhance their efficiency", passageKey: "complements their capacity" }
        ],
        readingTrap: "Bẫy cấu trúc: 'Render + O + Adj' mang nghĩa 'khiến cho ai/cái gì trở nên thế nào' (= Make + O + Adj). 'Obsolete' là tính từ đắt giá của IELTS Reading.",
        strategyTip: "Dự đoán ngữ pháp: 'make human experts [Adj]' ➔ Cần tìm một tính từ mang nghĩa lỗi thời/bị bỏ xó.",
        goldenTip: {
          rule: "Render someone obsolete = Make someone outdated/redundant (Biến ai đó thành lỗi thời).",
          theTrap: "Viết sai chính tả từ 'obsolete' (hay quên chữ 'e' ở cuối).",
          memoryHack: "💡 RENDER ... OBSOLETE = Biến thành đồ cổ lỗi thời!",
          example: "Typewriters became obsolete after personal computers arrived."
        }
      },
      {
        id: "p2_q3",
        taskType: "True/False/Not Given Trap Clue",
        taskBadge: "🚨 BÓC TÁCH BẪY TỪ KHÓA TỬ THẦN",
        questionPrompt: "Algorithms trained on past company data tend to preserve and (strengthen) ________ existing human prejudices.",
        targetWord: "AMPLIFY",
        word: "AMPLIFY",
        verbPrompt: "AMPLIFY",
        meaning: "Khuếch đại / Thổi bùng lên (amplify = strengthen/magnify)",
        ipa: "/ˈæm.plɪ.faɪ/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 2-3",
          quote: "Machine learning models trained on historical corporate data inevitably inherit and amplify human prejudices..."
        },
        paraphraseMap: [
          { questionKey: "past company data", passageKey: "historical corporate data" },
          { questionKey: "preserve and strengthen", passageKey: "inherit and amplify" }
        ],
        readingTrap: "Bẫy đồng âm & sắc thái: 'Amplify' (khuếch đại) mang nghĩa làm cho định kiến trở nên nghiêm trọng và lan rộng hơn.",
        strategyTip: "Quét từ khóa 'prejudices' hoặc 'historical corporate data' ở Đoạn C.",
        goldenTip: {
          rule: "Cặp động từ: Inherit (thừa hưởng) and Amplify (khuếch đại/làm trầm trọng thêm).",
          theTrap: "Điền 'strengthen' (từ trong câu hỏi, không có trong bài đọc).",
          memoryHack: "💡 Thấy 'prejudices' ➔ Tìm ngay động từ đi liền sau 'inherit and': AMPLIFY!",
          example: "Biased algorithms amplify existing social inequality."
        }
      },
      {
        id: "p2_q4",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Because deep neural networks operate as black boxes, their extreme (opaqueness) ________ prevents workers from questioning automated layoff decisions.",
        targetWord: "OPACITY",
        word: "OPACITY",
        verbPrompt: "OPACITY",
        meaning: "Sự mờ mịt, thiếu minh bạch (opacity)",
        ipa: "/oʊˈpæs.ə.ti/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 1-2 & 4-5",
          quote: "...most notably algorithmic bias and opacity. Furthermore, the proprietary 'black box' architecture of deep neural networks impedes accountability..."
        },
        paraphraseMap: [
          { questionKey: "extreme opaqueness / lack of transparency", passageKey: "opacity" },
          { questionKey: "questioning layoff decisions", passageKey: "scrutinize the rationale behind terminations" }
        ],
        readingTrap: "Bẫy biến đổi từ loại: Câu hỏi dùng danh từ 'opaqueness', trong khi bài đọc học thuật dùng danh từ chuẩn Latinh 'opacity'.",
        strategyTip: "Đoạn C đề cập 2 mối nguy chính ngay câu đầu tiên: 'algorithmic bias and opacity'.",
        goldenTip: {
          rule: "OPACITY (Danh từ): Tính không trong suốt, thiếu minh bạch. Trái nghĩa với TRANSPARENCY (Tính minh bạch).",
          theTrap: "Điền 'opaque' (tính từ) trong khi vị trí cần một danh từ số ít.",
          memoryHack: "💡 Đối lập với TRANSPARENCY là OPACITY (Mờ ám, hộp đen)!",
          example: "The opacity of the decision-making process sparked public outrage."
        }
      },
      {
        id: "p2_q5",
        taskType: "Discourse & Text Completion",
        taskBadge: "🧩 LIÊN TỪ & MẠCH LẠC ĐOẠN VĂN",
        questionPrompt: "Educational systems must move away from memorization and foster (emotional) ________ and technological intelligence instead.",
        targetWord: "EMOTIONAL",
        word: "EMOTIONAL",
        verbPrompt: "EMOTIONAL",
        meaning: "Trí tuệ cảm xúc (emotional intelligence)",
        ipa: "/ɪˈməʊ.ʃən.əl/",
        evidence: {
          paragraph: "Paragraph D",
          lines: "Lines 3-5",
          quote: "...de-emphasizing rote memorization in favor of metacognitive agility, emotional intelligence, and technological literacy."
        },
        paraphraseMap: [
          { questionKey: "move away from memorization", passageKey: "de-emphasizing rote memorization" },
          { questionKey: "foster", passageKey: "in favor of" }
        ],
        readingTrap: "Bẫy liệt kê song hành (Parallel Structure): Bài đọc liệt kê 3 kỹ năng cốt lõi: metacognitive agility, emotional intelligence, và technological literacy.",
        strategyTip: "Dò tìm từ 'rote memorization' ở Đoạn D và nhìn ngay cụm tính từ + danh từ đi liền kề sau.",
        goldenTip: {
          rule: "Cụm danh từ: Emotional intelligence (Trí tuệ cảm xúc - EQ).",
          theTrap: "Nhầm lẫn giữa emotion (danh từ) và emotional (tính từ đứng trước intelligence).",
          memoryHack: "💡 Đi cùng 'intelligence' thì chỉ có thể là tính từ EMOTIONAL!",
          example: "Leaders need high emotional intelligence to resolve workplace conflicts."
        }
      }
    ]
  },

  "passage_3": {
    id: "passage_3",
    code: "READING PASSAGE 3",
    topic: "TÂM LÝ HỌC & NÃO BỘ",
    title: "The Cognitive Science Behind Habit Loops and Willpower",
    subtitle: "Khoa Học Thần Kinh Về Cơ Chế Thói Quen, Vòng Lặp Dopamine & Giới Hạn Ý Chí",
    paragraphs: [
      {
        tag: "A",
        text: "Human survival historically hinged upon cognitive efficiency. The human brain, while constituting merely two percent of total adult body mass, consumes approximately twenty percent of resting metabolic energy. To conserve vital glucose, the central nervous system constantly seeks strategies to automate behavioral sequences, shifting conscious executive control from the prefrontal cortex to deeper, evolutionarily primordial subcortical structures, predominantly the basal ganglia."
      },
      {
        tag: "B",
        text: "Neurological research demonstrates that every established habit conforms to an immutable three-phase neurological circuit known as the habit loop: the cue, the routine, and the reward. The cue acts as an environmental catalyst, alerting the brain to shift into automated autopilot mode. This triggers the behavioral routine, which can be physical, mental, or emotional. Crucially, the routine is reinforced by the subsequent reward, which prompts a surge of the neurotransmitter dopamine, cementing the neural pathway and creating an anticipation loop that compels repetition."
      },
      {
        tag: "C",
        text: "A widespread societal fallacy posits that instilling positive lifestyle changes relies solely on moral fiber and indomitable willpower. Cognitive psychologists have thoroughly debunked this misconception through the ego-depletion framework. Willpower functions not as an inexhaustible virtue, but rather as a finite physiological battery. Each successive conscious decision, self-restraint effort, and cognitive evaluation progressively drains glucose and executive capacity, culminating in decision fatigue by late afternoon."
      },
      {
        tag: "D",
        text: "Consequently, high-performing individuals do not possess superhuman self-discipline; rather, they master environmental architecture. By consciously eliminating friction for desirable behaviors and amplifying friction for detrimental ones, they minimize the necessity for active willpower. Furthermore, exploiting neuroplasticity through micro-habits—initiating behavioral modifications so modest that they trigger negligible cognitive resistance—allows individuals to anchor sustainable routines permanently."
      }
    ],
    questions: [
      {
        id: "p3_q1",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "To save energy, the brain delegates automatic actions to an older brain region known as the basal (ganglia) ________.",
        targetWord: "GANGLIA",
        word: "GANGLIA",
        verbPrompt: "GANGLIA",
        meaning: "Hạch nền não bộ (basal ganglia)",
        ipa: "/ˈɡæŋ.ɡli.ə/",
        evidence: {
          paragraph: "Paragraph A",
          lines: "Lines 4-5",
          quote: "...shifting conscious executive control from the prefrontal cortex to deeper, evolutionarily primordial subcortical structures, predominantly the basal ganglia."
        },
        paraphraseMap: [
          { questionKey: "save energy", passageKey: "conserve vital glucose / cognitive efficiency" },
          { questionKey: "older brain region", passageKey: "evolutionarily primordial subcortical structures" }
        ],
        readingTrap: "Bẫy danh từ riêng y khoa: 'Basal ganglia' là danh từ ghép cố định. Trong câu hỏi đã có sẵn từ 'basal', người học cần điền đúng phần còn lại.",
        strategyTip: "Scanning từ khóa viết hoa hoặc thuật ngữ: Tìm chữ 'basal' ở cuối Đoạn A.",
        goldenTip: {
          rule: "Basal ganglia: Cấu trúc hạch nền phụ trách lưu giữ thói quen tự động của não bộ.",
          theTrap: "Viết sai chính tả chữ ganglia (nhớ có 2 chữ g).",
          memoryHack: "💡 Thấy 'basal' là đi liền với GANGLIA!",
          example: "The basal ganglia controls motor habits."
        }
      },
      {
        id: "p3_q2",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "The habit loop begins with an environmental (cue) ________, which signals the brain to activate autopilot behavior.",
        targetWord: "CUE",
        word: "CUE",
        verbPrompt: "CUE",
        meaning: "Tín hiệu kích hoạt (cue / catalyst)",
        ipa: "/kjuː/",
        evidence: {
          paragraph: "Paragraph B",
          lines: "Lines 2-3",
          quote: "...the habit loop: the cue, the routine, and the reward. The cue acts as an environmental catalyst, alerting the brain to shift into automated autopilot mode."
        },
        paraphraseMap: [
          { questionKey: "signals the brain", passageKey: "alerting the brain" },
          { questionKey: "activate autopilot behavior", passageKey: "shift into automated autopilot mode" }
        ],
        readingTrap: "Bẫy từ đồng nghĩa: 'Environmental catalyst' trong bài giải thích cho 'the cue'. Đề bài hỏi 'environmental ________', nên từ gốc chính là CUE.",
        strategyTip: "Đoạn B nêu rõ 3 bước: the cue, the routine, the reward. Câu hỏi hỏi về bước đầu tiên kích hoạt.",
        goldenTip: {
          rule: "Vòng lặp thói quen kinh điển của Charles Duhigg: CUE ➔ ROUTINE ➔ REWARD.",
          theTrap: "Điền 'catalyst' hoặc 'trigger' (từ giải thích, trong khi thuật ngữ chuẩn của loop là CUE).",
          memoryHack: "💡 Khởi đầu thói quen luôn là CUE (Gợi ý / Tín hiệu kích hoạt)!",
          example: "A phone notification is a powerful cue to check messages."
        }
      },
      {
        id: "p3_q3",
        taskType: "True/False/Not Given Trap Clue",
        taskBadge: "🚨 BÓC TÁCH BẪY TỪ KHÓA TỬ THẦN",
        questionPrompt: "Psychological experiments prove that willpower is not infinite; instead, it is a (finite) ________ physiological resource.",
        targetWord: "FINITE",
        word: "FINITE",
        verbPrompt: "FINITE",
        meaning: "Có hạn / Có giới hạn (finite battery)",
        ipa: "/ˈfaɪ.naɪt/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 3-4",
          quote: "Willpower functions not as an inexhaustible virtue, but rather as a finite physiological battery."
        },
        paraphraseMap: [
          { questionKey: "not infinite", passageKey: "not as an inexhaustible virtue" },
          { questionKey: "finite resource", passageKey: "finite physiological battery" }
        ],
        readingTrap: "Bẫy cặp từ trái nghĩa tuyệt đối: Inexhaustible / Infinite (vô tận) đối lập với FINITE (hữu hạn). Đề bài dùng 'not infinite; instead, it is a ________ resource'.",
        strategyTip: "Cấu trúc tương phản: 'not A, but rather B'. Vị trí sau 'a' cần tính từ đối lập với 'inexhaustible'.",
        goldenTip: {
          rule: "FINITE (Tính từ, phát âm: /ˈfaɪ.naɪt/): Có hạn chế, có điểm dừng. Đối lập hoàn toàn với INFINITE (/ˈɪn.fɪ.nət/).",
          theTrap: "Điền 'battery' (battery là danh từ ẩn dụ, câu hỏi cần tính từ trước physiological resource).",
          memoryHack: "💡 Not inexhaustible ➔ FINITE (Hữu hạn)!",
          example: "Earth possesses finite natural resources."
        }
      },
      {
        id: "p3_q4",
        taskType: "Academic Paraphrase Matching",
        taskBadge: "🔄 BẮT CẶP PARAPHRASE TRONG BÀI",
        questionPrompt: "By late afternoon, making consecutive decisions causes cognitive exhaustion, officially termed decision (fatigue) ________.",
        targetWord: "FATIGUE",
        word: "FATIGUE",
        verbPrompt: "FATIGUE",
        meaning: "Sự kiệt sức / hao mòn (fatigue = exhaustion)",
        ipa: "/fəˈtiːɡ/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 5-6",
          quote: "...progressively drains glucose and executive capacity, culminating in decision fatigue by late afternoon."
        },
        paraphraseMap: [
          { questionKey: "cognitive exhaustion", passageKey: "drains executive capacity / decision fatigue" },
          { questionKey: "making consecutive decisions", passageKey: "each successive conscious decision" }
        ],
        readingTrap: "Bẫy Collocation học thuật: 'Decision fatigue' (Sự mệt mỏi vì phải ra quá nhiều quyết định) là một thuật ngữ tâm lý học cực kỳ phổ biến trong các bài thi IELTS/SAT.",
        strategyTip: "Quét từ 'late afternoon' ở cuối Đoạn C để thấy ngay cụm 'decision fatigue'.",
        goldenTip: {
          rule: "DECISION FATIGUE (Danh từ ghép): Hiện tượng suy giảm chất lượng quyết định sau một ngày dài phải cân nhắc liên tục.",
          theTrap: "Viết sai chính tả fatigue (nhớ đuôi -gue tương tự league, colleague).",
          memoryHack: "💡 Sau chữ 'decision' là FATIGUE (đuôi -gue)!",
          example: "Judges experience decision fatigue toward the end of trials."
        }
      },
      {
        id: "p3_q5",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Disciplined achievers rely on modifying their environmental (architecture) ________ rather than depending on raw motivation.",
        targetWord: "ARCHITECTURE",
        word: "ARCHITECTURE",
        verbPrompt: "ARCHITECTURE",
        meaning: "Cấu trúc / Thiết kế môi trường (environmental architecture)",
        ipa: "/ˈɑː.kɪ.tek.tʃər/",
        evidence: {
          paragraph: "Paragraph D",
          lines: "Lines 1-2",
          quote: "...Consequently, high-performing individuals do not possess superhuman self-discipline; rather, they master environmental architecture."
        },
        paraphraseMap: [
          { questionKey: "disciplined achievers", passageKey: "high-performing individuals" },
          { questionKey: "modifying their environmental...", passageKey: "master environmental architecture" }
        ],
        readingTrap: "Bẫy nghĩa bóng (Metaphor): 'Architecture' ở đây không phải kiến trúc xây nhà, mà là 'thiết kế, sắp đặt môi trường sống' để tự động tạo thói quen tốt.",
        strategyTip: "Tìm câu đầu Đoạn D sau từ nối 'Consequently' để tìm danh từ đi sau 'environmental'.",
        goldenTip: {
          rule: "Environmental architecture / Choice architecture: Thuật ngữ tâm lý học hành vi chỉ việc bài trí không gian sống để khuyến khích hành vi mong muốn.",
          theTrap: "Điền 'design' (từ suy diễn ngoài đời, trong bài dùng từ ARCHITECTURE).",
          memoryHack: "💡 Master environmental ➔ ARCHITECTURE!",
          example: "Supermarkets use choice architecture to guide shoppers' purchases."
        }
      }
    ]
  },

  "passage_4": {
    id: "passage_4",
    code: "READING PASSAGE 4",
    topic: "KINH TẾ & ĐÔ THỊ BỀN VỮNG",
    title: "The 15-Minute City: Sustainable Urbanism in the Modern Era",
    subtitle: "Mô Hình Thành Phố 15 Phút: Đô Thị Hóa Xanh, Giảm Phát Thải & Gắn Kết Cộng Đồng",
    paragraphs: [
      {
        tag: "A",
        text: "For nearly a century, urban planning paradigms across the industrialized world have been dominated by automotive hegemony and strict functional zoning. Cities expanded outward into sprawling suburbs, segregating residential districts from commercial epicenters and industrial zones. This design compelled millions of citizens to endure grueling daily commutes, fostering chronic vehicular congestion, catastrophic greenhouse gas emissions, and widespread social isolation. In response to these compounding crises, contemporary urbanists are championing a radical paradigm shift: the 15-minute city."
      },
      {
        tag: "B",
        text: "Conceived by urban scholar Carlos Moreno, the 15-minute city framework revolves around hyper-proximity and decentralization. The foundational premise stipulates that all essential daily necessities—including employment, grocery markets, educational facilities, healthcare centers, and leisure parks—should be reachable within a fifteen-minute journey on foot or by bicycle from any resident's doorstep. Rather than forcing residents to traverse immense distances across monocentric metropolises, the model decentralizes public services into self-sustaining polycentric neighborhoods."
      },
      {
        tag: "C",
        text: "The environmental dividends generated by such hyper-proximate urbanism are extraordinary. By dramatically reducing reliance on internal combustion vehicles, municipalities experience rapid declines in atmospheric particulate matter and urban noise pollution. Reclaiming road asphalt formerly dedicated to vehicular transit allows cities to cultivate expansive bioswales, tree canopies, and micro-forests, mitigating the lethal urban heat island effect while bolstering biodiversity."
      },
      {
        tag: "D",
        text: "However, critics caution that implementing the 15-minute paradigm without equitable governance risks exacerbating socioeconomic inequalities. Affluent neighborhoods already possess abundant amenities, whereas historically marginalized peripheries suffer from infrastructural deficits. Without deliberate public investment and anti-gentrification zoning policies, localized proximity could inadvertently spawn privileged urban enclaves, driving lower-income families further away from high-amenity zones."
      }
    ],
    questions: [
      {
        id: "p4_q1",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Past city planning forced residents into long daily (commutes) ________ due to extreme residential segregation.",
        targetWord: "COMMUTES",
        word: "COMMUTES",
        verbPrompt: "COMMUTES",
        meaning: "Quãng đường đi lại làm việc hằng ngày (commutes)",
        ipa: "/kəˈmjuːts/",
        evidence: {
          paragraph: "Paragraph A",
          lines: "Lines 3-4",
          quote: "This design compelled millions of citizens to endure grueling daily commutes, fostering chronic vehicular congestion..."
        },
        paraphraseMap: [
          { questionKey: "forced residents", passageKey: "compelled millions of citizens" },
          { questionKey: "long daily...", passageKey: "grueling daily commutes" }
        ],
        readingTrap: "Bẫy số ít / số nhiều: Bài đọc dùng 'grueling daily commutes' (số nhiều có 's'). Nếu bạn điền thiếu chữ 's' (commute), câu trả lời sẽ bị trừ điểm ngữ pháp!",
        strategyTip: "Kiểm tra kỹ dạng từ gốc trong bài đọc: Từ sau tính từ 'daily' là danh từ số nhiều 'commutes'.",
        goldenTip: {
          rule: "Daily commutes: Việc di chuyển đi lại giữa nhà và chỗ làm mỗi ngày. BẮT BUỘC giữ nguyên đuôi số nhiều -S nếu bài đọc có.",
          theTrap: "Bỏ quên chữ 's' ở cuối từ commutes.",
          memoryHack: "💡 Daily commutes: Luôn nhớ chữ S ở đuôi!",
          example: "Long daily commutes contribute to elevated stress levels."
        }
      },
      {
        id: "p4_q2",
        taskType: "Academic Paraphrase Matching",
        taskBadge: "🔄 BẮT CẶP PARAPHRASE TRONG BÀI",
        questionPrompt: "The 15-minute model aims to replace single-center cities by redistributing amenities into (self-sustaining) ________ neighborhoods.",
        targetWord: "POLYCENTRIC",
        word: "POLYCENTRIC",
        verbPrompt: "POLYCENTRIC",
        meaning: "Đa trung tâm (polycentric = multi-centered)",
        ipa: "/ˌpɒl.iˈsen.trɪk/",
        evidence: {
          paragraph: "Paragraph B",
          lines: "Lines 5-6",
          quote: "...Rather than forcing residents to traverse immense distances across monocentric metropolises, the model decentralizes public services into self-sustaining polycentric neighborhoods."
        },
        paraphraseMap: [
          { questionKey: "single-center cities", passageKey: "monocentric metropolises" },
          { questionKey: "redistributing amenities", passageKey: "decentralizes public services" }
        ],
        readingTrap: "Cặp tiền tố Latinh đối lập: 'Mono-' (đơn/một ➔ monocentric) đối lập với 'Poly-' (đa/nhiều ➔ polycentric). Câu hỏi cần tìm tính từ chỉ mô hình đa trung tâm.",
        strategyTip: "Tìm câu cuối Đoạn B có cụm từ 'self-sustaining' để thấy ngay tính từ 'polycentric'.",
        goldenTip: {
          rule: "MONOCENTRIC (Đơn tâm) ➔ POLYCENTRIC (Đa trung tâm). Tiền tố POLY- nghĩa là nhiều (polygamy, polygon, polycentric).",
          theTrap: "Điền 'decentralized' thay vì tính từ 'polycentric' đứng ngay trước 'neighborhoods'.",
          memoryHack: "💡 Đối lập với MONOCENTRIC là POLYCENTRIC!",
          example: "Polycentric urban planning reduces transit congestion."
        }
      },
      {
        id: "p4_q3",
        taskType: "Summary Completion",
        taskBadge: "📝 ĐIỀN TỪ TÓM TẮT (1 TỪ DUY NHẤT)",
        questionPrompt: "Replacing asphalt with urban greenery helps cool the city by reducing the dangerous urban heat (island) ________ effect.",
        targetWord: "ISLAND",
        word: "ISLAND",
        verbPrompt: "ISLAND",
        meaning: "Hiệu ứng đảo nhiệt đô thị (urban heat island effect)",
        ipa: "/ˈaɪ.lənd/",
        evidence: {
          paragraph: "Paragraph C",
          lines: "Lines 4-5",
          quote: "...allows cities to cultivate expansive bioswales, tree canopies, and micro-forests, mitigating the lethal urban heat island effect while bolstering biodiversity."
        },
        paraphraseMap: [
          { questionKey: "cool the city / reducing", passageKey: "mitigating" },
          { questionKey: "urban greenery", passageKey: "tree canopies and micro-forests" }
        ],
        readingTrap: "Bẫy phát âm câm: 'Island' có chữ 's' câm (phát âm: /ˈaɪ.lənd/, không đọc là /ˈaɪs.lənd/). Trong đề thi Reading, đây là cụm thuật ngữ kinh điển: 'urban heat island effect'.",
        strategyTip: "Quét cụm từ cố định: 'urban heat ________ effect' ở cuối Đoạn C.",
        goldenTip: {
          rule: "Urban Heat Island (UHI) effect: Hiện tượng đảo nhiệt khiến trung tâm thành phố nóng hơn nhiều so với ngoại ô.",
          theTrap: "Viết sai chính tả chữ island.",
          memoryHack: "💡 'Urban heat' luôn đi kèm chữ ISLAND!",
          example: "Green rooftops combat the urban heat island effect."
        }
      },
      {
        id: "p4_q4",
        taskType: "True/False/Not Given Trap Clue",
        taskBadge: "🚨 BÓC TÁCH BẪY TỪ KHÓA TỬ THẦN",
        questionPrompt: "Without careful zoning, proximity policies could worsen social divide by creating segregated wealthy (enclaves) ________.",
        targetWord: "ENCLAVES",
        word: "ENCLAVES",
        verbPrompt: "ENCLAVES",
        meaning: "Các khu biệt lập / ốc đảo đặc quyền (enclaves)",
        ipa: "/ˈeŋ.kleɪvz/",
        evidence: {
          paragraph: "Paragraph D",
          lines: "Lines 4-5",
          quote: "...localized proximity could inadvertently spawn privileged urban enclaves, driving lower-income families further away..."
        },
        paraphraseMap: [
          { questionKey: "worsen social divide", passageKey: "exacerbating socioeconomic inequalities" },
          { questionKey: "wealthy", passageKey: "privileged" }
        ],
        readingTrap: "Bẫy từ vựng cao cấp: 'Privileged urban enclaves' chỉ những khu nhà giàu biệt lập có đầy đủ tiện ích trong khi người nghèo bị đẩy ra xa.",
        strategyTip: "Quét từ 'privileged' ở Đoạn D để nhặt danh từ đi kèm.",
        goldenTip: {
          rule: "ENCLAVE (Danh từ): Một vùng lãnh thổ hoặc cộng đồng dân cư nằm tách biệt bên trong một khu vực lớn hơn.",
          theTrap: "Quên đuôi -S ở từ ENCLAVES.",
          memoryHack: "💡 Privileged urban ➔ ENCLAVES!",
          example: "Gated enclaves cut wealthy residents off from the broader community."
        }
      }
    ]
  }
};
