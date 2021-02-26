import React from 'react'
import { Popover } from "react-bootstrap";
export default function popover_Tooltip() {
  return (
    <div>
      <Popover id="popover-basic">
      <Popover.Title as="h3">
        Translation
        <button
          type="button"
          onClick={() => document.body.click()}
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
    </div>
  )
}
