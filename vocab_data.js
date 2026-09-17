/**
 * KHO TỪ VỰNG CỐT LÕI - GIAI ĐOẠN 1: NỀN TẢNG CĂN BẢN (BAND 4.0 - 5.0)
 * Được biên soạn đặc biệt cho phản xạ gõ phím Audition, bắt lỗi chính tả và phát âm chuẩn bản xứ.
 */

window.VOCAB_FOUNDATION_DATA = {
  // 1. ĐỘNG TỪ BẤT QUY TẮC CỐT LÕI (IRREGULAR VERBS - CỘT 2 & CỘT 3)
  "irregular_verbs": [
    {
      id: "v_irr_01",
      word: "BOUGHT",
      baseForm: "buy",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/bɔːt/",
      meaning: "Đã mua (dạng quá khứ V2 của 'buy')",
      contextSentence: "Yesterday evening, Alex (buy) ________ a new English grammar book at the mall.",
      example: "She bought a laptop last week.",
      spellingTip: "💡 Gia đình vần -OUGHT: buy ➔ BOUGHT, bring ➔ BROUGHT, think ➔ THOUGHT. Cấm viết 'buyed' hay đảo chữ 'bougth'!",
      goldenTip: {
        rule: "Động từ 'buy' là bất quy tắc: buy ➔ bought ➔ bought.",
        theTrap: "Người học hay viết nhầm 'buyed' hoặc sai vị trí g-h-t thành 'bougth'.",
        memoryHack: "💡 Thuộc 1 chữ OUGHT là thuộc cả họ: BOUGHT, BROUGHT, THOUGHT, FOUGHT, CAUGHT!",
        example: "I bought this jacket in Tokyo."
      }
    },
    {
      id: "v_irr_02",
      word: "BROKE",
      baseForm: "break",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/broʊk/",
      meaning: "Đã làm vỡ / hỏng hóc (quá khứ V2 của 'break')",
      contextSentence: "While Alex was driving on the highway, his car engine suddenly (break) ________ down.",
      example: "He dropped his phone and the screen broke.",
      spellingTip: "💡 Break ➔ BROKE (quá khứ cột 2) ➔ BROKEN (phân từ cột 3). Không có 'breaked'.",
      goldenTip: {
        rule: "Dạng quá khứ đơn của break là 'broke' (âm /oʊ/).",
        theTrap: "Dùng 'breaked' hoặc nhầm giữa broke (V2) và broken (V3).",
        memoryHack: "💡 Chữ O ở giữa biến break thành chiếc xe đã hỏng (broke)!",
        example: "The vase broke into pieces."
      }
    },
    {
      id: "v_irr_03",
      word: "THOUGHT",
      baseForm: "think",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/θɔːt/",
      meaning: "Đã nghĩ / ngỡ rằng (quá khứ V2 của 'think')",
      contextSentence: "I (think) ________ the flight was at 9 PM, but it actually departed at 8 PM.",
      example: "She thought about studying abroad for months.",
      spellingTip: "💡 Bắt đầu bằng âm TH /θ/ (đặt lưỡi giữa hai răng) + cụm vần -OUGHT.",
      goldenTip: {
        rule: "Think ➔ THOUGHT ➔ THOUGHT. Dùng khi diễn tả suy nghĩ trong quá khứ.",
        theTrap: "Viết sai thành 'thoght' (thiếu chữ U) hoặc 'thinked'.",
        memoryHack: "💡 TH + OUGHT = THOUGHT. Cả nhà vần OUGHT đều có 7 chữ cái!",
        example: "We thought you were asleep."
      }
    },
    {
      id: "v_irr_04",
      word: "FLOWN",
      baseForm: "fly",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V3)",
      ipa: "/floʊn/",
      meaning: "Đã từng bay (quá khứ phân từ V3 của 'fly')",
      contextSentence: "My grandfather is 80 years old, but he has never (fly) ________ on an airplane.",
      example: "Have you ever flown First Class?",
      spellingTip: "💡 Fly ➔ FLEW (quá khứ) ➔ FLOWN (phân từ có đuôi -N). Sau have/has bắt buộc dùng FLOWN.",
      goldenTip: {
        rule: "Sau Have / Has + V3: Fly ➔ Flew ➔ FLOWN.",
        theTrap: "Điền 'flew' sau has (He has never flew - SAI) hoặc 'flied'.",
        memoryHack: "💡 Đuôi -OWN giống như BLOWN, GROWN, THROWN. Cứ thấy Has/Have là nghĩ đến đuôi -N!",
        example: "The bird has flown away."
      }
    },
    {
      id: "v_irr_05",
      word: "WRITTEN",
      baseForm: "write",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V3)",
      ipa: "/ˈrɪtn/",
      meaning: "Đã viết xong (quá khứ phân từ V3 của 'write')",
      contextSentence: "The deadline is coming, but she hasn't (write) ________ the final summary yet.",
      example: "The report was written by our lead engineer.",
      spellingTip: "💡 Chú ý 2 chữ T ở giữa: W-R-I-T-T-E-N. Gõ nhanh dễ bị thiếu 1 chữ T.",
      goldenTip: {
        rule: "Write ➔ WROTE (V2) ➔ WRITTEN (V3 có 2 chữ T, phát âm ngắn /rɪtn/).",
        theTrap: "Viết thiếu chữ T thành 'writen' hoặc dùng 'has wrote'.",
        memoryHack: "💡 Double T: Bàn tay cầm 2 cây bút (2 chữ T) để WRITTEN bài thi thật đẹp!",
        example: "I have written five emails this morning."
      }
    },
    {
      id: "v_irr_06",
      word: "CHOSEN",
      baseForm: "choose",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V3)",
      ipa: "/ˈtʃoʊzn/",
      meaning: "Được chọn lựa (quá khứ phân từ V3 của 'choose')",
      contextSentence: "Out of 50 applicants, Sarah has been (choose) ________ as the new team leader.",
      example: "He was chosen for the national football team.",
      spellingTip: "💡 CHOOSE có 2 chữ O ➔ CHOSE (V2) chỉ còn 1 chữ O ➔ CHOSEN (V3) thêm đuôi -EN.",
      goldenTip: {
        rule: "Choose (/tʃuːz/) ➔ Chose (/tʃoʊz/) ➔ Chosen (/ˈtʃoʊzn/).",
        theTrap: "Viết 2 chữ O thành 'choosen' (SAI) hoặc nhầm với choice (danh từ).",
        memoryHack: "💡 2 chữ O thành 1 chữ O: Khi đã đưa ra quyết định CHOSEN thì không cần đắn đo 2 chữ O nữa!",
        example: "You have chosen the right path."
      }
    },
    {
      id: "v_irr_07",
      word: "DRANK",
      baseForm: "drink",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/dræŋk/",
      meaning: "Đã uống (quá khứ V2 của 'drink')",
      contextSentence: "Because he felt extremely thirsty after the marathon, he (drink) ________ two bottles of water.",
      example: "I drank fresh orange juice for breakfast.",
      spellingTip: "💡 Chữ I đổi thành chữ A ở quá khứ: DRINK ➔ DRANK ➔ DRUNK (V3).",
      goldenTip: {
        rule: "Drink ➔ DRANK (quá khứ có mốc thời gian rõ ràng) ➔ DRUNK (phân từ sau have/has).",
        theTrap: "Dùng 'drinked' hoặc nhầm DRANK (V2) với DRUNK (V3).",
        memoryHack: "💡 Quy tắc I-A-U: Sing-Sang-Sung, Ring-Rang-Rung, Drink-Drank-Drunk!",
        example: "She drank all the milk."
      }
    },
    {
      id: "v_irr_08",
      word: "CAUGHT",
      baseForm: "catch",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/kɔːt/",
      meaning: "Đã bắt kịp / đã tóm được (quá khứ V2 của 'catch')",
      contextSentence: "He ran as fast as possible to the station and barely (catch) ________ the last train.",
      example: "The police caught the thief last night.",
      spellingTip: "💡 Vần AUGHT (chữ A chứ không phải chữ O): C-A-U-G-H-T (khác với BOUGHT có chữ O).",
      goldenTip: {
        rule: "Catch ➔ CAUGHT ➔ CAUGHT. Có âm đuôi /t/ rõ ràng.",
        theTrap: "Viết nhầm thành 'cought' (lẫn sang ought của buy/think) hoặc 'catched'.",
        memoryHack: "💡 CATCH bắt đầu bằng C-A ➔ Quá khứ cũng giữ C-A: CAUGHT! Còn BUY bắt đầu bằng B-U ➔ BOUGHT!",
        example: "I caught a cold last winter."
      }
    },
    {
      id: "v_irr_09",
      word: "SPOKE",
      baseForm: "speak",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/spoʊk/",
      meaning: "Đã nói chuyện / đã phát biểu (quá khứ V2 của 'speak')",
      contextSentence: "During the international conference, the professor (speak) ________ in English with great confidence.",
      example: "He spoke to his manager about the issue yesterday.",
      spellingTip: "💡 Speak ➔ SPOKE (quá khứ V2) ➔ SPOKEN (phân từ V3).",
      goldenTip: {
        rule: "Dạng quá khứ của speak là spoke.",
        theTrap: "Viết 'speaked' hoặc nhầm spoke với talk.",
        memoryHack: "💡 EA đổi thành O-E: SPEAK ➔ SPOKE. Nhớ âm đuôi /k/ đanh gọn!",
        example: "She spoke three foreign languages fluently."
      }
    },
    {
      id: "v_irr_10",
      word: "FORGOTTEN",
      baseForm: "forget",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V3)",
      ipa: "/fərˈɡɑːtn/",
      meaning: "Đã lãng quên (quá khứ phân từ V3 của 'forget')",
      contextSentence: "Don't tell me you have completely (forget) ________ your wedding anniversary!",
      example: "I have forgotten my password again.",
      spellingTip: "💡 Nhân đôi chữ T: F-O-R-G-O-T-T-E-N. Gõ cẩn thận 2 chữ T!",
      goldenTip: {
        rule: "Forget ➔ FORGOT (V2) ➔ FORGOTTEN (V3 sau have/has).",
        theTrap: "Viết 1 chữ T 'forgoten' hoặc điền 'has forgot' trong văn viết chuẩn.",
        memoryHack: "💡 Quên 1 chữ T là bị trừ điểm: FORGOTTEN cần 2 chữ T vững chắc!",
        example: "This old melody will never be forgotten."
      }
    },
    {
      id: "v_irr_11",
      word: "UNDERSTOOD",
      baseForm: "understand",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/ˌʌndərˈstʊd/",
      meaning: "Đã thấu hiểu / đã hiểu rõ (quá khứ V2 của 'understand')",
      contextSentence: "After listening to the teacher's explanation, all the students (understand) ________ the grammar rule.",
      example: "I understood everything he said.",
      spellingTip: "💡 STAND ➔ STOOD. Do đó UNDERSTAND ➔ UNDERSTOOD (có 2 chữ O).",
      goldenTip: {
        rule: "Understand ➔ UNDERSTOOD ➔ UNDERSTOOD.",
        theTrap: "Viết 'understanded'.",
        memoryHack: "💡 Giữ nguyên tiền tố UNDER + dạng quá khứ của STAND (STOOD)!",
        example: "They understood each other without speaking."
      }
    },
    {
      id: "v_irr_12",
      word: "RANG",
      baseForm: "ring",
      category: "irregular_verbs",
      categoryLabel: "⚡ Động Từ Bất Quy Tắc (V2)",
      ipa: "/ræŋ/",
      meaning: "Chuông đã reo lên (quá khứ V2 của 'ring')",
      contextSentence: "While Alex was taking a warm bath, the telephone suddenly (ring) ________.",
      example: "The school alarm bell rang at exactly 7 AM.",
      spellingTip: "💡 Ring ➔ RANG (quá khứ đơn) ➔ RUNG (phân từ sau have/has).",
      goldenTip: {
        rule: "Hành động ngắn cắt ngang hành động dài chia Quá khứ đơn: RANG.",
        theTrap: "Điền 'was ringing' hoặc 'ringed'.",
        memoryHack: "💡 Âm A trong RANG tạo tiếng chuông vang dội: RANG!",
        example: "The church bells rang across the quiet valley."
      }
    }
  ],

  // 2. TỪ VỰNG ĐỜI SỐNG & GIAO TIẾP CĂN BẢN (DAILY LIFE BAND 4.0 - 5.0)
  "daily_life": [
    {
      id: "v_dl_01",
      word: "PASSPORT",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ˈpæspɔːrt/",
      meaning: "Hộ chiếu xuất nhập cảnh",
      contextSentence: "Before boarding an international flight, you must present your valid ________ at the security gate.",
      example: "Keep your passport in a safe zipped pocket.",
      spellingTip: "💡 PASS (vượt qua cổng) + PORT (cảng biển/sân bay) = PASSPORT (2 chữ S).",
      goldenTip: {
        rule: "Danh từ đếm được, số nhiều thêm -s: passports.",
        theTrap: "Viết thiếu 1 chữ S thành 'pasport'.",
        memoryHack: "💡 PASS (đỗ kỳ thi) + PORT (cổng cảng) ➔ PASSPORT mở ra thế giới!",
        example: "My passport expires next month."
      }
    },
    {
      id: "v_dl_02",
      word: "UMBRELLA",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ʌmˈbrɛlə/",
      meaning: "Cái ô / cái dù che mưa nắng",
      contextSentence: "Look at those dark storm clouds outside! Take an ________ with you so you don't get wet.",
      example: "She opened her colorful umbrella in the pouring rain.",
      spellingTip: "💡 Bắt đầu bằng nguyên âm U (/ʌ/) nên luôn đi với mạo từ AN: AN UMBRELLA. Có 2 chữ L.",
      goldenTip: {
        rule: "Mạo từ 'AN' bắt buộc đứng trước Umbrella vì phiên âm bắt đầu bằng nguyên âm /ʌ/.",
        theTrap: "Dùng 'a umbrella' (sai mạo từ) hoặc viết 1 chữ L 'umbrela'.",
        memoryHack: "💡 2 chiếc nan hoa (2 chữ L) giữ cho chiếc UMBRELLA không bị gió thổi bay!",
        example: "I left my umbrella in the taxi."
      }
    },
    {
      id: "v_dl_03",
      word: "SCHEDULE",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ˈskɛdʒuːl/",
      meaning: "Lịch trình / thời khóa biểu làm việc",
      contextSentence: "Because of his extremely tight work ________, he can only exercise on Sunday mornings.",
      example: "Let's check our schedule for tomorrow's meeting.",
      spellingTip: "💡 S-C-H-E-D-U-L-E. Âm đầu đọc là /sk/ trong Anh-Mỹ hoặc /ʃ/ trong Anh-Anh.",
      goldenTip: {
        rule: "Thành ngữ: On schedule (đúng tiến độ), Behind schedule (trễ tiến độ).",
        theTrap: "Viết nhầm chữ H thành 'scedule' hoặc sai đuôi 'schedual'.",
        memoryHack: "💡 SCH giống như SCHOOL: Cả SCHOOL và SCHEDULE đều cần sắp xếp thời gian hợp lý!",
        example: "The train arrived right on schedule."
      }
    },
    {
      id: "v_dl_04",
      word: "BICYCLE",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ˈbaɪsɪkl/",
      meaning: "Chiếc xe đạp hai bánh",
      contextSentence: "Riding a ________ to work not only saves transportation costs but also improves physical fitness.",
      example: "He locked his bicycle to the green street lamp.",
      spellingTip: "💡 BI (nghĩa là hai) + CYCLE (vòng tròn/bánh xe). Chú ý chữ Y đứng trước chữ C thứ hai.",
      goldenTip: {
        rule: "Động từ đi kèm: RIDE a bicycle (không dùng drive a bicycle).",
        theTrap: "Viết nhầm chữ Y và I thành 'bycicle' hoặc 'bycycle'.",
        memoryHack: "💡 BI (chữ I trước) rồi mới đến CYCLE (chữ Y ở giữa): B-I-C-Y-C-L-E!",
        example: "Children are learning to ride bicycles in the park."
      }
    },
    {
      id: "v_dl_05",
      word: "TRAFFIC",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ˈtræfɪk/",
      meaning: "Giao thông / lưu lượng xe cộ trên đường",
      contextSentence: "During peak rush hours, heavy ________ on the main bridge causes severe delays.",
      example: "Traffic was backed up for miles due to the accident.",
      spellingTip: "💡 T-R-A-F-F-I-C. Chú ý 2 chữ F ở giữa và đuôi -IC.",
      goldenTip: {
        rule: "Traffic là DANH TỪ KHÔNG ĐẾM ĐƯỢC (Uncountable noun). Không bao giờ có 'a traffic' hay 'traffics'.",
        theTrap: "Nói 'there are many traffics' (SAI). Phải nói: 'there is heavy traffic'.",
        memoryHack: "💡 2 dòng xe kẹt cứng song song tạo nên 2 chữ F trong TRAFFIC!",
        example: "There is too much traffic downtown."
      }
    },
    {
      id: "v_dl_06",
      word: "DELICIOUS",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/dɪˈlɪʃəs/",
      meaning: "Ngon miệng / thơm ngon hấp dẫn",
      contextSentence: "The chef prepared a ________ traditional beef noodle soup that won high praise from everyone.",
      example: "Thank you for the delicious home-cooked dinner.",
      spellingTip: "💡 D-E-L-I-C-I-O-U-S. Đuôi -CIOUS phát âm thành âm /ʃəs/ mềm mại.",
      goldenTip: {
        rule: "Tính từ miêu tả đồ ăn ngon. Không dùng 'very delicious' trong văn chuẩn (thay bằng 'absolutely delicious').",
        theTrap: "Viết nhầm đuôi thành 'delisious' (dùng chữ S thay vì C).",
        memoryHack: "💡 DELI (quán ăn ngon) + CIOUS = DELICIOUS!",
        example: "The seafood pizza was truly delicious."
      }
    },
    {
      id: "v_dl_07",
      word: "APARTMENT",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/əˈpɑːrtmənt/",
      meaning: "Căn hộ chung cư tiện nghi",
      contextSentence: "They recently moved into a modern two-bedroom ________ overlooking the peaceful central lake.",
      example: "Rent for this downtown apartment is quite reasonable.",
      spellingTip: "💡 A-P-A-R-T-M-E-N-T. Bắt đầu bằng 1 chữ P (khác với appointment có 2 chữ P).",
      goldenTip: {
        rule: "Trong tiếng Anh-Mỹ dùng 'apartment', trong tiếng Anh-Anh tương đương với 'flat'.",
        theTrap: "Viết 2 chữ P thành 'appartment' (sai phổ biến do nhầm với appointment).",
        memoryHack: "💡 APART nghĩa là riêng biệt. Một căn hộ riêng tư trong tòa nhà ➔ APART + MENT!",
        example: "She decorated her apartment with indoor plants."
      }
    },
    {
      id: "v_dl_08",
      word: "WEATHER",
      category: "daily_life",
      categoryLabel: "💬 Giao Tiếp & Đời Sống (Band 4.0 - 5.0)",
      ipa: "/ˈwɛðər/",
      meaning: "Thời tiết / khí hậu hàng ngày",
      contextSentence: "If the ________ remains sunny this weekend, we are going to have a barbecue in the garden.",
      example: "The weather forecast predicts light rain tomorrow.",
      spellingTip: "💡 W-E-A-T-H-E-R. Đừng nhầm lẫn với từ WHETHER (liệu rằng...).",
      goldenTip: {
        rule: "Khi nói về thời tiết, luôn dùng chủ ngữ giả IT: 'It is sunny', 'It is raining'.",
        theTrap: "Nhầm chính tả giữa WEATHER (thời tiết) và WHETHER (liệu có hay không).",
        memoryHack: "💡 Cần ăn (EAT) mỗi khi THỜI TIẾT (W-EAT-HER) se lạnh!",
        example: "What is the weather like today?"
      }
    }
  ],

  // 3. CẢM XÚC & TÍNH TỪ MIÊU TẢ CỐT LÕI (EMOTIONS & PERSONALITY)
  "emotions": [
    {
      id: "v_em_01",
      word: "CONFIDENT",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/ˈkɑːnfɪdənt/",
      meaning: "Tự tin vào năng lực bản thân",
      contextSentence: "After countless hours of keyboard practice, Alex feels completely ________ about passing the test.",
      example: "She gave a confident presentation in front of the board.",
      spellingTip: "💡 C-O-N-F-I-D-E-N-T. Đuôi -ENT (tính từ), khác với CONFIDENCE (danh từ đuôi -ENCE).",
      goldenTip: {
        rule: "Cấu trúc: Be confident ABOUT / IN something: 'confident in my speaking skills'.",
        theTrap: "Dùng nhầm danh từ 'confidence' vào vị trí tính từ sau to be (He is confidence - SAI).",
        memoryHack: "💡 Đuôi -ENT chỉ tính chất con người (Tự tin, kiên nhẫn, xuất sắc: confident, patient, excellent)!",
        example: "Be confident and believe in your own potential."
      }
    },
    {
      id: "v_em_02",
      word: "GRATEFUL",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/ˈɡreɪtfl/",
      meaning: "Biết ơn / cảm kích sâu sắc",
      contextSentence: "I am deeply ________ to my supportive mentor for guiding me through every difficult step.",
      example: "We are very grateful for your generous hospitality.",
      spellingTip: "💡 G-R-A-T-E-F-U-L. Chú ý chữ A (GRATE), cấm viết nhầm thành chữ E (greatful).",
      goldenTip: {
        rule: "Cấu trúc: Be grateful TO somebody FOR something: 'grateful to you for your kindness'.",
        theTrap: "90% người học viết sai chính tả thành 'greatful' (vì liên tưởng đến từ 'great').",
        memoryHack: "💡 G-R-A-T-E-F-U-L: Nghĩ đến từ GRATITUDE (sự biết ơn). Không có chữ EA của great!",
        example: "She was grateful that everyone arrived safely."
      }
    },
    {
      id: "v_em_03",
      word: "EXHAUSTED",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/ɪɡˈzɔːstɪd/",
      meaning: "Kiệt sức / mệt lả sau công việc nặng nhọc",
      contextSentence: "After completing a grueling 42-kilometer marathon in the heat, the runners were totally ________.",
      example: "I worked 12 hours today and feel utterly exhausted.",
      spellingTip: "💡 E-X-H-A-U-S-T-E-D. Có chữ H câm đứng sau X: EX-HAUST-ED.",
      goldenTip: {
        rule: "Exhausted là tính từ cực độ (Extreme Adjective = very tired), không dùng 'very exhausted', dùng 'completely / totally exhausted'.",
        theTrap: "Bỏ quên chữ H câm hoặc viết nhầm thành 'exhosted'.",
        memoryHack: "💡 Giống như ống xả khói xe hơi (exhaust pipe): Khí lực xả ra hết sạch thì ta EXHAUSTED!",
        example: "The baby cried until she was exhausted and fell asleep."
      }
    },
    {
      id: "v_em_04",
      word: "CURIOUS",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/ˈkjʊriəs/",
      meaning: "Tò mò / ham học hỏi điều mới lạ",
      contextSentence: "Young children are naturally ________ about how digital gadgets and robotic toys operate.",
      example: "I am curious to find out what happens next.",
      spellingTip: "💡 C-U-R-I-O-U-S. Đuôi tính từ -IOUS rất phổ biến (delicious, ambitious, curious).",
      goldenTip: {
        rule: "Cấu trúc: Be curious ABOUT something: 'curious about world history'.",
        theTrap: "Viết thiếu chữ U thứ hai thành 'curios' (đây là danh từ số nhiều món đồ cổ).",
        memoryHack: "💡 Có chữ U ở giữa và đuôi IOUS: Một tâm hồn tò mò (CURIOUS) luôn đặt câu hỏi YOU (U) & I!",
        example: "Scientists are curious minds who never stop asking why."
      }
    },
    {
      id: "v_em_05",
      word: "PATIENT",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/ˈpeɪʃnt/",
      meaning: "Kiên nhẫn / nhẫn nại (tính từ)",
      contextSentence: "Learning a new foreign language takes time, so you must remain ________ and persistent.",
      example: "A good teacher is always kind and patient with slow learners.",
      spellingTip: "💡 P-A-T-I-E-N-T. Âm 'ti' phát âm thành /ʃ/: /ˈpeɪʃnt/.",
      goldenTip: {
        rule: "Patient vừa là tính từ (kiên nhẫn), vừa là danh từ (bệnh nhân). Trái nghĩa là IMPATIENT.",
        theTrap: "Viết sai chính tả thành 'patience' (đây là danh từ: sự kiên nhẫn).",
        memoryHack: "💡 Người kiên nhẫn (PATIENT) sẵn sàng chờ đợi như một bệnh nhân trong phòng khám!",
        example: "Just be patient, your hard work will pay off."
      }
    },
    {
      id: "v_em_06",
      word: "AMBITIOUS",
      category: "emotions",
      categoryLabel: "💖 Cảm Xúc & Tính Cách (Core Adjectives)",
      ipa: "/æmˈbɪʃəs/",
      meaning: "Đầy hoài bão / giàu khát vọng vươn lên",
      contextSentence: "The young entrepreneur launched an ________ startup aimed at reducing ocean plastic waste.",
      example: "She has ambitious career goals for the next five years.",
      spellingTip: "💡 A-M-B-I-T-I-O-U-S. Đuôi -TIOUS phát âm là /ʃəs/.",
      goldenTip: {
        rule: "Xuất phát từ danh từ AMBITION (hoài bão) ➔ Tính từ AMBITIOUS.",
        theTrap: "Viết nhầm chữ T thành chữ S hoặc C 'ambisious'.",
        memoryHack: "💡 AM + BITION (khát vọng) + OUS = AMBITIOUS (Người có chí lớn)!",
        example: "Our company has set an ambitious revenue target."
      }
    }
  ],

  // 4. 100 TỪ VỰNG CHUYÊN NGÀNH IT & PHẦN MỀM (IT & SOFTWARE ENGINEERING)
  "tech_ai": [
    // --- NHÓM 1: LẬP TRÌNH & THUẬT TOÁN (CORE CS & SOFTWARE DEV - 25 TỪ) ---
    {
      id: "v_it_001",
      word: "ALGORITHM",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈælɡərɪðəm/",
      meaning: "Thuật toán xử lý logic dữ liệu",
      contextSentence: "The recommendation ________ analyzes user browsing history to suggest relevant products.",
      example: "A sorting algorithm optimizes search queries.",
      spellingTip: "💡 A-L-G-O-R-I-T-H-M. Chú ý đuôi -THM ở cuối từ.",
      goldenTip: {
        rule: "Tập hợp các bước logic tuần tự để giải quyết một bài toán máy tính.",
        theTrap: "Viết thiếu chữ H thành 'algoritm' hoặc 'algorythm'.",
        memoryHack: "💡 ALGO + RITHM (nhịp điệu toán học) = ALGORITHM!",
        example: "The search engine uses a proprietary algorithm."
      }
    },
    {
      id: "v_it_002",
      word: "VARIABLE",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈveəriəbl/",
      meaning: "Biến số lưu trữ giá trị trong bộ nhớ",
      contextSentence: "You should declare an immutable ________ using the const keyword in JavaScript.",
      example: "Each variable must have an explicit data type in Java.",
      spellingTip: "💡 V-A-R-I-A-B-L-E. Bắt đầu bằng chữ VAR.",
      goldenTip: {
        rule: "Danh từ chỉ vùng nhớ có tên dùng để lưu giữ giá trị có thể thay đổi hoặc cố định.",
        theTrap: "Viết nhầm chữ I thành Y 'varyable'.",
        memoryHack: "💡 VAR (trong var/let/const) + IABLE = VARIABLE!",
        example: "Global variables can cause unexpected side effects."
      }
    },
    {
      id: "v_it_003",
      word: "FUNCTION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfʌŋkʃn/",
      meaning: "Hàm / chương trình con thực thi một tác vụ",
      contextSentence: "This mathematical ________ computes the total invoice price after applying promotional discounts.",
      example: "Pure functions always return the same output for identical inputs.",
      spellingTip: "💡 F-U-N-C-T-I-O-N. Đuôi -TION phát âm /ʃn/.",
      goldenTip: {
        rule: "Khối mã độc lập nhận tham số đầu vào và trả về kết quả.",
        theTrap: "Nhầm lẫn giữa method (phương thức của class) và function (hàm độc lập).",
        memoryHack: "💡 FUNC (phím chức năng Fn trên bàn phím) + TION = FUNCTION!",
        example: "Pass a callback function to handle the response."
      }
    },
    {
      id: "v_it_004",
      word: "FRAMEWORK",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfreɪmwɜːrk/",
      meaning: "Khung nền tảng phát triển ứng dụng",
      contextSentence: "Spring Boot is an enterprise Java ________ designed to accelerate microservice creation.",
      example: "Choosing the right web framework saves hundreds of development hours.",
      spellingTip: "💡 FRAME (khung sườn) + WORK (làm việc) = FRAMEWORK.",
      goldenTip: {
        rule: "Bộ khung cung cấp sẵn kiến trúc, thư viện và quy chuẩn để lập trình viên xây dựng phần mềm.",
        theTrap: "Nhầm lẫn giữa Library (thư viện bạn gọi) và Framework (khung gọi code của bạn - Inversion of Control).",
        memoryHack: "💡 Khung xương vững chắc (FRAME) để ứng dụng WORK trơn tru!",
        example: "React is a UI library, whereas Angular is a full-fledged framework."
      }
    },
    {
      id: "v_it_005",
      word: "DEBUGGING",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/diːˈbʌɡɪŋ/",
      meaning: "Quá trình dò tìm và khắc phục lỗi mã nguồn",
      contextSentence: "The software engineer spent all afternoon ________ a stubborn memory leak in production.",
      example: "Effective debugging requires setting strategic breakpoints.",
      spellingTip: "💡 Có 2 chữ G ở giữa: D-E-B-U-G-G-I-N-G.",
      goldenTip: {
        rule: "BUG là con bọ (lỗi phần mềm), DE- là tiền tố loại bỏ ➔ DEBUGGING là diệt bọ/diệt lỗi.",
        theTrap: "Gõ thiếu một chữ G thành 'debuging'.",
        memoryHack: "💡 Gấp đôi chữ G để tiêu diệt tận gốc mọi con bọ BUG!",
        example: "Print statements are a primitive method for debugging."
      }
    },
    {
      id: "v_it_006",
      word: "COMPILER",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/kəmˈpaɪlər/",
      meaning: "Trình biên dịch mã nguồn thành mã máy",
      contextSentence: "The TypeScript ________ translates modern typed scripts into plain executable JavaScript.",
      example: "A JIT compiler translates bytecode during runtime execution.",
      spellingTip: "💡 C-O-M-P-I-L-E-R. Bắt đầu bằng COM-.",
      goldenTip: {
        rule: "Chương trình dịch toàn bộ mã nguồn ngôn ngữ bậc cao sang mã máy hoặc bytecode.",
        theTrap: "Nhầm lẫn Compiler (dịch cả file trước khi chạy) và Interpreter (thông dịch từng dòng).",
        memoryHack: "💡 COM + PILE (chồng chất code) + R = COMPILER!",
        example: "The C++ compiler flagged a missing semicolon error."
      }
    },
    {
      id: "v_it_007",
      word: "REFACTOR",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌriːˈfæktər/",
      meaning: "Tái cấu trúc mã nguồn mà không thay đổi hành vi",
      contextSentence: "Before introducing new payment features, the squad decided to ________ legacy codebase.",
      example: "Refactoring code improves readability and maintainability.",
      spellingTip: "💡 R-E (làm lại) + FACTOR = REFACTOR.",
      goldenTip: {
        rule: "Cải tiến cấu trúc bên trong phần mềm giúp code sạch, dễ bảo trì hơn mà không sửa đổi kết quả đầu ra.",
        theTrap: "Nhầm giữa refactor (tái cấu trúc code cũ) và rewrite (viết lại từ đầu).",
        memoryHack: "💡 RE (làm mới) + FACTOR (yếu tố mã) ➔ Dọn dẹp nhà cửa cho code!",
        example: "We refactored the monolith into modular domain services."
      }
    },
    {
      id: "v_it_008",
      word: "RECURSION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/rɪˈkɜːrʒn/",
      meaning: "Đệ quy (hàm gọi lại chính nó)",
      contextSentence: "Calculating Fibonacci numbers or traversing nested binary trees is naturally suited for ________.",
      example: "Every recursive solution must define a clear base condition.",
      spellingTip: "💡 R-E-C-U-R-S-I-O-N. Đuôi -SION phát âm là /ʒn/.",
      goldenTip: {
        rule: "Kỹ thuật lập trình trong đó hàm gọi lại chính nó cho đến khi chạm điều kiện dừng (base case).",
        theTrap: "Quên điều kiện dừng (base case) dẫn đến lỗi kinh hoàng: Stack Overflow.",
        memoryHack: "💡 RE (lặp lại) + CUR (chạy vòng) ➔ Hàm tự gọi chính mình!",
        example: "Without a base case, recursion causes stack overflow."
      }
    },
    {
      id: "v_it_009",
      word: "SYNTAX",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈsɪntæks/",
      meaning: "Cú pháp của ngôn ngữ lập trình",
      contextSentence: "A single missing curly bracket will trigger an immediate ________ error during compilation.",
      example: "Python syntax emphasizes clean readability through strict indentation.",
      spellingTip: "💡 S-Y-N-T-A-X. Có chữ Y và kết thúc bằng chữ X.",
      goldenTip: {
        rule: "Hệ thống quy tắc ngữ pháp xác định cấu trúc hợp lệ của các câu lệnh trong ngôn ngữ lập trình.",
        theTrap: "Nhầm lẫn giữa Syntax Error (lỗi cú pháp gõ sai) và Logic Error (chạy được nhưng tính sai).",
        memoryHack: "💡 SYN + TAX (luật đóng thuế cho code) ➔ Đúng cú pháp code mới chạy!",
        example: "Check your syntax before committing code."
      }
    },
    {
      id: "v_it_010",
      word: "POLYMORPHISM",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌpɒlɪˈmɔːfɪzəm/",
      meaning: "Tính đa hình trong lập trình hướng đối tượng (OOP)",
      contextSentence: "Method overriding in subclass hierarchies demonstrates dynamic runtime ________ in Java.",
      example: "Polymorphism allows treating different derived classes through a common interface.",
      spellingTip: "💡 P-O-L-Y (nhiều) + MORPH (hình thái) + ISM = POLYMORPHISM.",
      goldenTip: {
        rule: "1 trong 4 trụ cột OOP: Khả năng cho phép các đối tượng khác nhau phản hồi cùng một phương thức theo cách riêng.",
        theTrap: "Viết sai chính tả chữ morph thành 'morfism'.",
        memoryHack: "💡 POLY (đa) + MORPH (biến hình) ➔ Một giao diện, vạn cách biến hóa!",
        example: "Polymorphism simplifies extending complex domain models."
      }
    },
    {
      id: "v_it_011",
      word: "INHERITANCE",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪnˈherɪtəns/",
      meaning: "Tính kế thừa trong hướng đối tượng (OOP)",
      contextSentence: "Through class ________, child classes inherit fields and methods from their abstract parent.",
      example: "Favor composition over inheritance to prevent fragile class hierarchies.",
      spellingTip: "💡 I-N-H-E-R-I-T-A-N-C-E. Đuôi -ANCE chứ không phải -ENCE.",
      goldenTip: {
        rule: "Cơ chế cho phép một lớp con tái sử dụng và mở rộng thuộc tính/phương thức của lớp cha.",
        theTrap: "Viết sai đuôi thành 'inheritence' (chữ A đổi thành E là sai).",
        memoryHack: "💡 INHERIT (thừa kế tài sản) + ANCE = INHERITANCE!",
        example: "The Dog class uses inheritance to extend Animal."
      }
    },
    {
      id: "v_it_012",
      word: "INTERFACE",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɪntərfeɪs/",
      meaning: "Giao diện hợp đồng lập trình / lớp trừu tượng",
      contextSentence: "The service class must implement the payment ________ to support diverse payment gateways.",
      example: "An interface defines method signatures without providing concrete implementations.",
      spellingTip: "💡 INTER (bên trong/kết nối) + FACE (khuôn mặt) = INTERFACE.",
      goldenTip: {
        rule: "Bản hợp đồng trừu tượng quy định các hàm mà một class bắt buộc phải cài đặt.",
        theTrap: "Nhầm lẫn Interface trong code (API contract) với User Interface (UI màn hình người dùng).",
        memoryHack: "💡 INTER + FACE: Bộ mặt giao tiếp chung giữa các mô-đun phần mềm!",
        example: "Depend on abstractions and interfaces, not concrete classes."
      }
    },
    {
      id: "v_it_013",
      word: "ITERATION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌɪtəˈreɪʃn/",
      meaning: "Vòng lặp / bước lặp lại trong thuật toán hoặc Sprint Agile",
      contextSentence: "In each ________ of the loop, the pointer shifts sequentially to the next node.",
      example: "Agile teams deliver incremental value in two-week iterations.",
      spellingTip: "💡 I-T-E-R-A-T-I-O-N. Động từ là ITERATE.",
      goldenTip: {
        rule: "Hành động lặp đi lặp lại một quy trình xử lý; trong Agile Scrum là một chu kỳ phát triển (Sprint).",
        theTrap: "Viết nhầm chữ I đầu tiên thành E 'eteration'.",
        memoryHack: "💡 ITERATE (lặp) + TION = ITERATION!",
        example: "The outer loop requires ten iterations to complete."
      }
    },
    {
      id: "v_it_014",
      word: "DEPENDENCY",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/dɪˈpendənsi/",
      meaning: "Sự phụ thuộc / thư viện phụ thuộc",
      contextSentence: "We use Maven to automatically resolve and download every third-party ________ in our project.",
      example: "Dependency Injection promotes loose coupling between system components.",
      spellingTip: "💡 D-E-P-E-N-D-E-N-C-Y. Đuôi -ENCY (chữ E chứ không phải A).",
      goldenTip: {
        rule: "Một thư viện, mô-đun hoặc dịch vụ bên ngoài mà phần mềm của bạn cần để hoạt động được.",
        theTrap: "Viết sai thành 'dependancy' (sai chính tả phổ biến).",
        memoryHack: "💡 DEPEND (phụ thuộc) + ENCY = DEPENDENCY!",
        example: "Circular dependencies can prevent the application context from starting."
      }
    },
    {
      id: "v_it_015",
      word: "REPOSITORY",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/rɪˈpɒzətɔːri/",
      meaning: "Kho lưu trữ mã nguồn (Git Repo) / Tầng dữ liệu",
      contextSentence: "Clone the official Git ________ to your local workstation before creating a feature branch.",
      example: "The GitHub repository contains unit tests and CI workflow files.",
      spellingTip: "💡 R-E-P-O-S-I-T-O-R-Y. Dân IT gọi tắt là REPO.",
      goldenTip: {
        rule: "Nơi lưu trữ tập trung lịch sử commit mã nguồn của dự án (Git repository), hoặc Data Access Layer.",
        theTrap: "Viết thiếu chữ O 'repositry' hoặc sai âm /z/ thành /s/.",
        memoryHack: "💡 REPO (kho) + SITORY = REPOSITORY!",
        example: "Push your committed changes to the remote repository."
      }
    },
    {
      id: "v_it_016",
      word: "PARAMETER",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/pəˈræmɪtər/",
      meaning: "Tham số hình thức truyền vào hàm",
      contextSentence: "The authentication method accepts username and password as its input ________ values.",
      example: "Hyperparameter tuning optimizes deep learning accuracy.",
      spellingTip: "💡 P-A-R-A-M-E-T-E-R. Trọng âm rơi vào âm tiết thứ 2 /pəˈræmɪtər/.",
      goldenTip: {
        rule: "Biến số được khai báo trong định nghĩa hàm (Parameter) để nhận giá trị thực tế truyền vào (Argument).",
        theTrap: "Nhầm lẫn Parameter (biến ở định nghĩa hàm) và Argument (giá trị thực tế truyền lúc gọi hàm).",
        memoryHack: "💡 PARA (bên cạnh) + METER (đo lường) = PARAMETER!",
        example: "Validate every query parameter before processing database queries."
      }
    },
    {
      id: "v_it_017",
      word: "BOOLEAN",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈbuːliən/",
      meaning: "Kiểu dữ liệu nhị phân logic (True / False)",
      contextSentence: "The function returns a ________ value indicating whether the user session remains valid.",
      example: "Boolean expressions are fundamental for conditional branching.",
      spellingTip: "💡 B-O-O-L-E-A-N. Viết hoa theo tên nhà toán học George Boole.",
      goldenTip: {
        rule: "Kiểu dữ liệu cơ bản trong hầu hết ngôn ngữ, chỉ có hai trạng thái: true hoặc false (1 hoặc 0).",
        theTrap: "Gõ thiếu 1 chữ O thành 'bolean' hoặc 'boolen'.",
        memoryHack: "💡 2 chữ O (0 và 1) ➔ B-O-O-LEAN!",
        example: "IsActive is a boolean flag storing user account status."
      }
    },
    {
      id: "v_it_018",
      word: "EXCEPTION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪkˈsepʃn/",
      meaning: "Ngoại lệ / lỗi bất thường phát sinh khi runtime",
      contextSentence: "Wrap risky file input operations inside a try-catch block to gracefully handle any ________.",
      example: "A NullPointerException occurs when accessing uninitialized object references.",
      spellingTip: "💡 E-X-C-E-P-T-I-O-N. Có chữ C đứng sau chữ X.",
      goldenTip: {
        rule: "Sự kiện ngoại lệ xảy ra trong quá trình thực thi làm gián đoạn luồng lệnh bình thường.",
        theTrap: "Viết thiếu chữ C thành 'exseption' hoặc 'exeption'.",
        memoryHack: "💡 EXCEPT (trừ ra) + ION = EXCEPTION (Tình huống ngoại lệ)!",
        example: "Custom exceptions provide descriptive error context to API clients."
      }
    },
    {
      id: "v_it_019",
      word: "ASYNCHRONOUS",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/eɪˈsɪŋkrənəs/",
      meaning: "Bất đồng bộ (không chặn luồng thực thi chính)",
      contextSentence: "Node.js utilizes an event-driven, ________ I/O model to handle thousands of concurrent requests.",
      example: "Async/await syntax simplifies writing asynchronous JavaScript code.",
      spellingTip: "💡 A-S-Y-N-C-H-R-O-N-O-U-S. Viết tắt là ASYNC.",
      goldenTip: {
        rule: "Phương thức thực thi tác vụ nền mà không bắt luồng chính phải dừng lại chờ đợi kết quả.",
        theTrap: "Viết sai cụm 'chrono' thành 'crono' hoặc nhầm với synchronous (đồng bộ).",
        memoryHack: "💡 A (không) + SYNCHRONOUS (đồng bộ) = BẤT ĐỒNG BỘ (ASYNC)!",
        example: "Send asynchronous events to Kafka to decouple billing services."
      }
    },
    {
      id: "v_it_020",
      word: "CONCURRENCY",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/kənˈkɜːrənsi/",
      meaning: "Xử lý đồng thời / đa luồng (Multi-threading)",
      contextSentence: "Go goroutines provide lightweight ________ primitives with minimal memory overhead.",
      example: "Proper synchronization prevents race conditions in high-concurrency environments.",
      spellingTip: "💡 C-O-N-C-U-R-R-E-N-C-Y. Chú ý 2 chữ R.",
      goldenTip: {
        rule: "Khả năng của hệ thống thực thi nhiều phép tính hoặc tác vụ đan xen nhau trong cùng một khoảng thời gian.",
        theTrap: "Viết thiếu 1 chữ R thành 'concurrency' ➔ 'concurency'.",
        memoryHack: "💡 2 con ngựa cùng phi (2 chữ R) ➔ CONCURRENCY!",
        example: "High concurrency requires distributed locking mechanisms."
      }
    },
    {
      id: "v_it_021",
      word: "MIDDLEWARE",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈmɪdlwer/",
      meaning: "Phần mềm trung gian xử lý request/response",
      contextSentence: "We configured an authentication ________ to inspect JWT tokens before requests reach controllers.",
      example: "Express.js uses middleware chains for logging, CORS, and body parsing.",
      spellingTip: "💡 MIDDLE (ở giữa) + WARE (phần mềm) = MIDDLEWARE.",
      goldenTip: {
        rule: "Tầng phần mềm nằm giữa hệ điều hành/web server và ứng dụng để lọc, biến đổi và bảo mật dữ liệu.",
        theTrap: "Viết tách rời thành 'middle ware'.",
        memoryHack: "💡 Đứng ở MIDDLE canh cửa ➔ MIDDLEWARE!",
        example: "Rate limiting middleware protects APIs from denial-of-service floods."
      }
    },
    {
      id: "v_it_022",
      word: "SERIALIZATION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌsɪəriəlaɪˈzeɪʃn/",
      meaning: "Tuần tự hóa đối tượng thành chuỗi byte / JSON",
      contextSentence: "JSON ________ converts in-memory objects into a text format ready for network transmission.",
      example: "Deserialization reconstructs the original object from raw bytes.",
      spellingTip: "💡 S-E-R-I-A-L-I-Z-A-T-I-O-N. Xuất phát từ chữ SERIAL.",
      goldenTip: {
        rule: "Quá trình chuyển đổi cấu trúc dữ liệu hoặc đối tượng trong RAM thành định dạng có thể lưu trữ hoặc truyền qua mạng.",
        theTrap: "Nhầm lẫn giữa Serialization (đóng gói đối tượng) và Deserialization (mở gói ngược lại).",
        memoryHack: "💡 SERIAL (xếp hàng nối đuôi nhau thành chuỗi) ➔ SERIALIZATION!",
        example: "Jackson library provides blazing fast JSON serialization in Spring."
      }
    },
    {
      id: "v_it_023",
      word: "IMMUTABLE",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪˈmjuːtəbl/",
      meaning: "Bất biến / không thể bị thay đổi giá trị sau khi tạo",
      contextSentence: "In Java, String objects are strictly ________, ensuring thread safety across concurrent threads.",
      example: "Immutable data structures eliminate accidental state mutations in functional programming.",
      spellingTip: "💡 Có 2 chữ M: I-M-M-U-T-A-B-L-E.",
      goldenTip: {
        rule: "Đối tượng mà trạng thái của nó không thể bị biến đổi sau khi đã được khởi tạo hoàn tất.",
        theTrap: "Viết 1 chữ M thành 'imutable'.",
        memoryHack: "💡 IM- (không) + MUTABLE (đột biến/thay đổi) = BẤT BIẾN!",
        example: "Creating immutable records prevents hidden bugs."
      }
    },
    {
      id: "v_it_024",
      word: "DEPRECATED",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈdeprəkeɪtɪd/",
      meaning: "Đã lỗi thời / không khuyến nghị tiếp tục sử dụng",
      contextSentence: "The old cryptographic hashing algorithm has been marked as ________ due to security flaws.",
      example: "Deprecated API methods will be permanently removed in the next major version.",
      spellingTip: "💡 D-E-P-R-E-C-A-T-E-D. Bắt đầu bằng DEPRE-.",
      goldenTip: {
        rule: "Đánh dấu cảnh báo tính năng đã lỗi thời, vẫn còn chạy được nhưng sẽ bị xóa sổ ở phiên bản tương lai.",
        theTrap: "Viết nhầm chữ C thành S 'depresiated' (nhầm sang khấu hao tài sản).",
        memoryHack: "💡 DEPRE (tụt hậu) + CATED = DEPRECATED (Sắp bị khai tử)!",
        example: "Replace deprecated libraries with supported modern alternatives."
      }
    },
    {
      id: "v_it_025",
      word: "OPTIMIZATION",
      category: "tech_ai",
      subCategoryKey: "dev",
      subCategoryLabel: "Lập Trình & Thuật Toán",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌɒptɪmaɪˈzeɪʃn/",
      meaning: "Sự tối ưu hóa hiệu năng phần mềm và phần cứng",
      contextSentence: "Database query ________ reduced page response latency from two seconds down to fifty milliseconds.",
      example: "Premature optimization is the root of all evil in programming.",
      spellingTip: "💡 O-P-T-I-M-I-Z-A-T-I-O-N (Mỹ) hoặc OPTIMISATION (Anh).",
      goldenTip: {
        rule: "Quá trình tinh chỉnh mã nguồn và hệ thống để chạy nhanh hơn, tốn ít RAM và CPU hơn.",
        theTrap: "Tối ưu hóa quá sớm khi chưa đo đạc benchmark thực tế (Premature optimization).",
        memoryHack: "💡 OPTIMAL (tối ưu) ➔ OPTIMIZATION!",
        example: "Algorithmic optimization yield larger speedups than compiler flags."
      }
    },

    // --- NHÓM 2: HẠ TẦNG, CLOUD & DEVOPS (CLOUD, INFRA & DEVOPS - 25 TỪ) ---
    {
      id: "v_it_026",
      word: "CONTAINER",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/kənˈteɪnər/",
      meaning: "Vỏ thùng đóng gói ứng dụng độc lập (Docker Container)",
      contextSentence: "Docker packages our microservice inside a portable ________ that runs identically everywhere.",
      example: "Containers share the host operating system kernel, making them lightweight.",
      spellingTip: "💡 C-O-N-T-A-I-N-E-R. Động từ gốc là CONTAIN (chứa đựng).",
      goldenTip: {
        rule: "Đơn vị phần mềm tiêu chuẩn đóng gói mã nguồn và tất cả các dependencies để ứng dụng chạy độc lập.",
        theTrap: "Nhầm lẫn giữa Container (dùng chung kernel máy chủ) và Virtual Machine (có cả OS riêng).",
        memoryHack: "💡 Thùng container hàng hải chở code đi muôn nơi không sợ lỗi môi trường!",
        example: "Stop and prune all unused Docker containers."
      }
    },
    {
      id: "v_it_027",
      word: "DEPLOYMENT",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/dɪˈplɔɪmənt/",
      meaning: "Quá trình triển khai ứng dụng lên máy chủ production",
      contextSentence: "The automated CI/CD pipeline triggered a blue-green ________ with zero application downtime.",
      example: "Automated deployment minimizes human errors during production rollouts.",
      spellingTip: "💡 D-E-P-L-O-Y-M-E-N-T. Động từ là DEPLOY.",
      goldenTip: {
        rule: "Tập hợp các bước đưa ứng dụng từ kho mã nguồn ra môi trường hoạt động thực tế cho người dùng.",
        theTrap: "Deploy thủ công bằng tay (Manual deploy) dễ gây lỗi sai phiên bản cấu hình.",
        memoryHack: "💡 DEPLOY (dàn quân ra trận) ➔ DEPLOYMENT (đưa code lên sóng)!",
        example: "The canary deployment revealed a critical memory spike."
      }
    },
    {
      id: "v_it_028",
      word: "PIPELINE",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈpaɪplaɪn/",
      meaning: "Đường ống tự động hóa CI/CD trong DevOps",
      contextSentence: "The GitHub Actions ________ automatically runs unit tests on every pull request.",
      example: "A failed linting step will halt the deployment pipeline immediately.",
      spellingTip: "💡 PIPE (ống dẫn) + LINE (đường ray) = PIPELINE.",
      goldenTip: {
        rule: "Chuỗi các công đoạn tự động liên tiếp: Build ➔ Test ➔ Security Scan ➔ Package ➔ Deploy.",
        theTrap: "Viết tách rời thành 'pipe line'.",
        memoryHack: "💡 Dòng chảy đường ống dẫn code từ máy dev thẳng lên cloud!",
        example: "Optimize pipeline stages to reduce continuous integration build times."
      }
    },
    {
      id: "v_it_029",
      word: "KUBERNETES",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌkjuːbərˈnetiːz/",
      meaning: "Hệ thống điều phối container mã nguồn mở (K8s)",
      contextSentence: "The enterprise relies on ________ to orchestrate container autoscaling and self-healing.",
      example: "Kubernetes manages clusters of nodes hosting containerized workloads.",
      spellingTip: "💡 K-U-B-E-R-N-E-T-E-S. Dân công nghệ gọi tắt là K8s (8 chữ giữa k và s).",
      goldenTip: {
        rule: "Nền tảng của Google trao cho CNCF, chuyên tự động hóa triển khai, mở rộng và quản lý container.",
        theTrap: "Viết sai chính tả chữ R và N thành 'Kubernates'.",
        memoryHack: "💡 Tiếng Hy Lạp nghĩa là 'Người lái tàu' bánh lái container!",
        example: "Deploy your manifests directly to the Kubernetes cluster."
      }
    },
    {
      id: "v_it_030",
      word: "ORCHESTRATION",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌɔːrkɪˈstreɪʃn/",
      meaning: "Sự điều phối tự động hóa các dịch vụ và tài nguyên",
      contextSentence: "Cloud workflow ________ coordinates asynchronous task execution across multiple worker services.",
      example: "Container orchestration automates scheduling, health checks, and failovers.",
      spellingTip: "💡 O-R-C-H-E-S-T-R-A (dàn nhạc giao hưởng) + TION = ORCHESTRATION.",
      goldenTip: {
        rule: "Sự chỉ huy và phối hợp nhịp nhàng giữa hàng trăm container/microservices như một dàn nhạc giao hưởng.",
        theTrap: "Viết thiếu chữ H trong cụm 'che' thành 'orcestration'.",
        memoryHack: "💡 ORCHESTRA (nhạc trưởng) đứng chỉ huy cả bầy server hoạt động!",
        example: "Docker Swarm offers lightweight container orchestration."
      }
    },
    {
      id: "v_it_031",
      word: "SERVERLESS",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈsɜːrvərləs/",
      meaning: "Mô hình không máy chủ (Cloud tính phí theo lượt gọi hàm)",
      contextSentence: "AWS Lambda provides a ________ compute architecture where you only pay when code executes.",
      example: "Serverless functions scale automatically to match fluctuating web traffic.",
      spellingTip: "💡 SERVER + LESS (không có) = SERVERLESS.",
      goldenTip: {
        rule: "Mô hình điện toán đám mây cho phép lập trình viên chạy code mà không cần quản trị hay cài đặt server vật lý.",
        theTrap: "Hiểu lầm là 'hoàn toàn không có server'. Thực chất nhà cung cấp cloud tự quản lý server ngầm bên dưới.",
        memoryHack: "💡 SERVER-LESS: Lập trình viên không cần bận tâm bảo trì máy chủ!",
        example: "Cold start latency is a recognized trade-off in serverless designs."
      }
    },
    {
      id: "v_it_032",
      word: "SCALABILITY",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌskeɪləˈbɪləti/",
      meaning: "Khả năng co giãn mở rộng chịu tải của hệ thống",
      contextSentence: "Horizontal ________ allows our web cluster to handle Black Friday shopping spikes effortlessly.",
      example: "Stateless architectures significantly enhance overall system scalability.",
      spellingTip: "💡 S-C-A-L-A-B-I-L-I-T-Y. Tính từ là SCALABLE.",
      goldenTip: {
        rule: "Khả năng của phần mềm/hệ thống tăng trưởng dung lượng xử lý mượt mà khi lượng người dùng tăng đột biến.",
        theTrap: "Viết nhầm đuôi -ABILITY thành 'scaleability' (thừa chữ E).",
        memoryHack: "💡 SCALE (chiếc thang leo cao) + ABILITY = Khả năng mở rộng không giới hạn!",
        example: "Horizontal scaling adds more machines, whereas vertical scaling adds RAM."
      }
    },
    {
      id: "v_it_033",
      word: "BANDWIDTH",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈbændwɪdθ/",
      meaning: "Băng thông đường truyền mạng dữ liệu",
      contextSentence: "High-resolution video streaming consumes enormous network ________ across regional internet hubs.",
      example: "Compressing API payloads preserves precious mobile bandwidth.",
      spellingTip: "💡 BAND (dải tần) + WIDTH (độ rộng) = BANDWIDTH.",
      goldenTip: {
        rule: "Lượng dữ liệu tối đa có thể truyền tải qua một kết nối mạng trong một giây (thường đo bằng Mbps/Gbps).",
        theTrap: "Nhầm lẫn giữa Bandwidth (độ rộng ống nước) và Latency (tốc độ nước chảy).",
        memoryHack: "💡 Băng thông càng rộng (WIDTH) thì dữ liệu truyền tải càng nhanh!",
        example: "The cloud data transfer bandwidth fee surprised the finance team."
      }
    },
    {
      id: "v_it_034",
      word: "PROVISIONING",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/prəˈvɪʒənɪŋ/",
      meaning: "Cung ứng và thiết lập tài nguyên máy chủ tự động",
      contextSentence: "Terraform handles the automated ________ of cloud virtual networks and storage buckets.",
      example: "Infrastructure as Code enables rapid, repeatable environment provisioning.",
      spellingTip: "💡 P-R-O-V-I-S-I-O-N-I-N-G. Động từ là PROVISION.",
      goldenTip: {
        rule: "Quá trình chuẩn bị, phân bổ và thiết lập máy chủ, mạng và cấu hình sẵn sàng hoạt động.",
        theTrap: "Viết nhầm chữ S thành T 'provitioning'.",
        memoryHack: "💡 PROVISION (chuẩn bị lương thảo tài nguyên) ➔ Cung ứng hạ tầng!",
        example: "Automated provisioning reduces server setup from days to minutes."
      }
    },
    {
      id: "v_it_035",
      word: "VIRTUALIZATION",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌvɜːrtʃuələˈzeɪʃn/",
      meaning: "Công nghệ ảo hóa máy chủ phần cứng",
      contextSentence: "Hardware ________ allows multiple isolated operating systems to share physical CPU cores.",
      example: "Virtualization transformed modern corporate data center economics.",
      spellingTip: "💡 V-I-R-T-U-A-L (ảo) + IZATION = VIRTUALIZATION.",
      goldenTip: {
        rule: "Công nghệ cho phép chia sẻ 1 máy chủ vật lý thành nhiều máy ảo (VM) chạy độc lập qua Hypervisor.",
        theTrap: "Viết thiếu chữ U trong cụm 'tual' thành 'virtalization'.",
        memoryHack: "💡 VIRTUAL (thực tế ảo) ➔ Công nghệ biến 1 máy thật thành 100 máy ảo!",
        example: "Hypervisors manage hardware resource virtualization."
      }
    },
    {
      id: "v_it_036",
      word: "CLUSTER",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈklʌstər/",
      meaning: "Cụm nhiều máy chủ liên kết hoạt động như một hệ thống",
      contextSentence: "Our Elasticsearch ________ spans fifteen physical servers to ensure rapid indexing speeds.",
      example: "If a worker node crashes, the cluster redistributes its active tasks.",
      spellingTip: "💡 C-L-U-S-T-E-R. Âm /klʌstər/.",
      goldenTip: {
        rule: "Tập hợp các máy tính hoặc máy chủ được kết nối mạng và làm việc cùng nhau như một máy tính khổng lồ duy nhất.",
        theTrap: "Dùng từ 'group' hoặc 'bunch' trong tài liệu kỹ thuật thay vì chuẩn thuật ngữ 'cluster'.",
        memoryHack: "💡 Một chùm/cụm nho liên kết chặt chẽ ➔ CLUSTER!",
        example: "The database cluster maintains high availability through quorum voting."
      }
    },
    {
      id: "v_it_037",
      word: "INSTANCE",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɪnstəns/",
      meaning: "Thực thể / một máy chủ ảo đang chạy (EC2 Instance)",
      contextSentence: "Launch an EC2 compute ________ with 64 gigabytes of memory to run our machine learning job.",
      example: "Each microservice instance registers itself with the discovery service.",
      spellingTip: "💡 I-N-S-T-A-N-C-E. Đuôi -ANCE chứ không phải -ENCE.",
      goldenTip: {
        rule: "Một bản sao cụ thể đang hoạt động của máy ảo trên đám mây, hoặc một đối tượng được tạo ra từ class (OOP).",
        theTrap: "Viết nhầm chữ A thành E 'instence'.",
        memoryHack: "💡 INSTANT (ngay tức thì) ➔ Khởi tạo 1 máy chủ ảo INSTANCE trong 10 giây!",
        example: "Terminate idle cloud instances to reduce unnecessary monthly billing."
      }
    },
    {
      id: "v_it_038",
      word: "LATENCY",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈleɪtənsi/",
      meaning: "Độ trễ truyền dữ liệu mạng / thời gian phản hồi",
      contextSentence: "Placing content delivery edge nodes closer to users significantly decreases round-trip network ________.",
      example: "High-frequency trading applications demand sub-millisecond latency.",
      spellingTip: "💡 L-A-T-E-N-C-Y. Bắt đầu bằng LATE (chậm/muộn).",
      goldenTip: {
        rule: "Khoảng thời gian cần thiết để một gói tin di chuyển từ điểm nguồn đến điểm đích và quay trở lại.",
        theTrap: "Nhầm lẫn giữa Latency (độ trễ thời gian) và Throughput (khối lượng dữ liệu tải được).",
        memoryHack: "💡 LATE (đến muộn) ➔ LATENCY là độ trễ thời gian phản hồi!",
        example: "Network latency between continents is constrained by the speed of light in fiber."
      }
    },
    {
      id: "v_it_039",
      word: "THROUGHPUT",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈθruːpʊt/",
      meaning: "Năng suất thông lượng xử lý dữ liệu của hệ thống",
      contextSentence: "The message broker sustains a sustained peak ________ of one hundred thousand events per second.",
      example: "Benchmark results confirmed that batch processing doubled system throughput.",
      spellingTip: "💡 THROUGH (xuyên qua) + PUT (đặt vào) = THROUGHPUT.",
      goldenTip: {
        rule: "Số lượng đơn vị thông tin hoặc giao dịch mà một hệ thống có thể xử lý thành công trong một đơn vị thời gian (TPS / QPS).",
        theTrap: "Viết thiếu chữ H trong 'through' thành 'throuput'.",
        memoryHack: "💡 Dữ liệu đi XUYÊN QUA (THROUGH) hệ thống trót lọt ➔ THROUGHPUT!",
        example: "Disk I/O throughput bottlenecks database backup performance."
      }
    },
    {
      id: "v_it_040",
      word: "LOADBALANCER",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈloʊdˌbælənsər/",
      meaning: "Bộ cân bằng tải phân phối lưu lượng truy cập",
      contextSentence: "The reverse proxy acts as an intelligent ________ distributing traffic evenly among healthy upstream servers.",
      example: "A loadbalancer performs health checks to avoid routing traffic to crashed nodes.",
      spellingTip: "💡 LOAD (tải) + BALANCER (người giữ thăng bằng) = LOADBALANCER.",
      goldenTip: {
        rule: "Thiết bị hoặc dịch vụ phần mềm điều hướng chia tải lưu lượng mạng đến nhiều máy chủ backend.",
        theTrap: "Viết tách rời hoặc sai chính tả balance thành 'balencer'.",
        memoryHack: "💡 LOAD (gánh nặng tải) được BALANCE (chia đều) ➔ Không server nào bị quá tải!",
        example: "NGINX is widely deployed as an efficient HTTP loadbalancer."
      }
    },
    {
      id: "v_it_041",
      word: "REGISTRY",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈredʒɪstri/",
      meaning: "Kho đăng ký lưu trữ ảnh container (Docker Hub, ECR)",
      contextSentence: "Push the production container image tagged with the commit SHA to our private Docker ________.",
      example: "Kubernetes pulls deployment images directly from a secure container registry.",
      spellingTip: "💡 R-E-G-I-S-T-R-Y. Bắt đầu bằng REGIST-.",
      goldenTip: {
        rule: "Dịch vụ lưu trữ và phân phối các container images có quản lý phiên bản và bảo mật xác thực.",
        theTrap: "Nhầm lẫn giữa Repository (1 ứng dụng cụ thể) và Registry (kho chứa toàn bộ các repositories).",
        memoryHack: "💡 Sổ hộ khẩu đăng ký (REGISTRY) lưu danh mọi Docker Image!",
        example: "Scan container images in your registry for known security vulnerabilities."
      }
    },
    {
      id: "v_it_042",
      word: "REDUNDANCY",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/rɪˈdʌndənsi/",
      meaning: "Tính dự phòng dự trữ chống sự cố đơn điểm (High Availability)",
      contextSentence: "Geographic data center ________ guarantees service continuity even during catastrophic earthquakes.",
      example: "Dual power supplies provide hardware redundancy for mission-critical servers.",
      spellingTip: "💡 R-E-D-U-N-D-A-N-C-Y. Đuôi -ANCY.",
      goldenTip: {
        rule: "Việc nhân đôi hoặc nhân ba các thành phần quan trọng (server, nguồn điện, đường truyền) để phòng khi một cái hỏng thì cái khác chạy thay.",
        theTrap: "Trong văn viết đời thường redundancy mang nghĩa tiêu cực (thừa thãi), nhưng trong IT đây là tiêu chuẩn vàng (dự phòng an toàn).",
        memoryHack: "💡 Luôn có phương án B, C dự phòng ➔ Đó là REDUNDANCY!",
        example: "Eliminate single points of failure by implementing architectural redundancy."
      }
    },
    {
      id: "v_it_043",
      word: "REPLICATION",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌreplɪˈkeɪʃn/",
      meaning: "Quá trình nhân bản / sao chép dữ liệu đa máy chủ",
      contextSentence: "Master-replica database ________ copies transaction logs asynchronously to multiple read nodes.",
      example: "Cross-region replication safeguards disaster recovery objectives.",
      spellingTip: "💡 R-E-P-L-I-C-A-T-I-O-N. Động từ là REPLICATE.",
      goldenTip: {
        rule: "Quá trình liên tục đồng bộ và sao chép dữ liệu từ máy chủ chính sang các máy chủ phụ.",
        theTrap: "Nhầm Replication (đồng bộ dữ liệu liên tục theo thời gian thực) với Backup (sao lưu định kỳ đóng gói thành file).",
        memoryHack: "💡 REPLICA (bản sao chuẩn) ➔ REPLICATION là công nghệ nhân bản dữ liệu!",
        example: "Replication lag can temporarily serve stale read queries."
      }
    },
    {
      id: "v_it_044",
      word: "TELEMETRY",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/təˈlemətri/",
      meaning: "Dữ liệu đo đạc chỉ số hệ thống (Metrics, Traces, Logs)",
      contextSentence: "OpenTelemetry standardizes the collection of distributed traces and runtime ________ data.",
      example: "Real-time telemetry feeds our live observability dashboards.",
      spellingTip: "💡 T-E-L-E-M-E-T-R-Y. Bắt đầu bằng TELE (từ xa) + METRY (đo lường).",
      goldenTip: {
        rule: "Việc tự động thu thập và truyền phát các thông số đo đạc hiệu năng từ xa về trung tâm giám sát.",
        theTrap: "Nhầm Telemetry (dữ liệu đo đạc hiệu năng máy) với User Data (dữ liệu cá nhân người dùng).",
        memoryHack: "💡 TELE (từ xa) + METRY (máy đo) ➔ Đo đạc sức khỏe server từ xa!",
        example: "Analyze telemetry logs to pinpoint distributed microservice bottlenecks."
      }
    },
    {
      id: "v_it_045",
      word: "MONITORING",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈmɒnɪtərɪŋ/",
      meaning: "Hoạt động giám sát vận hành và cảnh báo sức khỏe hệ thống",
      contextSentence: "Prometheus and Grafana provide real-time infrastructure ________ and automated alert dispatching.",
      example: "Proactive monitoring catches abnormal memory consumption before server crashes.",
      spellingTip: "💡 M-O-N-I-T-O-R-I-N-G. Xuất phát từ chữ MONITOR.",
      goldenTip: {
        rule: "Tiến trình liên tục theo dõi tình trạng phần cứng, mạng và ứng dụng để cảnh báo ngay khi có sự cố.",
        theTrap: "Viết sai chính tả chữ O thành E 'moniter'.",
        memoryHack: "💡 MONITOR (màn hình quan sát) ➔ MONITORING là canh gác hệ thống 24/7!",
        example: "Set up synthetic monitoring to test critical user checkout flows."
      }
    },
    {
      id: "v_it_046",
      word: "DOWNTIME",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈdaʊntaɪm/",
      meaning: "Thời gian hệ thống bị sập / ngừng hoạt động",
      contextSentence: "Unexpected database corruption caused two hours of costly production ________ yesterday.",
      example: "Achieving 99.999% availability limits annual downtime to under five minutes.",
      spellingTip: "💡 DOWN (sập) + TIME (thời gian) = DOWNTIME (viết liền).",
      goldenTip: {
        rule: "Thời gian mà dịch vụ hoặc máy tính không thể truy cập được hoặc ngừng phục vụ người dùng (trái ngược với Uptime).",
        theTrap: "Viết tách rời thành 'down time'.",
        memoryHack: "💡 Server DOWN trong một khoảng TIME ➔ DOWNTIME (Cơn ác mộng của DevOps)!",
        example: "Scheduled maintenance downtime should occur during off-peak weekend hours."
      }
    },
    {
      id: "v_it_047",
      word: "FAILOVER",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfeɪloʊvər/",
      meaning: "Cơ chế tự động chuyển đổi sang máy chủ phụ khi máy chính sập",
      contextSentence: "When the primary database failed, the cluster executed an instant ________ to the standby replica.",
      example: "Automated failover ensures high availability without human intervention.",
      spellingTip: "💡 FAIL (lỗi) + OVER (chuyển qua) = FAILOVER (viết liền).",
      goldenTip: {
        rule: "Tính năng tự động chuyển quyền xử lý sang hệ thống dự phòng khi hệ thống chính gặp lỗi.",
        theTrap: "Nhầm lẫn giữa Failover (tự động chuyển server khi lỗi) và Switchover (chuyển server chủ động có lên lịch).",
        memoryHack: "💡 Khi máy chính FAIL thì lập tức OVER (nhảy qua) máy phụ!",
        example: "Test failover procedures regularly in staging environments."
      }
    },
    {
      id: "v_it_048",
      word: "MICROSERVICE",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈmaɪkroʊˌsɜːrvɪs/",
      meaning: "Kiến trúc vi dịch vụ chia nhỏ độc lập",
      contextSentence: "Each autonomous ________ owns its private database and communicates via REST or gRPC APIs.",
      example: "Migrating from a monolith to microservices allows teams to deploy independently.",
      spellingTip: "💡 MICRO (siêu nhỏ) + SERVICE (dịch vụ) = MICROSERVICE.",
      goldenTip: {
        rule: "Kiến trúc phần mềm chia nhỏ ứng dụng lớn thành một tập hợp các dịch vụ nhỏ, độc lập, có thể deploy riêng biệt.",
        theTrap: "Lạm dụng microservices khi hệ thống còn nhỏ, gây phức tạp mạng và latency không cần thiết.",
        memoryHack: "💡 Chia nhỏ khối đá khổng lồ MONOLITH thành từng viên vi dịch vụ MICROSERVICE!",
        example: "The authentication microservice handles token verification across the platform."
      }
    },
    {
      id: "v_it_049",
      word: "AUTOMATION",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌɔːtəˈmeɪʃn/",
      meaning: "Sự tự động hóa quy trình hệ thống",
      contextSentence: "Infrastructure ________ with Ansible and Terraform eliminated human deployment misconfigurations.",
      example: "Test automation accelerates software release velocity significantly.",
      spellingTip: "💡 A-U-T-O-M-A-T-I-O-N. Động từ là AUTOMATE.",
      goldenTip: {
        rule: "Ứng dụng công nghệ để thực thi các tác vụ lặp đi lặp lại mà không cần sự can thiệp thủ công của con người.",
        theTrap: "Nhầm lẫn giữa tính từ automatic và danh từ automation.",
        memoryHack: "💡 AUTO (tự động) + MATION ➔ Kỷ nguyên DevOps tự động hóa!",
        example: "Automation transforms software delivery pipelines."
      }
    },
    {
      id: "v_it_050",
      word: "INFRASTRUCTURE",
      category: "tech_ai",
      subCategoryKey: "cloud",
      subCategoryLabel: "Cloud & DevOps",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɪnfrəstrʌktʃər/",
      meaning: "Cơ sở hạ tầng phần cứng, mạng và máy chủ",
      contextSentence: "Migrating on-premise data center ________ to the cloud reduced operational server maintenance costs.",
      example: "Infrastructure as Code treats server topologies as version-controlled source files.",
      spellingTip: "💡 INFRA (bên dưới) + STRUCTURE (cấu trúc) = INFRASTRUCTURE.",
      goldenTip: {
        rule: "Nền tảng phần cứng, phần mềm, mạng lưới và thiết bị làm bệ đỡ cho toàn bộ hệ thống CNTT vận hành.",
        theTrap: "Viết sai cụm 'struc' thành 'stucture'.",
        memoryHack: "💡 Nền móng bên dưới (INFRA) của toàn bộ tòa nhà phần mềm!",
        example: "Cloud infrastructure provides elastic computational capacity on demand."
      }
    },

    // --- NHÓM 3: DATABASE & KIẾN TRÚC DỮ LIỆU (DATABASE & ARCHITECTURE - 25 TỪ) ---
    {
      id: "v_it_051",
      word: "DATABASE",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈdeɪtəbeɪs/",
      meaning: "Cơ sở dữ liệu lưu trữ điện tử có tổ chức",
      contextSentence: "The relational ________ uses primary and foreign keys to link customer accounts with orders.",
      example: "PostgreSQL is an advanced open-source object-relational database.",
      spellingTip: "💡 DATA + BASE = DATABASE (viết liền một từ).",
      goldenTip: {
        rule: "Bộ sưu tập dữ liệu được tổ chức có hệ thống, lưu trữ và truy cập điện tử từ máy tính.",
        theTrap: "Viết tách rời thành 'data base'.",
        memoryHack: "💡 Tòa nhà chứa DATA kiên cố trên BASE vững chắc!",
        example: "A database administrator manages storage performance and backups."
      }
    },
    {
      id: "v_it_052",
      word: "SCHEMA",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈskiːmə/",
      meaning: "Lược đồ cấu trúc cơ sở dữ liệu (bảng, cột, ràng buộc)",
      contextSentence: "Before creating tables, the database architect designed an entity-relationship ________.",
      example: "Schema alterations in production require careful zero-downtime execution.",
      spellingTip: "💡 S-C-H-E-M-A. Bắt đầu bằng SCH- (phát âm là /sk/).",
      goldenTip: {
        rule: "Bản vẽ thiết kế quy định cấu trúc tổ chức dữ liệu: tên bảng, các trường, kiểu dữ liệu và mối quan hệ ràng buộc.",
        theTrap: "Phát âm sai âm SCH thành 's-che-ma', phát âm đúng là /ˈskiːmə/.",
        memoryHack: "💡 SCHEMA = Bản thiết kế kiến trúc khung xương cho Database!",
        example: "NoSQL databases provide dynamic, schema-less flexibility."
      }
    },
    {
      id: "v_it_053",
      word: "INDEXING",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɪndeksɪŋ/",
      meaning: "Kỹ thuật đánh chỉ mục bảng tăng tốc độ truy vấn",
      contextSentence: "Adding B-Tree ________ on the email column accelerated user login lookup speed by tenfold.",
      example: "Excessive indexing slows down write and insert operations.",
      spellingTip: "💡 I-N-D-E-X-I-N-G. Xuất phát từ chữ INDEX.",
      goldenTip: {
        rule: "Cấu trúc dữ liệu phụ (thường là B-Tree hoặc Hash) giúp database tìm hàng triệu dòng trong chớp mắt mà không phải quét toàn bảng (Full Table Scan).",
        theTrap: "Tạo quá nhiều index trên các cột ít tìm kiếm làm chậm tốc độ INSERT và UPDATE.",
        memoryHack: "💡 Giống mục lục sách tra cứu nhanh trang sách ➔ INDEXING!",
        example: "Compound indexing covers multi-column WHERE clause filtering."
      }
    },
    {
      id: "v_it_054",
      word: "TRANSACTION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/trænˈzækʃn/",
      meaning: "Giao dịch dữ liệu trọn vẹn tuân thủ chuẩn ACID",
      contextSentence: "A banking money transfer executes within a database ________ to ensure both accounts balance.",
      example: "If any step fails, the entire transaction rolls back to preserve data integrity.",
      spellingTip: "💡 T-R-A-N-S-A-C-T-I-O-N. Đuôi -TION.",
      goldenTip: {
        rule: "Chuỗi các thao tác đọc/ghi cơ sở dữ liệu được thực thi như một đơn vị duy nhất: Hoặc tất cả thành công (Commit), hoặc không có gì xảy ra (Rollback).",
        theTrap: "Quên quản lý transaction khi chuyển tiền khiến tiền bị trừ ở người gửi nhưng chưa tới người nhận.",
        memoryHack: "💡 Tất cả hoặc không có gì (All or Nothing) ➔ TRANSACTION!",
        example: "ACID properties govern relational transaction guarantees."
      }
    },
    {
      id: "v_it_055",
      word: "MIGRATION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/maɪˈɡreɪʃn/",
      meaning: "Quá trình di chuyển dữ liệu hoặc nâng cấp lược đồ bảng",
      contextSentence: "Flyway executed the database schema ________ script automatically upon application startup.",
      example: "Cloud migration projects require rigorous data validation before cutover.",
      spellingTip: "💡 M-I-G-R-A-T-I-O-N. Động từ là MIGRATE.",
      goldenTip: {
        rule: "Quy trình chuyển đổi dữ liệu từ hệ thống này sang hệ thống khác, hoặc cập nhật phiên bản cấu trúc bảng database.",
        theTrap: "Viết sai chính tả chữ I đầu tiên thành Y 'mygration'.",
        memoryHack: "💡 Giống đàn chim di cư (MIGRATE) ➔ Di chuyển nâng cấp cơ sở dữ liệu!",
        example: "Roll back the database migration if unexpected schema conflicts emerge."
      }
    },
    {
      id: "v_it_056",
      word: "QUERY",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈkwɪəri/",
      meaning: "Câu lệnh truy vấn tìm kiếm hoặc sửa đổi dữ liệu",
      contextSentence: "Optimize the SQL ________ by replacing nested subqueries with indexed table joins.",
      example: "The search engine processes billions of user queries daily.",
      spellingTip: "💡 Q-U-E-R-Y. Phát âm là /ˈkwɪəri/.",
      goldenTip: {
        rule: "Một yêu cầu dữ liệu hoặc thông tin được gửi đến cơ sở dữ liệu bằng ngôn ngữ truy vấn (như SQL).",
        theTrap: "Phát âm sai thành 'kue-ri'. Phát âm chuẩn: /ˈkwɪəri/.",
        memoryHack: "💡 Câu hỏi chất vấn DATABASE để đòi dữ liệu ➔ QUERY!",
        example: "Parameterized queries defend web applications against SQL injection."
      }
    },
    {
      id: "v_it_057",
      word: "RELATIONAL",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/rɪˈleɪʃənl/",
      meaning: "Mô hình quan hệ (RDBMS) tổ chức theo các bảng",
      contextSentence: "MySQL and Oracle are classic ________ database systems built on relational algebra.",
      example: "Relational models enforce strict referential integrity between tables.",
      spellingTip: "💡 R-E-L-A-T-I-O-N-A-L. Xuất phát từ RELATION (mối quan hệ).",
      goldenTip: {
        rule: "Cơ sở dữ liệu lưu trữ dữ liệu dưới dạng các bảng (hàng và cột) có liên kết quan hệ chặt chẽ với nhau.",
        theTrap: "Nhầm lẫn giữa Relational Database (SQL) và Non-relational Database (NoSQL).",
        memoryHack: "💡 Các bảng có mối quan hệ (RELATION) mật thiết với nhau qua khóa ngoại!",
        example: "Relational schemas require upfront design and normalization."
      }
    },
    {
      id: "v_it_058",
      word: "NORMALIZATION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌnɔːrməlaɪˈzeɪʃn/",
      meaning: "Chuẩn hóa dữ liệu để loại bỏ trùng lặp dư thừa (1NF, 2NF, 3NF)",
      contextSentence: "Applying third normal form ________ eliminated redundant customer address records from the database.",
      example: "Normalization minimizes data duplication and anomalies during updates.",
      spellingTip: "💡 N-O-R-M-A-L-I-Z-A-T-I-O-N. Bắt đầu bằng NORMAL.",
      goldenTip: {
        rule: "Kỹ thuật thiết kế bảng để giảm thiểu sự dư thừa dữ liệu và ngăn chặn các lỗi bất thường khi cập nhật.",
        theTrap: "Chuẩn hóa quá đà (Over-normalization) làm phát sinh quá nhiều JOIN làm chậm tốc độ đọc.",
        memoryHack: "💡 Đưa dữ liệu về trạng thái quy chuẩn (NORMAL) gọn gàng nhất!",
        example: "Denormalization is sometimes practiced deliberately in data warehouses for read speed."
      }
    },
    {
      id: "v_it_059",
      word: "SHARDING",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈʃɑːrdɪŋ/",
      meaning: "Kỹ thuật phân mảnh dữ liệu theo chiều ngang ra nhiều server",
      contextSentence: "Database ________ splits our 100-terabyte user table across multiple independent server nodes.",
      example: "Choosing an even shard key prevents hot-spotting during write spikes.",
      spellingTip: "💡 S-H-A-R-D-I-N-G. Shard nghĩa là mảnh vỡ.",
      goldenTip: {
        rule: "Kỹ thuật chia một bảng dữ liệu khổng lồ thành nhiều phần nhỏ (shards) đặt trên nhiều máy chủ khác nhau để tăng tốc độ lưu trữ.",
        theTrap: "Chọn shard key không đồng đều khiến một node bị quá tải (Hot spot).",
        memoryHack: "💡 Đập chiếc gương khổng lồ ra thành từng mảnh SHARD nhỏ phân bổ đi các nơi!",
        example: "Horizontal sharding enables massive horizontal database scaling."
      }
    },
    {
      id: "v_it_060",
      word: "CACHING",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈkæʃɪŋ/",
      meaning: "Lưu trữ bộ nhớ đệm tạm thời tốc độ cao (Redis, Memcached)",
      contextSentence: "Redis in-memory ________ serves user profile data directly from RAM in less than one millisecond.",
      example: "Cache eviction policies like LRU automatically remove least recently used keys.",
      spellingTip: "💡 C-A-C-H-I-N-G. Phát âm giống hệt từ 'CASH' (tiền mặt): /ˈkæʃɪŋ/.",
      goldenTip: {
        rule: "Lưu trữ bản sao dữ liệu vào bộ nhớ tốc độ cao (RAM) để phục vụ các yêu cầu tương lai nhanh hơn, giảm tải cho database.",
        theTrap: "Phát âm sai thành 'két-chinh' hoặc 'cây-ching'. Phát âm chuẩn là /ˈkæʃɪŋ/ (như cash).",
        memoryHack: "💡 CACHE phát âm như CASH (tiền tươi thóc thật lấy ra xài ngay trong RAM)!",
        example: "Cache invalidation is famously one of computer science hardest problems."
      }
    },
    {
      id: "v_it_061",
      word: "AGGREGATION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌæɡrɪˈɡeɪʃn/",
      meaning: "Phép tổng hợp gom nhóm dữ liệu (SUM, AVG, COUNT, GROUP BY)",
      contextSentence: "The analytics pipeline performs real-time metric ________ to compute hourly revenue averages.",
      example: "MongoDB aggregation pipelines process documents through multi-stage filters.",
      spellingTip: "💡 Có 2 chữ G: A-G-G-R-E-G-A-T-I-O-N.",
      goldenTip: {
        rule: "Quá trình thu thập và tính toán tổng hợp nhiều hàng dữ liệu thành một giá trị duy nhất mang ý nghĩa báo cáo.",
        theTrap: "Gõ thiếu 1 chữ G thành 'agregation'.",
        memoryHack: "💡 Gom 2 quả tạ (2 chữ G) lại để tính tổng ➔ AGGREGATION!",
        example: "SQL aggregation functions include COUNT, SUM, AVG, MIN, and MAX."
      }
    },
    {
      id: "v_it_062",
      word: "WAREHOUSE",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈwerhaʊs/",
      meaning: "Kho dữ liệu phân tích tập trung (Data Warehouse / Snowflake)",
      contextSentence: "Business intelligence analysts query the Snowflake cloud data ________ to generate sales reports.",
      example: "Data warehouses are optimized for complex OLAP analytics queries rather than transactional writes.",
      spellingTip: "💡 WARE (hàng hóa) + HOUSE (ngôi nhà) = WAREHOUSE.",
      goldenTip: {
        rule: "Hệ thống kho dữ liệu trung tâm thu thập dữ liệu từ nhiều nguồn khác nhau phục vụ phân tích kinh doanh và ra quyết định.",
        theTrap: "Nhầm Data Warehouse (dùng cho phân tích OLAP) với Database thông thường (dùng cho giao dịch OLTP).",
        memoryHack: "💡 Ngôi nhà kho khổng lồ chứa toàn bộ dữ liệu lịch sử công ty!",
        example: "ETL pipelines extract raw operational data into the central data warehouse."
      }
    },
    {
      id: "v_it_063",
      word: "CONSISTENCY",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/kənˈsɪstənsi/",
      meaning: "Tính nhất quán của dữ liệu trên toàn hệ thống phân tán",
      contextSentence: "The CAP theorem states that a distributed system cannot guarantee both availability and strong ________.",
      example: "Eventual consistency allows distributed nodes to synchronize updates over time.",
      spellingTip: "💡 C-O-N-S-I-S-T-E-N-C-Y. Đuôi -ENCY.",
      goldenTip: {
        rule: "Chữ C trong ACID và CAP: Bảo đảm mọi người dùng đều nhìn thấy dữ liệu mới nhất giống nhau bất kể truy cập vào node nào.",
        theTrap: "Viết nhầm chữ E thành A 'consistancy'.",
        memoryHack: "💡 CONSISTENT (nhất quán trước sau như một) ➔ CONSISTENCY!",
        example: "Relational databases prioritize strict consistency over horizontal partition tolerance."
      }
    },
    {
      id: "v_it_064",
      word: "ISOLATION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌaɪsəˈleɪʃn/",
      meaning: "Cấp độ cô lập giữa các giao dịch dữ liệu đồng thời",
      contextSentence: "Serializable ________ level prevents dirty reads, non-repeatable reads, and phantom read anomalies.",
      example: "Database isolation levels strike a trade-off between performance and concurrency safety.",
      spellingTip: "💡 I-S-O-L-A-T-I-O-N. Động từ là ISOLATE (cô lập).",
      goldenTip: {
        rule: "Chữ I trong chuẩn ACID: Đảm bảo các giao dịch chạy song song không can thiệp hoặc nhìn thấy dữ liệu chưa hoàn tất của nhau.",
        theTrap: "Chọn mức isolation cao nhất (Serializable) có thể gây nghẽn deadlock nếu nhiều luồng cùng ghi.",
        memoryHack: "💡 Tách biệt cô lập (ISOLATE) mỗi giao dịch trong một phòng riêng an toàn!",
        example: "Read Committed is the default isolation level in PostgreSQL."
      }
    },
    {
      id: "v_it_065",
      word: "PERSISTENCE",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/pərˈsɪstəns/",
      meaning: "Tính bền bỉ lưu trữ dữ liệu trên đĩa cứng (không mất sau reboot)",
      contextSentence: "Redis append-only files provide durable data ________ across sudden operating system reboots.",
      example: "The Java Persistence API (JPA) maps relational tables to Java domain entities.",
      spellingTip: "💡 P-E-R-S-I-S-T-E-N-C-E. Đuôi -ENCE (chữ E).",
      goldenTip: {
        rule: "Đặc tính của dữ liệu được lưu trữ vững chắc vào bộ nhớ thứ cấp (SSD/HDD), bảo đảm tồn tại ngay cả khi ứng dụng tắt nguồn.",
        theTrap: "Viết sai đuôi thành 'persistancy'.",
        memoryHack: "💡 PERSIST (kiên trì bền bỉ) ➔ PERSISTENCE (dữ liệu bền bỉ không thể mất)!",
        example: "In-memory caches sacrifice persistence in exchange for extreme throughput."
      }
    },
    {
      id: "v_it_066",
      word: "METADATA",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈmetədeɪtə/",
      meaning: "Siêu dữ liệu mô tả thuộc tính và cấu trúc của dữ liệu",
      contextSentence: "The audio file ________ contains information about the artist, bitrate, duration, and album title.",
      example: "HTTP headers convey vital metadata such as content-type and payload size.",
      spellingTip: "💡 META + DATA = METADATA (viết liền).",
      goldenTip: {
        rule: "'Data about data' - Dữ liệu cung cấp thông tin tóm tắt, kích thước, định dạng và tác giả của tệp dữ liệu chính.",
        theTrap: "Viết tách rời thành 'meta data'.",
        memoryHack: "💡 META (bao quát phía trên) + DATA = Thông tin mô tả dữ liệu!",
        example: "HTML meta tags provide search engines with indexing instructions."
      }
    },
    {
      id: "v_it_067",
      word: "BACKUP",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈbækʌp/",
      meaning: "Bản sao lưu dự phòng phục hồi dữ liệu",
      contextSentence: "An automated snapshot creates a full database ________ in encrypted cloud storage every midnight.",
      example: "Regularly test your backup restoration procedures to guarantee disaster preparedness.",
      spellingTip: "💡 B-A-C-K-U-P (danh từ viết liền, động từ viết rời: back up).",
      goldenTip: {
        rule: "Bản sao dự phòng của dữ liệu hoặc hệ thống được tạo ra để phục hồi lại trạng thái ban đầu khi xảy ra sự cố hỏng hóc.",
        theTrap: "Có sao lưu nhưng không bao giờ kiểm tra khả năng phục hồi (Test restore).",
        memoryHack: "💡 BACK UP (chống lưng phòng ngừa rủi ro) ➔ BACKUP!",
        example: "A 3-2-1 backup strategy keeps three copies across two distinct media."
      }
    },
    {
      id: "v_it_068",
      word: "PAYLOAD",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈpeɪloʊd/",
      meaning: "Phần thân gói tin chứa dữ liệu thực tế (HTTP Body)",
      contextSentence: "The HTTP POST request carries a JSON ________ containing the new user profile details.",
      example: "Verify JWT payload signatures before trusting claims in API middleware.",
      spellingTip: "💡 PAY + LOAD = PAYLOAD.",
      goldenTip: {
        rule: "Phần dữ liệu chính mang giá trị thông tin trong gói tin mạng, phân biệt với phần header chỉ mang thông tin dẫn đường.",
        theTrap: "Nhầm lẫn giữa header (metadata dẫn đường) và payload (nội dung gói hàng thực sự).",
        memoryHack: "💡 Phần hàng hóa quan trọng được chất lên xe chở đi (PAYLOAD)!",
        example: "Gzip compression significantly shrinks large API response payloads."
      }
    },
    {
      id: "v_it_069",
      word: "PARTITION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/pɑːrˈtɪʃn/",
      meaning: "Phân vùng chia nhỏ bảng dữ liệu lớn hoặc ổ cứng",
      contextSentence: "Range-based table ________ groups historical invoices by calendar year for rapid archiving.",
      example: "Kafka distributes event streams across topic partitions for parallel consumption.",
      spellingTip: "💡 P-A-R-T-I-T-I-O-N. Bắt đầu bằng PART (bộ phận).",
      goldenTip: {
        rule: "Chia một bảng cơ sở dữ liệu hoặc đĩa cứng logic thành các phần độc lập nhỏ hơn để quản lý và truy vấn hiệu quả hơn.",
        theTrap: "Viết nhầm chữ I thứ hai thành E 'partetion'.",
        memoryHack: "💡 PART (chia từng phần) + ITION = PARTITION (Phân vùng dữ liệu)!",
        example: "Partition pruning allows the database engine to skip scanning irrelevant partitions."
      }
    },
    {
      id: "v_it_070",
      word: "INGESTION",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪnˈdʒestʃn/",
      meaning: "Quá trình tiếp nhận nạp luồng dữ liệu vào kho (Data Ingestion)",
      contextSentence: "Apache Kafka powers high-throughput event ________ from millions of connected IoT sensors.",
      example: "Real-time data ingestion pipelines stream clickstream telemetry into data lakes.",
      spellingTip: "💡 I-N-G-E-S-T-I-O-N. Động từ là INGEST (nuốt vào/hấp thụ).",
      goldenTip: {
        rule: "Quá trình tiếp nhận, nhập và nạp dữ liệu từ các nguồn khác nhau vào cơ sở dữ liệu hoặc Data Lake để xử lý.",
        theTrap: "Viết nhầm chữ G thành J 'injest'.",
        memoryHack: "💡 IN- (vào trong) + GEST (tiêu hóa dữ liệu) ➔ Tiếp nhận nạp dữ liệu!",
        example: "Batch ingestion runs nightly, whereas streaming ingestion processes events immediately."
      }
    },
    {
      id: "v_it_071",
      word: "VECTOR",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈvektər/",
      meaning: "Véc-tơ số nhiều chiều (dùng trong Vector Database & AI)",
      contextSentence: "The AI application converts text documents into a dense ________ representation for semantic search.",
      example: "Vector databases like Pinecone and Milvus compute cosine similarity at scale.",
      spellingTip: "💡 V-E-C-T-O-R. Âm /ˈvektər/.",
      goldenTip: {
        rule: "Mảng số thực nhiều chiều đại diện cho ngữ nghĩa của từ ngữ hoặc hình ảnh, làm nền tảng cho tìm kiếm thông minh AI (RAG).",
        theTrap: "Viết nhầm đuôi -OR thành -ER 'vecter'.",
        memoryHack: "💡 Mũi tên tọa độ toán học V-E-C-T-O-R dẫn đường cho trí tuệ nhân tạo!",
        example: "Semantic similarity is calculated by measuring distance between embedding vectors."
      }
    },
    {
      id: "v_it_072",
      word: "DOCUMENT",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈdɒkjumənt/",
      meaning: "Bản ghi tài liệu bán cấu trúc trong NoSQL (MongoDB)",
      contextSentence: "In MongoDB, each record is saved as a flexible BSON ________ with nested properties.",
      example: "Document databases eliminate the need for rigid schema definitions.",
      spellingTip: "💡 D-O-C-U-M-E-N-T. Âm /ˈdɒkjumənt/.",
      goldenTip: {
        rule: "Đơn vị lưu trữ dữ liệu cơ bản trong NoSQL Document Store (tương đương một dòng trong bảng SQL nhưng có thể chứa mảng và object con).",
        theTrap: "Nhầm Document trong database (bản ghi JSON) với Document văn bản (file Word/PDF).",
        memoryHack: "💡 Hồ sơ JSON độc lập chứa đầy đủ thông tin ➔ DOCUMENT!",
        example: "Querying nested document fields is supported natively in MongoDB."
      }
    },
    {
      id: "v_it_073",
      word: "DISTRIBUTED",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/dɪˈstrɪbjuːtɪd/",
      meaning: "Phân tán trên nhiều máy tính mạng liên kết",
      contextSentence: "A modern ________ database splits records across three distinct availability zones for resilience.",
      example: "Distributed transactions require two-phase commit protocols to guarantee atomicity.",
      spellingTip: "💡 D-I-S-T-R-I-B-U-T-E-D. Động từ là DISTRIBUTE.",
      goldenTip: {
        rule: "Hệ thống trong đó các thành phần phần mềm và phần cứng đặt trên các máy tính khác nhau giao tiếp qua mạng.",
        theTrap: "Nhầm lẫn giữa Centralized (tập trung tại 1 máy) và Distributed (phân tán đa máy).",
        memoryHack: "💡 Phân chia tản ra (DISTRIBUTE) khắp mọi nơi để cùng chia lửa chịu tải!",
        example: "Distributed consensus algorithms like Raft and Paxos maintain cluster leadership."
      }
    },
    {
      id: "v_it_074",
      word: "ARCHITECTURE",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɑːrkɪtektʃər/",
      meaning: "Kiến trúc hệ thống phần mềm tổng thể",
      contextSentence: "The lead software architect presented an event-driven ________ to decouple asynchronous order processing.",
      example: "Clean architecture enforces strict boundary separation between business rules and frameworks.",
      spellingTip: "💡 A-R-C-H-I-T-E-C-T-U-R-E. Có cụm -CHIT-.",
      goldenTip: {
        rule: "Bản vẽ cấu trúc cấp cao của hệ thống phần mềm, xác định các thành phần chính và cách chúng tương tác với nhau.",
        theTrap: "Viết sai chính tả chữ CH thành C 'arcitecture'.",
        memoryHack: "💡 ARCHITECT (kiến trúc sư) ➔ ARCHITECTURE (bản thiết kế vĩ mô hệ thống)!",
        example: "Layered architecture separates presentation, domain logic, and persistence layers."
      }
    },
    {
      id: "v_it_075",
      word: "INTEGRITY",
      category: "tech_ai",
      subCategoryKey: "data",
      subCategoryLabel: "Database & Dữ Liệu",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪnˈteɡrəti/",
      meaning: "Tính toàn vẹn và chuẩn xác của dữ liệu (Data Integrity)",
      contextSentence: "Foreign key constraints preserve referential ________ by preventing orphaned records in child tables.",
      example: "Cryptographic hash checksums verify file download integrity.",
      spellingTip: "💡 I-N-T-E-G-R-I-T-Y. Âm /ɪnˈteɡrəti/.",
      goldenTip: {
        rule: "Độ chính xác, nhất quán và tin cậy của dữ liệu trong suốt vòng đời của nó trong cơ sở dữ liệu.",
        theTrap: "Viết nhầm chữ E thành A 'integriti' hoặc 'integrety'.",
        memoryHack: "💡 Toàn vẹn không bị sứt mẻ (INTEGRITY) ➔ Dữ liệu chuẩn xác 100%!",
        example: "Data integrity audits detect silent bit-rot on long-term storage drives."
      }
    },

    // --- NHÓM 4: BẢO MẬT, WEB & TRÍ TUỆ NHÂN TẠO (SECURITY, WEB & AI - 25 TỪ) ---
    {
      id: "v_it_076",
      word: "ENCRYPTION",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪnˈkrɪpʃn/",
      meaning: "Mã hóa dữ liệu bảo mật (AES, RSA)",
      contextSentence: "All sensitive customer payment cards undergo AES-256 ________ before persistence to disk.",
      example: "End-to-end encryption ensures only communicating recipients can read private messages.",
      spellingTip: "💡 E-N-C-R-Y-P-T-I-O-N. Chú ý chữ Y sau chữ R.",
      goldenTip: {
        rule: "Quá trình biến đổi thông tin rõ ràng (Plaintext) thành dạng mã hóa không thể đọc được (Ciphertext) nếu không có khóa giải mã.",
        theTrap: "Viết nhầm chữ Y thành I 'encription'.",
        memoryHack: "💡 EN-CRYPT (khóa vào hòm mật mã) + ION = ENCRYPTION!",
        example: "HTTPS employs TLS encryption to prevent network eavesdropping."
      }
    },
    {
      id: "v_it_077",
      word: "AUTHENTICATION",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɔːˌθentɪˈkeɪʃn/",
      meaning: "Xác thực danh tính người dùng (AuthN: Bạn là ai?)",
      contextSentence: "Multi-factor ________ requires entering an SMS one-time passcode in addition to your master password.",
      example: "Biometric authentication uses fingerprint or facial recognition scanning.",
      spellingTip: "💡 A-U-T-H-E-N-T-I-C-A-T-I-O-N. Bắt đầu bằng AUTHENTIC (đích thực).",
      goldenTip: {
        rule: "Quy trình kiểm tra và xác nhận một người dùng hoặc dịch vụ thực sự đúng là người mà họ tuyên bố.",
        theTrap: "Nhầm lẫn giữa Authentication (Xác thực bạn là ai) và Authorization (Phân quyền bạn được làm gì).",
        memoryHack: "💡 AUTHENTIC (hàng chuẩn auth chính chủ) ➔ AUTHENTICATION (Xác thực danh tính)!",
        example: "OAuth 2.0 enables federated social authentication via Google or GitHub."
      }
    },
    {
      id: "v_it_078",
      word: "AUTHORIZATION",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌɔːθəraɪˈzeɪʃn/",
      meaning: "Phân quyền truy cập tài nguyên (AuthZ: Bạn được làm gì?)",
      contextSentence: "Role-based ________ ensures that standard employees cannot access company payroll settings.",
      example: "The API returned a 403 Forbidden status due to insufficient user authorization roles.",
      spellingTip: "💡 A-U-T-H-O-R-I-Z-A-T-I-O-N. Bắt đầu bằng AUTHOR-.",
      goldenTip: {
        rule: "Quá trình cấp hoặc từ chối quyền truy cập vào các tài nguyên cụ thể sau khi đã xác thực danh tính thành công.",
        theTrap: "Nhầm lẫn viết tắt AuthN (Authentication) và AuthZ (Authorization).",
        memoryHack: "💡 AUTHORIZE (trao quyền lực) ➔ AUTHORIZATION (Phân quyền truy cập)!",
        example: "Fine-grained authorization policies restrict access to confidential documents."
      }
    },
    {
      id: "v_it_079",
      word: "VULNERABILITY",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌvʌlnərəˈbɪləti/",
      meaning: "Lỗ hổng bảo mật phần mềm (CVE)",
      contextSentence: "The penetration tester discovered a critical SQL injection ________ inside the search endpoint.",
      example: "Automated vulnerability scanners flag unpatched dependencies in the repository.",
      spellingTip: "💡 V-U-L-N-E-R-A-B-I-L-I-T-Y. Tính từ là VULNERABLE.",
      goldenTip: {
        rule: "Điểm yếu hoặc khiếm khuyết trong thiết kế hoặc code của hệ thống mà tin tặc có thể khai thác để tấn công.",
        theTrap: "Viết sai chính tả chữ E ở giữa thành A 'vulnerablity'.",
        memoryHack: "💡 Vết thương hở (VULNERABLE) khiến hacker dễ dàng xâm nhập!",
        example: "Zero-day vulnerabilities require immediate emergency patch deployment."
      }
    },
    {
      id: "v_it_080",
      word: "FIREWALL",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfaɪərwɔːl/",
      meaning: "Bức tường lửa kiểm soát và ngăn chặn lưu lượng mạng độc hại",
      contextSentence: "A Web Application ________ inspected incoming HTTP traffic and blocked the cross-site scripting attack.",
      example: "Configure network firewall rules to allow traffic only on secure port 443.",
      spellingTip: "💡 FIRE (lửa) + WALL (bức tường) = FIREWALL.",
      goldenTip: {
        rule: "Hệ thống bảo mật mạng giám sát và kiểm soát lưu lượng mạng vào và ra dựa trên các quy tắc bảo mật xác định trước.",
        theTrap: "Viết tách rời thành 'fire wall'.",
        memoryHack: "💡 Bức tường lửa ngăn chặn kẻ xấu đột nhập vào máy chủ!",
        example: "The corporate firewall restricts outbound connections to unauthorized ports."
      }
    },
    {
      id: "v_it_081",
      word: "TOKEN",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈtoʊkən/",
      meaning: "Chuỗi mã định danh truy cập bảo mật (JWT Token) / Đơn vị từ trong AI",
      contextSentence: "Include the Bearer ________ in the Authorization header to authenticate requests with the backend API.",
      example: "Large Language Models process textual input by splitting paragraphs into discrete tokens.",
      spellingTip: "💡 T-O-K-E-N. Âm /ˈtoʊkən/.",
      goldenTip: {
        rule: "Chuỗi ký tự đại diện cho quyền truy cập bảo mật (như JWT token), hoặc đơn vị từ ngữ cơ bản trong mô hình NLP.",
        theTrap: "Nhầm lẫn Session Cookie (stateful lưu ở server) và JWT Token (stateless lưu ở client).",
        memoryHack: "💡 Chiếc vé thông hành (TOKEN) cầm trên tay để vào cửa API!",
        example: "Refresh tokens extend user session lifetimes without re-entering passwords."
      }
    },
    {
      id: "v_it_082",
      word: "CREDENTIAL",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/krəˈdenʃl/",
      meaning: "Thông tin chứng thực danh tính (Username, Mật khẩu, API Key)",
      contextSentence: "Never hardcode your database ________ inside public source code repositories.",
      example: "Use environment variables or a secrets manager to store sensitive server credentials.",
      spellingTip: "💡 C-R-E-D-E-N-T-I-A-L. Đuôi -TIAL phát âm là /ʃl/.",
      goldenTip: {
        rule: "Bằng chứng kỹ thuật số (mật khẩu, khóa bí mật, chứng chỉ) dùng để xác minh danh tính người dùng hoặc máy tính.",
        theTrap: "Lộ credential lên GitHub công khai bị hacker quét bot lấy cắp trong vài giây.",
        memoryHack: "💡 CREDIT (uy tín danh tính) ➔ CREDENTIAL (chìa khóa danh tính)!",
        example: "Compromised credentials account for the majority of unauthorized data breaches."
      }
    },
    {
      id: "v_it_083",
      word: "DECRYPTION",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/diːˈkrɪpʃn/",
      meaning: "Quá trình giải mã thông tin mật về dạng nguyên bản",
      contextSentence: "The recipient used their private cryptographic key to perform message ________ successfully.",
      example: "Hardware accelerators handle TLS decryption without degrading server CPU speeds.",
      spellingTip: "💡 D-E-C-R-Y-P-T-I-O-N. DE- (gỡ bỏ) + CRYPTION.",
      goldenTip: {
        rule: "Quá trình ngược lại của Encryption: biến đổi bản mã (Ciphertext) về dạng văn bản rõ (Plaintext) bằng khóa bí mật.",
        theTrap: "Viết nhầm chữ Y thành I 'decription'.",
        memoryHack: "💡 ENCRYPTION (khóa lại) ➔ DECRYPTION (mở khóa ra)!",
        example: "Without the private key, mathematical decryption is virtually impossible."
      }
    },
    {
      id: "v_it_084",
      word: "PHISHING",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfɪʃɪŋ/",
      meaning: "Hình thức tấn công mạng lừa đảo giả mạo trực tuyến",
      contextSentence: "Employees should inspect sender email headers to identify deceptive spear ________ attempts.",
      example: "Phishing campaigns often trick unsuspecting users into revealing corporate passwords.",
      spellingTip: "💡 Bắt đầu bằng PH- chứ không phải F: P-H-I-S-H-I-N-G.",
      goldenTip: {
        rule: "Hình thức tấn công kỹ thuật xã hội (Social Engineering) giả danh tổ chức uy tín để lừa người dùng cung cấp mật khẩu hoặc số thẻ.",
        theTrap: "Viết nhầm chữ PH thành F 'fishing' (câu cá).",
        memoryHack: "💡 'Câu cá' phiên bản hacker mạng: Giăng mồi câu mật khẩu (PHISHING)!",
        example: "Two-factor authentication mitigates credential loss from successful phishing."
      }
    },
    {
      id: "v_it_085",
      word: "ENDPOINT",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈendpɔɪnt/",
      meaning: "Điểm đầu cuối của API giao tiếp (URL/URI tiếp nhận request)",
      contextSentence: "The client application submits payment payloads to the RESTful /api/v1/checkout ________.",
      example: "Secure every public API endpoint with rate limiting and token authentication.",
      spellingTip: "💡 END (kết thúc) + POINT (điểm) = ENDPOINT (viết liền).",
      goldenTip: {
        rule: "Địa chỉ URL cụ thể mà qua đó các dịch vụ và ứng dụng gửi và nhận dữ liệu qua giao thức HTTP.",
        theTrap: "Viết tách rời thành 'end point'.",
        memoryHack: "💡 Điểm dừng chân đón trả khách của API trên web server ➔ ENDPOINT!",
        example: "Swagger documentation lists every available API endpoint and payload schema."
      }
    },
    {
      id: "v_it_086",
      word: "MALWARE",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈmælwer/",
      meaning: "Mã độc / phần mềm gây hại (Virus, Trojan, Ransomware)",
      contextSentence: "The endpoint antivirus scanner quarantined a suspicious file suspected of harboring destructive ________.",
      example: "Ransomware is a malicious category of malware that encrypts files for ransom.",
      spellingTip: "💡 MAL (xấu/độc hại) + WARE (phần mềm) = MALWARE.",
      goldenTip: {
        rule: "Thuật ngữ chung chỉ bất kỳ phần mềm nào được viết ra có chủ đích gây hại cho máy tính, mạng hoặc người dùng.",
        theTrap: "Nghĩ malware chỉ là virus. Thực chất virus chỉ là một nhánh con của malware.",
        memoryHack: "💡 MAL (tiếng Latinh là xấu xí, độc ác) + WARE = Phần mềm độc hại!",
        example: "Regular OS security updates patch entry points targeted by modern malware."
      }
    },
    {
      id: "v_it_087",
      word: "INTELLIGENCE",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪnˈtelɪdʒəns/",
      meaning: "Trí tuệ / năng lực học hỏi thông minh (AI)",
      contextSentence: "Artificial ________ transforms healthcare by predicting medical diagnoses with superhuman precision.",
      example: "Generative intelligence models create realistic code, artwork, and technical writing.",
      spellingTip: "💡 I-N-T-E-L-L-I-G-E-N-C-E. Có 2 chữ L và đuôi -ENCE.",
      goldenTip: {
        rule: "Cụm từ thế kỷ: Artificial Intelligence (AI). Tính từ là INTELLIGENT.",
        theTrap: "Viết 1 chữ L 'inteligence' hoặc sai đuôi -ANCE.",
        memoryHack: "💡 2 ngọn đèn thông minh (2 chữ L) rọi sáng bộ não INTELLIGENCE!",
        example: "Machine learning is a specialized subfield of artificial intelligence."
      }
    },
    {
      id: "v_it_088",
      word: "EMBEDDING",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ɪmˈbedɪŋ/",
      meaning: "Véc-tơ hóa ngữ nghĩa từ ngữ trong mô hình AI (Word Embedding)",
      contextSentence: "Text ________ models map semantic word relationships into mathematical vector coordinates.",
      example: "Words with similar meanings cluster together in the multidimensional embedding space.",
      spellingTip: "💡 Có 2 chữ D: E-M-B-E-D-D-I-N-G.",
      goldenTip: {
        rule: "Kỹ thuật biểu diễn văn bản dưới dạng các véc-tơ số thực sao cho các từ có ngữ nghĩa gần nhau sẽ có khoảng cách toán học gần nhau.",
        theTrap: "Viết thiếu 1 chữ D thành 'embeding'.",
        memoryHack: "💡 Đặt sâu vào giường (BED) ➔ Gấp đôi chữ D trong EMBEDDING!",
        example: "OpenAI provides dedicated embedding models for retrieval-augmented generation."
      }
    },
    {
      id: "v_it_089",
      word: "TOKENIZER",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈtoʊkənaɪzər/",
      meaning: "Bộ tách văn bản thành chuỗi các token nhỏ trong NLP",
      contextSentence: "The Byte-Pair Encoding ________ splits long sentences into discrete subword chunks for LLM processing.",
      example: "Different AI foundation models utilize specialized tokenizers with distinct vocabularies.",
      spellingTip: "💡 T-O-K-E-N-I-Z-E-R. Xuất phát từ TOKEN.",
      goldenTip: {
        rule: "Mô-đun tiền xử lý trong NLP có nhiệm vụ băm nhỏ chuỗi văn bản thô thành các mẩu token (từ, âm tiết hoặc ký tự) để nạp vào mạng nơ-ron.",
        theTrap: "Nghĩ 1 token luôn luôn bằng 1 từ hoàn chỉnh. Thường 1 token tương đương khoảng 0.75 từ tiếng Anh.",
        memoryHack: "💡 Máy băm nhỏ văn bản ra thành từng mẩu TOKEN!",
        example: "The tokenizer converts human text into arrays of integer token IDs."
      }
    },
    {
      id: "v_it_090",
      word: "INFERENCE",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈɪnfərəns/",
      meaning: "Pha suy luận / dự đoán của mô hình AI khi đưa dữ liệu thực tế vào",
      contextSentence: "Model quantization accelerates GPU ________ speed while preserving answer generation quality.",
      example: "During inference, the neural network computes predictions without updating its weights.",
      spellingTip: "💡 I-N-F-E-R-E-N-C-E. Động từ là INFER.",
      goldenTip: {
        rule: "Giai đoạn mô hình AI đã được huấn luyện xong và được đưa vào thực tế để nhận câu hỏi và đưa ra kết quả dự đoán.",
        theTrap: "Nhầm lẫn Training (quá trình huấn luyện cập nhật trọng số tốn hàng tháng) và Inference (chạy dự đoán trong vài mili giây).",
        memoryHack: "💡 INFER (suy luận logic) ➔ INFERENCE (bước suy luận của AI)!",
        example: "High inference latency degrades real-time conversational chatbot experiences."
      }
    },
    {
      id: "v_it_091",
      word: "NEURAL",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈnjʊərəl/",
      meaning: "Thuộc mạng nơ-ron học sâu nhân tạo (Neural Network)",
      contextSentence: "Deep ________ networks with billions of parameters mimic biological brain interconnectedness.",
      example: "Convolutional neural networks excel at image recognition and object classification.",
      spellingTip: "💡 N-E-U-R-A-L. Bắt đầu bằng NEUR-.",
      goldenTip: {
        rule: "Thuật ngữ chỉ các cấu trúc tính toán lấy cảm hứng từ mạng lưới tế bào thần kinh nơ-ron sinh học trong não người.",
        theTrap: "Phát âm sai âm đầu, phát âm chuẩn là /ˈnjʊərəl/.",
        memoryHack: "💡 NEURON (tế bào thần kinh) ➔ NEURAL (Mạng nơ-ron nhân tạo)!",
        example: "Feedforward neural networks pass information strictly in one forward direction."
      }
    },
    {
      id: "v_it_092",
      word: "DATASET",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈdeɪtəset/",
      meaning: "Bộ tập hợp dữ liệu huấn luyện và kiểm thử mô hình",
      contextSentence: "Data engineers curated a high-quality multilingual ________ to fine-tune the translation model.",
      example: "Splitting your dataset into training, validation, and test subsets prevents overfitting.",
      spellingTip: "💡 DATA + SET = DATASET (viết liền một từ).",
      goldenTip: {
        rule: "Tập hợp các mẫu dữ liệu có cấu trúc hoặc phi cấu trúc được thu thập phục vụ phân tích hoặc huấn luyện mô hình học máy.",
        theTrap: "Dùng dataset bị bẩn (chứa nhiễu hoặc sai nhãn) dẫn đến hiện tượng 'Garbage in, Garbage out'.",
        memoryHack: "💡 Một SET tập hợp chứa đầy đủ DATA mẫu!",
        example: "Data cleaning accounts for 80% of real-world dataset preparation effort."
      }
    },
    {
      id: "v_it_093",
      word: "TRAINING",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈtreɪnɪŋ/",
      meaning: "Quá trình huấn luyện mô hình máy học qua các epoch",
      contextSentence: "Distributed GPU clusters ran for three weeks during the pre-training ________ of the foundation model.",
      example: "Supervised training uses labeled inputs and expected outputs to compute loss.",
      spellingTip: "💡 T-R-A-I-N-I-N-G. Động từ là TRAIN.",
      goldenTip: {
        rule: "Giai đoạn thuật toán học máy đọc qua hàng triệu dữ liệu mẫu để điều chỉnh các trọng số (weights) nhằm giảm thiểu hàm mất mát (loss function).",
        theTrap: "Huấn luyện quá kỹ dẫn đến Overfitting (học vẹt dữ liệu cũ, gặp dữ liệu mới thì đoán sai).",
        memoryHack: "💡 TRAIN (rèn luyện kỷ luật cho não bộ AI) ➔ TRAINING!",
        example: "Gradient descent optimizes model weights during the training loop."
      }
    },
    {
      id: "v_it_094",
      word: "PROTOCOL",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈproʊtəkɑːl/",
      meaning: "Giao thức truyền thông mạng (HTTP, WebSocket, TCP/IP)",
      contextSentence: "The WebSocket ________ enables bidirectional, low-latency communication between browser and server.",
      example: "TCP is a connection-oriented protocol that guarantees packet delivery order.",
      spellingTip: "💡 P-R-O-T-O-C-O-L. Có 2 chữ O.",
      goldenTip: {
        rule: "Tập hợp các quy tắc chuẩn mực quy định cách thức đóng gói, gửi, nhận và giải mã dữ liệu giữa các thiết bị mạng.",
        theTrap: "Viết sai chữ C thành K 'protokol'.",
        memoryHack: "💡 Nghi thức bắt tay ngoại giao chuẩn mực trên không gian mạng!",
        example: "HTTP/3 uses the UDP-based QUIC protocol for faster handshakes."
      }
    },
    {
      id: "v_it_095",
      word: "RESPONSIVE",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/rɪˈspɒnsɪv/",
      meaning: "Giao diện co giãn tương thích đa thiết bị (Mobile / Desktop)",
      contextSentence: "CSS media queries ensure the website layout remains beautifully ________ on both mobile and tablet.",
      example: "A responsive web application adapts smoothly to any screen resolution.",
      spellingTip: "💡 R-E-S-P-O-N-S-I-V-E. Đuôi -SIVE.",
      goldenTip: {
        rule: "Kỹ thuật thiết kế web giúp giao diện tự động co giãn, điều chỉnh bố cục đẹp mắt trên mọi kích cỡ màn hình.",
        theTrap: "Nhầm Responsive Web Design với việc làm riêng 2 website tách biệt (m.domain.com).",
        memoryHack: "💡 RESPONSE (phản hồi linh hoạt theo kích thước màn hình) ➔ RESPONSIVE!",
        example: "Mobile-first responsive design prioritizes lightweight mobile user experiences."
      }
    },
    {
      id: "v_it_096",
      word: "WEBHOOK",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈwebhʊk/",
      meaning: "Cơ chế bắn sự kiện thông báo HTTP tự động giữa các máy chủ",
      contextSentence: "Stripe sends an automated payment confirmation ________ to notify our backend API instantly.",
      example: "Webhooks eliminate the need for inefficient constant polling.",
      spellingTip: "💡 WEB + HOOK (cái móc câu) = WEBHOOK.",
      goldenTip: {
        rule: "Phương thức cho phép một ứng dụng tự động cung cấp thông tin tức thời cho ứng dụng khác bằng cách gửi HTTP POST request khi có sự kiện xảy ra.",
        theTrap: "Dùng cơ chế liên tục hỏi vòng (Polling) thay vì sử dụng Webhook gây lãng phí tài nguyên mạng.",
        memoryHack: "💡 Móc câu (HOOK) bắn thẳng dữ liệu sang server kia ngay khi cá cắn câu!",
        example: "Verify webhook signatures using secret HMAC keys to prevent forgery."
      }
    },
    {
      id: "v_it_097",
      word: "CROSSORIGIN",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˌkrɔːsˈɔːrɪdʒɪn/",
      meaning: "Cơ chế kiểm soát chia sẻ tài nguyên chéo nguồn (CORS)",
      contextSentence: "The backend server configured ________ resource sharing headers to allow requests from our frontend domain.",
      example: "Browsers enforce cross-origin restrictions to prevent malicious cross-site scripting attacks.",
      spellingTip: "💡 CROSS (chéo) + ORIGIN (nguồn gốc) = CROSSORIGIN.",
      goldenTip: {
        rule: "Chính sách bảo mật trình duyệt quy định việc một trang web ở tên miền này có được phép gọi API sang tên miền khác hay không.",
        theTrap: "Lỗi kinh hoàng 'CORS Error' mà mọi lập trình viên web đều từng gặp phải khi frontend và backend khác cổng port.",
        memoryHack: "💡 CROSS (chéo nhau) + ORIGIN (khác nguồn gốc tên miền) ➔ CORS!",
        example: "Set Access-Control-Allow-Origin headers to enable cross-origin API calls."
      }
    },
    {
      id: "v_it_098",
      word: "FRONTEND",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfrʌntend/",
      meaning: "Tầng phát triển giao diện người dùng hiển thị trên trình duyệt",
      contextSentence: "The modern ________ is constructed using HTML5, Vanilla CSS, and modern interactive JavaScript.",
      example: "Frontend performance directly influences user conversion and engagement rates.",
      spellingTip: "💡 FRONT (phía trước) + END (đầu mút) = FRONTEND.",
      goldenTip: {
        rule: "Phần của ứng dụng phần mềm mà người dùng cuối tương tác trực tiếp (giao diện, nút bấm, hoạt họa, forms).",
        theTrap: "Viết tách rời hoặc sai chính tả.",
        memoryHack: "💡 Bộ mặt phía TRƯỚC (FRONT) đập vào mắt người dùng!",
        example: "Frontend developers collaborate closely with UI/UX designers."
      }
    },
    {
      id: "v_it_099",
      word: "BACKEND",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈbækend/",
      meaning: "Tầng máy chủ xử lý logic nghiệp vụ, cơ sở dữ liệu và bảo mật",
      contextSentence: "Our robust Java Spring Boot ________ handles user authentication, business workflows, and database queries.",
      example: "Backend services expose secure RESTful APIs consumed by web and mobile clients.",
      spellingTip: "💡 BACK (phía sau) + END = BACKEND.",
      goldenTip: {
        rule: "Phần của ứng dụng chạy trên máy chủ, người dùng không nhìn thấy trực tiếp nhưng là nơi xử lý toàn bộ logic và dữ liệu.",
        theTrap: "Bỏ qua việc validate dữ liệu ở backend vì nghĩ frontend đã kiểm tra rồi (Lỗ hổng bảo mật chết người).",
        memoryHack: "💡 Động cơ phía SAU (BACK) vận hành cỗ xe phần mềm!",
        example: "Backend engineers focus on scalability, data integrity, and low latency."
      }
    },
    {
      id: "v_it_100",
      word: "FULLSTACK",
      category: "tech_ai",
      subCategoryKey: "ai_sec",
      subCategoryLabel: "Bảo Mật & AI",
      categoryLabel: "💻 Từ Vựng IT & Kỹ Thuật (100 Từ)",
      ipa: "/ˈfʊlstæk/",
      meaning: "Kỹ sư lập trình toàn diện (thành thạo cả Frontend lẫn Backend)",
      contextSentence: "Being a versatile ________ engineer enables Alex to build end-to-end web applications independently.",
      example: "Fullstack development requires broad understanding across UI components, databases, and DevOps deployments.",
      spellingTip: "💡 FULL (đầy đủ) + STACK (chồng công nghệ) = FULLSTACK.",
      goldenTip: {
        rule: "Lập trình viên có khả năng làm việc trên toàn bộ các tầng của hệ thống: từ Giao diện UI (Frontend), Server Logic (Backend) cho tới Cơ sở dữ liệu và Hạ tầng (DevOps).",
        theTrap: "Viết tách rời thành 'full stack' khi dùng như danh từ chỉ vị trí công việc.",
        memoryHack: "💡 Cân trọn cả STACK công nghệ từ A đến Z ➔ FULLSTACK DEVELOPER!",
        example: "Fullstack developers bridge the gap between design concepts and server realities."
      }
    }
  ]
};
