import * as React from "react";
import {connect} from 'react-redux';
import LoaderComponent from '../loader/loader.component';

class TransactionListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        let score = {loading: false};
        if (score.loading) {
            return (<LoaderComponent/>);
        }
        else {
            return (
                <ul className="merchants">
                    <li>
                        <button>Merchant name</button>

                        <table className="transaction-list">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="description">Ipsum</td>
                                    <td className="category">Dolar</td>
                                    <td className="amount">$10.00</td>
                                    <td className="ethiscore">62</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            );
        }
    }
}

export default connect((state) => ({}))(TransactionListComponent);