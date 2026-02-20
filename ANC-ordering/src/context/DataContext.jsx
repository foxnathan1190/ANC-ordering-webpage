import React, { createContext, useContext, useEffect, useState } from 'react';
import { getItems, placeOrder } from '../api';

const DataContext = createContext();

export function DataProvider({ children }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState({});
    const [message, setMessage] = useState(null);

    const refresh = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getItems();
            setItems(data);
        } catch (e) {
            setError(e.message || String(e));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { refresh(); }, []);

    const toggleSelect = (id) => {
        setSelected(prev => {
            const copy = { ...prev };
            if (copy[id]) delete copy[id];
            else copy[id] = 1;
            return copy;
        });
    };

    const setQty = (id, qty) => {
        setSelected(prev => ({ ...prev, [id]: Math.max(1, parseInt(qty || 1, 10)) }));
    };

    const submitOrder = async () => {
        const itemsPayload = Object.entries(selected).map(([id, qty]) => ({ id: Number(id), quantity: qty }));
        if (!itemsPayload.length) {
            setMessage('Select at least one item.');
            return null;
        }
        try {
            const res = await placeOrder({ items: itemsPayload });
            setMessage(`Order placed (id ${res.orderId})`);
            setSelected({});
            return res;
        } catch (e) {
            setMessage(e.message || 'Order failed');
            return null;
        }
    };

    return (
        <DataContext.Provider value={{
            items, loading, error, selected, message,
            toggleSelect, setQty, submitOrder, refresh, setMessage
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}

export { DataContext };