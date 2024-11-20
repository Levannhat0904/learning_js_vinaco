
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
