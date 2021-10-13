import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const DemoFunctional = () => {
    const [input1, setInput1] = useState(1)
    const [toggle, setToggle] = useState(true)
    const [input2, setInput2] = useState(0)

    useEffect(() => {
        setInput2(1)
    }, [])

    useEffect(() => {
        console.log('Toggle!')
    }, [toggle])

    useEffect(() => {
        console.log('Renderizou')
    })

    useEffect(() => {
        setInput2(input2 + 1)
    }, [input1])

    return (
        <View>
            <Text>DemoFunctional</Text>
            <Text>{input1}</Text>
            <Button title='Click me!' onPress={() => setInput1(input1 + 1)}></Button>
            {toggle && <Text>Estou aparecendo</Text>}
            <Button title='Change toggle' onPress={() => setToggle(prevToggle => !prevToggle)}></Button>
            <Text>{input2}</Text>
        </View>
    )
}

export default DemoFunctional
