const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 220) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const switchButtons = document.querySelectorAll(".switch-btn");
const previewTitle = document.getElementById("preview-title");
const previewDesc = document.getElementById("preview-desc");
const previewList = document.getElementById("preview-list");
const previewImage = document.getElementById("preview-image");

const travelModes = {
  history: {
    title: "Khám phá những di tích lâu đời và dấu ấn lịch sử",
    desc: "Bắt đầu hành trình bằng những điểm đến mang dấu ấn lịch sử sâu sắc của Sài Gòn, nơi mỗi công trình đều kể một câu chuyện riêng.",
    image: "image/Anh Du Lich/DinhDocLap.jfif",
    items: [
      "Tham quan những công trình nổi tiếng về lịch sử.",
      "Đắm mình trong không gian kiến trúc đặc trưng.",
      "Trải nghiệm những con đường có nhiều giá trị văn hóa.",
    ],
  },
  modern: {
    title: "Tận hưởng thành phố hiện đại với view đẹp và không gian thư giãn",
    desc: "Sài Gòn hiện đại mang đến những điểm ngắm nhìn đẹp, đặc biệt là các khu vực có tầm nhìn rộng và phong cách kiến trúc mới.",
    image: "image/Anh Du Lich/Landmark81.jfif",
    items: [
      "Đến với các điểm check-in view đẹp ở trung tâm.",
      "Thư giãn tại các khu vực cao tầng và cảnh quan mới.",
      "Trải nghiệm không gian hiện đại, sôi động và tinh tế.",
    ],
  },
  food: {
    title: "Đắm mình trong ẩm thực đường phố và phố đi bộ đầy màu sắc",
    desc: "Một hành trình Sài Gòn sẽ thiếu sót nếu không dành thời gian cho các món ăn đường phố và những con phố nhộn nhịp.",
    image: "image/Anh Du Lich/BenThanh.jpg",
    items: [
      "Thử những món ngon nổi tiếng của thành phố.",
      "Dạo quanh khu vực phố đi bộ để cảm nhận nhịp sống.",
      "Tận hưởng bầu không khí sôi động ban chiều và ban tối.",
    ],
  },
};

function updatePreview(mode) {
  if (!previewTitle || !previewDesc || !previewList || !previewImage) {
    return;
  }

  const data = travelModes[mode];
  if (!data) {
    return;
  }

  previewTitle.textContent = data.title;
  previewDesc.textContent = data.desc;
  previewImage.src = data.image;
  previewImage.alt = data.title;
  previewList.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
}

if (switchButtons.length) {
  switchButtons.forEach((button) => {
    button.addEventListener("click", function () {
      switchButtons.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      updatePreview(this.dataset.target);
    });
  });

  updatePreview("history");
}
