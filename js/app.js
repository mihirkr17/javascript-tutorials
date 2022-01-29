// Theme Toggler End......
const checkBox = document.querySelector('.checkbox');

let theme = localStorage.getItem("theme");

if (theme) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (theme === "dark") {
        checkBox.checked = true;
    }
}

checkBox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("theme");
    }
});
// Theme Toggler Start......

// Round Circle Box Start....
const roundCircel = document.querySelector('.round_circel');
function abd () {
    return `
    <div class="centerCircle">
        <div class="circel">
          <div class="orange"></div>
          <div class="blue"></div>
          <div class="red"></div>
          <div class="hotpink"></div>
        </div>
      </div>
    `;
}
roundCircel.innerHTML = abd();
// Round Circle Box End....
