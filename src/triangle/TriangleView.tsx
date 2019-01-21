import * as React from "react";
import TriangleModel from "./TriangleModel";
import { Side } from "./enum";

type State = {
    info: string;
}

type Props = {
    model: TriangleModel
}

export default class extends React.Component<Props, State> {
    state: State = {
        info: ''
    }

    onCheckButtonClick() {
        this.props.model.commitSides();
        var info = this.props.model.getTriangleTypes();
        this.setState({ info })
    }

    onKeyDown(e: any) {

    }

    onSideChange(side: Side, value: string) {
        console.log("on side change " + side + " val " + value);
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            this.setState({ info: "" })
            this.props.model.setSide(side, parsed);
        } else {
            //TODO show error
        this.setState({ info: "Invalid input" })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Please input triangle sides:</span>
                                <input
                                    type="text"
                                    className="side-a white-text"
                                    placeholder="a"
                                    onKeyDown={this.onKeyDown}
                                    onChange={(e) => {
                                        this.onSideChange(Side.sideA, e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="side-b white-text"
                                    placeholder="b"
                                    onKeyDown={this.onKeyDown}
                                    onChange={(e) => {
                                        this.onSideChange(Side.sideB, e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="side-c white-text"
                                    placeholder="c"
                                    onKeyDown={this.onKeyDown}
                                    onChange={(e) => {
                                        this.onSideChange(Side.sideC, e.target.value);
                                    }}
                                />
                                <a className="waves-effect waves-light btn" onClick={this.onCheckButtonClick.bind(this)}>Check</a>
                                <p className="white-text">{this.state.info}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}