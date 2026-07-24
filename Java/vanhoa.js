/* ==========================================================================
   JavaScript Dành Riêng Cho Trang Văn Hóa Thành Phố Hồ Chí Minh
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Nút cuộn lên đầu trang (Scroll Top Button)
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 2. Hộp thoại phóng to ảnh (Lightbox Gallery)
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightboxBtn = document.querySelector(".close-lightbox");

  // Gom nhóm tất cả ảnh có thể phóng to (cả trong các thẻ và trong phần Gallery)
  const zoomableImages = document.querySelectorAll(".gallery-trigger, .gallery-item img");

  zoomableImages.forEach(img => {
    img.addEventListener("click", () => {
      if (lightboxModal && lightboxImg) {
        lightboxModal.style.display = "block";
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          // Lấy thuộc tính alt làm chú thích ảnh
          lightboxCaption.innerText = img.alt || "Hình ảnh văn hóa Sài Gòn - TP HCM";
        }
      }
    });
  });

  // Đóng lightbox khi nhấp nút đóng
  if (closeLightboxBtn && lightboxModal) {
    closeLightboxBtn.addEventListener("click", () => {
      lightboxModal.style.display = "none";
    });
  }

  // Đóng lightbox khi nhấp ra ngoài ảnh (vùng đen)
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = "none";
      }
    });
  }

  // Đóng lightbox bằng phím ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.style.display === "block") {
      lightboxModal.style.display = "none";
    }
  });


  // 3. Logic trò chơi trắc nghiệm văn hóa (Culture Quiz)
  const quizQuestions = [
    {
      question: "Câu 1: Loại hình âm nhạc dân gian đặc trưng nào của Nam Bộ đã được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại?",
      options: [
        "Hát Xoan Phú Thọ",
        "Đờn ca tài tử Nam Bộ",
        "Ca trù Bắc Bộ",
        "Hát Quan họ Bắc Ninh"
      ],
      correct: 1,
      explain: "Đờn ca tài tử Nam Bộ được UNESCO vinh danh năm 2013, là dòng nhạc gắn liền với đời sống tâm hồn, tình cảm sông nước của người dân Nam Bộ."
    },
    {
      question: "Câu 2: Cách pha chế độc đáo tạo nên nét đặc trưng lâu đời của Cà phê Vợt Sài Gòn là gì?",
      options: [
        "Pha chế bằng phin nhôm truyền thống lớn",
        "Lọc qua túi vải dài trong các siêu đất nung luôn nóng",
        "Đun sôi bột cà phê trực tiếp trong ấm đồng",
        "Sử dụng máy nén hơi nước Espresso của Ý"
      ],
      correct: 1,
      explain: "Cà phê được lọc đi lọc lại qua chiếc vợt vải, giữ nhiệt trong siêu đất nung để có hương vị đậm đặc, mộc mạc và hoài cổ."
    },
    {
      question: "Câu 3: Tết Nguyên Tiêu là lễ hội truyền thống rực rỡ và nhộn nhịp nhất được tổ chức chủ yếu ở khu vực nào tại TP.HCM?",
      options: [
        "Trung tâm Quận 1 (Phố đi bộ Nguyễn Huệ)",
        "Khu vực Chợ Lớn Quận 5",
        "Bán đảo Thanh Đa Bình Thạnh",
        "Khu du lịch sinh thái Cần Giờ"
      ],
      correct: 1,
      explain: "Lễ hội Tết Nguyên Tiêu rằm tháng Giêng diễn ra nhộn nhịp nhất ở Quận 5 (Chợ Lớn) với diễu hành nghệ thuật đường phố, múa lân sư rồng và các nghi lễ tại Chùa Bà Thiên Hậu."
    },
    {
      question: "Câu 4: Nghệ thuật Hát Bội cổ truyền có đặc trưng độc đáo nào giúp khán giả nhận diện tính cách nhân vật ngay lập tức?",
      options: [
        "Nghệ thuật hóa trang vẽ mặt cầu kỳ theo tông màu quy ước",
        "Các diễn viên luôn đeo mặt nạ gỗ thô sơ",
        "Trang phục diễn xuất tối giản tông màu đen trắng",
        "Nghệ sĩ chỉ dùng khẩu hình mà không dùng giọng hát thật"
      ],
      correct: 0,
      explain: "Mỗi màu sắc, nét vẽ trên mặt nhân vật Hát Bội đều biểu thị tính cách: Mặt đỏ biểu thị lòng trung nghĩa, mặt trắng biểu thị kẻ gian nịnh, mặt đen biểu thị tính cương trực."
    },
    {
      question: "Câu 5: Đường hoa Nguyễn Huệ - nét đẹp văn hóa du xuân độc đáo của người dân thành phố được tổ chức định kỳ vào dịp nào?",
      options: [
        "Tết Dương Lịch",
        "Ngày Giải phóng miền Nam 30/4",
        "Tết Nguyên Đán truyền thống",
        "Lễ Quốc khánh 2/9"
      ],
      correct: 2,
      explain: "Được bắt đầu thực hiện từ năm 2004, Đường hoa Nguyễn Huệ là sự kiện văn hóa, mỹ thuật vô cùng đặc sắc thu hút hàng triệu người dân và du khách thưởng lãm mỗi dịp Tết Nguyên Đán."
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const progress = document.getElementById("progress");
  const quizFeedback = document.getElementById("quiz-feedback");
  const quizBody = document.getElementById("quiz-body");
  const quizResult = document.getElementById("quiz-result");
  const resultScore = document.getElementById("result-score");
  const resultRank = document.getElementById("result-rank");
  const resultComment = document.getElementById("result-comment");
  const restartBtn = document.getElementById("restart-btn");

  function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
      showResults();
      return;
    }

    // Reset feedback
    if (quizFeedback) {
      quizFeedback.classList.add("hidden");
      quizFeedback.className = "quiz-feedback hidden";
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (questionText) {
      questionText.innerText = currentQuestion.question;
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.addEventListener("click", () => selectOption(index, button));
        optionsContainer.appendChild(button);
      });
    }

    // Cập nhật tiến độ thanh Progress
    if (progress) {
      const percentage = (currentQuestionIndex / quizQuestions.length) * 100;
      progress.style.width = `${percentage}%`;
    }
  }

  function selectOption(selectedIndex, selectedButton) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll(".option-btn");

    // Khóa tất cả các nút
    optionButtons.forEach(btn => {
      btn.classList.add("disabled");
    });

    if (selectedIndex === currentQuestion.correct) {
      // Đúng
      score++;
      selectedButton.classList.add("correct");
      showFeedback(true, currentQuestion.explain);
    } else {
      // Sai
      selectedButton.classList.add("wrong");
      // Hiển thị màu xanh cho câu trả lời đúng
      optionButtons[currentQuestion.correct].classList.add("correct");
      showFeedback(false, currentQuestion.explain);
    }

    // Tự động chuyển câu sau 3.5 giây
    setTimeout(() => {
      currentQuestionIndex++;
      loadQuestion();
    }, 3500);
  }

  function showFeedback(isCorrect, explanationText) {
    if (!quizFeedback) return;
    quizFeedback.classList.remove("hidden");
    if (isCorrect) {
      quizFeedback.className = "quiz-feedback correct-feedback";
      quizFeedback.innerHTML = `<strong>Chính xác!</strong> ${explanationText}`;
    } else {
      quizFeedback.className = "quiz-feedback wrong-feedback";
      quizFeedback.innerHTML = `<strong>Chưa đúng rồi!</strong> ${explanationText}`;
    }
  }

  function showResults() {
    if (quizBody) quizBody.classList.add("hidden");
    if (quizResult) quizResult.classList.remove("hidden");

    if (resultScore) {
      resultScore.innerText = `Bạn đã trả lời đúng ${score}/${quizQuestions.length} câu hỏi.`;
    }

    let rank = "";
    let comment = "";

    if (score === 5) {
      rank = "Hạng: Nhà Văn Hóa Sài Gòn Uyên Bác!";
      comment = "Xuất sắc! Bạn có hiểu biết sâu sắc và tinh tường về lịch sử cũng như văn hóa của Thành phố mang tên Bác.";
    } else if (score >= 3) {
      rank = "Hạng: Người Sài Gòn Chính Hiệu";
      comment = "Rất tốt! Bạn hiểu khá rõ về lối sống, di sản và nhịp đập văn hóa đặc trưng của thành phố năng động này.";
    } else {
      rank = "Hạng: Người Mới Khám Phá";
      comment = "Chào mừng bạn đến với hành trình tìm hiểu văn hóa TP.HCM! Hãy đọc kỹ trang web hơn để tích lũy thêm nhiều câu chuyện thú vị nhé.";
    }

    if (resultRank) resultRank.innerText = rank;
    if (resultComment) resultComment.innerText = comment;
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if (quizResult) quizResult.classList.add("hidden");
    if (quizBody) quizBody.classList.remove("hidden");
    if (progress) progress.style.width = "0%";
    loadQuestion();
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", restartQuiz);
  }

  // Khởi chạy câu hỏi đầu tiên
  loadQuestion();
});
