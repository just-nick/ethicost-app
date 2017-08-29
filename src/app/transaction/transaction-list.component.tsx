import * as React from "react";
import {connect} from 'react-redux';
import LoaderComponent from '../loader/loader.component';
import { MerchantActions } from "./transaction.actions";

class TransactionListComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.dispatch(MerchantActions.get());
        this.state = {};
    }

    public merchant(merchant: any, i: number) {
        if(merchant.merchantName == "") {
            return "";
        }
        return(<li>
            <button onClick={() => {this.show(i)}}>
                {merchant.merchantName}
                <span>{merchant.rating}</span>
            </button>

            <table className={this.hidden(i)}>
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

    public hidden(i: number) {
        if(i === this.state.currentlyOpen){
            return "";
        }

        return "hidden";
    }

    public show(i: number) {
        if(this.state.currentlyOpen === i){
            this.setState({currentlyOpen: -1});
        }
        else {
            this.setState({currentlyOpen: i});
        }
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
                <div>
                    <h2>My spending</h2>
                    <ul className="merchants">
                        {score.merchants.map((merchant: any, i: number) => this.merchant(merchant, i))}
                    </ul>
                </div>
            );
        }
    }
}

export default connect((state) => ({
    merchant: state.merchantReducer
}))(TransactionListComponent);