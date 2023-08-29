import ClayTable from "@clayui/table"
import React, { useState, useEffect } from "react"
import DocumentsRequest, {
  createDocument,
  deleteDocument,
  getDocuments,
} from "../api/DocumentsRequest"
import ClayLoadingIndicator from "@clayui/loading-indicator"

export default function Documents(props) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getDocuments().then((response) => {
      setData(response.items)
      setIsLoading(false)
    })
  }, [isLoading])

  return (
    <div>
      {isLoading ? (
        <ClayLoadingIndicator displayType="primary" shape="squares" size="md" />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              margin: "30px",
            }}
          >
            <input
              onChange={(event) => {
                createDocument(event.target.files[0])
                setIsLoading(true)
              }}
              type="file"
            ></input>
          </div>
          <ClayTable>
            <ClayTable.Head>
              <ClayTable.Row>
                <ClayTable.Cell expanded headingCell>
                  {"Creator"}
                </ClayTable.Cell>
                <ClayTable.Cell expanded headingCell>
                  {"File Name"}
                </ClayTable.Cell>
                <ClayTable.Cell headingCell>{"Created At"}</ClayTable.Cell>
                <ClayTable.Cell headingCell>{"Modified At"}</ClayTable.Cell>
                <ClayTable.Cell
                  style={{
                    textAlign: "center",
                  }}
                  headingCell
                >
                  {"Remove"}
                </ClayTable.Cell>
              </ClayTable.Row>
            </ClayTable.Head>
            <ClayTable.Body>
              {data.map((item, index) => (
                <ClayTable.Row key={index}>
                  <ClayTable.Cell>{item.creator.familyName}</ClayTable.Cell>
                  <ClayTable.Cell>{item.fileName}</ClayTable.Cell>
                  <ClayTable.Cell>{item.dateCreated}</ClayTable.Cell>
                  <ClayTable.Cell>{item.dateModified}</ClayTable.Cell>
                  <ClayTable.Cell className="actionRow">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            width: "200%",
                          }}
                          src="https://cdn.icon-icons.com/icons2/1808/PNG/512/trash-can_115312.png"
                          alt="Delete"
                          onClick={() => {
                            deleteDocument(item.id)
                            const newData = data.filter(
                              (item, id) => id != index
                            )
                            setData(newData)
                          }}
                        />
                      </button>
                    </div>
                  </ClayTable.Cell>
                </ClayTable.Row>
              ))}
            </ClayTable.Body>
          </ClayTable>
        </div>
      )}
    </div>
  )
}

/* */
