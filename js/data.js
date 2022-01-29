const allData = [
    {
        subTitle: "For Practice"
    }
]

const mainBody = document.querySelector(".sub_title");
let dataMap = allData.map(item => {
    const {subTitle} = item;
    return `
        ${subTitle}
    `
});
mainBody.innerHTML = dataMap.join("");

