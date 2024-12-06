import useData from "./DataContext.js" 

function InputCategoryAmounts() {
const { passData } = useData();
    return (
        <form onSubmit={passData}>
            <h3>Required Payments:</h3>
            <input
                type="number"
                name="RequiredPayments"
            />

            <h3>Other Spending</h3>
            <input
                type="number"
                name="OtherSpending"
            />

            <h3>Savings:</h3>
            <input
                type="number"
                name="Savings"
            />
            <br /><br />
            <button
                type="submit"
                name="Submit"
            >Submit</button>
        </form>
    );
}

export default { InputCategoryAmounts };