import React from 'react';
import { Container, Col } from 'reactstrap'


export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Container className="item-home">
            <Col>
                <img src={this.props.src}/>
            </Col>
            <Col>
                Hi Hi
            </Col>
        </Container>
    }
}