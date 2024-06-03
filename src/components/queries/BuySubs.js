const BuySubscription = async (id) => {
    try {
        const response = await fetch('https://vm-c6638fea.na4u.ru/buy_subscription', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": id
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        console.log('Response data:', responseData);

        if (responseData.result !== null && responseData.result !== undefined) {
            return responseData.result;
        } else {
            throw new Error(responseData.error || 'Unknown error');
        }
    } catch (error) {
        console.error('Error during BuySubscription request:', error);
        throw new Error('Error during BuySubscription request');
    }
};

export default BuySubscription;
