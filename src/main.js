
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { orderBy } from '@progress/kendo-data-query';

import products from './products.json';

class App extends React.Component {
    state = {
        sort: [
            { field: 'ProductName', dir: 'asc' }
        ]
    }
    render() {
        return (
            <Grid
                style={{ height: '300px' }}
                data={orderBy(products, this.state.sort)}
                sortable
                sort={this.state.sort}
                onSortChange={(e) => {
                    this.setState({
                        sort: e.sort
                    });
                }}
            >
                <Column field="ProductID" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" />
            </Grid>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

