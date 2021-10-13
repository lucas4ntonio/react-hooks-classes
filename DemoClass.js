import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

class DemoClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input1: 'Initial',
            toggle: false,
            input2: undefined,
            text: ''
        }
    }

    componentDidMount() {
        console.log('Mountou!')
        this.setState({ input2: 'OI!' })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Update!')

        if (prevState.input1 !== this.state.input1) {
            this.setState({ input2: 'alguma coisa' })
        }
    }

    componentWillUnmount() {

    }

    render() {
        console.log('Renderizou!')
        return (
            <View>
                <Text>DemoClass</Text>
                <Text>{this.state.input1}</Text>
                <Button title='Click me!' onPress={() => this.setState({ input1: 'qualquer valor' })}></Button>
                {this.state.toggle && <Text>Estou aparecendo</Text>}
                <Button title='Toggle' onPress={() => this.setState({ toggle: !this.state.toggle })}></Button>
                <Text>{this.state.input2}</Text>
                <TextInput
                    value={this.state.text}
                    onChange={(text) => this.setState({ text })}
                ></TextInput>
            </View>
        )
    }
}

export default DemoClass
