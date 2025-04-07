// 태그 데이터 (예제)
const pages = {
    "정부 24 사용법": "arrange/page/page1.html",
    "2": "arrange/page/page2.html",
    "3": "arrange/page/page3.html",
    "소개": "arrange/page/page1.html",
    "설명": "arrange/page/page2.html",
    "정보": "arrange/page/page3.html"
};

// 페이지 이동 함수
function navigateTo(page) {
    window.location.href = page;
}

// 검색 기능
function searchTags() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    if (query) {
        Object.keys(pages).forEach(tag => {
            if (tag.includes(query)) {
                let listItem = document.createElement("li");
                listItem.textContent = tag;
                listItem.onclick = () => navigateTo(pages[tag]);
                suggestions.appendChild(listItem);
            }
        });
    }
}
