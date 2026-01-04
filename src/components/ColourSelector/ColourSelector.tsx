import { ThemeColourType } from '../../types';

import styles from './ColourSelector.module.css';

interface ColourSelectorProps {
  selectedColour: ThemeColourType;
  colours: readonly ThemeColourType[];
  onSelectColour: (colour: ThemeColourType) => void;
  className?: string;
}

export const ColourSelector = ({
  selectedColour,
  colours,
  onSelectColour,
  className,
}: ColourSelectorProps) => {
  console.log(selectedColour);

  return (
    <div className={[className, styles.colourSelector].join(' ')}>
      {colours.map(colour => (
        <div
          key={colour}
          onClick={() => onSelectColour(colour)}
          className={[
            styles.colourOption,
            selectedColour === colour ? styles.selected : '',
          ].join(' ')}
        >
          <div className={[styles[colour], styles.colourOptionInner].join(' ')} />
        </div>
      ))}
    </div>
  );
};
