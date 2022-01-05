import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/Tile';

export interface IItem {
  label: string;
  word: string;
  tileTouched: (value: string, i: number, j: number) => void;
  i: number;
  j: number;
  x: number;
  y: number;
  valid: boolean;
}

const Tile: React.FC<IItem> = ({
  label,
  word,
  tileTouched,
  i,
  j,
  x,
  y,
  valid,
}) => {
  const [touched, setTouched] = useState(false);

  const touchTile = () => {
    setTouched(true);
    tileTouched(label, i, j);
  };

  const gradientColor = () => {
    if (valid) {
      return ['#B3EC51', '#439422'];
    }
    return ['#F34F5E', '#A0051C'];
  };

  useEffect(() => {
    if (word === '') {
      setTouched(false);
    }
  }, [word]);

  return (
    <TouchableOpacity
      onPress={touchTile}
      disabled={
        (word !== '' &&
          !(
            (i === x && j === y - 1) ||
            (i === x && j === y + 1) ||
            (i === x - 1 && j === y) ||
            (i === x + 1 && j === y) ||
            (i === x - 1 && j === y - 1) ||
            (i === x + 1 && j === y + 1) ||
            (i === x + 1 && j === y - 1) ||
            (i === x - 1 && j === y + 1)
          )) ||
        touched
      }>
      <LinearGradient
        colors={touched ? gradientColor() : ['#FAD35D', '#F76F1F']}
        style={[styles.linearGradient, {borderWidth: touched ? 0 : 3}]}>
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Tile;
