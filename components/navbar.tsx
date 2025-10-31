import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const NAV_ITEMS = [
    { key: 'home', icon: 'home', label: 'Home' },
    { key: 'search', icon: 'search', label: 'Buscar' },
    { key: 'favorites', icon: 'favorite', label: 'Favoritos' },
    { key: 'notifications', icon: 'notifications', label: 'Alertas' },
    { key: 'profile', icon: 'person', label: 'Perfil' },
];

interface NavbarProps {
    onTabChange?: (key: string) => void; // para avisar al padre si cambia la pestaña
}

export default function Navbar({ onTabChange }: NavbarProps) {
    const [activeTab, setActiveTab] = useState('home');
    const indicatorX = useSharedValue(0);
    const navWidth = (width - 40) / NAV_ITEMS.length;

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(indicatorX.value, { duration: 300 }) }],
    }));

    const handleTabPress = (key: string, index: number) => {
        setActiveTab(key);
        indicatorX.value = navWidth * index;
        onTabChange?.(key);
    };

    return (
        <BlurView intensity={90} tint="light" style={styles.navbar}>
            <Animated.View
                style={[styles.activeIndicator, { width: navWidth }, indicatorStyle]}
            />
            {NAV_ITEMS.map((item, index) => (
                <Pressable
                    key={item.key}
                    style={styles.navButton}
                    onPress={() => handleTabPress(item.key, index)}
                >
                    <MaterialIcons
                        name={item.icon as any}
                        size={28}
                        color={activeTab === item.key ? '#007AFF' : '#666'}
                    />
                    <Text
                        style={[
                            styles.navText,
                            { color: activeTab === item.key ? '#007AFF' : '#666' },
                        ]}
                    >
                        {item.label}
                    </Text>
                </Pressable>
            ))}
        </BlurView>
    );
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 40,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 8,
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
    },
    activeIndicator: {
        position: 'absolute',
        height: 3,
        bottom: 8,
        left: 0,
        backgroundColor: '#007AFF',
        borderRadius: 2,
    },
});
