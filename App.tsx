import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Tile from './src/components/Tile';
import {alpha} from './src/utils/board';
import board1 from './src/utils/test-board-1.json';
import board2 from './src/utils/test-board-2.json';
import styles from './src/styles/App';
import words from './src/utils/dictionary.json';

const boardNames = ['Board 1', 'Board 2', 'Random Board'];

const App = () => {
  const [word, setWord] = useState('');
  const [tileBoard, setTileBoard] = useState<any>([]);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [valid, setValid] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const tileTouched = (value: string, i: number, j: number) => {
    setWord(word + value);
    setX(i);
    setY(j);
    setValid(words.words.includes((word + value).toLowerCase()));
  };

  const cleanWord = () => {
    setWord('');
    setX(0);
    setY(0);
    setValid(false);
  };

  const fisherYatesShuffle = (arr: string[]) => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const loadBoard = (b: number) => {
    const newArr = [];
    let board = [];

    switch (b) {
      case 1:
        board = board1.board.slice();
        break;
      case 2:
        board = board2.board.slice();
        break;
      default:
        board = fisherYatesShuffle(alpha).slice().splice(0, 16);
        break;
    }

    while (board.length) {
      newArr.push(board.splice(0, 4));
    }
    setTileBoard(newArr);
    setShowSelect(false);
  };

  const newBoard = () => {
    setShowSelect(true);
    setWord('');
    setX(0);
    setY(0);
    setValid(false);
  };

  useEffect(() => {
    const newArr = [];
    const board = fisherYatesShuffle(alpha).slice().splice(0, 16);
    while (board.length) {
      newArr.push(board.splice(0, 4));
    }
    setTileBoard(newArr);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.closeBtn} onPress={cleanWord}>
          <Text style={styles.closeText}>clear word</Text>
          <View style={styles.xContainer}>
            <Text style={styles.xText}>X</Text>
          </View>
        </TouchableOpacity>
        {!showSelect ? (
          tileBoard.map((row: {[x: string]: string}, i: number) => (
            <View style={styles.tilesRow}>
              {tileBoard.map((col: any, j: number) => (
                <Tile
                  key={`${i}${j}`}
                  label={row[j]}
                  word={word}
                  i={i}
                  j={j}
                  x={x}
                  y={y}
                  tileTouched={tileTouched}
                  valid={valid}
                />
              ))}
            </View>
          ))
        ) : (
          <View style={styles.selectBoardContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowSelect(false)}>
              <Text style={styles.closeText}>Close</Text>
              <View style={styles.xContainer}>
                <Text style={styles.xText}>X</Text>
              </View>
            </TouchableOpacity>
            {boardNames.map((b, i) => (
              <TouchableOpacity
                style={styles.selectBtn}
                onPress={() => loadBoard(i + 1)}>
                <Text style={styles.selectText}>{b}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={styles.wordContainer}>
          <Text
            style={[
              styles.wordText,
              valid ? styles.greenText : styles.redText,
            ]}>
            {word}
          </Text>
          <Text
            style={[
              styles.wordValid,
              valid ? styles.greenText : styles.redText,
            ]}>
            {valid ? 'valid' : 'invalid'}
          </Text>
        </View>

        <TouchableOpacity style={styles.closeBtn} onPress={newBoard}>
          <Text style={styles.closeText}>New Board</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
