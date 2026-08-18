document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenuSidebar = document.getElementById("mobileMenuSidebar");
    const menuOverlay = document.getElementById("menuOverlay");

    if (!hamburgerBtn || !mobileMenuSidebar || !menuOverlay) return;

    // Hàm mở menu
    function openMenu() {
        mobileMenuSidebar.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Khóa cuộn trang (scroll) ở phía nền
    }

    // Hàm đóng menu
    function closeMenu() {
        mobileMenuSidebar.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Khôi phục cuộn trang
    }

    // Bắt sự kiện click vào nút 3 gạch
    hamburgerBtn.addEventListener("click", function() {
        if (mobileMenuSidebar.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Bắt sự kiện click vào phần ngoài (overlay) để đóng menu
    menuOverlay.addEventListener("click", function() {
        closeMenu();
    });
});
