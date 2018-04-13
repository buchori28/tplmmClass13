import React, { Component } from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

import styles from '../screens/styles';

class BannerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        ModalVisibleStatus: false 
    };
  }
 
  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
  }
 
  render() {
    const {params} = this.props.navigation.state;
    var image = params.image;
    var name = params.name;
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" /> 
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title style={styles.header_title}>{name}</Title>
          </Body>
          <Right />
            <Button transparent onPress={() => this.props.navigation.navigate("EventAdd")}>
              <Icon name="md-more"/>
            </Button>
      </Header>
        <Content style={styles.promo_content}>
          <Image source={image} style={styles.promo_image}/>
            <Text style={styles.promo_layout_p} note>Tentang</Text>
            <Text numberOfLines={1} style={{color: '#eb2024', fontSize: 20, paddingBottom: 25,}}>PT Yuasa Battery Indonesia</Text>
            <Text style={styles.promo_layout_p} numberOfLines={50} note>
                PT. Yuasa Battery Indonesia didirikan di Tangerang pada tanggal 14 Mei 1975. Pada masa awal pendirian, produksinya dimulai dari pembuatan aki mobil dengan target pasar domestik. </Text>
              <Text style={styles.promo_layout_p} numberOfLines={50} note>
                Seiring dengan perkembangannya yang pesat dan produknya yang semakin mendapat kepercayaan dari pelanggan. PT. Yuasa Battery Indonesia mulai mengembangkan proses produksinya ke berbagai produk aki mobil dan motor. Saat ini PT. Yuasa Battery Indonesia memproduksi aki untuk kebutuhan pasar domestik, Original Equipment Manufacturer (OEM), Industrial dan pasar luar negeri (ekspor). </Text>
              <Text style={styles.promo_layout_p} numberOfLines={50} note>
                Hal ini semakin mengukuhkan citra YUASA sebagai brand aki dengan kualitas tinggi dan dapat diandalkan. Hal ini tentu saja tidak lepas dari kinerja tim manajemen yang profesional dalam menghadapi segala arus perubahan dan tantangan pasar global. PT. Yuasa Battery Indonesia telah memperoleh sertrfikasi ISO 9001:2008  dan  ISO 14001: 2004 yang  menunjukkan  kualitas  dan  konsistensi  tim  manajemen YUASA dalam  melayani pelanggan.</Text>
              <Text style={styles.promo_layout_p} numberOfLines={50} note>
                Dalam 40 tahun berdirinya PT. Yuasa Battery Indonesia, saat ini PT. Yuasa Battery Indonesia telah berhasil mengekspansi pasarnya hingga ke luar negeri dan telah menyebar ke 5 benua.</Text>
              <Text style={styles.promo_layout_p} numberOfLines={50} note>
                Kualitas produk yang baik, pelayanan yang memuaskan, dan pengiriman yang tepat waktu adalah filosofi kerja yang selalu dipegang teguh oleh seluruh elemen tim PT. Yuasa Battery Indonesia.</Text>
              <Text style={styles.promo_layout_p} numberOfLines={50} note>
                PT. Yuasa Battery Indonesia akan terus meningkatkan kualitas produk dan pelayanan untuk memastikan kepuasan pelanggan terpenuhi.</Text>
        </Content>
          <Footer style={{height: 25}}>
              <FooterTab>
                <Button active full danger>
                </Button>
              </FooterTab>
          </Footer>
      </Container>
    );
  }
}

export default BannerDetail;