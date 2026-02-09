import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { styles } from '../src/styles/styles';

const SIZE = 240;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const TimerScreen = () => {
  const [input, setInput] = useState('60');
  const [time, setTime] = useState(60000);
  const [totalTime, setTotalTime] = useState(60000);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeRef = useRef<number>(0);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  const progress = totalTime === 0 ? 0 : time / totalTime;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      const remaining = endTimeRef.current - Date.now();

      if (remaining <= 0) {
        clearInterval(intervalRef.current!);
        setTime(0);
        setRunning(false);
      } else {
        setTime(remaining);
      }
    }, 200);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  const start = () => {
    if (!running && time > 0) {
      endTimeRef.current = Date.now() + time;
      setRunning(true);
    }
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    const newTime = Number(input) * 1000;
    setRunning(false);
    setTotalTime(newTime);
    setTime(newTime);
  };

  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', backgroundColor: '#fff' },
      ]}
    >
      <Svg width={SIZE} height={SIZE}>
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#ccc"
          strokeWidth={STROKE}
          fill="none"
        />

        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#4FC3F7"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>

      <Text
        style={{
          marginTop: 16,
          fontSize: 32,
          fontWeight: '600',
          color: '#000',
          marginBottom:5
        }}
      >
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        placeholder="Enter seconds"
        style={styles.timeInput}
      />

      <TouchableOpacity onPress={start} style={styles.btnstart}>
        <Text style={styles.btntext}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={stop} style={styles.btnstop}>
        <Text style={styles.btntext}>Stop</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reset} style={styles.btnreset}>
        <Text style={styles.btntext}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerScreen;
