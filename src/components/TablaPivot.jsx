import React from 'react';
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import tabla from '../assets/Tabla.json'

// see documentation for supported input formats
const data = tabla;

class TablaPivot extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <PivotTableUI
                data={data}
                onChange={s => this.setState(s)}
                {...this.state}
            />
        );
    }
}


export default TablaPivot