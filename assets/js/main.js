const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");
const flexChild = document.getElementsByClassName("flex-child");
for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    flexParent.style.flexDirection = event.target.dataset.flexDirection;

    for (const child of flexChild) {
      child.style.display = "flex";
      if (
        flexParent.style.flexDirection === "row" ||
        flexParent.style.flexDirection === "row-reverse"
      ) {
        child.style.width = "25px";
        child.style.height = "95%";
      } else {
        child.style.height = "18px";
        child.style.width = "98%";
      }
    }

    for (const btn of btns) {
      btn.style.color = "";
      btn.style.backgroundColor = "#fff";
    }
    event.target.style.backgroundColor = "rgb(108, 201, 254)";
    event.target.style.color = "#fff";
  });
}
