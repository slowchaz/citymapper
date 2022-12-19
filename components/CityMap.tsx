import * as React from 'react';

interface Props {
  message: string;
}

const CityMap: React.FC<Props> = (props) => {
  return (
    <div>
      {props.message}
    </div>
  );
};

export default CityMap;
