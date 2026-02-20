import React from 'react';
import { useData } from '../context/DataContext';

export default function ItemsList() {
    const { items, loading, error, selected, toggleSelect, setQty, submitOrder, message } = useData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map(it => (
                    <li key={it.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={!!selected[it.id]}
                                onChange={() => toggleSelect(it.id)}
                            />
                            {it.name} — ${it.price}
                        </label>
                        {selected[it.id] ? (
                            <input
                                type="number"
                                min="1"
                                value={selected[it.id]}
                                onChange={e => setQty(it.id, e.target.value)}
                                style={{ width: 60, marginLeft: 8 }}
                            />
                        ) : null}
                    </li>
                ))}
            </ul>

            <button onClick={submitOrder}>Place Order</button>
            {message && <div>{message}</div>}
        </div>
    );
}