import React, { useState, useEffect } from "react"
import Documents from "./components/Documents"
import Blog from "./components/Blog"
import ClayTabs from "@clayui/tabs"
import Knowledge from "./components/Knowledge"

export default function App() {
  const [active, setActive] = useState(0)

  return (
    <>
      <ClayTabs active={active} onActiveChange={setActive}>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-1",
          }}
        >
          Documents
        </ClayTabs.Item>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-2",
          }}
        >
          Blogs
        </ClayTabs.Item>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-3",
          }}
        >
          Knowledge Base
        </ClayTabs.Item>
      </ClayTabs>
      <ClayTabs.Content activeIndex={active} fade>
        <ClayTabs.TabPane aria-labelledby="tab-1">
          <Documents></Documents>
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-2">
          <Blog></Blog>
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-3">
          <Knowledge></Knowledge>
        </ClayTabs.TabPane>
      </ClayTabs.Content>
    </>
  )
}
