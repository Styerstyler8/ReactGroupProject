import React from 'react';
import { Form } from 'react-bootstrap';

class GuessNumberSlot extends React.Component {
    constructor(props) {
        super(props);

        
    }

    sendDigit = (event) => {
        this.props.getDigit(event.target.value, this.props.id);
    };

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control as="select" onChange={this.sendDigit}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default GuessNumberSlot;