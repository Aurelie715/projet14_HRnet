import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SelectMenu({ list = [], value, classNameSelect, classNameValue, classNameIcon, classNameListContainer, classNameList, classNameElement, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const onOptionClick = (listElement) => {
    setCurrentValue(listElement);
    setIsOpen(false);
    if (onChange) {
      onChange(listElement);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".hrnet-oc-select")) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className="hrnet-oc-select">
      <div className={classNameSelect} onClick={() => setIsOpen(!isOpen)} tabIndex="0">
        <span className={classNameValue}>{currentValue}</span>
        <em className={classNameIcon}>{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</em>
      </div>
      {isOpen ? (
        <div className={classNameListContainer}>
          <ul className={classNameList}>
            {list.sort().map((listElement, index) => {
              return (
                <li className={classNameElement} key={index} onClick={() => onOptionClick(listElement)}>
                  {listElement}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
