import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

// import './App.css';
// import Graphics from "./components/Graphics"

class Home extends React.Component {
    componentDidMount() {
        this.props.requestApiData();
    }
    card = (x, i) => (
        <div key={x.id.value} >
            <h1>
                {x.typeOfRegister}
            </h1>
        </div>
    );
    person = (x, i) => (
        <div key={x.id.value} >
            <h1>
                {x.name.first}
            </h1>
        </div>
    );
    render() {
        const { results = [] } = this.props.data;

        return (
            <h1>
                {results.map(this.person)}
            </h1>
        );
    }
}


const mapStateToProps = state => ({data:state.data});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProp)(Home);
// function App() {
//   return (
//     <div className="App">
//         <Graphics></Graphics>
//     </div>
//   );
// }
//
// export default App;
