import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon
} from 'native-base';
export default class FooterDefault extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="logo-facebook"/>
                        </Button>
                        <Button>
                            <Icon name="logo-twitter"/>
                        </Button>
                        <Button active>
                            <Icon active name="logo-instagram"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}