/**
 * HỆ THỐNG COLLOCATION & PHRASAL CHUNKS THEO BAND 4.0 ➔ 7.0+
 * Giúp người học bỏ thói quen dịch từng từ đơn lẻ và nắm bắt cách kết hợp từ tự nhiên của người bản xứ
 */

window.COLLOCATION_CHUNKS_DATA = {
  "band_4_5": [
    {
      id: "col_45_01",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CƠ BẢN & ĐỜI SỐNG HẰNG NGÀY",
      topic: "Daily Decisions & Actions",
      chunk: "MAKE A DECISION",
      targetWord: "DECISION",
      meaning: "Đưa ra quyết định (không dùng do a decision)",
      ipa: "/meɪk ə dɪˈsɪʒn/",
      contextSentence: "After discussing with his family, he finally had to make a crucial (decision) ________ about his career.",
      verbPrompt: "DECISION",
      collocationTip: "Người Việt hay dịch từ 'làm quyết định' sang 'do a decision'. Trong tiếng Anh chuẩn, đi với 'decision' BẮT BUỘC là động từ 'MAKE'.",
      goldenTip: {
        rule: "MAKE đi với những danh từ mang tính sáng tạo, tạo ra kết quả mới: make a decision, make a mistake, make progress, make an effort.",
        theTrap: "Dùng 'do a decision' hoặc 'take a decision' (dù take chấp nhận được trong British English nhưng make phổ biến hơn cả).",
        memoryHack: "💡 Make = Tạo ra cái mới. Quyết định chưa có sẵn, bạn phải 'make' ra nó!",
        example: "She made a difficult decision to study abroad."
      }
    },
    {
      id: "col_45_02",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CƠ BẢN & ĐỜI SỐNG HẰNG NGÀY",
      topic: "Study & Focus",
      chunk: "PAY ATTENTION TO",
      targetWord: "ATTENTION",
      meaning: "Tập trung chú ý vào điều gì (đi kèm giới từ TO)",
      ipa: "/peɪ əˈtɛnʃn tuː/",
      contextSentence: "Students need to pay close (attention) ________ to the teacher's pronunciation during class.",
      verbPrompt: "ATTENTION",
      collocationTip: "Cụm 'pay attention' luôn đi kèm giới từ 'to', không đi với 'for' hay 'at'.",
      goldenTip: {
        rule: "Cụm cố định: PAY ATTENTION TO + Noun / V-ing (tương đương với 'focus on').",
        theTrap: "Quên giới từ TO hoặc dùng nhầm 'give attention on'.",
        memoryHack: "💡 Chú ý quý như tiền: Phải 'PAY' (trả giá/trả sự chú ý) thì mới tiếp thu được kiến thức!",
        example: "Please pay attention to the safety instructions."
      }
    },
    {
      id: "col_45_03",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CƠ BẢN & ĐỜI SỐNG HẰNG NGÀY",
      topic: "Work & Duty",
      chunk: "TAKE RESPONSIBILITY FOR",
      targetWord: "RESPONSIBILITY",
      meaning: "Chịu trách nhiệm về việc gì (take responsibility for)",
      ipa: "/teɪk rɪˌspɑːnsəˈbɪləti fɔːr/",
      contextSentence: "A great leader must always take full (responsibility) ________ for the mistakes of the team.",
      verbPrompt: "RESPONSIBILITY",
      collocationTip: "Đi với responsibility là động từ 'take' (hoặc 'bear', 'assume'), đi kèm giới từ 'for'.",
      goldenTip: {
        rule: "TAKE RESPONSIBILITY FOR + V-ing / Noun. Tránh dùng 'have the duty of' nghe rất gượng gạo.",
        theTrap: "Nhầm đuôi tính từ 'responsible' (He is responsible for) với danh từ 'responsibility' (take responsibility for).",
        memoryHack: "💡 Trách nhiệm như chiếc vali: Bạn phải chủ động cầm lấy nó (TAKE) chứ không chờ ai trao!",
        example: "He took full responsibility for the project's delay."
      }
    },
    {
      id: "col_45_04",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CƠ BẢN & ĐỜI SỐNG HẰNG NGÀY",
      topic: "Health & Habits",
      chunk: "KEEP FIT",
      targetWord: "FIT",
      meaning: "Giữ gìn vóc dáng & sức khỏe dẻo dai",
      ipa: "/kiːp fɪt/",
      contextSentence: "Jogging in the park every morning is a wonderful way to keep (fit) ________ and reduce stress.",
      verbPrompt: "FIT",
      collocationTip: "Người bản xứ hay dùng 'keep fit' hoặc 'stay in shape' thay vì chỉ nói 'have good health'.",
      goldenTip: {
        rule: "KEEP + Adjective (fit, healthy, active) để chỉ trạng thái duy trì sức khỏe.",
        theTrap: "Dịch 'giữ gìn sức khỏe' thành 'keep health' (sai ngữ pháp vì health là danh từ).",
        memoryHack: "💡 Quần áo vừa vặn (FIT) tượng trưng cho thân hình săn chắc, cân đối!",
        example: "She goes to the gym twice a week to keep fit."
      }
    },
    {
      id: "col_45_05",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CƠ BẢN & ĐỜI SỐNG HẰNG NGÀY",
      topic: "Opportunities",
      chunk: "TAKE ADVANTAGE OF",
      targetWord: "ADVANTAGE",
      meaning: "Tận dụng tối đa cơ hội / thế mạnh",
      ipa: "/teɪk ədˈvæntɪdʒ ʌv/",
      contextSentence: "Young learners should take full (advantage) ________ of free online educational resources.",
      verbPrompt: "ADVANTAGE",
      collocationTip: "Cụm 'take advantage of' mang nghĩa tích cực là 'tận dụng cơ hội', hoặc tiêu cực là 'lợi dụng ai đó'.",
      goldenTip: {
        rule: "TAKE ADVANTAGE OF + Something (Tận dụng điều gì).",
        theTrap: "Dùng nhầm 'make advantage' hoặc quên giới từ 'of'.",
        memoryHack: "💡 Cơ hội (Advantage) trôi qua rất nhanh, phải chộp lấy (TAKE) ngay lập tức!",
        example: "You should take advantage of this scholarship opportunity."
      }
    }
  ],

  "band_5_6": [
    {
      id: "col_56_01",
      band: "5.0 - 6.5",
      bandLabel: "🚀 HỌC THUẬT & PHẢN BIỆN (AWL)",
      topic: "Academic Research",
      chunk: "CONDUCT RESEARCH",
      targetWord: "CONDUCT",
      meaning: "Tiến hành nghiên cứu khoa học (thay vì make research)",
      ipa: "/kənˈdʌkt rɪˈsɜːrtʃ/",
      contextSentence: "Scientists are planning to (conduct) ________ extensive research into renewable solar batteries.",
      verbPrompt: "CONDUCT",
      collocationTip: "Lỗi kinh điển ở Band 4.0-5.0 là nói 'do/make research'. Ở Band 6.0+, luôn dùng 'conduct / carry out / undertake research'.",
      goldenTip: {
        rule: "Research là danh từ không đếm được (uncountable). Đi với: CONDUCT / CARRY OUT / UNDERTAKE research.",
        theTrap: "Dùng 'make a research' (vừa sai động từ 'make', vừa sai mạo từ 'a' vì research không đếm được).",
        memoryHack: "💡 Conduct giống như 'nhạc trưởng chỉ huy': Nghiên cứu khoa học cần bài bản, có quy trình nghiêm ngặt!",
        example: "The university conducted thorough research on ocean plastics."
      }
    },
    {
      id: "col_56_02",
      band: "5.0 - 6.5",
      bandLabel: "🚀 HỌC THUẬT & PHẢN BIỆN (AWL)",
      topic: "Impact & Influence",
      chunk: "PLAY A CRUCIAL ROLE IN",
      targetWord: "CRUCIAL",
      meaning: "Đóng vai trò cực kỳ quan trọng trong...",
      ipa: "/pleɪ ə ˈkruːʃl roʊl ɪn/",
      contextSentence: "Early childhood education plays a (crucial) ________ role in developing cognitive flexibility.",
      verbPrompt: "CRUCIAL",
      collocationTip: "Thay vì lặp đi lặp lại 'is very important', dùng 'plays a crucial / pivotal / vital role in'.",
      goldenTip: {
        rule: "PLAY A [ADJECTIVE] ROLE IN + Noun / V-ing. Tính từ nâng cấp: vital, pivotal, crucial, indispensable.",
        theTrap: "Quên mạo từ 'a' (play crucial role) hoặc dùng sai giới từ 'for' thay vì 'in'.",
        memoryHack: "💡 Role là 'vai diễn': Bạn bước lên sân khấu đời thực và PLAY một vai trò quyết định!",
        example: "Technology plays a pivotal role in modern education."
      }
    },
    {
      id: "col_56_03",
      band: "5.0 - 6.5",
      bandLabel: "🚀 HỌC THUẬT & PHẢN BIỆN (AWL)",
      topic: "Problem Solving",
      chunk: "ADDRESS AN ISSUE",
      targetWord: "ADDRESS",
      meaning: "Giải quyết / xử lý một vấn đề nan giải (thay cho solve a problem)",
      ipa: "/əˈdrɛs ən ˈɪʃuː/",
      contextSentence: "Governments worldwide must urgently (address) ________ the issue of youth unemployment.",
      verbPrompt: "ADDRESS",
      collocationTip: "Ở band 4.0 người học chỉ biết 'solve problem'. Ở band 6.0+, dùng 'address the issue / tackle the problem'.",
      goldenTip: {
        rule: "ADDRESS + an issue / a crisis / a concern (giải quyết trực diện, đưa ra chính sách).",
        theTrap: "Nghĩ 'address' chỉ có nghĩa là địa chỉ nhà mà quên nó là một ngoại động từ học thuật cực mạnh.",
        memoryHack: "💡 'Address' gửi đúng địa chỉ: Tìm đúng gốc rễ vấn đề để giải quyết tận nơi!",
        example: "The new policy fails to address the root cause of poverty."
      }
    },
    {
      id: "col_56_04",
      band: "5.0 - 6.5",
      bandLabel: "🚀 HỌC THUẬT & PHẢN BIỆN (AWL)",
      topic: "Social Awareness",
      chunk: "RAISE PUBLIC AWARENESS",
      targetWord: "AWARENESS",
      meaning: "Nâng cao nhận thức của cộng đồng",
      ipa: "/reɪz ˈpʌblɪk əˈwɛrnəs/",
      contextSentence: "Media campaigns are designed to raise public (awareness) ________ about sustainable recycling habits.",
      verbPrompt: "AWARENESS",
      collocationTip: "Cụm 'raise awareness' ăn điểm tuyệt đối trong IELTS Writing Task 2 khi viết phần giải pháp (Solutions).",
      goldenTip: {
        rule: "RAISE AWARENESS OF / ABOUT something. Đi với 'raise' (ngoại động từ, có tân ngữ), KHÔNG dùng 'rise'.",
        theTrap: "Nhầm lẫn giữa 'raise' (nâng lên - cần tân ngữ) và 'rise' (tự tăng lên - không có tân ngữ).",
        memoryHack: "💡 Raise your hand: Giơ tay cao để ai cũng thấy ➔ Raise awareness để cả xã hội cùng tỉnh thức!",
        example: "The campaign aims to raise public awareness of mental health."
      }
    },
    {
      id: "col_56_05",
      band: "5.0 - 6.5",
      bandLabel: "🚀 HỌC THUẬT & PHẢN BIỆN (AWL)",
      topic: "Technology & Society",
      chunk: "FACILITATE COMMUNICATION",
      targetWord: "FACILITATE",
      meaning: "Tạo điều kiện thuận lợi, thúc đẩy giao tiếp",
      ipa: "/fəˈsɪlɪteɪt kəˌmjuːnɪˈkeɪʃn/",
      contextSentence: "Social networks and instant messaging apps greatly (facilitate) ________ international communication.",
      verbPrompt: "FACILITATE",
      collocationTip: "Thay vì nói 'make communication easy', người bản xứ dùng động từ 'facilitate' (C1 level).",
      goldenTip: {
        rule: "FACILITATE + Noun: làm cho quá trình gì đó diễn ra trôi chảy, dễ dàng hơn.",
        theTrap: "Viết sai chính tả chữ 'facilitate' (nhầm thành fasilitate hoặc facillitate).",
        memoryHack: "💡 Facile (gốc Latinh) nghĩa là dễ dàng (easy) ➔ Facilitate là làm cho mọi việc suôn sẻ!",
        example: "Digital tools facilitate seamless remote collaboration."
      }
    }
  ],

  "band_6_7": [
    {
      id: "col_67_01",
      band: "6.5 - 7.0+",
      bandLabel: "💎 C1 CHUYÊN SÂU & IELTS MASTERY",
      topic: "Urban Congestion & Infrastructure",
      chunk: "EXACERBATE URBAN CONGESTION",
      targetWord: "EXACERBATE",
      meaning: "Làm trầm trọng thêm tình trạng ùn tắc đô thị",
      ipa: "/ɪɡˈzæsərbeɪt ˈɜːrbən kənˈdʒɛstʃən/",
      contextSentence: "The influx of private vehicles continues to (exacerbate) ________ urban traffic congestion during peak hours.",
      verbPrompt: "EXACERBATE",
      collocationTip: "Band 4.0 nói 'traffic gets worse'. Band 7.0 dùng 'exacerbate congestion' (từ vựng C1 diễn tả tác động tiêu cực mạnh mẽ).",
      goldenTip: {
        rule: "EXACERBATE = make a bad situation or problem even worse (làm tồi tệ hơn). Thường đi với: problem, crisis, congestion, tension.",
        theTrap: "Dùng từ 'aggravate' hoặc viết sai 'exacerbate' (thiếu chữ c hoặc nhầm vị trí âm /s/).",
        memoryHack: "💡 Chữ 'EX-ACERB': 'Acerbic' là chua chát, cay đắng ➔ Exacerbate là xát muối vào vết thương, làm mọi thứ tệ hơn!",
        example: "Rising fuel prices exacerbate economic inequality."
      }
    },
    {
      id: "col_67_02",
      band: "6.5 - 7.0+",
      bandLabel: "💎 C1 CHUYÊN SÂU & IELTS MASTERY",
      topic: "Environmental Damage",
      chunk: "EXERT A DETRIMENTAL IMPACT ON",
      targetWord: "DETRIMENTAL",
      meaning: "Gây ra tác động tiêu cực, tổn hại nghiêm trọng lên...",
      ipa: "/ɪɡˈzɜːrt ə ˌdɛtrɪˈmɛntl ˈɪmpækt ɒn/",
      contextSentence: "Excessive carbon emissions exert a (detrimental) ________ impact on global marine biodiversity.",
      verbPrompt: "DETRIMENTAL",
      collocationTip: "Thay vì 'have a bad effect on', cụm 'exert a detrimental / adverse impact on' giúp nâng trần điểm Lexical Resource lên 7.5+.",
      goldenTip: {
        rule: "EXERT AN IMPACT ON = create an effect. Detrimental = causing harm or damage (tương đương damaging / harmful).",
        theTrap: "Dùng nhầm giới từ: Đi sau 'impact / effect' luôn là 'ON', không dùng 'to' hay 'with'.",
        memoryHack: "💡 Detriment = sự thiệt hại ➔ Detrimental impact là đòn giáng gây thiệt hại nặng nề!",
        example: "Sedentary lifestyle exerts a detrimental impact on cardiovascular health."
      }
    },
    {
      id: "col_67_03",
      band: "6.5 - 7.0+",
      bandLabel: "💎 C1 CHUYÊN SÂU & IELTS MASTERY",
      topic: "Economy & Ecology",
      chunk: "FOSTER SUSTAINABLE DEVELOPMENT",
      targetWord: "FOSTER",
      meaning: "Nuôi dưỡng, thúc đẩy sự phát triển bền vững",
      ipa: "/ˈfɔːstər səˈsteɪnəbl dɪˈvɛləpmənt/",
      contextSentence: "Governments should offer subsidies to foster (sustainable) ________ development in green tech industries.",
      verbPrompt: "SUSTAINABLE",
      collocationTip: "'Foster' mang ý nghĩa nuôi dưỡng và hỗ trợ trong thời gian dài, hay hơn rất nhiều so với 'help' hoặc 'boost'.",
      goldenTip: {
        rule: "FOSTER + sustainable development / innovation / growth (khuyến khích, ươm mầm sự tiến bộ).",
        theTrap: "Nhầm lẫn 'sustainable' (bền vững) với 'substantive' (thực chất).",
        memoryHack: "💡 Foster care (chăm sóc nuôi dưỡng) ➔ Foster development là chăm bẵm để nền kinh tế lớn mạnh bền vững!",
        example: "The policy fosters a culture of innovation among university students."
      }
    },
    {
      id: "col_67_04",
      band: "6.5 - 7.0+",
      bandLabel: "💎 C1 CHUYÊN SÂU & IELTS MASTERY",
      topic: "Climate Emergency",
      chunk: "MITIGATE CLIMATE CATASTROPHE",
      targetWord: "MITIGATE",
      meaning: "Xoa dịu, giảm thiểu nguy cơ thảm họa khí hậu",
      ipa: "/ˈmɪtɪɡeɪt ˈklaɪmət kəˈtæstrəfi/",
      contextSentence: "Rapid decarbonization is urgently required to (mitigate) ________ the catastrophic consequences of global warming.",
      verbPrompt: "MITIGATE",
      collocationTip: "Band 7.0 không dùng 'reduce climate change', mà dùng 'mitigate the effects of climate change' (chuẩn thuật ngữ COP / UN).",
      goldenTip: {
        rule: "MITIGATE = to make something less harmful, unpleasant, or bad (giảm thiểu mức độ tổn hại).",
        theTrap: "Nhầm 'mitigate' với 'militate' (militate against = cản trở điều gì).",
        memoryHack: "💡 'Miti-' gợi liên tưởng đến 'minute' (nhỏ bé): Biến nguy cơ khổng lồ thành nhỏ hơn để kiểm soát!",
        example: "Strict regulations are needed to mitigate the environmental risk."
      }
    },
    {
      id: "col_67_05",
      band: "6.5 - 7.0+",
      bandLabel: "💎 C1 CHUYÊN SÂU & IELTS MASTERY",
      topic: "Modern Society",
      chunk: "PROLIFERATION OF SMARTPHONES",
      targetWord: "PROLIFERATION",
      meaning: "Sự bùng nổ, gia tăng nhanh chóng về số lượng",
      ipa: "/prəˌlɪfəˈreɪʃn ʌv ˈsmɑːrtfoʊnz/",
      contextSentence: "The rapid (proliferation) ________ of smartphones has fundamentally transformed interpersonal interactions.",
      verbPrompt: "PROLIFERATION",
      collocationTip: "Thay vì nói 'more and more smartphones are used', dùng danh từ học thuật 'the proliferation of smartphones'.",
      goldenTip: {
        rule: "THE PROLIFERATION OF + Plural Noun (sự sinh sôi nảy nở, nhân rộng với tốc độ chóng mặt).",
        theTrap: "Viết sai chính tả chữ 'proliferation' (nhầm f thành ph hoặc nhầm đuôi -tion).",
        memoryHack: "💡 Prolific (sinh sản nhiều, phong phú) ➔ Proliferation là sự lan tỏa bùng nổ khắp mọi ngóc ngách!",
        example: "The proliferation of digital misinformation threatens democratic discourse."
      }
    }
  ]
};
