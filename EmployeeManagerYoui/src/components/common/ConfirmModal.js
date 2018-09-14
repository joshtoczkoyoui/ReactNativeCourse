import React from 'react';
import { Text, View, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, modalContainerStyle } = styles;

    return (
        <Modal
            animationType={'fade'}
            transparent
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={modalContainerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    modalContainerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        justifyContent: 'center',
    },
};

export { ConfirmModal };
