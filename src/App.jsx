const decedents = [
    {
        id: 1, propertyId: "1004408149", decedentName: 'Russell, Earl Lewis', probateDate: new Date('2018-06-19'), receivedDate: new Date('2020-01-29'),
    },
    {
        id: 2, propertyId: "1024717749", decedentName: '(PIFER) CHAPMAN LUELLA DEANE', probateDate: new Date('2021-09-08'), receivedDate: new Date('2023-01-11'),
    }
];

class DecendentIndex extends React.Component {
    render() {
        return (
            <div>This is a placeholder for decedentindex table</div>
        );
    }
}

class DecedentRow extends React.Component {
    render() {
        const decedent = this.props.decedent;
        return (
            <tr>
                <td>{decedent.id}</td>
                <td>{decedent.propertyId}</td>
                <td>{decedent.decedentName}</td>
                <td>{decedent.probateDate.toDateString()}</td>
                <td>{decedent.receivedDate ? decedent.receivedDate.toDateString() : ''}</td>
            </tr>
        );
    }
}

class DecedentTable extends React.Component {
    render() {
        const decedentRows = decedents.map(decedent =>
            <DecedentRow key={decedent.id} decedent={decedent} />
        );

        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Property ID</th>
                        <th>Decedent</th>
                        <th>Probate Date</th>
                        <th>Received Date</th>
                    </tr>
                </thead>
                <tbody>
                    {decedentRows}
                </tbody>
            </table>
        );
    }
}

class DecedentAdd extends React.Component {
    render() {
        return ( 
            <div>Placeholder for a frm to add a decedent </div>
        );
    }
}

class DecedentList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Decedent Index</h1>
                <DecendentIndex />
                <hr />
               <DecedentTable />
               <hr />
               <DecedentAdd />
                </React.Fragment>
        );
    }
}
    const element = <DecedentList />;

    ReactDOM.render(element, document.getElementById('contents'));