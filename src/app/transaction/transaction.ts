export class Merchant {
    public merchantName: string;
    public merchantDescription: string;
    public rating: number;
    public category: string;
    public transactionsResponses: Transaction[];
}

export class Transaction {
    public name: string;
    public description: string;
    public category: string;
    public amount: number;
}