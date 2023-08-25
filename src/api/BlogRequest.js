export function getBlog() {}

export function createBlog(json) {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/blog-postings",
    {
      method: "POST",
      body: json,
    }
  ).then((res) => res.json())
}

export function updateBlog() {}

export function deleteBlog() {}
