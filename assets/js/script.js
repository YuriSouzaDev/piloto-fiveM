const skinContainer = document.querySelector(".skin-container");

function createElementSkin() {
  for (let i = 0; i <= 10; i++) {
    const article = document.createElement("article");

    article.innerHTML = `<article class="skin-box">
    <div class="skin-image">
        <div class="title-skin">
            <p>Skin name</p>
            <div>
                <button>
                    <img src="./assets/img/icons/garbage_icon.svg" alt="">
                </button>
                <button>
                    <img src="./assets/img/icons/eye_icon.svg" alt="">
                </button>
            </div>
        </div>
        <div class="skin-img">
            <img src="./assets/img/images/skin_1.png" alt="">
        </div>
    </div>
    <button class="wear-skin">Wear Skin</button>
</article>`;

    skinContainer.appendChild(article);
  }
}
createElementSkin();
