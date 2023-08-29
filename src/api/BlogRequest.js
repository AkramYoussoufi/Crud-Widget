export function getBlogs() {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/blog-postings",
    {
      method: "GET",
    }
  ).then((res) => res.json())
}

export function createBlog(json) {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/blog-postings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    }
  ).then((res) => res.json())
}

export function updateBlog() {}

export function deleteBlog(id) {
  return Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/" + id, {
    method: "DELETE",
  }).then(console.log("Item deleted"))
}
