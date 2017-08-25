import * as React from "react";
import {connect} from 'react-redux';
import LoaderComponent from '../loader/loader.component';
import { MerchantActions } from "./transaction.actions";

class TransactionListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(MerchantActions.get());
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
                        <button>
                            Merchant name
                            <span>62</span>
                        </button>

                        <table className="transaction-list">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="description">Ipsum</td>
                                    <td className="category">Dolar</td>
                                    <td className="amount">$10.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            );
        }
    }
}

export default connect((state) => ({
    merchant: state.merchantStore
}))(TransactionListComponent);