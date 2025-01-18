function taoThiep(event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const nguoiNhan = document.getElementById('nguoiNhan').value;
    const loiChuc = document.getElementById('loiChuc').value;
    const nguoiGui = document.getElementById('nguoiGui').value;
    const mauThiep = document.getElementById('mauThiep').value;

    // Cập nhật preview
    document.getElementById('previewNguoiNhan').textContent = nguoiNhan;
    document.getElementById('previewLoiChuc').textContent = loiChuc;
    document.getElementById('previewNguoiGui').textContent = nguoiGui;

    // Thay đổi style theo mẫu thiệp
    const previewThiep = document.getElementById('previewThiep');
    previewThiep.className = 'thiep-preview ' + mauThiep;

    // Hiệu ứng tạo thiệp
    previewThiep.style.opacity = '0';
    setTimeout(() => {
        previewThiep.style.opacity = '1';
    }, 100);

    return false;
}

// Cập nhật preview realtime
document.getElementById('nguoiNhan').addEventListener('input', function(e) {
    document.getElementById('previewNguoiNhan').textContent = e.target.value || '___________';
});

document.getElementById('loiChuc').addEventListener('input', function(e) {
    document.getElementById('previewLoiChuc').textContent = e.target.value || 'Nhập lời chúc của bạn...';
});

document.getElementById('nguoiGui').addEventListener('input', function(e) {
    document.getElementById('previewNguoiGui').textContent = e.target.value || '___________';
});
