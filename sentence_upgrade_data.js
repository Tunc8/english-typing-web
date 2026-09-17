/**
 * HỆ THỐNG NÂNG CẤP CÂU TỪ BAND 4.0 LÊN BAND 7.0 (SENTENCE UPGRADE GYM)
 * Huấn luyện người học chuyển đổi tư duy: Từ câu đơn, ghép lỏng lẻo bằng 'so/because/and'
 * sang cấu trúc học thuật: Mệnh đề quan hệ rút gọn, Đảo ngữ (Inversion), Câu chẻ (Cleft), Danh từ hóa (Nominalization)
 */

window.SENTENCE_UPGRADE_DATA = {
  "band_4_5": [
    {
      id: "up_45_01",
      band: "4.0 - 5.0",
      bandLabel: "🔰 TỪ CÂU ĐƠN LÊN CÂU PHỨC",
      topic: "Online Learning",
      basic40: "Online learning is convenient. Students can study anywhere.",
      advanced70: "Because online learning offers exceptional flexibility, students can study from any location.",
      pattern: "Liên từ phụ thuộc (Subordinating Conjunction: Because / Since)",
      targetWord: "FLEXIBILITY",
      verbPrompt: "FLEXIBILITY",
      meaning: "Sự linh hoạt vượt trội (flexibility thay vì convenient)",
      contextSentence: "Because online learning offers exceptional (flexibility) ________, students can study from virtually any location.",
      whyUpgrade: "Band 4.0 ngắt thành 2 câu đơn cộc lốc hoặc nối bằng 'so'. Band 5.5+ kết hợp thành 1 câu phức có mệnh đề trạng ngữ chỉ nguyên nhân và thay tính từ 'convenient' bằng danh từ 'flexibility'.",
      goldenTip: {
        rule: "Biến đổi: S + be + Adj ➔ S + offers/provides + Noun (Ví dụ: It is convenient ➔ It offers great convenience/flexibility).",
        theTrap: "Viết 2 câu đơn rời rạc khiến bài viết bị giám khảo đánh giá là 'monotonous' (đơn điệu, nghèo cấu trúc).",
        memoryHack: "💡 Đừng ngắt câu cộc lốc: Hãy dùng liên từ (Because/Although/While) để nối 2 vế lại thành 1 câu phức mượt mà!",
        example: "Although public transport is cheap, it is often overcrowded."
      }
    },
    {
      id: "up_45_02",
      band: "4.0 - 5.0",
      bandLabel: "🔰 TỪ CÂU ĐƠN LÊN CÂU PHỨC",
      topic: "Healthy Diet",
      basic40: "Fast food is delicious but it has too much fat and sugar.",
      advanced70: "Although fast food is tempting, it contains excessive amounts of sugar and saturated fats.",
      pattern: "Mệnh đề nhượng bộ (Concession: Although / Even though)",
      targetWord: "TEMPTING",
      verbPrompt: "TEMPTING",
      meaning: "Hấp dẫn, lôi cuốn (tempting thay cho delicious)",
      contextSentence: "Although fast food is undeniably (tempting) ________, it contains excessive amounts of saturated fats.",
      whyUpgrade: "Thay vì dùng liên từ 'but' rất phổ thông của band 4.0, câu nâng cấp đưa 'Although' lên đầu để tạo cấu trúc nhượng bộ chặt chẽ và thay 'delicious' bằng 'tempting' (từ vựng hấp dẫn có sắc thái cám dỗ).",
      goldenTip: {
        rule: "Trong tiếng Anh: Đã có ALTHOUGH ở đầu thì TUYỆT ĐỐI KHÔNG DÙNG BUT ở vế sau (Quy tắc một mất một còn).",
        theTrap: "Lỗi người Việt hay gặp: 'Although fast food is tempting, BUT it is unhealthy' (thừa chữ BUT).",
        memoryHack: "💡 Although và But như hai hổ một rừng: Chỉ được phép chọn 1 trong 2!",
        example: "Even though he studied hard, he failed to achieve the target score."
      }
    },
    {
      id: "up_45_03",
      band: "4.0 - 5.0",
      bandLabel: "🔰 TỪ CÂU ĐƠN LÊN CÂU PHỨC",
      topic: "Reading Habits",
      basic40: "Children should read books because books give them knowledge.",
      advanced70: "Cultivating reading habits enables children to broaden their knowledge horizon.",
      pattern: "Chủ ngữ là Danh động từ (Gerund Subject: V-ing as Subject)",
      targetWord: "HORIZON",
      verbPrompt: "HORIZON",
      meaning: "Chân trời tri thức (knowledge horizon)",
      contextSentence: "Cultivating a daily reading habit enables young children to broaden their intellectual (horizon) ________.",
      whyUpgrade: "Band 4.0 luôn bắt đầu bằng 'Children should... because...'. Câu nâng cấp sử dụng V-ing 'Cultivating reading habits' làm chủ ngữ, kết hợp động từ 'enables' và collocation 'broaden knowledge horizon'.",
      goldenTip: {
        rule: "V-ing làm chủ ngữ luôn chia động từ ở ngôi thứ 3 SỐ ÍT (Cultivating habits ENABLES).",
        theTrap: "Thấy 'habits' có 's' nên vội vàng chia động từ số nhiều 'enable' (quên mất chủ ngữ chính là hành động 'Cultivating').",
        memoryHack: "💡 Hành động là duy nhất: Dù đọc 100 cuốn sách (books) thì việc đọc (Reading) vẫn chỉ là 1 hành động!",
        example: "Exercising regularly keeps your mind sharp."
      }
    }
  ],

  "band_5_6": [
    {
      id: "up_56_01",
      band: "5.0 - 6.5",
      bandLabel: "🚀 MỆNH ĐỀ QUAN HỆ & DANH TỪ HÓA",
      topic: "Traffic & Pollution",
      basic40: "Many people drive cars every day, so the air in the city becomes very dirty.",
      advanced70: "The proliferation of private vehicles has directly contributed to alarming levels of air pollution.",
      pattern: "Danh từ hóa (Nominalization) + Hiện tại hoàn thành",
      targetWord: "CONTRIBUTED",
      verbPrompt: "CONTRIBUTED",
      meaning: "Đã trực tiếp góp phần gây ra... (contributed to)",
      contextSentence: "The proliferation of private vehicles has directly (contributed) ________ to alarming levels of urban air pollution.",
      whyUpgrade: "Band 4.0 dùng 'drive cars so air is dirty'. Câu 6.5 dùng 'The proliferation of private vehicles' (danh từ hóa tạo văn phong học thuật) + 'contributed to alarming levels'.",
      goldenTip: {
        rule: "CONTRIBUTE TO + Noun / V-ing (đóng góp vào, gây ra hệ quả gì). Giới từ 'to' ở đây là giới từ, không phải to-infinitive.",
        theTrap: "Dùng dạng nguyên thể sau 'contribute to' (ví dụ: contribute to degrade ➔ SAI, phải là contribute to degrading/degradation).",
        memoryHack: "💡 Contribute giống như quyên góp: Bạn đóng góp một phần vào một 'kết quả' cụ thể!",
        example: "Deforestation has contributed significantly to global warming."
      }
    },
    {
      id: "up_56_02",
      band: "5.0 - 6.5",
      bandLabel: "🚀 MỆNH ĐỀ QUAN HỆ & DANH TỪ HÓA",
      topic: "Tourism Impact",
      basic40: "Tourists drop a lot of plastic trash. It destroys local beaches.",
      advanced70: "Litter discarded by tourists poses a grave threat to fragile coastal ecosystems.",
      pattern: "Mệnh đề quan hệ rút gọn dạng bị động (Past Participle: V3/ed)",
      targetWord: "DISCARDED",
      verbPrompt: "DISCARDED",
      meaning: "Bị vứt bỏ lung tung (litter discarded by tourists)",
      contextSentence: "Plastic litter (discarded) ________ by careless tourists poses a grave threat to fragile marine ecosystems.",
      whyUpgrade: "Thay vì viết 'Litter which is dropped by tourists...', người bản xứ rút gọn thành 'Litter discarded by tourists' giúp câu văn gãy gọn và giàu tính học thuật.",
      goldenTip: {
        rule: "Rút gọn mệnh đề quan hệ bị động: Bỏ đại từ quan hệ (which/that) và to be, chỉ giữ lại Quá khứ phân từ (V3/ed).",
        theTrap: "Giữ nguyên động từ dạng chủ động 'litter discarding' (trong khi rác là vật bị vứt bỏ).",
        memoryHack: "💡 Rác không tự đi được: Nó bị người ta vứt (V3/ed - DISCARDED)!",
        example: "Products manufactured from recycled plastics are gaining popularity."
      }
    },
    {
      id: "up_56_03",
      band: "5.0 - 6.5",
      bandLabel: "🚀 MỆNH ĐỀ QUAN HỆ & DANH TỪ HÓA",
      topic: "Remote Working",
      basic40: "Employees work from home. They can save commuting time and spend more time with family.",
      advanced70: "Working remotely not only eliminates tedious commuting hours but also enhances work-life balance.",
      pattern: "Cấu trúc song hành (Not only... but also...)",
      targetWord: "ELIMINATES",
      verbPrompt: "ELIMINATES",
      meaning: "Loại bỏ hoàn toàn (eliminates thay cho save)",
      contextSentence: "Working remotely not only (eliminates) ________ tedious daily commuting but also enhances overall work-life balance.",
      whyUpgrade: "Thay vì liệt kê 2 vế lủng củng bằng 'and', cấu trúc 'not only... but also...' tạo tính nhịp điệu và nhấn mạnh kép cả hai lợi ích vượt trội.",
      goldenTip: {
        rule: "Tính song hành (Parallelism): Sau 'not only' là loại từ gì (động từ số ít: eliminates) thì sau 'but also' phải là loại từ đó (enhances).",
        theTrap: "Vế trước dùng V-s (eliminates) nhưng vế sau lại dùng V-ing hoặc to-V làm mất tính cân bằng.",
        memoryHack: "💡 Chiếc cân công lý: Hai đĩa cân 'not only' và 'but also' phải bằng chằn chặn cả về thì lẫn dạng từ!",
        example: "Music not only relieves stress but also stimulates brain activity."
      }
    }
  ],

  "band_6_7": [
    {
      id: "up_67_01",
      band: "6.5 - 7.0+",
      bandLabel: "💎 ĐẢO NGỮ & CÂU CHẺ C1",
      topic: "Renewable Energy",
      basic40: "Clean energy protects the environment and it also creates many green jobs.",
      advanced70: "Not only does renewable energy curb harmful emissions, but it also fosters sustainable employment.",
      pattern: "Đảo ngữ với NOT ONLY đứng đầu câu (Negative Inversion)",
      targetWord: "CURB",
      verbPrompt: "CURB",
      meaning: "Kiềm chế, ngăn chặn khí thải độc hại (curb emissions)",
      contextSentence: "Not only does renewable energy (curb) ________ greenhouse gas emissions, but it also fosters sustainable green jobs.",
      whyUpgrade: "Đưa 'Not only' lên đầu câu đòi hỏi phải đảo trợ động từ 'does' lên trước chủ ngữ. Đây là vũ khí tối thượng giúp khẳng định trình độ ngữ pháp Band 7.0+ trong bài thi Writing & Speaking.",
      goldenTip: {
        rule: "Công thức Đảo ngữ: NOT ONLY + Trợ động từ (do/does/did/is/are) + S + V(nguyên thể), BUT S ALSO + V.",
        theTrap: "Quên đảo trợ động từ (viết: Not only renewable energy curbs... ➔ SAI).",
        memoryHack: "💡 Đảo ngữ như đặt câu hỏi: Đưa DO/DOES lên trước chủ ngữ y hệt như khi bạn hỏi 'Does renewable energy curb...?'",
        example: "Not only did they achieve the sales target, but they also expanded into new markets."
      }
    },
    {
      id: "up_67_02",
      band: "6.5 - 7.0+",
      bandLabel: "💎 ĐẢO NGỮ & CÂU CHẺ C1",
      topic: "Government Action",
      basic40: "The government should ban single-use plastics to save oceans.",
      advanced70: "It is the government that must implement stringent legislation to curb plastic waste.",
      pattern: "Câu chẻ nhấn mạnh chủ thể (Cleft Sentence: It is... that...)",
      targetWord: "STRINGENT",
      verbPrompt: "STRINGENT",
      meaning: "Nghiêm ngặt, thắt chặt (stringent legislation)",
      contextSentence: "It is the government that must implement (stringent) ________ environmental regulations to protect marine ecosystems.",
      whyUpgrade: "Câu chẻ 'It is [Subject] that...' giúp làm nổi bật trọng tâm luận điểm: Chính phủ (chứ không phải ai khác) mới là bên có thẩm quyền tạo ra thay đổi mang tính hệ thống.",
      goldenTip: {
        rule: "Cấu trúc Cleft: IT IS / IT WAS + Đối tượng nhấn mạnh + THAT + Mệnh đề còn lại.",
        theTrap: "Dùng nhầm 'which' thay vì 'that' khi nhấn mạnh tân ngữ hoặc sự việc.",
        memoryHack: "💡 Chiếu đèn sân khấu: Cụm 'It is... that' như chiếc đèn spotlight rọi thẳng vào nhân vật chính!",
        example: "It was his persistent dedication that secured the research grant."
      }
    },
    {
      id: "up_67_03",
      band: "6.5 - 7.0+",
      bandLabel: "💎 ĐẢO NGỮ & CÂU CHẺ C1",
      topic: "Artificial Intelligence",
      basic40: "AI is developing very fast, so workers must learn new technical skills.",
      advanced70: "Faced with rapid technological disruption, modern workers are compelled to continually upgrade their competencies.",
      pattern: "Mệnh đề phân từ mở đầu (Fronted Participle Clause)",
      targetWord: "COMPELLED",
      verbPrompt: "COMPELLED",
      meaning: "Bị thôi thúc, bắt buộc phải... (compelled to)",
      contextSentence: "Faced with rapid technological disruption, modern workers are (compelled) ________ to continually upgrade their skillsets.",
      whyUpgrade: "Câu mở đầu bằng cụm phân từ 'Faced with...' tạo sự kết nối mượt mà và kịch tính giữa bối cảnh công nghệ và hành động của người lao động, thay thế hoàn toàn chữ 'so' đơn điệu.",
      goldenTip: {
        rule: "Dangling Participle Warning: Chủ ngữ của cụm phân từ đầu câu BẮT BUỘC phải là chủ ngữ của mệnh đề chính (Workers are faced with disruption ➔ Faced with disruption, workers...).",
        theTrap: "Để chủ ngữ sau dấu phẩy là vật (ví dụ: 'Faced with disruption, skill upgrading is important' ➔ Sai logic vì kỹ năng không tự đối mặt với sự gián đoạn).",
        memoryHack: "💡 Ai đối mặt thì người đó đứng đầu: Sau dấu phẩy phải là chủ thể trực tiếp gánh chịu bối cảnh!",
        example: "Exposed to harsh weather conditions, the ancient monument deteriorated rapidly."
      }
    }
  ]
};
