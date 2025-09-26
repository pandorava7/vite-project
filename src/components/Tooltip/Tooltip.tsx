import { useState } from 'react';
import type { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  infoText: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ infoText, children, position = 'top' }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {showTooltip && (
        <div className={`tooltip ${position} ${showTooltip ? 'open':''}`}>
          {infoText}
          <div className={`arrow ${position}`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
