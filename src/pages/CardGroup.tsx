import React, { ReactNode } from 'react';

interface CardGroupProps {
  label?: string;
  value: string;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  onClick: (value: string) => void;
  children: ReactNode[];
}

const CardGroup = ({ mt, ml, mb, mr, onClick, children }: CardGroupProps) => {
  return (
    <div
      className="flex flex-col"
      style={{ marginTop: mt, marginLeft: ml, marginBottom: mb, marginRight: mr }}
    >
      <div>
        {children
          ?.filter((child): child is React.ReactElement<CardGroupProps> =>
            React.isValidElement(child),
          )
          .map((child) =>
            React.cloneElement(child, {
              key: child.props.value,
              onClick: onClick,
            }),
          )}
      </div>
    </div>
  );
};

CardGroup.displayName = 'CardGroup';

export default CardGroup;
