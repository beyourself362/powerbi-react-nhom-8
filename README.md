# Power BI React Demo

## Giới thiệu

Ứng dụng mẫu dùng React để hiển thị dữ liệu từ Power BI API, hỗ trợ:

- Lấy dữ liệu thật từ Power BI qua Azure AD (OAuth2)
- Mock data cho phát triển giao diện khi chưa có token/API
- OLAP Demo: Pivot, Drill Down, Roll Up, Slice & Dice

## Yêu cầu

- Node.js >= v14, NPM hoặc Yarn
- Azure AD App đã đăng ký (Client ID, Tenant ID, Client Secret)

## Cài đặt

1. Clone repository:
   git clone https://github.com/username/powerbi-react-nhom-8.git
   cd powerbi-react-nhom-8

2. Cài dependencies:
    npm install

3. Tạo file .env ở root với nội dung:
    REACT_APP_TENANT_ID="<Tenant ID>"
    REACT_APP_CLIENT_ID="<Client ID>"
    REACT_APP_CLIENT_SECRET="<Client Secret>"
    REACT_APP_WORKSPACE_ID="<Workspace ID>"
    REACT_APP_DATASET_ID="<Dataset ID>"
    REACT_APP_TABLE_NAME="<Table Name>"
    REACT_APP_USE_MOCK=true  # true để dùng mock data
    REACT_APP_USE_OLAP=true  # true để bật OLAP demo

4. Khởi động dự án
    npm start
    Mở http:/localhost:3000 trong trình duyệt

Hướng dẫn sử dụng

Sau khi đã khởi động ứng dụng, bạn có thể tương tác với các tính năng sau:

1. Sử dụng Mock Data

Bật REACT_APP_USE_MOCK=true trong .env để load dữ liệu từ src/mock.json.

Dùng mock data để phát triển giao diện khi chưa có token/API thật.

Mở DevTools, kiểm tra console.log(rows) và console.log(process.env.REACT_APP_USE_MOCK) để debug.

2. Kết nối Power BI API thật

Đặt REACT_APP_USE_MOCK=false và cung cấp giá trị hợp lệ cho các biến môi trường: REACT_APP_TENANT_ID, REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_WORKSPACE_ID, REACT_APP_DATASET_ID, REACT_APP_TABLE_NAME.

Ứng dụng sẽ tự động lấy access_token qua MSAL và gọi Power BI REST API.

Mở DevTools, xem network call đến api.powerbi.com và kiểm tra header Authorization.

3. Tuỳ chỉnh giao diện

Sửa src/index.css hoặc component CSS/module để cập nhật style.

Import CSS mới bằng import './index.css'; ở src/index.js hoặc App.js.

Khởi động lại server (npm start) sau khi chỉnh sửa để áp dụng thay đổi.

4. OLAP Demo (Pivot Table)

Bật REACT_APP_USE_OLAP=true trong .env.

Component OlapDemo sẽ xuất hiện dưới bảng dữ liệu.

Pivot: kéo-thả trường trong Row Labels và Column Labels để hoán đổi.

Drill Down/Roll Up: sử dụng nút mở rộng/collapse trên nhóm dimension.

Slice & Dice: kéo trường vào Filter, chọn giá trị để lọc.

Aggregator: chọn Sum, Average, Count… từ dropdown.

Renderer: đổi view sang Heatmap, Bar Chart, Line Chart,… để demo.

Mọi thay đổi đều tự động phản ánh trên giao diện; có thể sao chép state JSON ở cuối pivot để lưu cấu hình.

License

MIT © [Hung Vu]
