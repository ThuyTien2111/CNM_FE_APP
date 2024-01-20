# Zalochat - Mô tả Giao diện

## Giới Thiệu

Zalochat_FE là ứng dụng chat đơn giản được phát triển bằng React Native và Redux. Ứng dụng cho phép người dùng đăng ký, đăng nhập và gửi tin nhắn cho các người dùng khác.

## Các Màn Hình

### Màn hình Đăng Ký (SignIn)

Màn hình này cho phép người dùng tạo tài khoản mới bằng cách điền thông tin cần thiết như tên người dùng, số điện thoại và mật khẩu.

#### Các Chức Năng

1. **Kiểm tra số điện thoại hợp lệ:** Số điện thoại phải bắt đầu bằng số 0 và có từ 10 đến 11 chữ số.

2. **Kiểm tra mật khẩu hợp lệ:** Mật khẩu phải từ 8 ký tự trở lên và chứa ít nhất một chữ số.

3. **Kiểm tra trùng số điện thoại:** Nếu số điện thoại đã tồn tại trong danh sách người dùng (`userList`), hiển thị cảnh báo.

4. **Chuyển hướng đến màn hình Đăng Nhập (LogIn):** Sau khi đăng ký thành công, người dùng sẽ được chuyển hướng đến màn hình đăng nhập.

### Màn hình Đăng Nhập (LogIn)

Màn hình này cho phép người dùng đăng nhập vào tài khoản đã đăng ký trước đó.

#### Các Chức Năng

1. **Kiểm tra thông tin đăng nhập:** Kiểm tra xem số điện thoại và mật khẩu có khớp với thông tin trong danh sách người dùng hay không.

2. **Chuyển hướng đến màn hình Chính (Home):** Nếu đăng nhập thành công, người dùng sẽ được chuyển hướng đến màn hình chính của ứng dụng.

3. **Chuyển hướng đến màn hình Đăng Ký (SignIn):** Nếu người dùng chưa có tài khoản, họ có thể chuyển hướng đến màn hình đăng ký.

### Màn hình Chính (Home)

Màn hình này hiển thị danh sách tin nhắn và có tính năng tìm kiếm người dùng.

#### Các Chức Năng

1. **Tìm kiếm người dùng:** Người dùng có thể nhập tên người dùng hoặc số điện thoại để tìm kiếm người dùng khác.

2. **Hiển thị danh sách tin nhắn:** Sử dụng `FlatList` để hiển thị danh sách tin nhắn từ người dùng khác.

3. **Tính năng Chat:** Cho phép người dùng nhấn vào một tin nhắn để chuyển đến màn hình chat tương ứng.

## Các Thư Viện và Công Nghệ

1. **React Native:** Sử dụng để phát triển ứng dụng di động đa nền tảng.
2. **Redux:** Quản lý trạng thái ứng dụng.
3. **Expo:** Giúp dễ dàng phát triển ứng dụng React Native mà không cần cài đặt Android Studio hoặc Xcode.
4. **React Navigation:** Để quản lý các màn hình và điều hướng trong ứng dụng.
5. **@expo/vector-icons:** Thư viện cung cấp các biểu tượng vector cho ứng dụng.

## Hướng Dẫn Cài Đặt và Chạy

1. Clone repository về máy tính: `git clone https://github.com/ThuyTien2111/CNM_FE_APP.git`
2. Cài đặt các dependencies: `npm install`
3. Chạy ứng dụng: `npm run web`

## Góp Ý và Đóng Góp

Nếu bạn có bất kỳ ý kiến hoặc đóng góp nào, hãy tạo [issue](<link-to-repository>/issues) hoặc tạo pull request. Chúng tôi rất hoan nghênh đóng góp từ cộng đồng.

Figma: https://www.figma.com/file/lLGpiPH3qWusQtP0j0Bg0t/CNM_ProjectCK?type=design&node-id=102%3A113&mode=design&t=lGUVuZ1OqqAtfeju-1
