import React, { useState } from "react";

const initialData = {
  parent: false,
  children: {
    child1: false,
    child2: false,
    child3: false,
  },
};

const NestedCheckbox = () => {
  const [checkboxState, setCheckboxState] = useState(initialData);

  const handleParentChange = () => {
    const newState = {
      parent: !checkboxState.parent,
      children: Object.fromEntries(
        Object.entries(checkboxState.children).map(([key]) => [
          key,
          !checkboxState.parent,
        ])
      ),
    };
    setCheckboxState(newState);
  };

  const handleChildChange = (childKey) => {
    const newChildrenState = {
      ...checkboxState.children,
      [childKey]: !checkboxState.children[childKey],
    };

    const allChecked = Object.values(newChildrenState).every(Boolean);
    const someChecked = Object.values(newChildrenState).some(Boolean);

    setCheckboxState({
      parent: allChecked,
      children: newChildrenState,
      indeterminate: someChecked && !allChecked,
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxState.parent}
          ref={(el) => {
            if (el)
              el.indeterminate =
                !checkboxState.parent &&
                Object.values(checkboxState.children).some(Boolean);
          }}
          onChange={handleParentChange}
        />
        Parent
      </label>
      <div style={{ marginLeft: 20 }}>
        {Object.entries(checkboxState.children).map(([key, value]) => (
          <div key={key}>
            <label>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleChildChange(key)}
              />
              {key}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedCheckbox;
