// Dữ liệu cần gửi
const newPost = {
    "userId": 10,
    "id": 101,
    "title": "Bài viết thử nghiệm",
    "body": "Đây là nội dung bài viết."
  };
  
  // Gửi dữ liệu bằng POST
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Bài viết đã được tạo:', data);
      // Hiển thị kết quả nếu cần
      alert('Bài viết mới được tạo với ID: ' + data.id);
    })
    .catch(error => {
      console.error('Có lỗi xảy ra:', error);
    });
//   fetch với get 
function fetchDataFromAPI(apiUrl) {
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Dữ liệu từ API:", data);
        })
        .catch((error) => {
            console.error("Lỗi khi gọi API:", error.message);
        });
  }
  
  // URL của API cần gọi
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  
  // Gọi hàm với URL
  fetchDataFromAPI(apiUrl);