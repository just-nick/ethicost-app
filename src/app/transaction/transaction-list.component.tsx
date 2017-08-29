import * as React from "react";
import {connect} from 'react-redux';
import LoaderComponent from '../loader/loader.component';
import { MerchantActions } from "./transaction.actions";

class TransactionListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(MerchantActions.get());
    }

    public merchant(merchant: any) {
        console.log(merchant);
        if(merchant.merchantName == "") {
            return "";
        }
        return(<li>
            <button>
                {merchant.merchantName}
                <span>{merchant.score}</span>
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
                    {merchant.transactionResponses.map(this.transaction)}
                </tbody>
            </table>
        </li>)
    }

    public transaction(transaction: any) {
        return(
            <tr>
                <td className="description">{transaction.description}</td>
                <td className="category">{transaction.category}</td>
                <td className="amount">${transaction.amount}</td>
            </tr>
        );
    }

    public render() {
        let score = this.props.merchant;

        if (!score || score.loading) {
            return (<LoaderComponent/>);
        }
        else {
            return (
                <ul className="merchants">
                    {score.merchants.map((merchant: any) => this.merchant(merchant))}
                </ul>
            );
        }
    }
}

export default connect((state) => ({
    merchant: state.merchantReducer
}))(TransactionListComponent);