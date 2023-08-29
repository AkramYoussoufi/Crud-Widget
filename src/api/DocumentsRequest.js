export function getDocuments() {
  return Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/20119/documents", {
    method: "GET",
  }).then((res) => res.json())
}

export async function createDocument(file) {
  console.log(file)
  const formData = new FormData()
  formData.append("file", file)
  return Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/20119/documents", {
    method: "POST",
    body: formData,
  }).then((res) => {
    res.json()
  })
}

export function updateDocument() {}

export function deleteDocument(id) {
  return Liferay.Util.fetch("/o/headless-delivery/v1.0/documents/" + id, {
    method: "DELETE",
  }).then(console.log("Item deleted"))
}
