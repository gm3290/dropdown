import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import "./styles.scss";

type DropdownProps = {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  offset?: number;
};

export const Dropdown: FC<DropdownProps> = ({
  children,
  className,
  trigger,
  offset,
}) => {
  const [expanded, setExpanded] = useState(false);

  const cls = useMemo(() => {
    let base = "dropdown-wrapper";
    if (className) {
      base = `${base} ${className}`;
    }
    if (expanded) {
      base = `${base} expanded`;
    }
    return base;
  }, [className, expanded]);

  const handleMouseEnter = useCallback(() => {
    setExpanded(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <div className={cls} onMouseLeave={handleMouseLeave}>
      <div className='dropdown-trigger' onMouseEnter={handleMouseEnter}>
        {trigger}
      </div>
      <div className='dropdown-panel' style={{ paddingTop: offset }}>
        <div className='dropdown-panel-inner'>{children}</div>
      </div>
    </div>
  );
};
