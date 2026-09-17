/**
 * CẨM NANG BÍ KÍP & BẢN ĐỒ TỔNG HỢP 6 THÌ KINH ĐIỂN
 * Cung cấp lý thuyết, công thức 3 thể, dấu hiệu nhận biết, cạm bẫy và thần chú nhớ nhanh
 */

window.TENSES_GUIDE_DATA = [
  {
    id: "present_simple",
    name: "Hiện Tại Đơn (Present Simple)",
    icon: "⏳",
    band: "Band 4.0 - 5.0",
    badge: "CỐT LÕI #1",
    summary: "Diễn tả thói quen lặp đi lặp lại, sự thật hiển nhiên hoặc chân lý.",
    formula: {
      positive: "S + V(s/es) / S + am/is/are + N/Adj",
      negative: "S + don't / doesn't + V_nguyên_thể",
      question: "Do / Does + S + V_nguyên_thể?"
    },
    examples: [
      { en: "He drinks hot coffee every morning.", vi: "Anh ấy uống cà phê nóng mỗi sáng." },
      { en: "The sun rises in the East.", vi: "Mặt trời mọc ở đằng Đông (chân lý)." },
      { en: "They don't live in Hanoi.", vi: "Họ không sống ở Hà Nội." }
    ],
    signals: ["always", "usually", "often", "sometimes", "seldom", "never", "every day / week / month", "once / twice a week"],
    traps: [
      {
        title: "BẪY QUÊN ĐUÔI S/ES VỚI HE/SHE/IT",
        content: "90% người mới học nói nhanh bị quên đuôi 's/es' với ngôi thứ 3 số ít. Phải nhớ: He/She/It hoặc 1 người/vật thì động từ PHẢI CÓ S."
      },
      {
        title: "BẪY VẪN THÊM S SAU TRỢ ĐỘNG TỪ DOES/DOESN'T",
        content: "Nhiều người viết: 'He doesn't drinks' (SAI). Khi DOES/DOESN'T đã mượn 'es' rồi thì động từ sau BẮT BUỘC về nguyên thể (He doesn't drink)."
      }
    ],
    memoryHack: "💡 Quy tắc 1 S: Nếu Chủ ngữ CHƯA CÓ 'S' (He, She, It) thì Động từ PHẢI MƯỢN 'S' (drinks). Một bên có S thì bên kia thôi!",
    filterBand: "band_4_5"
  },
  {
    id: "present_continuous",
    name: "Hiện Tại Tiếp Diễn (Present Continuous)",
    icon: "⚡",
    band: "Band 4.0 - 5.5",
    badge: "CỐT LÕI #2",
    summary: "Diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc kế hoạch chắc chắn trong tương lai gần.",
    formula: {
      positive: "S + am/is/are + V-ing",
      negative: "S + am/is/are + not + V-ing",
      question: "Am/Is/Are + S + V-ing?"
    },
    examples: [
      { en: "I am studying English right now.", vi: "Tôi đang học tiếng Anh ngay bây giờ." },
      { en: "Look! The bus is coming.", vi: "Nhìn kìa! Xe buýt đang tiến tới." },
      { en: "We are meeting the director tomorrow morning.", vi: "Chúng tôi sẽ gặp giám đốc vào sáng mai (lịch trình đã chốt)." }
    ],
    signals: ["now", "right now", "at the moment", "at present", "Look!", "Listen!", "Be quiet!", "Watch out!"],
    traps: [
      {
        title: "BẪY ĐỘNG TỪ CHỈ TRẠNG THÁI / GIÁC QUAN (STATIVE VERBS)",
        content: "Các động từ chỉ giác quan & trạng thái như: know, believe, understand, like, love, hate, taste (có vị), smell (có mùi), belong to... TUYỆT ĐỐI CẤM chia tiếp diễn khi nói về tính chất. Không nói: 'I am knowing you', phải nói: 'I know you'!"
      },
      {
        title: "BẪY GẤP ĐÔI PHỤ ÂM CUỐI TRƯỚC KHI THÊM -ING",
        content: "Từ 1 âm tiết có cấu trúc '1 Nguyên âm kẹp giữa 2 Phụ âm' phải gấp đôi phụ âm: run ➔ running, sit ➔ sitting, stop ➔ stopping."
      }
    ],
    memoryHack: "💡 Thần chú: 'Đã Tiếp Diễn là phải có ĐÔI BẠN CÙNG TIẾN: Be (am/is/are) và V-ing'. Thiếu một trong hai là sai ngữ pháp!",
    filterBand: "band_4_5"
  },
  {
    id: "past_simple",
    name: "Quá Khứ Đơn (Past Simple)",
    icon: "📜",
    band: "Band 4.0 - 5.5",
    badge: "CỐT LÕI #3",
    summary: "Diễn tả hành động đã xảy ra và ĐÃ CHẤM DỨT HOÀN TOÀN trong quá khứ, có thời gian xác định rõ ràng.",
    formula: {
      positive: "S + V2/ed / S + was/were + N/Adj",
      negative: "S + didn't + V_nguyên_thể",
      question: "Did + S + V_nguyên_thể?"
    },
    examples: [
      { en: "Yesterday I bought a grammar book.", vi: "Hôm qua tôi đã mua một cuốn sách ngữ pháp." },
      { en: "Alex didn't have time for breakfast.", vi: "Alex đã không có thời gian ăn sáng." },
      { en: "Did you see my keys yesterday?", vi: "Bạn có nhìn thấy chùm chìa khóa của tôi hôm qua không?" }
    ],
    signals: ["yesterday", "last night / week / month / year", "ago (2 days ago)", "in 2020 (mốc năm quá khứ)", "in the past", "when I was a child"],
    traps: [
      {
        title: "BẪY TỬ THẦN 'DIDN'T + QUÁ KHỨ'",
        content: "Rất nhiều người học thấy câu quá khứ liền viết: 'I didn't went' hoặc 'didn't had'. ĐÂY LÀ LỖI BỊ TRỪ ĐIỂM NẶNG NHẤT! Trợ động từ DID đã gánh quá khứ rồi thì động từ sau bắt buộc về nguyên thể: didn't go, didn't have."
      },
      {
        title: "BẪY ĐỘNG TỪ BẤT QUY TẮC CỘT 2",
        content: "Không được tự ý thêm -ed cho động từ bất quy tắc: buy ➔ bought (không phải buyed), go ➔ went, take ➔ took, write ➔ wrote."
      }
    ],
    memoryHack: "💡 Mẹo 'Tài Xế Gánh Tạ': Trợ động từ DIDN'T như tài xế gánh hết thì quá khứ, động từ chính theo sau chỉ việc ngồi thảnh thơi (về nguyên thể)!",
    filterBand: "band_4_5"
  },
  {
    id: "past_continuous",
    name: "Quá Khứ Tiếp Diễn (Past Continuous)",
    icon: "🎬",
    band: "Band 5.0 - 6.5",
    badge: "PHỐI HỢP THÌ #4",
    summary: "Diễn tả hành động đang diễn ra tại một thời điểm xác định trong quá khứ, hoặc phối hợp giữa hành động dài và ngắn.",
    formula: {
      positive: "S + was/were + V-ing",
      negative: "S + was/were + not + V-ing",
      question: "Was/Were + S + V-ing?"
    },
    examples: [
      { en: "At 8 PM last night, I was studying.", vi: "Lúc 8 giờ tối qua, tôi đang ngồi học." },
      { en: "While Alex was driving, his car broke down.", vi: "Trong lúc Alex đang lái xe thì xe bị hỏng." },
      { en: "While mom was cooking, dad was reading newspapers.", vi: "Trong lúc mẹ nấu ăn thì bố đọc báo (2 việc song song)." }
    ],
    signals: ["at 8 PM last night (giờ + quá khứ)", "at this time yesterday", "while (trong khi)", "as (khi)", "when (khi có việc chen ngang)"],
    traps: [
      {
        title: "BẪY PHỐI HỢP THÌ DÀI - NGẮN",
        content: "Hành động dài đang diễn ra liên tục chia Quá khứ tiếp diễn (was driving). Hành động ngắn thình lình chen ngang làm gián đoạn chia Quá khứ đơn (broke down). Không chia cả 2 cùng quá khứ đơn!"
      },
      {
        title: "BẪY WAS vs WERE",
        content: "WAS dành cho số ít (I, He, She, It, Danh từ số ít - 3 chữ cái ngắn hơn). WERE dành cho số nhiều (You, We, They, Danh từ số nhiều - 4 chữ cái dài hơn)."
      }
    ],
    memoryHack: "💡 Mẹo 'Phim Điện Ảnh': Cảnh quay dài mượt mà (was/were V-ing) thì bùm một cái hành động ngắn chen ngang (V2/ed dứt khoát)!",
    filterBand: "band_5_6"
  },
  {
    id: "present_perfect",
    name: "Hiện Tại Hoàn Thành (Present Perfect)",
    icon: "🏆",
    band: "Band 5.0 - 7.0+",
    badge: "ĂN ĐIỂM IELTS #5",
    summary: "Diễn tả hành động xảy ra trong quá khứ nhưng kết quả còn liên quan tới hiện tại, trải nghiệm cuộc đời, hoặc hành động kéo dài từ quá khứ tới nay.",
    formula: {
      positive: "S + have/has + V3/ed",
      negative: "S + haven't/hasn't + V3/ed",
      question: "Have/Has + S + V3/ed?"
    },
    examples: [
      { en: "Alex has worked at this company since 2021.", vi: "Alex đã làm việc ở đây từ năm 2021 (hiện vẫn đang làm)." },
      { en: "I have lost my keys (so I can't enter now).", vi: "Tôi đã làm mất chìa khóa (kết quả: bây giờ chưa vào được nhà)." },
      { en: "She has never flown on an airplane.", vi: "Cô ấy chưa bao giờ đi máy bay (trải nghiệm cuộc đời)." }
    ],
    signals: ["since + mốc thời gian (since 2020)", "for + khoảng thời gian (for 3 years)", "already", "yet (trong câu phủ định/nghi vấn)", "ever", "never", "just", "recently / lately", "so far / up to now"],
    traps: [
      {
        title: "BẪY SINCE vs FOR",
        content: "SINCE đi với MỐC thời gian (since Monday, since 2018, since I was young). FOR đi với KHOẢNG thời gian (for 3 days, for 5 years). Nhầm lẫn là mất điểm!"
      },
      {
        title: "BẪY QUÁ KHỨ ĐƠN vs HIỆN TẠI HOÀN THÀNH",
        content: "Nếu có mốc thời gian đã chấm dứt (yesterday, in 2010, last week) ➔ Bắt buộc Quá khứ đơn. Nếu không có mốc thời gian cụ thể hoặc kết quả kéo dài tới nay ➔ Hiện tại hoàn thành."
      },
      {
        title: "BẪY DÙNG CỘT 2 THAY VÌ CỘT 3",
        content: "Sau have/has phải là V3 (Past Participle): has flown (không dùng has flew), has written (không dùng has wrote)."
      }
    ],
    memoryHack: "💡 Thần chú: 'SINCE mốc - FOR khoảng. Cứ thấy bóng dáng HAVE/HAS là gọi tên CỘT 3!'",
    filterBand: "band_5_6"
  },
  {
    id: "simple_future",
    name: "Tương Lai Đơn & Bẫy Mệnh Đề Thời Gian",
    icon: "🚀",
    band: "Band 4.0 - 7.0+",
    badge: "BẪY KINH ĐIỂN #6",
    summary: "Diễn tả quyết định bộc phát ngay tại thời điểm nói, lời hứa, dự đoán không có căn cứ.",
    formula: {
      positive: "S + will + V_nguyên_thể",
      negative: "S + won't (will not) + V_nguyên_thể",
      question: "Will + S + V_nguyên_thể?"
    },
    examples: [
      { en: "Don't worry, I will call a taxi right now.", vi: "Đừng lo, tôi sẽ gọi taxi ngay bây giờ (quyết định tức thời)." },
      { en: "I promise I will never lie to you.", vi: "Tôi hứa tôi sẽ không bao giờ nói dối bạn." },
      { en: "I will call you as soon as I arrive tomorrow.", vi: "Tôi sẽ gọi cho bạn ngay khi tôi đến nơi vào ngày mai." }
    ],
    signals: ["tomorrow", "next week / month / year", "in the future", "I think / I hope / I believe / I promise + will"],
    traps: [
      {
        title: "BẪY 'VÙNG CẤM BAY' CỦA WILL SAU LIÊN TỪ THỜI GIAN",
        content: "CỰC KỲ QUAN TRỌNG: Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng AS SOON AS, WHEN, UNTIL, BEFORE, AFTER, IF... TUYỆT ĐỐI CẤM DÙNG WILL dù thấy chữ 'tomorrow'. Phải dùng HIỆN TẠI ĐƠN để chỉ tương lai: 'as soon as I arrive' (không dùng 'as soon as I will arrive')!"
      },
      {
        title: "BẪY WILL vs BE GOING TO",
        content: "Quyết định bột phát tại chỗ không có kế hoạch trước ➔ Dùng WILL. Kế hoạch đã được dự định từ trước hoặc có bằng chứng cụ thể ➔ Dùng BE GOING TO."
      }
    ],
    memoryHack: "💡 Thần chú 'Vùng Cấm Bay': AS SOON AS / WHEN / UNTIL là vùng cấm bay đối với phi cơ WILL. Bước vào đây là WILL bị bắn hạ, chỉ còn lại Hiện Tại Đơn!",
    filterBand: "band_6_7"
  }
];
