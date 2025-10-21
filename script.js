(function () {
  const cw4 = document.createElement("button");
  cw4.id = "cw4";
  cw4.textContent = "Pobierz posty z GitHuba";
  document.body.appendChild(cw4);

  const answer = document.getElementById("answer");

  cw4.addEventListener("click", async function () {
    answer.textContent = "Loading…";

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/Kamivarr/json-server/posts",
      );
      const posts = await response.json();

      console.log(posts); // pokazuje wszystkie posty
      console.log(posts[0].title); // pierwszy tytuł

      const html = posts
        .map(
          (post) => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `,
        )
        .join("");

      answer.innerHTML = html;
    } catch (error) {
      console.error("Błąd:", error);
      answer.textContent = "Wystąpił błąd podczas pobierania danych.";
    }
  });
})();
