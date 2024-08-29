function VehiclesList() {
    const vehicles = ['fiat', 'audi', 'volvo'];
    const [cars, truck, cars1] = vehicles;

    return (
        <div>
            <h1>Vehicles List:</h1>
            <ul>
                <li>Cars1: {cars}</li>
                <li>Cars2: {truck}</li>
                <li>Cars3: {cars1}</li>
            </ul>
        </div>
    );
}

ReactDOM.render(<VehiclesList />, document.getElementById('root'));