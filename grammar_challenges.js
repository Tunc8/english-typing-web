/**
 * LỘ TRÌNH HỌC TIẾNG ANH CHUẨN BAND 4.0 - 7.0+
 * TÍCH HỢP HỆ THỐNG MẸO VÀNG GHI NHỚ & BÓC TÁCH CẠM BẪY CHO TỪNG CÂU
 * 6 THÌ KINH ĐIỂN: Hiện tại đơn, Hiện tại tiếp diễn, Quá khứ đơn, Quá khứ tiếp diễn, Hiện tại hoàn thành, Tương lai đơn & Bẫy mệnh đề thời gian
 */

window.ROADMAP_GRAMMAR = {
  // ==========================================
  // CẤP ĐỘ 1: BAND 4.0 - 5.0 (23 THỬ THÁCH CĂN BẢN 6 THÌ)
  // ==========================================
  "band_4_5": [
    {
      id: "g4_01",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn & Quy Tắc Ngôi Thứ 3 Số Ít",
      storyTitle: "Thói Quen Buổi Sáng Của Alex",
      contextSentence: "He usually (drink) ________ hot coffee before heading to the office.",
      verbPrompt: "drink",
      targetWord: "DRINKS",
      hintText: "Dấu hiệu 'usually' (thói quen) + Chủ ngữ 'He' (1 người)",
      goldenTip: {
        rule: "Ở thì Hiện tại đơn, khi chủ ngữ là He, She, It hoặc Danh từ số ít, động từ BẮT BUỘC thêm 's' hoặc 'es'.",
        theTrap: "90% người học nói nhanh bị 'quên đuôi S' (He drink coffee) hoặc vội vàng chia tiếp diễn 'is drinking' vì tưởng đang uống.",
        memoryHack: "💡 Quy tắc 1 S: Nếu Chủ ngữ CHƯA CÓ 'S' (He, She, It) thì Động từ PHẢI MƯỢN 'S' (drinks). Một bên có S thì bên kia thôi!",
        example: "He drinks coffee every morning. / They drink tea."
      }
    },
    {
      id: "g4_02",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Trợ Động Từ Quá Khứ DIDN'T",
      storyTitle: "Buổi Sáng Muộn Màng",
      contextSentence: "Because he woke up late, Alex didn't (have) ________ time for breakfast.",
      verbPrompt: "have",
      targetWord: "HAVE",
      hintText: "Sau trợ động từ phủ định DIDN'T thì động từ thế nào?",
      goldenTip: {
        rule: "Khi đã có trợ động từ DID / DIDN'T trong câu quá khứ, động từ chính theo sau BẮT BUỘC trở về DẠNG NGUYÊN THỂ (Bare Infinitive).",
        theTrap: "Người học thấy câu quá khứ ('woke up late') nên theo quán tính chia 'didn't had'. Đây là lỗi sai chí mạng trong bài thi!",
        memoryHack: "💡 Mẹo 'Tài Xế Gánh Tạ': Trợ động từ DIDN'T giống như tài xế đã gánh hết thì quá khứ rồi, động từ chính phía sau chỉ việc ngồi chơi (về nguyên thể HAVE).",
        example: "I didn't have money (ĐÚNG) - Tuyệt đối không: I didn't had money (SAI)."
      }
    },
    {
      id: "g4_03",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Động Từ Bất Quy Tắc Cột 2 (Quá Khứ Đơn)",
      storyTitle: "Ghé Qua Cửa Tiệm Sách",
      contextSentence: "Yesterday evening, Alex (buy) ________ a new IELTS grammar book.",
      verbPrompt: "buy",
      targetWord: "BOUGHT",
      hintText: "Dấu hiệu 'Yesterday evening' + Quá khứ bất quy tắc của BUY",
      goldenTip: {
        rule: "Động từ 'buy' là động từ bất quy tắc, dạng quá khứ cột 2 là 'bought' (phát âm: /bɔːt/).",
        theTrap: "Nhiều bạn quen tay thêm đuôi '-ed' thành 'buyed' hoặc viết sai chính tả thành 'bougth'.",
        memoryHack: "💡 Gia đình vần OUGHT: BUY ➔ BOUGHT, BRING ➔ BROUGHT, THINK ➔ THOUGHT, FIGHT ➔ FOUGHT, CATCH ➔ CAUGHT. Thuộc 1 chữ là thuộc cả nhà!",
        example: "She bought a laptop last week."
      }
    },
    {
      id: "g4_04",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Trợ Động Từ Phủ Định Lặp Lại",
      storyTitle: "Quên Hộ Chiếu Ở Nhà",
      contextSentence: "He checked his pockets and realized he didn't (bring) ________ his passport.",
      verbPrompt: "bring",
      targetWord: "BRING",
      hintText: "Lại gặp trợ động từ phủ định DIDN'T",
      goldenTip: {
        rule: "Sau DIDN'T, tuyệt đối không dùng 'brought', phải giữ nguyên 'bring'.",
        theTrap: "Bị đánh lừa bởi chữ 'realized' ở quá khứ nên não tự động kéo 'bring' về 'brought'.",
        memoryHack: "💡 Khắc cốt ghi tâm: Cứ thấy bóng dáng DO / DOES / DID thì động từ theo sau auto NGUYÊN THỂ!",
        example: "Did you bring your keys? / I didn't bring my umbrella."
      }
    },
    {
      id: "g4_05",
      tenseId: "simple_future",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Động Từ Khuyết Thiếu Tương Lai WILL",
      storyTitle: "Quyết Định Nhanh Chóng",
      contextSentence: "Don't worry, the bus is late so I will (call) ________ a taxi right away.",
      verbPrompt: "call",
      targetWord: "CALL",
      hintText: "Sau động từ khuyết thiếu WILL thì động từ ở dạng nào?",
      goldenTip: {
        rule: "Sau WILL / WON'T (Modal verbs), động từ luôn luôn ở dạng nguyên thể không 'to'.",
        theTrap: "Nhiều người thấy chữ 'right away / right now' vội chia 'will calling' hoặc 'am calling'.",
        memoryHack: "💡 Quyết định bộc phát ngay tại thời điểm nói ➔ Dùng WILL + V-nguyên thể.",
        example: "I will call you tomorrow. / Will you marry me?"
      }
    },
    {
      id: "g4_06",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Động Từ To Be Trong Quá Khứ",
      storyTitle: "Thời Tiết Bất Ổn",
      contextSentence: "Yesterday the storm (be) ________ very severe in the central region.",
      verbPrompt: "be",
      targetWord: "WAS",
      hintText: "Quá khứ của TO BE với chủ ngữ số ít 'the storm'",
      goldenTip: {
        rule: "Ở thì Quá khứ đơn, Động từ TO BE chia thành 2 dạng: WAS (số ít) và WERE (số nhiều).",
        theTrap: "Nhầm lẫn giữa WAS và WERE khi gặp danh từ trừu tượng hoặc chủ ngữ dài.",
        memoryHack: "💡 Mẹo đếm chữ: WAS (3 chữ cái - ngắn hơn) dành cho SỐ ÍT (I, He, She, It). WERE (4 chữ cái - dài hơn) dành cho SỐ NHIỀU (You, We, They).",
        example: "The weather was cold. / They were very happy."
      }
    },
    {
      id: "g4_07",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn & Đuôi -ES (Tận Cùng O, CH, SH, X, SS)",
      storyTitle: "Thói Quen Thư Giãn Buổi Tối",
      contextSentence: "After a hectic workday, Lucas always (watch) ________ the evening technology news.",
      verbPrompt: "watch",
      targetWord: "WATCHES",
      hintText: "Chủ ngữ số ít 'Lucas' + Động từ kết thúc bằng đuôi -ch",
      goldenTip: {
        rule: "Động từ tận cùng bằng -o, -ch, -sh, -x, -ss khi đi với ngôi thứ 3 số ít (He/She/It) phải thêm đuôi -ES.",
        theTrap: "Chỉ viết thêm một chữ 's' thành 'watchs' dẫn đến sai chính tả cơ bản.",
        memoryHack: "💡 Thần chú 'Ôi Cháu Sợ Xấu Sợ': -o, -ch, -sh, -x, -ss ➔ Bắt buộc thêm ES!",
        example: "He watches TV. / She washes dishes. / He fixes phones."
      }
    },
    {
      id: "g4_08",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn & Đổi Y Thành -IES",
      storyTitle: "Kỹ Sư Cần Cù",
      contextSentence: "Every weekend, the diligent developer (tidy) ________ up his desk and desktop files.",
      verbPrompt: "tidy",
      targetWord: "TIDIES",
      hintText: "Chủ ngữ số ít + Động từ kết thúc bằng Phụ âm + Y",
      goldenTip: {
        rule: "Động từ kết thúc bằng Phụ âm + Y: Đổi Y thành I rồi thêm -ES (tidy ➔ tidies, study ➔ studies). Nếu trước Y là Nguyên âm thì chỉ thêm S (play ➔ plays).",
        theTrap: "Giữ nguyên Y thêm S thành 'tidys' hoặc nhầm sang thì quá khứ.",
        memoryHack: "💡 Mẹo 'Phụ âm + Y': Gặp phụ âm đi trước Y là Y rụng xuống, biến thành IES ngay!",
        example: "He studies hard every day. / She plays tennis."
      }
    },
    {
      id: "g4_09",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn Phủ Định Với DOESN'T",
      storyTitle: "Chế Độ Dinh Dưỡng Khắt Khe",
      contextSentence: "Sarah is a strict vegetarian, so she doesn't (eat) ________ any red meat or seafood.",
      verbPrompt: "eat",
      targetWord: "EAT",
      hintText: "Sau trợ động từ phủ định DOESN'T, động từ có còn thêm S không?",
      goldenTip: {
        rule: "Trong câu phủ định Hiện tại đơn, trợ động từ DOES / DOESN'T đã gánh đuôi 'es' rồi, động từ chính BẮT BUỘC về NGUYÊN THỂ.",
        theTrap: "Theo quán tính thấy 'she' nên vẫn gõ 'doesn't eats' (lỗi siêu phổ biến).",
        memoryHack: "💡 Một nhà không thể có 2 hổ: DOESN'T đã mượn 'es' rồi thì động từ sau phải về nguyên thể EAT!",
        example: "She doesn't eat meat. (Tuyệt đối không dùng: She doesn't eats)."
      }
    },
    {
      id: "g4_10",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn Diễn Tả Sự Thật Hiển Nhiên (Chân Lý)",
      storyTitle: "Hiện Tượng Vật Lý Cơ Bản",
      contextSentence: "In physics class, we learned that water (boil) ________ at 100 degrees Celsius.",
      verbPrompt: "boil",
      targetWord: "BOILS",
      hintText: "Quy luật tự nhiên / Sự thật khoa học luôn đúng",
      goldenTip: {
        rule: "Chân lý khoa học và sự thật hiển nhiên LUÔN LUÔN chia ở thì Hiện Tại Đơn, dù đứng sau mệnh đề quá khứ 'we learned that'.",
        theTrap: "Thấy 'we learned' ở quá khứ nên lùi thì thành 'boiled'. Chân lý không bao giờ lùi thì!",
        memoryHack: "💡 Chân lý bất diệt: Nước sôi, mặt trời mọc, trái đất quay ➔ Luôn luôn Hiện Tại Đơn (BOILS)!",
        example: "The sun rises in the east."
      }
    },
    {
      id: "g4_11",
      tenseId: "present_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Đơn Câu Nghi Vấn Với DOES",
      storyTitle: "Hỏi Thăm Công Việc Của Anh Trai",
      contextSentence: "Does your older brother (work) ________ as a backend software developer?",
      verbPrompt: "work",
      targetWord: "WORK",
      hintText: "Trợ động từ DOES đứng đầu câu nghi vấn",
      goldenTip: {
        rule: "Cấu trúc câu hỏi Hiện tại đơn: Do / Does + S + V(nguyên thể)?",
        theTrap: "Người học nhìn thấy 'your brother' (ngôi 3 số ít) nên theo thói quen thêm S 'Does your brother works?' (SAI).",
        memoryHack: "💡 DOES đã đứng ở đầu cửa canh gác rồi, động từ sau lưng cứ vô tư NGUYÊN THỂ!",
        example: "Does he speak English? (Đúng) / Does he speaks English? (Sai)."
      }
    },
    {
      id: "g4_12",
      tenseId: "present_continuous",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Tiếp Diễn & Dấu Hiệu 'RIGHT NOW'",
      storyTitle: "Buổi Hòa Nhạc Trực Tiếp",
      contextSentence: "Listen carefully! The lead vocalist is (perform) ________ the chorus right now.",
      verbPrompt: "perform",
      targetWord: "PERFORMING",
      hintText: "Dấu hiệu 'Listen!' + 'is' + 'right now' báo hiệu hành động đang diễn ra",
      goldenTip: {
        rule: "Hiện tại tiếp diễn: S + am/is/are + V-ing. Dùng khi hành động đang xảy ra ngay lúc nói (right now, at the moment, Listen!, Look!).",
        theTrap: "Quên đuôi -ing hoặc chia nhầm 'performs' vì không để ý trợ từ 'is'.",
        memoryHack: "💡 Bộ đôi không tách rời: Có 'IS' thì phải có 'V-ING' đi cùng như hình với bóng!",
        example: "The band is performing live on stage right now."
      }
    },
    {
      id: "g4_13",
      tenseId: "present_continuous",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Tiếp Diễn Bỏ Đuôi E Câm Trước -ING",
      storyTitle: "Chuyến Xe Buýt Đang Tới",
      contextSentence: "Look over there! The yellow school bus is (come) ________ down the avenue.",
      verbPrompt: "come",
      targetWord: "COMING",
      hintText: "Bỏ 'e' câm ở cuối động từ 'come' trước khi thêm -ing",
      goldenTip: {
        rule: "Động từ tận cùng bằng 1 chữ 'e' câm: Bỏ 'e' trước khi thêm -ING (come ➔ coming, write ➔ writing, make ➔ making).",
        theTrap: "Gõ thừa chữ e thành 'comeing' khiến hệ thống chấm sai chính tả.",
        memoryHack: "💡 Quy tắc 'Bỏ E đón ING': Chữ E câm phải nhường chỗ cho gia đình ING nhảy vào!",
        example: "Look! The train is coming."
      }
    },
    {
      id: "g4_14",
      tenseId: "present_continuous",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Hiện Tại Tiếp Diễn & Quy Tắc Gấp Đôi Phụ Âm",
      storyTitle: "Muộn Giờ Phỏng Vấn",
      contextSentence: "Kevin is late for his technical interview, so he is (run) ________ across the street.",
      verbPrompt: "run",
      targetWord: "RUNNING",
      hintText: "Từ 1 âm tiết có 1 nguyên âm kẹp giữa 2 phụ âm (R-U-N)",
      goldenTip: {
        rule: "Động từ 1 âm tiết có cấu trúc 'Phụ âm - Nguyên âm - Phụ âm': Gấp đôi phụ âm cuối trước khi thêm -ING (run ➔ running, sit ➔ sitting, stop ➔ stopping).",
        theTrap: "Gõ thiếu 1 chữ N thành 'runing'.",
        memoryHack: "💡 Chiếc bánh kẹp (R-U-N): Nguyên âm U bị kẹp ở giữa thì phải nhân đôi phụ âm cuối (2 chữ N) mới chịu được nhiệt!",
        example: "He is running as fast as possible."
      }
    },
    {
      id: "g4_15",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Bất Quy Tắc Cột 2: GO ➔ WENT",
      storyTitle: "Chuyến Dã Ngoại Cuối Tuần",
      contextSentence: "Last Sunday, our entire project group (go) ________ on a picnic in the national park.",
      verbPrompt: "go",
      targetWord: "WENT",
      hintText: "Dấu hiệu 'Last Sunday' + Cột 2 của GO",
      goldenTip: {
        rule: "Động từ GO là bất quy tắc: go ➔ went ➔ gone. Ở thì quá khứ đơn có thời gian xác định, dùng 'went'.",
        theTrap: "Chế từ sai 'goed' hoặc nhầm sang cột 3 'gone' khi không có trợ động từ have/has.",
        memoryHack: "💡 Go đã đi xa thì biến hình thành WENT!",
        example: "We went to the beach last weekend."
      }
    },
    {
      id: "g4_16",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Bất Quy Tắc Cột 2: WRITE ➔ WROTE",
      storyTitle: "Bức Thư Cảm Ơn Khách Hàng",
      contextSentence: "Two days ago, our account manager (write) ________ a comprehensive thank-you letter.",
      verbPrompt: "write",
      targetWord: "WROTE",
      hintText: "Dấu hiệu 'Two days ago' + Cột 2 của WRITE",
      goldenTip: {
        rule: "Động từ WRITE: write ➔ wrote ➔ written. Quá khứ đơn dùng 'wrote'.",
        theTrap: "Thêm ed thành 'writed' hoặc nhầm sang cột 3 'written'.",
        memoryHack: "💡 I đổi thành O: wrIte biến thành wrOte trong quá khứ!",
        example: "She wrote an inspiring article yesterday."
      }
    },
    {
      id: "g4_17",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Bất Quy Tắc Cột 2: SEE ➔ SAW",
      storyTitle: "Phát Hiện Bất Ngờ",
      contextSentence: "I opened the balcony door last night and (see) ________ a shooting star in the clear sky.",
      verbPrompt: "see",
      targetWord: "SAW",
      hintText: "Dấu hiệu 'last night' + Cột 2 của SEE",
      goldenTip: {
        rule: "SEE ➔ SAW ➔ SEEN. Quá khứ đơn cột 2 là SAW /sɔː/.",
        theTrap: "Viết sai chính tả thành 'sawed' hoặc dùng 'seen' (cột 3 chỉ đi với have/has).",
        memoryHack: "💡 Nhìn thấy hôm qua: SEE hóa thành SAW!",
        example: "I saw a great movie last night."
      }
    },
    {
      id: "g4_18",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Đổi D Thành T: SPEND ➔ SPENT",
      storyTitle: "Kỳ Nghỉ Hè Đáng Nhớ",
      contextSentence: "Last summer vacation, our college friends (spend) ________ two weeks volunteering in Da Lat.",
      verbPrompt: "spend",
      targetWord: "SPENT",
      hintText: "Chữ 'd' ở cuối đổi thành 't' trong quá khứ",
      goldenTip: {
        rule: "Động từ tận cùng -END thường đổi thành -ENT trong quá khứ: spend ➔ spent, send ➔ sent, lend ➔ lent.",
        theTrap: "Viết thành 'spended' (sai ngữ pháp).",
        memoryHack: "💡 D đổi thành T: Tiền và thời gian đã tiêu (SPEND) thì biến thành SPENT!",
        example: "We spent three hours fixing the server bug."
      }
    },
    {
      id: "g4_19",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Của TO BE Số Nhiều: WERE",
      storyTitle: "Sau Chặng Leo Núi Gian Nan",
      contextSentence: "They (be) ________ utterly exhausted after the five-hour mountain trek yesterday.",
      verbPrompt: "be",
      targetWord: "WERE",
      hintText: "Chủ ngữ số nhiều 'They' + Quá khứ đơn của TO BE",
      goldenTip: {
        rule: "Quá khứ đơn của BE: WAS (I, He, She, It, số ít - 3 chữ cái) và WERE (You, We, They, số nhiều - 4 chữ cái).",
        theTrap: "Dùng nhầm 'They was' do ảnh hưởng của khẩu ngữ tiếng Anh bồi.",
        memoryHack: "💡 Đếm chữ: Chủ ngữ số nhiều đông người ➔ Chọn chữ dài hơn: W-E-R-E (4 chữ cái)!",
        example: "They were proud of their achievements."
      }
    },
    {
      id: "g4_20",
      tenseId: "past_simple",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Quá Khứ Đơn Câu Nghi Vấn Với DID",
      storyTitle: "Kiểm Tra Khóa Cửa Cẩn Thận",
      contextSentence: "Did you (lock) ________ the front entrance door before leaving home this morning?",
      verbPrompt: "lock",
      targetWord: "LOCK",
      hintText: "Đã có trợ động từ DID ở đầu câu hỏi quá khứ",
      goldenTip: {
        rule: "Cấu trúc câu hỏi quá khứ: Did + S + V(nguyên thể)?",
        theTrap: "Thấy câu hỏi quá khứ nên vẫn thêm -ed 'Did you locked?' (sai nặng).",
        memoryHack: "💡 Cứ có bóng dáng DID xuất hiện thì động từ chính auto NGUYÊN THỂ!",
        example: "Did you lock the door? (Đúng) / Did you locked? (Sai)."
      }
    },
    {
      id: "g4_21",
      tenseId: "simple_future",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Tương Lai Đơn & Quyết Định Bộc Phát Với WILL",
      storyTitle: "Trời Sắp Đổ Mưa",
      contextSentence: "Dark clouds are gathering quickly outside. I will (take) ________ an umbrella with me.",
      verbPrompt: "take",
      targetWord: "TAKE",
      hintText: "Sau WILL thì động từ ở dạng nào?",
      goldenTip: {
        rule: "Sau WILL, động từ luôn ở dạng nguyên thể không 'to' (Bare Infinitive). Dùng khi đưa ra quyết định ngay tại lúc nói.",
        theTrap: "Thêm -ing thành 'will taking' hoặc thêm 'to take'.",
        memoryHack: "💡 WILL + V nguyên thể: Quyết định tức thì không cần toan tính!",
        example: "I will take that jacket, please."
      }
    },
    {
      id: "g4_22",
      tenseId: "simple_future",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Tương Lai Đơn Phủ Định Với WON'T",
      storyTitle: "Lời Hứa Giữ Bí Mật",
      contextSentence: "Don't worry, I promise I won't (tell) ________ anyone about your surprise promotion.",
      verbPrompt: "tell",
      targetWord: "TELL",
      hintText: "WON'T = WILL NOT + Động từ dạng gì?",
      goldenTip: {
        rule: "WON'T là dạng viết tắt của WILL NOT. Theo sau WON'T luôn là động từ nguyên thể không to.",
        theTrap: "Nhầm lẫn dạng quá khứ 'told' hoặc thêm 'to tell'.",
        memoryHack: "💡 Lời hứa tương lai: WON'T + V nguyên thể (I won't tell)!",
        example: "I won't forget your kindness."
      }
    },
    {
      id: "g4_23",
      tenseId: "simple_future",
      band: "4.0 - 5.0",
      bandLabel: "🔰 CỨU MẤT GỐC & CĂN BẢN 6 THÌ",
      topic: "Tương Lai Đơn Đi Kèm Lời Chúc 'HOPE'",
      storyTitle: "Lời Động Viên Trước Kỳ Thi",
      contextSentence: "You studied very diligently this term, so I hope you will (pass) ________ with flying colors.",
      verbPrompt: "pass",
      targetWord: "PASS",
      hintText: "Cấu trúc hy vọng: I hope + S + will + V nguyên thể",
      goldenTip: {
        rule: "Các động từ chỉ suy nghĩ, niềm tin, hy vọng (think, hope, believe, suppose) đi với mệnh đề tương lai WILL + V-nguyên thể.",
        theTrap: "Chia 'passing' hoặc dùng thì hiện tại tiếp diễn sau will.",
        memoryHack: "💡 HOPE + WILL + V NGUYÊN THỂ: Gửi gắm niềm tin vào tương lai!",
        example: "I hope she will pass the exam."
      }
    }
  ],

  // ==========================================
  // CẤP ĐỘ 2: BAND 5.0 - 6.0 (22 THỬ THÁCH PHỐI HỢP THÌ THỰC CHIẾN)
  // ==========================================
  "band_5_6": [
    {
      id: "g5_01",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Với Mốc Thời Gian SINCE",
      storyTitle: "Quá Trình Làm Việc Của Kỹ Sư",
      contextSentence: "Alex is an experienced engineer who has (work) ________ here since 2021.",
      verbPrompt: "work",
      targetWord: "WORKED",
      hintText: "Dấu hiệu 'since 2021' đi kèm trợ động từ 'has'",
      goldenTip: {
        rule: "Thì Hiện tại hoàn thành: S + have/has + V3/ed. Dùng 'SINCE + mốc thời gian' để chỉ hành động bắt đầu từ quá khứ và vẫn đang tiếp diễn.",
        theTrap: "Điền 'working' (has working - SAI NGHIÊM TRỌNG) hoặc 'works' (quên mất vế trước có chữ has).",
        memoryHack: "💡 Công thức thần thánh: SINCE đi với MỐC (since 2020, since Monday). FOR đi với KHOẢNG (for 3 years, for 2 weeks).",
        example: "She has lived here since she was a child."
      }
    },
    {
      id: "g5_02",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Phối Hợp Thì: Hành Động Chen Ngang Quá Khứ",
      storyTitle: "Sự Cố Trên Cao Tốc",
      contextSentence: "While Alex was driving to the airport, his engine suddenly (break) ________ down.",
      verbPrompt: "break",
      targetWord: "BROKE",
      hintText: "Hành động ngắn bất ngờ xen vào hành động dài đang lái xe",
      goldenTip: {
        rule: "Phối hợp thì kinh điển: Hành động dài đang xảy ra chia Quá khứ tiếp diễn (was/were + V-ing). Hành động ngắn thình lình chen ngang chia Quá khứ đơn (V2/ed).",
        theTrap: "Điền 'broken' (cột 3 không có have/has) hoặc 'breaked' (chế từ bậy).",
        memoryHack: "💡 Mẹo 'Phim Điện Ảnh': Cảnh quay dài mượt mà (was driving) thì bùm một cái chiếc xe hỏng (broke down - dứt khoát quá khứ đơn)!",
        example: "While I was studying, the light went out."
      }
    },
    {
      id: "g5_03",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Trải Nghiệm Cuộc Đời: Cột 3 Sau Has Never",
      storyTitle: "Nỗi Sợ Máy Bay Của Bà",
      contextSentence: "My grandmother is 80 years old, but she has never (fly) ________ on a plane.",
      verbPrompt: "fly",
      targetWord: "FLOWN",
      hintText: "Cột 3 của động từ bất quy tắc FLY (fly ➔ flew ➔ flown)",
      goldenTip: {
        rule: "Khi kể về trải nghiệm cuộc đời với NEVER / EVER, cấu trúc bắt buộc là HAVE/HAS + V3 (Past Participle).",
        theTrap: "Rất nhiều bạn điền 'flew' vì chỉ nhớ quá khứ là flew, quên mất sau 'has' bắt buộc phải là phân từ cột 3!",
        memoryHack: "💡 Bảng 3 cột: Cột 1 (Fly - Bay thường ngày) ➔ Cột 2 (Flew - Đã bay hôm qua có mốc rõ ràng) ➔ Cột 3 (Flown - Đã từng / chưa bao giờ bay).",
        example: "Have you ever flown to Singapore? / Yes, I flew there last year."
      }
    },
    {
      id: "g5_04",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hai Hành Động Quá Khứ Cùng Dài Song Song",
      storyTitle: "Buổi Tối Ôn Luyện Cùng Nhau",
      contextSentence: "Last night, while my sister was watching TV, I was (study) ________ for my test.",
      verbPrompt: "study",
      targetWord: "STUDYING",
      hintText: "Hai hành động diễn ra song song suốt cả buổi tối",
      goldenTip: {
        rule: "Khi 2 hành động cùng diễn ra đồng thời suốt một khoảng thời gian trong quá khứ mà KHÔNG AI CẮT NGANG AI, CẢ HAI đều chia Quá khứ tiếp diễn (was/were + V-ing).",
        theTrap: "Điền 'studied' vì nghĩ trong câu ghép một vế tiếp diễn thì vế kia phải là quá khứ đơn.",
        memoryHack: "💡 Mẹo 'Ai lo việc nấy': Chị xem TV (was watching), tôi ngồi học (was studying), 2 việc song song ➔ Cả 2 cùng tiếp diễn!",
        example: "While mom was cooking, dad was reading newspapers."
      }
    },
    {
      id: "g5_05",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Dấu Hiệu 'Yet' Trong Câu Phủ Định & Nghi Vấn",
      storyTitle: "Bài Luận Vẫn Chưa Nộp",
      contextSentence: "The deadline is approaching, but the student hasn't (write) ________ the conclusion.",
      verbPrompt: "write",
      targetWord: "WRITTEN",
      hintText: "Cột 3 của WRITE sau trợ động từ 'hasn't'",
      goldenTip: {
        rule: "Động từ sau hasn't / haven't phải ở dạng phân từ 2 (V3). Dạng 3 cột của write là: write ➔ wrote ➔ written.",
        theTrap: "Điền 'wrote' vì quen tay chỉ nhớ cột 2 hoặc viết thiếu 1 chữ 't' (writen).",
        memoryHack: "💡 Mẹo chính tả: WRITTEN có 2 chữ T (/ˈrɪtn/). Nghe nhịp gõ 2 chữ T để không quên!",
        example: "I haven't written the email yet."
      }
    },
    {
      id: "g5_06",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Với 'FOR + Khoảng Thời Gian'",
      storyTitle: "Thâm Niên Của Giáo Sư",
      contextSentence: "Professor Evans has (teach) ________ artificial intelligence at this college for a decade.",
      verbPrompt: "teach",
      targetWord: "TAUGHT",
      hintText: "Dấu hiệu 'for a decade' + Trợ động từ 'has' + Cột 3 của TEACH",
      goldenTip: {
        rule: "TEACH ➔ TAUGHT ➔ TAUGHT. Đi kèm với FOR + khoảng thời gian chỉ sự việc kéo dài tới hiện tại.",
        theTrap: "Chế từ bậy 'teached' hoặc nhầm sang dạng V-ing 'has teaching'.",
        memoryHack: "💡 Gia đình vần AUGHT: CATCH ➔ CAUGHT, TEACH ➔ TAUGHT!",
        example: "She has taught English for twelve years."
      }
    },
    {
      id: "g5_07",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Với Dấu Hiệu 'JUST' (Vừa Mới)",
      storyTitle: "Cẩn Thận Sơn Ướt",
      contextSentence: "Do not lean on that wooden bench! The painter has just (paint) ________ it.",
      verbPrompt: "paint",
      targetWord: "PAINTED",
      hintText: "Dấu hiệu 'has just' + Động từ có quy tắc thêm -ed",
      goldenTip: {
        rule: "'JUST' đứng giữa have/has và V3/ed, diễn tả hành động vừa mới xảy ra tức thì.",
        theTrap: "Dùng thì quá khứ đơn 'just painted' không có has trong ngữ cảnh này.",
        memoryHack: "💡 HAVE/HAS + JUST + V3: Vừa mới hoàn tất xong nóng hổi!",
        example: "I have just finished my dinner."
      }
    },
    {
      id: "g5_08",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Với Dấu Hiệu 'ALREADY'",
      storyTitle: "Vé Xem Phim Đã Được Đặt Trước",
      contextSentence: "You don't need to bring cash because Daniel has already (pay) ________ for our tickets.",
      verbPrompt: "pay",
      targetWord: "PAID",
      hintText: "Cột 3 của PAY sau 'has already'",
      goldenTip: {
        rule: "PAY ➔ PAID ➔ PAID (đổi y thành i rồi thêm d).",
        theTrap: "Viết sai chính tả thành 'payed' (sai quy tắc tiếng Anh chuẩn).",
        memoryHack: "💡 SAY ➔ SAID, PAY ➔ PAID: Đuôi -AID ngắn gọn!",
        example: "He has already paid the electricity bill."
      }
    },
    {
      id: "g5_09",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Nghi Vấn Với 'EVER' (Trải Nghiệm)",
      storyTitle: "Khảo Sát Ẩm Thực Ý",
      contextSentence: "Have you ever (eat) ________ authentic Neapolitan pizza in Naples?",
      verbPrompt: "eat",
      targetWord: "EATEN",
      hintText: "Have you ever + Cột 3 của EAT (eat ➔ ate ➔ eaten)",
      goldenTip: {
        rule: "Hỏi trải nghiệm cuộc đời: Have you ever + V3/ed? Động từ eat có 3 cột: eat ➔ ate ➔ eaten.",
        theTrap: "Điền cột 2 'ate' (Have you ever ate - SAI ngữ pháp).",
        memoryHack: "💡 Cứ thấy Have/Has là tìm CỘT 3 có đuôi -EN: EATEN!",
        example: "Have you ever eaten sushi?"
      }
    },
    {
      id: "g5_10",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Diễn Tả Kết Quả Ở Hiện Tại",
      storyTitle: "Không Vào Được Căn Hộ",
      contextSentence: "David cannot open the front door because he has (lose) ________ his magnetic keycard.",
      verbPrompt: "lose",
      targetWord: "LOST",
      hintText: "Hành động mất chìa khóa trong quá khứ nhưng kết quả hiện tại không vào được nhà",
      goldenTip: {
        rule: "LOSE ➔ LOST ➔ LOST. Hiện tại hoàn thành dùng khi một hành động quá khứ để lại kết quả trực tiếp ở hiện tại.",
        theTrap: "Dùng quá khứ đơn 'he lost' khi câu đang nhấn mạnh hậu quả hiện tại 'cannot open'.",
        memoryHack: "💡 Đánh mất (LOSE) ➔ Kết quả hiện tại là bị LOST!",
        example: "I have lost my passport, so I can't board the flight."
      }
    },
    {
      id: "g5_11",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Cột 3 Bất Quy Tắc: CHOOSE ➔ CHOSEN",
      storyTitle: "Bầu Chọn Trưởng Nhóm Kỹ Thuật",
      contextSentence: "After extensive interviews, the tech board has finally (choose) ________ their lead architect.",
      verbPrompt: "choose",
      targetWord: "CHOSEN",
      hintText: "Cột 3 của CHOOSE sau 'has finally'",
      goldenTip: {
        rule: "CHOOSE (V1) ➔ CHOSE (V2 - 1 chữ O) ➔ CHOSEN (V3 - 1 chữ O + đuôi EN).",
        theTrap: "Gõ nhầm 2 chữ O thành 'choosen' hoặc điền cột 2 'chose'.",
        memoryHack: "💡 Cột 3 CHOSEN chỉ có DUY NHẤT 1 chữ O: C-H-O-S-E-N!",
        example: "They have chosen the most qualified candidate."
      }
    },
    {
      id: "g5_12",
      tenseId: "present_perfect",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Hoàn Thành Với 'RECENTLY' (Gần Đây)",
      storyTitle: "Nâng Cấp Hạ Tầng Đám Mây",
      contextSentence: "Our software engineering department has recently (build) ________ a microservice architecture.",
      verbPrompt: "build",
      targetWord: "BUILT",
      hintText: "Dấu hiệu 'has recently' + Cột 3 của BUILD (đổi D thành T)",
      goldenTip: {
        rule: "BUILD ➔ BUILT ➔ BUILT. Đi kèm dấu hiệu RECENTLY / LATELY chia Hiện tại hoàn thành.",
        theTrap: "Thêm -ed thành 'builded' hoặc giữ nguyên 'build'.",
        memoryHack: "💡 Xây dựng xong xuôi thì D biến thành T: BUILT!",
        example: "They have built a modern laboratory recently."
      }
    },
    {
      id: "g5_13",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Tiếp Diễn Tại Mốc Thời Gian Cụ Thể Trong Quá Khứ",
      storyTitle: "Thời Điểm 8 Giờ Tối Qua",
      contextSentence: "At exactly 8:30 PM yesterday, Linda was (watch) ________ the world football finals.",
      verbPrompt: "watch",
      targetWord: "WATCHING",
      hintText: "Có mốc giờ cụ thể 'At 8:30 PM yesterday' + Đã có trợ động từ 'was'",
      goldenTip: {
        rule: "Khi có mốc thời gian chính xác trong quá khứ (At 8 PM yesterday, At this time last week), hành động đang diễn ra ➔ Quá khứ tiếp diễn (was/were + V-ing).",
        theTrap: "Thấy 'yesterday' vội vàng chia quá khứ đơn 'watched'.",
        memoryHack: "💡 Có GIỜ CỤ THỂ trong quá khứ ➔ Chụp ngay bức ảnh đang diễn ra: WAS/WERE + V-ING!",
        example: "At 7 AM this morning, I was driving to the train station."
      }
    },
    {
      id: "g5_14",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Tiếp Diễn Với Mệnh Đề 'WHILE' (Hành Động Dài)",
      storyTitle: "Chuông Báo Cháy Bất Ngờ",
      contextSentence: "While the executives were (discuss) ________ the annual budget, the fire siren shrieked.",
      verbPrompt: "discuss",
      targetWord: "DISCUSSING",
      hintText: "Hành động dài đang thảo luận thì chuông báo cháy cắt ngang",
      goldenTip: {
        rule: "Sau liên từ 'WHILE' thường là hành động dài đang diễn ra trong quá khứ ➔ Was/Were + V-ing.",
        theTrap: "Chia quá khứ đơn 'discussed' sau chữ 'were'.",
        memoryHack: "💡 WHILE = TRONG KHI: Đang diễn ra liên tục ➔ Bắt buộc V-ING!",
        example: "While they were discussing the issue, a breakthrough occurred."
      }
    },
    {
      id: "g5_15",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Đơn Chen Ngang Vào Quá Khứ Tiếp Diễn Với 'WHEN'",
      storyTitle: "Đánh Rơi Ví Trên Cầu",
      contextSentence: "He was cycling leisurely across the bridge when he suddenly (drop) ________ his leather wallet.",
      verbPrompt: "drop",
      targetWord: "DROPPED",
      hintText: "Hành động thình lình chen ngang (Gấp đôi phụ âm P trước khi thêm -ed)",
      goldenTip: {
        rule: "Hành động ngắn cắt ngang hành động đang diễn ra chia Quá khứ đơn. Từ 'drop' kết thúc bằng 1 nguyên âm + 1 phụ âm ➔ Gấp đôi 'p' thành DROPPED.",
        theTrap: "Viết thiếu 1 chữ P thành 'droped' hoặc chia tiếp diễn 'was dropping'.",
        memoryHack: "💡 Đánh rơi cái 'bộp' một phát dứt khoát: Quá khứ đơn có 2 chữ P (DROPPED)!",
        example: "I was cooking when the telephone rang."
      }
    },
    {
      id: "g5_16",
      tenseId: "past_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Tiếp Diễn: Hai Hành Động Song Song Bỏ E Thêm -ING",
      storyTitle: "Gian Bếp Nhà Hàng Nhộn Nhịp",
      contextSentence: "While the head chef was baking bread, his assistant was (slice) ________ fresh vegetables.",
      verbPrompt: "slice",
      targetWord: "SLICING",
      hintText: "Bỏ 'e' câm ở cuối từ 'slice' trước khi thêm -ing",
      goldenTip: {
        rule: "Động từ slice kết thúc bằng 'e': Bỏ 'e' rồi thêm -ING thành SLICING. Hai hành động diễn ra song song cùng chia tiếp diễn.",
        theTrap: "Gõ thừa chữ e thành 'sliceing' hoặc chia quá khứ đơn 'sliced'.",
        memoryHack: "💡 Cắt lát (SLICE) ➔ SLICING bỏ E!",
        example: "While she was singing, he was playing the guitar."
      }
    },
    {
      id: "g5_17",
      tenseId: "present_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Tiếp Diễn Chỉ Kế Hoạch Đã Chốt Trong Tương Lai Gần",
      storyTitle: "Lịch Trình Đi Công Tác Tokyo",
      contextSentence: "Our managing director is (fly) ________ to Tokyo tomorrow morning for the bilateral summit.",
      verbPrompt: "fly",
      targetWord: "FLYING",
      hintText: "Kế hoạch chắc chắn đã mua vé máy bay ngày mai + Đã có trợ từ 'is'",
      goldenTip: {
        rule: "Thì Hiện tại tiếp diễn (am/is/are + V-ing) dùng để diễn tả kế hoạch/lịch trình chắc chắn trong tương lai gần (đã đặt vé, hẹn giờ).",
        theTrap: "Thấy 'tomorrow' vội chọn 'will fly' mà quên mất đã có 'is' và kế hoạch đã ấn định.",
        memoryHack: "💡 Vé máy bay cầm trên tay: Kế hoạch đã chốt ➔ Chia IS/ARE + V-ING!",
        example: "We are getting married next month."
      }
    },
    {
      id: "g5_18",
      tenseId: "present_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Tiếp Diễn Diễn Tả Tình Huống Tạm Thời (Temporary)",
      storyTitle: "Phương Tiện Tạm Thời Tuần Này",
      contextSentence: "Usually I take the subway, but this week I am (ride) ________ an electric bicycle.",
      verbPrompt: "ride",
      targetWord: "RIDING",
      hintText: "Tình huống tạm thời 'this week' đối lập với thói quen 'Usually'",
      goldenTip: {
        rule: "Tình huống tạm thời khác với thói quen hàng ngày (thường đi với 'this week, these days, currently') chia Hiện tại tiếp diễn: am/is/are + V-ing. Ride bỏ 'e' thành RIDING.",
        theTrap: "Chia 'ride' vì nhầm với thói quen thường nhật.",
        memoryHack: "💡 Thói quen thường nhật = Hiện tại đơn. Sự việc tạm thời khác lạ tuần này = Tiếp diễn RIDING!",
        example: "He is living with his uncle this month until he finds a flat."
      }
    },
    {
      id: "g5_19",
      tenseId: "present_continuous",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Hiện Tại Tiếp Diễn Diễn Tả Xu Hướng Đang Biến Đổi",
      storyTitle: "Nhiệt Độ Trái Đất Đang Tăng",
      contextSentence: "Due to global warming, average sea surface temperatures are (rise) ________ steadily.",
      verbPrompt: "rise",
      targetWord: "RISING",
      hintText: "Xu hướng biến đổi dần dần + Động từ rise bỏ 'e' thêm -ing",
      goldenTip: {
        rule: "Hiện tại tiếp diễn dùng với các động từ chỉ sự thay đổi, phát triển: get, become, change, rise, increase, grow.",
        theTrap: "Chia hiện tại đơn 'rises' hoặc viết nhầm 'riseing'.",
        memoryHack: "💡 Đang tăng dần theo xu hướng: ARE RISING!",
        example: "The climate is getting warmer every decade."
      }
    },
    {
      id: "g5_20",
      tenseId: "past_simple",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Đơn Bất Quy Tắc Cột 2: CATCH ➔ CAUGHT",
      storyTitle: "Pha Cứu Thua Xuất Sắc",
      contextSentence: "The agile goalkeeper leaped backward and (catch) ________ the football in midair yesterday.",
      verbPrompt: "catch",
      targetWord: "CAUGHT",
      hintText: "Dấu hiệu 'yesterday' + Cột 2 của CATCH (gia đình vần -AUGHT)",
      goldenTip: {
        rule: "CATCH ➔ CAUGHT ➔ CAUGHT (phát âm /kɔːt/). Thuộc nhóm vần AUGHT (chữ A đứng trước).",
        theTrap: "Viết nhầm chữ A thành chữ O 'cought' hoặc chế từ 'catched'.",
        memoryHack: "💡 CATCH có chữ A ➔ Quá khứ CAUGHT cũng giữ chữ A (C-A-U-G-H-T)!",
        example: "He caught the early morning train yesterday."
      }
    },
    {
      id: "g5_21",
      tenseId: "past_simple",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Quá Khứ Đơn Bất Quy Tắc Cột 2: WEAR ➔ WORE",
      storyTitle: "Trang Phục Dạ Hội Tối Qua",
      contextSentence: "At last night's annual charity gala, every guest (wear) ________ elegant formal attire.",
      verbPrompt: "wear",
      targetWord: "WORE",
      hintText: "Dấu hiệu 'last night' + Cột 2 của WEAR",
      goldenTip: {
        rule: "WEAR ➔ WORE ➔ WORN. Quá khứ đơn là WORE.",
        theTrap: "Thêm -ed thành 'weared' hoặc nhầm sang cột 3 'worn'.",
        memoryHack: "💡 Quần áo đã mặc hôm qua: WEAR biến thành WORE!",
        example: "She wore a stunning emerald dress yesterday."
      }
    },
    {
      id: "g5_22",
      tenseId: "simple_future",
      band: "5.0 - 6.0",
      bandLabel: "🚀 VƯỢT BẪY & PHỐI HỢP THÌ THỰC CHIẾN",
      topic: "Tương Lai Đơn Trong Mệnh Đề Chính Câu Điều Kiện Loại 1",
      storyTitle: "Bí Quyết Chinh Phục Điểm Cao",
      contextSentence: "If you practice typing consistently every morning, you will (achieve) ________ Band 7.0.",
      verbPrompt: "achieve",
      targetWord: "ACHIEVE",
      hintText: "Mệnh đề chính câu điều kiện loại 1: S + will + V nguyên thể",
      goldenTip: {
        rule: "Câu điều kiện loại 1: If + S + V(hiện tại đơn), S + WILL + V(nguyên thể). Sau WILL động từ luôn ở dạng nguyên thể.",
        theTrap: "Thêm đuôi -ed 'will achieved' hoặc chia 'will achieving'.",
        memoryHack: "💡 Sau WILL là V-bare thảnh thơi không biến hình: WILL ACHIEVE!",
        example: "If it rains tomorrow, we will stay indoors."
      }
    }
  ],

  // ==========================================
  // CẤP ĐỘ 3: BAND 6.0 - 7.0+ (22 BẪY HỌC THUẬT & MASTER KINH ĐIỂN)
  // ==========================================
  "band_6_7": [
    {
      id: "g6_01",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Mệnh Đề Thời Gian: CẤM Dùng WILL",
      storyTitle: "Bẫy Đề Thi IELTS & THPTQG Điển Hình",
      contextSentence: "I will call you as soon as I (arrive) ________ at the conference hall tomorrow.",
      verbPrompt: "arrive",
      targetWord: "ARRIVE",
      hintText: "Mệnh đề trạng ngữ bắt đầu bằng 'AS SOON AS'",
      goldenTip: {
        rule: "Quy tắc vàng bất di bất dịch: Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng AS SOON AS, WHEN, BEFORE, AFTER, UNTIL, IF... TUYỆT ĐỐI CẤM DÙNG WILL. Phải dùng thì HIỆN TẠI ĐƠN để diễn tả tương lai!",
        theTrap: "95% thí sinh thấy chữ 'tomorrow' liền vội vàng chọn 'will arrive'. Đây là cạm bẫy câu điểm 8-9 trong các đề thi quốc gia!",
        memoryHack: "💡 Thần chú 'Vùng Cấm Bay': AS SOON AS / WHEN / UNTIL là vùng cấm bay đối với phi cơ WILL. Cứ bước vào sau các từ này là WILL bị bắn hạ, chỉ còn lại Hiện Tại Đơn!",
        example: "We will leave as soon as the rain STOPS (không dùng will stop)."
      }
    },
    {
      id: "g6_02",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Động Từ Chỉ Trạng Thái (Stative Verbs)",
      storyTitle: "Bữa Tối Thịnh Soạn",
      contextSentence: "Take a spoon and try it! This French mushroom soup (taste) ________ incredible!",
      verbPrompt: "taste",
      targetWord: "TASTES",
      hintText: "Động từ vị giác miêu tả tính chất món ăn",
      goldenTip: {
        rule: "Các động từ chỉ giác quan/trạng thái (taste - có vị, smell - có mùi, belong, know, believe...) KHÔNG BAO GIỜ chia ở thì tiếp diễn (-ing) khi miêu tả đặc điểm tính chất.",
        theTrap: "Người học nghĩ 'bây giờ súp đang ngon' nên dịch word-by-word thành 'is tasting'. Sai hoàn toàn!",
        memoryHack: "💡 Phân biệt đắt giá: Khi miêu tả TÍNH CHẤT ➔ Chia Hiện tại đơn (The soup tastes good). Chỉ chia -ing khi là HÀNH ĐỘNG nếm chủ động (The chef is tasting the soup - Đầu bếp đang múc thìa nếm thử).",
        example: "She seems tired (không nói She is seeming tired)."
      }
    },
    {
      id: "g6_03",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Đại Từ Bất Định (Indefinite Pronouns)",
      storyTitle: "Không Gian Làm Việc Ngày Thứ Sáu",
      contextSentence: "Nobody in our software engineering department (like) ________ working on weekends.",
      verbPrompt: "like",
      targetWord: "LIKES",
      hintText: "Chủ ngữ là đại từ bất định 'Nobody'",
      goldenTip: {
        rule: "Tất cả các đại từ bất định: NOBODY, NO ONE, EVERYONE, EVERYBODY, SOMEONE, ANYONE luôn luôn được xem là NGÔI THỨ 3 SỐ ÍT. Động từ ở hiện tại đơn bắt buộc PHẢI CÓ 'S/ES'.",
        theTrap: "Thí sinh thấy cụm 'in our engineering department' đông người hoặc dịch 'Everyone' là 'mọi người' nên chia động từ số nhiều 'like' không có s.",
        memoryHack: "💡 Mẹo 'Cụm Giới Từ Gây Rối': Hãy gạch bỏ cụm giới từ phụ 'in our department'. Chủ ngữ thật chỉ là NOBODY ➔ Số ít ➔ LIKES!",
        example: "Everyone HAS their own dream (không dùng Have)."
      }
    },
    {
      id: "g6_04",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy 'The Number Of' vs 'A Number Of'",
      storyTitle: "Báo Cáo Thống Kê Giao Thông",
      contextSentence: "The number of electric vehicles on our streets (have) ________ increased rapidly.",
      verbPrompt: "have",
      targetWord: "HAS",
      hintText: "Chủ ngữ bắt đầu bằng cụm 'THE NUMBER OF'",
      goldenTip: {
        rule: "'THE NUMBER OF + N(nhiều) + ĐỘNG TỪ SỐ ÍT' (vì nói về 1 con số cụ thể). Trái lại, 'A NUMBER OF + N(nhiều) + ĐỘNG TỪ SỐ NHIỀU' (mang nghĩa là nhiều người/vật).",
        theTrap: "Thấy chữ 'vehicles' (xe cộ số nhiều) đứng sát động từ nên vội vàng chia 'have'.",
        memoryHack: "💡 Mẹo 'THE là DUY NHẤT': THE number là 1 con số duy nhất ➔ Động từ chia SỐ ÍT (HAS). A number = Nhiều ➔ Động từ chia SỐ NHIỀU (HAVE).",
        example: "The number of students IS small. vs A number of students ARE waiting."
      }
    },
    {
      id: "g6_05",
      tenseId: "past_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Quá Khứ Hoàn Thành Trước Một Mốc Quá Khứ",
      storyTitle: "Lỡ Chuyến Tàu Tốc Hành",
      contextSentence: "By the time we arrived at the station, the express train had already (leave) ________.",
      verbPrompt: "leave",
      targetWord: "LEFT",
      hintText: "Dấu hiệu 'had already' + Cột 3 của LEAVE",
      goldenTip: {
        rule: "Thì Quá khứ hoàn thành (had + V3): Diễn tả hành động xảy ra và kết thúc TRƯỚC một hành động khác trong quá khứ. Dấu hiệu kinh điển: BY THE TIME + S + V2/ed, S + HAD + V3.",
        theTrap: "Dùng quá khứ đơn 'left' hoặc nhầm sang thì hiện tại hoàn thành 'has left'.",
        memoryHack: "💡 Mẹo 'Ai đến trước': Tàu chạy trước (had left), chúng tôi đến sau (arrived). Cái gì xảy ra trước trong quá khứ thì phải 'lùi thì sâu hơn' (had + V3)!",
        example: "By the time he was 25, he had written three novels."
      }
    },
    {
      id: "g6_06",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Mệnh Đề Thời Gian Với 'UNTIL' (CẤM Dùng Will)",
      storyTitle: "Quy Trình Triển Khai Phần Mềm",
      contextSentence: "We cannot deploy the release until the QA lead (approve) ________ the security audit.",
      verbPrompt: "approve",
      targetWord: "APPROVES",
      hintText: "Mệnh đề sau liên từ chỉ thời gian 'UNTIL' + Chủ ngữ ngôi 3 số ít 'the QA lead'",
      goldenTip: {
        rule: "Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng UNTIL / TILL, TUYỆT ĐỐI KHÔNG DÙNG WILL. Bắt buộc dùng Hiện Tại Đơn với chủ ngữ số ít (thêm S/ES).",
        theTrap: "Thí sinh thấy nghĩa tương lai nên viết 'until the QA lead will approve'. Sai hoàn toàn!",
        memoryHack: "💡 UNTIL là vùng cấm bay của WILL: Chủ ngữ số ít ➔ Chia APPROVES!",
        example: "Wait here until I return."
      }
    },
    {
      id: "g6_07",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Mệnh Đề Thời Gian Với 'WHEN' Đi Với Ngôi Thứ 3 Số Ít",
      storyTitle: "Đón Tiếp Đoàn Chuyên Gia",
      contextSentence: "When our principal guest (arrive) ________ next Tuesday, the welcoming ceremony will commence.",
      verbPrompt: "arrive",
      targetWord: "ARRIVES",
      hintText: "Sau 'When' + Chủ ngữ số ít 'our principal guest' (Dù có chữ 'next Tuesday')",
      goldenTip: {
        rule: "Mệnh đề thời gian bắt đầu bằng WHEN diễn tả sự việc tương lai PHẢI dùng thì Hiện tại đơn: When + S + V(s/es).",
        theTrap: "Nhìn thấy 'next Tuesday' bị lóa mắt vội điền 'will arrive'.",
        memoryHack: "💡 Mẹo 'Cắt Đuôi Phi Cơ': Chữ WHEN đứng chặn cửa, phi cơ WILL rơi rụng, chỉ còn ARRIVES!",
        example: "When he comes tomorrow, tell him to wait."
      }
    },
    {
      id: "g6_08",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Mệnh Đề Thời Gian Với 'BEFORE'",
      storyTitle: "Sao Lưu Dữ Liệu Quan Trọng",
      contextSentence: "Please back up all critical database tables before the automated migration (take) ________ place tonight.",
      verbPrompt: "take",
      targetWord: "TAKES",
      hintText: "Mệnh đề sau 'before' + Chủ ngữ số ít 'the automated migration'",
      goldenTip: {
        rule: "Sau BEFORE / AFTER trong ngữ cảnh tương lai, động từ chia Hiện tại đơn: take ➔ takes.",
        theTrap: "Dùng 'will take' hoặc quên thêm đuôi 's' cho chủ ngữ số ít.",
        memoryHack: "💡 Sau BEFORE cấm WILL: Migration là số ít ➔ TAKES place!",
        example: "Lock the door before you leave."
      }
    },
    {
      id: "g6_09",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy 'BY THE TIME' Ở Hiện Tại Đơn Để Chỉ Tương Lai",
      storyTitle: "Hoàn Thành Luận Văn Thạc Sĩ",
      contextSentence: "By the time Sarah (finish) ________ her master dissertation next month, she will have written 200 pages.",
      verbPrompt: "finish",
      targetWord: "FINISHES",
      hintText: "Cấu trúc: By the time + S + V(hiện tại đơn - đuôi es), S + will have V3",
      goldenTip: {
        rule: "Cặp thì chuẩn học thuật: BY THE TIME + S + V(hiện tại đơn), S + will have + V3 (Tương lai hoàn thành). Finish tận cùng là -sh ➔ thêm -es.",
        theTrap: "Điền 'will finish' hoặc chia quá khứ 'finished' vì không để ý vế sau là 'will have written'.",
        memoryHack: "💡 By the time + Hiện tại đơn FINISHES ➔ Vế kia là Tương lai hoàn thành!",
        example: "By the time you arrive, we will have prepared everything."
      }
    },
    {
      id: "g6_10",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Động Từ Trạng Thái Sở Hữu: BELONG (CẤM Chia -ING)",
      storyTitle: "Cây Đàn Cổ Quý Giá",
      contextSentence: "This handcrafted acoustic cello is priceless, and it (belong) ________ to a prestigious museum.",
      verbPrompt: "belong",
      targetWord: "BELONGS",
      hintText: "Chủ ngữ số ít 'it' + Động từ chỉ quyền sở hữu 'belong'",
      goldenTip: {
        rule: "BELONG TO (thuộc về) là Stative Verb chỉ sự sở hữu. Tuyệt đối KHÔNG BAO GIỜ dùng thì tiếp diễn (không có 'is belonging').",
        theTrap: "Dịch từ tiếng Việt 'đang thuộc về' rồi chia 'is belonging'. Sai nghiêm trọng trong IELTS!",
        memoryHack: "💡 Quyền sở hữu vĩnh viễn: BELONGS TO, cấm chia tiếp diễn!",
        example: "This laptop belongs to Alex."
      }
    },
    {
      id: "g6_11",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Động Từ Trí Tuệ / Nhận Thức: UNDERSTAND",
      storyTitle: "Bài Giảng Thuật Toán Cốt Lõi",
      contextSentence: "Although the algorithm is intricate, every junior engineer (understand) ________ its logic.",
      verbPrompt: "understand",
      targetWord: "UNDERSTANDS",
      hintText: "Chủ ngữ 'every junior engineer' (số ít) + Động từ nhận thức không chia -ing",
      goldenTip: {
        rule: "UNDERSTAND là Stative Verb chỉ sự hiểu biết nhận thức (không dùng is understanding). Đồng thời 'EVERY + N(số ít)' luôn đi với động từ số ít (thêm S).",
        theTrap: "Chia 'is understanding' hoặc chia số nhiều 'understand' không có s.",
        memoryHack: "💡 EVERY là mỗi một cá nhân đơn lẻ ➔ Động từ số ít UNDERSTANDS!",
        example: "Everyone understands the importance of clean code."
      }
    },
    {
      id: "g6_12",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Động Từ Nhận Diện: RECOGNIZE",
      storyTitle: "Trí Nhớ Đáng Kinh Ngạc",
      contextSentence: "Even in total darkness, the sophisticated infrared sensor instantly (recognize) ________ authorized personnel.",
      verbPrompt: "recognize",
      targetWord: "RECOGNIZES",
      hintText: "Chủ ngữ 'the sensor' (số ít) + Động từ giác quan/nhận thức",
      goldenTip: {
        rule: "RECOGNIZE (nhận diện/nhận ra) miêu tả năng lực nhận thức trạng thái ➔ Chia Hiện Tại Đơn với chủ ngữ số ít: RECOGNIZES.",
        theTrap: "Chia 'is recognizing' do dịch theo lối mòn 'đang nhận diện'.",
        memoryHack: "💡 Động từ nhận diện nhận thức không chia tiếp diễn ➔ RECOGNIZES!",
        example: "The facial scanner recognizes faces in milliseconds."
      }
    },
    {
      id: "g6_13",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Chủ Ngữ: 'EACH OF + DANH TỪ SỐ NHIỀU' Đi Với Động Từ Số Ít",
      storyTitle: "Quy Định Nộp Hồ Sơ Ứng Tuyển",
      contextSentence: "Each of the shortlisted candidates (have) ________ to submit two letters of recommendation.",
      verbPrompt: "have",
      targetWord: "HAS",
      hintText: "Chủ ngữ bắt đầu bằng cụm 'Each of...' đi với động từ số ít hay số nhiều?",
      goldenTip: {
        rule: "'EACH OF / EVERY ONE OF + Danh từ số nhiều' luôn luôn đi với ĐỘNG TỪ SỐ ÍT (HAS / IS / V-s). Vì trọng tâm nhấn mạnh từng cá thể riêng biệt.",
        theTrap: "Nhìn thấy chữ 'candidates' có S đứng sát vách động từ nên vội vàng chia 'have'. Bẫy kinh điển!",
        memoryHack: "💡 Gạch bỏ cụm 'of the shortlisted candidates': Chủ ngữ lõi chỉ là EACH (mỗi một người) ➔ Bắt buộc dùng HAS!",
        example: "Each of the students has a laptop."
      }
    },
    {
      id: "g6_14",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Chủ Ngữ: 'NEITHER OF + DANH TỪ SỐ NHIỀU'",
      storyTitle: "Đánh Giá Phương Án Kỹ Thuật",
      contextSentence: "Neither of the proposed cloud providers (meet) ________ our stringent latency benchmarks.",
      verbPrompt: "meet",
      targetWord: "MEETS",
      hintText: "Cụm 'Neither of...' trong văn phong học thuật chuẩn mực",
      goldenTip: {
        rule: "Trong ngữ pháp học thuật chuẩn mực, 'NEITHER OF + N(số nhiều)' luôn đi với ĐỘNG TỪ SỐ ÍT (thêm S): MEETS. Mang nghĩa 'không phương án nào trong hai phương án'.",
        theTrap: "Thấy 'providers' số nhiều nên không chia S thành 'meet'.",
        memoryHack: "💡 NEITHER = Không cái nào trong hai ➔ Số ít ➔ MEETS!",
        example: "Neither of my parents speaks French."
      }
    },
    {
      id: "g6_15",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Hiện Tại Đơn Diễn Tả Lịch Trình Tàu Xe Cố Định (Timetable)",
      storyTitle: "Lịch Trình Tàu Cao Tốc",
      contextSentence: "According to the official timetable, the bullet train to Kyoto (depart) ________ at 06:45 tomorrow.",
      verbPrompt: "depart",
      targetWord: "DEPARTS",
      hintText: "Lịch trình tàu xe công cộng đã ấn định trên thời khóa biểu",
      goldenTip: {
        rule: "Diễn tả lịch trình, thời khóa biểu của phương tiện giao thông, rạp phim, trường học... LUÔN DÙNG HIỆN TẠI ĐƠN dù sự việc xảy ra vào ngày mai.",
        theTrap: "Thấy 'tomorrow' vội chọn 'will depart'. Bẫy ngữ pháp band 6.5+!",
        memoryHack: "💡 Lịch trình in trên vé tàu (Timetable) ➔ Bất di bất dịch là HIỆN TẠI ĐƠN: DEPARTS!",
        example: "The plane takes off at 8 PM tonight."
      }
    },
    {
      id: "g6_16",
      tenseId: "past_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bất Quy Tắc Cột 3 Giữ Nguyên: PUT ➔ PUT ➔ PUT",
      storyTitle: "Dập Tắt Đám Cháy Kịp Thời",
      contextSentence: "By the time the fire engine arrived, brave neighbors had already (put) ________ out the fire.",
      verbPrompt: "put",
      targetWord: "PUT",
      hintText: "Sau 'had already' + Cột 3 của động từ bất quy tắc PUT",
      goldenTip: {
        rule: "Động từ PUT là bất biến qua cả 3 cột: PUT ➔ PUT ➔ PUT. Dù ở quá khứ hoàn thành sau 'had' thì vẫn giữ nguyên là PUT.",
        theTrap: "Chế từ sai 'putted' hoặc thêm s 'puts'.",
        memoryHack: "💡 Gia đình bất biến: PUT, CUT, HIT, SET, HURT, COST ➔ Cả 3 cột đều giống nhau!",
        example: "She had put the keys on the table before she left."
      }
    },
    {
      id: "g6_17",
      tenseId: "past_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Cấu Trúc Đảo Ngữ 'HARDLY HAD S + V3 WHEN S + V2'",
      storyTitle: "Sự Cố Lúc Vừa Bắt Đầu Thuyết Trình",
      contextSentence: "Hardly had the keynote speaker started her presentation when a projector malfunction (occur) ________.",
      verbPrompt: "occur",
      targetWord: "OCCURRED",
      hintText: "Cấu trúc đảo ngữ: Hardly had + S + V3 WHEN S + V2 (Gấp đôi R trước -ed)",
      goldenTip: {
        rule: "Cấu trúc đảo ngữ C1: HARDLY HAD + S + V3 + WHEN + S + V2/ed. Từ 'occur' có trọng âm rơi vào âm tiết thứ 2 kết thúc bằng nguyên âm + phụ âm ➔ gấp đôi r: OCCURRED.",
        theTrap: "Viết 1 chữ R 'occured' hoặc chia nhầm thì tiếp diễn.",
        memoryHack: "💡 Vế sau WHEN chia Quá khứ đơn: OCCURRED có 2 chữ C và 2 chữ R!",
        example: "Hardly had I arrived when the phone rang."
      }
    },
    {
      id: "g6_18",
      tenseId: "present_perfect",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Cấu Trúc 'THIS IS THE FIRST TIME' + Hiện Tại Hoàn Thành",
      storyTitle: "Lần Đầu Tiên Thiết Kế Cơ Sở Dữ Liệu Vector",
      contextSentence: "This is the very first time our team has ever (build) ________ a scalable distributed vector database.",
      verbPrompt: "build",
      targetWord: "BUILT",
      hintText: "Sau 'This is the first time + S + have/has ever' + Cột 3 của BUILD",
      goldenTip: {
        rule: "Cấu trúc độc quyền: THIS IS THE FIRST / SECOND TIME + S + HAVE/HAS + V3/ed. Tuyệt đối không dùng thì hiện tại đơn hay quá khứ đơn.",
        theTrap: "Dùng thì hiện tại đơn 'builds' hoặc thì quá khứ đơn 'built' mà không nhận diện được trợ từ has.",
        memoryHack: "💡 Lần đầu tiên trong đời: Bắt buộc HAVE/HAS + V3 (BUILT)!",
        example: "This is the first time I have visited London."
      }
    },
    {
      id: "g6_19",
      tenseId: "past_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Cấu Trúc 'IT HAS BEEN... SINCE + S + V2/ED'",
      storyTitle: "Mốc Thời Gian Gia Nhập Công Ty",
      contextSentence: "It has been more than four years since our lead cybersecurity engineer (join) ________ the organization.",
      verbPrompt: "join",
      targetWord: "JOINED",
      hintText: "Mệnh đề sau liên từ SINCE chia thì gì khi vế trước là 'It has been + khoảng thời gian'?",
      goldenTip: {
        rule: "Cấu trúc kinh điển: IT HAS BEEN + Khoảng thời gian + SINCE + S + V2/ed (Quá khứ đơn). Mệnh đề sau SINCE đóng vai trò là mốc thời gian trong quá khứ.",
        theTrap: "Thí sinh thấy 'has been' ở trước nên vế sau cũng chia 'has joined'. Sai cấu trúc!",
        memoryHack: "💡 Sau SINCE là MỐC thời gian ➔ Bắt buộc Quá khứ đơn: JOINED!",
        example: "It has been five years since we graduated from college."
      }
    },
    {
      id: "g6_20",
      tenseId: "past_continuous",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Chủ Ngữ Đi Kèm 'ALONG WITH / AS WELL AS'",
      storyTitle: "Đoàn Đại Biểu Tham Dự Triển Lãm",
      contextSentence: "The chief scientist, along with her research assistants, was (attend) ________ the AI symposium yesterday.",
      verbPrompt: "attend",
      targetWord: "ATTENDING",
      hintText: "Chủ ngữ chính là 'The chief scientist' (số ít) ➔ Đi với trợ động từ 'was' + V-ing",
      goldenTip: {
        rule: "Khi chủ ngữ kết nối bằng 'ALONG WITH, AS WELL AS, TOGETHER WITH', động từ chia THEO CHỦ NGỮ ĐẦU TIÊN (The chief scientist ➔ WAS). Vì đã có WAS nên động từ thêm -ing: ATTENDING.",
        theTrap: "Thấy 'assistants' số nhiều nên tưởng trợ từ phải là were hoặc chia quá khứ đơn.",
        memoryHack: "💡 Bỏ qua phần kẹp giữa 2 dấu phẩy ', along with... ,': Chủ ngữ lõi là The scientist ➔ was ATTENDING!",
        example: "The teacher, along with his students, was playing chess."
      }
    },
    {
      id: "g6_21",
      tenseId: "present_simple",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Động Từ Đo Lường / Chi Phí: COST (CẤM Chia -ING)",
      storyTitle: "Gánh Nặng Hạ Tầng Cũ Kỹ",
      contextSentence: "Maintaining obsolete legacy on-premise servers (cost) ________ our enterprise a fortune every quarter.",
      verbPrompt: "cost",
      targetWord: "COSTS",
      hintText: "Chủ ngữ là danh động từ 'Maintaining...' (số ít) + Động từ chi phí COST không chia tiếp diễn",
      goldenTip: {
        rule: "Chủ ngữ bắt đầu bằng V-ing (Maintaining...) luôn là NGÔI THỨ 3 SỐ ÍT. Động từ COST miêu tả chi phí là Stative verb không chia -ing ➔ Thêm S: COSTS.",
        theTrap: "Thấy chữ 'servers' số nhiều đứng trước nên không thêm S, hoặc chia 'is costing'.",
        memoryHack: "💡 Chủ ngữ V-ing = Số ít (COSTS)! Động từ chỉ giá cả không chia tiếp diễn.",
        example: "Running a data center costs a great deal of money."
      }
    },
    {
      id: "g6_22",
      tenseId: "simple_future",
      band: "6.0 - 7.0+",
      bandLabel: "💎 BẪY HỌC THUẬT & BỨT PHÁ BAND CAO",
      topic: "Bẫy Liên Từ Điều Kiện 'AS LONG AS / PROVIDED THAT' (CẤM Will)",
      storyTitle: "Bí Kíp Thăng Tiến Ngành Lập Trình",
      contextSentence: "You will achieve rapid career advancement in tech as long as you (keep) ________ honing your skills.",
      verbPrompt: "keep",
      targetWord: "KEEP",
      hintText: "Mệnh đề sau liên từ điều kiện 'AS LONG AS' có dùng will không?",
      goldenTip: {
        rule: "Sau liên từ điều kiện: AS LONG AS, PROVIDED THAT, PROVIDING, IF, UNLESS... TUYỆT ĐỐI KHÔNG DÙNG WILL. Bắt buộc dùng Hiện Tại Đơn (You ➔ KEEP).",
        theTrap: "Nhiều bạn dịch 'miễn là bạn SẼ tiếp tục' nên điền 'will keep'. Đây là bẫy câu điều kiện nâng cao!",
        memoryHack: "💡 AS LONG AS = Vùng cấm bay của WILL. Sau 'you' chia nguyên thể KEEP!",
        example: "You can borrow my car as long as you drive carefully."
      }
    }
  ]
};
