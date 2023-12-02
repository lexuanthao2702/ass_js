const btnNext = document.querySelector(".icon-right");
const btnPre = document.querySelector(".icon-left");
const sliderMain = document.querySelector(".main-slider");
const widthSlider = document.querySelector(".slider").clientWidth; // clientWidth => do lường chiều rộng bên trong phần tử
const itemSliders = document.querySelectorAll(".item-slider");
btnNext.addEventListener("click", () => {
  sliderShow(1);
});
btnPre.onclick = () => {
  sliderShow(-1);
};
let positionX = 0;
let index = 0;
function sliderShow(direction) {
  if (direction == 1) {
    if (index >= itemSliders.length - 1) {
      return;
    } else {
      positionX -= widthSlider;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    }
  } else {
    if (index <= 0) {
      return;
    } else {
      positionX += widthSlider;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
  }
}

// time sale
const time_sale = document.querySelector(".time-sale");
let minute = 30,
  second = 0;

setInterval(() => {
  if (second == 0) {
    second = 59;
    minute--;
  } else {
    second--;
  }
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let timer = `${minute} : ${second}`;
  time_sale.innerText = timer;
}, 1000);

// đăng ký
// Bắt đầu kiểm tra khi form được submit
document.querySelector(".submit").addEventListener("click", function (e) {
  // Lấy giá trị của các trường input
  const fullName = document.querySelector(".fullName").value;
  const email = document.querySelector(".email").value;
  const phone = document.querySelector(".phone").value;

  // Kiểm tra xem các trường cần được điền đầy đủ
  if (!fullName || !email || !phone) {
    alert("Vui lòng điền đầy đủ thông tin ở các trường bắt buộc.");
    e.preventDefault(); // Ngăn chặn việc submit form
  }

});


const thoitrangimgs = document.querySelectorAll("#thoitrangimgs");

thoitrangimgs.forEach((img) => {
  // Sử dụng sự kiện 'mouseover' để thêm hiệu ứng khi rê chuột vào ảnh
  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.1)";
  });

  // Sử dụng sự kiện 'mouseout' để loại bỏ hiệu ứng khi rê chuột ra khỏi ảnh
  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1.0)";
  });
});

