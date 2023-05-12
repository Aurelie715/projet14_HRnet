import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function SelectMenu({list}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] =useState("");
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>{value}</span>
        <em>{isOpen ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown} />}</em>
      </div>
      {isOpen ? 
      (<div>
        <ul>
         {list.map((listElement, index)=>{
          return (<li key={index} onClick={() => setValue(listElement)}>{listElement}</li>)
         })}
        </ul>
      </div>) : null}
    </div>
  );
}
