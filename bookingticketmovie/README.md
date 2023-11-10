# Trang web đặt vé xem phim - Reactjs
![Booking Ticket Movie](/frontend/public/images/bookingmovie.png

* Ngôn ngữ chính: JavaScript ( ES6 )

* Library chính: Reactjs ( React Hook )

* Library, Framework và công nghệ khác được dùng: 
    + React-redux & @reduxjs/toolkit
    + React-router-dom
    + React-slick
    + Lodash   
    + Moment
    + Formik
    + Ant Design
    + Tailwind Css
    + Animate.css
    + Sweetalert2
    + SASS ( node-sass )
    + Fontawesome

=======================================

* Tất cả các trang đều được Responsive
* RESTful API

* Giao diện và chức năng phía NGƯỜI DÙNG: 
    - Trang chủ 
        + Chức năng đặt vé nhanh
        + Hiển thị danh sách phim đang chiếu và sắp chiếu
        + Danh sách các hệ thống rạp và cụm rạp
    - Trang chi tiết phim
        + Hiển thị thông tin cụ thể của phim
        + Hiển thị rạp và ngày giờ chiếu của phim
    - Trang đăng ký (form validation)
        + Các trường dữ liệu không được rỗng
        + Tài khoản không có khoảng cách
        + Họ tên không được có chữ số
        + Email phải đúng định dạng
        + Số điện thoại phải là chữ số và đủ 10 số
        + Mật khẩu từ 6 đến 50 ký tự, có chữ thường, chữ hoa, số, ký tự đặc biệt 
    - Trang đăng nhập (form validation)
        + Các trường dữ liệu không được rỗng
        + Tài khoản không có khoảng cách
        + Mật khẩu từ 6 đến 50 ký tự
        + Đăng nhập xong load lại trang vẫn giữ trạng thái đăng nhập
    - Trang đặt vé
        + Cần đăng nhập mới vào được trang đặt vé 
        + Hiển thị danh sách ghế và trạng thái của ghế 
        + Trạng thái ghế: đã đặt, đang chọn, chưa đặt, ghế đã được tài khoản này đặt
        + Hiển thị tổng tiền
        + Chức năng đặt vé và cập nhật vào lịch sử đặt vé
    - Trang thông tin người dùng
        + Cần đăng nhập mới vào được trang thông tin 
        + Hiển thị thông tin người dùng
    - Trang lịch sử đặt vé
        + Hiển thị ghế, tên phim, tên rạp của các vé đã đặt
    - Trang not found
        + Trang hiển thị khi người dùng vào sai đường dẫn
    - Trang tin tức 
    - Trang dowload app

* Giao diện và chức năng phía QUẢN TRỊ: 
    - Chỉ tài khoản quản trị mới vào được trang admin
    - Quản lý phim:  
        + Thêm phim
        + Cập nhật phim
        + Thêm lịch chiếu cho phim
        + Xóa phim
    - Quản lý người dùng
        + Thêm người dùng
        + Cập nhật thông tin người dùng
        + Xóa người dùng
