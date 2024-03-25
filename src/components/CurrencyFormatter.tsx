const CurrencyFormatter = ({ amount }: { amount: number }) => {
    const formattedAmount = amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return <span>{formattedAmount}</span>;
};

export default CurrencyFormatter;
