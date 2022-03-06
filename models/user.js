module.exports = [
    {
        id: 1,
        email: 'test@example.com',
        password: '1234',
        currensy: '$',
        accounts: [
            {
                id: 1,
                income: 1000,
                expenses: [
                    {
                        id: 1,
                        category: 'Entertainment',
                        amount: 100
                    },
                    {
                        id: 2,
                        category: 'Car Rent',
                        amount: 200
                    }
                ]
            },
            {
                id: 2,
                income: 1200,
                expenses: [
                    {
                        id: 1,
                        category: 'Household',
                        amount: 50.3
                    },
                    {
                        id: 2,
                        category: 'Healthcare',
                        amount: 500
                    }
                ]
            }
        ]
    }
]