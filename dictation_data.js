/**
 * HỆ THỐNG LUYỆN NGHE CHÉP CHÍNH TẢ TỐC ĐỘ CAO (AUDITION DICTATION ENGINE)
 * Huấn luyện đôi tai bóc tách:
 * 1. Âm đuôi (Final sounds: /s/, /z/, /t/, /d/)
 * 2. Hiện tượng nuốt âm và nối âm (Connected speech & Linking)
 * 3. Mạo từ và giới từ dạng yếu (Weak forms of a/an/the, of, to, for)
 */

window.DICTATION_DATA = {
  "band_4_5": [
    {
      id: "dict_45_01",
      band: "4.0 - 5.0",
      bandLabel: "🔰 ÂM ĐUÔI & SỐ ÍT / SỐ NHIỀU",
      topic: "Office & Daily Schedule",
      audioText: "Alex always checks his emails before leaving the office.",
      targetWord: "CHECKS",
      verbPrompt: "CHECKS",
      meaning: "Alex luôn kiểm tra email trước khi rời văn phòng.",
      contextSentence: "Alex always (checks) ________ his emails before leaving the office.",
      audioHint: "Chú ý âm đuôi /ks/ ở từ CHECKS sau ngôi thứ 3 số ít 'Alex'.",
      dictationTrap: "90% người nghe bị nuốt mất âm /s/ đuôi, nghe nhầm thành 'check' hoặc 'chếch'.",
      goldenTip: {
        rule: "Với động từ tận cùng là phụ âm vô thanh /k/, đuôi '-s' được phát âm là /s/: checks /tʃɛks/.",
        theTrap: "Gõ thiếu 's' khiến câu bị trừ điểm ngữ pháp ngay lập tức.",
        memoryHack: "💡 Đuôi rắn hổ mang /s/: Nghe thấy tiếng xì gió ở cuối từ là phải gõ ngay phím S!",
        example: "He walks, he speaks, he checks."
      }
    },
    {
      id: "dict_45_02",
      band: "4.0 - 5.0",
      bandLabel: "🔰 ÂM ĐUÔI & SỐ ÍT / SỐ NHIỀU",
      topic: "Travel & Preparation",
      audioText: "She decided to book a flight ticket yesterday evening.",
      targetWord: "DECIDED",
      verbPrompt: "DECIDED",
      meaning: "Cô ấy đã quyết định đặt vé máy bay vào tối qua.",
      contextSentence: "She (decided) ________ to book a flight ticket yesterday evening.",
      audioHint: "Đuôi '-ed' đi sau âm /d/ tạo thành âm tiết mới /ɪd/: de-ci-did.",
      dictationTrap: "Dễ nghe sót đuôi '-ed' và chỉ gõ 'decide' vì nhịp điệu nói nhanh.",
      goldenTip: {
        rule: "Quy tắc phát âm đuôi '-ed': Động từ kết thúc bằng /t/ hoặc /d/ thì '-ed' đọc thành /ɪd/ (decided, wanted, needed).",
        theTrap: "Bỏ quên đuôi quá khứ dù ngữ cảnh có mốc thời gian 'yesterday evening'.",
        memoryHack: "💡 Thêm 1 nhịp: 'De-cide' có 2 âm, 'De-ci-ded' có 3 âm. Nghe thấy 3 nhịp thì chắc chắn có ED!",
        example: "We decided to postpone the meeting."
      }
    },
    {
      id: "dict_45_03",
      band: "4.0 - 5.0",
      bandLabel: "🔰 ÂM ĐUÔI & SỐ ÍT / SỐ NHIỀU",
      topic: "Campus Life",
      audioText: "There are several international students waiting outside the library.",
      targetWord: "STUDENTS",
      verbPrompt: "STUDENTS",
      meaning: "Có một vài sinh viên quốc tế đang đợi bên ngoài thư viện.",
      contextSentence: "There are several international (students) ________ waiting outside the library.",
      audioHint: "Từ khóa 'several' báo hiệu danh từ số nhiều có đuôi /ts/: students.",
      dictationTrap: "Nghe nhầm thành danh từ số ít 'student' do âm /s/ bị nuốt vào từ 'waiting' phía sau.",
      goldenTip: {
        rule: "Từ chỉ số lượng: SEVERAL / MANY / NUMEROUS + Danh từ đếm được SỐ NHIỀU.",
        theTrap: "Quên chữ 'S' ở cuối danh từ dù phía trước có 'There ARE several'.",
        memoryHack: "💡 'There ARE' + 'SEVERAL' = Bảo hiểm 2 lớp chắc chắn có đuôi 'S'!",
        example: "Several students submitted their assignments late."
      }
    }
  ],

  "band_5_6": [
    {
      id: "dict_56_01",
      band: "5.0 - 6.5",
      bandLabel: "🚀 NỐI ÂM & MẠO TỪ YẾU",
      topic: "Scientific Investigation",
      audioText: "The researchers found an unexpected solution to the water shortage.",
      targetWord: "UNEXPECTED",
      verbPrompt: "UNEXPECTED",
      meaning: "Các nhà nghiên cứu đã tìm ra một giải pháp bất ngờ cho tình trạng thiếu nước.",
      contextSentence: "The researchers found an (unexpected) ________ solution to the water shortage.",
      audioHint: "Nối âm: 'found an' đọc lướt thành /faʊnd ən/, nối tiếp vào nguyên âm đầu của /ˌʌnɪkˈspɛktɪd/.",
      dictationTrap: "Nhiều người nghe tưởng 'found a' hoặc bị vấp ở âm nối /d-ən/, không nhận ra từ 'unexpected'.",
      goldenTip: {
        rule: "Nối phụ âm cuối với nguyên âm đầu: found + an ➔ 'found-an'. Đứng trước nguyên âm /ʌ/ bắt buộc dùng mạo từ 'an'.",
        theTrap: "Viết 'a unexpected' hoặc nhầm sang từ 'unrespected'.",
        memoryHack: "💡 'An' như chiếc cầu nối giúp miệng phát âm trơn tru giữa 2 nguyên âm!",
        example: "An unexpected turn of events surprised everyone."
      }
    },
    {
      id: "dict_56_02",
      band: "5.0 - 6.5",
      bandLabel: "🚀 NỐI ÂM & MẠO TỪ YẾU",
      topic: "Social Responsibility",
      audioText: "Every individual should take an active part in environmental protection.",
      targetWord: "INDIVIDUAL",
      verbPrompt: "INDIVIDUAL",
      meaning: "Mỗi cá nhân nên tham gia tích cực vào việc bảo vệ môi trường.",
      contextSentence: "Every (individual) ________ should take an active part in environmental protection.",
      audioHint: "Nhịp phát âm 5 âm tiết: in-di-vi-du-al /ˌɪndɪˈvɪdʒuəl/.",
      dictationTrap: "Dễ nghe lướt thành 'individual person' hoặc viết sai chính tả thành 'individuel'.",
      goldenTip: {
        rule: "EVERY + Danh từ đếm được số ít (Every individual, every citizen). Không dùng dạng số nhiều sau 'every'.",
        theTrap: "Chia 'Every individuals' (thừa chữ S).",
        memoryHack: "💡 Every = Từng người một: Đã đếm từng người thì danh từ phải là số ít!",
        example: "Every individual has the right to quality healthcare."
      }
    },
    {
      id: "dict_56_03",
      band: "5.0 - 6.5",
      bandLabel: "🚀 NỐI ÂM & MẠO TỪ YẾU",
      topic: "Urban Infrastructure",
      audioText: "Investing in sustainable public transport relieves city highway pressure.",
      targetWord: "RELIEVES",
      verbPrompt: "RELIEVES",
      meaning: "Đầu tư vào giao thông công cộng bền vững giúp giải tỏa áp lực đường cao tốc đô thị.",
      contextSentence: "Investing in sustainable public transport (relieves) ________ city highway pressure.",
      audioHint: "Chủ ngữ là V-ing 'Investing' nên động từ 'relieves' có âm đuôi /z/.",
      dictationTrap: "Nghe nhầm thành danh từ 'relief' hoặc dạng quá khứ 'relieved'.",
      goldenTip: {
        rule: "Động từ 'relieve' (làm dịu đi) thêm 's' đọc là /rɪˈliːvz/. Danh từ là 'relief' /rɪˈliːf/.",
        theTrap: "Nhầm lẫn giữa động từ 'relieve' và danh từ 'relief'.",
        memoryHack: "💡 Chữ V trong relieVe chỉ Hành Động (Verb) ➔ Động từ!",
        example: "Regular stretching relieves muscle tension."
      }
    }
  ],

  "band_6_7": [
    {
      id: "dict_67_01",
      band: "6.5 - 7.0+",
      bandLabel: "💎 IELTS SECTION 3/4 & NÓI NHANH",
      topic: "Marine Ecology & Microplastics",
      audioText: "Microplastics absorb toxic chemical pollutants at concentrations several million times higher than ambient seawater.",
      targetWord: "CONCENTRATIONS",
      verbPrompt: "CONCENTRATIONS",
      meaning: "Vi nhựa hấp thụ các chất ô nhiễm hóa học độc hại ở nồng độ cao gấp hàng triệu lần so với nước biển xung quanh.",
      contextSentence: "Microplastics absorb toxic chemical pollutants at (concentrations) ________ several million times higher than ambient seawater.",
      audioHint: "Từ vựng học thuật 4 âm tiết: con-cen-tra-tions /ˌkɑːnsnˈtreɪʃnz/ với đuôi số nhiều /z/.",
      dictationTrap: "Tốc độ nói học thuật 1.25x nuốt mạo từ và lướt qua giới từ 'at', người nghe dễ bỏ sót số nhiều 'concentrations'.",
      goldenTip: {
        rule: "Cụm học thuật: AT CONCENTRATIONS HIGHER THAN (ở những mức nồng độ cao hơn...). Thường dùng dạng số nhiều để chỉ dải nồng độ.",
        theTrap: "Viết sai chính tả chữ 'concentration' (nhầm c thành s hoặc s thành c).",
        memoryHack: "💡 Con-cen-trate: Trung tâm tập trung (Center) ➔ Nồng độ cô đặc!",
        example: "Toxins were detected at lethal concentrations."
      }
    },
    {
      id: "dict_67_02",
      band: "6.5 - 7.0+",
      bandLabel: "💎 IELTS SECTION 3/4 & NÓI NHANH",
      topic: "Psychology & Habit Formation",
      audioText: "Neuroscientists discovered that dopamine spikes occur in anticipation of the reward rather than upon receipt.",
      targetWord: "ANTICIPATION",
      verbPrompt: "ANTICIPATION",
      meaning: "Các nhà thần kinh học phát hiện ra rằng lượng dopamine tăng vọt khi mong chờ phần thưởng thay vì khi nhận được.",
      contextSentence: "Neuroscientists discovered that dopamine spikes occur in (anticipation) ________ of the reward rather than upon receipt.",
      audioHint: "Cụm cố định 'in anticipation of' nối âm /ɪn ænˌtɪsɪˈpeɪʃn əv/ phát âm cực kỳ nhanh và liền mạch.",
      dictationTrap: "Nghe nhầm cụm 'in anticipation of' thành 'in participation of' do âm vần tương đồng.",
      goldenTip: {
        rule: "IN ANTICIPATION OF + Noun = expecting and preparing for something (với sự háo hức mong đợi điều gì).",
        theTrap: "Nhầm lẫn giữa 'anticipation' (dự đoán, mong chờ) và 'participation' (sự tham gia).",
        memoryHack: "💡 Anti-cipate: 'Cip' = take (nắm bắt trước trong tâm trí) ➔ Mong đợi trước khi nó xảy ra!",
        example: "The crowd gathered in eager anticipation of the announcement."
      }
    },
    {
      id: "dict_67_03",
      band: "6.5 - 7.0+",
      bandLabel: "💎 IELTS SECTION 3/4 & NÓI NHANH",
      topic: "Urban Planning & Environment",
      audioText: "Urban planners emphasize that decentralized infrastructure significantly mitigates carbon emissions.",
      targetWord: "DECENTRALIZED",
      verbPrompt: "DECENTRALIZED",
      meaning: "Các nhà quy hoạch đô thị nhấn mạnh rằng cơ sở hạ tầng phi tập trung giúp giảm thiểu đáng kể lượng khí thải carbon.",
      contextSentence: "Urban planners emphasize that (decentralized) ________ infrastructure significantly mitigates carbon emissions.",
      audioHint: "Tiền tố phủ định/phân tán 'de-' kết hợp 'centralized': /diːˈsɛntrəlaɪzd/.",
      dictationTrap: "Không bắt được tiền tố 'de-', nghe nhầm thành 'centralized' (nghĩa hoàn toàn đối lập).",
      goldenTip: {
        rule: "DE-CENTRALIZED = chia nhỏ từ trung tâm ra các vùng vệ tinh (phi tập trung hóa). Cả 2 cách viết -ized (US) và -ised (UK) đều chuẩn.",
        theTrap: "Nghe sót tiền tố 'de-' dẫn đến hiểu sai hoàn toàn định hướng quy hoạch đô thị.",
        memoryHack: "💡 Central là trung tâm, DE- là tản ra: Cơ sở hạ tầng phân bố đều khắp thành phố!",
        example: "Decentralized energy grids prevent massive blackouts."
      }
    }
  ]
};
