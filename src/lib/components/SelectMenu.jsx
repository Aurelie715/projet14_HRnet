import React, { useState } from "react";

export default function SelectMenu({list}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>testtest</span>
        <em></em>
      </div>
      {isOpen ? 
      (<div>
        <ul>
          <li>{list}</li>
        </ul>
      </div>) : null}
    </div>
  );
}
