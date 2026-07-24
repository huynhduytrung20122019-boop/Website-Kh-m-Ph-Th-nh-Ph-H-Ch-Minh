const scrollTopBtn = document.getElementById("scrollTopBtn");

// 1. Lắng nghe sự kiện lướt (scroll) của người dùng
window.onscroll = function () {
  // Nếu lướt xuống quá 200px thì hiện nút, ngược lại thì ẩn
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};

// 2. Bắt sự kiện click để cuộn mượt lên đầu trang
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tạo hiệu ứng cuộn mượt mà
  });
});
