export function getKnowledges() {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles",
    {
      method: "GET",
    }
  ).then((res) => res.json())
}

export function createKnowledge(json) {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    }
  ).then((res) => res.json())
}

export function updateKnowledge() {}

export function deleteKnowledge(id) {
  return Liferay.Util.fetch(
    "/o/headless-delivery/v1.0/knowledge-base-folders/" + id,
    {
      method: "DELETE",
    }
  ).then(console.log("Item deleted"))
}
