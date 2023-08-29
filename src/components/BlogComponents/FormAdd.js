import ClayForm, { ClayInput } from "@clayui/form"
import React, { useState, useEffect } from "react"

export default function FormAdd(props) {
  const [active, setActive] = useState(false)
  const [json, setJson] = useState({
    articleBody: "",
    headline: "",
  })
  useEffect(() => {}, [])

  return (
    <ClayForm>
      <ClayForm.Group className="form-group-sm">
        <label htmlFor="headline">Headline</label>
        <ClayInput
          onInput={(event) => {
            const newJson = { ...json, headline: event.target.value }
            setJson(newJson)
            props.handleJson(newJson)
          }}
          placeholder="Headline"
          type="text"
        ></ClayInput>
      </ClayForm.Group>
      <ClayForm.Group className="form-group-sm">
        <label htmlFor="articleBody">Article Body</label>
        <ClayInput
          onInput={(event) => {
            const newJson = { ...json, articleBody: event.target.value }
            setJson(newJson)
            props.handleJson(newJson)
          }}
          placeholder="Article Body"
          type="text"
        ></ClayInput>
      </ClayForm.Group>
    </ClayForm>
  )
}

/* */
