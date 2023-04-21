import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerNav from './drawerNav';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.icons}>
        {isDrawerOpen && <View style={styles.overlay}/>}
        <Modal visible={isDrawerOpen} transparent={true} animationType='slide'>
            <DrawerNav />
            <TouchableOpacity onPress={toggleDrawer} style={styles.closeButton}>
                <Icon name="times" size={30} color="#fff" />
            </TouchableOpacity>
        </Modal>


        <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
            <Icon name="bars" size={30} color="#fff" />
        </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.streakBox}>
          <Text style={styles.streakNumber}>3</Text>
          <Icon name="fire" size={22} color="#000" />
        </View>
        <Icon name="user-circle" size={30} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  hamburger: {
    marginRight: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 2,
  },
  streakBox: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});

export default Header;




