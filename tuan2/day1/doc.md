# phạm vi scope
phạm vi là khu vục trong code nơi một biến có thể dc truy cập và sử dụng
# phạm vi toàn cục
một biến được khai báo ở ngoài mọi hàm và block(khối code) là 1 biến toàn cục. nó có thể dc truy cập và sử dụng từ bất kì đâu trong code kể cả bên trong hàm
 - trước es6(2015) chỉ có 2 phạm vi là global scope và funtion scope. Es6 cung cấp 2 từ khoá let và const cho phép tạo biến có phạm vi khối. các biến sẽ dc khai báo trong 1 khối {} sẽ không được truy cập từ bên ngoài khối đó.
 -  phạm vi module(module scope): trong 1 module biến , hàm, hoặc các thành phần khác mà bạn khai báo chỉ có thể được sử dụng trong chính module đó, trừ khi chúng dc export để sử dụng ở 1 nơi khác. Để sử dụng modules trong trong 1 trang web, ta thêm thuộc tính type = "module" vào thẻ script trong html

 ### tổng kết:
 ## loại phạm vi: 
 1. Global scope
    - var, let, function, const:
        - khai báo không nằm trong bất kì hàm nào
        - khai báo không nằm trong bất kì khối nào
            - không áp dụng cho var
            - không áp dụng cho function(khi ở ngoài module)
        - khai báo không nằm trong bất kì module nào
 2. funtion scope
    - var, let, function, const:
        - khai báo bên trong thân hàm
 3. block scope
    - const, let (không nằm trong module):
        - khai báo nằm bên trong block
     - const, let, function  (trong module):
        - khai báo bên trong block
 4. module scope:
    - var, let, function, const:
        - khai báo nằm bên trong module( muốn sử dụng bên ngoài thì export)
 ## từ khoá khai báo:
 1. let
 2. const
 3. var
 4. function
 ## phân loại:
 - const, let: có phạm vi khối
 - var, function: có phạm vi hàm(function scope)
