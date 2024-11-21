1. Thành phần cơ bản trong Event Loop

- Call Stack: Nơi chứa các hàm đang được thực thi.
- JavaScript thực thi từng hàm theo cơ chế LIFO (Last In, First Out).
- Task Queue (Macrotask Queue): Nơi chứa các callback của macrotask, như:
    - setTimeout
    - setInterval
    - setImmediate (chỉ trong Node.js)
    - I/O Callbacks (trong Node.js)
    - Xử lý giao diện DOM (UI Rendering)
- Microtask Queue: Nơi chứa các callback của microtask, như:
    - Promise.then/catch/finally
    - MutationObserver
    - queueMicrotask
2. Quy trình hoạt động của Event Loop

- Event Loop kiểm tra Call Stack.

    - Nếu Call Stack còn hàm cần thực thi, nó sẽ xử lý các hàm đó trước.
    - Nếu Call Stack trống, Event Loop sẽ kiểm tra tiếp Microtask Queue.
- Microtask Queue:

    - Tất cả các callback trong Microtask Queue sẽ được đưa vào Call Stack để thực thi trước khi chuyển sang Macrotask Queue.
    - Nếu một microtask sinh ra thêm microtask (như Promise.resolve().then(...) lồng nhau), nó sẽ được thêm ngay vào hàng đợi Microtask Queue và tiếp tục xử lý.

Task Queue (Macrotask):

    - Sau khi Call Stack và Microtask Queue đều trống, Event Loop mới chuyển sang xử lý Macrotask Queue.
    - Mỗi lần xử lý 1 macrotask, Event Loop sẽ quay lại kiểm tra Microtask Queue trước khi tiếp tục với các macrotask khác.


### Event Loop giúp JavaScript quản lý bất đồng bộ trong môi trường single-thread bằng cách chia tác vụ thành Microtask và Macrotask, ưu tiên thực thi Microtask trước trong mỗi chu kỳ lặp.