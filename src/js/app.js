window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js')
    } catch (e) {
      console.log('Service worker register fail')
    }
  }

  await loadPosts()
})


async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
  const data = await res.json()

  const container = document.querySelector('#posts')
  container.innerHTML = data.map(post => toCard(post)).join('\n')
}

function toCard(post) {
  return `
    <div class="card">
      <div class="card-title">
        ${post.title}
      </div>
      <div class="card-body">
        ${post.body}
      </div>
    </div>
  `
}


