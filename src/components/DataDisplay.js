function DataDisplay({ data }) {
    return (
        <div>
            <h2>Data Sent:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export { DataDisplay };
