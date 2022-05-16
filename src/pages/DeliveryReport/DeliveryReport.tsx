import * as Styles from './DeliveryReport.styles.ts';

const DeliveryReport = (): JSX.Element => {
    return (
        <div> 
            <Styles.HeaderContainer>
                <h1>Pier Cafe Inventory</h1>
            </ Styles.HeaderContainer>
            <br />
            <Styles.FormContainer >
                <h2>Report a delivery</h2>
                <select name="Item" />
                <input type="text" placeholder="input quantity..." />
                <button>Save</button>
            </ Styles.FormContainer>
            <Styles.ButtonsContainer>
                <button>Add a category</button>
                <button>Add a product</button>
                <button>Edit</button>
            </Styles.ButtonsContainer>
        </div>
     )
}

export default DeliveryReport;