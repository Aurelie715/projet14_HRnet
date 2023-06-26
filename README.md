# select-menu-hrnet-oc

Customizable selection menu

## Installation

`npm install select-menu-hrnet-oc`

## Usage

Use it in your app :

```js
import React, { useState } from "react";
import { SelectMenu } from "select-menu-hrnet-oc";

const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];

export default function App() {
    const [department, setDepartment] = useState("Engineering");

    return (
        <div>
            <Select
            list={departments}
            value={department}
            onChange={(department) => setDepartment(department)}
            classNameSelect="class-name-select"
            classNameValue="class-name-value"
            classNameIcon="class-name-icon"
            classNameListContainer="class-name-container"
            classNameList="class-name-list"
            classNameElement="class-name-element"
            />
        <div/>
    );
}
```

### Props

Common props you may want to specify include:

- `list` : An array of strings corresponding to the various select options
- `value` : The default selected value
- `onChange` : A callback function to handle change events

#### Customising the style

By default there is no style in this package, to customize it use the props classNames :

- `classNameSelect` : Correspond to the className of the select field
- `classNameValue` : Correspond to the current value of the field
- `classNameIcon` : Correspond to the icons arrow up and arrow down on the field
- `classNameListContainer` : Correspond to the container of select options when open
- `classNameList` : Correspond to the <ul> tag of the list of select options when open
- `classNameElement` : Correspond to the <li> tag to the select options when open
