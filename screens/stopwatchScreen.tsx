import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../src/styles/styles';

const StopwatchScreen = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number>(0);

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    useEffect(() => {
        if (!running) return;

        intervalRef.current = setInterval(() => {
            setTime(Date.now() - startTimeRef.current);
        }, 10);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [running]);

    const start = () => {
        if (!running) {
            startTimeRef.current = Date.now() - time;
            setRunning(true);
        }
    };

    const stop = () => {
        setRunning(false);
    };

    const reset = () => {
        setRunning(false);
        setTime(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}:
                {String(milliseconds).padStart(2, '0')}
            </Text>

            <View style={{ alignItems: 'center' }}>
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
        </View>
    );
};

export default StopwatchScreen;
