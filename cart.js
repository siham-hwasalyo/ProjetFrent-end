let count = 0;
    const counter = document.getElementById("count");
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        count++;
        counter.innerText = count;
      });
    });





    